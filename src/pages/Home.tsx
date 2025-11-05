import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import heroImg from "../assets/images/medicine.png";
import handImage from "../assets/images/hand.png";

export default function Home(): JSX.Element {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imageOpacity = useTransform(scrollYProgress, [0, 0.2, 1], [0, 0.6, 1]);
  const imageY = useTransform(scrollYProgress, [1, 0], [120, 0]);
  const imageX = useTransform(scrollYProgress, [0, 1], [300, 0]);
  const headingOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  return (
    <div className="w-full relative bg-gradient-to-b from-[#fffcf9] to-[#f4e7cc] text-[#5a3e36]">
      {/* HERO SECTION */}
      <div className="w-full h-screen flex items-center justify-center px-6 relative overflow-hidden">
        {/* Left decorative shape */}
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 0.4 }}
          transition={{ duration: 1.4 }}
          className="absolute left-8 top-1/4 w-28 h-28 bg-[#e9d9be] rounded-full blur-xl"
        />

        {/* Right decorative shape */}
        <motion.div
          initial={{ x: 80, opacity: 0 }}
          animate={{ x: 0, opacity: 0.4 }}
          transition={{ duration: 1.4 }}
          className="absolute right-10 bottom-1/4 w-32 h-32 bg-[#e4cbaa] rounded-full blur-xl"
        />

        <motion.div
          style={{ opacity: headingOpacity }}
          className=" text-center items-center flex w-full   gap-4"
        >
          <h1 className=" text-4xl md:text-6xl font-extrabold tracking-tight">
            Welcome to Wellness
          </h1>
          <div className="relative flex h-screen bg-amber-200 w-64 md:w-[440px]">
            {/* Hand Image - base layer */}
            <motion.img
              src={handImage}
              alt="Hand"
              className="absolute bottom-0 right-0  w-full md:h-[300px] object-contain z-10"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            />

            {/* Hero Image - positioned on the hand */}
            <motion.img
              src={heroImg}
              alt="Medicine"
              className="absolute left-1/2 -translate-x-1/2 md:bottom-32 w-36 md:w-[340px] md:h-[240px] object-contain z-20 drop-shadow-xl"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
            />
          </div>

          <p className="text-lg md:text-xl font-medium opacity-80">
            Your journey to a healthier life starts here 🌿
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="mt-4 bg-[#5a3e36] text-white px-6 py-3 rounded-full shadow-lg hover:bg-[#6b4a43]"
            >
              Discover Products
            </motion.button>
          </p>
        </motion.div>
      </div>
      {/* FLOATING BRAND TEXT */}
      <p className=" absolute bottom-2/4 left-24 w-32  text-[80px] md:text-[140px] font-extrabold text-[#e6dac7] tracking-[0.2em] text-center select-none">
        FLORADYLE
      </p>

      {/* Scroll space */}
      <div className="h-[15vh]"></div>

      {/* SECOND IMAGE SCROLL SECTION */}
      <section
        ref={sectionRef}
        className="w-full h-screen flex items-center justify-center relative overflow-hidden"
      >
        <motion.img
          src={heroImg}
          alt="Wellness"
          className="w-64 md:w-80 md:h-[340px] object-contain z-20 drop-shadow-xl"
          style={{ opacity: imageOpacity, x: imageX, y: imageY }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
        />
      </section>
    </div>
  );
}
