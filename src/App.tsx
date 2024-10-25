import { Route, Routes } from 'react-router-dom'
import './App.css'
import IndexPage from './routes'
import GamePage from './routes/game_page'
import HowToPlayPage from './routes/how_to_play'
import Navbar from './components/navbar'

function App() {

  return (
    <>
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/game" element={<GamePage />} />
        <Route path="/how-to-play" element={<HowToPlayPage />} />
      </Routes>
    </div>
    </>
  )
}

export default App
