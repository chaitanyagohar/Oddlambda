"use client";

import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

// --- IMAGES: High-performance, agency-focused assets ---
// Image 1: Code/Engineering (Representing Web Dev)
const img1 = "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"; 
// Image 2: Abstract Flow (Representing Design/Brand)
const img2 = "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=2069&auto=format&fit=crop"; 
// Image 3: Structure/Architecture (Representing Scale/Infrastructure)
const img3 = "https://static.vecteezy.com/system/resources/thumbnails/001/838/299/small_2x/abstract-silver-metallic-join-lines-on-white-background-geometric-triangle-gradient-shape-pattern-luxury-style-vector.jpg"; 

const Phrase = ({ children, progress, range, highlight }) => {
  // OPTIMIZATION: Removed blur filter for maximum performance ("Fast")
  const opacity = useTransform(progress, range, [0.1, 1]);
  const y = useTransform(progress, range, [15, 0]);

  return (
    <motion.span
      style={{ opacity, y }}
      className={`mr-2 md:mr-3 inline-block will-change-transform ${
        highlight ? "text-amber-400 font-semibold" : "text-stone-300"
      }`}
    >
      {children}
    </motion.span>
  );
};

const Description = () => {
  const container = useRef(null);
  
  // "smooth" scroll tracking
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"], 
  });

  // Parallax layers (Moving at different speeds for depth)
  const yImg1 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const yImg2 = useTransform(scrollYProgress, [0, 1], [0, -250]);
  const rotateImg = useTransform(scrollYProgress, [0, 1], [-2, 2]); // Subtle rotation

  const textPrimary = "Oddlambda is a senior-led web engineering agency building digital products that perform under real-world pressure.";
  const textSecondary = "We partner directly with founders, operators, and growth teams to design and develop experiences that convert, scale, and endure. Every decision is driven by clarity, performance, and measurable business outcomes.";

  const wordsPrimary = textPrimary.split(" ");
  const wordsSecondary = textSecondary.split(" ");

  // Keywords to highlight (Branding)
  const highlights = ["Oddlambda", "senior-led", "perform", "founders,", "convert,", "scale,", "performance,"];

  const getRange = (index, total, start, end) => {
    const step = (end - start) / total;
    return [start + index * step, start + (index + 1) * step];
  };

  return (
    <section
      ref={container}
      className="relative min-h-[120vh] flex flex-col justify-center bg-[#030303] overflow-hidden"
    >
      {/* ---------------- DECORATIVE BACKGROUND ---------------- */}
      {/* Vertical Grid Lines for Structure */}
      <div className="absolute left-6 md:left-20 top-0 bottom-0 w-px bg-white/5" />
      <div className="absolute right-6 md:right-20 top-0 bottom-0 w-px bg-white/5" />
      
      {/* Ambient Glows */}
      <div className="absolute top-[20%] left-[-10%] w-[600px] h-[600px] bg-emerald-900/10 rounded-full blur-[100px] pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-[20%] right-[-10%] w-[500px] h-[500px] bg-amber-900/10 rounded-full blur-[100px] pointer-events-none mix-blend-screen" />
      
      {/* Noise Overlay (Matching Hero) */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      {/* ---------------- PARALLAX IMAGES ---------------- */}
      
      {/* IMAGE 1: Top Right (Engineering/Code) */}
      <motion.div 
        style={{ y: yImg1, rotate: rotateImg }}
        className="absolute top-[5%] right-[2%] md:right-[10%] w-48 md:w-72 aspect-[3/4] z-0 opacity-100 transition-all duration-700 ease-out will-change-transform"
      >
        <div className="relative w-full h-full overflow-hidden border border-white/10 bg-stone-900">
             <img src={img1} alt="Engineering" className="w-full h-full object-cover opacity-80" />
             {/* Tech Overlay */}
             <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
             <div className="absolute bottom-4 left-4 text-[10px] font-mono text-emerald-400 tracking-widest">
                /// SYSTEM_CORE
             </div>
        </div>
      </motion.div>

      {/* IMAGE 2: Bottom Left (Structure/Scale) */}
      <motion.div 
        style={{ y: yImg2 }}
        className="absolute bottom-[5%] left-[2%] md:left-[5%] w-64 md:w-96 aspect-video z-0 opacity-40 grayscale mix-blend will-change-transform"
      >
         <img src={img3} alt="Infrastructure" className="w-full h-full object-cover" />
         <div className="absolute -top-6 left-0 text-[10px] font-mono text-stone-500 tracking-widest">FIG. 02 // INFRASTRUCTURE</div>
      </motion.div>

      {/* ---------------- CONTENT CONTAINER ---------------- */}
      <div className="relative z-10 max-w-7xl w-full mx-auto px-6 md:px-24 py-24">
        
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-20 opacity-60">
             <span className="text-xs font-mono text-amber-400 tracking-[0.2em] uppercase">// 01. Agency Profile</span>
             <div className="h-px w-12 bg-amber-400/50" />
        </div>

        <div className="flex flex-col gap-32">
            
            {/* PRIMARY STATEMENT (Headline) */}
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] text-white max-w-5xl tracking-tight">
              {wordsPrimary.map((word, i) => (
                <Phrase
                  key={i}
                  progress={scrollYProgress}
                  range={getRange(i, wordsPrimary.length, 0.1, 0.5)}
                  highlight={highlights.includes(word.replace(/[.,]/g, ""))}
                >
                  {word}
                </Phrase>
              ))}
            </h2>

            {/* SECONDARY STATEMENT + IMAGE 3 (Design) */}
            <div className="flex flex-col md:flex-row items-start justify-end gap-16 relative">
                
                {/* Image 3: Small floating accent (Design) */}
                <div className="hidden md:block absolute left-0 top-2 w-48 aspect-square border border-white/10 p-1 bg-black/50 backdrop-blur-sm">
                    <img src={img2} alt="Design" className="w-full h-full object-cover opacity-80 grayscale-[0.5]" />
                    <div className="absolute top-2 right-2 flex gap-1">
                        <div className="w-1 h-1 bg-white/50 rounded-full" />
                        <div className="w-1 h-1 bg-white/50 rounded-full" />
                        <div className="w-1 h-1 bg-white/50 rounded-full" />
                    </div>
                    <div className="absolute bottom-2 left-2 text-[8px] font-mono text-amber-400">DESIGN_LANG.JSX</div>
                </div>

                <p className="text-lg md:text-2xl font-light leading-relaxed text-stone-400 max-w-2xl">
                {wordsSecondary.map((word, i) => (
                    <Phrase
                    key={i}
                    progress={scrollYProgress}
                    range={getRange(i, wordsSecondary.length, 0.5, 0.9)}
                    highlight={highlights.includes(word.replace(/[.,]/g, ""))}
                    >
                    {word}
                    </Phrase>
                ))}
                </p>
            </div>

        </div>
      </div>
    </section>
  );
};

export default Description;