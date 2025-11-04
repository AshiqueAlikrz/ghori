import React from "react";
import { motion } from "motion/react";
import heroImg from "../assets/react.svg";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, when: "beforeChildren" },
  },
};

const leftVariant = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const rightVariant = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const centerVariant = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 140, damping: 12 } },
};

export default function Home(): JSX.Element {
  return (
    <div className="w-full h-screen relative overflow-hidden bg-gradient-to-b from-indigo-900 via-purple-800 to-pink-900 text-white flex items-center justify-center px-6 md:px-12 lg:px-24">
      {/* Background blobs */}
      <motion.div
        className="absolute pointer-events-none mix-blend-screen filter blur-3xl opacity-50 rounded-full left-0 top-0 -translate-x-1/6"
        style={{
          width: "120vw",
          height: "60vh",
          background:
            "radial-gradient(circle at 30% 30%, rgba(99,102,241,0.4), transparent 40%), linear-gradient(135deg, rgba(124,58,237,0.2), rgba(99,102,241,0.1))",
        }}
        animate={{ y: [0, -25, 0], opacity: [0.6, 0.2, 0.6] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute pointer-events-none mix-blend-screen filter blur-3xl opacity-40 rounded-full right-0 bottom-0 translate-x-1/8"
        style={{
          width: "100vw",
          height: "55vh",
          background:
            "radial-gradient(circle at 70% 70%, rgba(16,185,129,0.3), transparent 30%), linear-gradient(45deg, rgba(20,184,166,0.15), rgba(6,95,70,0.05))",
        }}
        animate={{ x: [0, 30, 0], opacity: [0.4, 0.15, 0.4] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.main className="relative z-10 w-full max-w-[1100px] px-6 py-12 flex items-center justify-center" variants={container} initial="hidden" animate="visible">
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left text */}
          <motion.div className="hidden md:flex flex-1 justify-start" variants={leftVariant}>
            <span className="text-lg md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-500 drop-shadow-lg">
              wellness in every drop
            </span>
          </motion.div>

          {/* Mobile: left text */}
          <motion.div className="md:hidden w-full flex justify-center mb-4" variants={leftVariant}>
            <span className="text-center text-base font-semibold text-purple-200">
              wellness in every drop
            </span>
          </motion.div>

          {/* Center image */}
          <motion.div className="flex-shrink-0" variants={centerVariant} animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}>
            <motion.img
              src={heroImg}
              alt="Wellness"
              className="w-48 h-48 md:w-56 md:h-56 lg:w-72 lg:h-72 object-contain rounded-xl shadow-2xl"
              whileHover={{ scale: 1.05, rotate: 2 }}
              whileTap={{ scale: 0.98 }}
            />
          </motion.div>

          {/* Mobile: right text */}
          <motion.div className="md:hidden w-full flex justify-center mt-4" variants={rightVariant}>
            <span className="text-center text-sm font-medium text-green-200">
              a powerful medicine for your health
            </span>
          </motion.div>

          {/* Right text */}
          <motion.div className="hidden md:flex flex-1 justify-end" variants={rightVariant}>
            <span className="text-lg md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-teal-400 drop-shadow-lg">
              a powerful medicine for your health
            </span>
          </motion.div>
        </div>
      </motion.main>
    </div>
  );
}
