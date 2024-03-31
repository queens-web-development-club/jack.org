import Image from "next/image";

export default function Footer() {
  return (
    <div className="bg-[#363636] flex p-10 gap-8 text-white font-montserrat">

      <div className="w-2/3">
        <Image
          src="logo.svg"
          alt="jack.org logo"
          width={446}
          height={95}
        />
        <p className="mt-4 text-xl tracking-wider">This is not a site for personal disclosure of suicidal thoughts or behaviours.
          If you are in crisis, please <span className="font-bold text-[#22B1E9]">call 911</span> or go to
          youre nearest emergency department for assistance.
        </p>
      </div>

      <div className="w-1/3 items-end flex flex-col">
        <h1 className="font-bold text-3xl mb-4">Social Media</h1>

        <div className="w-fit flex items-center gap-4 float-right">
          <Image
            className=""
            src="instaIcon.svg"
            alt="Instagram Logo"
            width={28}
            height={28}
          />
          <a className="hover:underline text-xl" href="https://www.instagram.com/jack.orgqueenschapter/?hl=en">@jack.orgqueenschapter</a>
        </div>

        <div className="w-fit flex items-center gap-4 float-right mt-3">
          <Image
            className=""
            src="tiktokIcon.svg"
            alt="Tiktok Logo"
            width={28}
            height={28}
          />
          <a className="hover:underline text-xl" href="https://www.tiktok.com/@jack.orgqueenschapter">@jack.orgqueenschapter</a>
        </div>

        <div className="w-fit flex items-center gap-4 float-right mt-2">
          <Image
            className=""
            src="emailIcon.svg"
            alt="Email Icon"
            width={30}
            height={30}
          />
          <a className="hover:underline text-xl" href="mailto:jack.orgqueens@clubs.queensu.ca">jack.orgqueens@clubs.queensu.ca</a>
        </div>

      </div>

    </div>
  )
}