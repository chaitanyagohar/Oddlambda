import React from "react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    // 1. Placeholder Wrapper: Ye document flow mein jagah banata hai
    <div className="relative h-[60vh] w-full" style={{ clipPath: "inset(0 0 0 0)" }}>
      
      {/* 2. Fixed Footer: Ye screen ke bottom par piche chipka rehta hai */}
      <footer className="fixed bottom-0 left-0 w-full h-[60vh] bg-[#FFFEF7] border-t border-stone-200 overflow-hidden flex items-center -z-10">

        {/* Background Wordmark */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
          <span className="text-[22vw] font-bold tracking-tight text-stone-900/5 leading-none">
            ODDLAMBDA
          </span>
        </div>

        {/* Ambient Glow */}
        <div className="absolute top-1/3 left-[-10%] w-[500px] h-[500px] bg-amber-200/30 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/3 right-[-10%] w-[400px] h-[400px] bg-rose-200/25 rounded-full blur-[140px]" />

        <div className="relative max-w-7xl mx-auto px-6 md:px-24 w-full">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

            {/* LEFT: Brand / Quote */}
            <div className="space-y-8 text-center lg:text-left">

              <h2 className="text-4xl md:text-5xl xl:text-6xl font-semibold text-stone-900 leading-tight">
                Building digital products <br />
                that stand the test of time.
              </h2>

              <p className="text-lg md:text-xl text-stone-600 max-w-xl mx-auto lg:mx-0">
                “Great software is not defined by trends, but by clarity,
                discipline, and relentless attention to detail.”
              </p>

              <p className="text-sm font-mono uppercase tracking-widest text-amber-700">
                — Oddlambda Philosophy
              </p>
            </div>

            {/* RIGHT: Navigation / Meta */}
            <div className="flex flex-col items-center lg:items-end space-y-12">

              {/* Navigation */}
              <nav className="flex flex-wrap justify-center lg:justify-end gap-x-10 gap-y-4 text-sm font-mono uppercase tracking-widest text-stone-600">

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
              <div className="text-center lg:text-right space-y-3">

                <p className="text-stone-700 text-lg font-medium">
                  Design. Engineering. Growth.
                </p>

                <p className="text-stone-500 max-w-sm">
                  We collaborate with founders and teams to transform complex
                  ideas into scalable, resilient digital platforms.
                </p>
              </div>

              {/* Legal */}
              <div className="flex items-center gap-4 text-xs text-stone-500">

                <p>
                  © {new Date().getFullYear()} Oddlambda
                </p>

                <span className="text-stone-400">•</span>

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