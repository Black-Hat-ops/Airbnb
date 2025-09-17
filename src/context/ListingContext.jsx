import React, { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";

export const listingDataContext = createContext()

const ListingContext = ({ children }) => {


     
    const navigate = useNavigate()
     const [title, setTitle] = useState()
    const [description, setDescription] = useState()
    const [frontEndImage1, setFrontEndImage1] = useState()
    const [frontEndImage2, setFrontEndImage2] = useState()
    const [frontEndImage3, setFrontEndImage3] = useState()
    const [backEndImage1, setbackEndImage1] = useState()
    const [backEndImage2, setbackEndImage2] = useState()
    const [backEndImage3, setbackEndImage3] = useState()
    const [rent, setRent] = useState()
    const [city, setCity] = useState()
    const [landmark, setLandmark] = useState()
    const [category, setCategory] = useState()
    const [adding, setadding] = useState(false)
    const [listingData , setListingData] = useState([])
    const [cardDetails , setCardDetails] = useState(null)


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

const addListing = async (params) => {
    setadding(true)
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

  const result = await axios.post (serverURL + '/api/listing',formData ,{ withCredentials:true })
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
        setadding(false)
        console.log(error)
    }
}

const handleViewCard = async (id) => {
    try {
        let result =  await axios.get(serverURL + `/api/listing/findlistingByid/${id}`, {withCredentials :  true})
        setCardDetails(result.data)
        navigate('/viewcard')
    } catch (error) {
        console.log(error)
    }
   }

useEffect(() => {
const getListing = async () => {
    try {
        let result = await axios.get( serverURL + "/api/listing/get" ,{withCredentials: true})
        console.log(result)
        setListingData(result.data)
    } catch (error) {
        
    }
}
}, [adding])


    const DataValue = {
        title, setTitle, description, setDescription,
        frontEndImage1, setFrontEndImage1,
        frontEndImage2, setFrontEndImage2,
        frontEndImage3, setFrontEndImage3,
        backEndImage1, setbackEndImage1,
        backEndImage2, setbackEndImage2,
        backEndImage3, setbackEndImage3,
        rent, setRent,
        city, setCity,
        landmark, setLandmark,
        category, setCategory,
       adding , setadding ,
       listingData , setListingData,
       handleViewCard , cardDetails , setCardDetails
    }

    return (
        <listingDataContext.Provider value={DataValue} >
            {children}
        </listingDataContext.Provider>

    )

}

export default ListingContext