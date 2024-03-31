import Image from "next/image";

export default function Footer() {
  return (
    <div className="bg-[#363636] flex flex-col xl:flex-row justify-between p-8 text-white font-montserrat">

      <div className="xl:w-1/2 w-fit">
        <Image
          src="logo.svg"
          // className="md:1/5 lg:w-1/3 xl:w-full"
          alt="jack.org logo"
          width={446}
          height={95}
        />
        <p className="mt-3 text-[0.5rem] lg:text-xl sm:text-sm tracking-wider">This is not a site for personal disclosure of suicidal thoughts or behaviours.
          If you are in crisis, please <span className="font-bold text-[#22B1E9]">call 911</span> or go to
          youre nearest emergency department for assistance.
        </p>
      </div>

      <div className="xl:w-fit mt-3 items-end flex flex-col float-right">
        <h1 className="font-bold text-xl lg:text-4xl md:text-2xl xl:mb-4 mt:2">Social Media</h1>

        <div className="w-fit flex items-center lg:gap-4 gap-2 xl:float-right xl:mt-0 mt-3">
          <Image
            className="w-fit lg:w-[28px] w-[15px]"
            src="instaIcon.svg"
            alt="Instagram Logo"
            width={28}
            height={28}
          />
          <a className="hover:underline lg:text-xl sm:text-sm sm:w-full text-xs" href="https://www.instagram.com/jack.orgqueenschapter/?hl=en">@jack.orgqueenschapter</a>
        </div>

        <div className="w-fit flex items-center lg:gap-4 gap-2 xl:float-right mt-3">
          <Image
            className="w-fit lg:w-[28px] w-[15px]"
            src="tiktokIcon.svg"
            alt="Tiktok Logo"
            width={28}
            height={28}
          />
          <a className="hover:underline lg:text-xl sm:text-sm sm:w-full text-xs" href="https://www.tiktok.com/@jack.orgqueenschapter">@jack.orgqueenschapter</a>
        </div>

        <div className="w-fit flex items-center lg:gap-4 gap-2 float-right mt-2">
          <Image
            className="w-fit lg:w-[28px] w-[15px]"
            src="emailIcon.svg"
            alt="Email Icon"
            width={30}
            height={30}
          />
          <a className="hover:underline lg:text-xl sm:text-sm sm:w-full text-xs" href="mailto:jack.orgqueens@clubs.queensu.ca">jack.orgqueens@clubs.queensu.ca</a>
        </div>
        

      </div>

    </div>
  )
}