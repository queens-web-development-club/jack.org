import { teamData } from "@/data/aboutData";
import Image from "next/image";

export default function Member({ item, title }) {
  return (
    <section className="flex flex-col items-center justify-center">
      <h2 className="text-4xl font-bold text-white mt-[3rem]">{title}</h2>
      <div className="mt-[2rem] flex flex-wrap gap-[1.5rem] items-center justify-center">
        {teamData[item].map((teamMember, key) => (
          <div
            className="rounded-xl bg-[#B6CFFF] p-[1rem] text-center"
            key={key}
          >
            <Image
              sizes="(min-width: 440px) 250px, calc(65vw - 23px)"
              src={teamMember.image}
              alt={teamMember.name}
              width={250}
              height={300}
              className="rounded-xl"
            />
            <p className="font-semibold text-xl mt-[1rem]">{teamMember.name}</p>
            <p>{teamMember.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
