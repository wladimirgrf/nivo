import { api } from './api-client'

interface GetOrganizationResponse {
  organization: {
    id: string
    name: string
    slug: string
    domain: string | null
    avatarUrl: string | null
    createdAt: string
    updatedAt: string
    shouldAttachUsersByDomain: boolean
    ownerId: string
  }
}

export async function getOrganization(org: string) {
  const result = await api
    .get(`organizations/${org}`)
    .json<GetOrganizationResponse>()

  return result
}
