 import React, { useContext } from "react";
import { userDataContext } from "../context/UserContext";
import { listingDataContext } from "../context/ListingContext";
import { useNavigate } from "react-router-dom";

const Card =(title , landMark , Image2 , Image1 , Image3 , rent , city , id) => {
  let {userData} = useContext(userDataContext)
  const {handleViewCard} = useContext(listingDataContext)
   let navigate = useNavigate()
  const handleClick = () => {
    if(userData){
      handleViewCard(id)
    }
    else{
      navigate('/login')
    }
  }

    return(
        <div className="w-[330px] max-w-[85%] h-[460px] flex items-start justify-start flex-col rounded-lg cursor-pointer bg-slate-800 
         " onClick={handleClick}>
          <div className="w-[100%] h-[67%] bg-gray-700 rounded-lg overflow-auto flex">
            <img className="w-full flex-shrink-0 " src={Image1} alt="" />
             <img className="w-full flex-shrink-0 " src={Image2} alt="" />
              <img className="w-full flex-shrink-0 " src={Image3} alt="" />
          </div>
          <div className="w-[100%] h-[33%] py-[20px] flex felx-col gap-2"  >
            <span className="w-[80%] text-ellipsis font-semibold text-nowrap overflow-hidden" >IN {landMark.toUpperCase()} , {city.toUpperCase()}</span>
            <span className="text">{title.toUpperCase()}</span>
            <span>Pkr {rent}/day</span>
          </div>
        </div>

    )
};

export default Card;