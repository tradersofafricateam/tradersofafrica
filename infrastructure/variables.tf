# ── Variables ───────────────────────────────────────────────────────────────
variable "location" {
  type    = string
}

variable "container_name" {
  description = "Name of the Azure CI"
  type = string
}

variable "container_image" {
  description = "Full GHCR image (e.g. ghcr.io/ORG/REPO:TAG)"
  type        = string
}

variable "ghcr_registry_server" {
  description = "GHCR registry host"
  type        = string
  default     = "ghcr.io"
}

variable "ghcr_username" {
  description = "GitHub username (or GitHub App clientId) for GHCR"
  type        = string
}

variable "ghcr_password" {
  description = "PAT with read:packages scope for GHCR"
  type        = string
  sensitive   = true
}

variable "cpu" {
  description = "CPU for your container GB"
  type        = number
  default     = 0.5
}

variable "memory" {
  description = "Memory (GB) for your container"
  type        = number
  default     = 1.0
}

variable "container_port" {
  description = "Port your app listens on"
  type        = number
  default     = 80
}

variable "node_env" {
  description = "NODE_ENV for your app"
  type        = string
  default     = "production"
}

variable "random_string" {
  description = "The random string created from the main terraform config"
  type        = string
  default     = "4vxt"
}

variable "domain_name" {
  description = "The domain name to use for the container app"
  type        = string
}
