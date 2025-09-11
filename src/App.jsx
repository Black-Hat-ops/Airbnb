import React from 'react'
import './App.css'
import Headers from './Pages/Header.jsx'
import SignupPage from './Pages/SignupPage.jsx'
import { Routes , Route } from 'react-router-dom'
import HomePage from './Pages/HomePage.jsx'
import Footer from './Pages/Footer.jsx'
import Login from './Pages/Login.jsx'
import ListingPage from './Pages/ListingPage.jsx'
import ListingPage2 from './Pages/ListingPage2.jsx'
import ListingPage3 from './Pages/ListingPage3.jsx'
import MyListing from './Pages/MyListing.jsx'

function App() {

  return (
    <>
      <Headers />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/listing" element={<ListingPage />} />
        <Route path="/listing2" element={<ListingPage2 />} />
        <Route path="/listing3" element={<ListingPage3 />} />
        <Route path="/mylist" element ={<MyListing/>}/>
      </Routes>
      <Footer />
    </>
  )
}

export default App

