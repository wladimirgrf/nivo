output "eks_cluster_name" {
  description = "Name of the EKS cluster"
  value       = aws_eks_cluster.main.name
}

output "ecr_repo_name" {
  description = "Name of the ECR repository"
  value       = aws_ecr_repository.api.name
}
