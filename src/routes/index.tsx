import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

const IndexPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-primary to-primary-foreground text-primary-foreground px-4">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-6xl font-bold mb-4">Bawo Game</h1>
        <p className="text-xl mb-8 max-w-lg mx-auto">
          Experience the ancient African strategy game of Bawo. Challenge your mind and outsmart your opponent!
        </p>
      </div>

      {/* Start Playing Button (Center Stage) */}
      <div className="mb-16 text-center">
        <Link to="/game">
          <Button className="text-xl px-10 py-6 bg-secondary text-secondary-foreground hover:bg-secondary/90">
            Start Playing Now
          </Button>
        </Link>
      </div>

      {/* About the Game Section */}
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">What is Bawo?</h2>
        <p className="text-lg text-primary-foreground/80">
          Bawo is a traditional mancala game played in parts of East Africa. It's a game of strategy, skill, and cunning.
          Whether you're a beginner or an expert, Bawo offers a thrilling experience that sharpens the mind and challenges your tactics.
        </p>
      </div>
    </div>
  )
}

export default IndexPage
