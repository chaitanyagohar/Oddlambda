import React from "react";
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#EAE6CD] text-[#0a0a0a] pt-36 px-6 md:px-10 lg:px-14 pb-24">
      <div className="max-w-5xl mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Text & Info */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[#0a0a0a]/60 block mb-4">
                Get in Touch
              </span>
              <h1 className="font-corp text-[12vw] lg:text-[5.5vw] font-bold uppercase tracking-[-0.04em] leading-[0.9] mb-6">
                Let's talk.
              </h1>
              <p className="text-[16px] font-medium text-[#0a0a0a]/80 leading-relaxed mb-8">
                Book a call or send me a message and we'll find out together how and if I can help you.
              </p>
            </div>

            <div className="space-y-4 font-mono text-xs uppercase tracking-widest text-[#0a0a0a]/70 pt-8 border-t border-[#0a0a0a]/15">
              <div>
                <span className="block text-[#0a0a0a]/40 mb-1">Direct Email</span>
                <a href="mailto:hello@oddlambda.com" className="text-sm font-bold normal-case hover:underline text-[#0a0a0a]">
                  hello@oddlambda.com
                </a>
              </div>
              <div>
                <span className="block text-[#0a0a0a]/40 mb-1">Based In</span>
                <span className="text-sm font-bold normal-case text-[#0a0a0a]">
                  New Delhi, India / Worldwide
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Minimalist Form */}
          <div className="lg:col-span-7 bg-[#0a0a0a] text-[#EAE6CD] p-8 md:p-12 rounded-3xl shadow-2xl">
            <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="font-mono text-[11px] uppercase tracking-wider text-[#EAE6CD]/60">
                    Name *
                  </label>
                  <input 
                    type="text" 
                    placeholder="John Doe" 
                    className="bg-transparent border-b border-[#EAE6CD]/20 pb-3 text-sm text-[#EAE6CD] focus:outline-none focus:border-[#EAE6CD] transition-colors"
                    required 
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-mono text-[11px] uppercase tracking-wider text-[#EAE6CD]/60">
                    Email *
                  </label>
                  <input 
                    type="email" 
                    placeholder="john@example.com" 
                    className="bg-transparent border-b border-[#EAE6CD]/20 pb-3 text-sm text-[#EAE6CD] focus:outline-none focus:border-[#EAE6CD] transition-colors"
                    required 
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="font-mono text-[11px] uppercase tracking-wider text-[#EAE6CD]/60">
                    Phone
                  </label>
                  <input 
                    type="tel" 
                    placeholder="+91 00000 00000" 
                    className="bg-transparent border-b border-[#EAE6CD]/20 pb-3 text-sm text-[#EAE6CD] focus:outline-none focus:border-[#EAE6CD] transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-mono text-[11px] uppercase tracking-wider text-[#EAE6CD]/60">
                    Website
                  </label>
                  <input 
                    type="text" 
                    placeholder="yourwebsite.com" 
                    className="bg-transparent border-b border-[#EAE6CD]/20 pb-3 text-sm text-[#EAE6CD] focus:outline-none focus:border-[#EAE6CD] transition-colors"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2 pt-2">
                <label className="font-mono text-[11px] uppercase tracking-wider text-[#EAE6CD]/60">
                  Message *
                </label>
                <textarea 
                  rows="3" 
                  placeholder="Tell me about your project..." 
                  className="bg-transparent border-b border-[#EAE6CD]/20 pb-3 text-sm text-[#EAE6CD] focus:outline-none focus:border-[#EAE6CD] transition-colors resize-none"
                  required
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full mt-6 bg-[#EAE6CD] text-[#0a0a0a] font-corp font-bold uppercase tracking-wider py-4 rounded-full transition-transform duration-300 hover:scale-[1.01] active:scale-[0.99]"
              >
                Send Message →
              </button>

            </form>
          </div>

        </div>

      </div>
    </div>
  );
}