import { Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { AppHeader } from './components/AppHeader/AppHeader'
// import { GamePage } from './pages/GamePage'
// import { LeaderboardPage } from './pages/LeaderboardPage'

function App() {
  return (
    <>
    <AppHeader />
    <Routes>
      <Route path="/" element={<HomePage />} />
      {/* <Route path="/game" element={<GamePage />} />
      <Route path="/leaderboard" element={<LeaderboardPage />} /> */}
    </Routes>
      </>
  )
}

export default App