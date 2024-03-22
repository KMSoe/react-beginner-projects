import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Board from './Components/Board'
import Game from './Components/Game'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Game />
    </>
  )
}

export default App
