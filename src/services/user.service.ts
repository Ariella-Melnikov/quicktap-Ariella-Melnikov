const BASE_URL = 'https://quicktap-backend-219181450324.us-central1.run.app/api'

export async function startGame(username: string): Promise<void> {
  if (!username.trim()) return

  const res = await fetch(`${BASE_URL}/user`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username }),
  })

  if (!res.ok) throw new Error('Failed to register user')

  const data = await res.json()
  localStorage.setItem('username', username)
  localStorage.setItem('userId', data.userId)
}