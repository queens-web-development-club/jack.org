// ig Anthony finished this component already so, this component is not entirely finished or needed
// (doesn't display nicely on mobile screens)
// we can just scrap this 


import Image from "next/image";

export default function CoPresCard(props) {
  return (
    <div className="border mx-auto p-4 rounded-[2.5rem] bg-white flex items-center gap-4 font-montserrat text-left">
        <Image
          className="w-[30%] "
          src="/sadie.png"
          alt="Sadie Hamilton"
          width={300}
          height={400}
        />
        <div className="text-black">
          <h1
            className="lg:text-4xl font-bold my-2"
          >
            Sadie Hamilton
          </h1>
          <p
            className="font-montserrat text-[#5E5E5E] lg:text-xl md:text-md font-light my-2"
          >
            Co-President - Members and Marketing
          </p>
          <p className="lg:text-xl md:text-sm">
          Sadie is a fourth year Kinesiology student at Queen&apos;s. 
          Her passion for mental health advocacy sparked and has continued 
          to grow since joining Jack.org Queen&apos;s Chapter in her first year. 
          She has held roles across the club in members, marketing, and summit, 
          and now serves as the Members and Marketing Co-President. 
          Sadie&apos;s goal through her advocacy is to encourage self-discovery
          and compassion around one&apos;s own mental health, while creating a 
          community where mental health is discussed as openly and freely as 
          physical.
          </p>
        </div>
    </div>
  )
}
