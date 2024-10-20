// Define the game state types
type GameState = {
    pits: number[][]; // 2D array representing pits for both players
    playerHand: number; // Number of seeds in the player's hand
    currentPlayer: number; // Current player's identifier (0 or 1)
};

// Function to handle player's move
const playerMove = (state: GameState, clickedPit: number): GameState => {
    const { pits, playerHand, currentPlayer } = state;

    // Check if clicked pit belongs to the current player (0 or 1)
    const isOpponentPit = currentPlayer === 0 ? clickedPit > 7 : clickedPit < 8;

    if (isOpponentPit) {
        // Check if the opponent's pit contains 2 or 3 seeds
        const seedsInPit = pits[1 - currentPlayer][clickedPit % 8]; // Adjust for player index

        if (seedsInPit === 2 || seedsInPit === 3) {
            // Capture the seeds
            pits[1 - currentPlayer][clickedPit % 8] = 0; // Empty the opponent's pit
            return {
                ...state,
                playerHand: playerHand + seedsInPit, // Add captured seeds to player's hand
                pits: [...pits], // Return updated pits
            };
        }
    }

    // If it's the player's own pit or capturing isn't applicable
    // Sow one seed from the player's hand to the clicked pit
    if (playerHand > 0) {
        pits[currentPlayer][clickedPit % 8] += 1; // Add a seed to the clicked pit
        return {
            ...state,
            playerHand: playerHand - 1, // Subtract one seed from player's hand
            pits: [...pits], // Return updated pits
        };
    }

    // Return unchanged state if the move is invalid
    return state;
};

export { playerMove };
