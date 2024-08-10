import { Role } from '@nivo/auth'

import { api } from './api-client'

interface UpdateMembershipRequest {
  org: string
  membershipId: string
  role: Role
}

export async function updateMembership({
  org,
  membershipId,
  role,
}: UpdateMembershipRequest) {
  await api.put(`organizations/${org}/memberships/${membershipId}`, {
    json: { role },
  })
}
