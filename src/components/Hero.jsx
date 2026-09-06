"use client";

import React, { useRef, useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

const Hero = () => {
  const { scrollY } = useScroll();

  // ============================================================
  // STICKY SCROLL PARALLAX
  // ============================================================

  const scale = useTransform(scrollY, [0, 600], [1, 0.96]);
  const opacity = useTransform(scrollY, [0, 600], [1, 0.35]);

  // ============================================================
  // PROJECT IMAGES
  // ============================================================

  const projects = [
    "/lords.png",
    "/elitairs2.png",
    "/concorde.png",
    "/ckpc.png",
  ];

  // 4 identical sets for infinite dragging
  const marqueeImages = [...projects, ...projects, ...projects, ...projects];

  // ============================================================
  // FRAMER MOTION VARIANTS
  // ============================================================

  const containerVars = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const textVars = {
    hidden: {
      y: "110%",
      opacity: 0,
    },

    show: {
      y: "0%",
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const fadeVars = {
    hidden: {
      opacity: 0,
      y: 25,
    },

    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.55,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const projectVars = {
    hidden: {
      opacity: 0,
      y: 35,
      x: 25,
    },

    show: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.9,
        delay: 0.45,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  // ============================================================
  // CUSTOM CURSOR
  // ============================================================

  const carouselRef = useRef(null);

  const [isHovering, setIsHovering] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = {
    damping: 25,
    stiffness: 300,
    mass: 0.5,
  };

  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX - 35);
      cursorY.set(e.clientY - 18);
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, [cursorX, cursorY]);

  // ============================================================
  // RENDER
  // ============================================================

  return (
    <>
      {/* ========================================================
          CUSTOM CURSOR OVERLAY
      ======================================================== */}

      <motion.div
        className="
          fixed
          left-0
          top-0
          z-[100]
          flex
          h-[36px]
          w-[70px]
          pointer-events-none
          items-center
          justify-center
          gap-1
          rounded-full
          border
          border-[#0a0a0a]/10
          bg-[#EAE6CD]
          shadow-lg
        "
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
        animate={{
          opacity: isHovering ? 1 : 0,
          scale: isHovering ? (isDragging ? 0.85 : 1) : 0.5,
        }}
        transition={{
          duration: 0.2,
        }}
      >
        <ArrowLeft size={16} strokeWidth={2.5} className="text-[#0a0a0a]" />

        <ArrowRight size={16} strokeWidth={2.5} className="text-[#0a0a0a]" />
      </motion.div>

      {/* ========================================================
          HERO SECTION
      ======================================================== */}

      <section
        className="
          sticky
          top-0
          z-0
          flex
          h-[100svh]
          flex-col
          overflow-hidden
          bg-[#EAE6CD]
        "
      >
        <motion.div
          style={{
            scale,
            opacity,
          }}
          className="
            flex
            h-full
            w-full
            origin-top
            flex-col
            justify-between
            px-4
            pt-20
            pb-3
            md:px-8
            md:pb-4
            lg:px-10
          "
        >
          <div className="flex h-full flex-col justify-between">
            {/* ==================================================
                HEADLINE (Adjusted Font Size for 100% Fit)
            ================================================== */}

            <motion.div
              variants={containerVars}
              initial="hidden"
              animate="show"
              className="mt-2 lg:mt-4"
            >
              <h1
                className="
                  m-0
                  p-0
                  font-corp
                  text-[11vw]
                  font-bold
                  uppercase
                  leading-[0.85]
                  tracking-[-0.04em]
                  text-[#0a0a0a]
                  sm:text-[9.5vw]
                  md:text-[8vw]
                  lg:text-[6.8vw]
                  xl:text-[6.5vw]
                "
              >
                <span className="block overflow-hidden pb-1">
                  <motion.span variants={textVars} className="block">
                    Premium Websites That
                  </motion.span>
                </span>

                <span className="block overflow-hidden pb-1">
                  <motion.span variants={textVars} className="block">
                    Make Your Business
                  </motion.span>
                </span>

                <span className="block overflow-hidden pb-1">
                  <motion.span variants={textVars} className="block">
                    Impossible to Ignore
                  </motion.span>
                </span>
              </h1>
            </motion.div>

            {/* ==================================================
                DESKTOP BOTTOM CONTENT
            ================================================== */}

            <div
              className="
                mt-auto
                hidden
                grid-cols-12
                items-end
                gap-6
                pt-2
                pb-4
                lg:grid
                lg:gap-8
              "
            >
              {/* ==================================================
                  LEFT: DESCRIPTION + BUTTONS
              ================================================== */}

              <motion.div
                variants={fadeVars}
                initial="hidden"
                animate="show"
                className="
                  col-span-5
                  max-w-[480px]
                "
              >
                <p
                  className="
                    mb-4
                    text-[15px]
                    font-medium
                    leading-[1.35]
                    text-[#0a0a0a]/80
                    xl:text-[16px]
                  "
                >
                  As an independent digital agency, we build high-performance
                  websites for ambitious businesses that build trust, generate
                  leads, and make your competition look ancient.
                </p>

                {/* ==================================================
                    DESKTOP BUTTONS
                ================================================== */}

                <div className="flex flex-wrap items-center gap-3">
                  {/* ===============================
                      BOOK A CALL
                  =============================== */}

                  <a
                    href="#contact"
                    className="
                      group
                      relative
                      inline-flex
                      h-14
                      items-center
                      gap-2.5
                      overflow-hidden
                      bg-[#0a0a0a]
                      px-4
                      text-[11px]
                      font-bold
                      uppercase
                      tracking-widest
                      text-[#EAE6CD]
                      transition-transform
                      duration-300
                      ease-out
                      hover:-translate-y-1
                      active:translate-y-0
                      rounded-[4px]
                    "
                  >
                    {/* Animated Fill */}
                    <span
                      className="
                        absolute
                        inset-0
                        origin-left
                        scale-x-0
                        bg-[#EAE6CD]
                        transition-transform
                        duration-500
                        ease-[cubic-bezier(0.16,1,0.3,1)]
                        group-hover:scale-x-100
                      "
                    />

                    {/* Button Content */}
                    <span
                      className="
                        relative
                        z-10
                        flex
                        items-center
                        gap-2.5
                        transition-colors
                        duration-300
                        group-hover:text-[#0a0a0a]
                      "
                    >
                      <span
                        className="
                          flex
                          h-6
                          w-6
                          items-center
                          justify-center
                          overflow-hidden
                          rounded-[2px]
                          bg-[#EAE6CD]
                          transition-transform
                          duration-500
                          ease-out
                          group-hover:rotate-[-6deg]
                          group-hover:scale-110
                        "
                      >
                        <img
                          src="/me.jpeg"
                          className="
                            h-full
                            w-full
                            object-cover
                            
                          "
                          alt="Profile"
                          fetchpriority="high"
                        />
                      </span>

                      <span className="font-corp text-[12px] font-bold uppercase tracking-widest sm:text-[13px]">
                        Book a Call
                      </span>

                      <span
                        className="
                          ml-1
                          inline-block
                          transition-transform
                          duration-500
                          ease-out
                          group-hover:translate-x-1.5
                        "
                      >
                        →
                      </span>
                    </span>
                  </a>

                  {/* ===============================
                      SEE PROJECTS
                  =============================== */}

                  <a
                    href="#projects"
                    className="
                      group
                      relative
                      inline-flex
                      h-14
                      items-center
                      gap-2
                      overflow-hidden
                      border-[1.5px]
                      border-[#0a0a0a]
                      bg-transparent
                      px-5
                      text-[11px]
                      font-bold
                      uppercase
                      tracking-widest
                      text-[#0a0a0a]
                      transition-transform
                      duration-300
                      ease-out
                      hover:-translate-y-1
                      active:translate-y-0
                      rounded-[4px]
                    "
                  >
                    {/* Animated Fill */}
                    <span
                      className="
                        absolute
                        inset-0
                        origin-bottom
                        scale-y-0
                        bg-[#0a0a0a]
                        transition-transform
                        duration-500
                        ease-[cubic-bezier(0.16,1,0.3,1)]
                        group-hover:scale-y-100
                      "
                    />

                    {/* Button Content */}
                    <span
                      className="
                        relative
                        z-10
                        flex
                        items-center
                        gap-2
                        transition-colors
                        duration-300
                        group-hover:text-[#EAE6CD]
                      "
                    >
                      <span className="flex h-6 items-center font-corp text-[12px] font-bold uppercase leading-none tracking-widest xl:text-[13px]">
                        See Projects
                      </span>

                      <span
                        className="
                          inline-block
                          transition-transform
                          duration-500
                          ease-out
                          group-hover:translate-x-1.5
                        "
                      >
                        →
                      </span>
                    </span>
                  </a>
                </div>
              </motion.div>

              {/* ==================================================
                  RIGHT: PROJECT SLIDER
              ================================================== */}

              <motion.div
                variants={projectVars}
                initial="hidden"
                animate="show"
                className="
                  col-span-7
                  flex
                  w-full
                  flex-col
                  items-end
                  justify-end
                "
              >
                {/* ==================================================
                    PROJECT CONTAINER
                ================================================== */}

                <div
                  ref={carouselRef}
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => {
                    setIsHovering(false);
                    setIsDragging(false);
                  }}
                  onMouseDown={() => setIsDragging(true)}
                  onMouseUp={() => setIsDragging(false)}
                  className="
                    relative
                    h-[210px]
                    w-[75%]
                    cursor-none
                    overflow-hidden
                    rounded-xl
                    border-[4px]
                    border-[#0a0a0a]/20
                    bg-[#0a0a0a]
                    shadow-xl
                    xl:h-[260px]
                    xl:w-[58%]
                  "
                >
                  {/* Outer Drag Wrapper */}

                  <motion.div
                    drag="x"
                    dragConstraints={{
                      left: -1200,
                      right: 1200,
                    }}
                    dragElastic={0.25}
                    className="
                      flex
                      h-full
                      w-max
                      items-center
                    "
                  >
                    {/* Infinite Auto Scroll */}

                    <motion.div
                      className="
                        flex
                        h-full
                        items-center
                        gap-1
                        px-4
                      "
                      animate={{
                        x: ["-25%", "-50%"],
                      }}
                      transition={{
                        ease: "linear",
                        duration: 18,
                        repeat: Infinity,
                      }}
                    >
                      {marqueeImages.map((src, idx) => (
                        <div
                          key={idx}
                          className="
                            h-full
                            w-[250px]
                            flex-shrink-0
                            overflow-hidden
                            rounded-[6px]
                            pointer-events-none
                            md:w-[550px]
                          "
                        >
                          <img
                            src={src}
                            alt={`Project ${idx}`}
                            className="
                              h-[100%]
                              w-[100%]
                              object-cover
                              opacity-90
                              transition-opacity
                              duration-300
                            "
                            fetchpriority="high"
                          />
                        </div>
                      ))}
                    </motion.div>
                  </motion.div>
                </div>

                {/* ==================================================
                    DESKTOP ATTRIBUTION
                ================================================== */}

                <div
                  className="
                    mt-2
                    flex
                    w-[75%]
                    items-center
                    gap-4
                    xl:w-[58%]
                  "
                >
                  <span
                    className="
                      shrink-0
                      whitespace-nowrap
                      font-corp
                      text-[13px]
                      font-bold
                      uppercase
                      tracking-[-0.02em]
                      text-[#0a0a0a]
                      xl:text-[14px]
                    "
                  >
                    By Oddlambda
                  </span>

                  <span
                    className="
                      h-px
                      flex-1
                      bg-[#0a0a0a]
                    "
                  />
                </div>
              </motion.div>
            </div>

            {/* ==================================================
                MOBILE BOTTOM CONTENT
            ================================================== */}

            <div
              className="
                flex
                h-full
                flex-col
                justify-end
                pb-2
                lg:hidden
              "
            >
              {/* ==================================================
                  MOBILE PROJECT
              ================================================== */}

              <motion.div
                variants={projectVars}
                initial="hidden"
                animate="show"
                className="
                  mt-auto
                  mb-4
                  pt-4
                "
              >
                <div
                  className="
                    aspect-[1.47/1]
                    w-[62%]
                    max-w-[260px]
                    overflow-hidden
                    rounded-[8px]
                    border
                    border-[#0a0a0a]/20
                    bg-[#0a0a0a]
                    shadow-xl
                    sm:w-[60%]
                  "
                >
                  <img
                    src={projects[0]}
                    alt="Project 1"
                    className="
                      h-full
                      w-full
                      object-cover
                      opacity-90
                    "

                    fetchpriority="high"
                  />
                </div>

                {/* Mobile Attribution */}

                <div
                  className="
                    mt-2
                    flex
                    w-[62%]
                    max-w-[260px]
                    items-center
                    gap-3
                    sm:w-[60%]
                  "
                >
                  <span
                    className="
                      whitespace-nowrap
                      font-corp
                      text-[11px]
                      font-bold
                      uppercase
                      text-[#0a0a0a]
                      sm:text-[12px]
                    "
                  >
                    By Oddlambda
                  </span>

                  <span
                    className="
                      h-[2px]
                      flex-1
                      bg-[#0a0a0a]
                    "
                  />
                </div>
              </motion.div>

              {/* ==================================================
                  MOBILE DESCRIPTION
              ================================================== */}

              <motion.div variants={fadeVars} initial="hidden" animate="show">
                <p
                  className="
                    mb-3
                    max-w-[380px]
                    text-[14px]
                    font-medium
                    leading-[1.35]
                    text-[#0a0a0a]/80
                    sm:text-[15px]
                  "
                >
                  As an independent digital agency, we build high-performance
                  websites for ambitious businesses that build trust, generate
                  leads, and make your competition look ancient.
                </p>

                {/* ==================================================
                    MOBILE BUTTONS
                ================================================== */}

                <div className="flex flex-wrap items-center gap-2">
                  {/* ===============================
                      BOOK A CALL
                  =============================== */}

                  <a
                    href="#contact"
                    className="
                      group
                      relative
                      inline-flex
                      h-10
                      items-center
                      gap-2.5
                      overflow-hidden
                      rounded-[2px]
                      bg-[#0a0a0a]
                      px-3
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-widest
                      text-[#EAE6CD]
                      transition-transform
                      duration-300
                      ease-out
                      hover:-translate-y-1
                      active:translate-y-0
                      sm:h-11
                      sm:px-4
                      sm:text-[11px]
                    "
                  >
                    {/* Fill */}
                    <span
                      className="
                        absolute
                        inset-0
                        origin-left
                        scale-x-0
                        bg-[#EAE6CD]
                        transition-transform
                        duration-500
                        ease-[cubic-bezier(0.16,1,0.3,1)]
                        group-hover:scale-x-100
                      "
                    />

                    {/* Content */}
                    <span
                      className="
                        relative
                        z-10
                        flex
                        items-center
                        gap-2.5
                        transition-colors
                        duration-300
                        group-hover:text-[#0a0a0a]
                      "
                    >
                      <span
                        className="
                          flex
                          h-5
                          w-5
                          items-center
                          justify-center
                          overflow-hidden
                          rounded-[1px]
                          bg-[#EAE6CD]
                          transition-transform
                          duration-500
                          group-hover:rotate-[-6deg]
                          group-hover:scale-110
                          sm:h-6
                          sm:w-6
                        "
                      >
                        <img
                          src="/me.jpeg"
                          className="
                            h-full
                            w-full
                            object-cover
                            
                          "
                          alt="Profile"
                          fetchpriority="high"
                        />
                      </span>

                      <span className="flex h-5 items-center font-corp text-[11px] font-bold uppercase leading-none tracking-widest sm:h-6 sm:text-[12px]">
                        Book a Call
                      </span>

                      <span
                        className="
                          transition-transform
                          duration-500
                          group-hover:translate-x-1.5
                        "
                      >
                        →
                      </span>
                    </span>
                  </a>

                  {/* ===============================
                      SEE PROJECTS
                  =============================== */}

                  <a
                    href="#packages"
                    className="
                      group
                      relative
                      inline-flex
                      h-10
                      items-center
                      overflow-hidden
                      rounded-[2px]
                      border-[1.5px]
                      border-[#0a0a0a]
                      bg-transparent
                      px-3
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-widest
                      text-[#0a0a0a]
                      transition-transform
                      duration-300
                      ease-out
                      hover:-translate-y-1
                      active:translate-y-0
                      sm:h-11
                      sm:px-4
                      sm:text-[11px]
                    "
                  >
                    {/* Fill */}
                    <span
                      className="
                        absolute
                        inset-0
                        origin-bottom
                        scale-y-0
                        bg-[#0a0a0a]
                        transition-transform
                        duration-500
                        ease-[cubic-bezier(0.16,1,0.3,1)]
                        group-hover:scale-y-100
                      "
                    />

                    {/* Content */}
                    <span
                      className="
                        relative
                        z-10
                        flex
                        items-center
                        gap-2
                        transition-colors
                        duration-300
                        group-hover:text-[#EAE6CD]
                      "
                    >
                      <span className="flex h-5 items-center font-corp text-[11px] font-bold uppercase leading-none tracking-widest sm:h-6 sm:text-[12px]">
                        See Projects
                      </span>

                      <span
                        className="
                          transition-transform
                          duration-500
                          group-hover:translate-x-1.5
                        "
                      >
                        →
                      </span>
                    </span>
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Hero;