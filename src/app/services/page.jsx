"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowDownRight,
  ArrowUpRight,
  Plus,
  Minus,
  Check,
} from "lucide-react";

const ServicesPage = () => {
  const [openPackage, setOpenPackage] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);

  /* ============================================================
     PACKAGES
  ============================================================ */

  const packages = [
    {
      id: "01",
      slug: "speed-launch",
      name: "Speed Launch",
      priceINR: "₹7,999",
      priceUSD: "$130",
      type: "Landing Page",
      description:
        "A focused, conversion-ready website for businesses that need to get online quickly without compromising on quality.",
      accent: "Launch",
      features: [
        "1 long-form landing page",
        "5–8 sections",
        "Custom UI/UX",
        "React / Next.js",
        "Smooth animations",
        "Up to 3 forms",
        "Email, WhatsApp & social integration",
        "Domain up to ₹1,000 + deployment setup",
        "Basic on-page SEO",
        "2 revision rounds",
        "1 month technical support",
        "1 year management support",
      ],
    },

    {
      id: "02",
      slug: "brand-ecosystem",
      name: "Brand Ecosystem",
      priceINR: "₹22,999",
      priceUSD: "$300",
      type: "Corporate / SaaS Website",
      description:
        "A complete digital presence built around your brand, designed to establish credibility and give your business room to grow.",
      accent: "Popular",
      featured: true,
      features: [
        "5–10 pages",
        "Bespoke UI/UX design system",
        "Next.js",
        "Advanced microinteractions & page transitions",
        "Headless CMS",
        "Admin / CMS management",
        "Advanced forms + CRM integration",
        "Email, WhatsApp & social integration",
        "Technical SEO",
        "Performance optimization",
        "Schema",
        "5 revisions",
        "1 month technical support",
        "1 year management support",
      ],
    },

    {
      id: "03",
      slug: "commerce-scale",
      name: "Commerce Scale",
      priceINR: "₹32,999",
      priceUSD: "$450",
      type: "Custom E-commerce",
      description:
        "A complete commerce experience designed to turn visitors into customers and give your team a system they can actually manage.",
      accent: "Commerce",
      features: [
        "Complete e-commerce store",
        "Home, collections, product, cart, checkout & legal pages",
        "Conversion-focused, mobile-first UI/UX",
        "Custom Shopify theme or headless commerce",
        "Up to 200 products",
        "Razorpay / Stripe / COD",
        "Backend & inventory integration",
        "Newsletter / contact",
        "Email, WhatsApp & social integration",
        "E-commerce SEO",
        "Product schema & category optimization",
        "5 revisions",
        "1 month technical support",
        "1 year management support",
      ],
    },
  ];

  /* ============================================================
     SERVICES
  ============================================================ */

  const services = [
    "Websites",
    "Web Applications",
    "SaaS Platforms",
    "AI Automation",
    "CRM Systems",
    "E-commerce",
    "Business Automation",
    "Custom Software",
  ];

  /* ============================================================
     FAQ
  ============================================================ */

  const faqs = [
    {
      question: "How long does a project take?",
      answer:
        "It depends on the scope. A Speed Launch project can move quickly, while larger websites, e-commerce stores and custom software require more time for strategy, design, development, testing and launch.",
    },
    {
      question: "Do I need to provide the content?",
      answer:
        "You can provide your existing content, or we can help structure what the website needs. The exact level of content support depends on the project scope.",
    },
    {
      question: "Can you build something outside these packages?",
      answer:
        "Absolutely. The three packages cover the most common website requirements. SaaS platforms, AI automation, CRM systems, business automation and custom software are handled through a custom proposal.",
    },
    {
      question: "Do you provide SEO?",
      answer:
        "Yes. SEO is included at different levels depending on the package. This can include on-page SEO, technical SEO, schema, performance optimization and e-commerce-specific optimization.",
    },
    {
      question: "Do you provide ongoing support?",
      answer:
        "Yes. Every package includes one month of technical support and one year of management support as specified in the package scope.",
    },
    {
      question: "What are the payment terms?",
      answer:
        "The standard payment structure is 50% upfront and 50% on completion.",
    },
  ];

  /* ============================================================
     ANIMATION
  ============================================================ */

  const reveal = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const stagger = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08 } },
  };

  return (
    <main className="w-full overflow-hidden bg-[#0a0a0a] text-[#EAE6CD]">
      {/* ============================================================
          HERO
      ============================================================ */}
      <section className="relative flex min-h-[100svh] w-full flex-col justify-center overflow-hidden px-5 py-24 md:px-8 lg:px-10">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(234,230,205,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(234,230,205,0.5) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        <div className="absolute left-5 right-5 top-6 flex items-center justify-between md:left-8 md:right-8 md:top-8 lg:left-10 lg:right-10">
          <span className="rounded-[3px] border border-[#EAE6CD]/15 bg-[#EAE6CD]/5 px-2 py-1.5 font-mono text-[9px] font-bold uppercase tracking-[0.15em] text-[#EAE6CD]/55">
            01 / Services
          </span>
          <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-[#EAE6CD]/35">
            Oddlambda®
          </span>
        </div>

        <div className="absolute left-5 top-1/2 hidden -translate-y-1/2 md:block lg:left-10">
          <span className="rounded-[3px] bg-[#EAE6CD]/10 px-2.5 py-1.5 font-corp text-[10px] font-bold uppercase tracking-widest text-[#EAE6CD]/55">
            Development
          </span>
        </div>

        <div className="absolute right-5 top-1/2 hidden -translate-y-1/2 md:block lg:right-10">
          <span className="rounded-[3px] bg-[#EAE6CD]/10 px-2.5 py-1.5 font-corp text-[10px] font-bold uppercase tracking-widest text-[#EAE6CD]/55">
            Digital Growth
          </span>
        </div>

        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="relative z-10 mx-auto flex w-full max-w-[1500px] flex-col items-center text-center"
        >
          <motion.h1
            variants={reveal}
            className="m-0 max-w-[1450px] font-corp text-[20vw] font-bold uppercase leading-[0.76] tracking-[-0.065em] text-[#EAE6CD] sm:text-[17vw] md:text-[14vw] lg:text-[12.5vw]"
          >
            My
            <br />
            Services
          </motion.h1>

          <motion.div
            variants={reveal}
            className="mt-12 flex w-full max-w-[720px] items-start justify-center gap-3 md:mt-16 md:gap-5"
          >
            <span className="mt-1 shrink-0 border border-[#EAE6CD]/20 bg-[#EAE6CD]/5 px-2 py-1.5 font-corp text-[9px] font-bold uppercase tracking-widest text-[#EAE6CD]/65 md:text-[10px]">
              What we do
            </span>
            <p className="m-0 text-left font-medium text-[16px] leading-[1.4] tracking-[-0.02em] text-[#EAE6CD]/65 sm:text-[18px] md:text-[21px]">
              We design and build digital products that make businesses look
              credible, work smarter, and grow online.
            </p>
          </motion.div>
        </motion.div>

        <div className="absolute bottom-7 left-5 right-5 flex items-center justify-between md:left-8 md:right-8 lg:left-10 lg:right-10">
          <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-[#EAE6CD]/30">
            Scroll to explore
          </span>
          <ArrowDownRight
            size={20}
            strokeWidth={1.3}
            className="text-[#EAE6CD]/35"
          />
        </div>
      </section>

      {/* ============================================================
          SERVICE CATEGORIES
      ============================================================ */}
      <section className="relative w-full bg-[#EAE6CD] text-[#0a0a0a]">
        <div className="mx-5 md:mx-8 lg:mx-10">
          <div className="h-px w-full bg-[#0a0a0a]/20" />
        </div>

        <div className="px-5 py-20 md:px-8 md:py-28 lg:px-10 lg:py-36">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-8">
            <div className="md:col-span-4">
              <div className="flex items-start gap-3">
                <span className="border border-[#0a0a0a]/25 px-2 py-1 font-mono text-[10px] font-bold uppercase tracking-widest">
                  02
                </span>
                <span className="font-corp text-[15px] font-bold uppercase tracking-wider">
                  What We Build
                </span>
              </div>
              <p className="mt-8 max-w-[330px] font-medium text-[17px] leading-[1.4] tracking-[-0.02em] text-[#0a0a0a]/65 md:text-[19px]">
                From a simple website to a complete digital operating system, we
                build around what your business actually needs.
              </p>
            </div>

            <div className="md:col-span-8">
              <div className="grid grid-cols-1 border-t border-[#0a0a0a]/20 sm:grid-cols-2">
                {services.map((service, index) => (
                  <motion.div
                    key={service}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-10%" }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.04,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="group flex items-center justify-between border-b border-[#0a0a0a]/20 py-5 pr-2 sm:py-6 sm:pr-5"
                  >
                    <div className="flex items-center gap-4">
                      <span className="font-mono text-[10px] text-[#0a0a0a]/35">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="font-corp text-[25px] font-bold uppercase leading-none tracking-[-0.025em] sm:text-[30px]">
                        {service}
                      </span>
                    </div>
                    <ArrowUpRight
                      size={20}
                      strokeWidth={1.5}
                      className="shrink-0 text-[#0a0a0a]/30 transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          PACKAGES
      ============================================================ */}
      <section
        id="packages"
        className="relative w-full overflow-hidden bg-[#0a0a0a] px-5 py-24 text-[#EAE6CD] md:px-8 md:py-32 lg:px-10 lg:py-40"
      >
        <div className="mb-16 flex flex-col justify-between gap-8 md:mb-20 md:flex-row md:items-end lg:mb-24">
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="border border-[#EAE6CD]/20 px-2 py-1 font-mono text-[10px] font-bold uppercase tracking-widest text-[#EAE6CD]/55">
                03
              </span>
              <span className="font-corp text-[14px] font-bold uppercase tracking-wider text-[#EAE6CD]/70">
                Packages
              </span>
            </div>
            <h2 className="m-0 max-w-[1000px] font-corp text-[14vw] font-bold uppercase leading-[0.8] tracking-[-0.06em] sm:text-[12vw] md:text-[9.5vw] lg:text-[8vw]">
              Start here.
            </h2>
          </div>
          <p className="max-w-[380px] font-mono text-[11px] uppercase leading-[1.5] tracking-[0.08em] text-[#EAE6CD]/45 md:text-[12px]">
            Straightforward packages for the most common digital requirements.
            Bigger systems are quoted around scope.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-3 lg:grid-cols-3">
          {packages.map((pkg, index) => {
            const isOpen = openPackage === pkg.id;

            return (
              <motion.article
                key={pkg.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`relative flex min-h-[620px] flex-col overflow-hidden rounded-[8px] border ${
                  pkg.featured ? "border-[#EAE6CD]/30" : "border-[#EAE6CD]/15"
                } bg-[#EAE6CD] p-6 text-[#0a0a0a] sm:p-8 md:min-h-[680px]`}
              >
                <div className="flex items-start justify-between">
                  <span className="font-mono text-[10px] font-bold uppercase tracking-[0.15em] text-[#0a0a0a]/45">
                    {pkg.id}
                  </span>
                  <span className="rounded-full border border-[#0a0a0a]/15 px-2.5 py-1 font-mono text-[8px] font-bold uppercase tracking-[0.12em] text-[#0a0a0a]/55">
                    {pkg.accent}
                  </span>
                </div>

                <div className="mt-14">
                  <h3 className="m-0 max-w-[500px] font-corp text-[13vw] font-bold uppercase leading-[0.78] tracking-[-0.055em] sm:text-[10vw] lg:text-[5.2vw] xl:text-[5vw]">
                    {pkg.name}
                  </h3>
                  <p className="mt-7 max-w-[440px] font-medium text-[15px] leading-[1.4] tracking-[-0.015em] text-[#0a0a0a]/65 sm:text-[16px]">
                    {pkg.description}
                  </p>
                </div>

                <div className="mt-auto pt-12">
                  <div className="border-t border-[#0a0a0a]/20 pt-5">
                    <div className="flex items-end justify-between gap-5">
                      <div>
                        <p className="m-0 font-mono text-[9px] uppercase tracking-[0.15em] text-[#0a0a0a]/45">
                          Starting at
                        </p>
                        <div className="mt-1 flex items-baseline gap-3">
                          <span className="font-corp text-[35px] font-bold uppercase leading-none tracking-[-0.04em] sm:text-[42px]">
                            {pkg.priceINR}
                          </span>
                          <span className="font-mono text-[12px] text-[#0a0a0a]/45">
                            / {pkg.priceUSD}
                          </span>
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={() => setOpenPackage(isOpen ? null : pkg.id)}
                        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#0a0a0a] text-[#EAE6CD] transition-transform duration-300 hover:scale-105"
                        aria-label={`View ${pkg.name} details`}
                      >
                        {isOpen ? (
                          <Minus size={18} strokeWidth={1.5} />
                        ) : (
                          <Plus size={18} strokeWidth={1.5} />
                        )}
                      </button>
                    </div>
                  </div>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        {/* 
                          REMOVED: max-h-[280px] overflow-y-auto 
                          ADDED: Natural expansion with link to dynamic page 
                        */}
                        <div className="mt-6 border-t border-[#0a0a0a]/15 pt-5 pb-2">
                          <div className="space-y-3">
                            {pkg.features.map((feature) => (
                              <div
                                key={feature}
                                className="flex items-start gap-3"
                              >
                                <Check
                                  size={14}
                                  strokeWidth={2}
                                  className="mt-[2px] shrink-0 text-[#0a0a0a]/55"
                                />
                                <span className="font-medium text-[12px] leading-[1.35] text-[#0a0a0a]/65">
                                  {feature}
                                </span>
                              </div>
                            ))}
                          </div>
                          
                          {/* DYNAMIC PAGE ROUTE LINK */}
                          <div className="mt-8 border-t border-[#0a0a0a]/10 pt-4">
                            <Link 
                              to={`/services/${pkg.slug}`}
                              className="group/link flex items-center justify-between font-mono text-[10px] font-bold uppercase tracking-widest text-[#0a0a0a]/70 transition-colors hover:text-[#0a0a0a]"
                            >
                              <span>View Full Scope</span>
                              <ArrowUpRight size={14} className="transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                            </Link>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.article>
            );
          })}
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-[#EAE6CD]/15 pt-5 md:flex-row md:items-center md:justify-between">
          <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#EAE6CD]/40 md:text-[11px]">
            Payment terms
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#EAE6CD]/65 md:text-[11px]">
            50% upfront + 50% on completion
          </span>
        </div>
      </section>

      {/* ============================================================
          CUSTOM SERVICES
      ============================================================ */}
      <section className="w-full bg-[#EAE6CD] px-5 py-24 text-[#0a0a0a] md:px-8 md:py-32 lg:px-10 lg:py-40">
        <div className="grid grid-cols-1 gap-14 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-5">
            <div className="flex items-start gap-3">
              <span className="border border-[#0a0a0a]/25 px-2 py-1 font-mono text-[10px] font-bold uppercase tracking-widest">
                04
              </span>
              <span className="font-corp text-[14px] font-bold uppercase tracking-wider">
                Beyond Packages
              </span>
            </div>
            <h2 className="m-0 mt-8 font-corp text-[15vw] font-bold uppercase leading-[0.78] tracking-[-0.06em] sm:text-[12vw] md:text-[8vw]">
              Need
              <br />
              more?
            </h2>
          </div>

          <div className="md:col-span-7">
            <p className="max-w-[700px] font-medium text-[22px] leading-[1.2] tracking-[-0.025em] text-[#0a0a0a]/75 md:text-[28px] lg:text-[34px]">
              Not every business fits into a package. For larger or more
              technical requirements, we scope the project around your actual
              workflow, users, integrations and goals.
            </p>

            <div className="mt-12 grid grid-cols-1 border-t border-[#0a0a0a]/20 sm:grid-cols-2">
              {[
                "SaaS Platforms",
                "AI Automation",
                "CRM Systems",
                "Business Automation",
                "Web Applications",
                "Custom Software",
              ].map((item, index) => (
                <div
                  key={item}
                  className="flex items-center gap-4 border-b border-[#0a0a0a]/20 py-5"
                >
                  <span className="font-mono text-[9px] text-[#0a0a0a]/35">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="font-corp text-[22px] font-bold uppercase tracking-[-0.02em] sm:text-[25px]">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <a
                href="/contact"
                className="group inline-flex items-center gap-4 bg-[#0a0a0a] px-5 py-4 font-corp text-[12px] font-bold uppercase tracking-widest text-[#EAE6CD] transition-transform duration-300 hover:-translate-y-1"
              >
                Discuss a custom project
                <ArrowUpRight
                  size={17}
                  strokeWidth={1.5}
                  className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          FAQ
      ============================================================ */}
      <section className="w-full bg-[#0a0a0a] px-5 py-24 text-[#EAE6CD] md:px-8 md:py-32 lg:px-10 lg:py-40">
        <div className="mb-16 flex flex-col gap-8 md:mb-20 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="border border-[#EAE6CD]/20 px-2 py-1 font-mono text-[10px] font-bold uppercase tracking-widest text-[#EAE6CD]/55">
                05
              </span>
              <span className="font-corp text-[14px] font-bold uppercase tracking-wider text-[#EAE6CD]/70">
                Questions
              </span>
            </div>
            <h2 className="m-0 font-corp text-[12vw] font-bold uppercase leading-[0.8] tracking-[-0.06em] sm:text-[10vw] md:text-[8vw]">
              Frequently
              <br />
              Asked
            </h2>
          </div>
          <p className="max-w-[350px] font-mono text-[10px] uppercase leading-[1.5] tracking-[0.1em] text-[#EAE6CD]/40">
            A few things worth knowing before we start working together.
          </p>
        </div>

        <div className="border-t border-[#EAE6CD]/20">
          {faqs.map((faq, index) => {
            const isOpen = openFaq === index;

            return (
              <div
                key={faq.question}
                className="border-b border-[#EAE6CD]/20"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(isOpen ? null : index)}
                  className="group flex w-full items-center gap-5 py-5 text-left md:py-6"
                >
                  <span className="w-10 shrink-0 font-mono text-[11px] text-[#EAE6CD]/30 md:w-16">
                    ({String(index + 1).padStart(2, "0")})
                  </span>
                  <span className="flex-1 font-medium text-[17px] leading-[1.2] tracking-[-0.02em] text-[#EAE6CD]/85 md:text-[21px]">
                    {faq.question}
                  </span>
                  <span className="shrink-0">
                    {isOpen ? (
                      <Minus
                        size={21}
                        strokeWidth={1.4}
                        className="text-[#EAE6CD]/70"
                      />
                    ) : (
                      <Plus
                        size={21}
                        strokeWidth={1.4}
                        className="text-[#EAE6CD]/70"
                      />
                    )}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        duration: 0.45,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className="overflow-hidden"
                    >
                      <p className="ml-[60px] max-w-[650px] pb-7 pr-8 font-medium text-[14px] leading-[1.5] text-[#EAE6CD]/50 md:ml-[112px] md:text-[16px]">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>

      {/* ============================================================
          FINAL CTA
      ============================================================ */}
      <section className="relative flex min-h-[75vh] w-full flex-col items-center justify-center overflow-hidden bg-[#EAE6CD] px-5 py-28 text-center text-[#0a0a0a] md:min-h-[80vh] md:px-8">
        <span className="mb-8 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[#0a0a0a]/45">
          Ready when you are
        </span>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="m-0 max-w-[1200px] font-corp text-[16vw] font-bold uppercase leading-[0.78] tracking-[-0.065em] sm:text-[13vw] md:text-[10vw]"
        >
          Let's build
          <br />
          something
          <br />
          serious.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-12"
        >
          <a
            href="/contact"
            className="group inline-flex items-center gap-4 rounded-full bg-[#0a0a0a] py-2 pl-7 pr-2 font-corp text-[12px] font-bold uppercase tracking-widest text-[#EAE6CD] transition-transform duration-300 hover:scale-[1.04]"
          >
            Start a project
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#EAE6CD] text-[#0a0a0a] transition-transform duration-500 group-hover:rotate-[-45deg]">
              <ArrowUpRight size={17} strokeWidth={1.7} />
            </span>
          </a>
        </motion.div>
      </section>
    </main>
  );
};

export default ServicesPage;