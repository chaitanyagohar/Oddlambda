"use client";

import React from "react";
import { motion } from "framer-motion";

const Benefits = () => {
  const benefits = [
    {
      title: "Individual",
      desc: "Every design is created from scratch, tailored precisely to your brand.",
    },
    {
      title: "Details",
      desc: "Thoughtful animations, smooth transitions, precise typography.",
    },
    {
      title: "Fixed Price",
      desc: "You know from the start exactly what the project will cost. Zero surprises.",
    },
    {
      title: "Feedback",
      desc: "Revisions are an integral part of the process. We iterate until everything is just right.",
    },
    {
      title: "Communication",
      desc: "Simple, direct, and straightforward via Email, Slack, or WhatsApp.",
    },
    {
      title: "Simple",
      desc: "You can easily update your new website yourself after the final launch.",
    },
    {
      title: "Support",
      desc: "I am still here for you even after the launch for technical support.",
    },
  ];

  const fadeUpVariant = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      id="benefits"
      className="
        relative
        z-10
        bg-[#0a0a0a]
        text-[#EAE6CD]
        pt-24
        md:pt-32
        pb-24
        md:pb-32
        border-t
        border-[#1A1512]
      "
    >
      <div className="w-full px-4 md:px-8 lg:px-10">
        
        {/* ========================================================
            HEADER
        ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-20 md:mb-32">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
            variants={fadeUpVariant}
            className="
              lg:col-start-6
              lg:col-span-6
              xl:col-start-6
              xl:col-span-5
            "
          >
            <h2
              className="
                font-corp
                text-3xl
                md:text-4xl
                lg:text-5xl
                font-bold
                uppercase
                tracking-[-0.02em]
                leading-[1.1]
              "
            >
              That's exactly my goal in every single project.
            </h2>
          </motion.div>
        </div>

        {/* ========================================================
            BENEFITS GRID
        ======================================================== */}
        <div className="border-t border-[#EAE6CD]/20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-5%" }}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.6,
                      delay: index * 0.05,
                      ease: [0.16, 1, 0.3, 1],
                    },
                  },
                }}
                className="
                  border-b border-[#EAE6CD]/20
                  md:border-r md:border-[#EAE6CD]/20
                  p-8
                  md:p-10
                  flex
                  flex-col
                  gap-4
                "
              >
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-2 h-2 rounded-full bg-[#EAE6CD]" />
                  <h3 className="font-corp text-xl md:text-2xl font-bold uppercase tracking-tight">
                    {benefit.title}
                  </h3>
                </div>
                
                <p className="text-[#EAE6CD]/70 text-[14px] md:text-[16px] leading-[1.6]">
                  {benefit.desc}
                </p>
              </motion.div>
            ))}

            {/* Empty grid filler to keep the borders perfect if items aren't a multiple of columns */}
            <div className="hidden xl:block border-b border-[#EAE6CD]/20 p-8" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Benefits;