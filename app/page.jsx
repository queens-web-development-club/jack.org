import Facts from "@/components/History/Facts";
import Disclaimer from "@/components/Buttons/Disclaimer";
import LearnButton from "@/components/Buttons/LearnButton";
import Mission from "@/components/Mission/Mission";

export default function Home() {
  return (
    <main className="bg-[#202835]">
      <section
        className="bg-[url('/A-67.png')] bg-cover h-[calc(100dvh-100px)] font-montserrat overflow-auto flex bg-no-repeat"
        style={{ backgroundPosition: "center -30px" }}
      >
        <div className="mt-[151px] text-[56px] text-[#ffffff] font-bold w-[85%] mx-auto leading-[70px]">
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
      <Mission />
      <div className="h-[100px]" />
    </main>
  );
}
