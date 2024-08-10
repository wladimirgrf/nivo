'use client'

import { Role } from '@nivo/auth'
import { ComponentProps } from 'react'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

import { updateMembershipAction } from './actions'

interface UpdateMembershipRoleSelectProps
  extends ComponentProps<typeof Select> {
  membershipId: string
}

export function UpdateMembershipRoleSelect({
  membershipId,
  ...props
}: UpdateMembershipRoleSelectProps) {
  async function updateMembershipRole(role: Role) {
    await updateMembershipAction(membershipId, role)
  }

  return (
    <Select onValueChange={updateMembershipRole} {...props}>
      <SelectTrigger className="h-8 w-32">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="ADMIN">Admin</SelectItem>
        <SelectItem value="MEMBER">Member</SelectItem>
        <SelectItem value="BILLING">Billing</SelectItem>
      </SelectContent>
    </Select>
  )
}
