type GameState = {
    pits: number[][];
    currentPlayer: number;
    playerHand: number;
};

type Move = {
    row: number;
    col: number;
    direction: "clockwise" | "counterclockwise";
};

function deepCopy<T>(obj: T): T {
    return JSON.parse(JSON.stringify(obj));
}

function evaluateGameState(gameState: GameState): number {
    const {pits, currentPlayer} = gameState;

    const playerSeeds = pits[currentPlayer].reduce((a, b) => a + b, 0);
    const opponentSeeds = pits[1 - currentPlayer].reduce((a, b) => a + b, 0);

    // Simple heuristic: difference in seeds
    return playerSeeds - opponentSeeds;
}

// Generate valid moves for the current player
function generateValidMoves(gameState: GameState): Move[] {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const {pits, currentPlayer} = gameState;
    const moves: Move[] = [];

    for (let row = 0; row < pits.length; row++) {
        for (let col = 0; col < pits[row].length; col++) {
            if (pits[row][col] > 1) { // Must have more than one seed to move
                moves.push({row, col, direction: "clockwise"});
                moves.push({row, col, direction: "counterclockwise"});
            }
        }
    }

    return moves;
}

// Simulate a move and return the resulting game state
function simulateMove(gameState: GameState, move: Move): GameState {
    const newState = deepCopy(gameState);
    const {pits, playerHand} = newState;
    const {row, col, direction} = move;

    let seeds = pits[row][col];
    pits[row][col] = 0; // Lift seeds from the selected pit

    let currentRow = row;
    let currentCol = col;

    while (seeds > 0) {
        if (direction === "clockwise") {
            currentCol = (currentCol + 1) % pits[currentRow].length;
        } else {
            currentCol = (currentCol - 1 + pits[currentRow].length) % pits[currentRow].length;
        }

        // Sow seeds into the next pit
        pits[currentRow][currentCol]++;
        seeds--;

        // Change rows if needed (wrap around logic)
        if (direction === "clockwise" && currentCol === 0) {
            currentRow = 1 - currentRow;
        } else if (direction === "counterclockwise" && currentCol === pits[currentRow].length - 1) {
            currentRow = 1 - currentRow;
        }
    }

    newState.playerHand = playerHand; // Update player's hand if affected
    return newState;
}

// Minimax algorithm with Alpha-Beta pruning
function minimax(
    gameState: GameState,
    depth: number,
    alpha: number,
    beta: number,
    maximizingPlayer: boolean
): number {
    if (depth === 0 || isGameOver(gameState)) {
        return evaluateGameState(gameState);
    }

    const moves = generateValidMoves(gameState);
    if (maximizingPlayer) {
        let maxEval = -Infinity;
        for (const move of moves) {
            const newState = simulateMove(gameState, move);
            const evalValue = minimax(newState, depth - 1, alpha, beta, false);
            maxEval = Math.max(maxEval, evalValue);
            alpha = Math.max(alpha, evalValue);
            if (beta <= alpha) break; // Prune
        }
        return maxEval;
    } else {
        let minEval = Infinity;
        for (const move of moves) {
            const newState = simulateMove(gameState, move);
            const evalValue = minimax(newState, depth - 1, alpha, beta, true);
            minEval = Math.min(minEval, evalValue);
            beta = Math.min(beta, evalValue);
            if (beta <= alpha) break; // Prune
        }
        return minEval;
    }
}

// Check if the game is over (basic implementation, refine as needed)
function isGameOver(gameState: GameState): boolean {
    const {pits} = gameState;
    return pits[0].every(seeds => seeds === 0) || pits[1].every(seeds => seeds === 0);
}

// Find the best move for the computer player
function findBestMove(gameState: GameState, depth: number): Move | null {
    const moves = generateValidMoves(gameState);
    let bestMove: Move | null = null;
    let bestValue = -Infinity;

    for (const move of moves) {
        const newState = simulateMove(gameState, move);
        const moveValue = minimax(newState, depth - 1, -Infinity, Infinity, false);
        if (moveValue > bestValue) {
            bestValue = moveValue;
            bestMove = move;
        }
    }

    return bestMove;
}

export {
    findBestMove,
    generateValidMoves,
    simulateMove,
    isGameOver,
    evaluateGameState
};
export type {
    GameState,
    Move
};

