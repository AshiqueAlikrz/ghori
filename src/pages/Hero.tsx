import { useEffect } from "react";
import gsap from "gsap";
import heroImg from "../assets/images/medicine.png";
import handImage from "../assets/images/hand.png";

export default function Hero() {
  useEffect(() => {
    gsap.from(".hero-text", {
      y: 80,
      opacity: 0,
      duration: 1.2,
      stagger: 0.2,
      ease: "power3.out",
    });
    gsap.from(".hero-img", {
      scale: 0.9,
      opacity: 0,
      y: 50,
      duration: 1.4,
      ease: "power3.out",
      delay: 0.3,
    });
  }, []);

  return (
    <section
      id="hero"
      className="h-screen flex flex-col justify-center items-center text-center relative bg-gradient-to-b from-[#fffaf4] to-[#f3e3c5] overflow-hidden"
    >
      <div className="absolute top-32 left-20 w-40 h-40 bg-[#f0ddbd] rounded-full blur-3xl opacity-40" />
      <div className="absolute bottom-32 right-20 w-48 h-48 bg-[#dec7a3] rounded-full blur-3xl opacity-40" />

      <h2 className="hero-text text-5xl md:text-7xl font-extrabold text-[#5a3e36] tracking-tight mb-6">
        Wellness in Every Drop
      </h2>
      <p className="hero-text text-lg md:text-xl font-medium text-[#6b4a43] opacity-80 mb-8 max-w-xl">
        Experience nature’s finest remedies, designed to elevate your health and
        vitality 🌿
      </p>
      <button className="hero-text bg-[#5a3e36] text-white px-8 py-3 rounded-full shadow-lg hover:bg-[#6b4a43] transition-transform transform hover:scale-110 active:scale-95">
        Discover Products
      </button>

      <div className="relative mt-16">
        <img
          src={handImage}
          alt="Hand"
          className="hero-img absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] z-10"
        />
        <img
          src={heroImg}
          alt="Medicine"
          className="hero-img relative w-[240px] md:w-[360px] z-20 drop-shadow-2xl"
        />
      </div>
    </section>
  );
}
