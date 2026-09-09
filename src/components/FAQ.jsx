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
      question: "What kind of websites does Oddlambda build?",
      answer:
        "We build everything from high-converting landing pages and corporate websites to e-commerce stores and more advanced digital platforms. Our websites are custom-designed around your brand, audience, business goals, and the way your team actually operates.",
    },
    {
      question: "Which package is right for my business?",
      answer:
        "Speed Launch is designed for businesses that need a focused landing page quickly. Brand Ecosystem is built for companies that need a complete, scalable corporate or SaaS-style website. Commerce Scale is designed for businesses that need a complete e-commerce experience. If your requirements go beyond these packages, we can scope a custom solution.",
    },
    {
      question: "Can you build SaaS, CRM or custom software?",
      answer:
        "Yes. SaaS platforms, web applications, CRM systems, AI automation, business automation and custom software are part of our broader development services. These projects are quoted separately based on functionality, integrations, users, workflows and technical complexity.",
    },
    {
      question: "What technologies do you use?",
      answer:
        "Our websites commonly use modern technologies such as React and Next.js, with custom UI/UX, responsive development, performance optimization and smooth interactions. For e-commerce, we can work with Shopify or headless commerce depending on the requirements.",
    },
    {
      question: "Are the websites mobile responsive?",
      answer:
        "Absolutely. Every website we build is designed to work across mobile, tablet and desktop. We treat responsive behavior as part of the core design and development process rather than as an afterthought.",
    },
    {
      question: "Do you provide SEO?",
      answer:
        "Yes. SEO is built into our development process. Depending on the package, this can include on-page SEO, technical SEO, metadata, semantic structure, performance optimization, schema markup, product schema and category optimization for e-commerce websites.",
    },
    {
      question: "Can you integrate WhatsApp, forms, CRM and other tools?",
      answer:
        "Yes. We can connect websites with forms, email, WhatsApp, social platforms, CRMs, payment gateways, CMS platforms, inventory systems and other third-party services. The exact integrations depend on the project and package scope.",
    },
    {
      question: "How many revisions are included?",
      answer:
        "Speed Launch includes 2 revision rounds. Brand Ecosystem and Commerce Scale include 5 revision rounds. Larger custom projects are handled according to the scope and revision terms agreed during the proposal stage.",
    },
    {
      question: "What are the payment terms?",
      answer:
        "Our standard payment structure is 50% upfront and 50% on completion. For larger custom projects, the payment schedule can be structured around project milestones and will be agreed upon before development begins.",
    },
    {
      question: "Are domain, hosting and maintenance included?",
      answer:
        "Speed Launch includes a domain allowance of up to ₹1,000 along with deployment setup. Package-specific support and management are included according to the stated package terms. Hosting, third-party subscriptions and other external services may have separate costs depending on the project.",
    },
    {
      question: "How long does a project take?",
      answer:
        "Timelines depend on the size and complexity of the project. A focused landing page can move significantly faster than a multi-page website, e-commerce store, SaaS platform or custom application. Once we understand the scope, we provide a clear estimated timeline before development starts.",
    },
    {
      question: "What happens after the website is launched?",
      answer:
        "We don't consider launch the end of the relationship. Our packages include technical and management support according to their respective terms. We can also continue working with your business on improvements, new features, optimization and future digital requirements.",
    },
  ];

  return (
    <section
      id="faq"
      className="
        relative
        z-20
        w-full
        bg-[#EAE6CD]
        text-[#1A1512]
        pt-24
        pb-32
        md:pt-40
        md:pb-48
      "
    >
      <div className="w-full px-4 md:px-8 lg:px-10">

        {/* ==========================================================
            SECTION HEADING
        ========================================================== */}

        <div className="mb-16 w-full md:mb-24">
          <div className="mb-6 flex items-center gap-3 md:mb-8">
            <span
              className="
                border
                border-[#1A1512]/25
                px-2
                py-1
                font-mono
                text-[10px]
                font-bold
                uppercase
                tracking-[0.16em]
                text-[#1A1512]/55
                md:text-[11px]
              "
            >
              06
            </span>

            <span
              className="
                font-corp
                text-[13px]
                font-bold
                uppercase
                tracking-wider
                md:text-[15px]
              "
            >
              Frequently Asked
            </span>
          </div>

          <h2
            className="
              m-0
              max-w-[1200px]
              font-corp
              text-[clamp(2.8rem,11.5vw,10rem)]
              font-bold
              uppercase
              leading-[0.82]
              tracking-[-0.055em]
              text-[#1A1512]
            "
          >
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
                className="
                  w-full
                  border-b
                  border-[#1A1512]/15
                  transition-colors
                  duration-300
                  hover:bg-[#1A1512]/[0.035]
                "
              >
                {/* ==================================================
                    QUESTION ROW
                ================================================== */}

                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  className="
                    grid
                    w-full
                    cursor-pointer
                    grid-cols-12
                    items-center
                    py-6
                    text-left
                    focus:outline-none
                    md:py-8
                  "
                >
                  {/* NUMBER */}

                  <div className="col-span-2 md:col-span-5">
                    <span
                      className="
                        font-mono
                        text-[11px]
                        text-[#1A1512]/40
                        md:text-[13px]
                      "
                    >
                      ({String(index + 1).padStart(2, "0")})
                    </span>
                  </div>

                  {/* QUESTION */}

                  <div className="col-span-8 pr-4 md:col-span-6">
                    <h3
                      className="
                        m-0
                        font-medium
                        text-[18px]
                        leading-[1.2]
                        tracking-[-0.025em]
                        text-[#1A1512]
                        sm:text-[20px]
                        md:text-[24px]
                        lg:text-[28px]
                      "
                    >
                      {faq.question}
                    </h3>
                  </div>

                  {/* ICON */}

                  <div className="col-span-2 flex justify-end md:col-span-1">
                    <motion.div
                      animate={{
                        rotate: isOpen ? 45 : 0,
                      }}
                      transition={{
                        duration: 0.35,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className="
                        flex
                        h-8
                        w-8
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-[#1A1512]/15
                        md:h-9
                        md:w-9
                      "
                    >
                      <Plus
                        size={18}
                        strokeWidth={1.5}
                        className="text-[#1A1512]"
                      />
                    </motion.div>
                  </div>
                </button>

                {/* ==================================================
                    EXPANDING ANSWER
                ================================================== */}

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{
                        height: 0,
                        opacity: 0,
                      }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                      transition={{
                        duration: 0.45,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className="overflow-hidden"
                    >
                      <div
                        className="
                          grid
                          w-full
                          grid-cols-12
                          pb-8
                          md:pb-10
                        "
                      >
                        <div
                          className="
                            col-span-10
                            col-start-3
                            pr-4
                            md:col-span-6
                            md:col-start-6
                            md:pr-12
                          "
                        >
                          <p
                            className="
                              m-0
                              font-medium
                              text-[14px]
                              leading-[1.55]
                              text-[#1A1512]/60
                              sm:text-[15px]
                              md:text-[17px]
                              md:leading-[1.6]
                            "
                          >
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

        {/* ==========================================================
            BOTTOM CTA / SUPPORTING NOTE
        ========================================================== */}

        <div
          className="
            mt-12
            flex
            flex-col
            gap-5
            border-t
            border-[#1A1512]/15
            pt-6
            md:mt-16
            md:flex-row
            md:items-center
            md:justify-between
          "
        >
          <p
            className="
              m-0
              max-w-[550px]
              font-mono
              text-[10px]
              uppercase
              leading-[1.5]
              tracking-[0.1em]
              text-[#1A1512]/45
              md:text-[11px]
            "
          >
            Still have questions about your project, scope or pricing?
          </p>

          <a
            href="/contact"
            className="
              group
              inline-flex
              w-fit
              items-center
              gap-3
              border
              border-[#1A1512]
              px-4
              py-3
              font-corp
              text-[11px]
              font-bold
              uppercase
              tracking-widest
              text-[#1A1512]
              transition-all
              duration-300
              hover:bg-[#1A1512]
              hover:text-[#EAE6CD]
            "
          >
            Talk to Oddlambda

            <span
              className="
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            >
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;