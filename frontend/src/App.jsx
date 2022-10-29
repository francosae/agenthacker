import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Wordle from './pages/Wordle'
import Hotwire from './pages/hotwire/Hotwire'
import LetterCypher from './pages/missing-letters/LetterCypher'
import Landing from './pages/Landing'
import Dashboard from './pages/Dashboard'
import SignIn from './pages/SignIn'
import Leaderboard from './pages/Leaderboard'
import { AuthContextProvider } from './contexts/user'
export default function App() {

  return (
      <AuthContextProvider>
      <BrowserRouter forceRefresh={true}>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/wordle" element={<Wordle />} />
        <Route path="/hotwire" element={<Hotwire />} />
        <Route path="/missing-letters" element={<LetterCypher />} />
        <Route path="/home" element={<Dashboard /> } />
        <Route path="/signin" element={< SignIn /> } />
        <Route path="/Leaderboard" element={< Leaderboard /> } />  
      </Routes>
      </BrowserRouter>
      </AuthContextProvider>
  )
}
