import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

const Phrase = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0.55, 1]);
  const y = useTransform(progress, range, [10, 0]);

  return (
    <motion.span
      style={{ opacity, y }}
      className="mr-3 inline-block will-change-transform"
    >
      {children}
    </motion.span>
  );
};

const Description = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 0.85", "end 0.6"],
  });

  const textPrimary =
    "Oddlambda is a senior-led web engineering agency building digital products that perform under real-world pressure.";
  const textSecondary =
    "We partner directly with founders, operators, and growth teams to design and develop experiences that convert, scale, and endure. Every decision is driven by clarity, performance, and measurable business outcomes.";

  const wordsPrimary = textPrimary.split(" ");
  const wordsSecondary = textSecondary.split(" ");

  const getRange = (index, total, start, end) => {
    const step = (end - start) / total;
    return [start + index * step, start + (index + 1) * step];
  };

  return (
    <section
      ref={container}
      className="
        relative min-h-screen
        flex items-center
        bg-[#030303]
        px-6 py-40 md:px-20
        overflow-hidden
      "
    >
      {/* Subtle top divider for section grounding */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-6xl w-full mx-auto flex flex-col justify-center">
        {/* PRIMARY STATEMENT */}
        <h2 className="
          text-4xl md:text-6xl lg:text-7xl
          font-bold leading-[1.15]
          text-white
          mb-24
          flex flex-wrap
          max-w-5xl
        ">
          {wordsPrimary.map((word, i) => (
            <Phrase
              key={i}
              progress={scrollYProgress}
              range={getRange(i, wordsPrimary.length, 0, 0.45)}
            >
              {word}
            </Phrase>
          ))}
        </h2>

        {/* SECONDARY STATEMENT */}
        <p className="
          text-xl md:text-3xl
          font-medium leading-relaxed
          text-neutral-300
          flex flex-wrap
          max-w-4xl
          ml-auto
        ">
          {wordsSecondary.map((word, i) => (
            <Phrase
              key={i}
              progress={scrollYProgress}
              range={getRange(i, wordsSecondary.length, 0.45, 1)}
            >
              {word}
            </Phrase>
          ))}
        </p>
      </div>
    </section>
  );
};

export default Description;
