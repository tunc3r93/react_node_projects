import { useState } from 'react'
import './App.css'
import LoginPage from './pages/Auth/LoginPage';
import Navbar from './components//Navbar';
import Graph from './components/Graph';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
        <Graph />
      <LoginPage />
    </>
  )
}

export default App
