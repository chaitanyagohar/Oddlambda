"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ProcessSection({ processSteps = [] }) {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 80%", "end 20%"],
  });

  return (
    <section
      ref={sectionRef}
      id="process"
      className="relative bg-[#050505] py-32 overflow-hidden"
    >
      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-24">
          <span className="text-[#46cef6] font-mono text-xs tracking-[0.3em] uppercase block mb-4">
            The Methodology
          </span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
            FROM CONCEPT TO <br />
            <span className="text-neutral-600">EXECUTION</span>
          </h2>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {processSteps.map((step, index) => {
            const start = index / processSteps.length;
            const end = start + 0.25;

            const opacity = useTransform(
              scrollYProgress,
              [start, end],
              [0.3, 1]
            );

            const y = useTransform(
              scrollYProgress,
              [start, end],
              [24, 0]
            );

            // 🔑 FIX: compute boxShadow directly
            const boxShadow = useTransform(
              scrollYProgress,
              [start, end],
              [
                "0 0 0 rgba(70,206,246,0)",
                "0 0 20px rgba(70,206,246,0.35)",
              ]
            );

            return (
              <motion.div
                key={index}
                style={{ opacity, y }}
                className="relative"
              >
                <motion.div
                  style={{ boxShadow }}
                  className="p-8 border border-white/10 bg-black/40 backdrop-blur-md transition-colors"
                >
                  <span className="text-[#46cef6] font-mono text-xs tracking-widest">
                    0{index + 1}
                  </span>
                  <h3 className="text-xl font-bold text-white mt-4 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-neutral-400 leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
