import { api } from './api-client'

interface GetProfileResponse {
  user: {
    id: string
    email: string
    name: string | null
    avatarUrl: string | null
  }
}

export async function getProfile() {
  const result = await api.get('profile').json<GetProfileResponse>()

  return result
}
