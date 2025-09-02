import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/airbnb-logo.png"
import 'remixicon/fonts/remixicon.css'

const Header = () => {

  const [popUp, setpopUp] = useState(false)


  return (
    <>
      <nav className="bg-gray-100 max-w-full h-28 shadow-md sticky top-0 ">
        <div className=" align-items-center flex p-2 items-center justify-between ml-10 relative">
          <img className="w-1/16  " src={logo} alt="" />
          <div className=" align-items-center flex relative ">
            <input
              type="text"
              className="w-120 border-2 border-gray-300 rounded-4xl p-2 h-16 px-12 hover:shadow-md"
              placeholder="Any where | Any Time | add Guest"
            />
            <button className="absolute rounded-full bg-red-500 text-white w-12 h-12 mt-2 right-1/32">
              <i class="ri-search-line"></i>
            </button>
          </div>
          <div className="mr-8 ">
            <ul className="flex gap-3 align-items-center justify-center">
              <li><button className="hover:bg-gray-200 rounded-full font-bold text-md p-2">Become the Host</button></li>
              <li><button className="hover:bg-gray-300 rounded-full p-2  "><i class="ri-global-line"></i></button></li>
              <li><button className="hover:bg-gray-300 rounded-full p-2 "
                onClick={() => setpopUp(!popUp)}
              ><i class="ri-menu-line"></i></button></li>
              <li>{popUp &&
                <div className="bg-white h-80 w-60 absolute top-[80%] right-[5%] border-1 rounded-md">
                  <ul className="p-5 " >
                    <li className="py-2 border-b-1">Help Center</li>
                    <li className="py-2 border-b-1">Become a Host<p className="text-sm text-center">
                      is easy to get started and earn extra income.
                    </p></li>
                    <li className="py-2 ">Refer a host</li>
                    <li className="py-2 ">find a co host</li>
                    <li className="py-2 border-b-1">Gift card</li>

                    <li className="p-2 "><Link to="/signup" onClick={() => setpopUp(!popUp)}>Login or Sign up</Link></li>
                  </ul>
                </div>
              }
              </li>
            </ul>
          </div>

        </div>
      </nav>
      <div>
      </div>
    </>

  );
};

export default Header;
