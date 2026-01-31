"use client";

import React from "react";
import { motion } from "framer-motion";

const cards = [
  {
    id: "01",
    title: "Creative Architects",
    desc: "We design digital experiences that feel intuitive, premium, and unmistakably yours.",
    bg: "bg-[#cef0f2]",
    text: "text-black",
  },
  {
    id: "02",
    title: "Commerce Strategists",
    desc: "From product setup to checkout flow, we engineer stores that convert at scale.",
    bg: "bg-[#ffb36b]",
    text: "text-black",
  },
  {
    id: "03",
    title: "Interface Engineers",
    desc: "We build fast, resilient, and future-ready front-end systems for modern brands.",
    bg: "bg-[#ff6b89]",
    text: "text-black",
  },
];

const TrustSection = () => {
  return (
    <section className="relative py-44 px-6 bg-[#020202] overflow-hidden font-[Inter]">

      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover opacity-[0.20]"
        src="https://www.pexels.com/download/video/7010499/"
      />

      {/* Dark Overlay */}
      {/* <div className="absolute inset-0 bg-black/70" /> */}

      {/* Floating Blobs */}
      <div className="absolute inset-0 pointer-events-none">

        <div className="absolute top-24 left-16 w-80 h-80 bg-violet-500/25 blur-[140px] rounded-full" />

        <div className="absolute bottom-24 right-16 w-96 h-96 bg-cyan-400/25 blur-[160px] rounded-full" />

        <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-lime-400/15 blur-[120px] rounded-full" />

      </div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-28 max-w-3xl"
        >
          <h2
  className="text-5xl md:text-7xl tracking-tight text-white leading-[1.05] mb-6"
  style={{ fontFamily: "'Erica One', cursive" }}
>
            Your digital product
            <br />
            <span
  className="block text-white/70 mt-2"
  style={{ fontFamily: "'Erica One', cursive" }}
>
              is in expert hands
            </span>
          </h2>

          <p className="text-neutral-400 text-lg leading-relaxed max-w-xl">
            We partner with ambitious brands to design, build, and scale
            high-performance digital platforms.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {cards.map((card, i) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 48 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: i * 0.12,
                ease: "easeOut",
              }}
              className={`${card.bg} ${card.text} rounded-[28px] p-9 md:p-11 relative overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.25)]`}
            >
              {/* Gradient Shine */}
              <div className="absolute inset-0 opacity-0 hover:opacity-100 transition duration-500 bg-gradient-to-br from-white/20 to-transparent" />

              {/* Index */}
              <div className="w-9 h-9 rounded-full bg-black/15 flex items-center justify-center text-sm font-semibold mb-7 backdrop-blur-sm">
                {card.id}
              </div>

              {/* Title */}
              <h3 className="text-[28px] font-bold tracking-tight mb-4 leading-tight">
                {card.title}
              </h3>

              {/* Description */}
              <p className="text-black/70 leading-relaxed text-[15px]">
                {card.desc}
              </p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default TrustSection;
