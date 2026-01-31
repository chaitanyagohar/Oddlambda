"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Target,
  TrendingUp,
  MousePointerClick,
  Search,
  Zap,
} from "lucide-react";

/* -------------------------------------------------------------------------- */
/*                                Floating Orb                                 */
/* -------------------------------------------------------------------------- */

const FloatingOrb = ({ color, size, x, y, delay }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{
      opacity: 0.6,
      scale: [1, 1.1, 1],
      y: [0, -20, 0],
    }}
    transition={{
      duration: 6,
      delay,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="absolute rounded-full blur-3xl"
    style={{
      width: size,
      height: size,
      left: x,
      top: y,
      background: color,
    }}
  />
);

/* -------------------------------------------------------------------------- */
/*                              System Card                                    */
/* -------------------------------------------------------------------------- */

const SystemCard = ({ icon: Icon, title, desc, accent, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="relative p-6 rounded-2xl bg-black/60 border border-white/10 backdrop-blur-xl overflow-hidden"
    >
      {/* Scan Line */}
      <motion.div
        animate={{ x: ["-100%", "100%"] }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 left-0 w-full h-[1px]"
        style={{
          background: `linear-gradient(to right, transparent, ${accent}, transparent)`,
        }}
      />

      <div className="flex gap-4 relative z-10">
        <div
          className="p-3 rounded-xl border"
          style={{
            background: `${accent}20`,
            borderColor: `${accent}40`,
            color: accent,
          }}
        >
          <Icon size={24} />
        </div>

        <div>
          <h3 className="text-lg font-bold text-white mb-1">{title}</h3>
          <p className="text-neutral-400 text-sm leading-relaxed">{desc}</p>
        </div>
      </div>
    </motion.div>
  );
};

/* -------------------------------------------------------------------------- */
/*                              Main Section                                   */
/* -------------------------------------------------------------------------- */

const MarketingSection = () => {
  return (
    <section className="relative py-48 px-6 bg-[#020202] overflow-hidden border-t border-white/5">

      {/* ------------------------------------------------------------------ */}
      {/* Background Video Texture */}
      {/* ------------------------------------------------------------------ */}

      <video
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover opacity-[0.08]"
        src="https://cdn.pixabay.com/video/2020/08/08/46841-448150023_large.mp4"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* ------------------------------------------------------------------ */}
      {/* Floating Orbs */}
      {/* ------------------------------------------------------------------ */}

      <FloatingOrb
        color="rgba(70,206,246,0.6)"
        size={400}
        x="10%"
        y="20%"
        delay={0}
      />

      <FloatingOrb
        color="rgba(168,85,247,0.5)"
        size={350}
        x="70%"
        y="60%"
        delay={1}
      />

      <FloatingOrb
        color="rgba(34,197,94,0.4)"
        size={300}
        x="40%"
        y="80%"
        delay={2}
      />

      {/* ------------------------------------------------------------------ */}
      {/* Grid HUD */}
      {/* ------------------------------------------------------------------ */}

      <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(to_right,#fff1_1px,transparent_1px),linear-gradient(to_bottom,#fff1_1px,transparent_1px)] bg-[size:50px_50px]" />

      {/* ------------------------------------------------------------------ */}
      {/* Content */}
      {/* ------------------------------------------------------------------ */}

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mb-32"
        >
          <div className="flex items-center gap-3 text-[#46cef6] font-mono text-xs tracking-widest uppercase mb-6">
            <Target size={16} />
            Growth Engine
          </div>

          <h2 className="text-5xl md:text-7xl font-black leading-[0.9] tracking-tight text-white mb-6">
            LIVE
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#46cef6] to-purple-400">
              ACQUISITION SYSTEM
            </span>
          </h2>

          <p className="text-neutral-400 text-lg leading-relaxed">
            A continuously running digital engine that captures, converts,
            and compounds attention into revenue.
          </p>
        </motion.div>

        {/* ------------------------------------------------------------------ */}
        {/* System Layout */}
        {/* ------------------------------------------------------------------ */}

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Left: Live Feed */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl overflow-hidden border border-white/10 bg-black/40 backdrop-blur-xl"
          >
            {/* Fake Dashboard Video */}
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              className="w-full h-[420px] object-cover opacity-80"
              src="https://cdn.pixabay.com/video/2023/01/11/146007-788614305_large.mp4"
            />

            {/* HUD Overlay */}
            <div className="absolute inset-0 p-6 flex flex-col justify-between">

              <div className="flex justify-between text-xs font-mono text-neutral-400">
                <span>LIVE DASHBOARD</span>
                <span className="text-green-400">● ACTIVE</span>
              </div>

              <div className="grid grid-cols-3 gap-4 text-center">
                {[
                  ["CTR", "6.4%"],
                  ["ROAS", "3.5x"],
                  ["CPL", "$2.1"],
                ].map(([k, v]) => (
                  <div
                    key={k}
                    className="p-3 rounded-lg bg-black/60 border border-white/10"
                  >
                    <div className="text-xs text-neutral-500">{k}</div>
                    <div className="text-lg font-bold text-white">{v}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: System Modules */}
          <div className="space-y-6">

            <SystemCard
              icon={Search}
              title="Search Intelligence"
              desc="Intent-driven acquisition pipelines."
              accent="#46cef6"
              delay={0}
            />

            <SystemCard
              icon={MousePointerClick}
              title="Social Amplification"
              desc="High-conversion creative loops."
              accent="#a855f7"
              delay={0.1}
            />

            <SystemCard
              icon={TrendingUp}
              title="Behavior Analytics"
              desc="Continuous funnel optimization."
              accent="#22c55e"
              delay={0.2}
            />

            <SystemCard
              icon={Zap}
              title="Automation Layer"
              desc="AI-powered bid & budget control."
              accent="#facc15"
              delay={0.3}
            />

          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketingSection;
