"use client";
import React, { useRef } from "react";
import { motion, useAnimate } from "framer-motion";
import Link from "next/link";

export default function TipsCard({ title, bold, notBold, animated, link }) {
  const [divRef, animate] = useAnimate();
  const textRef1 = useRef(null);
  const textRef2 = useRef(null);
  const linkRef = useRef(null);

  async function handleEnterAnimate() {
    animate(
      divRef.current,
      { backgroundColor: "#ffffffff" },
      { duration: 0.25 }
    );
    animate(textRef1.current, { opacity: 0 });
    if (animated) {
      animate(textRef2.current, { opacity: 1.0 });
    }
    if (link) {
      animate(linkRef.current, { opacity: 1.0 });
    }
  }

  async function handleLeaveAnimate() {
    animate(
      divRef.current,
      { backgroundColor: "#ffffff00" },
      { duration: 0.25 }
    );
    animate(textRef1.current, { opacity: 1.0 });
    if (animated) {
      animate(textRef2.current, { opacity: 0 });
    }
    if (link) {
      animate(linkRef.current, { opacity: 0 });
    }
  }

  return (
    <motion.div
      className="border-4 lg:m-8 md:m-4 sm:w-[35%] sm:m-2 lg:w-[28%] xs:w-1/2 w-4/5 m-4 mx-auto aspect-square bg-cover relative"
      ref={divRef}
      onMouseEnter={() => handleEnterAnimate()}
      onMouseLeave={() => handleLeaveAnimate()}
    >
      <div className="absolute w-4/5 h-3/5 left-[10%] top-[20%] flex flex-col justify-between font-montserrat text-[#F05814] sm:text-xl font-bold text-3xl md:text-3xl lg:text-4xl">
        <h1 className="">{title}</h1>
        <p
          className="text-white sm:text-base text-2xl font-light absolute top-1/2 md:text-xl lg:text-2xl"
          ref={textRef1}
        >
          <span className="font-bold">{bold} </span>
          {notBold}
        </p>
        {animated && (
          <p
            className="text-black font-light sm:text-xs absolute top-1/2 text-base md:text-sm lg:text-lg"
            ref={textRef2}
            style={{ opacity: 0 }}
          >
            {animated}
          </p>
        )}
        {link && (
          <Link
            className="text-black font-base sm:text-sm absolute top-1/2 text-base md:text-lg lg:text-xl hover:underline"
            ref={linkRef}
            href={link.href}
            target="_blank"
          >
            {link.text}
          </Link>
        )}
      </div>
    </motion.div>
  );
}
