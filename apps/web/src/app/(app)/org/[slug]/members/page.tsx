import { ability } from '@/auth/auth'

import { Invites } from './invites'
import { Memberships } from './memberships'

export default async function MembersPage() {
  const permissions = await ability()

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Members</h1>

      <div className="space-y-4">
        {permissions?.can('get', 'Invite') && <Invites />}
        {permissions?.can('get', 'User') && <Memberships />}
      </div>
    </div>
  )
}
