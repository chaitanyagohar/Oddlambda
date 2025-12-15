import React from "react";
import { motion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";
// import Threads from "./Threads"; // UNCOMMENT IN REAL PROJECT

// TEMP PLACEHOLDER (safe)
const Threads = () => <div className="w-full h-full bg-neutral-900/20" />;

const phrases = [
  "We don’t build websites.",
  "We design digital leverage.",
  "Every choice is deliberate.",
  "Every result is accountable.",
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
  return (
    <motion.section
      className="relative py-32 px-6 md:px-20 bg-[#030303] border-t border-white/5 z-20 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-20%" }}
    >
      {/* Threads Background */}
      <div className="absolute inset-0 w-full h-full opacity-30 pointer-events-none">
        <Threads
          amplitude={1}
          distance={0}
          enableMouseInteraction
          color="#46cef6"
        />
      </div>

      {/* Accent Line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#46cef6]/40 to-transparent" />

      {/* Content */}
      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Label */}
        <div className="mb-14 flex items-center gap-4 text-neutral-500 font-mono text-xs tracking-[0.3em] uppercase">
          <span className="w-2 h-2 bg-[#46cef6] rounded-full" />
          The Manifesto
        </div>

        {/* Headlines */}
        <motion.div variants={containerVariants} className="space-y-3">
          {phrases.map((phrase, i) => (
            <div key={i} className="overflow-hidden">
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

        {/* Image + Supporting Text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-24 grid grid-cols-1 lg:grid-cols-[620px_1fr] gap-14 items-start"
        >
          {/* Image */}
          <motion.div
            initial={{ scale: 0.96, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-xl border border-white/10"
          >
            <img
              src="/images/manifesto.png"
              alt="Manifesto Visual"
              className="w-full h-[22vh] object-cover "
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-transparent" />
          </motion.div>

          {/* Text */}
          <div className="flex gap-6 max-w-md text-neutral-400 text-lg leading-relaxed">
            <ArrowDownRight size={32} className="shrink-0 text-[#46cef6]" />
            <p>
  We integrate directly into your team, moving with precision and intent.
  No intermediaries. No noise. Only senior minds shaping systems built
  to perform, scale, and remain relevant long after launch.
</p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Manifesto;
