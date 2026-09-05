"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const [hovered, setHovered] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    const touch =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;

    setIsTouchDevice(touch);
  }, []);

  useEffect(() => {
    if (isTouchDevice) return;

    const moveCursor = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }

      const target = e.target;

      const isClickable =
        window.getComputedStyle(target).cursor === "pointer" ||
        target.tagName === "A" ||
        target.tagName === "BUTTON";

      setHovered(isClickable);
    };

    window.addEventListener("mousemove", moveCursor);

    return () => window.removeEventListener("mousemove", moveCursor);
  }, [isTouchDevice]);

  if (isTouchDevice) return null;

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 z-[100] pointer-events-none mix-blend-difference -translate-x-1/2 -translate-y-1/2"
    >
      <motion.div
        animate={{ scale: hovered ? 1.5 : 1 }}
        transition={{ duration: 0.2 }}
        className="relative flex items-center justify-center"
      >
        <div className="w-[40px] h-[40px] border border-white/50 rounded-full" />
        <div className="absolute w-1 h-1 bg-white rounded-full" />
        <div className="absolute top-[-4px] w-[1px] h-2 bg-white" />
        <div className="absolute bottom-[-4px] w-[1px] h-2 bg-white" />
        <div className="absolute left-[-4px] w-2 h-[1px] bg-white" />
        <div className="absolute right-[-4px] w-2 h-[1px] bg-white" />
      </motion.div>
    </div>
  );
};

export default CustomCursor;
