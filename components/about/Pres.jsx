"use client"

import Image from "next/image";
import useWindowSize from "@/hooks/useWindowSize";

export default function Pres({ num, item }) {
  const { width } = useWindowSize();
  return (
    <div className="flex p-[1.5rem] rounded-3xl bg-white max-lg:flex-col">
      {num % 2 === 0 && (
        <Image
          src={item.image}
          alt={item.name}
          width={300}
          height={400}
          className="rounded-3xl max-lg:mx-auto max-lg:mb-[1rem]"
        />
      )}
      {num % 2 !== 0 && (
        <Image
          src={item.image}
          alt={item.name}
          width={300}
          height={400}
          className="rounded-3xl max-lg:mx-auto max-lg:mb-[1rem]"
        />
      )}
      <div className="flex-1 px-[2rem]">
        <p className="font-bold text-2xl">{item.name}</p>
        <p className="text-[5E5E5E]">{item.role}</p>
        <p className="mt-[2rem]">{item.desc}</p>
      </div>
      {num % 2 !== 0 && width > 1024 && (
        <Image
          src={item.image}
          alt={item.name}
          width={300}
          height={400}
          className="rounded-3xl"
        />
      )}
    </div>
  );
}
