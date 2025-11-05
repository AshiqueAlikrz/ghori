import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Navbar() {
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Change background & shadow on scroll
    gsap.to(navRef.current, {
      backgroundColor: "rgba(255,255,255,0.95)",
      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
      duration: 0.5,
      scrollTrigger: {
        trigger: document.body,
        start: "top -50",
        toggleActions: "play reverse play reverse",
      },
    });
  }, []);

  return (
    <nav ref={navRef} className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-7 py-3 transition-all duration-500">
      <h1 className=" text-[#5a3e36] tracking-widest">FLORADYLE</h1>
      <ul className="hidden md:flex gap-8 text-[#5a3e36] font-medium">
        <li>
          <a href="/" className="text-[#5a3e36] hover:text-[#8b6f62]">
            Home
          </a>
        </li>
        <li>
          <a href="#about" className="hover:text-[#8b6f62]">
            About
          </a>
        </li>
        <li>
          <a href="#products" className="hover:text-[#8b6f62]">
            Products
          </a>
        </li>
        <li>
          <a href="#testimonials" className="hover:text-[#8b6f62]">
            Testimonials
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:text-[#8b6f62]">
            Contact
          </a>
        </li>
      </ul>
      <button className="bg-[#5a3e36] text-white px-5 py-2 rounded-full hover:bg-[#6b4a43] transition-all">Shop Now</button>
    </nav>
  );
}
