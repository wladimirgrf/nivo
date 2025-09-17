import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

import { sharedEnv } from './shared'

export const apiEnv = createEnv({
  emptyStringAsUndefined: true,
  extends: [sharedEnv],
  client: {},
  server: {
    DATABASE_URL: z.string().url(),
    JWT_SECRET: z.string(),
    PORT: z.coerce.number().default(3444),
    GITHUB_OAUTH_CLIENT_SECRET: z.string(),
  },
  runtimeEnv: {
    DATABASE_URL: process.env.DATABASE_URL,
    JWT_SECRET: process.env.JWT_SECRET,
    PORT: process.env.PORT,
    GITHUB_OAUTH_CLIENT_SECRET: process.env.GITHUB_OAUTH_CLIENT_SECRET,
  },
})
