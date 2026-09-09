
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

export default function ThankYouPage() {
  const [countdown, setCountdown] = useState(10);
  const [isExiting, setIsExiting] = useState(false);
  const navigate = useNavigate();

  // Countdown
  useEffect(() => {
    if (countdown <= 0) {
      setIsExiting(true);

      const redirectTimer = setTimeout(() => {
        navigate("/");
      }, 700);

      return () => clearTimeout(redirectTimer);
    }

    const timer = setTimeout(() => {
      setCountdown((prev) => Math.max(prev - 1, 0));
    }, 1000);

    return () => clearTimeout(timer);
  }, [countdown, navigate]);

  const progress = ((10 - countdown) / 10) * 100;

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: isExiting ? 0 : 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="relative min-h-screen overflow-hidden bg-[#0a0a0a] text-[#EAE6CD] flex items-center justify-center px-6 selection:bg-[#EAE6CD] selection:text-[#0a0a0a]"
    >
      {/* -------------------------------------------------
          BACKGROUND
      -------------------------------------------------- */}

     {/* Subtle grid */}
<div
  className="pointer-events-none absolute inset-0 opacity-[0.035]"
  style={{
    backgroundImage:
      "linear-gradient(to right, #EAE6CD 1px, transparent 1px), linear-gradient(to bottom, #EAE6CD 1px, transparent 1px)",
    backgroundSize: "80px 80px",
  }}
/>

      {/* Radial glow */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1.8,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#EAE6CD]/[0.025] blur-[100px]"
      />

      {/* Corner details */}
      <div className="pointer-events-none absolute left-6 top-6 font-mono text-[9px] uppercase tracking-[0.25em] text-[#EAE6CD]/20 md:left-10 md:top-10">
        ODDλ
      </div>

      <div className="pointer-events-none absolute right-6 top-6 font-mono text-[9px] uppercase tracking-[0.25em] text-[#EAE6CD]/20 md:right-10 md:top-10">
        01 / 01
      </div>

      {/* -------------------------------------------------
          MAIN CONTENT
      -------------------------------------------------- */}

      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.12,
              delayChildren: 0.15,
            },
          },
        }}
        className="relative z-10 flex w-full max-w-5xl flex-col items-center text-center"
      >
        {/* Status badge */}
        <motion.div
          variants={{
            hidden: {
              opacity: 0,
              y: 15,
              filter: "blur(6px)",
            },
            visible: {
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
              transition: {
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
              },
            },
          }}
          className="mb-7 flex items-center gap-3"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#EAE6CD]/50" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#EAE6CD]" />
          </span>

          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#EAE6CD]/50 md:text-[11px]">
            Submission Successful
          </span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          variants={{
            hidden: {
              opacity: 0,
              y: 40,
              scale: 0.97,
              filter: "blur(10px)",
            },
            visible: {
              opacity: 1,
              y: 0,
              scale: 1,
              filter: "blur(0px)",
              transition: {
                duration: 1,
                ease: [0.16, 1, 0.3, 1],
              },
            },
          }}
          className="font-corp text-[17vw] font-bold uppercase leading-[0.78] tracking-[-0.055em] md:text-[11vw] lg:text-[9.5vw]"
        >
          THANK YOU
        </motion.h1>

        {/* Divider */}
        <motion.div
          variants={{
            hidden: {
              width: 0,
              opacity: 0,
            },
            visible: {
              width: "100%",
              opacity: 1,
              transition: {
                duration: 0.9,
                delay: 0.15,
                ease: [0.16, 1, 0.3, 1],
              },
            },
          }}
          className="mt-8 h-px max-w-2xl bg-[#EAE6CD]/10"
        />

        {/* Description */}
        <motion.p
          variants={{
            hidden: {
              opacity: 0,
              y: 20,
            },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
              },
            },
          }}
          className="mt-8 max-w-[520px] text-[15px] font-medium leading-[1.7] text-[#EAE6CD]/60 md:text-[18px]"
        >
          Your inquiry has been received. We'll review your details and get
          back to you shortly.
        </motion.p>

        {/* -------------------------------------------------
            COUNTDOWN
        -------------------------------------------------- */}

        <motion.div
          variants={{
            hidden: {
              opacity: 0,
              y: 20,
            },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
              },
            },
          }}
          className="mt-12 flex w-full max-w-[360px] flex-col items-center"
        >
          <div className="mb-4 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-[#EAE6CD]/40 md:text-[11px]">
            <span>Returning to home</span>

            <span className="text-[#EAE6CD]/20">/</span>

            <div className="relative h-[18px] min-w-[24px] overflow-hidden text-left">
              <AnimatePresence mode="popLayout">
                <motion.span
                  key={countdown}
                  initial={{
                    y: 14,
                    opacity: 0,
                    filter: "blur(4px)",
                  }}
                  animate={{
                    y: 0,
                    opacity: 1,
                    filter: "blur(0px)",
                  }}
                  exit={{
                    y: -14,
                    opacity: 0,
                    filter: "blur(4px)",
                  }}
                  transition={{
                    duration: 0.3,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="absolute left-0 font-bold text-[#EAE6CD]"
                >
                  {countdown}s
                </motion.span>
              </AnimatePresence>
            </div>
          </div>

          {/* Progress bar */}
          <div className="h-[2px] w-full overflow-hidden bg-[#EAE6CD]/10">
            <motion.div
              className="h-full bg-[#EAE6CD]"
              initial={{ width: "0%" }}
              animate={{ width: `${progress}%` }}
              transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
            />
          </div>
        </motion.div>

        {/* -------------------------------------------------
            BUTTON
        -------------------------------------------------- */}

        <motion.div
          variants={{
            hidden: {
              opacity: 0,
              y: 20,
            },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
              },
            },
          }}
          className="mt-8"
        >
          <Link
            to="/"
            className="group relative inline-flex h-14 items-center overflow-hidden rounded-[2px] bg-[#EAE6CD] px-8 text-[11px] font-bold uppercase tracking-[0.16em] text-[#0a0a0a] transition-transform duration-300 hover:-translate-y-1 md:h-15 md:px-10 md:text-[12px]"
          >
            {/* Hover fill */}
            <span className="absolute inset-0 origin-bottom scale-y-0 bg-[#0a0a0a] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-y-100" />

            <span className="relative z-10 flex items-center gap-3 transition-colors duration-300 group-hover:text-[#EAE6CD]">
              Back to Home

              <ArrowRight
                size={17}
                strokeWidth={2}
                className="transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1"
              />
            </span>
          </Link>
        </motion.div>
      </motion.div>

      {/* Bottom metadata */}
      <div className="pointer-events-none absolute bottom-6 left-6 right-6 flex items-end justify-between font-mono text-[8px] uppercase tracking-[0.2em] text-[#EAE6CD]/20 md:bottom-10 md:left-10 md:right-10">
        <span>Thank you for reaching out</span>
        <span>Oddlambda © {new Date().getFullYear()}</span>
      </div>
    </motion.main>
  );
}

