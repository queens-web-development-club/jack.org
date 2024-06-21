"use client";
import { useMainContext } from "@/Context/MainContextProvider";
import Link from "next/link";
import Image from "next/image";

export default function Apply() {
  const { main } = useMainContext();
  return (
    <div className="flex xl:flex-row px-4 xl:px-16 flex-col gap-8 items-center text-white">
      <div className="flex-grow font-bold md:text-2xl text-xl">
        <p className="w-fit mx-auto">Members</p>
        <div className="flex flex-col items-center justify-center">
          <Image
            sizes="(min-width: 1280px) calc(25vw - 144px), (min-width: 380px) 300px, calc(80vw + 12px)"
            src={"/membersimage.png"}
            alt="members"
            width={300}
            height={300}
            className="xl:w-[75%] rounded-[20px]"
          />
          <Link
            target="_blank"
            href={main.teamLinks[0]}
            className="mt-4 px-6 py-2 bg-transparent text-white border-2 border-solid border-white rounded-lg hover:bg-[#F09E24] hover:border-2 hover:border-transparent"
          >
            Apply Now
          </Link>
        </div>
      </div>
      <div className="flex-grow font-bold md:text-2xl text-xl">
        <p className="w-fit mx-auto">Summit</p>
        <div className="flex flex-col items-center justify-center">
          <Image
            sizes="(min-width: 1280px) calc(25vw - 144px), (min-width: 380px) 300px, calc(80vw + 12px)"
            src={"/summitimage.png"}
            alt="summit"
            width={300}
            height={300}
            className="xl:w-[75%] rounded-[20px]"
          />
          <Link
            target="_blank"
            href={main.teamLinks[1]}
            className="mt-4 px-6 py-2 bg-transparent text-white border-2 border-solid border-white rounded-lg hover:bg-[#F09E24] hover:border-2 hover:border-transparent"
          >
            Apply Now
          </Link>
        </div>
      </div>
      <div className="flex-grow font-bold md:text-2xl text-xl">
        <p className="w-fit mx-auto">Events</p>
        <div className="flex flex-col items-center justify-center">
          <Image
            sizes="(min-width: 1280px) calc(25vw - 144px), (min-width: 380px) 300px, calc(80vw + 12px)"
            src={"/eventsimage.png"}
            alt="events"
            width={300}
            height={300}
            className="xl:w-[75%] rounded-[20px]"
          />
          <Link
            target="_blank"
            href={main.teamLinks[2]}
            className="mt-4 px-6 py-2 bg-transparent text-white border-2 border-solid border-white rounded-lg hover:bg-[#F09E24] hover:border-2 hover:border-transparent"
          >
            Apply Now
          </Link>
        </div>
      </div>
    </div>
  );
}
