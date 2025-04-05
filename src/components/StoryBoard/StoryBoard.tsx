import { ReactNode } from 'react'
import PrimaryButton from '../ui/PrimaryButton'
import { StoryBoardContainer, Header, PlayerName, PlayerScore, Content, EndGameButton, PlayerNameWrapper } from './StoryBoard.styled'
import ToastMessage from '../ui/ToastMessage'

interface Props {
    playerName: string
    score: number
    showScoreInHeader?: boolean
    feedback: string | null
    onCloseFeedback: () => void
    children: ReactNode
    onEndGame?: () => void
    endGameBtnLabel?: string
}

const StoryBoard = ({
    playerName,
    score,
    feedback,
    onCloseFeedback,
    onEndGame,
    endGameBtnLabel,
    showScoreInHeader = false,
    children,
}: Props) => {
    return (
        <StoryBoardContainer>
            <Header $center={!showScoreInHeader}>
                <PlayerNameWrapper $center={!showScoreInHeader}>
                    <PlayerName>{playerName}</PlayerName>
                </PlayerNameWrapper>
                {showScoreInHeader && <PlayerScore>Score: {score}</PlayerScore>}
            </Header>

            <Content>{children}</Content>

            {feedback && (
                <ToastMessage
                    type={feedback === 'Success' ? 'success' : 'error'}
                    message={feedback}
                    onClose={onCloseFeedback}
                />
            )}

            {onEndGame && endGameBtnLabel && (
                <EndGameButton>
                    <PrimaryButton onClick={onEndGame}>{endGameBtnLabel}</PrimaryButton>
                </EndGameButton>
            )}
        </StoryBoardContainer>
    )
}

export default StoryBoard
