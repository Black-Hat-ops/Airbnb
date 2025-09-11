import React from "react";
import { useNavigate } from "react-router-dom";

const MyListing = () => {

    const navigate = useNavigate()

    return (
    
   
    <>
    <div className="max-w-full min-h-screen max-h-full item center justify-center flex col p-4 mt-10  ">
        <div className="w-120 h-10 border-1 p-2 md:text-2xl text-lg rounded-2xl " ><h2>My Listing</h2> </div>

    </div>
    </>  

    )
}

export default MyListing;