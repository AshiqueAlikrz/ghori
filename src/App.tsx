import  { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

import "./App.css";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Footer from "./pages/Footer";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function App() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Smooth scrolling
    const smoother = ScrollSmoother.create({
      wrapper: wrapperRef.current!,
      content: contentRef.current!,
      smooth: 1.5, // scroll smoothing
      effects: true, // enable parallax effects on data-speed
      normalizeScroll: true, // fix inconsistent scroll behavior
    });

    return () => {
      smoother.kill();
      ScrollTrigger.killAll();
    };
  }, []);

  return (
    <div ref={wrapperRef} id="smooth-wrapper">
      <Navbar />
      <div ref={contentRef} id="smooth-content">
        <Home />
        <Products />
        <About />
        <Footer />
      </div>
    </div>
  );
}
