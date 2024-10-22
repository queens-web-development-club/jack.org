import { teamData } from "@/data/aboutData";
import Member from "./Member";
import Pres from "./Pres";

export default async function TeamCard({members}) {

  const membersD = members.reduce((memberGroups, member) => {
    if (!memberGroups[member.type]) {
      memberGroups[member.type] = [];
    }
    memberGroups[member.type].push(member);
    return memberGroups;
  }, {});

  return (
    <>
      <section className="flex justify-center items-center flex-col gap-[3rem]">
        <h2 className="text-4xl font-bold text-white">Co-Presidents</h2>
        {membersD["President"].map((item, key) => (
          <Pres item={item} key={key} num={key} />
        ))}
      </section>
      {Object.keys(membersD).map((item, key) => {
        if (item === "President") {
          return;
        }
        const title =
          item === "Marketing"
            ? "Members and Marketing"
            : item === "Events"
            ? "Events Intersectionality"
            : item === "Summit" && "Summit";
        return <Member item={membersD[item]} title={title} key={key} />;
      })}
    </>
  );
}
