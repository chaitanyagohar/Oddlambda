"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Globe,
  Users,
  MousePointerClick,
  DollarSign,
} from "lucide-react";

/* ------------------------------------------------ */
/* Pipeline Stage                                   */
/* ------------------------------------------------ */

const Stage = ({ icon: Icon, title, desc, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="relative group"
    >
      <div className="p-8 rounded-2xl border border-[#27272a] bg-[#09090b]/70 backdrop-blur-xl hover:border-[#f59e0b]/50 transition-all">

        <div className="flex items-center gap-4 mb-4">
          <div className="p-3 rounded-lg bg-[#f59e0b]/10 text-[#f59e0b]">
            <Icon size={26} />
          </div>

          <h3 className="text-lg font-semibold text-white">
            {title}
          </h3>
        </div>

        <p className="text-[#a1a1aa] text-sm leading-relaxed">
          {desc}
        </p>

        {/* Glow Hover */}
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition pointer-events-none bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.15),transparent_60%)]" />

      </div>
    </motion.div>
  );
};

/* ------------------------------------------------ */
/* Main Section                                     */
/* ------------------------------------------------ */

const GrowthPipeline = () => {
  return (
    <section className="relative py-44 px-6 bg-[#050505] overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 left-1/3 w-[600px] h-[600px] bg-[#f59e0b]/10 blur-[160px]" />

      {/* Grid */}
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-24 max-w-3xl mx-auto"
        >
          <h2 className="text-5xl md:text-7xl font-black text-white mb-6 leading-[0.9]">
            THE
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#f59e0b] to-[#fbbf24]">
              GROWTH PIPELINE
            </span>
          </h2>

          <p className="text-[#a1a1aa] text-lg">
            Every high-performing digital brand runs on a predictable
            system that turns attention into customers.
          </p>
        </motion.div>

        {/* Pipeline */}

        <div className="grid lg:grid-cols-4 gap-10 relative">

          <Stage
            icon={Globe}
            title="Traffic"
            desc="SEO, ads and social bring qualified visitors into the ecosystem."
            delay={0}
          />

          <Stage
            icon={Users}
            title="Engagement"
            desc="High-performance websites convert visitors into leads."
            delay={0.1}
          />

          <Stage
            icon={MousePointerClick}
            title="Conversion"
            desc="Optimized funnels transform interest into real buyers."
            delay={0.2}
          />

          <Stage
            icon={DollarSign}
            title="Revenue"
            desc="Automation and retargeting maximize lifetime value."
            delay={0.3}
          />

        </div>

      </div>
    </section>
  );
};

export default GrowthPipeline;
