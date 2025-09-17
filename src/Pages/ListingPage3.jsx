import React ,{useContext} from "react";
import { Link } from "react-router-dom";
import { listingDataContext } from "../context/ListingContext";

const ListingPage3 = () => {

        let {title , setTitle ,description ,setDescription ,
            frontEndImage1 , setFrontEndImage1,
            frontEndImage2 , setFrontEndImage2,
            frontEndImage3 , setFrontEndImage3,
            backEndImage1 , setbackEndImage1,
            backEndImage2 , setbackEndImage2,
            backEndImage3 , setbackEndImage3,
            rent ,setRent ,
            city ,setCity ,
            landmark , setLandmark,
            category ,setCategory,
            addListing
         } = useContext(listingDataContext)

         

    return(
        <>
       <div className="w-[100%] h-[100vh] bg-[white] flex items-center justify-center gap-[10px] flex-col overflow-auto relative">
         <div className="w-[95%] flex items-start justify-start text-[25px] md:w-[80%] mb-[10px]">
            <h1 className="text-[20px] text-gray-800 md:text-[30px] text-ellipsis text-nowrap overflow-hidden">
                {/*  {`In ${landmark.toUpperCase()} , ${city.toUpperCase()}`} */} Gujranwala , Gjranwala
            </h1>
         </div>
         <div className="w-[95%] h-[400px] flex items-center justify-center flex-col md:w-[80%] md:flex-row bg-black  ">
            <div className="w-[100%] h-[65%] md:w-[70%] md:h-[100%] overflow-hidden flex items-center justify-center border-2 border-white bg-red-500 ">
                      <img src={frontEndImage1} alt="" className="w-[100%]" />
            </div>
            <div className="w-full h-[30%] flex items-center justify-center md:w-[30%] md:h-[100%] md:flex-col ">
                  <div className="w-full h-full overflow-hidden flex items-center justify-center border-[2px] border-white">
                    <img src={frontEndImage2} alt="" className="w-full"/>
                  </div>
                  <div className="w-full h-full overflow-hidden flex items-center justify-center border-[2px] border-white">
                    <img src={frontEndImage3} alt="" className="w-full" />
                  </div>
            </div>
        
            </div>
            <div className="w-[95%] flex items-start justify-start text-[18px] md:[80%] md:text-[25px]">
                {/* {`${title.toUpperCase()}, ${category.toUpperCase()},${title.toUpperCase()} , ${landmark.toUpperCase() }`} */}Vilah , lahore 
            </div>
          <div className="w-[95%] flex items-start justify-start text-[18px] md:[80%] md:text-[25px]">
               {/*  {`${description.toUpperCase()}`} */} Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto quibusdam obcaecati error recusandae possimus nam non quis, laboriosam similique illum aliquam alias fugit nisi dolore suscipit quod, voluptatem impedit earum?
            </div>
             <div className="w-[95%] flex items-start justify-start text-[18px] md:[80%] md:text-[25px]">
              {/*   {`${rent.toUpperCase()}`} */}RS 2000
            </div>
            <div className="w-[80%] flex flex-col  justify-end items-end gap-3">
                       <button type="submit" onClick={addListing} className=" bg-[#f14242]  text-white rounded-md px-4 py-2  mb-10">Submit</button>
            </div>
       </div>
        </>

    )
};

export default ListingPage3 ; 
