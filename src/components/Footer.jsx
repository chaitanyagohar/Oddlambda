import React from "react"
const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/5 bg-black text-center relative z-10">
      <div className="text-white font-bold text-[10vw] opacity-[0.03] select-none pointer-events-none overflow-hidden whitespace-nowrap leading-none">
        ODDLAMBDA
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-6">
        <div className="flex gap-8 text-neutral-500 text-sm font-mono uppercase tracking-widest">
          <a href="#" className="hover:text-white transition-colors">Instagram</a>
          <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-white transition-colors">Twitter</a>
        </div>
        <p className="text-neutral-600 text-xs">© {new Date().getFullYear()} Oddlambda Agency. All Rights Reserved.</p>
      </div>
    </footer>
  );
};
 
export default Footer; 