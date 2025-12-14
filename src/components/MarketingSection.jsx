import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Target, TrendingUp, MousePointerClick, Search, Zap } from 'lucide-react';

const ShineCard = ({ children, className = "" }) => {
  return (
    <motion.div 
      className={`group relative overflow-hidden bg-[#0a0a0a] border border-white/5 ${className}`}
      whileHover={{ scale: 0.995 }}
      transition={{ duration: 0.4 }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] pointer-events-none z-20" />
      <div className="absolute inset-0 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] pointer-events-none z-10 rounded-inherit" />
      {children}
    </motion.div>
  );
};

const MarketingSection = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section ref={container} className="py-32 px-6 relative z-10 bg-[#030303] overflow-hidden border-t border-white/5">
      {/* Background Decor: Radar Pulse */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-10 pointer-events-none">
         <div className="absolute inset-0 border border-[#46cef6] rounded-full animate-[ping_3s_linear_infinite]" />
         <div className="absolute inset-[200px] border border-[#46cef6] rounded-full animate-[ping_3s_linear_infinite_1s]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Left: Copy */}
          <div className="lg:w-1/2">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-6 flex items-center gap-3 text-[#46cef6] font-mono text-xs tracking-widest uppercase"
            >
              <Target size={16} />
              Growth Engine
            </motion.div>
            
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-6 leading-[0.9]">
              WE DON'T JUST <br/> BUILD THE CAR. <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#46cef6] to-white/50">
                WE POUR THE FUEL.
              </span>
            </h2>
            
            <p className="text-neutral-400 text-lg leading-relaxed max-w-md mb-8">
              Beautiful code creates potential. Marketing converts it into revenue. 
              We run precision campaigns on Google and Meta to ensure your product gets seen by the people who matter.
            </p>

            <div className="flex gap-4">
              <div className="flex flex-col gap-1">
                <span className="text-3xl font-bold text-white">3.5x</span>
                <span className="text-xs text-neutral-500 font-mono uppercase">Avg. ROAS</span>
              </div>
              <div className="w-px h-12 bg-white/10" />
              <div className="flex flex-col gap-1">
                <span className="text-3xl font-bold text-white">$2M+</span>
                <span className="text-xs text-neutral-500 font-mono uppercase">Ad Spend Managed</span>
              </div>
            </div>
          </div>

          {/* Right: Cards */}
          <div className="lg:w-1/2 grid gap-4 w-full">
            <motion.div style={{ y }} className="grid gap-4">
              
              {/* Google Ads Card */}
              <ShineCard className="rounded-2xl p-8 flex items-start gap-6 group">
                <div className="p-4 rounded-xl bg-[#46cef6]/10 text-[#46cef6] border border-[#46cef6]/20 group-hover:bg-[#46cef6] group-hover:text-black transition-colors">
                  <Search size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Google Ads (PPC)</h3>
                  <p className="text-neutral-400 text-sm mb-4">Capture high-intent traffic. We target users specifically looking for your solution right now.</p>
                  <div className="flex gap-2">
                    <span className="text-[10px] font-mono border border-white/10 px-2 py-1 rounded text-neutral-500">Search</span>
                    <span className="text-[10px] font-mono border border-white/10 px-2 py-1 rounded text-neutral-500">Shopping</span>
                    <span className="text-[10px] font-mono border border-white/10 px-2 py-1 rounded text-neutral-500">Youtube</span>
                  </div>
                </div>
              </ShineCard>

              {/* Meta Ads Card */}
              <ShineCard className="rounded-2xl p-8 flex items-start gap-6 group">
                <div className="p-4 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20 group-hover:bg-purple-500 group-hover:text-white transition-colors">
                  <MousePointerClick size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Meta Ads</h3>
                  <p className="text-neutral-400 text-sm mb-4">Generate demand. We use advanced visual storytelling to stop the scroll on Instagram & Facebook.</p>
                  <div className="flex gap-2">
                    <span className="text-[10px] font-mono border border-white/10 px-2 py-1 rounded text-neutral-500">Retargeting</span>
                    <span className="text-[10px] font-mono border border-white/10 px-2 py-1 rounded text-neutral-500">Lookalike</span>
                    <span className="text-[10px] font-mono border border-white/10 px-2 py-1 rounded text-neutral-500">Reels</span>
                  </div>
                </div>
              </ShineCard>

              {/* Analytics Card */}
              <ShineCard className="rounded-2xl p-6 flex items-center justify-between">
                 <div className="flex items-center gap-4">
                    <div className="p-2 bg-green-500/10 text-green-400 rounded-lg"><TrendingUp size={20} /></div>
                    <span className="font-bold text-white">Conversion Tracking Setup</span>
                 </div>
                 <Zap size={16} className="text-[#46cef6] animate-pulse" />
              </ShineCard>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MarketingSection;