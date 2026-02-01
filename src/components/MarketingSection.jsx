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
/* Floating Orb                                */
/* -------------------------------------------------------------------------- */

const FloatingOrb = ({ color, size, x, y, delay }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{
      opacity: 0.4,
      scale: [1, 1.1, 1],
      y: [0, -20, 0],
    }}
    transition={{
      duration: 6,
      delay,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="absolute rounded-full blur-[80px]"
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
/* System Card                                 */
/* -------------------------------------------------------------------------- */

const SystemCard = ({ icon: Icon, title, desc, accent, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="relative p-6 rounded-2xl bg-[#1c1917]/60 border border-[#44403c]/30 backdrop-blur-xl overflow-hidden group hover:border-[#B45309]/50 transition-colors duration-500"
    >
      {/* Scan Line - Updated to new color */}
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
          className="p-3 rounded-xl border transition-colors duration-300"
          style={{
            background: `${accent}15`,
            borderColor: `${accent}30`,
            color: accent,
          }}
        >
          <Icon size={24} />
        </div>

        <div>
          <h3 className="text-lg font-bold text-[#f5f5f4] mb-1 group-hover:text-[#FCD34D] transition-colors">
            {title}
          </h3>
          <p className="text-[#a8a29e] text-sm leading-relaxed">{desc}</p>
        </div>
      </div>
    </motion.div>
  );
};

/* -------------------------------------------------------------------------- */
/* Main Section                                */
/* -------------------------------------------------------------------------- */

const MarketingSection = () => {
  return (
    <section className="relative z-10 py-48 px-6 bg-[#0c0a09] overflow-hidden border-t border-[#44403c]/20">
      
      {/* ------------------------------------------------------------------ */}
      {/* Background Video Texture */}
      {/* ------------------------------------------------------------------ */}

      <video
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover opacity-[0.06] sepia-[0.8] hue-rotate-[340deg] saturate-150"
        src="https://cdn.pixabay.com/video/2020/08/08/46841-448150023_large.mp4"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#0c0a09]/80" />

      {/* ------------------------------------------------------------------ */}
      {/* Floating Orbs - Adjusted to #B45309 Variations */}
      {/* ------------------------------------------------------------------ */}

      <FloatingOrb
        color="rgba(180, 83, 9, 0.5)" // #B45309 (Base)
        size={400}
        x="10%"
        y="20%"
        delay={0}
      />

      <FloatingOrb
        color="rgba(217, 119, 6, 0.4)" // Lighter Amber
        size={350}
        x="70%"
        y="60%"
        delay={1}
      />

      <FloatingOrb
        color="rgba(120, 53, 15, 0.3)" // Darker Amber/Brown
        size={300}
        x="40%"
        y="80%"
        delay={2}
      />

      {/* ------------------------------------------------------------------ */}
      {/* Grid HUD */}
      {/* ------------------------------------------------------------------ */}

      <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(to_right,#d6d3d1_1px,transparent_1px),linear-gradient(to_bottom,#d6d3d1_1px,transparent_1px)] bg-[size:50px_50px]" />

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
          <div className="flex items-center gap-3 text-[#B45309] font-mono text-xs tracking-widest uppercase mb-6">
            <Target size={16} />
            Growth Engine
          </div>

          <h2 className="text-5xl md:text-7xl font-black leading-[0.9] tracking-tight text-[#f5f5f4] mb-6">
            LIVE
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F59E0B] to-[#B45309]">
              ACQUISITION SYSTEM
            </span>
          </h2>

          <p className="text-[#a8a29e] text-lg leading-relaxed">
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
            className="relative rounded-3xl overflow-hidden border border-[#44403c]/40 bg-[#1c1917]/50 backdrop-blur-xl shadow-2xl"
          >
            {/* Fake Dashboard Video */}
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              className="w-full h-[420px] object-cover opacity-70 sepia-[0.6] hue-rotate-[340deg]"
              src="https://cdn.pixabay.com/video/2023/01/11/146007-788614305_large.mp4"
            />

            {/* HUD Overlay */}
            <div className="absolute inset-0 p-6 flex flex-col justify-between">
              <div className="flex justify-between text-xs font-mono text-[#d6d3d1]">
                <span>LIVE DASHBOARD</span>
                <span className="text-[#B45309]">● ACTIVE</span>
              </div>

              <div className="grid grid-cols-3 gap-4 text-center">
                {[
                  ["CTR", "6.4%"],
                  ["ROAS", "3.5x"],
                  ["CPL", "$2.1"],
                ].map(([k, v]) => (
                  <div
                    key={k}
                    className="p-3 rounded-lg bg-[#292524]/80 border border-[#57534e]/40"
                  >
                    <div className="text-xs text-[#a8a29e]">{k}</div>
                    <div className="text-lg font-bold text-[#F59E0B]">{v}</div>
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
              accent="#B45309" // Main Requested Color
              delay={0}
            />

            <SystemCard
              icon={MousePointerClick}
              title="Social Amplification"
              desc="High-conversion creative loops."
              accent="#D97706" // Slightly Lighter Amber
              delay={0.1}
            />

            <SystemCard
              icon={TrendingUp}
              title="Behavior Analytics"
              desc="Continuous funnel optimization."
              accent="#92400E" // Darker Amber
              delay={0.2}
            />

            <SystemCard
              icon={Zap}
              title="Automation Layer"
              desc="AI-powered bid & budget control."
              accent="#F59E0B" // Brightest Amber
              delay={0.3}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketingSection;