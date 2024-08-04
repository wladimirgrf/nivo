import { Role } from '@nivo/auth'

import { api } from './api-client'

interface FetchMembershipsResponse {
  memberships: {
    name: string | null
    id: string
    avatarUrl: string | null
    role: Role
    userId: string
    email: string
  }[]
}

export async function fetchMemberships(org: string) {
  const result = await api
    .get(`organizations/${org}/memberships`)
    .json<FetchMembershipsResponse>()

  return result
}
