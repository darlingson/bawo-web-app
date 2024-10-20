import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const HowToPlayPage = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-primary to-primary-foreground text-primary-foreground px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
                <h1 className="text-5xl font-bold mb-8">How to Play Bawo</h1>
                <p className="text-xl text-primary-foreground/80 mb-8">
                    Bawo is a traditional mancala-type game played with two players. The objective is to capture more seeds than your opponent. The game is popular in parts of southern Africa, especially Malawi, and it has two main variations: <strong>Chibweza</strong> and <strong>Namate</strong>.
                </p>

                <p className="text-lg font-semibold text-primary-foreground/90 mb-4">
                    In this guide, we will explain the rules for the <strong>Chibweza</strong> variation, which is simpler and more commonly played. Namate includes additional rules allowing more advanced tactics.
                </p>

                <ol className="list-decimal list-inside text-lg text-primary-foreground/80 text-left max-w-2xl mx-auto">
                    <li className="mb-4">
                        <strong>Step 1: Setting up the Board</strong> <br />
                        The board has 4 rows and 8 pits per row, for a total of 32 pits. Each player controls the two rows on their side. At the start, each pit contains 2 seeds, making 64 seeds per player (128 seeds in total).
                    </li>
                    <li className="mb-4">
                        <strong>Step 2: Sowing Seeds</strong> <br />
                        On your turn, you pick up all the seeds from one of your pits and drop them one by one in a counterclockwise direction, sowing into both your pits and your opponent's pits. If your last seed lands in an empty pit on your side, your turn ends.
                    </li>
                    <li className="mb-4">
                        <strong>Step 3: Capturing Seeds</strong> <br />
                        A capture occurs when your last seed lands in an opponent's pit that contains exactly 2 or 3 seeds, bringing the total to 3 or 4 seeds. You capture these seeds and continue capturing from preceding pits if they also contain 3 or 4 seeds.
                    </li>
                    <li className="mb-4">
                        <strong>Step 4: Special Rule for the First Move</strong> <br />
                        On the very first turn, you can only pick seeds from the rightmost four pits on your side of the board. This ensures a strategic opening to the game.
                    </li>
                    <li className="mb-4">
                        <strong>Step 5: Ending the Game</strong> <br />
                        The game ends when one player cannot make a move (i.e., they have no seeds left or cannot pick up enough seeds). The other player collects all remaining seeds on the board. The player with the most seeds wins!
                    </li>
                </ol>

                <h2 className="text-3xl font-bold mb-4 mt-8">Understanding the Two Variations: Chibweza and Namate</h2>
                <p className="text-lg text-primary-foreground/80 mb-4">
                    <strong>Chibweza</strong> is the simpler version of Bawo, focusing on straightforward sowing and capturing. It's ideal for beginners and casual players.
                </p>
                <p className="text-lg text-primary-foreground/80 mb-8">
                    <strong>Namate</strong>, on the other hand, introduces more complex rules. One key difference is that in Namate, players can continue sowing seeds for multiple rounds if they capture seeds in the process. This allows for more advanced strategies and longer gameplay.
                </p>

            </div>
            <Link to="/">
                <Button className="text-lg px-8 py-4 bg-primary text-primary-foreground hover:bg-primary/90">
                    Back to Home
                </Button>
            </Link>
        </div>
    );
}

export default HowToPlayPage;
