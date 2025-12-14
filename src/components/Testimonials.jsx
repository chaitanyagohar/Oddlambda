import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    quote: "Oddlambda transformed our vague vision into a market-leading digital product. The attention to detail is obsessive.",
    author: "Sarah Jenkins",
    role: "VP of Product, FinTech Co.",
    theme: "dark"
  },
  {
    id: 2,
    quote: "We've worked with agencies in NY and London. None matched the speed and design fidelity we found here.",
    author: "Marcus Thorne",
    role: "Founder, Horizon Ventures",
    theme: "cyan"
  },
  {
    id: 3,
    quote: "Technical mastery meets high art. Our site loads instantly and looks like a movie. Conversion rates doubled.",
    author: "Elena Rodriguez",
    role: "CMO, Luxe Interiors",
    theme: "light"
  }
];

const Testimonials = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Map vertical scroll to horizontal movement
  // Shift -200vw to scroll through 3 full-screen sections
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-200vw"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-[#030303] border-t border-white/5">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex h-full w-[300vw]">
          {testimonials.map((t, i) => (
            <div 
              key={i} 
              className={`w-screen h-full flex flex-col justify-center px-6 md:px-20 lg:px-32 relative flex-shrink-0
                ${t.theme === 'cyan' ? 'bg-[#46cef6] text-black' : 
                  t.theme === 'light' ? 'bg-[#e0e0e0] text-black' : 
                  'bg-[#0a0a0a] text-white'}`}
            >
               {/* Content */}
               <div className="max-w-5xl relative z-10">
                 <Quote className={`w-16 h-16 mb-12 opacity-50 ${t.theme === 'dark' ? 'text-[#46cef6]' : 'text-current'}`} />
                 
                 <h3 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-16 tracking-tighter">
                   "{t.quote}"
                 </h3>
                 
                 <div className="flex items-center gap-6">
                    <div className={`h-px w-16 ${t.theme === 'dark' ? 'bg-[#46cef6]' : 'bg-current opacity-30'}`} />
                    <div>
                      <p className="text-xl font-bold tracking-widest uppercase">{t.author}</p>
                      <p className="text-sm font-mono opacity-60 mt-1">{t.role}</p>
                    </div>
                 </div>
               </div>
               
               {/* Decoration / Number */}
               <div className="absolute bottom-10 right-10 md:bottom-20 md:right-20 text-[15vw] font-black opacity-5 select-none font-mono leading-none">
                 0{t.id}
               </div>

               {/* Texture Overlay */}
               <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;