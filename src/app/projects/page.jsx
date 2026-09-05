"use client";

import React from "react";
import { motion } from "framer-motion";
import Projects from "@/components/Projects";

export default function ProjectsPage() {
  const logos = [
    "LORDS",
    "ELITAIRS",
    "ASHIYA",
    "CONCORDE ELEVE",
    "DROOTLE",
    "DARVYN DIGITAL",
  ];

  // Duplicate the complete set for a seamless marquee
  const marqueeLogos = [...logos, ...logos, ...logos];

  return (
    <main className="w-full overflow-hidden bg-[#EAE6CD] text-[#0a0a0a]">

      {/* =========================================================
          PROJECTS
      ========================================================= */}

      <Projects />

      {/* =========================================================
          SELECTED CLIENTS
      ========================================================= */}

      <section className="relative w-full overflow-hidden bg-[#EAE6CD]">

        {/* Top rule */}
        <div className="mx-4 md:mx-8 lg:mx-10">
          <div className="h-px w-full bg-[#0a0a0a]/20" />
        </div>

        <div className="py-16 md:py-24 lg:py-28">

          {/* Section heading */}

          <div
            className="
              mx-4
              mb-12
              flex
              flex-col
              gap-5
              md:mx-8
              md:mb-16
              md:flex-row
              md:items-start
              md:justify-between
              lg:mx-10
            "
          >
            <div className="flex items-start gap-3">
              <span
                className="
                  mt-1
                  border
                  border-[#0a0a0a]/30
                  px-2
                  py-1
                  font-mono
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.18em]
                  text-[#0a0a0a]/70
                  md:text-[11px]
                "
              >
                02
              </span>

              <span
                className="
                  font-corp
                  text-[15px]
                  font-bold
                  uppercase
                  tracking-[0.08em]
                  md:text-[17px]
                "
              >
                Selected Clients
              </span>
            </div>

            <p
              className="
                max-w-[420px]
                font-mono
                text-[12px]
                uppercase
                leading-[1.5]
                tracking-[0.08em]
                text-[#0a0a0a]/55
                md:text-[12px]
              "
            >
              Businesses we've helped move forward through digital
              experiences, websites, and growth systems.
            </p>
          </div>

          {/* =====================================================
              MARQUEE
          ===================================================== */}

          <div className="relative w-full">

            {/* Left fade */}

            <div
              className="
                pointer-events-none
                absolute
                left-0
                top-0
                z-10
                h-full
                w-16
                bg-gradient-to-r
                from-[#EAE6CD]
                to-transparent
                md:w-28
              "
            />

            {/* Right fade */}

            <div
              className="
                pointer-events-none
                absolute
                right-0
                top-0
                z-10
                h-full
                w-16
                bg-gradient-to-l
                from-[#EAE6CD]
                to-transparent
                md:w-28
              "
            />

            <motion.div
              className="flex w-max items-center"
              animate={{
                x: ["0%", "-33.3333%"],
              }}
              transition={{
                ease: "linear",
                duration: 28,
                repeat: Infinity,
              }}
            >
              {marqueeLogos.map((logo, index) => (
                <div
                  key={`${logo}-${index}`}
                  className="flex items-center"
                >
                  <span
                    className="
                      whitespace-nowrap
                      px-8
                      font-corp
                      text-[30px]
                      font-bold
                      uppercase
                      leading-none
                      tracking-[-0.025em]
                      text-[#0a0a0a]/75
                      sm:px-10
                      sm:text-[36px]
                      md:px-14
                      md:text-[44px]
                      lg:px-16
                      lg:text-[50px]
                    "
                  >
                    {logo}
                  </span>

                  <span
                    className="
                      h-2
                      w-2
                      rounded-full
                      bg-[#0a0a0a]/30
                      md:h-2.5
                      md:w-2.5
                    "
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Bottom rule */}

        <div className="mx-4 md:mx-8 lg:mx-10">
          <div className="h-px w-full bg-[#0a0a0a]/20" />
        </div>
      </section>

      {/* =========================================================
          MASSIVE CTA
      ========================================================= */}

      <section
        className="
          relative
          flex
          min-h-[80vh]
          w-full
          flex-col
          items-center
          justify-center
          overflow-hidden
          bg-[#0a0a0a]
          px-5
          py-28
          text-center
          text-[#EAE6CD]
          md:min-h-[85vh]
          md:px-8
          md:py-40
        "
      >

        {/* Decorative background typography */}

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            inset-0
            flex
            items-center
            justify-center
            overflow-hidden
            opacity-[0.035]
          "
        >
          <span
            className="
              whitespace-nowrap
              font-corp
              text-[35vw]
              font-bold
              uppercase
              leading-none
              tracking-[-0.07em]
            "
          >
            ODD
          </span>
        </div>

        {/* CTA content */}

        <div className="relative z-10 flex w-full flex-col items-center">

          {/* Let's talk */}

          <motion.div
            initial={{
              opacity: 0,
              y: 15,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              margin: "-15%",
            }}
            transition={{
              duration: 0.7,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="
              mb-7
              flex
              items-center
              gap-3
              md:mb-9
            "
          >
            <span
              className="
                h-px
                w-8
                bg-[#EAE6CD]/40
                md:w-12
              "
            />

            <p
              className="
                m-0
                font-mono
                text-[12px]
                font-bold
                uppercase
                tracking-[0.2em]
                text-[#EAE6CD]/60
                md:text-[13px]
              "
            >
              Let's talk
            </p>

            <span
              className="
                h-px
                w-8
                bg-[#EAE6CD]/40
                md:w-12
              "
            />
          </motion.div>

          {/* Main CTA */}

          <motion.h2
            initial={{
              opacity: 0,
              y: 50,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              margin: "-15%",
            }}
            transition={{
              duration: 0.9,
              delay: 0.05,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="
              m-0
              max-w-[1100px]
              font-corp
              text-[15vw]
              font-bold
              uppercase
              leading-[0.82]
              tracking-[-0.055em]
              sm:text-[13vw]
              md:text-[10.5vw]
              lg:text-[9vw]
            "
          >
            Ready for
            <br />
            your new
            <br />
            website?
          </motion.h2>

          {/* CTA Button */}

          <motion.div
            initial={{
              opacity: 0,
              y: 25,
              scale: 0.95,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            viewport={{
              once: true,
              margin: "-10%",
            }}
            transition={{
              duration: 0.7,
              delay: 0.2,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="mt-12 md:mt-16"
          >
            <a
              href="/#contact"
              className="
                group
                inline-flex
                items-center
                gap-3
                rounded-[8px]
                bg-[#EAE6CD]
                py-2
                pl-2
                pr-7
                text-[#0a0a0a]
                shadow-[0_10px_50px_rgba(234,230,205,0.08)]
                transition-transform
                duration-500
                ease-[cubic-bezier(0.16,1,0.3,1)]
                hover:scale-[1.04]
                active:scale-[0.98]
                md:gap-4
                md:pr-8
              "
            >
              {/* Founder image */}

              <span
                className="
                  flex
                  h-11
                  w-11
                  shrink-0
                  items-center
                  justify-center
                  overflow-hidden
                  rounded-[8px]
                  bg-[#0a0a0a]/10
                  md:h-12
                  md:w-12
                "
              >
                <img
                  src="/me.jpeg"
                  alt="Founder"
                  className="
                    h-full
                    w-full
                    object-cover
                    transition-transform
                    duration-500
                    group-hover:scale-110
                  "
                />
              </span>

              <span
                className="
                  font-corp
                  text-[12px]
                  font-bold
                  uppercase
                  tracking-[0.14em]
                  md:text-[14px]
                "
              >
                Book a Call
              </span>

              <span
                className="
                  text-[18px]
                  transition-transform
                  duration-500
                  group-hover:translate-x-1
                "
              >
                →
              </span>
            </a>
          </motion.div>

          {/* Bottom metadata */}

          <motion.div
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
              delay: 0.35,
            }}
            className="
              mt-20
              flex
              w-full
              max-w-[1100px]
              flex-col
              items-center
              justify-between
              gap-3
              border-t
              border-[#EAE6CD]/15
              pt-5
              font-mono
              text-[10px]
              uppercase
              tracking-[0.16em]
              text-[#EAE6CD]/35
              sm:flex-row
              md:mt-28
              md:text-[11px]
            "
          >
            <span>ODDLAMBDA®</span>

            <span>Digital Development & Growth</span>

            <span>2025 — Present</span>
          </motion.div>
        </div>
      </section>
    </main>
  );
}