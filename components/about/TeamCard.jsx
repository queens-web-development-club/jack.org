"use client"
import { teamData } from "@/data/aboutData";
import Member from "./Member";
import Pres from "./Pres";
import { useMemo } from "react";
import { useMainContext } from "@/Context/MainContextProvider";

export default function TeamCard() {

  const { main } = useMainContext();
  const members = useMemo(
    () =>
      main.members.reduce((memberGroups, member) => {
        if (!memberGroups[member.type]) {
          memberGroups[member.type] = [];
        }
        memberGroups[member.type].push(member);
        return memberGroups;
      }, {}),
    [main]
  );

  return (
    <>
      <section className="flex justify-center items-center flex-col gap-[3rem]">
        <h2 className="text-4xl font-bold text-white">Co-Presidents</h2>
        {members["President"].map((item, key) => (
          <Pres item={item} key={key} num={key} />
        ))}
      </section>
      {Object.keys(members).map((item, key) => {
        if (item === "President") {
          return;
        }
        const title =
          item === "Marketing"
            ? "Members and Marketing"
            : item === "Events"
            ? "Events Intersectionality"
            : item === "Summit" && "Summit";
        return <Member item={members[item]} title={title} key={key} />;
      })}
    </>
  );
}
