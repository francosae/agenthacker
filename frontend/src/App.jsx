import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Wordle from './pages/Wordle'
import Landing from './pages/Landing'
import Dashboard from './pages/Dashboard'
import SignIn from './pages/SignIn'
import { AuthContextProvider } from './contexts/user'
export default function App() {

  return (
      <AuthContextProvider>
      <BrowserRouter forceRefresh={true}>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/wordle" element={<Wordle />} />
        <Route path="/home" element={<Dashboard /> } />
        <Route path="/signin" element={< SignIn /> } /> 
      </Routes>
      </BrowserRouter>
      </AuthContextProvider>
  )
}
