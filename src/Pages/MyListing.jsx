import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { userDataContext } from "../context/UserContext";

const MyListing = () => {

    const navigate = useNavigate()
    const {userData} = useContext(userDataContext)

    return (
    
   
    <>
    <div className="max-w-full min-h-screen max-h-full item center justify-center flex col p-4 mt-10  ">
        <div className="w-120 h-10 border-1 p-2 md:text-2xl text-lg rounded-2xl " ><h2>My Listing</h2> </div>
        <div className="w-full h-[90%] flex items-center justify-center gap-[25px] flex-wrap mt-[30px]">
            {newlistData.map( (list) => (
        <Card title={list.title} landmark={list.landmark} 
      city={list.city} image1={list.image1} image2={list.image2} image3={list.image3} rent={list.rent} id = {list._id} 
      rating = {list.rating} isBooked={list.isBooked} host={list.host}
    />) ) }
        </div>
    </div>
    </>  

    )
}

export default MyListing;