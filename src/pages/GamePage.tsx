import { useEffect, useRef, useState } from 'react'
import { StoryBoard } from '../components/StoryBoard/StoryBoard'
import './GamePage.scss'

type GameState = 'waiting' | 'showing' | 'feedback'
type Direction = 'left' | 'right'
type FeedbackType = 'Too Soon' | 'Wrong Key' | 'Too Late' | 'Success' | null

export function GamePage() {
    const [gameState, setGameState] = useState<GameState>('waiting')
    const [direction, setDirection] = useState<Direction | null>(null)
    const [score, setScore] = useState(0)
    const [feedback, setFeedback] = useState<FeedbackType>(null)

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
        
        console.log('Debug:', {
            pressedKey: code,
            gameState: currentGameState,
            direction: currentDirection,
            isShowingState: currentGameState === 'showing'
        })
        
        if (currentGameState === 'waiting') {
            setFeedback('Too Soon')
            setGameState('feedback')
            clearTimeout(timeoutRef.current!)
            timeoutRef.current = window.setTimeout(startNewRound, 1000)
            return
        }
        
        if (currentGameState === 'showing' && currentDirection) {
            keyPressedRef.current = true
            
            const isLeftKey = code === 'KeyA'
            const isRightKey = code === 'KeyD'
            const isCorrect = (currentDirection === 'left' && isLeftKey) || (currentDirection === 'right' && isRightKey)
            
            console.log('Key Check:', {
                isLeftKey,
                isRightKey,
                direction: currentDirection,
                isCorrect
            })
            
            if (isCorrect) {
                setScore(prev => prev + 1)
                setFeedback('Success')
            } else {
                setFeedback('Wrong Key')
            }
            
            setGameState('feedback')
            clearTimeout(timeoutRef.current!)
            timeoutRef.current = window.setTimeout(startNewRound, 1000)
        }
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

    useEffect(() => {
        return () => {
            if (score > 0 && userId) {
                fetch('https://quicktap-backend-219181450324.us-central1.run.app/api/saveScore', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ userId, username, score }),
                }).catch(console.error)
            }
        }
    }, [score, userId, username])

    return (
        <div className='game-page'>
            <StoryBoard playerName={username} score={score}>
                <div className='game-container'>
                {direction && <div className={`color-mark ${direction} ${gameState}`} />}
                {feedback && <div className='feedback'>{feedback}</div>}
                </div>
            </StoryBoard>
        </div>
    )
}
