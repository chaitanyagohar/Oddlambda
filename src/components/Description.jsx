"use client";

import React, { useRef } from "react";
import {
  useScroll,
  useTransform,
  useSpring,
  motion,
} from "framer-motion";

/* --- IMAGES --- */

const img1 =
  "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop";

const img2 =
  "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=2069&auto=format&fit=crop";

const img3 =
  "https://static.vecteezy.com/system/resources/thumbnails/001/838/299/small_2x/abstract-silver-metallic-join-lines-on-white-background-geometric-triangle-gradient-shape-pattern-luxury-style-vector.jpg";

/* --- PHRASE COMPONENT --- */

const Phrase = ({ children, progress, range, highlight }) => {
  const opacity = useTransform(progress, range, [0.2, 1]);
  const y = useTransform(progress, range, [10, 0]);

  return (
    <motion.span
      style={{ opacity, y }}
      className={`mr-2 md:mr-3 inline-block will-change-transform ${
        highlight
          ? "text-amber-700 font-semibold"
          : "text-stone-700"
      }`}
    >
      {children}
    </motion.span>
  );
};

/* --- MAIN COMPONENT --- */

export default function Description() {
  const container = useRef(null);

  /* Scroll Tracking */
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  /* Smooth Physics Layer */
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 25,
    mass: 0.5,
  });

  /* Parallax Transforms */
  const yImg1 = useTransform(smoothProgress, [0, 1], [0, -120]);
  const yImg2 = useTransform(smoothProgress, [0, 1], [0, -200]);
  const rotateImg = useTransform(smoothProgress, [0, 1], [-1.5, 1.5]);

  /* Text */
  const textPrimary =
    "Oddlambda is a senior-led web engineering agency building digital products that perform under real-world pressure.";

  const textSecondary =
    "We partner directly with founders, operators, and growth teams to design and develop experiences that convert, scale, and endure. Every decision is driven by clarity, performance, and measurable business outcomes.";

  const wordsPrimary = textPrimary.split(" ");
  const wordsSecondary = textSecondary.split(" ");

  /* Highlighted Keywords */
  const highlights = [
    "Oddlambda",
    "senior-led",
    "perform",
    "founders",
    "convert",
    "scale",
    "performance",
  ];

  /* Word Timing */
  const getRange = (index, total, start, end) => {
    const step = (end - start) / total;
    return [start + index * step, start + (index + 1) * step];
  };

  return (
    <section
      ref={container}
      className="relative min-h-[120vh] flex flex-col justify-center bg-[#FFFEF7] overflow-hidden"
    >
      {/* ---------------- BACKGROUND ---------------- */}

      {/* Structure Lines */}
      <div className="absolute left-6 md:left-20 top-0 bottom-0 w-px bg-stone-300/40" />
      <div className="absolute right-6 md:right-20 top-0 bottom-0 w-px bg-stone-300/40" />

      {/* Ambient Glow */}
      <div className="absolute top-[20%] left-[-10%] w-[600px] h-[600px] bg-amber-200/40 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[500px] h-[500px] bg-rose-200/30 rounded-full blur-[120px] pointer-events-none" />

      {/* Subtle Grain */}
      <div className="absolute inset-0 opacity-[0.025] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      {/* ---------------- PARALLAX IMAGES ---------------- */}

      {/* Image 1 */}
      <motion.div
        style={{ y: yImg1, rotate: rotateImg }}
        className="absolute top-[5%] right-[2%] md:right-[10%] w-48 md:w-72 aspect-[3/4] z-0"
      >
        <div className="relative w-full h-full overflow-hidden border border-stone-300 bg-white shadow-lg">
          <img
            src={img1}
            alt="Engineering"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-white/70 to-transparent" />

          <div className="absolute bottom-4 left-4 text-[10px] font-mono text-amber-700 tracking-widest">
            SYSTEM CORE
          </div>
        </div>
      </motion.div>

      {/* Image 2 */}
      <motion.div
        style={{ y: yImg2 }}
        className="absolute bottom-[5%] left-[2%] md:left-[5%] w-64 md:w-96 aspect-video z-0 opacity-70 grayscale"
      >
        <img
          src={img3}
          alt="Infrastructure"
          className="w-full h-full object-cover"
        />

        <div className="absolute -top-6 left-0 text-[10px] font-mono text-stone-500 tracking-widest">
          FIG. 02 / INFRASTRUCTURE
        </div>
      </motion.div>

      {/* ---------------- CONTENT ---------------- */}

      <div className="relative z-10 max-w-7xl w-full mx-auto px-6 md:px-24 py-24">

        {/* Header */}
        <div className="flex items-center gap-4 mb-20">
          <span className="text-xs font-mono text-amber-700 tracking-[0.2em] uppercase">
            / 01. Agency Profile
          </span>

          <div className="h-px w-12 bg-amber-700/40" />
        </div>

        <div className="flex flex-col gap-32">

          {/* Headline */}
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-semibold leading-[1.05] text-stone-900 max-w-5xl tracking-tight">
            {wordsPrimary.map((word, i) => (
              <Phrase
                key={i}
                progress={smoothProgress}
                range={getRange(i, wordsPrimary.length, 0.1, 0.5)}
                highlight={highlights.includes(
                  word.replace(/[.,]/g, "")
                )}
              >
                {word}
              </Phrase>
            ))}
          </h2>

          {/* Secondary Section */}
          <div className="flex flex-col md:flex-row items-start justify-end gap-16 relative">

            {/* Accent Image */}
            <div className="hidden md:block absolute left-0 top-2 w-48 aspect-square border border-stone-300 p-1 bg-white/70 backdrop-blur-sm shadow-md">
              <img
                src={img2}
                alt="Design"
                className="w-full h-full object-cover opacity-90"
              />

              <div className="absolute top-2 right-2 flex gap-1">
                <div className="w-1 h-1 bg-stone-400 rounded-full" />
                <div className="w-1 h-1 bg-stone-400 rounded-full" />
                <div className="w-1 h-1 bg-stone-400 rounded-full" />
              </div>

              <div className="absolute bottom-2 left-2 text-[8px] font-mono text-amber-700">
                DESIGN_LANG
              </div>
            </div>

            {/* Body Text */}
            <p className="text-lg md:text-2xl font-light leading-relaxed text-stone-600 max-w-2xl">
              {wordsSecondary.map((word, i) => (
                <Phrase
                  key={i}
                  progress={smoothProgress}
                  range={getRange(i, wordsSecondary.length, 0.5, 0.9)}
                  highlight={highlights.includes(
                    word.replace(/[.,]/g, "")
                  )}
                >
                  {word}
                </Phrase>
              ))}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
