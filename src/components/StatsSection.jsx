import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function StatsSection() {
  const stats = [
    {
      value: "03+",
      label: "Years Experience",
      subtext: "Delivering bespoke web architectures & digital automation.",
    },
    {
      value: "25+",
      label: "Projects Completed",
      subtext: "High-converting landing pages, e-commerce & SaaS platforms.",
    },
    {
      value: "10+",
      label: "Active Clients",
      subtext: "Long-term technical partnerships & digital ecosystem management.",
    },
    {
      value: "180%",
      label: "Good Lead Growth",
      subtext: "Average increase in qualified client inquiries post-launch.",
    },
    {
      value: "3.5x",
      label: "Google Visibility",
      subtext: "Boost in organic search presence and keyword indexation.",
    },
  ];

  return (
    <section className="w-full bg-[#0a0a0a] text-[#EAE6CD] py-24 px-6 md:px-10 lg:px-14 border-t border-[#EAE6CD]/15 selection:bg-[#EAE6CD] selection:text-[#0a0a0a]">
      <div className="max-w-[1600px] mx-auto">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="border border-[#EAE6CD]/20 px-2 py-1 font-mono text-[10px] font-bold uppercase tracking-widest text-[#EAE6CD]/55">
                Metrics
              </span>
              <span className="font-corp text-[14px] font-bold uppercase tracking-wider text-[#EAE6CD]/70">
                Track Record
              </span>
            </div>
            <h2 className="font-corp text-5xl sm:text-7xl lg:text-[6vw] font-bold uppercase tracking-tight leading-[0.85] m-0">
              Impact by <br /> the numbers.
            </h2>
          </div>
          
          <p className="max-w-[380px] font-mono text-[11px] md:text-[12px] uppercase leading-[1.5] tracking-[0.08em] text-[#EAE6CD]/50">
            Measurable growth through performance-first engineering, conversion UI, and search authority.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="border-t border-[#EAE6CD]/15">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 md:grid-cols-12 items-center py-8 md:py-12 border-b border-[#EAE6CD]/15 hover:bg-[#EAE6CD]/[0.02] transition-colors group"
            >
              {/* Number Value */}
              <div className="md:col-span-5 flex items-baseline justify-between md:justify-start gap-4 mb-4 md:mb-0">
                <span className="font-corp text-[15vw] md:text-[6vw] lg:text-[5.5vw] font-bold uppercase leading-none tracking-[-0.03em] text-[#EAE6CD]">
                  {stat.value}
                </span>
                <span className="font-mono text-[11px] text-[#EAE6CD]/30 md:hidden">
                  ({String(idx + 1).padStart(2, "0")})
                </span>
              </div>

              {/* Label & Description */}
              <div className="md:col-span-6 flex flex-col justify-center">
                <h3 className="font-corp text-2xl md:text-3xl lg:text-4xl font-bold uppercase tracking-tight mb-2 text-[#EAE6CD]">
                  {stat.label}
                </h3>
                <p className="text-[14px] md:text-[16px] font-medium leading-relaxed text-[#EAE6CD]/60 max-w-md">
                  {stat.subtext}
                </p>
              </div>

              {/* Icon / Index Marker */}
              <div className="hidden md:col-span-1 md:flex justify-end items-center">
                <ArrowUpRight 
                  size={24} 
                  strokeWidth={1.5} 
                  className="text-[#EAE6CD]/30 transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#EAE6CD]" 
                />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}