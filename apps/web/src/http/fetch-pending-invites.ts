import { Role } from '@nivo/auth'

import { api } from './api-client'

interface FetchPendingInvitesResponse {
  invites: {
    id: string
    email: string
    createdAt: string
    role: Role
    organization: { name: string }
    author: {
      name: string | null
      id: string
      avatarUrl: string | null
    } | null
  }[]
}

export async function fetchPendingInvites() {
  const result = await api
    .get(`pending-invites`)
    .json<FetchPendingInvitesResponse>()

  return result
}
