import React from "react";
import Image from "next/image";
import { missionData } from "@/data/missionData";
import MissionCheckBox from "./MissionCheckBox";
import WhatWeDo from "./WhatWeDo";
import members from "../../public/membersimage.png";
export default function Mission() {
  const checkBoxes = missionData.map((data, key) => {
    return <MissionCheckBox key={key} text={data} />;
  });

  return (
    <div className="bg-[#202835]">
      <div className="flex flex-col md:flex-row gap-8 w-[85%] py-24 mx-auto">
        <div className="w-3/4 h-3/4">
        <Image
        src={members}
        width={800}
        height={200}
        className="mb-8 w-full h-1/2 mx-auto border text-white "
      />
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
