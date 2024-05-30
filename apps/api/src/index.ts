import { defineAbilityFor } from '@nivo/auth'

const ability = defineAbilityFor({ role: 'MEMBER' })

const userCanInviteSomeoneElse = ability.can('invite', 'User')

const userCanDeleteOtherUsers = ability.can('delete', 'User')

console.log(userCanInviteSomeoneElse)

console.log(userCanDeleteOtherUsers)
