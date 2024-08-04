import { api } from './api-client'

interface FetchOrganizationsResponse {
  organizations: {
    id: string
    name: string
    slug: string
    avatarUrl: string | null
  }[]
}

export async function fetchOrganizations() {
  const result = await api
    .get('organizations', {
      next: {
        tags: ['organizations'],
      },
    })
    .json<FetchOrganizationsResponse>()

  return result
}
