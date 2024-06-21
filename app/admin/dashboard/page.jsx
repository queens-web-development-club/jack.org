import Link from "next/link";

export default function Dashboard() {
  const options = ["members", "history", "events"];
  return (
    <div className="w-full h-[calc(100vh-100px)] bg-[#202835]">
      <h1 className="text-white font-bold text-5xl ml-[3rem] pt-[1rem]">
        Dashboard
      </h1>
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
    </div>
  );
}
