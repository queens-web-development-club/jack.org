import Facts from "@/components/History/Facts";
import Disclaimer from "@/components/Buttons/Disclaimer";
import LearnButton from "@/components/Buttons/LearnButton";

export default function Home() {
  return (
    <main>
      <section className="bg-[#5f81a0] h-[calc(100dvh-100px)] font-montserrat overflow-auto">
        <div className="mt-[151px] text-[56px] text-[#ffffff] font-bold w-[80%] mx-auto leading-[70px]">
          <span className="text-[#f05814]">Mental Health</span> advocates
          <br />
          at Queen&apos;s
          <p className="text-[28px] font-normal leading-[40px] mt-[25px]">
            Jack.org Queen&apos;s Chapter is a youth-led mental health
            initiative working to break down the stigma associated with mental
            health and illness, and reduce barriers to accessing mental health
            care on the Queen&apos;s University campus.
          </p>
          <LearnButton />
        </div>
        <Disclaimer />
      </section>
      <Facts />
    </main>
  );
}
