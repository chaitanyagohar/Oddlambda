import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { ArrowDownRight } from 'lucide-react';

const AnimatedText = ({ children, className }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  
  return (
    <div ref={ref} className="overflow-hidden">
      <motion.div
        initial={{ y: "100%" }}
        animate={isInView ? { y: 0 } : { y: "100%" }}
        transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
        className={className}
      >
        {children}
      </motion.div>
    </div>
  );
};

const About = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section ref={container} className="relative bg-[#030303] text-white pt-32 pb-32 overflow-hidden">
      
      {/* 1. Massive Header - "Swiss Style" */}
      <div className="px-6 md:px-12 mb-24 border-b border-white/10 pb-12">
        <AnimatedText className="text-[11vw] leading-[0.8] font-bold tracking-tighter text-white">
          AGENCY
        </AnimatedText>
        <div className="flex justify-between items-end mt-4">
          <AnimatedText className="text-[11vw] leading-[0.8] font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-[#46cef6] to-white/20">
            PROFILE.
          </AnimatedText>
          <div className="hidden md:block mb-4 mr-4">
            <ArrowDownRight size={48} className="text-[#46cef6] animate-bounce" />
          </div>
        </div>
      </div>

      <div className="max-w-[90rem] mx-auto px-6 md:px-12">
        
        {/* 2. Editorial Layout: Meta Left, Content Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-32">
          
          {/* Left Column: Metadata */}
          <div className="lg:col-span-4 flex flex-col justify-between h-full">
             <div className="space-y-8 sticky top-32">
                <div>
                  <h4 className="text-neutral-500 font-mono text-xs uppercase tracking-widest mb-2">Location</h4>
                  <p className="text-xl">Lisbon, Portugal<br/>(Remote Worldwide)</p>
                </div>
                <div>
                  <h4 className="text-neutral-500 font-mono text-xs uppercase tracking-widest mb-2">Founded</h4>
                  <p className="text-xl">2024</p>
                </div>
                <div>
                  <h4 className="text-neutral-500 font-mono text-xs uppercase tracking-widest mb-2">Focus</h4>
                  <p className="text-xl">Digital Products<br/>Web Architecture<br/>Brand Identity</p>
                </div>
             </div>
          </div>

          {/* Right Column: Narrative */}
          <div className="lg:col-span-8">
            <div className="prose prose-invert prose-2xl max-w-none leading-relaxed">
              <AnimatedText>
                <p className="mb-12 text-white font-light">
                  Oddlambda is an independent design and development practice. We ignore trends in favor of <span className="text-[#46cef6]">timeless precision</span>.
                </p>
              </AnimatedText>
              <AnimatedText>
                <p className="text-neutral-400 text-xl md:text-2xl leading-relaxed">
                  Most agencies sell you a service. We sell an outcome. Born from a frustration with the "good enough" mentality, we exist for brands that refuse to compromise. We combine the agility of a freelance duo with the firepower of a full-stack engineering team.
                </p>
              </AnimatedText>
            </div>
          </div>
        </div>

        {/* 3. Cinematic Image Break */}
        <div className="relative w-full aspect-[21/9] overflow-hidden rounded-sm grayscale hover:grayscale-0 transition-all duration-700">
           <motion.div style={{ y }} className="absolute inset-0">
             <img 
               src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2301&auto=format&fit=crop" 
               alt="Studio Space" 
               className="w-full h-[120%] object-cover"
             />
           </motion.div>
           <div className="absolute inset-0 bg-black/20" />
        </div>

      </div>
    </section>
  );
};

export default About;