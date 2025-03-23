const BASE_URL = 'https://quicktap-backend-219181450324.us-central1.run.app/api'

export async function getLeaderboard() {
  try {
    const res = await fetch(`${BASE_URL}/leaderboard`)
    const data = await res.json()
    return data.leaderboards
  } catch (err) {
    console.error('Failed to fetch leaderboard:', err)
    return []
  }
}