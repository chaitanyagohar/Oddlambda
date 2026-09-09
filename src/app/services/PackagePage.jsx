import React, { useEffect } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import FAQ from "../../components/FAQ";
import CTA from "../../components/CTA";
import Footer from "../../components/Footer";
import { 
  MousePointer2, 
  ToggleLeft, 
  Target, 
  Flag, 
  MessageCircle, 
  Key, 
  Settings 
} from "lucide-react";

// ============================================================
// PACKAGE DATA
// ============================================================
const packageData = {
  "speed-launch": {
    title: "Speed Launch",
    target: "For businesses needing a fast, professional landing page.",
    desc: "A great design only works if the build works too. I build landing pages that look and work exactly the way they were intended—optimized for speed, conversions, and seamless animations.",
    scope: [
      "1 long-form landing page",
      "Custom UI/UX & Animations",
      "React / Next.js Development",
      "Domain + Deployment Setup",
      "Basic on-page SEO",
      "Email & WhatsApp Integration"
    ],
    timeline: "2-3 weeks",
  },
  "brand-ecosystem": {
    title: "Brand Ecosystem",
    target: "For scaling brands requiring a bespoke corporate or SaaS presence.",
    desc: "A great design only works if the build works too. I build complete digital systems with advanced micro-interactions and seamless CMS management so your team can scale without friction.",
    scope: [
      "5–10 Custom Pages",
      "Bespoke UI/UX Design System",
      "Next.js & Headless CMS",
      "Advanced Forms + CRM Setup",
      "Technical SEO & Schema",
      "Performance Optimization"
    ],
    timeline: "4-6 weeks",
  },
  "commerce-scale": {
    title: "Commerce Scale",
    target: "For brands ready to sell online with a complete e-commerce store.",
    desc: "A great design only works if the build works too. I build conversion-focused e-commerce experiences with robust backend integrations so you can manage inventory and drive sales flawlessly.",
    scope: [
      "Complete E-commerce Store",
      "Custom Shopify / Headless",
      "Up to 200 Products",
      "Razorpay / Stripe Integration",
      "Backend & Inventory Setup",
      "E-commerce SEO"
    ],
    timeline: "6-8 weeks",
  }
};

// ============================================================
// PROCESS & FEATURES DATA (Matching Video)
// ============================================================
const processSteps = [
  {
    num: "01",
    title: "Understand",
    desc: "We start with a call and a questionnaire. I want to understand your business, your goals, and your target audience. Because only what is clear can be communicated convincingly."
  },
  {
    num: "02",
    title: "Plan",
    desc: "Based on the call, the structure of the website is created. Which content is in focus? How do we skillfully guide visitors through the website? The result is a clear framework as the foundation for the design."
  },
  {
    num: "03",
    title: "Design",
    desc: "I design a custom layout for all pages of your website. It reflects your brand and is structured for clear user guidance. Texts are created in parallel or revised together."
  },
  {
    num: "04",
    title: "Implement",
    desc: "I develop the site technically, optimize it for all devices, and integrate a CMS. Animated transitions and small details add that special touch."
  },
  {
    num: "05",
    title: "Launch",
    desc: "The website goes live! I'll show you how you can manage it entirely on your own. If you'd prefer me to handle it, I'll of course be there for you even after the launch."
  }
];

const features = [
  { title: "Individual.", icon: <MousePointer2 size={18} strokeWidth={1.5} />, desc: "Every design is created from scratch, tailored precisely to your brand." },
  { title: "Details.", icon: <ToggleLeft size={18} strokeWidth={1.5} />, desc: "Thoughtful animations, smooth transitions, precise typography." },
  { title: "Fixed price.", icon: <Target size={18} strokeWidth={1.5} />, desc: "You know from the start what the project will cost." },
  { title: "Feedback.", icon: <Flag size={18} strokeWidth={1.5} />, desc: "Revisions are an integral part of the process. Until everything is just right." },
  { title: "Communication.", icon: <MessageCircle size={18} strokeWidth={1.5} />, desc: "Simple and straightforward via Email or WhatsApp." },
  { title: "Simple.", icon: <Key size={18} strokeWidth={1.5} />, desc: "You can easily update your new website yourself after launch." },
  { title: "Support.", icon: <Settings size={18} strokeWidth={1.5} />, desc: "Still here for you even after launch." }
];

