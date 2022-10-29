import { useState } from 'react'
import LetterCypher from './minigames/missing-letters/LetterCypher'
import CompletePath from './minigames/complete-path/CompletePath'

function App() {
  return (
    <div className="App">
      <LetterCypher />
      <CompletePath />
    </div>
  )
}

export default App
