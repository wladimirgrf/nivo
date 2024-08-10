import { api } from './api-client'

interface RemoveMembershipRequest {
  org: string
  membershipId: string
}

export async function removeMembership({
  org,
  membershipId,
}: RemoveMembershipRequest) {
  await api.delete(`organizations/${org}/memberships/${membershipId}`)
}
