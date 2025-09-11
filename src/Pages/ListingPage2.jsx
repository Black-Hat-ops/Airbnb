import React, { useState } from "react";
import ListingPage from "./ListingPage";
import { useNavigate } from "react-router-dom";

const ListingPage2 = () => {

const navigate = useNavigate();

const [category , setCatogory] = useState()
console.log("selected category" , category);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-6">
      {/* Back Button */}
      <div className="absolute top-6 left-6">
        <button className="w-12 h-12 flex items-center justify-center bg-red-500 text-white rounded-full shadow-md hover:bg-red-600 transition">
          ←
        </button>
      </div>

      {/* Title */}
      <h1 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-10 text-center">
        Which of these best describes your place?
      </h1>

      {/* Category Cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-3xl">
        <div 
         onClick={() => setCatogory("Villa")}
         className={`flex flex-col items-center justify-center p-6 bg-white border rounded-xl shadow hover:shadow-lg transition ${category == "villa" ? "border-3 border-red-500":""}`}>
          <span className="text-4xl mb-3">🏠</span>
          <p className="text-lg font-medium text-gray-700">Villa</p>
        </div>

        <button 
         onClick={(e) => setCatogory("Farm House")}
        className={`flex flex-col items-center justify-center p-6 bg-white border rounded-xl shadow hover:shadow-lg hover:border-red-500 transition ${category == "Farm House" ? "border-3 border-gray-300":""}`}>
          <span className="text-4xl mb-3">🌳</span>
          <p className="text-lg font-medium text-gray-700">Farm House</p>
        </button>

        <button 
         onClick={(e) => setCatogory("Pool House")}
        className={`flex flex-col items-center justify-center p-6 bg-white border rounded-xl shadow hover:shadow-lg hover:border-red-500 transition ${category == " Pool House " ? "border-3 border-gray-300":  ""}`}>
          <span className="text-4xl mb-3">🏊</span>
          <p className="text-lg font-medium text-gray-700">Pool House</p>
        </button>

        <button 
         onChange={(e) => setCatogory("Rooms")}
         className={`flex flex-col items-center justify-center p-6 bg-white border rounded-xl shadow hover:shadow-lg hover:border-red-500 transition ${category == "Rooms" ? "border-3 border-gray-300":""}`}>
          <span className="text-4xl mb-3">🛏️</span>
          <p className="text-lg font-medium text-gray-700">Rooms</p>
        </button>

        <button 
         onChange={(e) => setCatogory("Flat")}
        className={`flex flex-col items-center justify-center p-6 bg-white border rounded-xl shadow hover:shadow-lg hover:border-red-500 transition ${category == "Flat" ? "border-3 border-gray-300":""}`}>
          <span className="text-4xl mb-3">🏢</span>
          <p className="text-lg font-medium text-gray-700">Flat</p>
        </button>

        <button 
         onChange={(e) => setCatogory("PG")}
        className={`flex flex-col items-center justify-center p-6 bg-white border rounded-xl shadow hover:shadow-lg hover:border-red-500 transition ${category == "PG" ? "border-3 border-gray-300":""}`}>
          <span className="text-4xl mb-3">🛋️</span>
          <p className="text-lg font-medium text-gray-700">PG</p>
        </button>

        <button 
        onChange={(e) => setCatogory("cabin")}
        className={`flex flex-col items-center justify-center p-6 bg-white border rounded-xl shadow hover:shadow-lg hover:border-red-500 transition ${category == "cabin" ? "border-3 border-gray-300":""}`}>
          <span className="text-4xl mb-3">🛋️</span>
          <p className="text-lg font-medium text-gray-700">cabin</p>
        </button>

        <button 
        onChange={(e) => setCatogory("shope")}
        className={`flex flex-col items-center justify-center p-6 bg-white border rounded-xl shadow hover:shadow-lg hover:border-red-500 transition ${category == "villa" ? "border-3 border-gray-300":""}`}>
          <span className="text-4xl mb-3">🛋️</span>
          <p className="text-lg font-medium text-gray-700">Shope</p>
        </button>
      </div>

      {/* Submit Button */}
      <div className="mt-10">
        <button disabled={!category} className="px-6 py-3 bg-red-500 text-white font-medium rounded-full shadow-md hover:bg-red-600 transition"
         onClick={() =>{ navigate('/listing3') }}
        >
          Set Your Category
        </button>
      </div>
    </div>
  );
};

export default ListingPage2;
