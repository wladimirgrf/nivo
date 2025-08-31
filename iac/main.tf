terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 6.0"
    }
    kubernetes = {
      source  = "hashicorp/kubernetes"
      version = "~> 2.0"
    }
  }
  
  backend "s3" {
    bucket         = "nivo-tf-state"
    key            = "terraform.tfstate"
    region         = "us-east-1"
    dynamodb_table = "nivo-tf-locks"
    encrypt        = true
  }
}

provider "aws" {
  region = "us-east-1"
}
