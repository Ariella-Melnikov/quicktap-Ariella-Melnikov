import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { saveScore } from '../../services/saveScore.service'
import colorMarkIcon from '../../assets/icons/colorMark.svg'
import PrimaryButton from '../../components/ui/PrimaryButton'
import StoryBoard from '../../components/StoryBoard/StoryBoard'
import { GameContainer, ColorMark, EndGameButton } from './GamePage.styled'
import WaitingLoader from '../../components/ui/WaitingLoader'

type GameState = 'waiting' | 'showing' | 'feedback'
type Direction = 'left' | 'right'
type FeedbackType = 'Too Soon' | 'Wrong Key' | 'Too Late' | 'Success' | null

const GamePage = () => {
    const [gameState, setGameState] = useState<GameState>('waiting')
    const [direction, setDirection] = useState<Direction | null>(null)
    const [score, setScore] = useState(0)
    const [feedback, setFeedback] = useState<FeedbackType>(null)

    const navigate = useNavigate()
    const username = localStorage.getItem('username') || 'Player'
    const userId = localStorage.getItem('userId') || ''

    const timeoutRef = useRef<number | null>(null)
    const gameStateRef = useRef(gameState)
    const directionRef = useRef(direction)
    const keyPressedRef = useRef(false)

    useEffect(() => {
        gameStateRef.current = gameState
        directionRef.current = direction
    }, [gameState, direction])

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
        const code = event.code

        if (gameStateRef.current === 'waiting') {
            setFeedback('Too Soon')
            setGameState('feedback')
            clearTimeout(timeoutRef.current!)
            timeoutRef.current = window.setTimeout(startNewRound, 1000)
            return
        }

        if (gameStateRef.current === 'showing' && directionRef.current) {
            keyPressedRef.current = true

            const isCorrect =
                (directionRef.current === 'left' && code === 'KeyA') ||
                (directionRef.current === 'right' && code === 'KeyD')

            setFeedback(isCorrect ? 'Success' : 'Wrong Key')
            if (isCorrect) setScore((prev) => prev + 1)

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
        window.addEventListener('keydown', handleKeyPress)
        startNewRound()

        return () => {
            window.removeEventListener('keydown', handleKeyPress)
            clearTimeout(timeoutRef.current!)
        }
    }, [])

    return (
        <StoryBoard playerName={username} score={score} feedback={feedback} onCloseFeedback={() => setFeedback(null)} onEndGame={handleGameOver} endGameBtnLabel='End Game'>
            <GameContainer>
                {gameState === 'waiting' && <WaitingLoader />}
                <ColorMark
                    src={colorMarkIcon}
                    alt='color mark'
                    $position={direction || 'left'}
                    $visible={gameState === 'showing'}
                />
            </GameContainer>
        </StoryBoard>
    )
}
export default GamePage
