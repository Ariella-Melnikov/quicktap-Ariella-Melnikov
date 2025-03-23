import { Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
// import { GamePage } from './pages/GamePage'
// import { LeaderboardPage } from './pages/LeaderboardPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      {/* <Route path="/game" element={<GamePage />} />
      <Route path="/leaderboard" element={<LeaderboardPage />} /> */}
    </Routes>
  )
}

export default App