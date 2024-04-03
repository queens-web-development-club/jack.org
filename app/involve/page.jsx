import Image from "next/image";
import Events from "@/components/involve/Events";
import React from 'react';
import members from "../../public/membersimage.png"
import summit from "../../public/summitimage.png"
import events from "../../public/eventsimage.png"
import movement from "../../public/movement.png"
export default function Involve() {
  return (
    <main className="bg-[#2F405B] min-h-screen py-[5%]">
      <div className="px-[10%]">
      <section>
        <h1 className="text-center font-bold text-white text-5xl">
          Get Involved with Us!
        </h1>
        <div className="flex justify-center items-center">
          <Image
            src={"/team/team-summit.png"}
            alt="summit team"
            width={584}
            height={223}
            className="mt-[3rem] w-full"
            sizes="100vw"
          />
        </div>
      </section>
      
      <Events/>
      </div>
      <div>
    <div className="flex bg-[#2F405B] lg:px-48 px-2 flex-col !gap-2 md:!gap-2 lg:gap-2 pt-[40px] ">
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
    <div className="flex xl:flex-row px-4 xl:px-16 flex-col gap-8 items-center text-white">
    <div className="flex-grow font-bold md:text-2xl text-xl">
  <p className="w-fit mx-auto">Members</p>
  <div className="flex flex-col items-center justify-center"> 
    <Image
      src={members}
      alt=""
      width={300}
      className="xl:w-[75%] rounded-[20px]"
    ></Image>
    <button className="mt-4 px-6 py-2 bg-transparent text-white border-2 border-solid border-white rounded-lg hover:bg-[#F09E24] hover:border-2 hover:border-transparent">Apply Now</button>
  </div>
</div>
<div className="flex-grow font-bold md:text-2xl text-xl">
  <p className="w-fit mx-auto">Summit</p>
  <div className="flex flex-col items-center justify-center"> 
    <Image
      src={summit}
      alt=""
      width={300}
      className="xl:w-[75%] rounded-[20px]"
    ></Image>
    <button className="mt-4 px-6 py-2 bg-transparent text-white border-2 border-solid border-white rounded-lg hover:bg-[#F09E24] hover:border-2 hover:border-transparent">Apply Now</button>
  </div>
</div>
<div className="flex-grow font-bold md:text-2xl text-xl">
  <p className="w-fit mx-auto">Events</p>
  <div className="flex flex-col items-center justify-center"> 
    <Image
      src={events}
      alt=""
      width={300}
      className="xl:w-[75%] rounded-[20px]"
    ></Image>
    <button className="mt-4 px-6 py-2 bg-transparent text-white border-2 border-solid border-white rounded-lg hover:bg-[#F09E24] hover:border-2 hover:border-transparent">Apply Now</button>
  </div>
</div>
</div>
    </div>
    <div className="text-center bg-[#C5A272] lg:px-32 px-4">
    <p className="text-white font-bold pt-32 md:text-6xl text-4xl">Want to do a talk or start a fundraiser?</p>
    <p className="text-white text-4xl font-bold pt-8 "> Let us know more by contacting us </p>  
    <div className="flex flex-col items-center justify-center"> 
    <button className="mt-4 px-6 mb-8 py-2 bg-transparent text-white border-2 border-solid border-white rounded-lg hover:bg-[#F09E24] hover:border-2 hover:border-transparent">Contact US</button>
    </div>
  </div>

  <Image
      src={movement}
      alt=""
      width={300}
      className="w-[100%]"
    ></Image>
  </div>
    </main>
    
  );
}
