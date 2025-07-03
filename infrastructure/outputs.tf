###############################################################################
# Outputs
###############################################################################
output "container_app_url" {
  # use ingress[0].fqdn for the stable, “portal” URL
  value = azurerm_container_app.app.ingress[0].fqdn
}

output "custom_container_app_url" {
  value = "https://${azurerm_container_app_custom_domain.domain.name}"
}

output "container_app_environment_custom_domain_verification_id" {
  description = "The ID required to verify custom domain ownership for the Container App Environment (for TXT record)."
  value       = "Create a TXT record to point asuid.${azurerm_container_app_custom_domain.domain.name} to ${data.azurerm_container_app_environment.env.custom_domain_verification_id}"
}
