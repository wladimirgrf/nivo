import { Role } from '@nivo/auth'

import { api } from './api-client'

interface FetchMembershipsResponse {
  memberships: {
    id: string
    userId: string
    email: string
    name: string | null
    avatarUrl: string | null
    role: Role
  }[]
}

export async function fetchMemberships(org: string) {
  const result = await api
    .get(`organizations/${org}/memberships`, {
      next: {
        tags: [`${org}/memberships`],
      },
    })
    .json<FetchMembershipsResponse>()

  return result
}
