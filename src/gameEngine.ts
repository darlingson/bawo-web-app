// // bawoGameEngine.ts

// // Define types for pits, players, and the overall game state
// export interface Pit {
//   seeds: number;
// }

// export interface Player {
//   id: number;
//   name: string;
//   capturedSeeds: number;
// }

// export interface GameState {
//   board: Pit[][];
//   currentPlayer: Player;
//   players: Player[];
//   status: "ongoing" | "finished";
// }

// // Initialize the board with 4 rows and 8 pits each (the number of seeds will depend on the game rules)
// export const createInitialBoard = (): Pit[][] => {
//   return Array.from(
//     { length: 4 },
//     () => Array.from({ length: 8 }, () => ({ seeds: 4 })) // Default: 4 seeds per pit (can adjust per rules)
//   );
// };

// // Initialize the game state
// export const createInitialState = (): GameState => ({
//   board: createInitialBoard(),
//   currentPlayer: { id: 1, name: "Player 1", capturedSeeds: 0 },
//   players: [
//     { id: 1, name: "Player 1", capturedSeeds: 0 },
//     { id: 2, name: "Player 2", capturedSeeds: 0 },
//   ],
//   status: "ongoing",
// });

// // Core function to handle a move in the game
// export function makeMove(
//   gameState: GameState,
//   row: number,
//   pitIndex: number
// ): GameState {
//   const currentPlayer = gameState.currentPlayer;
//   const pit = gameState.board[row][pitIndex];

//   // Check if the move is valid (can't move from an empty pit)
//   if (pit.seeds === 0) {
//     throw new Error("Invalid move: Can't move from an empty pit.");
//   }

//   // Collect seeds and start sowing them around the board
//   let seedsToSow = pit.seeds;
//   pit.seeds = 0; // Empty the selected pit
//   let currentPitIndex = pitIndex;
//   let currentRow = row;

//   while (seedsToSow > 0) {
//     // Move to the next pit (wrap around within the row)
//     currentPitIndex = (currentPitIndex + 1) % 8;

//     // Sow seeds
//     gameState.board[currentRow][currentPitIndex].seeds += 1;
//     seedsToSow -= 1;
//   }

//   // After sowing, we can add additional rules like capturing here...

//   // Switch turn to the next player
//   gameState.currentPlayer = switchPlayer(gameState);

//   // Check if the game is over after the move
//   if (checkGameOver(gameState)) {
//     gameState.status = "finished";
//   }

//   return gameState;
// }

// // Helper function to switch the current player
// function switchPlayer(gameState: GameState): Player {
//   return gameState.players.find(
//     (player) => player.id !== gameState.currentPlayer.id
//   )!;
// }

// // Function to check if the game is over
// export function checkGameOver(gameState: GameState): boolean {
//   // A simple condition could be when one side has no valid moves
//   const noValidMovesForPlayer1 = gameState.board[1].every(
//     (pit) => pit.seeds === 0
//   );
//   const noValidMovesForPlayer2 = gameState.board[2].every(
//     (pit) => pit.seeds === 0
//   );

//   return noValidMovesForPlayer1 || noValidMovesForPlayer2;
// }
