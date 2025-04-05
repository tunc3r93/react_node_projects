import { useState } from 'react'
import './App.css'
import LoginPage from './pages/Auth/LoginPage';
import Navbar from './components//Navbar';
import MainContent from "./components/MainContent.jsx";

function App() {
  return (
    <>
        <div className="app">
            <Navbar />
            <MainContent />
        </div>
    </>
  )
}

export default App
