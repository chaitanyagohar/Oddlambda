import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Shared layout for Privacy Policy / Terms of Service.
// sections: [{ id, title, content: <JSX> }]
export default function LegalLayout({ label, title, updated, intro, sections }) {
  return (
    <main className="w-full bg-[#EAE6CD] text-[#0a0a0a] min-h-screen pt-28 md:pt-36 pb-24">
      {/* Header */}
      <section className="px-4 md:px-8 lg:px-12 mb-12 md:mb-20">
        <div className="w-full border-t border-[#0a0a0a]/20 pt-4 flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10 md:mb-14">
          <div className="flex items-center gap-2 font-mono text-[11px] md:text-[12px] uppercase tracking-widest text-[#0a0a0a]/60">
            <span className="w-2 h-2 rounded-full bg-[#0a0a0a]" />
            {label}
          </div>
          <div className="font-mono text-[11px] md:text-[12px] uppercase tracking-widest text-[#0a0a0a]/60">
            Last updated: {updated}
          </div>
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="font-corp text-[14vw] sm:text-[11vw] md:text-[9vw] lg:text-[7.5vw] font-bold uppercase tracking-[-0.04em] leading-[0.84] m-0"
        >
          {title}
        </motion.h1>

        <p className="mt-8 md:mt-10 max-w-3xl text-[16px] md:text-[19px] leading-[1.6] font-medium text-[#0a0a0a]/75">
          {intro}
        </p>
      </section>

      {/* Body */}
      <section className="px-4 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 border-t border-[#0a0a0a]/20 pt-10">
          {/* Contents */}
          <nav aria-label="Contents" className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <span className="font-mono text-[11px] uppercase tracking-widest text-[#0a0a0a]/50">
                Contents
              </span>
              <ol className="mt-5 space-y-2.5 list-none p-0 m-0">
                {sections.map((s, i) => (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      className="group flex gap-3 text-[14px] font-medium text-[#0a0a0a]/65 hover:text-[#0a0a0a] transition-colors"
                    >
                      <span className="font-mono text-[11px] pt-[3px] text-[#0a0a0a]/40">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="group-hover:underline underline-offset-4">{s.title}</span>
                    </a>
                  </li>
                ))}
              </ol>
            </div>
          </nav>

          {/* Sections */}
          <div className="lg:col-span-8 flex flex-col">
            {sections.map((s, i) => (
              <article
                key={s.id}
                id={s.id}
                className="scroll-mt-32 border-b border-[#0a0a0a]/10 py-8 first:pt-0 last:border-b-0"
              >
                <div className="flex items-baseline gap-4 mb-4">
                  <span className="font-mono text-[11px] text-[#0a0a0a]/40">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2 className="font-corp text-[24px] md:text-[30px] font-bold uppercase tracking-[-0.02em] leading-[1.05] m-0">
                    {s.title}
                  </h2>
                </div>
                <div className="legal-body pl-0 md:pl-9 text-[15px] md:text-[16px] leading-[1.75] text-[#0a0a0a]/80 space-y-4 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-2 [&_a]:underline [&_a]:underline-offset-4 [&_strong]:text-[#0a0a0a]">
                  {s.content}
                </div>
              </article>
            ))}

            <div className="mt-10 rounded-[20px] bg-[#0a0a0a] text-[#EAE6CD] p-8 md:p-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <p className="font-corp text-[26px] md:text-[32px] font-bold uppercase tracking-[-0.02em] leading-none m-0">
                  Questions?
                </p>
                <p className="mt-3 text-[15px] text-[#EAE6CD]/65 m-0">
                  Write to us and we'll get back to you.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href="mailto:hello@oddlambda.com"
                  className="inline-flex items-center rounded-full bg-[#EAE6CD] text-[#0a0a0a] px-6 py-3 font-mono text-[12px] uppercase tracking-widest hover:scale-[1.03] transition-transform"
                >
                  hello@oddlambda.com
                </a>
                <Link
                  to="/contact"
                  className="inline-flex items-center rounded-full border border-[#EAE6CD]/30 px-6 py-3 font-mono text-[12px] uppercase tracking-widest hover:bg-[#EAE6CD]/10 transition-colors"
                >
                  Contact page
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
