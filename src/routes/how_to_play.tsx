import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"

const HowToPlayPage = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-primary to-primary-foreground text-primary-foreground px-4">
            {/* How to Play Section */}
            <div className="max-w-4xl mx-auto text-center mb-16">
                <h1 className="text-5xl font-bold mb-8">How to Play Bawo</h1>
                <p className="text-xl text-primary-foreground/80 mb-8">
                    Bawo is a mancala-type game where two players take turns to sow seeds and capture their opponent's seeds. The goal is to collect as many seeds as possible.
                </p>
                <ol className="list-decimal list-inside text-lg text-primary-foreground/80 text-left max-w-2xl mx-auto">
                    <li className="mb-4">
                        <strong>Step 1:</strong> Pick up all the seeds from one of your pits. You can only pick seeds from your side of the board.
                    </li>
                    <li className="mb-4">
                        <strong>Step 2:</strong> Sow the seeds one by one in a counterclockwise direction, dropping them into the pits.
                    </li>
                    <li className="mb-4">
                        <strong>Step 3:</strong> If the last seed lands in an empty pit on your side and there are seeds in the opposite pit, you can capture those seeds and add them to your score.
                    </li>
                    <li className="mb-4">
                        <strong>Step 4:</strong> The game ends when one player can no longer make a move, and the player with the most seeds wins!
                    </li>
                </ol>
            </div>

            {/* Back to Home Button */}
            <Link to="/">
                <Button className="text-lg px-8 py-4 bg-primary text-primary-foreground hover:bg-primary/90">
                    Back to Home
                </Button>
            </Link>
        </div>
    )
}

export default HowToPlayPage
