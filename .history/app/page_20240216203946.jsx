"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [disclaimer, setDisclaimer] = React.useState(false)

  React.useEffect(() => {
    setDisclaimer(true)
  }, []);

  function handleDisclaimerClick() {
    setDisclaimer(false)
  }

  return (
    <main className="bg-[#5f81a0] h-[100dvh] font-montserrat overflow-auto">
      <div className="mt-[151px] text-[56px] text-[#ffffff] font-bold w-[80%] mx-auto leading-[70px]">
        <span className="text-[#f05814]">Mental Health</span> advocates<br />
        at Queen's
        <p className="text-[28px] font-normal leading-[40px] mt-[25px]">
          Jack.org Queen’s Chapter is a youth-led mental 
          health initiative working to break down the 
          stigma associated with mental health and illness, 
          and reduce barriers to accessing mental health care on the
          Queen’s University campus.
        </p>

        <motion.button 
          className="border-[#22B1E9] border-4 border-solid font-semibold text-[28px] px-[40px] mt-[50px]"
          initial={{scale: 1}}
          whileHover={{
            scale: 1.1,
            transition: {duration: 0.25},
          }}
          whileTap={{
            scale: 0.9,
            transition: {duration: 0.25},
          }}
        >
          Learn More
        </motion.button>
      </div> 
      {disclaimer && <div 
        className="font-montserrat bg-[#f05814] fixed w-[100dvw] text-white text-[24px] p-4"
      >
        <div className="w-[80%]">
          This is not a site for personal disclosure of mental health distress,
          suicidal thoughts or behaviours. If you are in crisis, please
          <span> call 911 </span>
          or go to your nearest emergency department for assistance.
        </div>
      </div>}
    </main>
  );
}
