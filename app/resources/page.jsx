import Banner from "@/components/resources/Banner";
import ResourceCard from "@/components/resources/ResourceCard";
import React from "react";

export default function Resources() {
  return (
    <div
      className="bg-[#202835]"
    >
      <h1
        className="font-montserrat text-white md:text-5xl text-3xl font-bold p-8 text-center"
      >
        Your Health is A Priority!</h1>
        <Banner 
          image="resources1.svg"
        />
        <div className="flex flex-col">
          <div className="flex flex-col sm:flex-row px-4 sm:justify-between">
            <ResourceCard 
              image="rcard1.svg"
              text="Suicide crisis helpline"
              contact="988"
            />  
            <ResourceCard 
              image="rcard2.svg"
              text="Immediate Danger or urgent medical support"
              contact="911"
            />
            <ResourceCard 
              image="rcard3.svg"
              text="Mental Health Helpline (All ages)"
              contact="+1-866-531-2600"
            />  
          </div>
          <div className="flex flex-col sm:flex-row px-4 sm:justify-between">
            <ResourceCard 
              image="rcard4.svg"
              text="Telephone Aid Line Kingston (TALK)"
              contact="+1-613-544-1771"
              subtitle="6pm - 2am"
            />  
            <ResourceCard 
              image="rcard5.svg"
              text="Crisis Mental Health Support at Student Wellness Services"
              contact="+1-613-533-2506"
              subtitle="1st floor Mitchell Hall, 69 Union Street"
            />    
            <ResourceCard 
              image="rcard6.svg"
              text="MindBeacon: Crisis Text Line"
              contact="Text &quot;MindBeacon&quot; to 741741"
            />  
          </div>
        </div>


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
