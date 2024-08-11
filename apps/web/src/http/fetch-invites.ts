import { Role } from '@nivo/auth'

import { api } from './api-client'

interface FetchInvitesResponse {
  invites: {
    id: string
    email: string
    role: Role
    createdAt: string
    author: { name: string | null; id: string } | null
  }[]
}

export async function fetchInvites(org: string) {
  const result = await api
    .get(`organizations/${org}/invites`, {
      next: {
        tags: [`${org}/invites`],
      },
    })
    .json<FetchInvitesResponse>()

  return result
}
