"use client";

import React from "react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className="relative h-[80vh] md:h-[70vh] lg:h-[60vh] w-full"
      style={{ clipPath: "inset(0 0 0 0)" }}
    >
      <footer className="fixed bottom-0 left-0 w-full h-[80vh] md:h-[70vh] lg:h-[60vh] bg-[#EAE6CD] overflow-hidden flex items-center -z-10">

        {/* Background Wordmark */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
          <span className="font-corp text-[16vw] md:text-[18vw] lg:text-[20vw] font-bold uppercase tracking-[-0.02em] text-[#0a0a0a]/5 leading-none">
            ODDLAMBDA
          </span>
        </div>

        <div className="relative max-w-[1400px] mx-auto px-5 md:px-8 lg:px-10 w-full py-10 lg:py-0">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 lg:gap-20 items-center">

            {/* LEFT: Brand / Quote */}
            <div className="space-y-6 md:space-y-8 text-center lg:text-left">

              <h2 className="m-0 font-corp text-[9vw] sm:text-[7vw] md:text-[6vw] lg:text-[4.5vw] font-bold uppercase tracking-[-0.04em] text-[#0a0a0a] leading-[0.85]">
                Building digital pipelines <br className="hidden sm:block" />
                that dominate markets.
              </h2>

              <p className="text-[15px] sm:text-[16px] md:text-[18px] font-medium text-[#0a0a0a]/75 max-w-md md:max-w-xl mx-auto lg:mx-0 leading-[1.5]">
                "Great software is not defined by trends, but by clarity,
                discipline, and relentless attention to detail."
              </p>

              <p className="font-mono text-[11px] sm:text-[12px] md:text-[13px] uppercase tracking-widest text-[#0a0a0a]/55">
                — OddLambda Philosophy
              </p>
            </div>

            {/* RIGHT: Navigation / Meta */}
            <div className="flex flex-col items-center lg:items-end space-y-10 md:space-y-12">

              {/* Navigation */}
              <nav className="flex flex-wrap justify-center lg:justify-end gap-x-6 sm:gap-x-10 gap-y-4 font-mono text-[11px] sm:text-[12px] uppercase tracking-[0.12em] text-[#0a0a0a]/70">
                
                <a
                  href="#home"
                  className="hover:text-[#0a0a0a] transition-colors"
                >
                  Home
                </a>

                <a
                  href="#about"
                  className="hover:text-[#0a0a0a] transition-colors"
                >
                  About
                </a>

                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#0a0a0a] transition-colors"
                >
                  Instagram
                </a>

                <a
                  href="#contact"
                  className="hover:text-[#0a0a0a] transition-colors"
                >
                  Contact
                </a>

                <button
                  onClick={scrollToTop}
                  className="hover:text-[#0a0a0a] transition-colors uppercase tracking-[0.12em]"
                >
                  Back to Top
                </button>
              </nav>

              {/* Tagline Block */}
              <div className="text-center lg:text-right space-y-2 md:space-y-3">

                <p className="font-corp text-[#0a0a0a] text-[20px] md:text-[25px] font-bold uppercase tracking-tight m-0">
                  Design. Engineering. Growth.
                </p>

                <p className="text-[#0a0a0a]/70 text-[14px] md:text-[15px] font-medium max-w-xs md:max-w-sm mx-auto lg:mx-0 leading-[1.55]">
                  We collaborate with founders and teams to transform complex
                  ideas into scalable, resilient digital platforms.
                </p>
              </div>

              {/* Legal */}
              <div className="flex flex-wrap justify-center lg:justify-end items-center gap-3 sm:gap-4 font-mono text-[11px] sm:text-[12px] uppercase tracking-[0.12em] text-[#0a0a0a]/55">

                <p className="m-0">
                  © {new Date().getFullYear()} Chaitanya Gohar
                </p>

                <span className="hidden sm:block">|</span>

                <a
                  href="/privacy"
                  className="hover:text-[#0a0a0a] transition-colors"
                >
                  Privacy
                </a>

                <span>|</span>

                <a
                  href="/terms"
                  className="hover:text-[#0a0a0a] transition-colors"
                >
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