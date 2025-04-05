import { useState } from 'react'
import './App.css'
import LoginPage from './pages/Auth/LoginPage';
import Navbar from './components//Navbar';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <LoginPage />
    </>
  )
}

export default App
