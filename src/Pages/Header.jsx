import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/airbnb-logo.png"
import 'remixicon/fonts/remixicon.css'

const Header = () => {

  const [popUp, setpopUp] = useState(false)


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
              <li><button className="hover:bg-gray-200 rounded-full font-bold text-md p-2">Become the Host</button></li>
              <li><button className="hover:bg-gray-300 rounded-full p-2  "><i class="ri-global-line"></i></button></li>
              <li><button className="hover:bg-gray-300 rounded-full p-2 "
                onClick={() => setpopUp(!popUp)}
              ><i class="ri-menu-line"></i></button></li>
              <li>{popUp &&
                <div className="bg-white h-80 w-60 absolute top-[80%] right-[5%] border-1 rounded-md z-1">
                  <ul className="p-5 " >
                    <li className="py-2 border-b-1 text-left">Log Out</li>
                    <li className="py-2 border-b-1 text-left">Become a Host<p className="text-sm  text-left">
                      is easy to get started and earn extra income.
                    </p></li>
                    <li className="py-2 text-left ">List your Home</li>
                    <li className="py-2 text-left ">My Listing</li>
                    <li className="py-2 border-b-1 text-left">Help</li>
                    <li className="p-2 text-center "><Link to="/signup" onClick={() => setpopUp(!popUp)}>Login or Sign up</Link></li>
                  </ul>
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
