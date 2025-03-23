import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { startGame } from '../services/user.service'
import SendIcon from '@mui/icons-material/Send'
import { PrimaryButton } from '../components/buttons/PrimaryButton'
import './SigninPage.scss'

export function SigninPage() {
  const [username, setUsername] = useState('')
  const navigate = useNavigate()

  const handleStart = async () => {
    try {
      await startGame(username)
      navigate('/game')
    } catch (err) {
      console.error('Failed to start game:', err)
    }
  }

  return (
    <section className="home-page">
      <h1 className="main-title">Welcome to mavens Game</h1>

      <div className="user-card">
        <label htmlFor="username" className="input-label">Enter player name</label>
        <div className="input-row">
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="username-input"
            placeholder="Input"
          />
          <PrimaryButton onClick={handleStart} icon={<SendIcon />}>
            Start game
          </PrimaryButton>
        </div>
      </div>
    </section>
  )
}