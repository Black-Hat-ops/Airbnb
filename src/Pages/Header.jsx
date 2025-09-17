import React, { useContext } from "react";
import { useState } from "react";
import { Link, useNavigation } from "react-router-dom";
import logo from "../assets/airbnb-logo.png"
import 'remixicon/fonts/remixicon.css'
import axios from "axios";
import { userDataContext } from '../context/UserContext'
import { listingDataContext } from "../context/ListingContext";

const Header = () => {

  const [popUp, setpopUp] = useState(false)
  const {userData ,setUserData} = useContext(userDataContext)
  console.log(userData)
  //const navigate = useNavigation();
  const [category , setCategory] = useState()
  const {listingData , setListingData} = useContext(listingDataContext)

  const handleLogOut = async () => {
    setpopUp(!popUp)
    try {
      const result =await axios.post( "http://localhost:4000/api/auth/logOut" , {
        withcredentials : true
      }) 
      console.log(result)
      setUserData(null)
    } catch (error) {
      console.log("this is an error" , error)
    }
  }
  const handleCategory = (category) => {
    setCategory(category)
    listingData.filter((list)=> list.category == category )
  }
 

  return (
    <>
      {/* Desktop Navigation Bar */}
      <nav className="sticky top-0 z-10">
        <div className="hidden md:bg-gray-100 md:min-w-full md:h-26 shadow-lg  md:flex md:items-center md:justify-between  md:relative z-1">
          <Link to="/"><img className="w-34 h-12 ml-10" src={logo} alt="" /></Link>
          <div className=" align-items-center flex relative ">
            <input type="text" className="border-2 w-120 border-gray-300 rounded-4xl h-16 px-16 hover:shadow-md" placeholder="Any where | Any Time | add Guest" />
            <button className="absolute rounded-full bg-red-500 text-white w-13 h-13 right-1/42  my-1.5 ">
              <i class="ri-search-line"></i>
            </button>
          </div>
          <div>
            <ul className="flex gap-3 items-center justify-between ">
              {userData == null && (
  <>
    <li>
      <button className="hover:bg-gray-200 rounded-full font-bold text-md p-2">
        Become a Host
      </button>
    </li>
    <li>
      <button className="hover:bg-gray-300 rounded-full p-2">
        <i className="ri-global-line"></i>
      </button>
    </li>
  </>
)}

{userData != null && (
  <>
    <li>
      <button className="hover:bg-gray-200 rounded-full font-bold text-md p-2">
         <span> {userData?.email}</span>
      </button>
    </li>
    <li>
      <button className="hover:bg-gray-300 rounded-full p-2">
        <i className="ri-global-line"></i>
      </button>
    </li>
  </>
)}
              <li><button className="hover:bg-gray-300 rounded-full p-2 "
                onClick={() => setpopUp(!popUp)}
              ><i class="ri-menu-line"></i></button></li>
              <li>{popUp &&
                <div className="bg-white h-70 w-60 absolute top-[80%] right-[5%] border-1 rounded-md z-1">
                  <ul className="p-4 " >
                    {userData != null &&<li className="py-2 border-b-1 text-left hover:cursor-pointer" onClick={(handleLogOut)  }>Log Out</li>}
                    <li className="py-2 border-b-1 text-left">Become a Host<p className="text-sm  text-left">
                      is easy to get started and earn extra income.
                    </p></li>
                    <li className="py-2 text-left " onClick={() => setpopUp(!popUp)}><Link to='/listing'> List your Home</Link></li>
                    <li className="py-2 text-left ">My Listing</li>
                    <li className="py-2  text-left">Help</li>
                    {userData == null && <li className="p-2 text-center border-t-1 "><Link to="/signup" onClick={() => setpopUp(!popUp)}>Login or Sign up</Link></li>}</ul>
                </div>
              }
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Bar */}

      <nav className="sticky top-0 z-10">
      <div className="relative">
        <div className=" md:hidden max-w-full h-38 bg-white items-center  justify-around z-1 sticky shadow-md ">
          <button className="bg-gray-100 w-[90%] h-16 shadow-md p-4 mt-5 rounded-4xl hover:cursor-pointer ">            
            <i class="ri-search-line"></i> Start your search
          </button>
          <ul className="flex mx-25 mt-5 text-4xl justify-between ">
            <li className=" hover:border-b-4 " ><Link><i class="ri-home-4-fill"></i></Link></li>
            <li className=" hover:border-b-4 " ><Link><i class="ri-flask-fill"></i></Link></li>
            <li className=" hover:border-b-4 " ><Link><i class="ri-service-bell-fill"></i></Link></li>
          </ul>
        </div>
        <div className="md:hidden w-full h-18 bg-white  items-center  justify-around z-1 fixed bottom-0 shadow-top-md ">
          <ul className="flex text-4xl justify-between mx-25 my-3" >
            <li className=" hover:text-rose-600 hover:cursor-pointer"  ><i class="ri-search-line"></i></li>
            <li className=" hover:text-rose-600 hover:cursor-pointer "><i class="ri-heart-3-line"></i></li>
            <li className=" hover:text-rose-600 hover:cursor-pointer"><Link to='/signup'><i class="ri-account-circle-line"></i></Link></li>
          </ul>
        </div>
      </div>
      </nav>
    </>

  );
};

export default Header;
