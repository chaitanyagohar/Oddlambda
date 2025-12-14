import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    text: "Oddlambda didn't just build a website; they engineered a digital ecosystem. Our conversion rates doubled within the first month of launch.",
    author: "Sarah Jenkins",
    role: "VP of Product",
    company: "FinTech Sol.",
    bg: "bg-[#0a0a0a]", 
    border: "border-white/10"
  },
  {
    id: 2,
    text: "The level of technical precision is unmatched. They optimized our WebGL rendering to run smoothly on devices we didn't think possible.",
    author: "Marcus Thorne",
    role: "Founder",
    company: "Horizon Ventures",
    bg: "bg-[#0f0f0f]",
    border: "border-white/10"
  },
  {
    id: 3,
    text: "A true partnership. They pushed back on our bad ideas and doubled down on the good ones. The result is a brand identity that feels 5 years ahead.",
    author: "Elena Rodriguez",
    role: "CMO",
    company: "Luxe Interiors",
    bg: "bg-[#141414]",
    border: "border-[#46cef6]/30" // Subtle highlight for the last one
  }
];

const Card = ({ i, data, progress, range, targetScale, setHovered }) => {
  // Use the parent's scroll progress to drive the scale animation for the stacking effect
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div className="h-screen flex items-center justify-center sticky top-0">
      <motion.div 
        style={{ scale, top: `calc(-5vh + ${i * 25}px)` }} 
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={`relative flex flex-col w-full max-w-2xl h-[50vh] md:h-[60vh] rounded-3xl p-8 md:p-12 origin-top border ${data.border} ${data.bg} shadow-2xl overflow-hidden`}
      >
         {/* Background Texture */}
         <div className="absolute inset-0 opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
         
         <div className="relative z-10 h-full flex flex-col justify-between">
            <div className="flex justify-between items-start">
               <Quote className="text-[#46cef6] w-10 h-10 md:w-14 md:h-14 opacity-80" />
               <div className="flex gap-1">
                 {[...Array(5)].map((_, idx) => (
                   <Star key={idx} size={16} className="fill-[#46cef6] text-[#46cef6]" />
                 ))}
               </div>
            </div>

            <h3 className="text-xl md:text-3xl lg:text-4xl font-medium leading-tight text-white tracking-tight">
              "{data.text}"
            </h3>

            <div className="flex items-center gap-4 pt-8 border-t border-white/10">
               <div className="w-10 h-10 rounded-full bg-gradient-to-br from-white/20 to-white/5 flex items-center justify-center font-bold text-white">
                 {data.author.charAt(0)}
               </div>
               <div>
                  <p className="text-white font-bold uppercase tracking-wider text-sm">{data.author}</p>
                  <p className="text-neutral-500 font-mono text-xs">{data.role}, {data.company}</p>
               </div>
            </div>
         </div>
      </motion.div>
    </div>
  )
}

const Testimonials = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  });

  // Custom Cursor Logic
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
    <section ref={container} className="relative bg-[#030303] w-full">
      <div className="max-w-[95rem] mx-auto flex flex-col lg:flex-row">
          
          {/* Left Column: Sticky Title */}
          <div className="lg:w-[45%] h-[50vh] lg:h-screen sticky top-0 flex flex-col justify-center px-6 md:px-12 lg:pl-20 z-0">
             <div className="relative">
                <span className="text-[#46cef6] font-mono text-xs tracking-[0.3em] uppercase block mb-6">
                    Social Proof
                </span>
                <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tighter leading-[0.9] mb-8">
                    CLIENT <br/> <span className="text-neutral-600">STORIES.</span>
                </h2>
                <p className="text-neutral-400 text-lg max-w-sm leading-relaxed">
                    Don't take our word for it. Here is what the industry leaders have to say about our impact.
                </p>
             </div>
          </div>

          {/* Right Column: Stacked Cards */}
          <div className="lg:w-[55%] relative z-10 px-4 md:px-0">
            {testimonials.map((project, i) => {
              // Calculate scale target: each subsequent card is slightly smaller when it goes "behind"
              const targetScale = 1 - ( (testimonials.length - i) * 0.05 );
              return (
                <Card 
                  key={i} 
                  i={i} 
                  data={project} 
                  progress={scrollYProgress} 
                  range={[i * 0.25, 1]} 
                  targetScale={targetScale}
                  setHovered={setIsHovered}
                />
              )
            })}
          </div>
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