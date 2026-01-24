"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const Loader = ({ onLoadingComplete }) => {
  const [complete, setComplete] = useState(false);
  const text = "OddLambda";

  useEffect(() => {
    // Reduced to 2500ms (2.5s) for a snappier feel.
    // Logic: Typing finishes @ ~1.6s -> 0.9s pause -> Slide up.
    const timer = setTimeout(() => {
      setComplete(true);
      if (onLoadingComplete) onLoadingComplete();
    }, 2500);

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  return (
    <AnimatePresence>
      {!complete && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#030303] text-white overflow-hidden"
          initial={{ y: 0 }}
          exit={{ y: "-100%" }} // The "Screen goes up" animation
          transition={{
            duration: 0.8,
            ease: [0.76, 0, 0.24, 1], // Custom bezier for that premium "smooth" feel
          }}
        >
          {/* ---------------- TYPING CONTAINER ---------------- */}
          <motion.div
            // Removed the scale: 100 animation.
            // The text now stays stable and moves up with the background.
            className="relative flex items-start gap-2"
          >
            {/* TEXT */}
            <div className="flex overflow-hidden">
              {text.split("").map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ y: "100%" }}
                  animate={{ y: "0%" }}
                  transition={{
                    duration: 0.5,
                    ease: [0.33, 1, 0.68, 1],
                    delay: 0.2 + i * 0.08,
                  }}
                  className="text-4xl md:text-6xl font-bold tracking-tight inline-block"
                >
                  {char}
                </motion.span>
              ))}
            </div>

            {/* SYMBOL (®) */}
            <motion.span
              initial={{ opacity: 0, scale: 0, rotate: -45 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{
                delay: 1.6,
                duration: 0.4,
                type: "spring",
              }}
              className="text-xs md:text-sm font-mono text-stone-400 border border-stone-600 rounded-full w-5 h-5 md:w-6 md:h-6 flex items-center justify-center mt-1"
            >
              R
            </motion.span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;