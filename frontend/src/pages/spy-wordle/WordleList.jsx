import React from 'react'
import Wordle from './Wordle'

export default function WordleList({wordList}) {
  return (
    wordList.map(wordValue => {
    return <Wordle key={wordValue.id} word={wordValue}/>
  })
  )
}

