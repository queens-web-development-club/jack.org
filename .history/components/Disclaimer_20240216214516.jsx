import React from "react";

export default function Disclaimer(props) {
  return (
    <div 
      className="font-montserrat bg-[#f05814] fixed w-[100dvw] text-white text-[24px] p-4 bottom-0"
    >
      <div className="w-[80%]">
        This is not a site for personal disclosure of mental health distress,
        suicidal thoughts or behaviours. If you are in crisis, please
        <span className="font-bold text-black"> call 911 </span>
        or go to your nearest emergency department for assistance.
      </div>
      <img 
        src="cross.png"
        alt="x button" 
        className="w-[20px]"
      />
    </div>
  )
}