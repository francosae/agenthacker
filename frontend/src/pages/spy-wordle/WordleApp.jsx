import React, {useState, useRef} from 'react'
import WordleList from './WordleList'
import Wordle from './Wordle'

function WordleApp()  {
  const [word, setWord] = useState([
    // {id: 1, name: 'attempt 1', 
    // value: 'stray'}
  ])
  const nameRef = useRef()

  function handleAddWord(w) {
    const name = nameRef.current.value
    if (name === '') return
    let val = word.length + 1
    setWord(prevWords => {
      return [...prevWords, {id: val, name: "Attempt " + val, value: name}]
    })
    console.log(name, word)
    nameRef.current.value = null
  }

  function handleClearWords(w) {
    setWord([])
    nameRef.current.value = null
  }

  return (
    <>
      <WordleList wordList = {word} />
      <input ref={nameRef} type="text" />
      <div>Target Word: "space"</div>
      <br />
      <button onClick={handleAddWord}> Submit</button>
      <br />
      <button onClick={handleClearWords}> Clear</button>
    </>
  )
}

export default WordleApp