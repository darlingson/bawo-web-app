export type Player = 'Player 1' | 'Player 2'

export interface GameState {
    pits: number[][]
    currentPlayer: number
    playerHand: number
}