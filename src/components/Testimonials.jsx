import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    quote: "Oddlambda transformed our vague vision into a market-leading digital product. The attention to detail is obsessive.",
    author: "Yash Raikar",
    role: "Founder",
    company: "Personal Brand",
    theme: "dark"
  },
  {
    id: 2,
    quote: "They perfectly captured the essence of Ashiya. The site is a digital extension of our interior design philosophy—minimal, elegant, and functionally brilliant.",
    author: "Darshan Jade",
    role: "Principal Designer",
    company: "Ashiya Interiors",
    theme: "cyan"
  },
  {
    id: 3,
    quote: "We needed a high-converting machine, and they delivered. The modern styling combined with their strategic UX approach skyrocketed our client leads.",
    author: "Sarabjeet Singh",
    role: "CEO",
    company: "Drootle",
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

  // --- Custom Cursor Logic ---
  const [isHovered, setIsHovered] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Smooth spring physics for the cursor
  const cursorX = useSpring(mouseX, { stiffness: 150, damping: 15, mass: 0.1 });
  const cursorY = useSpring(mouseY, { stiffness: 150, damping: 15, mass: 0.1 });

  useEffect(() => {
    const manageMouseMove = (e) => {
      const { clientX, clientY } = e;
      mouseX.set(clientX);
      mouseY.set(clientY);
    }
    window.addEventListener("mousemove", manageMouseMove);
    return () => window.removeEventListener("mousemove", manageMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-[#030303] border-t border-white/5">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex h-full w-[300vw]">
          {testimonials.map((t, i) => (
            <div 
              key={i} 
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className={`w-screen h-full flex flex-col justify-center px-6 md:px-20 lg:px-32 relative flex-shrink-0 cursor-none
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
                      <p className="text-sm font-mono opacity-60 mt-1">{t.role}, {t.company}</p>
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

      {/* Floating Cursor "This Could Be You" */}
      <motion.div 
        className="fixed top-0 left-0 w-32 h-32 bg-[#46cef6] rounded-full flex items-center justify-center pointer-events-none z-[999] text-black font-bold text-center leading-none text-sm font-mono shadow-[0_0_40px_rgba(70,206,246,0.4)]"
        style={{ 
            x: cursorX, 
            y: cursorY, 
            translateX: "-50%", 
            translateY: "-50%" 
        }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ 
          scale: isHovered ? 1 : 0, 
          opacity: isHovered ? 1 : 0 
        }}
        transition={{ duration: 0.2 }}
      >
        THIS<br/>COULD BE<br/>YOU
      </motion.div>
    </section>
  );
};

export default Testimonials;