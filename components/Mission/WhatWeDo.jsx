"use client";
import LearnButton from "../Buttons/LearnButton";
import { motion } from "framer-motion";

export default function WhatWeDo() {
  return (
    <div className="border-4 font-montserrat text-white w-[85%] mx-auto bg-[#202835] p-8 mb-16">
      <h1 className="text-5xl font-montserrat text-center font-bold text-[#22B1E9] mb-8">
        What We Do
      </h1>

      <div className="flex gap-12 justify-around text-center pt-8 text-4xl font-montserrat font-semibold">
        <div className="w-1/3">
          Members Team
          <p className="font-normal text-2xl mt-8">
            Collaborative team of Queen&apos;s students with the goals
            of increasing mental health literacy, decreasing stigma,
            and breaking down barriers to mental healthcare access at Queen&apos;s
          </p>
        </div>

        <div className="w-1/3">
          Events
          <p className="font-normal text-2xl mt-8">
            Events held on the Queen&apos;s campus convering a range of
            topics aiming to raise awareness among students.
          </p>
        </div>

        <div className="w-1/3">
          Summit
          <p className="font-normal text-2xl mt-8">
            Collaborative team of Queen&apos;s students with the goals
            of increasing mental health literacy, decreasing stigma,
            and breaking down barriers to mental healthcare access at Queen&apos;s
          </p>
        </div>

      </div>

      <div className="mt-8 flex gap-12 justify-around">

      {/* YO OK IGNORE THIS SHT, IDK WHY BUT THE <LEARNBUTTON /> COMPONENT'S STYLING LOOKED DIFFERENT HERE AND WAS SUPER UGLY
      SHOULDN'T COMPONENTS RENDER THE SAME? I COULDN'T FIND ANY INHERITING CSS EITHER (MAYBE I'M BLIND) */}

      <div className="text-center w-1/3">
        <motion.button
          className="border-[#22B1E9] border-4 border-solid font-semibold text-xl px-8 py-4 mt-[50px]"
          initial={{ scale: 1 }}
          whileHover={{
            scale: 1.1,
            backgroundColor: "#22B1E9FF",
            color: '#000000FF',
            transition: { duration: 0.25 },
          }}
          whileTap={{
            scale: 0.9,
            transition: { duration: 0.25 },
          }}
        >
          Learn More
        </motion.button>
      </div>

      <div className="text-center w-1/3">
      <motion.button
          className="border-[#22B1E9] border-4 border-solid font-semibold text-xl px-8 py-4 mt-[50px]"
          initial={{ scale: 1 }}
          whileHover={{
            scale: 1.1,
            backgroundColor: "#22B1E9FF",
            color: '#000000FF',
            transition: { duration: 0.25 },
          }}
          whileTap={{
            scale: 0.9,
            transition: { duration: 0.25 },
          }}
        >
          Learn More
        </motion.button>
      </div>

      <div className="text-center w-1/3">
        <motion.button
            className="border-[#22B1E9] border-4 border-solid font-semibold text-xl px-8 py-4 mt-[50px]"
            initial={{ scale: 1 }}
            whileHover={{
              scale: 1.1,
              backgroundColor: "#22B1E9FF",
              color: '#000000FF',
              transition: { duration: 0.25 },
            }}
            whileTap={{
              scale: 0.9,
              transition: { duration: 0.25 },
            }}
          >
            Learn More
          </motion.button>
        </div>
      </div>
    </div>
  )
}