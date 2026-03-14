"use client";

import { motion, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";
import GridScan from "./GridScan";

const services = [
  "Custom Websites",
  " Landing Pages & Funnels",
  "Web Applications",
  "E-Commerce Platforms",
  "Brand Identity Systems",
  "SEO & Growth Marketing",
];

const Hero = () => {
  const [sequence, setSequence] = useState(0);
  const [serviceIndex, setServiceIndex] = useState(0);
  const [time, setTime] = useState("");

  const springConfig = { damping: 25, stiffness: 120 };
  const mouseX = useSpring(0, springConfig);
  const mouseY = useSpring(0, springConfig);

  const xDesigned = useTransform(mouseX, [-0.5, 0.5], [40, -40]);
  const xTo = useTransform(mouseX, [-0.5, 0.5], [20, -20]);
  const xPerform = useTransform(mouseX, [-0.5, 0.5], [-30, 30]);

  useEffect(() => {
    const baseDelay = 2400;
    const timers = [
      setTimeout(() => setSequence(1), baseDelay + 200),
      setTimeout(() => setSequence(2), baseDelay + 500),
      setTimeout(() => setSequence(3), baseDelay + 900),
      setTimeout(() => setSequence(5), baseDelay + 1400),
      setTimeout(() => setSequence(6), baseDelay + 1800),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  useEffect(() => {
    const move = (e) => {
      const x = e.clientX / window.innerWidth - 0.5;
      const y = e.clientY / window.innerHeight - 0.5;
      mouseX.set(x);
      mouseY.set(y);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [mouseX, mouseY]);

  useEffect(() => {
    const i = setInterval(
      () => setServiceIndex((v) => (v + 1) % services.length),
      3500,
    );
    return () => clearInterval(i);
  }, []);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        }),
      );
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen bg-[#030303] text-white flex flex-col justify-center overflow-hidden selection:bg-amber-400/30">
      <div className="absolute inset-0 z-[5] pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,#000000_120%)]" />

      {/* Background Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: sequence >= 1 ? 1 : 0 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 z-0"
      >
        <GridScan
          sensitivity={0.55}
          lineThickness={1}
          linesColor="#3a3246"
          gridScale={0.1}
          scanColor="#6ee7b7"
          scanOpacity={0.25}
          enablePost
          bloomIntensity={0.5}
          chromaticAberration={0.002}
          noiseIntensity={0.01}
        />
      </motion.div>

      {/* Corner: Services */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: sequence >= 2 ? 1 : 0, x: sequence >= 2 ? 0 : 20 }}
        transition={{ duration: 0.8 }}
        className="absolute z-20 text-right pointer-events-none top-20 right-6 md:top-12 md:right-12"
      >
        <div className="pointer-events-auto">
          <div className="text-[14px] sm:text-sm font-bold font-mono uppercase tracking-widest text-stone-200 mb-2">
            Currently Offering
          </div>
          <div className="flex flex-col items-end gap-1">
            <motion.div
              key={serviceIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="text-xs sm:text-sm font-mono uppercase tracking-[0.2em] text-amber-400 h-4 font-medium"
            >
              {services[serviceIndex]}
            </motion.div>
            <div className="w-24 h-[1px] bg-stone-800 mt-2 relative overflow-hidden">
              <motion.div
                key={serviceIndex + "-bar"}
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 3.5, ease: "linear" }}
                className="absolute top-0 right-0 h-full bg-amber-400"
              />
            </div>
          </div>
        </div>
      </motion.div>

      <div className="relative z-10 w-full max-w-[90rem] mx-auto px-4 sm:px-6 flex flex-col justify-center h-full pb-10 pointer-events-none">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{
            opacity: sequence >= 3 ? 1 : 0,
            y: sequence >= 3 ? 0 : 40,
          }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-[13vw] sm:text-[7vw] font-bold tracking-tighter leading-none text-stone-100 self-start ml-[2%] sm:ml-[5%] pointer-events-auto mix-blend-screen"
          style={{ x: xDesigned }}
        >
          DESIGNED
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{
            opacity: sequence >= 3 ? 1 : 0,
            scale: sequence >= 3 ? 1 : 0.9,
          }}
          transition={{ duration: 1, delay: 0.1 }}
          className="self-center sm:mr-[10%] my-2 sm:my-4 flex items-center gap-4 pointer-events-auto"
          style={{ x: xTo }}
        >
          <span className="h-px w-12 sm:w-24 bg-stone-700" />
          <span className="font-serif italic text-3xl sm:text-5xl text-stone-500">
            to
          </span>
          <span className="h-px w-12 sm:w-24 bg-stone-700" />
        </motion.div>

        <motion.div
          className="w-full relative self-center pointer-events-auto"
          style={{ x: xPerform }}
        >
          <svg
            viewBox="0 0 1300 280"
            width="100%"
            className="w-full h-auto max-h-[25vh] sm:max-h-[35vh]"
          >
            <defs>
              <mask id="perform-mask">
                <rect width="100%" height="100%" fill="black" />
                <text
                  x="50%"
                  y="75%"
                  textAnchor="middle"
                  fontSize="260"
                  fontWeight="900"
                  fill="white"
                  letterSpacing="-12"
                  fontFamily="system-ui, -apple-system, sans-serif"
                >
                  PERFORM
                </text>
              </mask>
            </defs>
            <foreignObject width="100%" height="100%" mask="url(#perform-mask)">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover opacity-90 grayscale-[0.2] contrast-125"
              >
                <source
                  src="https://www.pexels.com/download/video/5935837/"
                  type="video/mp4"
                />
              </video>
            </foreignObject>
          </svg>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: sequence >= 5 ? 1 : 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 pointer-events-auto mt-10 md:mt-16 ml-2 md:ml-[20%] max-w-[90%] md:max-w-xl text-xs sm:text-sm md:text-base text-stone-300 font-light leading-relaxed border-l border-stone-800 pl-4"
        >
          We don't just build websites; we engineer{" "}
          <span className="border-b border-amber-400/40 text-stone-200">
            high-performance digital ecosystems
          </span>{" "}
          tailored for ambitious brands.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: sequence >= 6 ? 1 : 0, y: sequence >= 6 ? 0 : 20 }}
        transition={{ duration: 0.8 }}
        className="absolute bottom-6 right-4 sm:bottom-12 sm:right-12 z-20 flex flex-col items-end gap-6 pointer-events-none"
      >
        <div className="flex flex-col items-end gap-1 pointer-events-auto">
          <div className="flex items-center gap-3 text-[10px] text-emerald-500/60 font-mono tracking-widest">
            <span className="tabular-nums font-bold uppercase">
              BASED IN INDIA
            </span>
            <span className="w-px h-3 bg-emerald-500/20" />
            <span className="tabular-nums">{time || "00:00:00"}</span>
          </div>
          <div className="flex items-center gap-2 text-[10px] text-emerald-400 font-mono tracking-widest uppercase">
            <span>Accepting Projects</span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_10px_rgba(52,211,153,0.6)]" />
          </div>
        </div>

        <a
          href="#contact"
          className="pointer-events-auto group flex items-center gap-2 sm:gap-3 text-xs sm:text-sm font-bold uppercase tracking-widest text-amber-300 backdrop-blur-sm bg-amber-950/10 border border-amber-500/20 rounded-sm px-4 py-2 sm:px-6 sm:py-3 hover:bg-amber-400 hover:text-black transition-all duration-300"
        >
          <span>Start Project</span>
          <ArrowUpRight
            size={14}
            className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform"
          />
        </a>
      </motion.div>

      {/* FIXED STYLE TAGS */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes noise {
            0% { transform: translate(0,0) }
            10% { transform: translate(-5%,-5%) }
            20% { transform: translate(-10%,5%) }
            30% { transform: translate(5%,-10%) }
            40% { transform: translate(-5%,15%) }
            50% { transform: translate(-10%,5%) }
            60% { transform: translate(15%,0) }
            70% { transform: translate(0,10%) }
            80% { transform: translate(-15%,0) }
            90% { transform: translate(10%,5%) }
            100% { transform: translate(5%,0) }
        }
        .animate-noise {
            animation: noise 0.2s steps(3) infinite;
        }
      `,
        }}
      />
    </section>
  );
};

export default Hero;
