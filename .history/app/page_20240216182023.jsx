import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-[#5f81a0] h-[100dvh] font-montserrat overflow-auto">
      <div className="mt-[201px] text-[56px] text-[#ffffff] font-bold w-[80%] mx-auto leading-[70px]">
        <span className="text-[#f05814]">Mental Health</span> advocates<br />
        at Queen's
        <p className="text-[28px] font-normal leading-[40px] mt-[25px]">
          Jack.org Queen’s Chapter is a youth-led mental 
          health initiative working to break down the 
          stigma associated with mental health and illness, 
          and reduce barriers to accessing mental health care on the
          Queen’s University campus.
        </p>
      </div> 
    </main>
  );
}
