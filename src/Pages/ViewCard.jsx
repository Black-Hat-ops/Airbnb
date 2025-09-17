import React, { useContext, useState } from "react";
import { listingDataContext } from "../context/ListingContext";
import { Link, useNavigate } from 'react-router-dom'


const ViewCard = () => {

  //form input list
  const [title, setTitle] = useState()
      const [description, setDescription] = useState()
      const [backEndImage1, setbackEndImage1] = useState()
      const [backEndImage2, setbackEndImage2] = useState()
      const [backEndImage3, setbackEndImage3] = useState()
      const [rent, setRent] = useState()
      const [city, setCity] = useState()
      const [landmark, setLandmark] = useState()
      const [category, setCategory] = useState()
      /*  const [title, setTitle] = useState(cardDetails.title)
      const [description, setDescription] = useState(cardDetails.description)
      
      
      const [backEndImage1, setbackEndImage1] = useState(cardDetails.backEndImage1)
      const [backEndImage2, setbackEndImage2] = useState(cardDetails.backEndImage2)
      const [backEndImage3, setbackEndImage3] = useState(cardDetails.backEndImage3)
      const [rent, setRent] = useState(cardDetails.rent)
      const [city, setCity] = useState(cardDetails.city)
      const [landmark, setLandmark] = useState(cardDetails.landmark)
      const [category, setCategory] = useState(cardDetails.category)
 */
       const handleImage1 = (e) => {
        let file = e.target.files[0]
        //setFrontEndImage1(URL.createObjectURL(file));
        setbackEndImage1(file);
    }
    
    const handleImage2 = (e) => {
        let file = e.target.files[0]
        //setFrontEndImage2(URL.setFrontEndImage2(file))
        setbackEndImage2(file)
    }

    const handleImage3 = (e) => {
        let file = e.target.files[0]
        //setFrontEndImage3(URL.setFrontEndImage2(file))
        setbackEndImage3(file)
    }
  
  const navigate = useNavigate()
  //form updateing list
  
  const {updating , setupdating} = useContext(listingDataContext)

  const handleUpdateListing = async () => {
    setupdating(true)
    try {

    const formData = new FormData()
    formData.append(title, setTitle)
    formData.append(description, setDescription)
    formData.append(frontEndImage1, setFrontEndImage1)
    formData.append(frontEndImage2, setFrontEndImage2)
    formData.append(frontEndImage3, setFrontEndImage3)
    formData.append(backEndImage1, setbackEndImage1)
    formData.append(backEndImage2, setbackEndImage2)
    formData.append(backEndImage3, setbackEndImage3)
    formData.append(rent, setRent)
    formData.append(city, setCity)
     formData.append(landmark, setLandmark)
formData.append(category, setCategory)

  const result = await axios.post (serverURL + `/api/update/:${cardDetails._id}`,formData ,{ withCredentials:true })
  setadding(false)
  console.log.apply(result)
  navigate("/")
  setTitle("")
  setDescription("")
  setFrontEndImage1(null)
  setFrontEndImage2(null)
  setFrontEndImage3(null)
  setbackEndImage1(null)
  setbackEndImage2(null)
  setbackEndImage3(null)
  setRent("")
  setCity("")
  setLandmark("")
  
    } catch (error) {
      
        console.log(error)
    }
    
  }

  
  //const navigate = useNavigate()
  const { cardDetails } = useContext(listingDataContext)
  let [updatePopUp, setUpdatePopUp] = useState(false)
  return (
    <>
      <div className="w-[100%] h-[100vh] bg-[white] flex items-center justify-center gap-[10px] flex-col overflow-auto relative">
        <div className="w-[95%] flex items-start justify-start text-[25px] md:w-[80%] mb-[10px]">
          <h1 className="text-[20px] text-gray-800 md:text-[30px] text-ellipsis text-nowrap overflow-hidden">
            {/*  {`In ${cardDetails.landMark.toUpperCase()} , ${cardDetails.city.toUpperCase()}`} */} Gujranwala , Gjranwala
          </h1>
        </div>
        <div className="w-[95%] h-[400px] flex items-center justify-center flex-col md:w-[80%] md:flex-row bg-black  ">
          <div className="w-[100%] h-[65%] md:w-[70%] md:h-[100%] overflow-hidden flex items-center justify-center border-2 border-white bg-red-500 ">
            {/*  <img src={cardDetails.image1} alt="" className="w-[100%]" /> */}
          </div>
          <div className="w-full h-[30%] flex items-center justify-center md:w-[30%] md:h-[100%] md:flex-col ">
            <div className="w-full h-full overflow-hidden flex items-center justify-center border-[2px] border-white">
              {/* <img src={cardDetails.Image2} alt="" className="w-full"/> */}
            </div>
            <div className="w-full h-full overflow-hidden flex items-center justify-center border-[2px] border-white">
              {/* <img src={cardDetails.Image3} alt="" className="w-full" /> */}
            </div>
          </div>

        </div>
        <div className="w-[95%] flex items-start justify-start text-[18px] md:[80%] md:text-[25px]">
          {/* {`${cardDetails.title.toUpperCase()}, ${cardDetails.category.toUpperCase()},${cardDetails.title.toUpperCase()} , ${cardDetails.landmark.toUpperCase() }`} */}Vilah , lahore
        </div>
        <div className="w-[95%] flex items-start justify-start text-[18px] md:[80%] md:text-[25px]">
          {/*  {`${cardDetails.description.toUpperCase()}`} */} Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto quibusdam obcaecati error recusandae possimus nam non quis, laboriosam similique illum aliquam alias fugit nisi dolore suscipit quod, voluptatem impedit earum?
        </div>
        <div className="w-[95%] flex items-start justify-start text-[18px] md:[80%] md:text-[25px]">
          {/*   {`${cardDetails.rent.toUpperCase()}`} */}RS 2000
        </div>
        <div className="w-[80%] flex flex-col  justify-end items-end gap-3">
          {/* {cardDetails.host == userData._id && <div><button type="submit"  onClick={() => setUpdatePopUp(prev => !perv)} className=" bg-[#f14242]  text-white rounded-md px-4 py-2  mb-10">Editing </button>
                       </div>}
                       {cardDetails.host != userData._id && <div><button type="submit"  className=" bg-[#f14242]  text-white rounded-md px-4 py-2  mb-10">booking</button>
                       </div>} */}<div><button type="submit" onClick={() => setUpdatePopUp(prev => !prev)} className=" bg-[#f14242]  text-white rounded-md px-4 py-2  mb-10">Editing </button>
          </div>
        </div>
        <div>
          {/* Upadte listing page */}
          {updatePopUp && <div className="w-full  h-[150%] flex items-center justify-center bg-[#1c1c1c3d] absolute top-0 left-0 z-5 backdrop-blur-sm ">
          <div className= "" onClick={() => setUpdatePopUp(false)} ><i className="ri-close-large-line max-w-[50px] h-[50px] text-2xl cursor-pointer absolute top-[5%] left-[20px] rounded-[50%] flex items-center justify-center" ></i></div>
          <form
                          action=""
                          className="max-w-[900px] w-[90%]  flex flex-col justify-start items-start gap-[10px] scroll-hidden"
                          onSubmit={(e)=>{e.preventDefault() 
                              navigate("/listing2")
                          } }
                      >
                         
          
                          <div className="w-[100%]  flex flex-col items-start gap-5 text-left ">
                              
          
                              <div className="w-[90%]  flex flex-col items-start justify-start gap-3">
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
                                 <button onClick={ handleUpdateListing } type="submit" className=" bg-[#f14242] text-white rounded-md px-4 py-2 ">Submit</button>
                              </div>
                              
                          </div>
                      </form>
          </div>}
        </div>

      </div>
    </>
  )
}

export default ViewCard