import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

import { sharedEnv } from './shared'

export const webEnv = createEnv({
  emptyStringAsUndefined: true,
  extends: [sharedEnv],
  client: {},
  shared: {
    NEXT_PUBLIC_API_URL: z.string().url(),
  },
  runtimeEnv: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  },
})
