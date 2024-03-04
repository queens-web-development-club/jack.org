"use client";

import { motion, useAnimate } from "framer-motion";

export default function MissionCheckBox(props) {
  const [scope, animate] = useAnimate();

  async function handleFadeIn() {
    await animate(scope.current, { backgroundColor: '#22B1E9FF' }, { duration: 0.25 })
  }

  async function handleFadeOut() {
    await animate(scope.current, { backgroundColor: "#22B1E900" }, { duration: 0.25 })
  }

  return (
    <div className="flex w-1/1 gap-6 my-10 items-center"
      onMouseEnter={handleFadeIn}
      onMouseLeave={handleFadeOut}
    >
      <motion.div
        ref={scope}
        id="target"
        className="w-10 h-10 border-4 border-[#22B1E9] flex-shrink-0"
      ></motion.div>
      <p className="font-semibold">
        {props.text}
      </p>
    </div>
  )
}