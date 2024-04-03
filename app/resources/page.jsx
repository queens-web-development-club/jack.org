import Banner from "@/components/resources/Banner";
import React from "react";

export default function Resources() {
  return (
    <div
      className="bg-[#202835]"
    >
      <h1
        className="font-montserrat text-white text-5xl font-bold p-8 text-center"
      >
        Your Health is A Priority!</h1>
        <Banner 
          image="resources1.svg"
        />

        {/* resources cards go here */}

        <Banner 
          image="resources2.svg"
        />

        <Banner 
          image="resources3.svg"
        />

        <Banner 
          image="resources4.svg"
        />

        <Banner 
          image="resources5.svg"
        />

        <Banner 
          image="resources6.svg"
        />

        {/* tip cards go here */}

    </div>
  )
}
