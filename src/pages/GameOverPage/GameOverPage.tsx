// pages/GameOverPage.tsx
import { useNavigate } from 'react-router-dom'
import { StoryBoard } from '../../components/StoryBoard/StoryBoard'
import PrimaryButton from '../../components/buttons/PrimaryButton'
import SecondaryButton from '../../components/buttons/SecondaryButton'
import SendIcon from '@mui/icons-material/Send'
import './GameOverPage.scss'

export function GameOverPage() {
    const username = localStorage.getItem('username') || 'Player'
    const score = localStorage.getItem('score') || '0'
    const navigate = useNavigate()
  
    const handleRestartGame = () => {
      navigate('/game')
    }
  
    const handleViewLeaderboard = () => {
      navigate('/leaderboard')
    }
  

    return (
        <div className='game-over-page'>
          <StoryBoard playerName={username} score={Number(score)}>
            <div className='game-over-content'>
              <h1 className='title'>GAME OVER!</h1>
              <h2 className='score-label'>
                Score: <span className='score-value'>{score}</span>
              </h2>
    
              <div className='action-buttons'>
                <SecondaryButton onClick={handleViewLeaderboard}>
                  High Score
                </SecondaryButton>
                <PrimaryButton onClick={handleRestartGame} startIcon={<SendIcon />}>
                  Restart Game
                </PrimaryButton>
              </div>
            </div>
          </StoryBoard>
        </div>
      )
    }
