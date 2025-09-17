import React, { useState } from "react";
import ImageSlider from "../Components/ImageSlider";
import Card from "../Components/Card";
//import ImageSlider from "../Components/ImageSlider";

const HomePage = () => {
    const [listingData , seListingData] =useState('');
    return (
<>
<div className=" min-h-screen">
   <ImageSlider /> 
   <ImageSlider /> 
   <ImageSlider /> 
   <ImageSlider />   
   <ImageSlider /> 
   <ImageSlider /> 
   <ImageSlider /> 
   <ImageSlider /> 
   <ImageSlider /> 
   <ImageSlider />  
 {/*   <div className="w-[100vw] flex flex-wrap items-center justify-center gap-6 mt-[250px] md:mt-[180px]">
    {newlistData.map( (list) => (<Card title={list.title} landmark={list.landmark} 
      city={list.city} image1={list.image1} image2={list.image2} image3={list.image3} rent={list.rent} id = {list._id} 
      rating = {list.rating} isBooked={list.isBooked} host={list.host}
    />) ) 
    </div>
*/}

    

   
</div>
     
</>
    );
};

export default HomePage;
