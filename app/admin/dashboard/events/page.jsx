"use client";

import { useState } from "react";
import Back from "@/components/Buttons/Back";

export default function Events() {
  const [info, setInfo] = useState({
    description: "",
    title: "",
    date: "",
    location: "",
  });
  return (
    <main className="w-full min-h-[calc(100vh-100px)] bg-[#202835] p-[2rem] flex flex-col gap-[1rem]">
        <Back />
      <form
        // onSubmit={onSubmit}
        className="bg-[#F7F7F7] rounded w-[300px] p-[1rem] gap-[1rem] flex flex-col"
      >
        {Object.keys(info).map((key) => (
            <input
                key={key}
                type="text"
                placeholder={key}
                value={info[key]}
                onChange={(e) => setInfo({ ...info, [key]: e.target.value })}
                className="p-[0.5rem] border border-[#22B1E9] rounded"
            />
        ))}
        <button
          type="submit"
          className="w-full p-[0.5rem] bg-[#22B1E9] text-white rounded"
        >
          Add
        </button>
      </form>
    </main>
  );
}
