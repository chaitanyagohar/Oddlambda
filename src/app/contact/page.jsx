"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDownRight } from "lucide-react";

export default function ContactPage() {
  const [selectedService, setSelectedService] = useState("");
  const [otherText, setOtherText] = useState("");

  const services = ["Landing Page", "Website", "E-commerce", "Custom", "Others"];

  // Reusable Classes to match the strict editorial layout
  const inputRowClass = "flex flex-col md:flex-row md:items-start border-b border-[#0a0a0a]/15 py-5 transition-colors focus-within:border-[#0a0a0a]/50";
  const labelClass = "w-full md:w-[30%] font-bold text-[15px] md:text-[16px] text-[#0a0a0a] pt-1 mb-2 md:mb-0";
  const fieldClass = "w-full md:w-[70%] bg-transparent outline-none placeholder-[#0a0a0a]/30 text-[15px] md:text-[16px] text-[#0a0a0a]";

  return (
    <div className="min-h-screen bg-[#EAE6CD] text-[#0a0a0a] pt-32 px-6 md:px-10 lg:px-14 pb-24 selection:bg-[#0a0a0a] selection:text-[#EAE6CD]">
      <div className="max-w-[1600px] mx-auto">
        
        {/* ========================================================
            TOP HEADER
        ======================================================== */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0 items-start mb-16 lg:mb-20"
        >
          <div className="lg:col-span-8">
            <h1 className="font-corp text-[22vw] lg:text-[13vw] font-bold uppercase leading-[0.75] tracking-[-0.04em] m-0 p-0">
              CONTACT
            </h1>
          </div>
          
          <div className="lg:col-span-4 lg:pt-4">
            <p className="text-[18px] md:text-[22px] font-medium leading-[1.35] text-[#0a0a0a]/80 max-w-[400px]">
              Book a call or send me a message and we'll find out together how and if I can help you.
            </p>
          </div>
        </motion.div>

        {/* ========================================================
            BOTTOM SPLIT SECTION
        ======================================================== */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-2 w-full border-t border-[#0a0a0a]/20"
        >
          
          {/* ----------------------------------------------------
              LEFT COLUMN: CALL
          ---------------------------------------------------- */}
          <div className="lg:border-r border-[#0a0a0a]/20 py-10 lg:py-16 lg:pr-16 flex flex-col">
            
            <div className="flex items-start gap-3 mb-10">
              <ArrowDownRight size={44} strokeWidth={1.5} className="text-[#0a0a0a] mt-1" />
              <h2 className="font-corp text-6xl md:text-7xl lg:text-[5.5vw] font-bold uppercase tracking-tight leading-none">
                Call
              </h2>
            </div>

            <div className="border-t border-[#0a0a0a]/15 pt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
              <span className="font-medium text-[15px] text-[#0a0a0a]/80">
                100% free and non-binding
              </span>
              
              <a
                href="https://cal.com/oddlambda" 
                target="_blank" 
                rel="noreferrer"
                className="group relative inline-flex h-14 items-center gap-2.5 overflow-hidden rounded-[4px] bg-[#0a0a0a] px-4 text-[11px] font-bold uppercase tracking-widest text-[#EAE6CD] transition-transform hover:-translate-y-1 w-max"
              >
                <span className="absolute inset-0 origin-left scale-x-0 bg-[#EAE6CD] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100" />
                
                <span className="relative z-10 flex items-center gap-2.5 transition-colors duration-300 group-hover:text-[#0a0a0a]">
                  <span className="flex h-6 w-6 items-center justify-center overflow-hidden rounded-[2px] bg-[#EAE6CD] transition-transform duration-500 group-hover:rotate-[-6deg] group-hover:scale-110">
                    <img src="/me.jpeg" className="h-full w-full object-cover" alt="Profile" />
                  </span>
                  <span className="font-corp text-[12px] font-bold uppercase tracking-widest mt-0.5">
                    Book a Call
                  </span>
                </span>
              </a>
            </div>
          </div>

          {/* ----------------------------------------------------
              RIGHT COLUMN: MESSAGE FORM
          ---------------------------------------------------- */}
          <div className="py-10 lg:py-16 lg:pl-16 flex flex-col border-t lg:border-t-0 border-[#0a0a0a]/20">
            
            <div className="flex items-start gap-3 mb-10">
              <ArrowDownRight size={44} strokeWidth={1.5} className="text-[#0a0a0a] mt-1" />
              <h2 className="font-corp text-6xl md:text-7xl lg:text-[5.5vw] font-bold uppercase tracking-tight leading-none">
                Message
              </h2>
            </div>

            {/* FORM SUBMIT INTEGRATION */}
            <form 
              action="https://formsubmit.co/chaitanyagohar@gmail.com" 
              method="POST" 
              className="flex flex-col w-full"
            >
              {/* FormSubmit Config */}
              <input type="hidden" name="_subject" value="New Oddlambda Agency Inquiry!" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value="https://oddlambda.com/thank-you" />
              <input type="hidden" name="Project Type" value={selectedService === "Others" ? otherText : selectedService} />

              <div className={inputRowClass}>
                <label className={labelClass}>Name*</label>
                <input type="text" name="Name" placeholder="Name" className={fieldClass} required />
              </div>

              <div className={inputRowClass}>
                <label className={labelClass}>Email*</label>
                <input type="email" name="Email" placeholder="Email" className={fieldClass} required />
              </div>

              <div className={inputRowClass}>
                <label className={labelClass}>Phone</label>
                <input type="tel" name="Phone" placeholder="Phone" className={fieldClass} />
              </div>

              {/* Interactive Pill Selection */}
              <div className={inputRowClass}>
                <label className={labelClass}>Project Type*</label>
                <div className="w-full md:w-[70%] flex flex-wrap gap-2">
                  {services.map((srv) => (
                    <button
                      key={srv}
                      type="button"
                      onClick={() => setSelectedService(srv)}
                      className={`px-4 py-2 text-[12px] md:text-[13px] font-mono font-bold uppercase tracking-widest border transition-all duration-300 rounded-[2px] ${
                        selectedService === srv
                          ? "bg-[#0a0a0a] text-[#EAE6CD] border-[#0a0a0a]"
                          : "bg-transparent text-[#0a0a0a] border-[#0a0a0a]/20 hover:border-[#0a0a0a]/50"
                      }`}
                    >
                      {srv}
                    </button>
                  ))}

                  <AnimatePresence>
                    {selectedService === "Others" && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="w-full mt-3 overflow-hidden"
                      >
                        <input
                          type="text"
                          placeholder="Please specify your requirement..."
                          value={otherText}
                          onChange={(e) => setOtherText(e.target.value)}
                          className="w-full bg-transparent outline-none placeholder-[#0a0a0a]/30 text-[15px] md:text-[16px] text-[#0a0a0a] pb-2 border-b border-[#0a0a0a]/20 focus:border-[#0a0a0a]/50 transition-colors"
                          required
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              <div className={inputRowClass}>
                <label className={labelClass}>Message*</label>
                <textarea 
                  name="Message"
                  placeholder="Message" 
                  rows={1}
                  className={`${fieldClass} resize-none min-h-[40px]`} 
                  required 
                />
              </div>

              {/* Form Submit Area */}
              <div className="flex flex-col md:flex-row mt-6">
                <div className="hidden md:block md:w-[30%]"></div>
                <div className="w-full md:w-[70%] flex flex-col items-end">
                  <button 
                    type="submit"
                    className="w-full bg-[#0a0a0a]/25 hover:bg-[#0a0a0a] text-[#EAE6CD] font-corp font-bold text-lg md:text-xl py-4 transition-colors duration-300 uppercase tracking-widest rounded-sm"
                  >
                    Send
                  </button>
                  <span className="text-[13px] font-medium text-[#0a0a0a]/60 mt-3">
                    100% free and non-binding
                  </span>
                </div>
              </div>

            </form>
          </div>

        </motion.div>
      </div>
    </div>
  );
}