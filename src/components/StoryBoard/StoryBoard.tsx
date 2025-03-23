import { ReactNode } from 'react'
import './StoryBoard.scss'

interface StoryBoardProps {
  playerName: string
  score: number
  children: ReactNode
}

export function StoryBoard({ playerName, score, children }: StoryBoardProps) {
  return (
    <div className="story-board">
      <header className="story-board-header">
        <span className="player-name">{playerName}</span>
        <span className="score">{score}</span>
      </header>
      <main className="story-board-content">
        {children}
      </main>
    </div>
  )
} 