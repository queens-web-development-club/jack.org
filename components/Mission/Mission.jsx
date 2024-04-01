import React from "react";
import { missionData } from "@/data/missionData";
import MissionCheckBox from "./MissionCheckBox";
import WhatWeDo from "./WhatWeDo";

export default function Mission() {
  const checkBoxes = missionData.map((data, key) => {
    return <MissionCheckBox key={key} text={data} />;
  });

  return (
    <div className="bg-[#202835]">
      <div className="flex-row md:flex gap-8 w-[85%] py-24 mx-auto">
        <div className="mb-8 w-full md:w-1/2 h-[525px] mx-auto border text-white shrink-0">
          image gallery will go here ig
        </div>
        <div className="font-montserrat text-white">
          <h1 className="text-4xl pb-4 mb-4 font-bold h-fit border-b-2 border-b-solid border-b-white">
            Our Mission
          </h1>
          <div className="text-base xl:text-xl">
            <p>
              Our vision is to create a place at Queen&apos;s where every young
              person is comfortable talking about and taking care of their
              mental health.
            </p>
            <p className="mb-4 xl:mb-8">
              We want everyone to have barrier-free access to the support that
              they deserve.
            </p>
            <p className="text-2xl xl:text-3xl text-[#f05814] font-semibold pb-2">
              Our key focus areas:
            </p>
            {checkBoxes}
          </div>
        </div>
      </div>

      <WhatWeDo />
    </div>
  );
}
