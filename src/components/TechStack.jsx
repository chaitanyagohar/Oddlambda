import React from "react";
import { motion } from "framer-motion";

/* Transparent SVG Logos (CDN) */
const logos = [
  {
    src: "https://cdn.worldvectorlogo.com/logos/react-2.svg",
    alt: "React",
  },
  {
    src: "https://cdn.worldvectorlogo.com/logos/next-js.svg",
    alt: "Next.js",
  },
  {
    src: "/techstack/image-removebg-preview.png",
    alt: "Tailwind CSS",
  },
  {
    src: "https://cdn.worldvectorlogo.com/logos/framer-motion.svg",
    alt: "Framer Motion",
  },
  {
    src: "https://cdn.worldvectorlogo.com/logos/vercel.svg",
    alt: "Vercel",
  },
  {
    src: "data:image/png;base64,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",
    alt: "Wix",
  },
  {
    src: "https://cdn.worldvectorlogo.com/logos/php.svg",
    alt: "PHP",
  },
  {
    src: "https://cdn.worldvectorlogo.com/logos/mysql-6.svg",
    alt: "MySQL",
  },
  {
    src: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg",
    alt: "Node.js",
  },
  {
    src: "https://cdn.worldvectorlogo.com/logos/typescript.svg",
    alt: "TypeScript",
  },
];

const TechStack = () => {
  return (
    <section className="relative py-20 bg-black overflow-hidden">
      {/* Fade Edges */}
      <div className="absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-black to-transparent z-20" />
      <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-black to-transparent z-20" />

      {/* Slider */}
      <div className="relative flex overflow-hidden">
        <motion.div
          className="flex items-center gap-24 will-change-transform"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            ease: "linear",
            duration: 35,
            repeat: Infinity,
          }}
        >
          {/* First Set */}
          {logos.map((logo, i) => (
            <Logo key={`a-${i}`} {...logo} />
          ))}

          {/* Duplicate Set (Seamless Loop) */}
          {logos.map((logo, i) => (
            <Logo key={`b-${i}`} {...logo} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

/* Logo Component */
const Logo = ({ src, alt }) => {
  return (
    <div className="flex-shrink-0">
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="
          h-12
          md:h-14
          lg:h-16
          w-auto
          object-contain
          bg-transparent
          opacity-80
          hover:opacity-100
          transition-all
          duration-300
        "
        onError={(e) => {
          e.currentTarget.style.display = "none";
        }}
      />
    </div>
  );
};

export default TechStack;
