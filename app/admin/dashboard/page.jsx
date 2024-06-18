import Link from "next/link";

export default function Dashboard() {
  return (
    <div className="w-full h-[calc(100vh-100px)] bg-[#202835]">
      <h1 className="text-white font-bold text-5xl ml-[3rem] pt-[1rem]">
        Dashboard
      </h1>
      <div className="flex p-[2rem] text-[#22B1E9]">
        <Link href={"/admin/dashboard/members"}>Members</Link>
      </div>
    </div>
  );
}
