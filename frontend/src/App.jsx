import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Wordle from './pages/Wordle'
import Landing from './pages/Landing'
import Dashboard from './pages/Dashboard'

export default function App() {

  return (
      <>
      <BrowserRouter forceRefresh={true}>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/wordle" element={<Wordle />} />
        <Route path="/home" element={<Dashboard /> } /> 
      </Routes>
      </BrowserRouter>
      </>
  )
}
