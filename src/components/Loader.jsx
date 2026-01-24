"use client";

import { motion, AnimatePresence, easeInOut } from "framer-motion";
import { useEffect, useState } from "react";

const Loader = ({ onLoadingComplete }) => {
  const [complete, setComplete] = useState(false);
  const text = "OddLambda";

  useEffect(() => {
    const timer = setTimeout(() => {
      setComplete(true);
      if (onLoadingComplete) onLoadingComplete();
    }, 3500);

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  return (
    <AnimatePresence>
      {!complete && (
        <motion.div
          // CHANGED: z-50 -> z-[9999] to ensure it covers the Navbar
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#030303] text-white overflow-hidden"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* ---------------- TYPING CONTAINER ---------------- */}
          <motion.div
            initial={{ scale: 1 }}
            animate={{ scale: 100, opacity: 0 }}
            transition={{
              scale: { delay: 2.2, duration: 1, ease: [0.76, 0, 0.24, 1] },
              opacity: { delay: 2.4, duration: 0.5 },
            }}
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

          {/* ---------------- DARK CURTAIN WIPE ---------------- */}
          
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;