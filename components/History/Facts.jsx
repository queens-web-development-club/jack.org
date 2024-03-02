import History from "./History";

export default function Facts() {
  return (
    <article className="min-h-[100vh] bg-[#202835]">
      <section className="flex flex-col gap-[1.5rem] justify-center items-center text-white font-bold text-[2rem] py-[2rem] text-center">
        <h2 className="text-[3rem]">Did you know...</h2>
        <p>
          <span className="text-[#F05814]">Suicide</span> is the{" "}
          <span className="text-[#F05814] text-[3rem]">#1</span> health related
          cause of death among young people
        </p>
        <p>
          <span className="text-[#22B1E9] text-[3rem]">1 in 7</span> youths in
          Canada report having suicidal thoughts
        </p>
        <p>
          <span className="text-[#F05814] text-[3rem]">150,000</span> youths
          attempt suicides each year
        </p>
        <div className="flex items-center justify-center">
          <p className="text-[4rem] text-[#22B1E9]">35%</p>
          <p className="w-[35ch]">
            of University students meet the diagnostic criteria for at least one
            mental illness
          </p>
        </div>
      </section>
      <History />
    </article>
  );
}
