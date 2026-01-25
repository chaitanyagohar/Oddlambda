import { motion } from "framer-motion";

const logos = [
  "/public/logos/logo2bg.png",
  "/public/logos/drootle.png",
  "/public/logos/image-removebg-preview.png",
  "/logos/client4.svg",
  "/logos/client5.svg",
  "/logos/client6.svg",
];

export default function TrustedBy() {
  return (
    <section className="relative bg-[#050505] border-t border-white/5 py-16 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6">

        {/* Heading */}
        <p className="text-center text-xs font-mono uppercase tracking-widest text-neutral-500 mb-8">
          Trusted by businesses across India
        </p>

        {/* Slider */}
        <div className="relative">
          <motion.div
            className="flex gap-16 items-center"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              duration: 30,
              ease: "linear",
            }}
          >
            {[...logos, ...logos].map((logo, i) => (
              <div
                key={i}
                className="flex items-center justify-center min-w-[140px] opacity-100 transition"
              >
                
                <img
                  src={logo}
                  alt="Client logo"
                  className="h-16 w-auto object-contain opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </motion.div>

          {/* Edge fade */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#050505] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#050505] to-transparent" />
        </div>
      </div>
    </section>
  );
}