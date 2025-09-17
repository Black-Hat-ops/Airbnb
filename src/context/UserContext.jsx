import React, { Children, createContext, useContext, useEffect, useState } from "react";
import { authDataContext } from "./AuthContext";
import axios, { Axios } from "axios";

export const userDataContext = createContext()

const UserContext = ({children}) => {
     
   const serverId = useContext(authDataContext)
   const [userData , setUserData] = useState(null)

   const getCurrentUser = async () => {
    try {
        const result = await axios.get( serverId+ '/api/auth/user' , {
            withCredentials:true
        })
        setUserData(result.data)
    } catch (error) {
        setUserData(null)
        console.log(error)
        
    }
   }
   useEffect(() => {
    getCurrentUser()
   },[])
    const Datavalue = {
        userData,
        setUserData
    }

    return(
        <userDataContext.Provider value={Datavalue}>
            {children}
        </userDataContext.Provider>
    )
}

export default UserContext;