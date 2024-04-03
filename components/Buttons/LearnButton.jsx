"use client"

import { motion } from "framer-motion";

export default function LearnButton() {
  return (
    <motion.button
      className="border-[#22B1E9] border-4 border-solid font-semibold text-xl sm:text-2xl sm:py-4 sm:px-12 py-2 px-6"
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
  );
}
