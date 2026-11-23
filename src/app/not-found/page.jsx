import React from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const links = [
  { name: "Home", to: "/" },
  { name: "Services & Pricing", to: "/services" },
  { name: "Projects", to: "/projects" },
  { name: "Contact", to: "/contact" },
];

export default function NotFoundPage() {
  const { pathname } = useLocation();

  return (
    <main className="w-full bg-[#EAE6CD] text-[#0a0a0a] min-h-screen pt-28 md:pt-36 pb-24 px-4 md:px-8 lg:px-12">
      <div className="w-full border-t border-[#0a0a0a]/20 pt-4 flex items-center justify-between gap-4 mb-10 md:mb-16 font-mono text-[11px] md:text-[12px] uppercase tracking-widest text-[#0a0a0a]/60">
        <span className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#0a0a0a]" />
          Error 404
        </span>
        <span className="truncate max-w-[50%]">{pathname}</span>
      </div>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        aria-hidden="true"
        className="font-corp text-[38vw] md:text-[26vw] font-bold leading-[0.8] tracking-[-0.05em] m-0 text-transparent [-webkit-text-stroke:1px_#0a0a0a] md:[-webkit-text-stroke:2px_#0a0a0a]"
      >
        404
      </motion.p>

      <div className="mt-10 md:mt-14 grid grid-cols-1 md:grid-cols-12 gap-8 border-t border-[#0a0a0a]/20 pt-8">
        <div className="md:col-span-5">
          <h1 className="font-corp text-[34px] md:text-[48px] font-bold uppercase tracking-[-0.02em] leading-[1] m-0">
            This page doesn't exist.
          </h1>
          <p className="mt-4 text-[16px] md:text-[18px] leading-[1.6] font-medium text-[#0a0a0a]/70 max-w-md">
            The link may be old or mistyped. Here's where you can go instead.
          </p>
        </div>

        <nav aria-label="Helpful links" className="md:col-span-7 flex flex-col">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="group flex items-center justify-between border-b border-[#0a0a0a]/15 py-5 font-corp text-[26px] md:text-[34px] font-bold uppercase tracking-[-0.02em] hover:pl-3 transition-all duration-300"
            >
              {l.name}
              <ArrowUpRight className="opacity-40 group-hover:opacity-100 group-hover:rotate-45 transition-all duration-300" />
            </Link>
          ))}
        </nav>
      </div>
    </main>
  );
}
