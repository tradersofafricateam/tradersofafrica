# Infrastructure for Marketplace Frontend

This directory contains the Terraform configuration for deploying the Azure Container App infrastructure for the Marketplace Frontend (`tradersofafrica.com`).

## Contents
- **main.tf**: Terraform provider and backend configuration
- **container.tf**: Main resources for Azure Container App and environment
- **variables.tf**: Input variables for customization
- **outputs.tf**: Output values (e.g., app URL)

## Prerequisites
- [Terraform](https://www.terraform.io/downloads.html) >= 1.0
- Azure CLI (`az`)
- Access to an Azure subscription

## Usage
1. **Initialize Terraform**
   ```sh
   terraform init
   ```
2. **Plan the deployment**
   ```sh
   terraform plan
   ```
3. **Apply the configuration**
   ```sh
   terraform apply
   ```

This will provision:
- An Azure Container App Environment
- An Azure Container App (default: `femarketplace`)
- Required secrets and registry configuration

## Custom Domain and SSL Certificate
Azure Container Apps support custom domains and SSL certificates. While Terraform provisions the core infrastructure, you can bind a custom domain and enable SSL using the Azure CLI.

### Bind a Custom Domain and Certificate
After deploying with Terraform, run the following command to bind your custom domain and create a managed certificate:

```sh
export CERT_ID=$(az containerapp env certificate list \
  --resource-group rg-node-4vxt \
  --name ca-env-4vxt \
  --query "[?properties.subjectName=='tradersofafrica.com'].id | [0]" \
  --output tsv)
az containerapp hostname bind \
  --name tradersofafrica \
  --resource-group rg-node-4vxt \
  --hostname tradersofafrica.com \
  --environment ca-env-4vxt \
  --certificate $CERT_ID
```

This command will:
- Bind the domain `tradersofafrica.com` to your container app
- Create and assign a managed SSL certificate for HTTPS

**Note:**
- You may need to update your DNS records as instructed by Azure for domain validation.
- For more advanced certificate management (e.g., uploading your own cert), refer to the [Azure documentation](https://learn.microsoft.com/en-us/azure/container-apps/certificates).

## Outputs
- `container_app_url`: The FQDN of the deployed container app

---
For questions or issues, please contact the infrastructure team or consult the Azure documentation. do
