import { Routes, Route } from 'react-router-dom'
import { SigninPage } from './pages/SigninPage/SigninPage'
import { AppHeader } from './components/AppHeader/AppHeader'
import { GamePage } from './pages/GamePage/GamePage'
import { GameOverPage } from './pages/GameOverPage/GameOverPage'
import { LeaderboardPage } from './pages/LeaderboardPage/LeaderboardPage'

function App() {
  return (
    <>
    <AppHeader />
    <Routes>
      <Route path="/" element={<SigninPage />} />
      <Route path="/game" element={<GamePage />} />
      <Route path="/gameover" element={<GameOverPage />} />
      <Route path="/leaderboard" element={<LeaderboardPage />} />
    </Routes>
      </>
  )
}

export default App