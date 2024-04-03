import React from "react";
import SubExample from "./SubExample";
import { exampleData } from "../../data/exampleData.js";

export default function Examples() {
  return (
    <div className="py-8">
      <h1 className="font-montserrat text-white font-bold text-4xl my-8 pb-2 border-b-2 w-fit mx-auto">
        Examples of Mental Health Barriers Faced At Queen&apos;s
      </h1>
      <div className="flex flex-col lg:flex-row justify-between gap-4">
        <SubExample
          listInfo={exampleData.listData[0]}
          image={exampleData.images[0]}
        />
        <SubExample
          listInfo={exampleData.listData[1]}
          image={exampleData.images[1]}
        />
        <SubExample
          listInfo={exampleData.listData[2]}
          image={exampleData.images[2]}
        />
        <SubExample
          listInfo={exampleData.listData[3]}
          image={exampleData.images[3]}
        />
      </div>
    </div>
  );
}