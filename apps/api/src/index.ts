import { ability } from '@nivo/auth'

const userCanInviteSomeoneElse = ability.can('invite', 'User')

const userCanDeleteOtherUsers = ability.can('delete', 'User')

console.log(userCanInviteSomeoneElse)

console.log(userCanDeleteOtherUsers)
