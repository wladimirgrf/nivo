import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

const sharedEnv = createEnv({
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
