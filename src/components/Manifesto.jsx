import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowDownRight } from "lucide-react";
// import Threads from "./Threads"; // <--- UNCOMMENT THIS IN YOUR LOCAL PROJECT

// --- DELETE THIS PLACEHOLDER IN YOUR LOCAL PROJECT ---
const Threads = () => <div className="w-full h-full bg-neutral-900/20" />; 
// -----------------------------------------------------

const phrases = [
  "We don’t ship websites.",
  "We engineer digital advantage.",
  "Every decision is intentional.",
  "Every outcome is measurable."
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const lineVariants = {
  hidden: { y: "120%" },
  visible: {
    y: "0%",
    transition: {
      duration: 0.9,
      ease: [0.33, 1, 0.68, 1],
    },
  },
};

const Manifesto = () => {
  const ref = useRef(null);
  
  // Optimization: Track visibility for the heavy background separately.
  // We don't use 'once: true' here because we want to turn it OFF when scrolling away.
  const isBackgroundInView = useInView(ref, { margin: "0px 0px -200px 0px" });

  // Animation trigger for text (keeps 'once: true' so text doesn't disappear awkwardly)
  const isTextInView = useInView(ref, { once: true, margin: "-20%" });

  return (
    <section
      ref={ref}
      className="relative py-32 px-6 md:px-20 bg-[#030303] border-t border-white/5 z-20 overflow-hidden"
    >
      {/* Threads Background - Optimization applied here */}
      <div className="absolute inset-0 w-full h-full opacity-30 pointer-events-none">
        {isBackgroundInView && (
          <Threads 
            amplitude={1} 
            distance={0} 
            enableMouseInteraction={true} 
            color="#46cef6" 
          />
        )}
      </div>

      {/* Subtle Accent Line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#46cef6]/40 to-transparent" />

      {/* Main Content - z-10 ensures it sits on top of Threads */}
      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Section Label */}
        <div className="mb-14 flex items-center gap-4 text-neutral-500 font-mono text-xs tracking-[0.3em] uppercase">
          <span className="w-2 h-2 bg-[#46cef6] rounded-full" />
          The Manifesto
        </div>

        {/* Headline Stack */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isTextInView ? "visible" : "hidden"}
          className="space-y-3"
        >
          {phrases.map((phrase, index) => (
            <div key={index} className="overflow-hidden">
              <motion.h2
                variants={lineVariants}
                className="text-4xl md:text-6xl lg:text-8xl font-bold tracking-tighter leading-[1.05]
                           text-white transition-colors duration-500 hover:text-[#46cef6]"
              >
                {phrase}
              </motion.h2>
            </div>
          ))}
        </motion.div>

        {/* Supporting Statement */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isTextInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.6 }}
          className="mt-20 flex justify-end"
        >
          <div className="max-w-md flex gap-6 text-neutral-400 text-lg leading-relaxed">
            <ArrowDownRight
              size={32}
              className="shrink-0 text-[#46cef6]"
            />
            <p>
              We work as an extension of your team — not a vendor.
              No layers. No handoffs. Just direct collaboration with
              senior engineers and designers obsessed with performance,
              scalability, and long-term impact.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Manifesto;