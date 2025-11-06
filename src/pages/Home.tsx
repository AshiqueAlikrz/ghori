import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import heroImg from "../assets/images/medicine.png";
import handImage from "../assets/images/Production-plant-2.webp";
import { TypewriterEffect } from "../components/ui/typewriter-effect";
import { TextGenerateEffect } from "../components/ui/text-generate-effect";

export default function Home(): JSX.Element {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imageOpacity = useTransform(scrollYProgress, [0, 0.2, 1], [0, 1, 1]);
  const imageY = useTransform(scrollYProgress, [0, 0.7], [0, 0]); // start above screen, move down
  const imageX = useTransform(scrollYProgress, [0, 1], [600, -50]); // move r
  const headingOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const imageAY = useTransform(scrollYProgress, [0, 1], [0, 1500]);
  const imageAX = useTransform(scrollYProgress, [0, 1], [0, 800]); // adjust px as needed

  const imageAOpacity = useTransform(scrollYProgress, [0.9, 1], [1, 1]);

  const words = [
    {
      text: "WELLNESS",
      className: "text-[#5a3e36] dark:text-[#5a3e36]",
    },
    {
      text: "IN",
      className: "text-[#5a3e36] dark:text-[#5a3e36]",
    },
    {
      text: "EVERY ",
      className: "text-[#5a3e36] dark:text-[#5a3e36]",
    },
    {
      text: "DROP",
      className: "text-[#5a3e36] dark:text-[#5a3e36]",
    },
  ];

  return (
    <div className="w-full relative bg-gradient-to-b from-[#fffcf9] to-[#f4e7cc] text-[#5a3e36]">
      {/* HERO SECTION */}
      <div className="w-full h-screen flex items-center justify-center px-6 relative">
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

        <div className=" text-center items-center flex    gap-4">
          <motion.div
            style={{ opacity: headingOpacity }}
            className=" text-4xl min-w-1/3 md:text-6xl font-extrabold tracking-tight"
          >
            <TypewriterEffect words={words} />
          </motion.div>

          <div className="relative flex h-screen bg-amber-100/40 w-64 md:w-[440px]">
            <motion.img
              src={heroImg}
              alt="Medicine"
              initial={{ x: 0, y: -600 }}
              animate={{ x: 0, y: 50 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="absolute left-1/2 -translate-x-1/2 md:bottom-32 w-36 md:w-[340px] md:h-[440px] object-contain z-20 drop-shadow-xl"
              style={{
                x: imageAX,
                y: imageAY,
                opacity: imageAOpacity,
              }}
            />
          </div>

          <p className="text-lg md:text-xl font-medium opacity-80">
            <TextGenerateEffect
              words="            Your journey to a healthier life starts here 🌿
"
            />
            Your journey to a healthier life starts here 🌿
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="mt-4 bg-[#5a3e36] text-white px-6 py-3 rounded-full shadow-lg hover:bg-[#6b4a43]"
            >
              Discover Products
            </motion.button>
          </p>
        </div>
      </div>
      <p
        className="fixed top-1/6 left-1/2 -translate-x-1/2 -translate-y-1/2
             text-[80px] md:text-[140px] font-extrabold text-[#e6dac7]
             tracking-[0.2em] select-none pointer-events-none opacity-60
             z-[5]"
      >
        FLORADYLE
      </p>

      {/* Scroll space */}
      <div className="h-[15vh]"></div>

      {/* SECOND IMAGE SCROLL SECTION */}
      <section
        ref={sectionRef}
        className="w-full h-screen flex flex-col md:flex-row items-center justify-center relative overflow-hidden px-6 md:px-20"
      >
        {/* LEFT SIDE - Product Description */}
        <motion.div
          className="flex-1 text-center  flex flex-col justify-center md:pr-12"
          style={{
            opacity: imageOpacity,
            y: imageY, // subtle vertical movement
          }}
        >
          <motion.div
            initial={{ x: -700, y: 0, opacity: 0 }} // start from left, hidden
            animate={{ x: 0, opacity: 4 }} // move to original position, fully visible
            transition={{
              type: "spring",
              stiffness: 100,
              // damping: 207,
              duration: 0.8,
            }}
            className="text-3xl md:text-4xl font-extrabold mb-4 text-[#5a3e36]"
          >
            <motion.h2 className="w-1/2">What is Fermentation ?</motion.h2>
          </motion.div>

          <div className="text-md max-w-2xl text-center  md:text-lg opacity-80 mb-6">
            <TextGenerateEffect
              words="  The art of fermentation has been practiced for over 7,000 years,
            tracing back to ancient Babylon, where people discovered that
            fermentation could make foods last longer and enhance their flavor
            and vitality. What began as a natural method of preservation has
            evolved into a sophisticated biotechnological process — one that
            lies at the heart of Floradyle’s formulations. Fermentation is the
            biological transformation of organic materials — such as fruits,
            nuts, roots, and vegetables — by beneficial microorganisms like
            lactic acid bacteria, yeast, and fungal cultures."
            />
          </div>
          <button
            className="bg-[#5a3e36] text-white px-6 py-3 rounded-full shadow-lg hover:bg-[#6b4a43] w-fit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More
          </button>
        </motion.div>

        {/* RIGHT SIDE - Image */}
      </section>
    </div>
  );
}
