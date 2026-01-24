"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";
import GridScan from "./GridScan";

// Updated, more informative services list
const services = [
  "Corporate Website",
  "Landing Pages",
  "E-commerce",
  "Brand Identity",
  "Personal Portfolio",
  "Digital Presence",
  "Digital Marketing",
];

const Hero = () => {
  const [sequence, setSequence] = useState(0);
  const [mouseX, setMouseX] = useState(0);
  const [serviceIndex, setServiceIndex] = useState(0);

  /* ---------------- Reveal Sequence ---------------- */
  useEffect(() => {
    const timers = [
      setTimeout(() => setSequence(1), 200),
      setTimeout(() => setSequence(2), 500),
      setTimeout(() => setSequence(3), 900),
      setTimeout(() => setSequence(5), 1400),
      setTimeout(() => setSequence(6), 1800),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  /* ---------------- Cursor Presence ---------------- */
  useEffect(() => {
    const move = (e) => {
      setMouseX((e.clientX / window.innerWidth - 0.5) * 8);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  /* ---------------- Rotating Services ---------------- */
  useEffect(() => {
    const i = setInterval(
      () => setServiceIndex((v) => (v + 1) % services.length),
      3500
    );
    return () => clearInterval(i);
  }, []);

  return (
    <section className="relative h-screen bg-[#030303] text-white flex flex-col justify-center overflow-hidden">
      
      {/* ---------------- Background Grid ---------------- */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: sequence >= 1 ? 1 : 0 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 pointer-events-none"
      >
        <GridScan
          sensitivity={0.55}
          lineThickness={1}
          linesColor="#3a3246"
          gridScale={0.1}
          scanColor="#6ee7b7"
          scanOpacity={0.25}
          enablePost
          bloomIntensity={0.5}
          chromaticAberration={0.002}
          noiseIntensity={0.01}
        />
      </motion.div>

      {/* ---------------- CORNER 1: Est. 2025 ---------------- */}
      {/* Pushed down to top-32 on mobile to give space for the larger service menu above it */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: sequence >= 2 ? 1 : 0, x: sequence >= 2 ? 0 : -20 }}
        transition={{ duration: 0.8 }}
        className="absolute z-20 
          top-32 right-6 text-right
          md:top-12 md:left-12 md:text-left"
      >
        <div className="flex items-center gap-3 justify-end md:justify-start">
          <div className="hidden md:block w-10 h-px bg-amber-400" />
          <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.25em] text-stone-400">
            Est. 2025
          </span>
        </div>
      </motion.div>

      {/* ---------------- CORNER 2: Services ---------------- */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: sequence >= 2 ? 1 : 0, x: sequence >= 2 ? 0 : 20 }}
        transition={{ duration: 0.8 }}
        className="absolute z-20 text-right
          top-20 right-6 
          md:top-12 md:right-12"
      >
         {/* MADE BOLDER AND BIGGER */}
         <div className="text-[16px] pt-10 sm:text-sm font-bold font-mono uppercase tracking-widest text-stone-200 mb-2">
            Currently Offering
         </div>
         <div className="text-xs sm:text-sm font-mono uppercase tracking-[0.2em] text-amber-400 h-4 font-medium">
           {services[serviceIndex]}
         </div>
      </motion.div>

      {/* ---------------- CENTER STAGE ---------------- */}
      <div className="relative z-10 w-full max-w-[90rem] mx-auto px-4 sm:px-6 flex flex-col justify-center h-full pb-10">
        
        {/* Line 1: DESIGNED */}
        <motion.h1
           initial={{ opacity: 0, y: 40 }}
           animate={{ opacity: sequence >= 3 ? 1 : 0, y: sequence >= 3 ? 0 : 40 }}
           transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
           className="text-[13vw] sm:text-[7vw] font-bold tracking-tighter leading-none text-stone-100 self-start ml-[2%] sm:ml-[5%]"
           style={{ x: mouseX * -1 }}
        >
          DESIGNED
        </motion.h1>

        {/* Line 2: to */}
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           animate={{ opacity: sequence >= 3 ? 1 : 0, scale: sequence >= 3 ? 1 : 0.9 }}
           transition={{ duration: 1, delay: 0.1 }}
           className="self-center sm:mr-[10%] my-2 sm:my-4 flex items-center gap-4"
        >
           <span className="h-px w-12 sm:w-24 bg-stone-700" />
           <span className="font-serif italic text-3xl sm:text-5xl text-stone-500">to</span>
           <span className="h-px w-12 sm:w-24 bg-stone-700" />
        </motion.div>

        {/* Line 3: PERFORM (Video Mask) */}
        <motion.div
           className="w-full relative self-center"
           style={{ x: mouseX }}
        >
             <svg
                viewBox="0 0 1300 280" 
                width="100%"
                className="w-full h-auto max-h-[25vh] sm:max-h-[35vh]"
              >
                <defs>
                  <mask id="perform-mask">
                    <rect width="100%" height="100%" fill="black" />
                    <text
                      x="50%"
                      y="75%"
                      textAnchor="middle"
                      fontSize="260"
                      fontWeight="900"
                      fill="white"
                      letterSpacing="-12"
                      fontFamily="system-ui, -apple-system, sans-serif"
                    >
                      PERFORM
                    </text>
                  </mask>
                </defs>

                <foreignObject
                  width="100%"
                  height="100%"
                  mask="url(#perform-mask)"
                >
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover opacity-90"
                  >
                    <source
                      src="/public/5935837-hd_1920_1080_30fps.mp4"
                      type="video/mp4"
                    />
                  </video>
                </foreignObject>
              </svg>
        </motion.div>

        {/* Paragraph */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: sequence >= 5 ? 1 : 0 }}
          transition={{ duration: 1 }}
          className="
            absolute 
            bottom-24 left-6 max-w-[80%] text-xs 
            sm:bottom-[15%] sm:left-[20%] sm:max-w-sm sm:text-base
            text-stone-200 font-light leading-relaxed
            border-l border-stone-800 pl-4
          "
        >
          We design and develop high-performance websites and conversion-focused digital marketing systems that help businesses attract attention, generate leads, and scale.

        </motion.p>

      </div>

      {/* ---------------- CTA ---------------- */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: sequence >= 6 ? 1 : 0, y: sequence >= 6 ? 0 : 20 }}
        transition={{ duration: 0.8 }}
        className="absolute bottom-6 right-4 sm:bottom-12 sm:right-12 z-20 flex flex-col items-end gap-3 sm:gap-4"
      >
        <div className="flex items-center gap-2 text-[10px] text-emerald-400/80 font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            ONLINE
        </div>
        
        <a
          href="#contact"
          className="
            group flex items-center gap-2 sm:gap-3
            text-xs sm:text-sm font-bold uppercase tracking-widest
            text-amber-300
            bg-amber-950/20 px-4 py-2 sm:px-6 sm:py-3 
            border border-amber-900/30 rounded-sm
            hover:bg-amber-400 hover:text-black transition-all duration-300
          "
        >
          <span>Start Project</span>
          <ArrowUpRight size={14} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
        </a>
      </motion.div>

      {/* Scroll Line */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: sequence >= 6 ? 1 : 0 }}
        transition={{ duration: 0.6 }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 h-16 sm:h-24 w-px bg-gradient-to-b from-transparent via-stone-700 to-transparent"
      />
    </section>
  );
};

export default Hero;