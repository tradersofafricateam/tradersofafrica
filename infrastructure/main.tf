terraform {
   
  required_version = ">= 1.0"
  backend "azurerm" {
    resource_group_name  = "rg-node-4vxt"
    storage_account_name = "tfstateacct4vxt"
    container_name       = "tfstate"
    key                  = "envs/tradersofafrica.tfstate"
  } 
  required_providers {
    azapi = {
      source = "Azure/azapi"
      version = ">= 2.5.0"
    }
    azurerm = {
      source  = "hashicorp/azurerm"
      version = ">= 3.37.0"
    }
    random = {
      source  = "hashicorp/random"
      version = ">= 3.0"
    }
  }
}

provider "azurerm" {
  features {}
}




