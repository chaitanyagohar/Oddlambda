"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How long does a project take?",
      answer:
        "Most projects take between 4 to 8 weeks from the initial kickoff to the final launch, depending on the complexity and scope of the digital pipeline.",
    },
    {
      question: "Do I need to prepare anything myself?",
      answer:
        "Before we start, it's helpful if you have your branding assets (logos, fonts), any existing copy, and a clear idea of your business goals. If you don't have these, we can figure them out together.",
    },
    {
      question: "What is Framer?",
      answer:
        "Framer (specifically Framer Motion) is an animation library for React that allows for complex, high-performance, and fluid animations, ensuring the website feels premium and interactive.",
    },
    {
      question: "Are there ongoing costs?",
      answer:
        "Aside from standard domain and hosting fees, there are no hidden ongoing costs. I also offer optional maintenance packages if you want me to handle future updates.",
    },
    {
      question: "What if I don't like the design?",
      answer:
        "No problem. I will revise the website until both you and I are 100% satisfied. However, keep in mind that the design must primarily appeal to your target audience, not just to you.",
    },
    {
      question: "Is the website mobile-optimized?",
      answer:
        "Absolutely. Every digital experience I build is inherently responsive, ensuring it looks and performs flawlessly across all devices, from massive desktop monitors to smartphones.",
    },
    {
      question: "What if I have no idea about technology at all?",
      answer:
        "That is completely fine. I handle all the technical heavy lifting and will guide you through the process in simple, plain language. You will also get a training session on how to manage your site post-launch.",
    },
    {
      question: "Do you also do SEO?",
      answer:
        "Yes. Technical SEO best practices (semantic HTML, fast load times, optimized metadata) are baked into every project from day one to ensure Google can easily crawl and rank your site.",
    },
  ];

  return (
    <section
      id="faq"
      className="relative z-20 w-full bg-[#EAE6CD] text-[#1A1512] pt-24 pb-32 md:pt-40 md:pb-48"
    >
      <div className="w-full px-4 md:px-8 lg:px-10">
        
        {/* ==========================================================
            SECTION HEADING
        ========================================================== */}
        <div className="mb-16 md:mb-24 w-full">
          <h2
            className="
              m-0
              font-corp
              text-[clamp(2.8rem,11.5vw,10rem)]
              font-bold
              uppercase
              leading-[0.85]
              tracking-[-0.05em]
              text-[#1A1512]
            "
          >
            Frequently Asked
            <br />
            Questions
          </h2>
        </div>

        {/* ==========================================================
            ACCORDION LIST
        ========================================================== */}
        <div className="w-full border-t border-[#1A1512]/15">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="w-full border-b border-[#1A1512]/15 transition-colors duration-300 hover:bg-[#1A1512]/5"
              >
                {/* QUESTION ROW */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full grid grid-cols-12 items-center py-6 md:py-8 cursor-pointer text-left focus:outline-none"
                >
                  {/* NUMBER (Left Aligned) */}
                  <div className="col-span-2 md:col-span-5">
                    <span className="font-mono text-[12px] md:text-[14px] text-[#1A1512]/40">
                      ({String(index + 1).padStart(2, "0")})
                    </span>
                  </div>

                  {/* QUESTION TEXT (Bumped up significantly) */}
                  <div className="col-span-8 md:col-span-6 pr-4">
                    <h3 className="text-[20px] md:text-[24px] lg:text-[28px] leading-[1.2] font-medium tracking-tight text-[#1A1512] m-0">
                      {faq.question}
                    </h3>
                  </div>

                  {/* ICON (Right Aligned) */}
                  <div className="col-span-2 md:col-span-1 flex justify-end">
                    <motion.div
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <Plus size={24} strokeWidth={1.5} className="text-[#1A1512]" />
                    </motion.div>
                  </div>
                </button>

                {/* EXPANDING ANSWER */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      {/* Grid perfectly aligns the answer under the question text */}
                      <div className="grid grid-cols-12 w-full pb-8 md:pb-10">
                        <div className="col-span-10 col-start-3 md:col-span-6 md:col-start-6 pr-4 md:pr-12">
                          <p className="text-[16px] md:text-[18px] leading-[1.6] text-[#1A1512]/60 m-0 font-medium">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;