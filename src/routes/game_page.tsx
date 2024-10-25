import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import { GameState } from '@/interfaces/GameState';
import { playerMove } from '@/gameEngine';


export default function GamePage() {
  const [playMode, setPlayMode] = useState<'pick' | 'sow'>('pick');
  
  const initialBoard = Array(4).fill(null).map(() => Array(8).fill(2));
  const [gameState, setGameState] = useState<GameState>({
    pits: initialBoard,
    currentPlayer: 0,
    playerHand: 0,
  });

  const handlePitClick = (row: number, col: number) => {
    

    if (playMode === 'pick') {
      // Move seeds from clicked pit to player's hand
      const seedsInPit = gameState.pits[row][col];
      if (seedsInPit > 0) {
        const newPits = [...gameState.pits];
        newPits[row][col] = 0; // Remove seeds from the clicked pit
        setGameState(prevState => ({
          ...prevState,
          pits: newPits,
          playerHand: prevState.playerHand + seedsInPit, // Add seeds to player's hand
        }));
      }
      // Switch to 'sow' mode
      setPlayMode('sow');
    } else if (playMode === 'sow') {
      const newGameState = playerMove(gameState, row, col);
      setGameState(newGameState);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-background to-secondary p-4">
      <h1 className="text-4xl font-bold mb-8 text-primary">Bawo Game</h1>

      <div className="mb-4 text-xl text-primary">
        Current Player: <span className="font-bold">{`Player ${gameState.currentPlayer + 1}`}</span>
      </div>

      <div className="mb-8 text-xl text-primary">
        Seeds in Hand: <span className="font-bold">{gameState.playerHand}</span>
      </div>

      <div className="grid grid-cols-8 gap-2 sm:gap-4 mb-8 bg-primary/20 p-4 sm:p-6 rounded-lg shadow-lg">
        {gameState.pits.map((row, rowIndex) =>
          row.map((seeds, colIndex) => (
            <button
              key={`${rowIndex}-${colIndex}`}
              className="relative w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gradient-to-b from-primary/60 to-primary/90 rounded-full flex items-center justify-center text-sm sm:text-lg md:text-xl font-bold text-primary-foreground hover:from-primary hover:to-primary/80 transition-colors duration-200 shadow-inner pit-button"
              onClick={() => handlePitClick(rowIndex, colIndex)}
            >
              {seeds}
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
          background: radial-gradient(circle at center, #b08d57 10%, #8b5e34 90%);
          border: 2px solid #704214;
        }
      `}</style>
    </div>
  );
}