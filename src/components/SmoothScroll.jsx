// src/components/SmoothScroll.jsx
"use client";

import React, { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll({ children }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,          // Controls the scroll speed/smoothing weight
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Custom brutalist ease-out curve
      direction: "vertical",
      gestureDirection: "vertical",
      smooth: true,
      mouseMultiplier: 1,     // Adjust scroll sensitivity
      smoothTouch: false,     // Keep native touch inertia on mobile devices for performance
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}