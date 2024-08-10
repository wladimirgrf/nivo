'use server'

import { revalidateTag } from 'next/cache'

import { getCurrentOrg } from '@/auth/auth'
import { removeMembership } from '@/http/remove-membership'

export async function removeMembershipAction(membershipId: string) {
  const currentOrg = getCurrentOrg()

  await removeMembership({
    org: currentOrg!,
    membershipId,
  })

  revalidateTag(`${currentOrg}/memberships`)
}
