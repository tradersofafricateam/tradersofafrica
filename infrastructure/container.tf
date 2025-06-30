# ── Container Instance ──────────────────────────────────────────────────────
resource "azurerm_container_group" "aci" {
  name                = var.container_name
  resource_group_name = "rg-node-${var.random_string}"
  location            = var.location
  os_type             = "Linux"
  dns_name_label      = "marketplace${var.random_string}"
  ip_address_type     = "Public"

  container {
    name   = var.container_name
    image  = var.container_image
    cpu    = var.cpu
    memory = var.memory

    ports {
      port     = var.container_port
      protocol = "TCP"
    }

#    environment_variables = {
#      NODE_ENV   = var.node_env
#      PORT       = tostring(var.container_port)
#      DB_HOST    = azurerm_mysql_flexible_server.mysql.fqdn
#      DB_USER    = var.mysql_admin_user
#      DB_PASS    = var.mysql_admin_password
#      DB_NAME    = var.mysql_database_name
#      BLOB_URL   = azurerm_storage_account.blob.primary_blob_endpoint
#    }
  }

  image_registry_credential {
    server   = var.ghcr_registry_server
    username = var.ghcr_username
    password = var.ghcr_password
  }
}
