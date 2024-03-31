import { events } from "@/data/involveData";

export default function Events() {
  return (
    <section className="flex flex-col items-start mt-[5rem]">
      <h2 className="font-bold text-white text-5xl">Upcoming Events:</h2>
      <div>
        <ul className="mt-[2rem] pl-[5rem] flex flex-col gap-[1.5rem] text-white">
          {events.map((item, key) => (
            <li key={key}>
              <h3 className="font-semibold text-2xl text-[#22B1E9]">
                {item.title} @ {item.location}
              </h3>
              <p className="font-semibold text-2xl">{item.date}</p>
              <p>{item.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
