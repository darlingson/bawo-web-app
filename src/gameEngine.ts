// Define the game state types
type GameState = {
  pits: number[][]; // 2D array representing pits for both players
  playerHand: number; // Number of seeds in the player's hand
  currentPlayer: number; // Current player's identifier (0 or 1)
};

// Function to handle player's move
const playerMove = (
  state: GameState,
  clickedPitRow: number,
  clickedPitCol: number
): GameState => {
  /*what this function will do:
    it will check if the clicked pit is in the opponents side of the board. Note: the opponent's pit are the all pits in top 2 rows of the board
    if the clicked pit has 2 or three seeds, then the seeds in the pit will be moved to the player's hand
    if the pit has 0 or 1 seed then the function remove one seed from the player hand and put it into the pit
    check if the playerhand still has seeds, if not change current player
    */

  const newGameState: GameState = {
    pits: state.pits.map((row) => [...row]),
    currentPlayer: state.currentPlayer,
    playerHand: state.playerHand,
  };

  //checking if pit is for the opponent
  const isOpp = clickedPitRow == 0 || clickedPitRow == 1;
  if (isOpp) {
    if (
      newGameState.pits[clickedPitRow][clickedPitCol] == 2 ||
      newGameState.pits[clickedPitRow][clickedPitCol] == 3
    ) {
      //capture branch
      // Move seeds from clicked pit to player's hand
      newGameState.playerHand =
        newGameState.playerHand +
        newGameState.pits[clickedPitRow][clickedPitCol]; // Add seeds to player's hand
      newGameState.pits[clickedPitRow][clickedPitCol] = 0;
      return newGameState;
    } else {
      //sow branch
      newGameState.pits[clickedPitRow][clickedPitCol] =
        newGameState.pits[clickedPitRow][clickedPitCol] + 1;
      newGameState.playerHand = newGameState.playerHand - 1;
      //check if player still has seeds, if not change current player
      if (newGameState.playerHand == 0) {
        newGameState.currentPlayer = newGameState.currentPlayer == 0 ? 1 : 0;
      }
      return newGameState;
    }
  } else if (!isOpp) {
    //if it is not opponent, then we should just sow
    newGameState.pits[clickedPitRow][clickedPitCol] =
      newGameState.pits[clickedPitRow][clickedPitCol] + 1;
    newGameState.playerHand = newGameState.playerHand - 1;
    //check if player still has seeds, if not change current player
    if (newGameState.playerHand == 0) {
      newGameState.currentPlayer = newGameState.currentPlayer == 0 ? 1 : 0;
    }
    return newGameState;
  }
  return newGameState;
};

export { playerMove };
