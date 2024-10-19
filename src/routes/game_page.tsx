import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

type Player = 'Player 1' | 'Player 2'

interface GameState {
  board: number[][]
  currentPlayer: Player
  seedsInHand: number
  pits: number[][] // New state to track individual pits
}

export default function GamePage() {
  const initialBoard = Array(4).fill(null).map(() => Array(8).fill(2))
  const [gameState, setGameState] = useState<GameState>({
    board: initialBoard,
    currentPlayer: 'Player 1',
    seedsInHand: 0,
    pits: initialBoard, // Initialize pits with the same values as the board
  })

  const handlePitClick = (row: number, col: number) => {
    const newBoard = [...gameState.board]
    const seeds = newBoard[row][col]
    console.log(`Picked up ${seeds} seeds from pit at row ${row}, column ${col}`)
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-background to-secondary p-4">
      <h1 className="text-4xl font-bold mb-8 text-primary">Bawo Game</h1>
      
      <div className="mb-4 text-xl text-primary">
        Current Player: <span className="font-bold">{gameState.currentPlayer}</span>
      </div>
      
      <div className="mb-8 text-xl text-primary">
        Seeds in Hand: <span className="font-bold">{gameState.seedsInHand}</span>
      </div>
      
      <div className="grid grid-cols-8 gap-2 sm:gap-4 mb-8 bg-primary/20 p-4 sm:p-6 rounded-lg shadow-lg">
        {gameState.board.map((row, rowIndex) => 
          row.map((seeds, colIndex) => (
            <button
              key={`${rowIndex}-${colIndex}`}
              className="relative w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gradient-to-b from-primary/60 to-primary/90 rounded-full flex items-center justify-center text-sm sm:text-lg md:text-xl font-bold text-primary-foreground hover:from-primary hover:to-primary/80 transition-colors duration-200 shadow-inner pit-button"
              onClick={() => handlePitClick(rowIndex, colIndex)}
            >
              <div className="w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-primary-foreground/10 rounded-full flex items-center justify-center backdrop-blur-sm inner-pit">
                {seeds}
              </div>
            </button>
          ))
        )}
      </div>
      
      <Link to="/">
        <Button variant="outline" className="bg-primary text-primary-foreground hover:bg-primary/90">Back to Home</Button>
      </Link>

      <style>{`
        .pit-button {
          box-shadow: inset 0px 4px 6px rgba(0, 0, 0, 0.6), 0 4px 6px rgba(0, 0, 0, 0.1);
          background: radial-gradient(circle at center, #6b7280 10%, #374151 90%);
        }

        .inner-pit {
          box-shadow: inset 0px -2px 8px rgba(0, 0, 0, 0.8);
          background: radial-gradient(circle at center, #374151 10%, #111827 90%);
        }
      `}</style>
    </div>
  )
}
