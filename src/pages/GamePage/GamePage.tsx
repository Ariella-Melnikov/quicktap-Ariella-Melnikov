import { useEffect, useRef, useState } from 'react'
import { StoryBoard } from '../../components/StoryBoard/StoryBoard'
import { useNavigate } from 'react-router-dom'
import PrimaryButton from '../../components/buttons/PrimaryButton'
import { saveScore } from '../../services/saveScore.service'
import colorMarkIcon from '../../assets/icons/colorMark.svg'
import './GamePage.scss'

type GameState = 'waiting' | 'showing' | 'feedback'
type Direction = 'left' | 'right'
type FeedbackType = 'Too Soon' | 'Wrong Key' | 'Too Late' | 'Success' | null

export function GamePage() {
    const [gameState, setGameState] = useState<GameState>('waiting')
    const [direction, setDirection] = useState<Direction | null>(null)
    const [score, setScore] = useState(0)
    const [feedback, setFeedback] = useState<FeedbackType>(null)

    const navigate = useNavigate()

    const gameStateRef = useRef<GameState>('waiting')
    const directionRef = useRef<Direction | null>(null)

    const username = localStorage.getItem('username') || 'Player'
    const userId = localStorage.getItem('userId') || ''

    const timeoutRef = useRef<number | null>(null)
    const keyPressedRef = useRef<boolean>(false)

    const startNewRound = () => {
        setGameState('waiting')
        setFeedback(null)
        setDirection(null)
        directionRef.current = null
        keyPressedRef.current = false

        const waitTime = Math.random() * 3000 + 2000
        timeoutRef.current = window.setTimeout(() => {
            const newDir = Math.random() < 0.5 ? 'left' : 'right'
            setDirection(newDir)
            directionRef.current = newDir
            setGameState('showing')

            timeoutRef.current = window.setTimeout(() => {
                if (!keyPressedRef.current) {
                    setFeedback('Too Late')
                    setGameState('feedback')
                    timeoutRef.current = window.setTimeout(startNewRound, 1000)
                }
            }, 1000)
        }, waitTime)
    }

    const handleKeyPress = (event: KeyboardEvent) => {
        const currentGameState = gameStateRef.current
        const currentDirection = directionRef.current
        const code = event.code

        if (currentGameState === 'waiting') {
            setFeedback('Too Soon')
            setGameState('feedback')
            clearTimeout(timeoutRef.current!)

            // Start new round after 1 second
            timeoutRef.current = window.setTimeout(startNewRound, 1000)
            return
        }

        if (currentGameState === 'showing' && currentDirection) {
            keyPressedRef.current = true

            const isLeftKey = code === 'KeyA'
            const isRightKey = code === 'KeyD'
            const isCorrect = (currentDirection === 'left' && isLeftKey) || (currentDirection === 'right' && isRightKey)

            if (isCorrect) {
                setScore((prev) => prev + 1)
                setFeedback('Success')
            } else {
                setFeedback('Wrong Key')
            }

            setGameState('feedback')
            clearTimeout(timeoutRef.current!)
            timeoutRef.current = window.setTimeout(startNewRound, 1000)
        }
    }

    const handleGameOver = async () => {
        if (score > 0 && userId) {
            await saveScore({ userId, username, score })
        }
        localStorage.setItem('score', score.toString())
        navigate('/gameover')
    }

    useEffect(() => {
        gameStateRef.current = gameState
    }, [gameState])

    useEffect(() => {
        directionRef.current = direction
    }, [direction])

    useEffect(() => {
        window.addEventListener('keydown', handleKeyPress)
        startNewRound()

        return () => {
            window.removeEventListener('keydown', handleKeyPress)
            clearTimeout(timeoutRef.current!)
        }
    }, [])
    
    return (
        <div className='game-page'>
            <StoryBoard
                playerName={username}
                score={score}
                feedback={feedback}
                onCloseFeedback={() => setFeedback(null)}>
                <div className='game-container'>
                    {gameState === 'waiting' && <div className='waiting-loader' />}
                    <img 
                        src={colorMarkIcon} 
                        alt="color mark"
                        className={`color-mark ${direction || ''} ${gameState}`}
                    />
                </div>
                <div className='end-game-button'>
                    <PrimaryButton onClick={handleGameOver}>End Game</PrimaryButton>
                </div>
            </StoryBoard>
        </div>
    )
}
