"use client"
import React, { useRef } from "react";
import { motion, useAnimate } from "framer-motion";

export default function ResourceCard({ image, text, contact, subtitle }) {
  const [scope, animate] = useAnimate();
  const textRef = useRef(null);
  const contactRef = useRef(null);
  const subtitleRef = useRef(null);

  async function handleDivEnterAnimate() {
    animate(scope.current, { opacity: 0.20 }, { duration: 0.25 });
    animate(textRef.current, { opacity: 1.0 }, { duration: 0.25 });
    animate(contactRef.current, { opacity: 1.0 }, { duration: 0.25 });
    if (subtitle) {
      animate(subtitleRef.current, { opacity: 1.0 }, { duration: 0.25 });
    }
  }

  async function handleDivLeaveAnimate() {
    animate(scope.current, { opacity: 1.0 }, { duration: 0.25 });
    animate(textRef.current, { opacity: 0.0 }, { duration: 0.25 });
    animate(contactRef.current, { opacity: 0.0 }, { duration: 0.25 });
    if (subtitle) {
      animate(subtitleRef.current, { opacity: 0.0 }, { duration: 0.25 });
    }
  }

  return (
    <div className="border-4 lg:m-8 md:m-4 sm:w-[35%] sm:m-2 lg:w-[28%] xs:w-1/2 w-4/5 m-4 mx-auto aspect-square bg-cover">
      <div className="border-4 border-black h-full w-full relative">
        <motion.div
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${image})` }}
          ref={scope}
          onMouseEnter={handleDivEnterAnimate}
          onMouseLeave={handleDivLeaveAnimate}
          initial={{ opacity: 1.0 }}
          animate={{ opacity: 1.0 }}
          transition={{ duration: 0.5 }}
        ></motion.div>
        <div 
          className="w-4/5 lg:h-[60%] absolute lg:top-[20%] md:h-[70%] md:top-[15%] xs:h-[80%] xs:top-[10%] left-[10%] h-[70%] top-[15%] flex flex-col justify-around items-center"
          style={{ pointerEvents: 'none' }}
        >
          <p
            className="font-montserrat text-white text-center xl:text-2xl lg:text-base md:text-sm sm:text-xs text-base"
            style={{ pointerEvents: 'none', opacity: 0 }}
            ref={textRef}
          >
            {text}
          </p>
          <p
            className="text-center text-white font-bold xl:text-3xl lg:text-lg md:text-base sm:text-sm text-xl"
            style={{ pointerEvents: 'none', opacity: 0 }}
            ref={contactRef}
          >
            {contact}
          </p>
          {subtitle && <p
            className="text-center text-white font-light xl:text-xl lg:text-base md:text-sm sm:text-xs text-base"
            style={{ pointerEvents: 'none', opacity: 0 }}
            ref={subtitleRef}
          >
            {subtitle}
          </p>}
        </div>
      </div>
    </div>
  );
}