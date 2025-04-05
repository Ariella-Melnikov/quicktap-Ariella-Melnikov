import { useNavigate } from 'react-router-dom'
import StoryBoard from '../../components/StoryBoard/StoryBoard'
import PrimaryButton from '../../components/ui/PrimaryButton'
import { GameOverContent, ButtonGroup } from './GameOverPage.styled'
import SecondaryButton from '../../components/ui/SecondaryButton'
import PageTitle from '../../components/ui/PageTitle'

const GameOverPage = () => {
    const username = localStorage.getItem('username') || 'Player'
    const score = localStorage.getItem('score') || '0'
    const navigate = useNavigate()

    const handleRestartGame = () => navigate('/game')
    const handleViewLeaderboard = () => navigate('/leaderboard')

    return (
        <StoryBoard playerName={username} score={parseInt(score)} showScoreInHeader={false} feedback={null} onCloseFeedback={() => {}}>
            <GameOverContent>
                <PageTitle color='red'>GAME OVER!</PageTitle>
                <PageTitle>{`Score: ${score}`}</PageTitle>

                <ButtonGroup>
                    <SecondaryButton onClick={handleViewLeaderboard}>High Score</SecondaryButton>
                    <PrimaryButton onClick={handleRestartGame}>Restart game</PrimaryButton>
                </ButtonGroup>
            </GameOverContent>
        </StoryBoard>
    )
}

export default GameOverPage
