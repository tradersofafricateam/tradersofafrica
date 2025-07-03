###############################################################################
# 1) Create the Container Apps “environment”
###############################################################################
data "azurerm_container_app_environment" "env" {
  name                = "ca-env-${var.random_string}"
  resource_group_name = "rg-node-${var.random_string}"
}


###############################################################################
# 2) Define your Container App on the Consumption plan (scales to zero)
###############################################################################
resource "azurerm_container_app" "app" {
  name                         = var.container_name
  container_app_environment_id = data.azurerm_container_app_environment.env.id
  resource_group_name          = "rg-node-${var.random_string}"

  # only a single active revision
  revision_mode = "Single"
  secret {
    name = "ghcr-pat"
    value = var.ghcr_password
  }
  # enable external HTTP ingress
  ingress {
    allow_insecure_connections = false
    external_enabled           = true
    target_port                = var.container_port
    traffic_weight {
      latest_revision          = true
      percentage               = 100
    }
  }

  # registry creds for GHCR
  registry {
    server   = var.ghcr_registry_server
    username = var.ghcr_username
    password_secret_name = "ghcr-pat"
  }
  

  template {
    # autoscale rules: 0 → 1 replica, scale-to-zero when idle
    min_replicas = 1
    max_replicas = 5

    http_scale_rule {
      name = "http-scaling"
      concurrent_requests = "200"
    }

    # container spec
    container {
      name  = var.container_name
      image = var.container_image
      cpu    = var.cpu
      memory = "${var.memory}Gi"
      env {
        name  = "NODE_ENV"
        value = var.node_env
      }
      env {
        name  = "PORT"
        value = tostring(var.container_port)
      }
    }
  }
}

resource "azurerm_container_app_custom_domain" "domain" {
  name             = var.domain_name
  container_app_id = azurerm_container_app.app.id
  lifecycle {
    // When using an Azure created Managed Certificate these values must be added to ignore_changes to prevent resource recreation.
    ignore_changes = [certificate_binding_type, container_app_environment_certificate_id]
  }
}

resource "azapi_resource" "managed_cert" {
  name      = var.domain_name
  type      = "Microsoft.App/managedEnvironments/managedCertificates@2025-02-02-preview"
  parent_id = data.azurerm_container_app_environment.env.id
  location  = var.location

  body = {
    properties = {
      subjectName             = var.domain_name
      domainControlValidation = "TXT"
    }
  }
}
