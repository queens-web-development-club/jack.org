import Image from "next/image";
import Link from "next/link";
import { navData } from "@/data/navData";

export default function NavBar() {

  const logo = (
    <Link href="/" className="flex">
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

  const links = (
    <ul className="flex h-full items-center font-bold text-[1.3rem] text-white">
      {navData.map((item, key) => (
        <li
          key={key}
          className="hover:bg-orange-600 flex-1 h-full flex justify-center items-center"
        >
          <Link href={item.link}>{item.text}</Link>
        </li>
      ))}
    </ul>
  );

  return (
    <nav className="flex justify-center h-[100px] bg-[#202835]">
      <div className="flex w-[85%]">
        {logo}
        <div className="flex-1 ml-[5rem]">{links}</div>
      </div>
    </nav>
  );
}
