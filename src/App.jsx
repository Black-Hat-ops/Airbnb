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
import ViewCard from './Pages/ViewCard.jsx'
import { userDataContext } from './context/UserContext.jsx'
import { useContext } from 'react'

function App() {
 
  const {userData} = useContext(userDataContext)

  return (
    <>
      <Headers />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/listing" element={userData  != null ? <ListingPage />:<Login />} />
        <Route path="/listing2" element={userData  != null ? <ListingPage2 />:<Login />} />
        <Route path="/listing3" element={userData  != null ? <ListingPage3 />:<Login />}/>
        <Route path="/mylist" element ={userData  != null ? <MyListing />:<Login />}/>
         <Route path="/viewCard" element ={userData  != null ? <ViewCard />:<Login />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App

