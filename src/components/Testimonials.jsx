"use client";

import React, { useEffect, useRef } from "react";
import { Quote } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    id: 1,
    quote:
      "Oddlambda transformed our vague vision into a market-leading digital product. The attention to detail is obsessive.",
    author: "Yash Raikar",
    role: "Founder",
    company: "Personal Brand",
    theme: "dark",
  },
  {
    id: 2,
    quote:
      "They perfectly captured the essence of Ashiya. The site is a digital extension of our interior design philosophy—minimal, elegant, and functionally brilliant.",
    author: "Darshan Jade",
    role: "Principal Designer",
    company: "Ashiya Interiors",
    theme: "cyan",
  },
  {
    id: 3,
    quote:
      "We needed a high-converting machine, and they delivered. The modern styling combined with their strategic UX approach skyrocketed our client leads.",
    author: "Sarabjeet Singh",
    role: "CEO",
    company: "Drootle",
    theme: "light",
  },
];

export default function Testimonials() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const cursorRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const panels = gsap.utils.toArray(".testimonial-panel");
      const track = trackRef.current;

      const scrollDistance = track.scrollWidth - window.innerWidth;

      /* ------------------------------
         Horizontal scroll (CORRECT)
      -------------------------------- */
      gsap.to(track, {
        x: -scrollDistance,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: true,
          scrub: 1,
          start: "top top",
          end: () => `+=${scrollDistance}`,
          snap: {
            snapTo: 1 / (panels.length - 1),
            duration: { min: 0.2, max: 0.4 },
            inertia: false,
          },
        },
      });

      /* ------------------------------
         Velocity-based skew
      -------------------------------- */
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom top",
        onUpdate: (self) => {
          const skew = gsap.utils.clamp(-4, 4, self.getVelocity() / 350);
          gsap.to(".skew-text", {
            skewX: skew,
            duration: 0.15,
            ease: "power3.out",
          });
        },
      });

      /* ------------------------------
         Cursor (SECTION-ONLY)
      -------------------------------- */
      const cursor = cursorRef.current;

      const moveCursor = (e) => {
        gsap.to(cursor, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.25,
          ease: "power3.out",
        });
      };

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top center",
        end: "bottom center",
        onEnter: () => {
          cursor.style.opacity = "1";
          window.addEventListener("mousemove", moveCursor);
        },
        onLeave: () => {
          cursor.style.opacity = "0";
          window.removeEventListener("mousemove", moveCursor);
        },
        onEnterBack: () => {
          cursor.style.opacity = "1";
          window.addEventListener("mousemove", moveCursor);
        },
        onLeaveBack: () => {
          cursor.style.opacity = "0";
          window.removeEventListener("mousemove", moveCursor);
        },
      });

      ScrollTrigger.refresh();
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen bg-[#030303] overflow-hidden"
    >
      <div
        ref={trackRef}
        className="flex h-screen w-[300vw] will-change-transform"
      >
        {testimonials.map((t) => (
          <div
            key={t.id}
            className={`testimonial-panel w-screen h-screen flex items-center px-8 md:px-28 relative cursor-none
              ${
                t.theme === "cyan"
                  ? "bg-[#46cef6] text-black"
                  : t.theme === "light"
                  ? "bg-[#e5e5e5] text-black"
                  : "bg-[#0a0a0a] text-white"
              }`}
          >
            <div className="max-w-5xl skew-text">
              <Quote
                className={`w-14 h-14 mb-10 opacity-40 ${
                  t.theme === "dark"
                    ? "text-[#46cef6]"
                    : "text-current"
                }`}
              />

              <h3 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight mb-14">
                “{t.quote}”
              </h3>

              <div className="flex items-center gap-6">
                <span className="h-px w-14 bg-current opacity-30" />
                <div>
                  <p className="text-lg font-semibold uppercase tracking-wide">
                    {t.author}
                  </p>
                  <p className="text-sm opacity-60 font-mono">
                    {t.role}, {t.company}
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute bottom-10 right-10 text-[14vw] font-black opacity-[0.04] font-mono select-none">
              0{t.id}
            </div>
          </div>
        ))}
      </div>

      {/* Cursor */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-28 h-28 rounded-full bg-[#46cef6] mix-blend-difference pointer-events-none z-[999] flex items-center justify-center text-black font-mono text-xs text-center leading-tight opacity-0"
        style={{ transform: "translate(-50%, -50%)" }}
      >
        THIS
        <br />
        COULD BE
        <br />
        YOU
      </div>
    </section>
  );
}
