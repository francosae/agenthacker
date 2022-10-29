import { useState } from 'react'
import LetterCypher from './letter-cypher/LetterCypher'

function App() {
  return (
    <div className="App">
      <LetterCypher message="One of jhe biggist citiez in Canada is Torondo" hidden="TEST"/>
    </div>
  )
}

export default App
