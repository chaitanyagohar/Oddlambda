import React, { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const { scrollY } = useScroll();
  const location = useLocation();
  const [hidden, setHidden] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [previousScroll, setPreviousScroll] = useState(0);

  // Active route detection
  const isAboutPage = location.pathname === "/about";
  const isHomePage = location.pathname === "/" || location.pathname === "";

  // Hover state (null means it stays anchored to the active route)
  const [hoveredNav, setHoveredNav] = useState(null);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileMenuOpen]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (!mobileMenuOpen) {
      if (latest > previousScroll && latest > 100) {
        setHidden(true);
      } else {
        setHidden(false);
      }
    }
    setPreviousScroll(latest);
  });

  const splitTransition = { duration: 0.4, ease: [0.16, 1, 0.3, 1] };
  const isNavHidden = hidden && !mobileMenuOpen;

  const navLinks = [
    { name: "Services", path: "/#services", isHash: true },
    { name: "Projects", path: "/projects", isHash: true },
    { name: "About", path: "/about", isHash: false },
  ];

  // If hovering an item, show on hovered. Otherwise snap to active page link.
  const activePill = hoveredNav !== null 
    ? hoveredNav 
    : (isAboutPage ? "About" : null);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 px-6 md:px-10 lg:px-14 py-6 md:py-8 flex items-center justify-between pointer-events-none overflow-hidden md:overflow-visible">
        
        {/* ========================================================
            LEFT: LOGO
        ======================================================== */}
        <motion.div
          variants={{
            visible: { x: 0, opacity: 1 },
            hidden: { x: -100, opacity: 0 },
          }}
          animate={isNavHidden ? "hidden" : "visible"}
          transition={splitTransition}
          className="pointer-events-auto"
        >
          <Link
            to="/"
            onClick={() => setMobileMenuOpen(false)}
            className="group relative flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-[#0a0a0a] text-[#EAE6CD] rounded-tl-xl rounded-br-xl overflow-hidden transition-all duration-300"
          >
            <span className="relative z-10 font-corp font-bold text-2xl md:text-3xl mt-1 group-hover:text-[#0a0a0a] transition-colors duration-300">
              O
            </span>
            <div className="absolute inset-0 bg-[#EAE6CD] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]" />
          </Link>
        </motion.div>

        {/* ========================================================
            CENTER: SLIDING HOVER & ACTIVE PILL NAV
        ======================================================== */}
        <motion.div
          variants={{
            visible: { y: 0, opacity: 1 },
            hidden: { y: -100, opacity: 0 },
          }}
          animate={isNavHidden ? "hidden" : "visible"}
          transition={splitTransition}
          onMouseLeave={() => setHoveredNav(null)}
          className="hidden md:flex items-center bg-[#0a0a0a] p-1.5 rounded-full border border-[#0a0a0a] shadow-[0px_8px_32px_rgba(0,0,0,0.15)] pointer-events-auto relative"
        >
          {navLinks.map((link) => {
            const isPillActive = activePill === link.name;
            const isHovered = hoveredNav === link.name;

            const content = (
              <>
                <span className="relative z-20 font-bold text-[14px] uppercase tracking-wider flex items-center gap-1.5 transition-colors duration-200">
                  {link.name}
                  {link.name === "Services" && (
                    <ChevronDown
                      size={16}
                      strokeWidth={2.5}
                      className={`transition-transform duration-300 ${
                        isHovered ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </span>

                {/* Shared Persistent Sliding Capsule */}
                {isPillActive && (
                  <motion.div
                    layoutId="navPillHover"
                    className="absolute inset-0 bg-[#EAE6CD] rounded-full z-10"
                    transition={{
                      type: "spring",
                      stiffness: 420,
                      damping: 32,
                    }}
                  />
                )}
              </>
            );

            const itemClasses = `relative px-6 py-2.5 rounded-full select-none cursor-pointer transition-colors duration-200 ${
              isPillActive ? "text-[#0a0a0a]" : "text-[#EAE6CD]"
            }`;

            return link.isHash ? (
              <a
                key={link.name}
                href={link.path}
                onMouseEnter={() => setHoveredNav(link.name)}
                className={itemClasses}
              >
                {content}
              </a>
            ) : (
              <Link
                key={link.name}
                to={link.path}
                onMouseEnter={() => setHoveredNav(link.name)}
                className={itemClasses}
              >
                {content}
              </Link>
            );
          })}
        </motion.div>

        {/* ========================================================
            RIGHT: CONTACT BUTTON / BURGER
        ======================================================== */}
        <motion.div
          variants={{
            visible: { x: 0, opacity: 1 },
            hidden: { x: 100, opacity: 0 },
          }}
          animate={isNavHidden ? "hidden" : "visible"}
          transition={splitTransition}
          className="pointer-events-auto flex items-center gap-4"
        >
          {/* Desktop Magnetic / Sliding Contact Button */}
          <a
            href="/#contact"
            className="group relative hidden md:flex items-center gap-4 bg-[#0a0a0a] text-[#EAE6CD] border border-[#0a0a0a] shadow-[0px_8px_32px_rgba(0,0,0,0.12)] rounded-full pr-7 pl-2 py-2 overflow-hidden transition-all duration-300"
          >
            <div className="absolute inset-0 bg-[#EAE6CD] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]" />

            <div className="relative z-10 w-11 h-11 rounded-full overflow-hidden shrink-0 bg-[#EAE6CD]/10 border border-[#EAE6CD]/20">
              <img 
                src="/me.jpeg" 
                alt="Oddlambda" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <span className="relative z-10 font-bold text-[14px] uppercase tracking-wider text-[#EAE6CD] group-hover:text-[#0a0a0a] transition-colors duration-300 mt-0.5">
              Contact
            </span>
          </a>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex flex-col items-center justify-center gap-[6px] w-14 h-14 bg-[#0a0a0a] border border-[#0a0a0a] rounded-full shadow-[0px_4px_24px_rgba(0,0,0,0.1)] overflow-hidden"
          >
            <motion.span
              animate={mobileMenuOpen ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="w-5 h-[2px] bg-[#EAE6CD] block rounded-full"
            />
            <motion.span
              animate={mobileMenuOpen ? { rotate: -45, y: -4 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="w-5 h-[2px] bg-[#EAE6CD] block rounded-full"
            />
          </button>
        </motion.div>
      </nav>

      {/* ========================================================
          MOBILE DRAWER
      ======================================================== */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-[#0a0a0a] flex flex-col px-6 pt-32 pb-8 md:hidden"
          >
            <div className="flex-1 flex flex-col justify-center gap-8">
              {[
                { name: "Services", path: "/services" },
                { name: "Projects", path: "/projects" },
                { name: "About", path: "/about" },
                { name: "Contact", path: "/contact" }
              ].map((item, i) => (
                <div key={item.name} className="overflow-hidden">
                  <motion.div
                    initial={{ opacity: 0, y: "100%" }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: "100%" }}
                    transition={{ 
                      duration: 0.5, 
                      delay: 0.2 + (i * 0.05), 
                      ease: [0.16, 1, 0.3, 1] 
                    }}
                  >
                    {item.path.startsWith("/#") ? (
                      <a
                        href={item.path}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block font-corp text-[13vw] font-bold uppercase tracking-[-0.04em] text-[#EAE6CD] leading-none"
                      >
                        {item.name}
                      </a>
                    ) : (
                      <Link
                        to={item.path}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block font-corp text-[13vw] font-bold uppercase tracking-[-0.04em] text-[#EAE6CD] leading-none"
                      >
                        {item.name}
                      </Link>
                    )}
                  </motion.div>
                </div>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-center justify-between border-t border-[#EAE6CD]/15 pt-6"
            >
              <span className="font-mono text-[13px] uppercase tracking-widest text-[#EAE6CD]/50">
                Oddlambda
              </span>
              <span className="font-mono text-[13px] uppercase tracking-widest text-[#EAE6CD]/50">
                Delhi, IN
              </span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;