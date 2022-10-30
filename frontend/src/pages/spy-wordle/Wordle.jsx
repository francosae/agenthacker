import React from 'react'

export default function Wordle({word}) {
  return (
    <div>
      {word.name}: {word.value}
    </div>
  )
}
