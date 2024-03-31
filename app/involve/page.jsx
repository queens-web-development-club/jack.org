import Image from "next/image";
import React from 'react'
import members from "../../public/membersimage.png"
import summit from "../../public/summitimage.png"
import events from "../../public/eventsimage.png"

export default function Involve() {
  return (
    <div className="flex bg-[#2F405B] lg:px-48 px-2 flex-col !gap-2 md:!gap-2 lg:gap-2 pt-[40px] mb-12 md:mb-16">
    <div className="text-center lg:px-32 px-4">
      <p className="text-white font-bold md:text-4xl text-2xl">Want to join jack.org Queen’s Chapter?</p>
      <p className="flex text-white text-lg pt-8">Applications to join us are currently closed. Please come back when we post our hiring opportunities in MONTH. And look for other opportunities to get involved as a mental health activists above/below!</p>  
    </div>
    <div className="flex text-white flex-col pt-[32px]">
      <p className="text-2xl font-bold">If you are: </p>
      <ul className="list-disc pl-12 text-xl">
      <li className="">Seeking Leadership Opportunities</li>
      <li className="">Passionate about Mental Health Advocacy</li>
      <li className="">Eager to Connect with Like-Minded Individuals</li>
      <li className=" ">Committed to Personal Growth and Resilience</li>
      </ul>
      <p className="text-2xl font-bold pt-4">Apply to Join us Today!</p>

    </div>
    <div className="flex lg:flex-row lg:px-16 flex-col gap-8 items-center text-white">
  <div className="flex-grow font-bold md:text-2xl text-xl">Class 1
  <Image
            src={members}
            alt=""
            width={300}
            className="lg:w-[75%] rounded-[20px]"
          ></Image> 
  
  </div>
  <div className="flex-grow font-bold md:text-2xl text-xl text-center">
    <p className="w-fit mx-auto">Class 2</p>
  <Image
            src={summit}
            alt=""
            width={300}
            className="lg:w-[75%] rounded-[20px]"
          ></Image></div>
  <div className="flex-grow font-bold md:text-2xl text-xl text-center">Class 3
  <Image
            src={events}
            alt=""
            width={300}
            className="lg:w-[75%] rounded-[20px]"
          ></Image></div>
</div>
    </div>
  )
}
