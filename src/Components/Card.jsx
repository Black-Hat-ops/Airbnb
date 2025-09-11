 import React from "react";

const Card =() => {
  
   

    return(
        <div className="w-[330px] max-w-[85%] h-[460px] flex items-start justify-start flex-col rounded-lg cursor-pointer bg-slate-800">
          <div className="w-[100%] h-[67%] bg-gray-700 rounded-lg overflow-auto flex">
            <img className="w-full flex-shrink-0 " src={Image1} alt="" />
             <img className="w-full flex-shrink-0 " src={Image2} alt="" />
              <img className="w-full flex-shrink-0 " src={Image3} alt="" />
          </div>
          <div className="w-[100%] h-[33%] py-[20px] flex felx-col gap-2"  >
            <span className="w-[80%] text-ellipsis font-semibold text-nowrap overflow-hidden" >IN {landmark.toUpperCase()} , {city.toUpperCase()}</span>
            <span className="text">{title.toUpperCase()}</span>
            <span>Pkr {rent}/day</span>
          </div>
        </div>

    )
};

export default Card;