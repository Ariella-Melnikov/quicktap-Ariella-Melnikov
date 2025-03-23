import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { TextField, Button, Typography, Container } from '@mui/material'
import { registerUser } from '../services/user.service'
import './HomePage.scss'

export function HomePage() {
  const [username, setUsername] = useState('')
  const navigate = useNavigate()

  const handleStart = async () => {
    if (!username) return

    try {
      const userId = await registerUser(username)

      localStorage.setItem('username', username)
      localStorage.setItem('userId', userId)

      navigate('/game')
    } catch (err) {
      console.error('Failed to start game:', err)
    }
  }

  return (
    <Container className="home-page">
      <Typography variant="h3" gutterBottom>QuickTap</Typography>
      <TextField
        label="Enter your username"
        variant="outlined"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="username-input"
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleStart}
        className="start-button"
      >
        Start
      </Button>
    </Container>
  )
}