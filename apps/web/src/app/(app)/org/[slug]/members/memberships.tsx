import { organizationSchema } from '@nivo/auth'
import { ArrowLeftRight, Crown, UserMinus } from 'lucide-react'
import Image from 'next/image'

import { ability, getCurrentOrg } from '@/auth/auth'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table'
import { fetchMemberships } from '@/http/fetch-memberships'
import { getMembership } from '@/http/get-membership'
import { getOrganization } from '@/http/get-organization'

import { removeMembershipAction } from './actions'

export async function Memberships() {
  const currentOrg = getCurrentOrg()
  const permissions = await ability()

  const [{ membership: myMembership }, { memberships }, { organization }] =
    await Promise.all([
      getMembership(currentOrg!),
      fetchMemberships(currentOrg!),
      getOrganization(currentOrg!),
    ])

  const authOrganization = organizationSchema.parse(organization)

  return (
    <div className="space-y-2">
      <h2 className="text-lg font-semibold">Memberships</h2>

      <div className="rounded border">
        <Table>
          <TableBody>
            {memberships.map((membership) => {
              return (
                <TableRow key={membership.id}>
                  <TableCell className="py-2.5" style={{ width: 48 }}>
                    <Avatar>
                      <AvatarFallback />
                      {membership.avatarUrl && (
                        <Image
                          src={membership.avatarUrl}
                          width={32}
                          height={32}
                          alt=""
                          className="aspect-square size-full"
                        />
                      )}
                    </Avatar>
                  </TableCell>
                  <TableCell className="py-2.5">
                    <div className="flex flex-col">
                      <span className="inline-flex items-center gap-2 font-medium">
                        {membership.name}
                        {membership.userId === myMembership.userId && ' (me)'}
                        {organization.ownerId === membership.userId && (
                          <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                            <Crown className="size-3" />
                            Owner
                          </span>
                        )}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {membership.email}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell className="py-2.5">
                    <div className="flex items-center justify-end gap-2">
                      {permissions?.can(
                        'transfer_ownership',
                        authOrganization,
                      ) && (
                        <Button size="sm" variant="ghost">
                          <ArrowLeftRight className="nr-2 size-4" />
                          Transfer ownership
                        </Button>
                      )}

                      {permissions?.can('delete', 'User') && (
                        <form
                          action={removeMembershipAction.bind(
                            null,
                            membership.id,
                          )}
                        >
                          <Button
                            disabled={
                              membership.userId === myMembership.userId ||
                              membership.userId === organization.ownerId
                            }
                            type="submit"
                            size="sm"
                            variant="destructive"
                          >
                            <UserMinus className="mr-2 size-4" />
                            Remove
                          </Button>
                        </form>
                      )}
                    </div>
                  </TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
