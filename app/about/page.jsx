import React from "react";
import Image from "next/image";
import teamimage from "../../public/team.jpg";
import Examples from "@/components/about/Examples";

export default function About() {
  return (
    <div className='flex bg-[#2F405B] flex-col !gap-2 md:!gap-2 lg:gap-2 pt-[40px] text-center'>
      <div className="w-[85%] mx-auto">
        <div className="flex flex-col lg:flex-row gap-2 items-center justify-between">
          <div className="flex flex-col justify-center gap-2 w-full lg:w-[45%] lg:text-left text-center">
            <h1 className="font-montserrat text-white font-bold text-[28px] md:text-[48px]">
              About Our Chapter:
            </h1>
            <div className="text-lg flex flex-col gap-4">
              <p className={"text-white"}>
              Our Jack Chapter is made up of approximately 30 executives and 70 general members working together to revolutionize youth mental health. We are proud to say we are the first and largest chapter in Canada!
              </p>
              
            </div>
          </div>
          <Image
            src={teamimage}
            alt=""
            width={500}
            className="lg:w-[45%] rounded-[20px]"
          ></Image>
        </div>
        <div className="">
          <Examples />
        </div>
        <main className="bg-[#2F405B] min-h-screen px-[10%] py-[5%]">
          <TeamCard />
        </main>
      </div>
    </div>
  )
}