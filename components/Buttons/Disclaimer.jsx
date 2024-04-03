"use client";

import { useState, useEffect } from "react";
import { TiDeleteOutline } from "react-icons/ti";

export default function Disclaimer() {
  const [disclaimer, setDisclaimer] = useState(false);

  useEffect(() => {
    setDisclaimer(true);
  }, []);

  function handleDisclaimerClick() {
    setDisclaimer(false);
  }

  return (
    <div
      className={`flex items-center font-montserrat bg-[#f05814] fixed w-[75%] md:w-[35dvw] text-white bottom-3 right-3 rounded-md z-[100] ${
        !disclaimer && "hidden"
      }`}
    >
      <div className="p-[1rem] w-[90%]">
        This is not a site for personal disclosure of mental health distress,
        suicidal thoughts or behaviours. If you are in crisis, please
        <span className="font-bold text-black"> call 911 </span>
        or go to your nearest emergency department for assistance.
      </div>
      <div className="flex items-center justify-center">
        <TiDeleteOutline
          onClick={handleDisclaimerClick}
          className="text-3xl cursor-pointer"
        />
      </div>
    </div>
  );
}
