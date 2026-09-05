"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Plus, Terminal, ShieldCheck, Cpu } from "lucide-react";

export default function AboutPage() {
  const [activeProcess, setActiveProcess] = useState(0);

  const metrics = [
    { label: "Core Web Vitals", value: "99+", detail: "Optimized LCP, FID, and CLS scores" },
    { label: "Lead Conversion Lift", value: "3.2x", detail: "Average uplift over legacy platforms" },
    { label: "Page Load Target", value: "<0.8s", detail: "Edge-cached static and SSR delivery" },
    { label: "Production Deployments", value: "40+", detail: "Bespoke digital engines shipped" },
  ];

  const processes = [
    {
      num: "01",
      title: "Architecture & Blueprint",
      tagline: "Structure precedes style.",
      desc: "We deconstruct your revenue funnel, audience psychology, and technical bottlenecks before writing code. We define component contracts, layout constraints, and routing architecture upfront.",
      specs: ["Information Architecture", "Conversion Funnel Mapping", "Technical Scoping"],
    },
    {
      num: "02",
      title: "Tactile Motion & Interface",
      tagline: "Brutal precision over generic fluff.",
      desc: "Interfaces designed with intention. We use physics-backed motion curves, fluid typography clamp models, and tactile interactions that guide attention without dragging performance down.",
      specs: ["High-Fidelity Prototyping", "Dynamic Typography Scaling", "Custom Motion Engines"],
    },
    {
      num: "03",
      title: "Full-Stack Engineering",
      tagline: "Clean, maintainable, high-throughput code.",
      desc: "Built with modern React standards, Tailwind styling tokens, and Framer Motion primitives. Everything is structured for fast edge compilation, SEO compliance, and scale.",
      specs: ["React / Vite / Next Architecture", "Clean Component Hierarchy", "Zero-Bloat Asset Delivery"],
    },
    {
      num: "04",
      title: "Analytics & Production Hardening",
      tagline: "If it cannot be measured, it cannot grow.",
      desc: "We inject clean data layers, Meta Pixel triggers, and Google Tag Manager events to track visitor behavior accurately, ensuring every button press and form lead is accounted for.",
      specs: ["DataLayer Instrumentation", "Conversion Event Audits", "Core Vital Optimizations"],
    },
  ];

  const principles = [
    {
      title: "Clarity Over Cleverness",
      detail: "We discard decorative clutter that adds weight without utility. Every pixel serves a commercial purpose.",
    },
    {
      title: "Engineered Speed",
      detail: "Speed is an aesthetic. Users register delays in milliseconds; we build platforms that feel instantaneous.",
    },
    {
      title: "Enduring Foundations",
      detail: "We build systems on battle-tested web standards rather than fragile, fleeting design trends.",
    },
  ];

  return (
    <main className="w-full bg-[#EAE6CD] text-[#0a0a0a] min-h-screen pt-28 md:pt-36 pb-24">
      
      {/* ========================================================
          1. EDITORIAL HEADER & METADATA BAR
      ======================================================== */}
      <section className="px-4 md:px-8 lg:px-12 mb-16 md:mb-24">
        <div className="w-full border-t border-[#0a0a0a]/20 pt-4 flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10 md:mb-16">
          <div className="flex items-center gap-2 font-mono text-[11px] md:text-[12px] uppercase tracking-widest text-[#0a0a0a]/60">
            <span className="w-2 h-2 rounded-full bg-[#0a0a0a]" />
            About Oddlambda
          </div>
          <div className="flex items-center gap-6 font-mono text-[11px] md:text-[12px] uppercase tracking-widest text-[#0a0a0a]/60">
            <span>Engineering Lab</span>
            <span>/</span>
            <span>Independent Practice</span>
          </div>
        </div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="font-corp text-[13vw] sm:text-[11vw] md:text-[9vw] lg:text-[7.5vw] font-bold uppercase tracking-[-0.04em] leading-[0.84] m-0"
        >
          Engineering <br />
          <span className="text-transparent [-webkit-text-stroke:1px_#0a0a0a] md:[-webkit-text-stroke:2px_#0a0a0a]">
            Unfair Advantage.
          </span>
        </motion.h1>
      </section>

      {/* ========================================================
          2. MANIFESTO GRID (Typographic Weight)
      ======================================================== */}
      <section className="px-4 md:px-8 lg:px-12 mb-20 md:mb-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 border-t border-[#0a0a0a]/20 pt-8">
          
          <div className="md:col-span-4">
            <span className="font-mono text-[11px] md:text-[12px] uppercase tracking-widest text-[#0a0a0a]/50">
              The Position
            </span>
          </div>

          <div className="md:col-span-8 flex flex-col gap-8">
            <h2 className="font-corp text-[26px] sm:text-[34px] md:text-[42px] font-bold uppercase tracking-[-0.02em] leading-[1.05] m-0">
              Most agency sites look identical because they prioritize templates over intention. We build custom digital instruments that command respect.
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 border-t border-[#0a0a0a]/10">
              <p className="text-[15px] md:text-[17px] leading-[1.6] text-[#0a0a0a]/80 font-medium m-0">
                Oddlambda was structured to eliminate the gap between clean interface design and full-stack technical capability. We operate with high standards: zero useless dependencies, deliberate micro-interactions, and platforms optimized for real conversions.
              </p>
              <p className="text-[15px] md:text-[17px] leading-[1.6] text-[#0a0a0a]/80 font-medium m-0">
                Whether deploying custom web applications, complex funnel pipelines, or landing experiences for competitive sectors, our focus is singular—turning passive visitors into high-intent inbound inquiries.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================
          3. METRICS BOARD (Pure Brutalist Numbers)
      ======================================================== */}
      <section className="px-4 md:px-8 lg:px-12 mb-20 md:mb-32">
        <div className="w-full border-t border-b border-[#0a0a0a]/20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[#0a0a0a]/20">
          {metrics.map((item, idx) => (
            <div key={idx} className="p-6 md:p-8 flex flex-col justify-between min-h-[190px]">
              <span className="font-mono text-[10px] md:text-[11px] uppercase tracking-widest text-[#0a0a0a]/50">
                ({String(idx + 1).padStart(2, "0")}) {item.label}
              </span>
              <div>
                <div className="font-corp text-[48px] md:text-[56px] font-bold tracking-tight leading-none text-[#0a0a0a] my-3">
                  {item.value}
                </div>
                <p className="font-mono text-[11px] text-[#0a0a0a]/70 uppercase tracking-wider m-0">
                  {item.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================
          4. INTERACTIVE PROCESS FRAME (Accordion / Drawer)
      ======================================================== */}
      <section className="px-4 md:px-8 lg:px-12 mb-20 md:mb-32">
        <div className="flex justify-between items-center border-t border-[#0a0a0a]/20 pt-4 mb-8">
          <span className="font-mono text-[11px] uppercase tracking-widest text-[#0a0a0a]/50">
            Execution Protocol
          </span>
          <span className="font-mono text-[11px] uppercase tracking-widest text-[#0a0a0a]/50">
            Phase (01-04)
          </span>
        </div>

        <div className="border-t border-[#0a0a0a]/20">
          {processes.map((proc, index) => {
            const isOpen = activeProcess === index;
            return (
              <div 
                key={proc.num}
                className="border-b border-[#0a0a0a]/20 transition-colors duration-300 hover:bg-[#0a0a0a]/5"
              >
                <button
                  onClick={() => setActiveProcess(isOpen ? null : index)}
                  className="w-full py-6 md:py-8 flex items-center justify-between text-left focus:outline-none cursor-pointer"
                >
                  <div className="flex items-baseline gap-6 md:gap-12">
                    <span className="font-mono text-[12px] md:text-[14px] text-[#0a0a0a]/40">
                      ({proc.num})
                    </span>
                    <h3 className="font-corp text-[24px] sm:text-[32px] md:text-[40px] font-bold uppercase tracking-tight m-0 text-[#0a0a0a]">
                      {proc.title}
                    </h3>
                  </div>

                  <motion.div
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="p-2"
                  >
                    <Plus size={24} strokeWidth={1.5} className="text-[#0a0a0a]" />
                  </motion.div>
                </button>

                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden pb-8 md:pb-10"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pl-10 md:pl-16">
                      <div className="md:col-span-7">
                        <p className="font-mono text-[12px] uppercase tracking-widest text-[#0a0a0a]/50 mb-3">
                          {proc.tagline}
                        </p>
                        <p className="text-[15px] md:text-[17px] leading-[1.6] text-[#0a0a0a]/80 font-medium m-0">
                          {proc.desc}
                        </p>
                      </div>

                      <div className="md:col-span-5 flex flex-col justify-end">
                        <div className="border-l border-[#0a0a0a]/20 pl-4 space-y-1.5">
                          <span className="font-mono text-[10px] uppercase tracking-widest text-[#0a0a0a]/40 block mb-2">
                            Core Deliverables
                          </span>
                          {proc.specs.map((spec, i) => (
                            <div key={i} className="font-mono text-[11px] md:text-[12px] text-[#0a0a0a]/70 uppercase">
                              → {spec}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* ========================================================
          5. CORE PRINCIPLES (Modular Columns)
      ======================================================== */}
      <section className="px-4 md:px-8 lg:px-12 mb-20 md:mb-28">
        <div className="border-t border-[#0a0a0a]/20 pt-4 mb-8">
          <span className="font-mono text-[11px] uppercase tracking-widest text-[#0a0a0a]/50">
            Operational Code
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {principles.map((pr, idx) => (
            <div 
              key={idx} 
              className="border border-[#0a0a0a]/20 p-6 md:p-8 flex flex-col justify-between min-h-[220px] bg-[#0a0a0a]/[0.02] hover:bg-[#0a0a0a] hover:text-[#EAE6CD] transition-all duration-300 group"
            >
              <span className="font-mono text-[11px] text-[#0a0a0a]/40 group-hover:text-[#EAE6CD]/40">
                PRIN // 0{idx + 1}
              </span>
              <div className="mt-8">
                <h4 className="font-corp text-[22px] md:text-[26px] font-bold uppercase tracking-tight m-0 mb-3">
                  {pr.title}
                </h4>
                <p className="text-[13px] md:text-[14px] leading-[1.5] text-[#0a0a0a]/70 group-hover:text-[#EAE6CD]/80 font-medium m-0">
                  {pr.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================
          6. BOTTOM CALLOUT / INQUIRY LINK
      ======================================================== */}
      <section className="px-4 md:px-8 lg:px-12">
        <div className="w-full border-t border-[#0a0a0a]/20 pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <p className="font-corp text-[20px] md:text-[24px] font-bold uppercase tracking-tight m-0">
              Ready to build something lasting?
            </p>
            <span className="font-mono text-[11px] uppercase tracking-widest text-[#0a0a0a]/50">
              Available for select web projects & pipeline architecture
            </span>
          </div>

          <a 
            href="/#contact"
            className="inline-flex items-center gap-3 px-6 py-3 bg-[#0a0a0a] text-[#EAE6CD] rounded-full hover:scale-105 transition-transform duration-300"
          >
            <span className="font-bold text-[12px] md:text-[13px] uppercase tracking-widest mt-0.5">
              Initiate Project
            </span>
            <ArrowUpRight size={16} strokeWidth={2} />
          </a>
        </div>
      </section>

    </main>
  );
}