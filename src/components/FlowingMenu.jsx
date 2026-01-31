import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";

import "./FlowingMenu.css";

/* -------------------------------------------------------------------------- */
/*                                MAIN MENU                                    */
/* -------------------------------------------------------------------------- */

function FlowingMenu({
  items = [],
  speed = 15,
  textColor = "#fff",

  bgColor = "transparent",

  marqueeBgColor = "rgba(0,0,0,0.6)",
  marqueeTextColor = "#fff",
  borderColor = "rgba(255,255,255,0.2)",
}) {
  return (
    <div
      className="menu-wrap"
      style={{
        backgroundColor: bgColor,
        backdropFilter: "blur(2px)",
      }}
    >
      <nav className="menu">
        {items.map((item, idx) => (
          <MenuItem
            key={idx}
            {...item}
            speed={speed}
            textColor={textColor}
            marqueeBgColor={marqueeBgColor}
            marqueeTextColor={marqueeTextColor}
            borderColor={borderColor}
          />
        ))}
      </nav>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                                MENU ITEM                                    */
/* -------------------------------------------------------------------------- */

function MenuItem({
  link,
  text,
  image,
  speed,
  textColor,
  marqueeBgColor,
  marqueeTextColor,
  borderColor,
}) {
  const itemRef = useRef(null);
  const marqueeRef = useRef(null);
  const marqueeInnerRef = useRef(null);
  const linkRef = useRef(null); // 👈 static text ref
  const animationRef = useRef(null);

  const [repetitions, setRepetitions] = useState(4);

  const animationDefaults = { duration: 0.6, ease: "expo" };

  /* ---------------- EDGE DETECTION ---------------- */

  const findClosestEdge = (mouseX, mouseY, width, height) => {
    const top = dist(mouseX, mouseY, width / 2, 0);
    const bottom = dist(mouseX, mouseY, width / 2, height);
    return top < bottom ? "top" : "bottom";
  };

  const dist = (x, y, x2, y2) => {
    const dx = x - x2;
    const dy = y - y2;
    return dx * dx + dy * dy;
  };

  /* ---------------- CALC REPEATS ---------------- */

  useEffect(() => {
    const calculate = () => {
      if (!marqueeInnerRef.current) return;

      const part =
        marqueeInnerRef.current.querySelector(".marquee__part");

      if (!part) return;

      const contentWidth = part.offsetWidth;
      const vw = window.innerWidth;

      const needed = Math.ceil(vw / contentWidth) + 2;

      setRepetitions(Math.max(4, needed));
    };

    calculate();
    window.addEventListener("resize", calculate);

    return () => window.removeEventListener("resize", calculate);
  }, [text, image]);

  /* ---------------- GSAP LOOP ---------------- */

  useEffect(() => {
    const setup = () => {
      if (!marqueeInnerRef.current) return;

      const part =
        marqueeInnerRef.current.querySelector(".marquee__part");

      if (!part) return;

      const width = part.offsetWidth;

      if (!width) return;

      if (animationRef.current) animationRef.current.kill();

      animationRef.current = gsap.to(marqueeInnerRef.current, {
        x: -width,
        duration: speed,
        ease: "none",
        repeat: -1,
      });
    };

    const timer = setTimeout(setup, 50);

    return () => {
      clearTimeout(timer);

      if (animationRef.current) {
        animationRef.current.kill();
      }
    };
  }, [text, image, repetitions, speed]);

  /* ---------------- HOVER ---------------- */

  const handleEnter = (e) => {
    if (!itemRef.current) return;

    const r = itemRef.current.getBoundingClientRect();

    const x = e.clientX - r.left;
    const y = e.clientY - r.top;

    const edge = findClosestEdge(x, y, r.width, r.height);

    /* Show marquee */
    gsap
      .timeline({ defaults: animationDefaults })
      .set(marqueeRef.current, {
        y: edge === "top" ? "-101%" : "101%",
      })
      .set(marqueeInnerRef.current, {
        y: edge === "top" ? "101%" : "-101%",
      })
      .to([marqueeRef.current, marqueeInnerRef.current], {
        y: "0%",
      });

    /* Hide static text */
    gsap.to(linkRef.current, {
      opacity: 0,
      filter: "blur(4px)",
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleLeave = (e) => {
    if (!itemRef.current) return;

    const r = itemRef.current.getBoundingClientRect();

    const x = e.clientX - r.left;
    const y = e.clientY - r.top;

    const edge = findClosestEdge(x, y, r.width, r.height);

    /* Hide marquee */
    gsap
      .timeline({ defaults: animationDefaults })
      .to(marqueeRef.current, {
        y: edge === "top" ? "-101%" : "101%",
      })
      .to(marqueeInnerRef.current, {
        y: edge === "top" ? "101%" : "-101%",
      });

    /* Show static text */
    gsap.to(linkRef.current, {
      opacity: 1,
      filter: "blur(0px)",
      duration: 0.3,
      ease: "power2.out",
    });
  };

  /* ---------------- RENDER ---------------- */

  return (
    <div
      className="menu__item"
      ref={itemRef}
      style={{
        borderColor,
        background: "transparent",
      }}
    >
      {/* Static Text */}
      <a
        ref={linkRef} // 👈 important
        className="menu__item-link"
        href={link}
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
        style={{ color: textColor }}
      >
        {text}
      </a>

      {/* Marquee */}
      <div
        className="marquee"
        ref={marqueeRef}
        style={{
          background: marqueeBgColor,
          backdropFilter: "blur(6px)",
        }}
      >
        <div className="marquee__inner-wrap">
          <div
            className="marquee__inner"
            ref={marqueeInnerRef}
            aria-hidden="true"
          >
            {[...Array(repetitions)].map((_, i) => (
              <div
                className="marquee__part"
                key={i}
                style={{ color: marqueeTextColor }}
              >
                <span>{text}</span>

                <div
                  className="marquee__img"
                  style={{
                    backgroundImage: `url(${image})`,
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlowingMenu;
