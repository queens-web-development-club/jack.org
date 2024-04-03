import LearnButton from "../Buttons/LearnButton";
import { whatWeDo } from "@/data/missionData";

export default function WhatWeDo() {
  return (
    <div className="border-4 font-montserrat text-white w-[85%] mx-auto bg-[#202835] p-8">
      <h1 className="text-5xl font-montserrat text-center font-bold text-[#22B1E9] mb-8">
        What We Do
      </h1>
      <div className="flex-row xl:flex gap-12 justify-around text-center pt-8 text-4xl font-montserrat font-semibold">
        {whatWeDo.map((item, key) => (
          <div className="w-full sm:w-4/5 mx-auto xl:ml-0 xl:w-1/3 mt-12 xl:mt-0 pb-12 xl:pb-0" key={key}>
            {item.title}
            <div className="flex flex-col justify-between h-[91%]">
              <p className="font-normal text-xl sm:text-2xl mt-4">{item.text}</p>
              <div className="m-0 mt-6 xl:mt-12">
                <LearnButton />
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* <div className="flex h-[120px]">
        {Array.from({ length: 3 }).map((_, key) => (
          <div className="flex justify-center flex-1" key={key}>
            <LearnButton />
          </div>
        ))}
      </div> */}
    </div>
  );
}
