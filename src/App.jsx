import React from 'react'
import './App.css'
import Headers from './Pages/Header.jsx'
import SignupPage from './Pages/SignupPage.jsx'
import { Routes , Route } from 'react-router-dom'
import HomePage from './Pages/HomePage.jsx'
import Footer from './Pages/Footer.jsx'


function App() {

  return (
    <>
      <Headers />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App

