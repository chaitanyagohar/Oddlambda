import React, { useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Terminal } from "lucide-react";

const navLinks = [
  { title: "Home", href: "#" },
  { title: "Work", href: "#work" },
  { title: "Expertise", href: "#expertise" },
  { title: "Process", href: "#process" },
  { title: "Contact", href: "#contact" }
];

const socials = [
  { name: "Instagram", href: "#" },
  { name: "LinkedIn", href: "#" },
  { name: "Twitter", href: "#" },
  { name: "Behance", href: "#" }
];

/* =========================
   Animated Hamburger Icon
========================= */
const Hamburger = ({ isOpen }) => {

  const line = "absolute h-[2px] w-5 bg-black rounded-full";

  return (
    <div className="relative w-8 h-8 flex items-center justify-center">
      <motion.span
        className={line}
        animate={{
          rotate: isOpen ? 45 : 0,
          y: isOpen ? 0 : -6
        }}
        transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
      />

      <motion.span
        className={line}
        animate={{
          opacity: isOpen ? 0 : 1,
          x: isOpen ? 10 : 0
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      />

      <motion.span
        className={line}
        animate={{
          rotate: isOpen ? -45 : 0,
          y: isOpen ? 0 : 6
        }}
        transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
      />
    </div>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();

  /* Logo scale on scroll */
  const logoScale = useTransform(scrollY, [0, 100], [1.5, 1]);

  const menuVariants = {
    closed: {
      y: "-100%",
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
    },
    open: {
      y: "0%",
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
    }
  };
const linkVariants = {
  closed: { y: 100, opacity: 0 },
  open: (i) => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: 0.4 + i * 0.1,
      ease: [0.76, 0, 0.24, 1]
    }
  })
};


  const sidebarVariants = {
    closed: { opacity: 0, x: 20 },
    open: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, delay: 0.6, ease: "easeOut" }
    }
  };

  return (
    <>
      {/* =========================
         Top Navigation Bar
      ========================= */}
      <nav className="fixed top-0 left-0 w-full z-[100] px-6 py-6 md:px-12 flex justify-between items-center mix-blend-difference text-white">
        
        {/* Logo */}
        <motion.a
          href="#"
          style={{ scale: logoScale, originX: 0 }}
          className="text-lg font-bold tracking-tight flex items-center gap-2 z-[101]"
        >
          <div className="relative flex items-center justify-center w-8 h-8 bg-white text-black rounded-full overflow-hidden">
            <Terminal size={16} className="relative z-10" />
            <div className="absolute inset-0 bg-gradient-to-tr from-gray-200 to-white" />
          </div>
          <span className="tracking-widest text-sm font-mono">ODDLAMBDA</span>
        </motion.a>

        {/* Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-3 text-sm font-mono uppercase tracking-widest z-[101] group"
        >
          {/* Animated Text */}
          <span className="hidden md:block overflow-hidden h-[1em]">
            <AnimatePresence mode="wait">
              <motion.span
                key={isOpen ? "close" : "menu"}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="block group-hover:text-[#46cef6]"
              >
                {isOpen ? "Close" : "Menu"}
              </motion.span>
            </AnimatePresence>
          </span>

          {/* Hamburger */}
          <div className="w-8 h-8 flex items-center justify-center bg-white text-black rounded-full group-hover:bg-[#46cef6] transition-colors">
            <Hamburger isOpen={isOpen} />
          </div>
        </button>
      </nav>

      {/* =========================
         Fullscreen Menu
      ========================= */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 z-[90] bg-[#030303] overflow-y-auto"
          >
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

            <div className="relative z-10 w-full max-w-[95rem] mx-auto h-full flex flex-col md:flex-row pt-32 pb-12 px-6 md:px-12">

              {/* Navigation Links */}
              <div className="flex-1 flex flex-col justify-center">
                {navLinks.map((link, i) => (
                  <div key={i} className="overflow-hidden">
                    <motion.div custom={i} variants={linkVariants}>
                      <a
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="group flex items-baseline gap-6 text-5xl md:text-7xl lg:text-9xl font-bold tracking-tighter hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#46cef6] hover:to-white transition-all"
                      >
                        <span className="text-sm md:text-xl font-mono text-neutral-600 group-hover:text-[#46cef6] -translate-y-4 md:-translate-y-8">
                          0{i + 1}
                        </span>
                        {link.title}
                      </a>
                    </motion.div>
                  </div>
                ))}
              </div>

              {/* Sidebar */}
              <motion.div
                variants={sidebarVariants}
                className="md:w-[350px] lg:w-[450px] flex flex-col justify-end mt-16 md:mt-0 md:pl-12 md:border-l border-white/10"
              >
                <div className="space-y-12">
                  <div>
                    <h4 className="text-[#46cef6] font-mono text-xs uppercase tracking-widest mb-6">
                      Connect
                    </h4>
                    {socials.map((social, i) => (
                      <a
                        key={i}
                        href={social.href}
                        className="flex justify-between items-center text-neutral-400 hover:text-white border-b border-white/5 pb-2"
                      >
                        {social.name}
                        <ArrowUpRight size={16} className="opacity-0 group-hover:opacity-100 text-[#46cef6]" />
                      </a>
                    ))}
                  </div>

                  <div>
                    <h4 className="text-[#46cef6] font-mono text-xs uppercase tracking-widest mb-6">
                      Contact
                    </h4>
                    <a
                      href="mailto:hello@oddlambda.com"
                      className="block text-2xl md:text-3xl font-bold hover:text-[#46cef6]"
                    >
                      hello@oddlambda.com
                    </a>
                    <p className="text-neutral-500 text-sm mt-4">
                      Lisbon, Portugal<br />Working Worldwide
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
