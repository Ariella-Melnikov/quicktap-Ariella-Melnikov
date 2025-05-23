import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'
import AppLayout from './components/layout/AppLayout'
import GamePage from './pages/GamePage/GamePage'
import GameOverPage from './pages/GameOverPage/GameOverPage'
import LeaderboardPage from './pages/LeaderboardPage/LeaderboardPage'

function App() {
  return (
    <>
    <Routes>
    <Route path="/" element={<AppLayout><HomePage /></AppLayout>} />
       <Route path="/game" element={<AppLayout><GamePage /></AppLayout>} />
      <Route path="/gameover" element={<AppLayout><GameOverPage /></AppLayout>} />
      <Route path="/leaderboard" element={<AppLayout><LeaderboardPage /></AppLayout>} />
    </Routes>
      </>
  )
}

export default App