import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

const IndexPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-primary to-primary-foreground text-primary-foreground">
      <h1 className="text-6xl font-bold mb-4">Bawo Game</h1>
      <p className="text-xl mb-8 text-center max-w-md">
        Experience the ancient African strategy game of Bawo. Challenge your mind and outsmart your opponent!
      </p>
      <Link to="/game">
        <Button className="text-lg px-8 py-4 bg-secondary text-secondary-foreground hover:bg-secondary/90">
          Start Playing
        </Button>
      </Link>
    </div>
  )
}

export default IndexPage