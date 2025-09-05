import {useState} from "react";
import { Link } from "react-router-dom";


const SignupPage = () => {
  
  const [number, setNumber] = useState("");
  console.log(number)

  const SubmitHandler = (e) => {
    e.preventDefault()
    //alert("Phone Number: " + number)
  }

  return (
    <>
    {/* Signup Page 
    <form onSubmit={SubmitHandler}>

         <div className="min-h-screen items-center justify-center flex " >
        <div className="border-1 rounded-md shadow-lg max-w-lg  p-4">
            <p className="font-bold text-lg p-4 mb-5 border-b-1">Login or Sign up</p>
            <div className="m-9 text-left align-items-left">
                <h1 className="font-bold text-2xl   mb-5">Welcome to Airbnb</h1>
                <select className="w-106 border-1 rounded-md h-12 p-2" >
                    <option label="Select your country"></option>
                    <option value="+92">PK (+92)</option>
                    <option value="+44">UK (+44)</option>
                    <option value="+1">USA (+1)</option>
                    <option value="+91">India (+91)</option>
                </select>
                <input type='number' placeholder="Phone Number" className="border-1 rounded-md p-3  w-106 h-12 mb-4" 
                  value={number} onChange={(e) => setNumber(e.target.value)}
                 />
                <p className="mb-5">We’ll call or text you to confirm your number. Standard message and data rates apply. Privacy Policy</p>
                <button type="Submit" className="bg-red-400 w-106 text-white rounded-md p-2 hover:bg-red-500">Continue</button>
            </div>
            div className="items-center m-9 text-left flex"> 
    <label htmlFor="FirstName" className="mr-4 font-bold text-2xl text-red-500">First Name</label>
    <input type="text" id="FirstName" placeholder="Enter text" className="border-1 rounded-md p-2 w-60" />
  </div>
  <div className="items-center m-9 text-left flex"> 
    <label htmlFor="LastName" className="mr-4 font-bold text-lg text-red-500">Last Name</label>
    <input type="text" id="LastName" placeholder="Enter text" className="border-1 rounded-md p-2 w-55" />
  </div>
  <div className="items-center m-9 text-left flex"> 
    <label htmlFor="FirstName" className="mr-4 font-bold text-2xl text-red-500">FirstName</label>
    <input type="text" id="FirstName" placeholder="Enter text" className="border-1 rounded-md p-2 w-full" />
  </div>
  <div className="items-center m-9 text-left flex"> 
    <label htmlFor="FirstName" className="mr-4 font-bold text-2xl text-red-500">FirstName</label>
    <input type="text" id="FirstName" placeholder="Enter text" className="border-1 rounded-md p-2 w-full" />
  </div>
        </div>
    </div>
    </form>*/}
<div className="min-h-screen md:max-h-full bg-gray-200 items-center justify-center px-5 md:px-2  flex">
<form action="" className="  w-full md:max-w-4xl bg-white p-8 md:p-20 rounded-lg shadow-lg ">
  <div>
    <h2 className="text-3xl font-bold mb-6 text-center md:text-4xl md:mb-10 border-gray-200 border-b-2 pb-10  ">Sign Up</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 mt-2 md:mb-10 ">
      <input type="text" name="" id="" placeholder="First Name" className=" w-full border-1 rounded-md py-2 px-3 md:px-2 md:w-full " />
      <input type="text" name="" id="" placeholder="Last Name" className=" w-full border-1 rounded-md py-2 px-3 md:px-2 md:w-full " />

    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-5 gap-4 mt-4 md:mb-10">
      <input type="text" name="" id="" placeholder="Email" className=" w-full border-1 rounded-md py-2 px-3 md:px-2 md:w-full" />
      <input type="password" name="" id="" placeholder="Password" className=" w-full border-1 rounded-md py-2 px-3 md:px-2 md:w-full" />

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
