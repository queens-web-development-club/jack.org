import SubExample from "./SubExample";
import { exampleData } from "@/data/aboutData";

export default function Examples() {
  return (
    <div className="py-8">
      <h1 className="font-montserrat text-white font-bold text-4xl my-8 pb-2 border-b-2 w-fit mx-auto">
        Examples of Mental Health Barriers Faced At Queen&apos;s
      </h1>
      <div className="flex flex-col lg:flex-row justify-between gap-4">
        {exampleData.map((example, index) => (
          <SubExample
            key={index}
            listInfo={example.points}
            image={example.image}
            title={example.title}
          />
        ))}
      </div>
    </div>
  );
}
