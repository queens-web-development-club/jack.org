import Link from "next/link";
import Logout from "@/components/Buttons/Logout";
import ChangePassword from "@/components/admin/ChangePassword";

export default function Dashboard() {
  const options = ["members", "history", "events", "links"];
  return (
    <div className="w-full h-[calc(100vh-100px)] bg-[#202835]">
      <div className="flex items-center pt-[1rem]">
        <h1 className="text-white font-bold text-5xl ml-[3rem]">
          Dashboard
        </h1>
        <Logout />
      </div>
      <section className="flex p-[3rem] gap-[2rem]">
        {options.map((option, key) => (
          <div
            key={key}
            className="p-[2rem] text-[#22B1E9] px-[1rem] py-[0.5rem] bg-[#B6CFFF] rounded"
          >
            <Link href={`/admin/dashboard/${option}`}>{option}</Link>
          </div>
        ))}
      </section>
      <ChangePassword />
    </div>
  );
}
