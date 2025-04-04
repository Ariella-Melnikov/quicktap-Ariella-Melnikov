// StoryBoard.tsx
import { ReactNode } from 'react'
import PrimaryButton from '../ui/PrimaryButton'
import {
    StoryBoardContainer,
    Header,
    PlayerName,
    PlayerScore,
    Content,
    EndGameButton,
} from './StoryBoard.styled'
import ToastMessage from '../ui/ToastMessage'
interface Props {
    playerName: string
    score: number
    feedback: string | null
    onCloseFeedback: () => void
    onEndGame: () => void
    endGameBtnLabel: string
    children: ReactNode
}

const StoryBoard = ({ playerName, score, feedback, onCloseFeedback, onEndGame, endGameBtnLabel, children }: Props) => {
    return (
        <StoryBoardContainer>
            <Header>
                <PlayerName>{playerName}</PlayerName>
                <PlayerScore>Score: {score}</PlayerScore>
            </Header>

            <Content>{children}</Content>

            {feedback && (
                <ToastMessage
                    type={feedback === 'Success' ? 'success' : 'error'}
                    message={feedback}
                    onClose={onCloseFeedback}
                />
            )}
            <EndGameButton>
                <PrimaryButton onClick={onEndGame}>{endGameBtnLabel}</PrimaryButton>
            </EndGameButton>
        </StoryBoardContainer>
    )
}

export default StoryBoard
