const BASE_URL = 'https://quicktap-backend-219181450324.us-central1.run.app/api'

export async function registerUser(username: string): Promise<string> {
  const res = await fetch(`${BASE_URL}/user`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username }),
  })

  if (!res.ok) throw new Error('Failed to register user')

  const data = await res.json()
  return data.userId
}