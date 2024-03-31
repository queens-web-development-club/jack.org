export default function History() {
  //TEMP DATA CHANGE AFTER BACKEND IS DONE
  const historyData = [
    {
      year: 2010,
      text: "Jack Windeler dies by suicide in his first year at Queen's. Jack's parents Eric and Sandra start The Jack Project initiative with Kid's Help Phone",
    },
    {
      year: 2012,
      text: "The Jack Project moves to Queen’s, working more directly with young leaders.",
    },
    {
      year: 2013,
      text: "The Jack Project rebrands as Jack.org, becoming fully independent from Kid’s Help Phone",
    },
    {
      year: 2014,
      text: "Jack.org chapters program launch, with Queen’s spearheading the movement.",
    },
    {
      year: 2016,
      text: "Jack.org Queen’s Chapter hosts our very first Summit.",
    },
  ];
  return (
    <section className="flex flex-col justify-center items-center mt-[3rem]">
      <h2 className="text-[3rem] font-bold text-white">
        History of Jack.org at Queen&apos;s
      </h2>
      <div className="my-[2rem]">
        {historyData.map((item, key) => (
          <div
            key={key}
            className="flex relative bg-[url('/History.svg')] bg-repeat-y h-[20vh] w-[750px] bg-center items-center justify-center"
          >
            <div
              className={`absolute top-0 w-[33ch] ${
                key % 2 === 0 ? "left-0 text-right" : "right-0"
              }`}
            >
              <h3 className="text-[2rem] text-[#22B1E9] font-semibold">
                {item.year}
              </h3>
              <p className="text-white">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
