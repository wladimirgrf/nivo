import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

export const sharedEnv = createEnv({
  emptyStringAsUndefined: true,
  client: {},
  server: {
    GITHUB_OAUTH_CLIENT_ID: z.string(),
    GITHUB_OAUTH_CLIENT_REDIRECT_URI: z.string(),
  },
  runtimeEnv: {
    GITHUB_OAUTH_CLIENT_ID: process.env.GITHUB_OAUTH_CLIENT_ID,
    GITHUB_OAUTH_CLIENT_REDIRECT_URI:
      process.env.GITHUB_OAUTH_CLIENT_REDIRECT_URI,
  },
})
