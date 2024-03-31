"use client";

import Image from "next/image";
import Link from "next/link";
import { navData } from "@/data/navData";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

export default function NavBar() {
  const logo = (
    <Link href="/" className="flex items-center">
      <Image
        src="logo.svg"
        width={288}
        height={61}
        className="pt-[1rem]"
        alt="Jack.org"
        sizes="100vw"
      />
    </Link>
  );

  const [open, setOpen] = useState(false);

  const links = (
    <>
      <GiHamburgerMenu
        className="text-[#F05814] text-[3rem]"
        onClick={() => setOpen(!open)}
      />
      {open && (
        <div className="w-[200px] h-fit absolute bg-[#202835] top-[10%]">
          <ul className="flex flex-col justify-center font-bold text-[1.3rem] text-white">
            {navData.map((item, key) => (
              <li
                key={key}
                className="hover:bg-orange-600 flex-1 h-full flex justify-center items-center w-full p-[1rem]"
              >
                <Link href={item.link}>{item.text}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );

  return (
    <nav className="flex justify-center h-[100px] bg-[#202835]">
      <div className="flex w-[85%]">
        {logo}
        <div className="flex-1 ml-[5rem] flex items-center justify-end">{links}</div>
      </div>
    </nav>
  );
}
