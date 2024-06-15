import Facts from "@/components/History/Facts";
import Disclaimer from "@/components/Buttons/Disclaimer";
import LearnButton from "@/components/Buttons/LearnButton";
import Mission from "@/components/Mission/Mission";

export default function Home() {
  return (
    <main className="bg-[#202835]">
      <section
        className="relative bg-[url('/team.jpg')] bg-cover min-h-[calc(100dvh-100px)] font-montserrat overflow-auto flex bg-no-repeat"
        style={{ backgroundPosition: "center -30px" }}
      >
        {/* Blue Overlay */}
        <div className="absolute inset-0 bg-[#013E76] opacity-70 z-0" />

        <div className="relative z-10 mt-[2rem] xl:mt-[151px] text-4xl sm:text-6xl text-[#ffffff] font-bold w-[85%] mx-auto h-full">
          <span className="text-[#f05814]">Mental Health</span> advocates
          <br />
          at Queen&apos;s
          <p className="text-xl xl:text-2xl font-normal leading-lg mt-[25px] mb-8">
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
