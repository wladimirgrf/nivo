'use server'

import { Role } from '@nivo/auth'
import { revalidateTag } from 'next/cache'

import { getCurrentOrg } from '@/auth/auth'
import { removeMembership } from '@/http/remove-membership'
import { updateMembership } from '@/http/update-membership'

export async function removeMembershipAction(membershipId: string) {
  const currentOrg = getCurrentOrg()

  await removeMembership({
    org: currentOrg!,
    membershipId,
  })

  revalidateTag(`${currentOrg}/memberships`)
}

export async function updateMembershipAction(membershipId: string, role: Role) {
  const currentOrg = getCurrentOrg()

  await updateMembership({
    org: currentOrg!,
    membershipId,
    role,
  })

  revalidateTag(`${currentOrg}/memberships`)
}
