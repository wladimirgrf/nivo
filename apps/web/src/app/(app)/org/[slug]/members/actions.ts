'use server'

import { Role, roleSchema } from '@nivo/auth'
import { HTTPError } from 'ky'
import { revalidateTag } from 'next/cache'
import { z } from 'zod'

import { getCurrentOrg } from '@/auth/auth'
import { createInvite } from '@/http/create-invite'
import { removeMembership } from '@/http/remove-membership'
import { revokeInvite } from '@/http/revoke-invite'
import { updateMembership } from '@/http/update-membership'

const inviteSchema = z.object({
  email: z.string().email({ message: 'Invalid e-mail address.' }),
  role: roleSchema,
})

export async function createInviteAction(data: FormData) {
  const currentOrg = getCurrentOrg()
  const result = inviteSchema.safeParse(Object.fromEntries(data))

  if (!result.success) {
    const errors = result.error.flatten().fieldErrors

    return { success: false, message: null, errors }
  }

  const { email, role } = result.data

  try {
    await createInvite({
      org: currentOrg!,
      email,
      role,
    })

    revalidateTag(`${currentOrg}/invites`)
  } catch (err) {
    if (err instanceof HTTPError) {
      const { message } = await err.response.json()

      return { success: false, message, errors: null }
    }

    console.error(err)

    return {
      success: false,
      message: 'Unexpected error, try again in a few minutes',
      errors: null,
    }
  }

  return {
    success: true,
    message: 'Invitation created successfully',
    errors: null,
  }
}

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

export async function revokeInviteAction(inviteId: string) {
  const currentOrg = getCurrentOrg()

  await revokeInvite({
    org: currentOrg!,
    inviteId,
  })

  revalidateTag(`${currentOrg}/invites`)
}
