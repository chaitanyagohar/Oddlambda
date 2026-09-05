"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowUpRight, MessageSquareQuote } from "lucide-react";

const ctaProjects = [
  {
    img: "/mount1.avif",
    name: "Neon Verse",
  },
  {
    img: "/uni.avif",
    name: "Tech Lab",
  },
  {
    img: "/leaf.avif",
    name: "Ski Lodge",
  },
  {
    img: "/mount2.avif",
    name: "Urban Loft",
  },
  {
    img: "/tree.jpg",
    name: "Modernist",
  },
];

const CTA = () => {
  const containerRef = useRef(null);
  const [hoveredCol, setHoveredCol] = useState(null);

  /* Cursor Motion */
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 100, damping: 15, mass: 0.1 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e) => {
    const rect = containerRef.current.getBoundingClientRect();

    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  return (
    <section
      id="contact"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative h-screen w-full overflow-hidden cursor-none bg-[#0a0a0a]"
    >
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover opacity-60"
        >
          <source src="/3968072-hd_1920_1080_24fps - Trim.mp4" type="video/mp4" />
        </video>
      </div>

      {/* 1. Columns Grid */}
      <div className="absolute inset-0 grid grid-cols-5 z-10">
        {ctaProjects.map((project, index) => (
          <div
            key={index}
            onMouseEnter={() => setHoveredCol(index)}
            onMouseLeave={() => setHoveredCol(null)}
            className="relative w-full h-full border-[#EAE6CD]/10 transition-all duration-500 group last:border-r-0"
          >
            {/* Hover Image */}
            <div
              className={`absolute inset-0 bg-cover bg-center transition-all duration-500 
                ${hoveredCol === index ? "opacity-100" : "opacity-0"}`}
              style={{ backgroundImage: `url(${project.img})` }}
            >
              <div className="absolute inset-0 bg-[#0a0a0a]/30" />
            </div>

            {/* Darken Others */}
            {/* <div
              className={`absolute inset-0 bg-[#0a0a0a] transition-opacity duration-500
                ${
                  hoveredCol !== null && hoveredCol !== index
                    ? "opacity-70"
                    : "opacity-0"
                }`}
            /> */}
          </div>
        ))}
      </div>

      {/* 2. Center Text (Transparent Outline) */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-20 ">
        <span className="text-[#EAE6CD] font-mono text-[10px] tracking-[0.2em] uppercase mb-6 md:mb-8 opacity-80">
          Get Started
        </span>

        {/* 
          Using text-transparent and -webkit-text-stroke to create the 
          hollow outline effect so the video plays INSIDE the text 
        */}
        <h2 className="m-0 text-[14vw] md:text-[10vw] lg:text-[9vw] font-corp font-bold uppercase tracking-[-0.04em] text-[#EAE6CD] [-webkit-text-stroke:1px_#EAE6CD] md:[-webkit-text-stroke:2px_#EAE6CD] leading-[0.88] text-center">
          LET'S MAKE <br />
          THINGS HAPPEN.
        </h2>
      </div>

      {/* 3. Custom Cursor */}
      <motion.div
        style={{ left: smoothX, top: smoothY }}
        className="absolute top-0 left-0 w-28 h-28 -ml-14 -mt-14 bg-[#EAE6CD] rounded-full flex items-center justify-center pointer-events-none z-30 mix-blend-normal"
        initial={{ scale: 0 }}
        animate={{ scale: hoveredCol !== null ? 1 : 0 }}
        transition={{ duration: 0.25 }}
      >
        <div className="text-[#0a0a0a] font-bold font-mono text-[9px] uppercase tracking-widest flex flex-col items-center gap-1">
          <span>let's</span>
          <span>Talk</span>
        </div>
      </motion.div>

      <div className="absolute bottom-10 md:bottom-16 left-1/2 -translate-x-1/2 z-40 flex flex-col sm:flex-row items-center gap-4">
        
        

        {/* Secondary Button: Start Your Project */}
        <a
          href="#contactform"
          className="group relative flex items-center gap-3 px-6 py-3 md:px-8 md:py-4 bg-transparent border border-[#EAE6CD]/30 backdrop-blur-md text-[#EAE6CD] rounded-full hover:bg-[#EAE6CD]/10 transition-all duration-300"
        >
          <span className="font-bold text-[11px] md:text-[13px] uppercase tracking-widest mt-0.5">
            Start Your Project
          </span>
          <ArrowUpRight size={16} strokeWidth={2} className="mt-0.5" />
        </a>

      </div>
    </section>
  );
};

export default CTA;