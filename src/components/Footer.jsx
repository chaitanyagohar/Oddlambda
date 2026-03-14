import React from "react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    // 1. Placeholder Wrapper: Responsive heights added to ensure enough room on mobile
    <div className="relative h-[85vh] md:h-[70vh] lg:h-[60vh] w-full" style={{ clipPath: "inset(0 0 0 0)" }}>
      
      {/* 2. Fixed Footer: Heights must exactly match the wrapper above */}
      <footer className="fixed bottom-0 left-0 w-full h-[85vh] md:h-[70vh] lg:h-[60vh] bg-[#FFFEF7] border-t border-stone-200 overflow-hidden flex items-center -z-10">

        {/* Background Wordmark */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
          <span className="text-[18vw] md:text-[22vw] font-bold tracking-tight text-stone-900/5 leading-none">
            ODDLAMBDA
          </span>
        </div>

        {/* Ambient Glow - Scaled down for mobile to prevent overwhelming the screen */}
        <div className="absolute top-1/4 md:top-1/3 left-[-20%] md:left-[-10%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-amber-200/30 rounded-full blur-[100px] md:blur-[140px]" />
        <div className="absolute bottom-1/4 md:bottom-1/3 right-[-20%] md:right-[-10%] w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-rose-200/25 rounded-full blur-[100px] md:blur-[140px]" />

        <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-24 w-full py-10 lg:py-0">

          {/* Reduced gap on smaller screens */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 lg:gap-20 items-center">

            {/* LEFT: Brand / Quote */}
            <div className="space-y-6 md:space-y-8 text-center lg:text-left">

              <h2 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-semibold text-stone-900 leading-tight">
                Building digital products <br className="hidden sm:block" />
                that stand the test of time.
              </h2>

              <p className="text-base sm:text-lg md:text-xl text-stone-600 max-w-md md:max-w-xl mx-auto lg:mx-0">
                “Great software is not defined by trends, but by clarity,
                discipline, and relentless attention to detail.”
              </p>

              <p className="text-xs sm:text-sm font-mono uppercase tracking-widest text-amber-700">
                — Oddlambda Philosophy
              </p>
            </div>

            {/* RIGHT: Navigation / Meta */}
            <div className="flex flex-col items-center lg:items-end space-y-10 md:space-y-12">

              {/* Navigation - Adjusted wrapping and gaps */}
              <nav className="flex flex-wrap justify-center lg:justify-end gap-x-6 sm:gap-x-10 gap-y-4 text-xs sm:text-sm font-mono uppercase tracking-widest text-stone-600">
                <a href="/" className="hover:text-stone-900 transition-colors">
                  Home
                </a>
                <a href="/about" className="hover:text-stone-900 transition-colors">
                  About
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-stone-900 transition-colors"
                >
                  Instagram
                </a>
                <a href="/contact" className="hover:text-stone-900 transition-colors">
                  Contact
                </a>
                <button
                  onClick={scrollToTop}
                  className="hover:text-stone-900 transition-colors"
                >
                  Back to Top
                </button>
              </nav>

              {/* Tagline Block */}
              <div className="text-center lg:text-right space-y-2 md:space-y-3">
                <p className="text-stone-700 text-base md:text-lg font-medium">
                  Design. Engineering. Growth.
                </p>
                <p className="text-stone-500 text-sm md:text-base max-w-xs md:max-w-sm mx-auto lg:mx-0">
                  We collaborate with founders and teams to transform complex
                  ideas into scalable, resilient digital platforms.
                </p>
              </div>

              {/* Legal - Flex wrap for tiny screens */}
              <div className="flex flex-wrap justify-center lg:justify-end items-center gap-3 sm:gap-4 text-[10px] sm:text-xs text-stone-500">
                <p>
                  © {new Date().getFullYear()} Oddlambda
                </p>
                <span className="text-stone-400 hidden sm:block">•</span>
                <a href="/privacy" className="hover:text-stone-900 transition-colors">
                  Privacy
                </a>
                <span className="text-stone-400">/</span>
                <a href="/terms" className="hover:text-stone-900 transition-colors">
                  Terms
                </a>
              </div>

            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}