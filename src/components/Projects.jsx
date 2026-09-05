"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";

const Projects = () => {
  // Track mouse position for the "Live Website" hover badge
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setMousePos({
      x: e.clientX,
      y: e.clientY,
    });
  };

  const projects = [
    {
      id: "01",
      title: "Lords & Co",
      meta: "2026, Real Estate",
      link: "https://lords.company",
      image: "/lords.png",
    },
    {
      id: "02",
      title: "Elitairs",
      meta: "2025, Real Estate",
      link: "https://elitairs.com",
      image: "/elitairs2.png",
    },
    {
      id: "03",
      title: "Ashiya",
      meta: "2025, Interior Design",
      link: "https://ashiya.co.in/",
      image: "/ashiya.png",
    },
    {
      id: "04",
      title: "Concorde Eleve",
      meta: "2025, Real Estate",
      link: "https://concordegroup-eleve.com/",
      image: "/concorde.png",
    },
    {
      id: "05",
      title: "Drootle",
      meta: "2025, Digital Marketing",
      link: "https://drootle.com",
      image: "/drootle.png",
    },
    {
      id: "06",
      title: "Darvyn Digital",
      meta: "2026, Meta Campaign",
      link: "https://darvyn.in",
      image: "/darvyn.png",
    },
  ];

  const maskVariant = {
    hidden: { y: "110%" },
    visible: {
      y: "0%",
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const fadeUpVariant = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      id="projects"
      onMouseMove={handleMouseMove}
      className="relative z-20 bg-[#EAE6CD] text-[#1A1512] pt-24 md:pt-32 pb-32 overflow-visible"
    >
      <div className="w-full px-4 md:px-8 lg:px-10">

        {/* ========================================================
            HEADER
        ======================================================== */}
        <div className="mb-12 md:mb-20">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
            transition={{ staggerChildren: 0.1 }}
            className="font-corp text-[12vw] sm:text-[10vw] lg:text-[9vw] font-bold uppercase tracking-[-0.04em] leading-[0.85] m-0 p-0 text-[#1A1512]"
          >
            <span className="block overflow-hidden pb-2">
              <motion.span variants={maskVariant} className="block">
                Projects
              </motion.span>
            </span>
          </motion.h2>
        </div>

        {/* ========================================================
            INTRO
        ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-20 md:mb-28">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
            variants={fadeUpVariant}
            className="lg:col-start-6 lg:col-span-6 xl:col-start-6 xl:col-span-5 flex gap-4 md:gap-6 items-start"
          >
            <div className="border border-[#1A1512]/30 px-2 py-1 text-[10px] uppercase font-bold tracking-widest text-[#1A1512]/80 whitespace-nowrap mt-1">
              Portfolio
            </div>
            <div className="flex flex-col gap-6">
              <p className="text-[#1A1512]/90 text-[16px] md:text-[18px] font-medium leading-[1.45]">
                I've already helped clients from various industries move
                their businesses forward with custom digital solutions.
              </p>
            </div>
          </motion.div>
        </div>

        {/* ========================================================
            PROJECT LIST
        ======================================================== */}
        <div className="relative">
          {/* Top border */}
          <div className="h-px w-full bg-[#1A1512]/30" />

          {projects.map((project) => (
            <a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block w-full"
            >

              {/* ==================================================
                  DESKTOP ROW (Flexbox for smooth push animation)
              ================================================== */}
              <div
                className="
                  relative hidden md:flex items-center w-full px-5 py-1
                  min-h-[50px] group-hover:min-h-[180px] lg:group-hover:min-h-[210px]
                  border-b border-[#1A1512]/30 group-hover:border-transparent
                  transition-all duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)]
                "
              >
                {/* Background Wipe */}
                <div 
                  className="
                    absolute inset-0 bg-[#1A1512] origin-center scale-y-0 opacity-0
                    group-hover:scale-y-100 group-hover:opacity-100
                    transition-all duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] z-0
                  " 
                />

                {/* 1. Meta Column */}
                <div className="w-[25%] lg:w-[20%] shrink-0 relative z-20 flex items-center">
                  <span className="font-mono text-[11px] lg:text-[12px] uppercase tracking-widest text-[#1A1512]/70 group-hover:text-[#EAE6CD]/70 transition-colors duration-[400ms]">
                    {project.meta}
                  </span>
                </div>

                {/* 2. Expanding Image Column (Inline) */}
                <div
                  className="
                    flex items-center overflow-hidden relative z-20
                    transition-all duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)]
                    w-0 opacity-0 group-hover:w-[220px] lg:group-hover:w-[280px]
                    group-hover:opacity-100 group-hover:mr-6 lg:group-hover:mr-8
                  "
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="
                      block w-[220px] lg:w-[280px] min-w-[220px] lg:min-w-[280px] aspect-[16/9] object-cover rounded-[4px]
                      -translate-x-8 group-hover:translate-x-0
                      transition-transform duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)]
                    "
                  />
                </div>

                {/* 3. Title Column */}
                <div className="flex-1 relative z-20 flex items-center min-w-0">
                  <h3 className="font-corp text-[4.5vw] lg:text-[4vw] font-bold uppercase tracking-[-0.03em] leading-none text-[#1A1512] group-hover:text-[#EAE6CD] transition-colors duration-[400ms] whitespace-nowrap overflow-hidden text-ellipsis">
                    {project.title}
                  </h3>
                </div>

                {/* 4. Arrow Column */}
                <div className="relative z-20 flex items-center justify-end pl-5 text-[#1A1512]/40 group-hover:text-[#EAE6CD] transition-colors duration-[400ms]">
                  <ArrowUpRight 
                    strokeWidth={1.5} 
                    className="w-7 h-7 lg:w-8 lg:h-8 transition-transform duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-[4px] group-hover:-translate-y-[4px]" 
                  />
                </div>
              </div>

              {/* ==================================================
                  MOBILE ROW (Standard Stacked)
              ================================================== */}
              <div className="relative flex md:hidden flex-col w-full py-8 border-b border-[#1A1512]/30">
                <div className="flex items-start justify-between gap-4 w-full">
                  <h3 className="font-corp text-[9vw] sm:text-[8vw] font-bold uppercase tracking-[-0.03em] leading-[0.9]">
                    {project.title}
                  </h3>
                  <ArrowUpRight strokeWidth={1.5} className="w-7 h-7 shrink-0 mt-1" />
                </div>

                <div className="w-full mt-6 mb-2">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="block w-full aspect-[16/9] object-cover rounded-[4px]"
                  />
                </div>

                <div className="flex items-center mt-4">
                  <span className="font-mono text-[11px] uppercase tracking-widest text-[#1A1512]/60">
                    {project.meta}
                  </span>
                </div>
              </div>

              {/* ==================================================
                  CURSOR TRACKING BADGE (Live Website Pill Only)
              ================================================== */}
              <div
                className="
                  fixed top-0 left-0 pointer-events-none z-[100]
                  hidden md:flex items-center gap-2
                  bg-[#f5f5f5] text-[#1A1512] px-3.5 py-1.5 rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.15)]
                  opacity-0 group-hover:opacity-100 transition-opacity duration-300
                "
                style={{
                  transform: `translate(${mousePos.x + 20}px, ${mousePos.y + 20}px)`,
                }}
              >
                <ExternalLink size={14} strokeWidth={2} />
                <span className="font-mono text-[10px] md:text-[11px] font-bold uppercase tracking-widest mt-[1px]">
                  Live Website
                </span>
              </div>

            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;