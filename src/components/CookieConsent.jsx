"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie } from 'lucide-react';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already consented
    const consent = localStorage.getItem('oddlambda-consent');
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('oddlambda-consent', 'true');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          initial={{ scale: 0.8, y: 20, opacity: 0 }}
          animate={{ scale: 1, y: 0, opacity: 1 }}
          exit={{ scale: 0.8, y: 20, opacity: 0 }}
          transition={{ 
            type: "spring", 
            stiffness: 260, 
            damping: 22, 
            delay: 0.5 
          }}
          className="fixed bottom-6 right-6 z-[100] origin-bottom-left"
        >
          <div className="bg-[#EAE6CD] text-[#0a0a0a] w-[280px] p-6 rounded-lg shadow-[0_20px_50px_rgba(0,0,0,0.18)] flex flex-col items-center text-center gap-4 border border-[#0a0a0a]/20 relative overflow-hidden">
             
             <div className="relative z-10 flex flex-col items-center gap-2">
               {/* Animated Icon */}
               <motion.div 
                 animate={{ rotate: [0, 10, -10, 0] }}
                 transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
               >
                 <Cookie size={36} className="text-[#0a0a0a]" strokeWidth={1.5} />
               </motion.div>
               
               <p className="font-corp font-bold text-xl uppercase tracking-tight text-[#0a0a0a] m-0">
                 We use cookies.
               </p>
               <p className="text-[#0a0a0a]/70 text-[11px] font-mono leading-relaxed px-1 m-0">
                 Essential for the best experience. No tracking without consent.
               </p>
             </div>

             <button 
               onClick={handleAccept}
               className="relative z-10 w-full py-3 bg-[#0a0a0a] text-[#EAE6CD] font-bold text-[11px] uppercase tracking-widest rounded-[4px] hover:scale-[1.02] transition-transform duration-200"
             >
               I Accept
             </button>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;