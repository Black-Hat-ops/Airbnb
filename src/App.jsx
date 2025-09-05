import React from 'react'
import './App.css'
import Headers from './Pages/Header.jsx'
import SignupPage from './Pages/SignupPage.jsx'
import { Routes , Route } from 'react-router-dom'
import HomePage from './Pages/HomePage.jsx'
import Footer from './Pages/Footer.jsx'
import Login from './Pages/Login.jsx'


function App() {

  return (
    <>
      <Headers />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App

