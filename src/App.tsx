import { Route, Routes } from 'react-router-dom'
import './App.css'
import IndexPage from './routes'
import GamePage from './routes/game_page'

function App() {

  return (
    <>
    <div className="App">
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/game" element={<GamePage />} />
      </Routes>
    </div>
    </>
  )
}

export default App
