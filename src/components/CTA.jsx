import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const ctaProjects = [
  { img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop", name: "Neon Verse" },
  { img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop", name: "Tech Lab" },
  { img: "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=2070&auto=format&fit=crop", name: "Ski Lodge" },
  { img: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2700&auto=format&fit=crop", name: "Urban Loft" },
  { img: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=2564&auto=format&fit=crop", name: "Modernist" }
];

const CTA = () => {
  const containerRef = useRef(null);
  const [hoveredCol, setHoveredCol] = useState(null);
  
  // Custom Cursor Logic
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springConfig = { stiffness: 100, damping: 15, mass: 0.1 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const rect = containerRef.current.getBoundingClientRect();
    mouseX.set(clientX - rect.left);
    mouseY.set(clientY - rect.top);
  };

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative h-screen w-full bg-[#030303] overflow-hidden cursor-none border-t border-white/5"
    >
      {/* 1. Columns Grid Background */}
      <div className="absolute inset-0 grid grid-cols-5 z-0">
        {ctaProjects.map((project, index) => (
          <div 
            key={index}
            onMouseEnter={() => setHoveredCol(index)}
            onMouseLeave={() => setHoveredCol(null)}
            className="relative w-full h-full border-r border-white/5 transition-all duration-500 ease-in-out group"
          >
            {/* The Image (Revealed on hover) */}
            <div 
              className={`absolute inset-0 bg-cover bg-center transition-opacity duration-500 ease-out
                ${hoveredCol === index ? 'opacity-100' : 'opacity-0'}`}
              style={{ backgroundImage: `url(${project.img})` }}
            >
              <div className="absolute inset-0 bg-black/20" />
            </div>
            
            {/* Darken other columns */}
            <div className={`absolute inset-0 bg-black transition-opacity duration-500 
                ${hoveredCol !== null && hoveredCol !== index ? 'opacity-80' : 'opacity-0'}`} 
            />
          </div>
        ))}
      </div>

      {/* 2. Main Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-10 mix-blend-difference">
        <span className="text-[#46cef6] font-mono text-xs tracking-[0.3em] uppercase mb-6 animate-pulse">
          Get Started
        </span>
        <h2 className="text-8xl md:text-[10vw] font-black tracking-tighter text-white leading-[0.8] text-center">
          LET'S MAKE <br/>
          THINGS HAPPEN.
        </h2>
      </div>

      {/* 3. Cursor Follower */}
      <motion.div
        style={{ left: smoothX, top: smoothY }}
        className="absolute top-0 left-0 w-32 h-32 -ml-16 -mt-16 bg-[#46cef6] rounded-full flex items-center justify-center pointer-events-none z-20 mix-blend-normal shadow-[0_0_30px_#46cef6]"
        initial={{ scale: 0 }}
        animate={{ scale: hoveredCol !== null ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="text-black font-bold font-mono text-xs uppercase tracking-widest flex flex-col items-center gap-1">
          <span>View</span>
          <span>Project</span>
        </div>
      </motion.div>

      {/* 4. Static Button */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30">
         <a href="#contact" className="group relative flex items-center gap-3 px-8 py-4 bg-black/50 backdrop-blur-md border border-white/20 rounded-full hover:bg-white hover:text-black transition-all duration-300">
           <span className="font-mono text-xs uppercase tracking-widest">Start Your Project</span>
           <ArrowUpRight size={16} />
         </a>
      </div>
    </section>
  );
};

export default CTA;