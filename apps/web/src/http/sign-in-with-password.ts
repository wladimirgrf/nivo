import { env } from '@nivo/env'

import { api } from './api-client'

interface SignInWithPasswordRequest {
  email: string
  password: string
}

interface SignInWithPasswordResponse {
  token: string
}

export async function signInWithPassword({
  email,
  password,
}: SignInWithPasswordRequest) {
  console.log('Starting request to:', env.NEXT_PUBLIC_API_URL)

  const result = await api
    .post('sessions/password', {
      json: { email, password },
    })
    .json<SignInWithPasswordResponse>()

  return result
}
