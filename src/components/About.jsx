"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";

import {
  ArrowDownLeft,
  MousePointerClick,
  Eye,
  Target,
  MessageSquare,
  MessageCircle,
  Key,
  Settings,
} from "lucide-react";

/* ============================================================
   PRINCIPLE ROW
============================================================ */

const PrincipleRow = ({ value }) => {
  const rowRef = useRef(null);

  /*
   * 0.28 = inactive
   * 1    = active
   *
   * No values between these two states.
   */
  const [isActive, setIsActive] = useState(false);

  const { scrollY } = useScroll();

  const updateActiveState = () => {
    const row = rowRef.current;

    if (!row) return;

    const rect = row.getBoundingClientRect();

    const viewportCenter = window.innerHeight / 2;
    const rowCenter = rect.top + rect.height / 2;

    const distance = Math.abs(rowCenter - viewportCenter);

    /*
     * The row becomes active only when its center
     * enters the central focus area.
     *
     * There is NO interpolation.
     *
     * This creates:
     *
     * inactive → instantly bright
     * bright   → instantly inactive
     */

    const focusDistance = rect.height * 0.5;

    setIsActive(distance < focusDistance);
  };

  /* ==========================================================
     UPDATE DURING SCROLL
  ========================================================== */

  useMotionValueEvent(scrollY, "change", () => {
    updateActiveState();
  });

  /* ==========================================================
     INITIAL + RESIZE
  ========================================================== */

  useEffect(() => {
    const animationFrame = requestAnimationFrame(() => {
      updateActiveState();
    });

    const handleResize = () => {
      updateActiveState();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const Icon = value.icon;

  return (
    <motion.div
      ref={rowRef}
      animate={{
        opacity: isActive ? 1 : 0.28,
      }}
      transition={{
        duration: 0,
      }}
      className="
        group
        w-full
        border-b
        border-[#EAE6CD]/15
      "
    >
      {/* ========================================================
          MOBILE
      ======================================================== */}

      <div
        className="
          flex
          min-h-[155px]
          flex-col
          justify-center
          px-5
          py-8
          sm:px-8
          sm:py-9
          md:hidden
        "
      >
        {/* TITLE + ICON */}

        <div
          className="
            flex
            items-center
            justify-between
            gap-5
          "
        >
          <h3
            className="
              m-0
              font-corp
              text-[clamp(1.8rem,8vw,3rem)]
              font-bold
              uppercase
              leading-[0.9]
              tracking-[-0.04em]
            "
          >
            {value.title}
          </h3>

          <Icon
            size={25}
            strokeWidth={1.5}
            className="
              shrink-0
              text-[#EAE6CD]/45
            "
          />
        </div>

        {/* DESCRIPTION */}

        <p
          className="
            m-0
            mt-5
            max-w-[500px]
            text-[11px]
            font-medium
            leading-[1.45]
            text-[#EAE6CD]/55
            sm:text-[12px]
          "
        >
          {value.description}
        </p>
      </div>

      {/* ========================================================
          DESKTOP
      ======================================================== */}

      <div
        className="
          hidden
          min-h-[200px]
          grid-cols-12
          items-center
          px-5
          md:grid
          md:px-8
          lg:min-h-[225px]
          lg:px-10
          xl:px-14
        "
      >
        {/* ======================================================
            LEFT EMPTY SPACE

            Keeps the same visual structure as the original.
        ====================================================== */}

        <div
          className="
            col-span-3
          "
        />

        {/* ======================================================
            TITLE
        ====================================================== */}

        <div
          className="
            col-span-4
            flex
            items-center
          "
        >
          <h3
            className="
              m-0
              font-corp
              text-[clamp(2.5rem,4vw,4rem)]
              font-bold
              uppercase
              leading-[0.9]
              tracking-[-0.045em]
            "
          >
            {value.title}
          </h3>
        </div>

        {/* ======================================================
            ICON
        ====================================================== */}

        <div
          className="
            col-span-1
            flex
            items-center
            justify-center
          "
        >
          <Icon
            size={40}
            strokeWidth={1.5}
            className="
              text-[#EAE6CD]/45
            "
          />
        </div>

        {/* ======================================================
            DESCRIPTION
        ====================================================== */}

        <div
          className="
            col-span-4
            flex
            items-center
          "
        >
          <p
            className="
              m-0
              w-full
              max-w-[650px]
              text-[32px]
              font-medium
              leading-[1.15]
              tracking-[-0.025em]
              text-[#EAE6CD]/55
              lg:text-[35px]
              xl:text-[38px]
            "
          >
            {value.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

/* ============================================================
   ABOUT SECTION
============================================================ */

const About = () => {
  const containerRef = useRef(null);

  const [isMobile, setIsMobile] = useState(false);

  /* ==========================================================
     RESPONSIVE
  ========================================================== */

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    const animationFrame = requestAnimationFrame(() => {
      handleResize();
    });

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  /* ==========================================================
     MAIN SCROLL PROGRESS
  ========================================================== */

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  /* ==========================================================
     BLACK BOX EXPANSION
  ========================================================== */

  const boxWidth = useTransform(
    scrollYProgress,
    [0, 0.3],
    isMobile ? ["72%", "100%"] : ["58%", "100%"]
  );

  const boxHeight = useTransform(
    scrollYProgress,
    [0, 0.3],
    isMobile ? ["72%", "100%"] : ["70%", "100%"]
  );

  const boxRadius = useTransform(
    scrollYProgress,
    [0, 0.3],
    isMobile ? ["7px", "0px"] : ["10px", "0px"]
  );

  /* ==========================================================
     ABOUT CONTENT ANIMATION

     1. Box expands
     2. Content fades in
     3. Content holds
     4. Content fades out
  ========================================================== */

  const contentOpacity = useTransform(
    scrollYProgress,
    [0.3, 0.45, 0.6, 0.75],
    [0, 1, 1, 0]
  );

  const contentY = useTransform(
    scrollYProgress,
    [0.3, 0.45, 0.6, 0.75],
    [30, 0, 0, -30]
  );

  /* ==========================================================
     ODDLAMBDA PRINCIPLES
  ========================================================== */

  const values = [
    {
      title: "Strategy.",
      description:
        "We start with the bigger picture — understanding your brand, your audience, and what your business actually needs online.",
      icon: Target,
    },

    {
      title: "Custom.",
      description:
        "No recycled templates. Every digital experience we build is designed around your business, your identity, and your goals.",
      icon: MousePointerClick,
    },

    {
      title: "Precision.",
      description:
        "From typography and interaction to responsive behavior and performance, every detail has a purpose.",
      icon: Eye,
    },

    {
      title: "Communication.",
      description:
        "Clear communication keeps projects moving. We keep the process straightforward, transparent, and collaborative.",
      icon: MessageCircle,
    },

    {
      title: "Performance.",
      description:
        "A website should not only look good. It should load fast, work smoothly, and turn attention into meaningful action.",
      icon: Settings,
    },

    {
      title: "Scalable.",
      description:
        "We build digital systems with the future in mind — ready to evolve as your business, audience, and requirements grow.",
      icon: Key,
    },

    {
      title: "Partnership.",
      description:
        "Our relationship does not end when a project launches. We stay available to support, improve, and build what comes next.",
      icon: MessageSquare,
    },
  ];

  return (
    <section
      id="about"
      className="
        relative
        z-20
        w-full
        bg-[#EAE6CD]
      "
    >
      {/* ========================================================
          1. EXPANDING BLACK FRAME
      ======================================================== */}

      <div
        ref={containerRef}
        className="
          relative
          h-[300vh]
          w-full
        "
      >
        <div
          className="
            sticky
            top-0
            flex
            h-screen
            w-full
            items-center
            justify-center
            overflow-hidden
          "
        >
          {/* ====================================================
              BLACK BOX
          ==================================================== */}

          <motion.div
            style={{
              width: boxWidth,
              height: boxHeight,
              borderRadius: boxRadius,
            }}
            className="
              relative
              flex
              items-center
              justify-center
              overflow-hidden
              bg-[#0a0a0a]
              will-change-[width,height,border-radius]
            "
          >
            {/* ==================================================
                ODDLAMBDA ABOUT CONTENT
            ================================================== */}

            <motion.div
              style={{
                opacity: contentOpacity,
                y: contentY,
              }}
              className="
                absolute
                inset-0
                flex
                h-full
                w-full
                items-center
                justify-center
              "
            >
              {/* =================================================
                  CONTENT WRAPPER
              ================================================= */}

              <div
                className="
                  relative
                  w-full
                  max-w-[1280px]
                  px-5
                  sm:px-8
                  md:px-10
                  lg:px-14
                "
              >
                {/* =================================================
                    TOP LABEL
                ================================================= */}

                <div
                  className="
                    absolute
                    left-5
                    right-5
                    top-6
                    flex
                    items-center
                    justify-between
                    sm:left-8
                    sm:right-8
                    sm:top-8
                    md:left-10
                    md:right-10
                    md:top-10
                    lg:left-14
                    lg:right-14
                    lg:top-10
                  "
                >
                  <span
                    className="
                      font-mono
                      text-[7px]
                      uppercase
                      tracking-[0.18em]
                      text-[#EAE6CD]/40
                      sm:text-[8px]
                      md:text-[9px]
                    "
                  >
                    02 / About Oddlambda
                  </span>

                  <ArrowDownLeft
                    size={15}
                    strokeWidth={1.2}
                    className="text-[#EAE6CD]/30"
                  />
                </div>

                {/* =================================================
                    MAIN INTRO
                ================================================= */}

                <div
                  className="
                    mx-auto
                    flex
                    w-full
                    max-w-[1050px]
                    flex-col
                    items-center
                  "
                >
                  {/* =================================================
                      FOUNDER + HEADING
                  ================================================= */}

                  <div
                    className="
                      flex
                      w-full
                      flex-col
                      items-center
                      justify-center
                      gap-4
                      sm:gap-5
                      md:flex-row
                      md:items-start
                      md:gap-6
                      lg:gap-8
                    "
                  >
                    {/* FOUNDER PORTRAIT */}

                   {/* FOUNDER PORTRAIT */}

<div
  className="
    aspect-square
    w-[68px]
    shrink-0
    overflow-hidden
    rounded-[5px]
    bg-[#EAE6CD]/10

    sm:w-[80px]

    md:h-[clamp(150px,11.2vw,193px)]
    md:w-[clamp(150px,11.2vw,193px)]

    lg:h-[clamp(160px,11.2vw,193px)]
    lg:w-[clamp(160px,11.2vw,193px)]
  "
>
  <img
    src="/me.jpeg"
    alt="Chaitanya — Founder of Oddlambda"
    className="
      block
      h-full
      w-full
      object-cover
      transition-all
      duration-700
    "
  />
</div>

                    {/* HEADING */}

                    <h2
                      className="
                        m-0
                        text-center
                        font-corp
                        text-[clamp(2.6rem,10vw,6.5rem)]
                        font-bold
                        uppercase
                        leading-[0.93]
                        tracking-[-0.055em]
                        text-[#EAE6CD]
                        md:text-left
                        md:text-[clamp(4rem,6vw,6.5rem)]
                      "
                    >
                      Hey — we're
                      <br />
                      Oddlambda
                    </h2>
                  </div>

                  {/* =================================================
                      ABOUT ODDLAMBDA
                  ================================================= */}

                  <div
                    className="
                      mt-7
                      flex
                      w-full
                      max-w-[700px]
                      items-start
                      justify-center
                      gap-3
                      sm:mt-8
                      sm:gap-4
                      md:mt-10
                      md:gap-5
                    "
                  >
                    {/* DESKTOP ALIGNMENT */}

                    <div
                      className="
                        hidden
                        shrink-0
                        md:block
                        md:w-[105px]
                        lg:w-[125px]
                      "
                    />

                    {/* LABEL + DESCRIPTION */}

                    <div
                      className="
                        flex
                        min-w-0
                        flex-1
                        items-start
                        gap-3
                        sm:gap-4
                      "
                    >
                      <span
                        className="
                          mt-[2px]
                          shrink-0
                          whitespace-nowrap
                          rounded-[2px]
                          border
                          border-[#EAE6CD]/15
                          bg-[#EAE6CD]/5
                          px-1.5
                          py-1
                          text-[7px]
                          font-bold
                          uppercase
                          tracking-widest
                          text-[#EAE6CD]/60
                          sm:px-2
                          sm:text-[8px]
                          md:text-[9px]
                        "
                      >
                        About Us
                      </span>

                      <p
                        className="
                          m-0
                          min-w-0
                          max-w-[500px]
                          text-[10px]
                          font-medium
                          leading-[1.45]
                          text-[#EAE6CD]/75
                          sm:text-[12px]
                          md:text-[15px]
                          lg:text-[16px]
                        "
                      >
                        Oddlambda is a digital development and growth
                        company. We design and build high-quality websites,
                        web applications, and digital experiences that help
                        businesses establish a stronger presence online.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* ============================================================
          2. PRINCIPLES SECTION
      ============================================================ */}

      <div
        className="
          relative
          z-10
          -mt-[2px]
          w-full
          bg-[#0a0a0a]
          pb-24
          text-[#EAE6CD]
          sm:pb-28
          md:pb-40
        "
      >
        {/* ========================================================
            HEADER
        ======================================================== */}

        <div
          className="
            w-full
            border-t
            border-[#EAE6CD]/20
            px-5
            pt-5
            sm:px-8
            md:px-10
            lg:px-14
          "
        >
          <div
            className="
              flex
              items-center
              justify-between
            "
          >
            <span
              className="
                font-mono
                text-[8px]
                uppercase
                tracking-widest
                text-[#EAE6CD]/40
                sm:text-[9px]
              "
            >
              How We Work
            </span>

            <span
              className="
                font-mono
                text-[8px]
                uppercase
                tracking-widest
                text-[#EAE6CD]/40
                sm:text-[9px]
              "
            >
              07 Principles
            </span>
          </div>
        </div>

        {/* ========================================================
            PRINCIPLE LIST
        ======================================================== */}

        <div
          className="
            mt-12
            w-full
            border-t
            border-[#EAE6CD]/15
            sm:mt-16
          "
        >
          {values.map((value) => (
            <PrincipleRow
              key={value.title}
              value={value}
            />
          ))}
        </div>

        {/* ========================================================
            BOTTOM SPACE
        ======================================================== */}

        <div
          className="
            h-[10vh]
            sm:h-[14vh]
            md:h-[18vh]
          "
        />
      </div>
    </section>
  );
};

export default About;