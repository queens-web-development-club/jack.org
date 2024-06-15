"use client";

import React from "react";
import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export default function SubExample({ title, listInfo, image }) {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(
    scrollYProgress,
    [0.1, 0.3, 0.75, 0.9],
    [0, 1, 1, 0]
  );
  const scale = useTransform(
    scrollYProgress,
    [0, 0.3, 0.75, 1],
    [0.2, 1, 1, 0.2]
  );

  const bulletPoints = listInfo.map((data, key) => {
    return <li key={key}>{data}</li>;
  });

  return (
    <motion.div
      className="p-4 text-center lg:w-1/4"
      ref={targetRef}
      style={{
        opacity: opacity,
        scale: scale,
      }}
    >
      <Image
        sizes="100vw"
        src={image}
        alt="Wait Icon"
        width={100}
        height={100}
        className="mx-auto w-fit pb-4 h-1/5"
      ></Image>
      <h1 className="font-montserrat text-white font-semibold text-2xl">
        {title}
      </h1>
      <div>
        <h2 className="font-montserrat text-left text-white pt-8 font-semibold text-lg">
          What we&apos;re doing:
        </h2>
        <ul className="text-left list-disc pl-8 text-white">{bulletPoints}</ul>
      </div>
    </motion.div>
  );
}
