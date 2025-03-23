const BASE_URL = 'https://quicktap-backend-219181450324.us-central1.run.app/api'

interface SaveScorePayload {
  userId: string
  username: string
  score: number
}

export async function saveScore(payload: SaveScorePayload): Promise<boolean> {
  try {
    const res = await fetch(`${BASE_URL}/saveScore`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })

    const data = await res.json()
    return data.success
  } catch (err) {
    console.error('Failed to save score:', err)
    return false
  }
}