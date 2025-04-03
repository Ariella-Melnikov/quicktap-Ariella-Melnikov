import { Routes, Route } from 'react-router-dom'
// import { GamePage } from './pages/GamePage/GamePage'
// import { GameOverPage } from './pages/GameOverPage/GameOverPage'
// import { LeaderboardPage } from './pages/LeaderboardPage/LeaderboardPage'
import HomePage from './pages/HomePage/HomePage'
import AppLayout from './components/layout/AppLayout'

function App() {
  return (
    <>
    <Routes>
    <Route path="/" element={<AppLayout><HomePage /></AppLayout>} />
      {/* <Route path="/game" element={<GamePage />} />
      <Route path="/gameover" element={<GameOverPage />} />
      <Route path="/leaderboard" element={<LeaderboardPage />} /> */}
    </Routes>
      </>
  )
}

export default App