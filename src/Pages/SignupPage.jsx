import {useContext, useState} from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import { authDataContext } from "../context/AuthContext";


const SignupPage = () => {
  
  const {serverUrl} = useContext(authDataContext)
  console.log( serverUrl)
  const [firstname , setFirstname] = useState("");
  const [lastname , setlastname] = useState("");
  const [email , setEmail] = useState("");
  const [password , setPassword] = useState("");

  const [show , setShow] = useState(false)

  const SubmitHandler = async (e) => {
    try {
      e.preventDefault()
      const result = await axios.post("http://localhost:4000/api/auth/signup",{
        firstname,
        lastname ,
        email,
        password

      },{withCredentials : true})
      
    } catch (error) {
      console.log(error)
    }
    
  }

  return (
    <>

<div className="min-h-screen md:max-h-full bg-gray-200 items-center justify-center px-5 md:px-2  flex">
<form action="" onSubmit={(SubmitHandler)} className="  w-full md:max-w-4xl bg-white p-8 md:p-20 rounded-lg shadow-lg ">
  <div>
    <h2 className="text-3xl font-bold mb-6 text-center md:text-4xl md:mb-10 border-gray-200 border-b-2 pb-10  ">Sign Up</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 mt-2 md:mb-10 ">
      <input type="text" name="" id="" placeholder="First Name" className=" w-full border-1 rounded-md py-2 px-3 md:px-2 md:w-full " 
       value={firstname}
       onChange={(e) => setFirstname(e.target.value)}
      />
      <input type="text" name="" id="" placeholder="Last Name" className=" w-full border-1 rounded-md py-2 px-3 md:px-2 md:w-full " 
       value={lastname}
       onChange={(e) => setlastname(e.target.value)}
      />

    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-5 gap-4 mt-4 md:mb-10">
      <input type="text" name="" id="" placeholder="Email" className=" w-full border-1 rounded-md py-2 px-3 md:px-2 md:w-full" 
       value={email}
       onChange={(e) => setEmail(e.target.value)}
      />
      <input type={show ? "text" : "password"} name="" id="" placeholder="Password" className=" w-full border-1 rounded-md py-2 px-3 md:px-2 md:w-full" 
       value={password}
       onChange={(e) => setPassword(e.target.value)}
      />
      {!show && <div className="w-[25px] md:text-2xl absolute text-lg top-[80%] right-[12%] md:top-[65%] md:right-[27%]"> <i class="ri-eye-close-fill " onClick={() => setShow(prev => !prev) }></i></div> }
      {show && <div className="w-[25px]  md:text-2xl absolute text-lg top-[80%] right-[12%] md:top-[65%] md:right-[27%]"> <i class="ri-eye-fill" onClick={() => setShow(prev => !prev) }></i></div> }
    </div>

    <div>
      <button type="submit" className="bg-red-400 w-full text-white rounded-md p-2 hover:bg-red-500 mt-4 md:px-2 md:w-full">Sign Up</button>
      <p className="mt-5 border-t-2 border-gray-200 pt-4">If you already have an account, <Link to='/login' className="text-red-500">log in</Link>.</p>
    </div>
    


  </div>
</form>
    </div>


 
    </>
  );
};

export default SignupPage;
