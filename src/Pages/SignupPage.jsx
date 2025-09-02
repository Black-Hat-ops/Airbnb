import React from "react";

const SignupPage = () => {
  return (
    <>
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
                <input type='number' placeholder="Phone Number" className="border-1 rounded-md p-3  w-106 h-12 mb-4" />
                <p className="mb-5">We’ll call or text you to confirm your number. Standard message and data rates apply. Privacy Policy</p>
                <button className="bg-red-400 w-106 text-white rounded-md p-2 hover:bg-red-500">Continue</button>
            </div>
        </div>
    </div>
    </>
  );
};

export default SignupPage;
