"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowDownLeft } from "lucide-react";

const Services = () => {
  const services = [
    {
      id: "01.",
      title: "Web Development",
      desc: "High-performance websites and landing pages built around your brand, your audience, and your business goals. From premium marketing websites to conversion-focused digital experiences, every build is designed to look exceptional and perform even better.",
      deliverables: [
        "Custom Website Development",
        "High-Converting Landing Pages",
        "Performance & Responsive Design",
      ],
    },
    {
      id: "02.",
      title: "SaaS & Web Apps",
      desc: "I build scalable web applications and SaaS platforms that turn complex business requirements into simple, powerful digital products. From customer-facing interfaces to complete admin-controlled systems, everything is built around the way your business operates.",
      deliverables: [
        "Web Applications",
        "SaaS Platforms",
        "Custom Admin Systems",
      ],
    },
    {
      id: "03.",
      title: "E-Commerce & SEO",
      desc: "Premium e-commerce experiences designed to turn browsing into buying. I create fast, mobile-first storefronts with intuitive shopping journeys, powerful integrations, and the technical foundations needed to help your business grow.",
      deliverables: [
        "Custom E-Commerce Stores",
        "Shopify & Headless Commerce",
        "Payments & Store Integrations",
        "Technical & On-Page SEO",
        "Off-Page SEO & Performance",
      ],
    },
    {
      id: "04.",
      title: "AI & Automation",
      desc: "Practical AI and automation solutions designed to eliminate repetitive work, streamline operations, and make your business more efficient. I integrate intelligent systems into existing workflows or build completely custom automation from the ground up.",
      deliverables: [
        "AI Integrations",
        "Business Automation",
        "Custom AI Workflows",
      ],
    },
  ];

  // ============================================================
  // ANIMATION VARIANTS
  // ============================================================

  const maskVariant = {
    hidden: {
      y: "110%",
    },
    visible: {
      y: "0%",
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const fadeUpVariant = {
    hidden: {
      y: 30,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  // ============================================================
  // STICKY STACK SETTINGS
  // ============================================================

  const HEADER_HEIGHT = 110;

  // 40% of the previous header remains visible.
  // 110px × 40% = 44px visible.
  const VISIBLE_HEADER = 44;

  // Each new card moves:
  // 110px - 44px = 66px
  const STACK_STEP = HEADER_HEIGHT - VISIBLE_HEADER;

  return (
    <section
      id="services"
      className="
        relative
        z-10
        bg-[#0a0a0a]
        text-[#EAE6CD]
        border-t
        border-[#EAE6CD]/10
      "
    >
      {/* ========================================================
          INTRO / SECTION HEADER
      ======================================================== */}

      <div
        className="
          relative
          z-10
          w-full
          px-4
          md:px-8
          lg:px-10
          pt-24
          md:pt-32
          pb-24
          md:pb-32
        "
      >
        {/* Heading */}

        <div className="mb-12 md:mb-20">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              margin: "-10%",
            }}
            transition={{
              staggerChildren: 0.1,
            }}
            className="
              font-corp
              text-[12vw]
              sm:text-[10vw]
              lg:text-[8.5vw]
              font-bold
              uppercase
              tracking-[-0.04em]
              leading-[0.85]
              m-0
              p-0
              text-[#EAE6CD]
            "
          >
            <span className="block overflow-hidden pb-2 pt-2">
              <motion.span
                variants={maskVariant}
                className="block"
              >
                How I
              </motion.span>
            </span>

            <span className="block overflow-hidden pb-2">
              <motion.span
                variants={maskVariant}
                className="block"
              >
                Can Help You
              </motion.span>
            </span>
          </motion.h2>
        </div>

        {/* Intro */}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              margin: "-10%",
            }}
            variants={fadeUpVariant}
            className="
              lg:col-start-6
              lg:col-span-6
              xl:col-start-6
              xl:col-span-5
              flex
              gap-4
              md:gap-6
              items-start
            "
          >
            {/* Label */}

            <div
              className="
                border
                border-[#EAE6CD]/20
                px-2
                py-1
                text-[10px]
                uppercase
                font-bold
                tracking-widest
                text-[#EAE6CD]/70
                whitespace-nowrap
                mt-1
                bg-[#EAE6CD]/5
              "
            >
              Capabilities
            </div>

            {/* Description */}

            <div className="flex flex-col gap-6">
              <p
                className="
                  text-[#EAE6CD]/80
                  text-[16px]
                  md:text-[18px]
                  font-medium
                  leading-[1.45]
                "
              >
                From a high-converting website to a complete digital
                platform, I build technology around what your business
                actually needs.
              </p>

              <p
                className="
                  text-[#EAE6CD]/80
                  text-[16px]
                  md:text-[18px]
                  font-medium
                  leading-[1.45]
                "
              >
                Design, development, automation and growth—everything
                works together to turn your digital presence into a
                business asset.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ========================================================
          STICKY SERVICE STACK
      ======================================================== */}

      <div
        className="
          relative
          w-full
          border-t
          border-[#EAE6CD]/20
        "
      >
        {services.map((service, index) => {
          /*
           * ======================================================
           * PROGRESSIVE STICKY OFFSET
           * ======================================================
           */

          const topOffset =
            index === 0
              ? 80
              : 80 + index * STACK_STEP;

          return (
            <div
              key={service.id}
              className="
                sticky
                w-full
                bg-[#0a0a0a]
                border-t
                border-[#EAE6CD]/10
                shadow-[0_-20px_40px_rgba(0,0,0,0.8)]
              "
              style={{
                top: `${topOffset}px`,
                zIndex: 20 + index,
              }}
            >
              {/* =================================================
                  CARD
              ================================================= */}

              <div
                className="
                  min-h-screen
                  w-full
                  px-4
                  md:px-8
                  lg:px-10
                  flex
                  flex-col
                "
              >
                {/* =================================================
                    CARD HEADER
                ================================================= */}

                <div
                  className="
                    grid
                    grid-cols-12
                    items-center
                    h-[110px]
                    w-full
                    shrink-0
                  "
                >
                  {/* NUMBER */}

                  <div
                    className="
                      col-span-3
                      md:col-span-4
                      lg:col-span-5
                      flex
                      items-center
                      h-full
                    "
                  >
                    <span
                      className="
                        font-corp
                        text-2xl
                        md:text-4xl
                        lg:text-5xl
                        font-bold
                        text-[#EAE6CD]/80
                        hover:text-white
                        transition-colors
                      "
                    >
                      {service.id}
                    </span>
                  </div>

                  {/* TITLE */}

                  <div
                    className="
                      col-span-8
                      md:col-span-7
                      lg:col-span-6
                      flex
                      items-center
                      h-full
                    "
                  >
                    <h3
                      className="
                        font-corp
                        text-[7vw]
                        sm:text-[5.5vw]
                        md:text-[4.5vw]
                        lg:text-[4.2vw]
                        font-bold
                        uppercase
                        tracking-[-0.04em]
                        leading-[0.9]
                        text-[#EAE6CD]
                      "
                    >
                      {service.title}
                    </h3>
                  </div>

                  {/* ARROW */}

                  <div
                    className="
                      col-span-1
                      flex
                      justify-end
                      items-center
                      h-full
                      text-[#EAE6CD]/40
                    "
                  >
                    <ArrowDownLeft
                      size={22}
                      className="md:w-6 md:h-6"
                      strokeWidth={1.5}
                    />
                  </div>
                </div>

                {/* =================================================
                    CARD CONTENT
                ================================================= */}

                <div
                  className="
                    grid
                    grid-cols-12
                    pt-8
                    pb-32
                    flex-1
                  "
                >
                  {/* LEFT EMPTY GRID */}

                  <div
                    className="
                      col-span-3
                      md:col-span-4
                      lg:col-span-5
                    "
                  />

                  {/* RIGHT CONTENT */}

                  <div
                    className="
                      col-span-9
                      md:col-span-8
                      lg:col-span-6
                      pr-4
                      md:pr-0
                    "
                  >
                    {/* Description */}

                    <motion.p
                      initial={{
                        opacity: 0,
                        y: 20,
                      }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                      }}
                      viewport={{
                        once: true,
                        amount: 0.15,
                      }}
                      transition={{
                        duration: 0.6,
                        delay: 0.08,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className="
                        text-[#EAE6CD]/70
                        text-[14px]
                        md:text-[16px]
                        lg:text-[17px]
                        leading-[1.6]
                        max-w-[520px]
                      "
                    >
                      {service.desc}
                    </motion.p>

                    {/* Deliverables */}

                    <div
                      className="
                        mt-10
                        md:mt-12
                        max-w-[520px]
                        border-t
                        border-[#EAE6CD]/15
                      "
                    >
                      {service.deliverables.map((item, i) => (
                        <motion.div
                          key={item}
                          initial={{
                            opacity: 0,
                            x: 15,
                          }}
                          whileInView={{
                            opacity: 1,
                            x: 0,
                          }}
                          viewport={{
                            once: true,
                            amount: 0.15,
                          }}
                          transition={{
                            duration: 0.5,
                            delay: 0.12 + i * 0.06,
                            ease: [0.16, 1, 0.3, 1],
                          }}
                          className="
                            flex
                            items-center
                            gap-5
                            py-4
                            border-b
                            border-[#EAE6CD]/15
                          "
                        >
                          <span
                            className="
                              font-mono
                              text-[#888888]
                              text-[11px]
                              md:text-[12px]
                              w-6
                              shrink-0
                            "
                          >
                            0{i + 1}
                          </span>

                          <span
                            className="
                              font-bold
                              tracking-tight
                              text-[14px]
                              md:text-[16px]
                              text-white
                            "
                          >
                            {item}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {/* ========================================================
            INVISIBLE FINAL SCROLL BUFFER
        ======================================================== */}

        <div
          aria-hidden="true"
          className="
            invisible
            pointer-events-none
            w-full
          "
          style={{
            height: "100vh",
          }}
        />
      </div>
    </section>
  );
};

export default Services;