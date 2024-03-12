import Image from "next/image";

export default function Pres({ num, item }) {
  return (
    <div className="flex p-[1.5rem] rounded-3xl bg-white">
      {num % 2 === 0 && (
        <Image
          src={item.image}
          alt={item.name}
          width={300}
          height={400}
          className="rounded-3xl"
        />
      )}
      <div className="flex-1 px-[2rem]">
        <p className="font-bold text-2xl">{item.name}</p>
        <p className="text-[5E5E5E]">{item.role}</p>
        <p className="mt-[2rem]">{item.desc}</p>
      </div>
      {num % 2 !== 0 && (
        <Image
          src={item.image}
          alt={item.name}
          width={300}
          height={400}
          className="rounded-3xl"
        />
      )}
    </div>
  );
}
