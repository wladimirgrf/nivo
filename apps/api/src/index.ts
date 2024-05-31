import { defineAbilityFor } from '@nivo/auth'

const ability = defineAbilityFor({ role: 'MEMBER', id: 'user-id' })

console.log(ability.can('manage', 'User'))
