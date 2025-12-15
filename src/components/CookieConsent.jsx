import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie } from 'lucide-react';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already consented
    const consent = localStorage.getItem('oddlambda-consent');
    if (!consent) {
      // Delay showing it slightly for a smoother entry after load
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
          initial={{ scale: 0, rotate: 10, opacity: 0 }}
          animate={{ scale: 1, rotate: 0, opacity: 1 }}
          exit={{ scale: 0, rotate: 10, opacity: 0 }}
          transition={{ 
            type: "spring", 
            stiffness: 260, 
            damping: 20, 
            delay: 0.5 
          }}
          className="fixed bottom-8 left-8 z-[100] origin-bottom-left"
        >
          <div className="bg-[#46cef6] w-64 p-6 rounded-lg shadow-[0_20px_50px_rgba(70,206,246,0.3)] flex flex-col items-center text-center gap-4 border-2 border-white/10 relative overflow-hidden">
             
             {/* Decorative shine */}
             <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/40 to-transparent pointer-events-none" />

             <div className="relative z-10 flex flex-col items-center gap-2">
               {/* Animated Icon */}
               <motion.div 
                 animate={{ rotate: [0, 10, -10, 0] }}
                 transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
               >
                 <Cookie size={48} className="text-black fill-current" />
               </motion.div>
               
               <p className="text-black font-bold text-lg leading-tight mt-2">
                 We use cookies.
               </p>
               <p className="text-black/70 text-xs font-mono font-medium leading-relaxed px-2">
                 Essential for the best experience. No tracking without consent.
               </p>
             </div>

             <button 
               onClick={handleAccept}
               className="relative z-10 w-full py-3 bg-black text-white font-bold text-xs uppercase tracking-widest rounded hover:scale-105 transition-transform"
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