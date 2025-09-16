resource "aws_ecr_repository" "api" {
  name         = "nivo-api"
  force_delete = true

  image_scanning_configuration {
    scan_on_push = true
  }

  tags = {
    managed_by = "terraform"
  }
}
