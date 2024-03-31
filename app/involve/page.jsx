import Image from "next/image";
import Events from "@/components/involve/Events";

export default function Involve() {
  return (
    <main className="bg-[#2F405B] min-h-screen px-[10%] py-[5%]">
      <section>
        <h1 className="text-center font-bold text-white text-5xl">
          Ways to get Involved
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
    </main>
  );
}
