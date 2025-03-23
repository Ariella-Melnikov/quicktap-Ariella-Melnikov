import { ReactNode } from 'react'
import { Alert, IconButton } from '@mui/material'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import CloseIcon from '@mui/icons-material/Close'
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline'
import './StoryBoard.scss'

interface StoryBoardProps {
    playerName: string
    score: number
    children: ReactNode
    feedback?: string | null
    onCloseFeedback?: () => void
}

export function StoryBoard({ playerName, score, children, feedback, onCloseFeedback }: StoryBoardProps) {
    const getFeedbackClass = (feedback?: string | null) => {
        if (feedback === 'Success') return 'feedback-success'
        if (feedback === 'Too Soon' || feedback === 'Too Late' || feedback === 'Wrong Key') return 'feedback-error'
        return ''
    }

    const getFeedbackIcon = (feedback?: string | null) => {
        if (feedback === 'Success') {
            return <CheckCircleIcon sx={{ color: '#4CAF50', mr: 1 }} />
        }
        if (feedback === 'Too Soon' || feedback === 'Too Late' || feedback === 'Wrong Key') {
            return <ErrorOutlineIcon sx={{ color: '#212121', mr: 1 }} />
        }
        return null
    }

    return (
        <div className='story-board'>
            <header className='story-board-header'>
                <span className='player-name'>{playerName}</span>
                <span className='score'>{score}</span>
            </header>

            <main className='story-board-content'>{children}</main>
            {feedback && (
                <Alert
                    className={`game-feedback ${getFeedbackClass(feedback)}`}
                    variant='outlined'
                    icon={getFeedbackIcon(feedback)}
                    onClose={onCloseFeedback}
                    action={
                        <IconButton aria-label='close' color='inherit' size='small' onClick={onCloseFeedback}>
                            <CloseIcon fontSize='inherit' />
                        </IconButton>
                    }>
                    {feedback}
                </Alert>
            )}
        </div>
    )
}
