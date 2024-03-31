import { teamData } from "@/data/aboutData";
import Member from "./Member";
import Pres from "./Pres";
export default function TeamCard() {
  const roles = ["marketing", "summit", "events"];
  return (
    <>
      <section className="flex justify-center items-center flex-col gap-[3rem]">
        <h2 className="text-4xl font-bold text-white">Co-Presidents</h2>
        {teamData.pres.map((item, key) => (
          <Pres item={item} key={key} num={key} />
        ))}
      </section>
      {roles.map((item, key) => {
        const title =
          item === "marketing"
            ? "Members and Marketing"
            : item === "events"
            ? "Events Intersectionality"
            : "Summit";
        return <Member item={item} title={title} key={key} />;
      })}
    </>
  );
}
