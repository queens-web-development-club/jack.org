"use client";

import Image from "next/image";
import Link from "next/link";
import { navData } from "@/data/navData";
import { useMemo } from "react";

export default function NavBar() {
  // You guys don't have to do this, but basically what the useMemo does is cache everything 
  // so it doesn't have to rerender the content every single time, makes the app more optimized, 
  // but since this is such a small component, it really doesn't matter, I'm just doing this for testing

  const logo = useMemo(
    () => (
      <Link href="/">
        <Image
          src="logo.svg"
          width={0}
          height={0}
          className="w-full pt-[1rem] h-full"
          alt="Jack.org"
          sizes="100vw"
        />
      </Link>
    ),
    []
  );

  const links = useMemo(() => {
    return (
      <ul className="flex h-full items-center font-bold text-[1.3rem] text-white">
        {navData.map((item, key) => (
          <li key={key} className="hover:bg-orange-600 flex-1 h-full flex justify-center items-center">
            <Link href={item.link}>
              {item.text}
            </Link>
          </li>
        ))}
      </ul>
    );
  }, [navData]);

  return (
    <nav className="h-[100px] bg-[#202835]">
      <div className="flex gap=[6.5rem] w-[80%] mx-auto items-center">
        <div className="w-[25%]">{logo}</div>
        <div className="flex-1 px-[3rem]">{links}</div>
      </div>
    </nav>
  );
}
