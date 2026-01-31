"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { MoveHorizontal, ArrowUpRight } from "lucide-react";

/* -------------------------------------------------------------------------- */
/*                                   DATA                                     */
/* -------------------------------------------------------------------------- */

const projects = [
  {
    id: 1,
    title: "NEON VERSE",
    category: "Web3 / DeFi Platform",
    year: "2024",
    video: "https://www.pexels.com/download/video/2177901/",
  },
  {
    id: 2,
    title: "VELVET SPACE",
    category: "Luxury Real Estate",
    year: "2023",
    video: "https://cdn.pixabay.com/video/2017/05/07/9010-216403624_large.mp4",
  },
  {
    id: 3,
    title: "CARBON MODE",
    category: "High-End E-Commerce",
    year: "2024",
    video: "https://cdn.pixabay.com/video/2022/09/22/132210-752685101_large.mp4",
  },
];

/* -------------------------------------------------------------------------- */
/*                             MAIN COMPONENT                                 */
/* -------------------------------------------------------------------------- */

const HorizontalScroll = () => {
  const carouselRef = useRef(null);
  const innerRef = useRef(null);

  const [dragWidth, setDragWidth] = useState(0);

  /* ------------------------ Calculate Drag Width --------------------------- */

  const calculateWidth = useCallback(() => {
    if (!carouselRef.current || !innerRef.current) return;

    const container = carouselRef.current.offsetWidth;
    const content = innerRef.current.scrollWidth;

    setDragWidth(Math.max(0, content - container));
  }, []);

  useEffect(() => {
    calculateWidth();

    const resizeObserver = new ResizeObserver(calculateWidth);

    if (carouselRef.current) {
      resizeObserver.observe(carouselRef.current);
    }

    if (innerRef.current) {
      resizeObserver.observe(innerRef.current);
    }

    return () => resizeObserver.disconnect();
  }, [calculateWidth]);

  /* ------------------------------------------------------------------------ */

  return (
    <section className="py-32 bg-[#030303] overflow-hidden border-t border-white/5">
      {/* Header */}
      <div className="px-6 md:px-12 mb-16 flex flex-col md:flex-row items-end justify-between gap-8">
        <div>
          <span className="text-[#46cef6] font-mono text-xs tracking-widest uppercase mb-4 block">
            Portfolio
          </span>

          <h2 className="text-7xl md:text-9xl font-black tracking-tighter text-white leading-[0.8] mix-blend-difference">
            SELECTED <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#46cef6] to-white/20">
              WORK
            </span>
          </h2>
        </div>

        <div className="hidden md:flex items-center gap-3 text-neutral-500 font-mono text-sm tracking-widest animate-pulse">
          <MoveHorizontal size={16} />
          DRAG TO EXPLORE
        </div>
      </div>

      {/* Carousel */}
      <motion.div
        ref={carouselRef}
        className="cursor-grab active:cursor-grabbing pl-6 md:pl-12 w-full overflow-hidden"
        style={{
          willChange: "transform",
        }}
      >
        <motion.div
          ref={innerRef}
          drag="x"
          dragConstraints={{ right: 0, left: -dragWidth }}
          dragElastic={0.08}
          whileTap={{ cursor: "grabbing" }}
          className="flex gap-8 w-fit pr-12"
          style={{
            willChange: "transform",
          }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="relative group w-[85vw] md:w-[600px] aspect-[16/9] md:aspect-[4/3] flex-shrink-0 bg-neutral-900 overflow-hidden border border-white/10"
              style={{
                willChange: "transform",
                backfaceVisibility: "hidden",
              }}
            >
              {/* Video */}
              <div className="absolute inset-0">
                <video
                  src={project.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  loading="lazy"
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 grayscale group-hover:grayscale-0"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90" />
              </div>

              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-between z-10 pointer-events-none">
                <div className="flex justify-between items-start">
                  <span className="font-mono text-xs border border-white/20 px-2 py-1 rounded text-white/70 backdrop-blur-sm">
                    {project.year}
                  </span>

                  <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-y-4 group-hover:translate-y-0">
                    <ArrowUpRight className="text-white" />
                  </div>
                </div>

                <div>
                  <div className="overflow-hidden mb-2">
                    <h3 className="text-4xl md:text-5xl font-bold text-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 delay-100">
                      {project.title}
                    </h3>
                  </div>

                  <div className="overflow-hidden">
                    <p className="text-[#46cef6] font-mono text-sm tracking-widest translate-y-full group-hover:translate-y-0 transition-transform duration-500 delay-200">
                      {project.category}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          {/* CTA */}
          <div className="w-[40vw] md:w-[300px] flex items-center justify-center flex-shrink-0 border-l border-white/10">
            <a
              href="#contact"
              className="group flex flex-col items-center gap-4 text-white hover:text-[#46cef6] transition-colors"
            >
              <div className="w-20 h-20 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[#46cef6] group-hover:scale-110 transition-all">
                <ArrowUpRight size={32} />
              </div>

              <span className="font-mono text-sm tracking-widest uppercase">
                View All Projects
              </span>
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HorizontalScroll;
