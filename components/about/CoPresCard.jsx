import Image from "next/image";

export default function CoPresCard(props) {
  return (
    <div className="w-4/5 border mx-auto p-4 rounded-[2.5rem] bg-white flex gap-4 font-montserrat">
        <Image
          className="w-[30%]"
          src="/sadie.png"
          alt="Sadie Hamilton"
          width={300}
          height={400}
        />
        <div className="text-black">
          <h1
            className="text-3xl"
          >
            Sadie Hamilton
          </h1>
          <p
            className="font-montserrat text-[#5E5E5E] text-lg font-light"
          >
            Co-President - Members and Marketing
          </p>
          <p className="text-[clamp(irem, 2.5vw, 2rem)]">
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
