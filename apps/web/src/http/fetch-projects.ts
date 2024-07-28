import { api } from './api-client'

interface FetchProjectsResponse {
  projects: {
    name: string
    id: string
    slug: string
    avatarUrl: string | null
    createdAt: string
    ownerId: string
    organizationId: string
    description: string
    owner: {
      name: string | null
      id: string
      avatarUrl: string | null
    }
  }[]
}

export async function fetchProjects(org: string) {
  const result = await api
    .get(`organizations/${org}/projects`)
    .json<FetchProjectsResponse>()

  return result
}
