import Image from "next/image";
import { footerData } from "@/data/navData";

export default function Footer() {
  return (
    <div className="bg-[#363636] flex flex-col lg:flex-row justify-between p-8 text-white font-montserrat">
      <div className="lg:w-1/2 w-fit mx-auto lg:ml-0">
        <Image
          sizes="100vw"
          src="/logo.svg"
          className="mx-auto lg:ml-0"
          alt="jack.org logo"
          width={446}
          height={95}
        />
        <p className="mt-3 text-sm lg:text-xl text-center lg:text-left tracking-wider">
          This is not a site for personal disclosure of suicidal thoughts or
          behaviours. If you are in crisis, please{" "}
          <span className="font-bold text-[#22B1E9]">call 911</span> or go to
          your nearest emergency department for assistance.
        </p>
      </div>

      <div className="xl:w-fit mt-3 items-end flex flex-col">
        <h1 className="font-bold text-xl lg:text-4xl md:text-2xl mx-auto lg:mr-0 xl:mb-4">
          Social Media
        </h1>

        {footerData.map((social) => (
          <div className="w-fit flex items-center lg:gap-4 gap-2 mx-auto lg:mr-0 sm:float-right xl:mt-0 mt-3" key={social.alt}>
            <Image
              sizes="100vw"
              className="w-fit lg:w-[28px]"
              src={social.image}
              alt={social.alt}
              width={28}
              height={28}
            />
            <a
              className="hover:underline lg:text-xl sm:text-sm sm:w-full text-xs"
              href={social.link}
            >
              {social.text}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