export default function PackagePage() {
  const { id } = useParams();
  const pkg = packageData[id];

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!pkg) return <Navigate to="/services" />;

  return (
    <div className="bg-[#EAE6CD] text-[#0a0a0a] min-h-screen pt-28 selection:bg-[#0a0a0a] selection:text-[#EAE6CD]">
      
      {/* ========================================================
          HERO (Massive Dark Box)
      ======================================================== */}
      <div className="px-4 md:px-8 lg:px-10 pb-16">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="bg-[#0a0a0a] text-[#EAE6CD] rounded-[24px] md:rounded-[32px] overflow-hidden flex flex-col"
        >
          {/* Top Section */}
          <div className="p-8 md:p-14 lg:p-24 pb-12 lg:pb-16">
            <Link to="/services" className="font-mono text-[10px] uppercase tracking-widest text-[#EAE6CD]/50 hover:text-[#EAE6CD] mb-12 inline-block transition-colors">
              ← Back to Services
            </Link>

            <h1 className="font-corp text-[16vw] md:text-[11vw] font-bold uppercase leading-[0.8] tracking-[-0.04em] mb-12">
              {pkg.title}
            </h1>

            <div className="max-w-2xl">
              <p className="font-medium text-[16px] md:text-[20px] text-[#EAE6CD]/60 mb-6">
                — {pkg.target}
              </p>
              <p className="text-[18px] md:text-[24px] font-medium leading-relaxed text-[#EAE6CD]">
                {pkg.desc}
              </p>
            </div>
          </div>

          {/* Scope Grid */}
          <div className="border-t border-[#EAE6CD]/15 mx-8 md:mx-14 lg:mx-24 py-8 md:py-12 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
            <div className="md:col-span-4">
              <h3 className="font-corp text-3xl font-bold uppercase tracking-wide">Scope</h3>
            </div>
            <div className="md:col-span-8 flex flex-col gap-2 font-medium text-[16px] text-[#EAE6CD]/70 md:text-right">
              {pkg.scope.map((item, idx) => (
                <span key={idx}>{item}</span>
              ))}
            </div>
          </div>

          {/* Timeline Grid */}
          <div className="border-t border-[#EAE6CD]/15 mx-8 md:mx-14 lg:mx-24 py-8 md:py-12 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
            <div className="md:col-span-4">
              <h3 className="font-corp text-3xl font-bold uppercase tracking-wide">Timeline</h3>
            </div>
            <div className="md:col-span-8 font-medium text-[16px] text-[#EAE6CD]/70 md:text-right">
              {pkg.timeline}
            </div>
          </div>

          {/* Bottom Button */}
          <div className="px-8 md:px-14 lg:px-24 pb-16 pt-8 flex justify-center w-full">
            <a
              href="https://cal.com/solidate-jlocb2/15min" 
              className="w-full md:w-auto md:min-w-[320px] group relative inline-flex h-16 items-center justify-center gap-3 overflow-hidden rounded-[4px] bg-[#EAE6CD] px-8 text-[13px] font-bold uppercase tracking-widest text-[#0a0a0a] transition-transform hover:-translate-y-1"
            >
              <img src="/me.jpeg" className="h-6 w-6 rounded-[2px] object-cover transition-transform group-hover:scale-110" alt="Profile" />
              Book a Call
            </a>
          </div>
        </motion.div>
      </div>

      {/* ========================================================
          THE PROCESS (Alternating Editorial Timeline)
      ======================================================== */}
      <section className="py-24 md:py-32 px-6 md:px-10 max-w-[1400px] mx-auto overflow-hidden">
        <div className="text-center mb-20 md:mb-24">
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#0a0a0a]/50 block mb-6 border border-[#0a0a0a]/20 px-3 py-1.5 w-max mx-auto rounded-[2px]">Process</span>
          <h2 className="font-corp text-6xl md:text-8xl lg:text-[7vw] font-bold uppercase tracking-[-0.02em] leading-none">
            The Process
          </h2>
          <p className="mt-8 text-[17px] md:text-[20px] font-medium text-[#0a0a0a]/70 max-w-[500px] mx-auto leading-relaxed">
            Creating a website can be complex. But our collaboration and the website itself shouldn't be.
          </p>
        </div>

        {/* DESKTOP ALTERNATING LAYOUT */}
        <div className="hidden md:block relative w-full mt-24">
          {/* Center Vertical Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-[#0a0a0a]/20 -translate-x-1/2" />

          {processSteps.map((step, idx) => {
            const isEven = idx % 2 === 0;

            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="relative flex items-center w-full py-16 lg:py-24"
              >
                {/* Center Dot */}
                <div className="absolute left-1/2 top-1/2 w-[7px] h-[7px] rounded-full bg-[#0a0a0a] -translate-x-1/2 -translate-y-1/2" />

                {/* Left Column */}
                <div className="w-1/2 pr-12 lg:pr-24 flex justify-end">
                  {isEven ? (
                    <div className="text-right">
                      <span className="font-mono text-[11px] font-bold text-[#0a0a0a]/40 mb-3 block">({step.num})</span>
                      <h3 className="font-corp text-6xl lg:text-7xl font-bold uppercase tracking-tight leading-none">{step.title}</h3>
                    </div>
                  ) : (
                    <p className="text-[17px] font-medium leading-[1.4] text-[#0a0a0a]/70 max-w-[380px] text-left">
                      {step.desc}
                    </p>
                  )}
                </div>

                {/* Right Column */}
                <div className="w-1/2 pl-12 lg:pl-24 flex justify-start">
                  {isEven ? (
                    <p className="text-[17px] font-medium leading-[1.4] text-[#0a0a0a]/70 max-w-[380px] text-left">
                      {step.desc}
                    </p>
                  ) : (
                    <div className="text-left">
                      <span className="font-mono text-[11px] font-bold text-[#0a0a0a]/40 mb-3 block">({step.num})</span>
                      <h3 className="font-corp text-6xl lg:text-7xl font-bold uppercase tracking-tight leading-none">{step.title}</h3>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* MOBILE STACKED LAYOUT */}
        <div className="md:hidden relative border-l border-[#0a0a0a]/20 ml-2 pl-8 py-8 space-y-20 mt-12">
          {processSteps.map((step, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Left Dot */}
              <div className="absolute -left-[36px] top-2 w-[7px] h-[7px] rounded-full bg-[#0a0a0a]" />
              
              <span className="font-mono text-[11px] font-bold text-[#0a0a0a]/40 mb-2 block">({step.num})</span>
              <h3 className="font-corp text-5xl font-bold uppercase tracking-tight leading-none mb-4">{step.title}</h3>
              <p className="text-[16px] font-medium leading-[1.4] text-[#0a0a0a]/70">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ========================================================
          FEATURES (Black Section - About Secondary Layout)
      ======================================================== */}
      <section className="bg-[#0a0a0a] text-[#EAE6CD] py-24 md:py-32 w-full">
        <div className="w-full border-t border-[#EAE6CD]/15">
          {features.map((feat, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 border-b border-[#EAE6CD]/15 hover:bg-[#EAE6CD]/[0.02] transition-colors"
            >
              {/* Left Half (Title & Icon aligned to the right on desktop) */}
              <div className="py-6 px-6 md:px-10 md:py-8 flex items-center md:justify-end gap-6 md:pr-16 lg:pr-24">
                <h4 className="text-[17px] md:text-[18px] font-medium text-[#EAE6CD]/70">{feat.title}</h4>
                <span className="text-[#EAE6CD]/50">{feat.icon}</span>
              </div>
              
              {/* Right Half (Description aligned left) */}
              <div className="py-2 pb-6 px-6 md:px-10 md:py-8 flex items-center md:pl-16 lg:pl-24">
                <p className="text-[15px] md:text-[17px] leading-relaxed text-[#EAE6CD]/90 max-w-md font-medium">
                  {feat.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ========================================================
          REUSED COMPONENTS
      ======================================================== */}
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}