"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail, MapPin, Terminal } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [focusedField, setFocusedField] = useState(null);

  return (
    <section id="contact" className="relative py-32 px-6 bg-[#050505] text-white overflow-hidden">
      
      {/* ---------------- DECORATION ---------------- */}
      {/* Noise Texture */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      
      {/* Vertical Grid Lines */}
      <div className="absolute left-6 md:left-12 top-0 bottom-0 w-px bg-white/5 z-0" />
      <div className="absolute right-6 md:right-12 top-0 bottom-0 w-px bg-white/5 z-0" />

      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 md:gap-32">
        
        {/* ---------------- LEFT COLUMN: INFO ---------------- */}
        <div className="flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-8 opacity-60">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-xs font-mono text-emerald-500 tracking-[0.2em] uppercase">
                    Signal_Strong // Ready to Link
                </span>
            </div>

            <h2 className="text-5xl md:text-8xl font-bold tracking-tighter leading-none mb-8">
              INITIATE<br />
              <span className="text-stone-600">SEQUENCE.</span>
            </h2>
            
            <p className="text-lg text-stone-400 font-light max-w-md leading-relaxed mb-12">
              Ready to engineer your digital dominance? We are currently accepting new high-impact projects for Q1 2026.
            </p>
          </div>

          <div className="space-y-6">
            <a 
                href="mailto:hello@oddlambda.com" 
                className="group flex items-center gap-6 p-4 border border-white/5 bg-white/5 hover:bg-white/10 hover:border-amber-400/50 transition-all duration-300"
            >
                <div className="p-3 bg-black border border-white/10 text-amber-400 group-hover:scale-110 transition-transform">
                    <Mail size={20} />
                </div>
                <div>
                    <span className="block text-[10px] font-mono text-stone-500 uppercase tracking-widest mb-1">
                        Comms_Channel_01
                    </span>
                    <span className="text-xl font-medium text-white group-hover:text-amber-400 transition-colors">
                        hello@oddlambda.com
                    </span>
                </div>
            </a>

            <div className="flex items-center gap-6 p-4 border border-white/5 bg-white/5">
                <div className="p-3 bg-black border border-white/10 text-stone-400">
                    <MapPin size={20} />
                </div>
                <div>
                    <span className="block text-[10px] font-mono text-stone-500 uppercase tracking-widest mb-1">
                        Base_Coordinates
                    </span>
                    <span className="text-xl font-medium text-white">
                        New Delhi, India
                    </span>
                </div>
            </div>
          </div>
        </div>

        {/* ---------------- RIGHT COLUMN: FORM ---------------- */}
        <div className="relative">
            {/* Form Background Decor */}
            <div className="absolute -inset-4 border border-white/5 bg-white/[0.02] -z-10 skew-y-1" />

            <form className="space-y-8 p-2">
                
                {/* NAME INPUT */}
                <div className="group relative">
                    <label className="text-[10px] font-mono text-stone-500 uppercase tracking-widest ml-1 mb-2 block">
                        Identity
                    </label>
                    <input 
                        type="text" 
                        placeholder="Full Name" 
                        onFocus={() => setFocusedField('name')}
                        onBlur={() => setFocusedField(null)}
                        className="w-full bg-black/50 border-b border-white/10 py-4 px-2 text-xl text-white focus:outline-none transition-colors placeholder:text-white/10" 
                    />
                    {/* Animated Underline */}
                    <div className={`absolute bottom-0 left-0 h-[1px] bg-amber-400 transition-all duration-500 ${focusedField === 'name' ? 'w-full' : 'w-0'}`} />
                </div>

                {/* EMAIL INPUT */}
                <div className="group relative">
                    <label className="text-[10px] font-mono text-stone-500 uppercase tracking-widest ml-1 mb-2 block">
                        Return Address
                    </label>
                    <input 
                        type="email" 
                        placeholder="Email Address" 
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField(null)}
                        className="w-full bg-black/50 border-b border-white/10 py-4 px-2 text-xl text-white focus:outline-none transition-colors placeholder:text-white/10" 
                    />
                     <div className={`absolute bottom-0 left-0 h-[1px] bg-amber-400 transition-all duration-500 ${focusedField === 'email' ? 'w-full' : 'w-0'}`} />
                </div>

                {/* PROJECT TYPE */}
                <div className="group relative">
                    <label className="text-[10px] font-mono text-stone-500 uppercase tracking-widest ml-1 mb-2 block">
                        Objective
                    </label>
                    <div className="relative">
                        <select 
                            onFocus={() => setFocusedField('type')}
                            onBlur={() => setFocusedField(null)}
                            className="w-full bg-black/50 border-b border-white/10 py-4 px-2 text-xl text-stone-300 focus:outline-none appearance-none cursor-pointer rounded-none"
                        >
                            <option>Select Mission Type</option>
                            <option>Custom Development</option>
                            <option>E-Commerce Ecosystem</option>
                            <option>Brand Identity System</option>
                            <option>Complete Overhaul</option>
                        </select>
                        <ArrowUpRight className="absolute right-2 top-1/2 -translate-y-1/2 text-stone-600 pointer-events-none" size={16} />
                    </div>
                    <div className={`absolute bottom-0 left-0 h-[1px] bg-amber-400 transition-all duration-500 ${focusedField === 'type' ? 'w-full' : 'w-0'}`} />
                </div>

                {/* MESSAGE */}
                <div className="group relative">
                    <label className="text-[10px] font-mono text-stone-500 uppercase tracking-widest ml-1 mb-2 block">
                        Intel / Details
                    </label>
                    <textarea 
                        placeholder="Brief us on your requirements..." 
                        rows={4} 
                        onFocus={() => setFocusedField('msg')}
                        onBlur={() => setFocusedField(null)}
                        className="w-full bg-black/50 border-b border-white/10 py-4 px-2 text-xl text-white focus:outline-none resize-none placeholder:text-white/10" 
                    />
                    <div className={`absolute bottom-0 left-0 h-[1px] bg-amber-400 transition-all duration-500 ${focusedField === 'msg' ? 'w-full' : 'w-0'}`} />
                </div>
                
                {/* SUBMIT BUTTON */}
                <button className="
                    w-full bg-white text-black font-bold text-lg py-6 mt-8
                    hover:bg-amber-400 hover:scale-[1.01] active:scale-[0.99]
                    transition-all duration-300 
                    tracking-widest flex justify-between items-center px-8 group
                ">
                    <span>TRANSMIT_PROPOSAL</span>
                    <Terminal size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>

            </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;