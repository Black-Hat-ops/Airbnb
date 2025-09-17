import React, { useState } from "react";
import { useContext } from "react";
import { Link , useNavigate} from "react-router-dom";
import { listingDataContext } from "../context/ListingContext";

const ListingPage = () => {
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
        adding, setadding
     } = useContext(listingDataContext)

     const navigate = useNavigate()

    const handleImage1 = (e) => {
        let file = e.target.files[0]
        setFrontEndImage1(URL.createObjectURL(file));
        setbackEndImage1(file);
    }
    
    const handleImage2 = (e) => {
        let file = e.target.files[0]
        setFrontEndImage2(URL.setFrontEndImage2(file))
        setbackEndImage2(file)
    }

    const handleImage3 = (e) => {
        let file = e.target.files[0]
        setFrontEndImage3(URL.setFrontEndImage2(file))
        setbackEndImage3(file)
    }

    return (
        <div className="w-[90%] md:w-[100%] mb-10 md:h-[130vh] h-[240vh] flex justify-center  items-start bg-white mt-25 md:mt-25 md:mx-auto md:pl-25  mx-15  "> 
            <form
                action=""
                className="max-w-[900px] w-[90%] h-[600px] flex flex-col justify-start items-start gap-[10px] "
                onSubmit={(e)=>{e.preventDefault() 
                    navigate("/listing2")
                } }
            >
                <Link to="/">
                    <div className="md:w-[70px] md:h-[50px] w-[60px] h-[40px] bg-[#f14242] md:text-3xl text-2xl rounded-4xl cursor-pointer absolute md:top-[18%] top-[25%] flex justify-center items-center left-[5%]">
                        <i className="ri-arrow-left-long-line"></i>
                    </div>
                </Link>

                <div className="w-[100%] h-[400%] flex flex-col items-start gap-5 text-left ">
                    <div className="md:w-[200px] md:h-[50px] md:text-[20px] text-[12px] w-[110px] h-[40px] absolute top-[25%] right-[2%] md:top-[18%] md:right-[5%]  rounded-4xl shadow-lg text-white bg-[#f14242] flex justify-center items-center">
                        Setup Your Home
                    </div>

                    <div className="w-[90%] flex flex-col items-start justify-start gap-3">
                        <label htmlFor="title" className="text-[20px]">Title</label>
                        <input
                            type="text"
                            id="title"
                            className="w-[90%] h-[40px] border-2 border-gray-300 rounded-md text-lg px-4 py-3"
                            onChange={(e) => setTitle(e.target.value)} value={title}
                            required
                        />
                    </div>

                    <div className="w-[90%] flex flex-col items-start justify-start gap-3">
                        <label htmlFor="description" className="text-[20px]">Description</label>
                        <textarea
                            id="description"
                            className="w-[90%] h-[80px] border-2 border-gray-300 rounded-md text-lg px-4 py-3"
                            onChange={(e) => setDescription(e.target.value)} value={description}
                            required
                        ></textarea>
                    </div>

                    <div className="w-[90%] flex flex-col items-start text-left gap-3">
                        <label htmlFor="image1" className="text-[20px]">Image 1</label>
                        <div className="flex items-center justify-start w-[90%] h-[55px] border-2 border-gray-300 rounded-md text-lg px-4 py-3">
                            <input
                                type="file"
                                id="image1"
                                className="w-[30%] h-[30px] text-[78%] px-[20px] border-2 border-gray-700 rounded-md"
                                required
                                onChange={handleImage1}
                            />
                        </div>
                    </div>

                    <div className="w-[90%] flex flex-col items-start text-left gap-3">
                        <label htmlFor="image2" className="text-[20px]">Image 2</label>
                        <div className="flex items-center justify-start w-[90%] h-[55px] border-2 border-gray-300 rounded-md text-lg px-4 py-3">
                            <input
                                type="file"
                                id="image2"
                                className="w-[30%] h-[30px] text-[78%] px-[20px] border-2 border-gray-700 rounded-md"
                                required
                                onChange={handleImage2}
                            />
                        </div>
                    </div>

                    <div className="w-[90%] flex flex-col items-start text-left gap-3">
                        <label htmlFor="image3" className="text-[20px]">Image 3</label>
                        <div className="flex items-center justify-start w-[90%] h-[55px] border-2 border-gray-300 rounded-md text-lg px-4 py-3">
                            <input
                                type="file"
                                id="image3"
                                className="w-[30%] h-[30px] text-[78%] px-[20px] border-2 border-gray-700 rounded-md"
                                required
                                onChange={handleImage3}
                            />
                        </div>
                    </div>

                    <div className="w-[90%] flex flex-col items-start justify-start gap-3">
                        <label htmlFor="Rent" className="text-[20px]">Rent</label>
                        <input
                            type="text"
                            id="Rent"
                            className="w-[90%] h-[40px] border-2 border-gray-300 rounded-md text-lg px-4 py-3"
                            required
                            onChange={(e) => setRent(e.target.value)} value={rent}
                        />
                    </div>

                     <div className="w-[90%] flex flex-col items-start justify-start gap-3">
                        <label htmlFor="City" className="text-[20px]">City</label>
                        <input
                            type="text"
                            id="City"
                            className="w-[90%] h-[40px] border-2 border-gray-300 rounded-md text-lg px-4 py-3"
                            required
                            onChange={(e) => setCity(e.target.value)} value={city}
                        />
                    </div>

                    <div className="w-[90%] flex flex-col items-start justify-start gap-3">
                        <label htmlFor="landmark" className="text-[20px]">Landmark</label>
                        <input
                            type="text"
                            id="landmark"
                            className="w-[90%] h-[40px] border-2 border-gray-300 rounded-md text-lg px-4 py-3"
                            onChange={(e) => setLandmark(e.target.value)}
                            required
                        />
                    </div>
                    <div className="w-[80%] flex flex-col  justify-end items-end gap-3">
                       <button type="submit" className=" bg-[#f14242] text-white rounded-md px-4 py-2 ">Submit</button>
                    </div>
                    
                </div>
            </form>
        </div>
    );
};

export default ListingPage;
