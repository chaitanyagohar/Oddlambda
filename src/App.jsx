import React, { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useSpring, useTransform, useMotionTemplate, useMotionValue, AnimatePresence } from 'framer-motion';
import { 
  Search, Users, Settings, BarChart, Rocket, CheckCircle, 
  Code, Layout, Zap, Smartphone, Globe, Mail, ArrowRight, Menu, X, ArrowUpRight, Terminal, Star, Package, Clock, Play, Quote
} from 'lucide-react';

// --- Imports from Components ---
// --------------------------------------------------------------------------
// FOR LOCAL USE: Uncomment the line below and delete the placeholder GridScan component below
import { GridScan } from './components/GridScan';
import Manifesto from './components/Manifesto';
import HorizontalScroll from './components/HorizontalScroll';
import Description from './components/Description';
// --------------------------------------------------------------------------

// --- Assets & Utils ---
const NoiseOverlay = () => (
  <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.04] mix-blend-overlay" 
       style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} 
  />
);

const theme = {
  bg: "bg-[#030303]", 
  cyan: "#46cef6",
};

// --- Animations ---
const transition = { duration: 0.8, ease: [0.25, 1, 0.5, 1] };

const MaskedReveal = ({ children, delay = 0, className = "" }) => {
  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.div
        initial={{ y: "100%" }}
        whileInView={{ y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ ...transition, delay }}
      >
        {children}
      </motion.div>
    </div>
  );
};

const FadeIn = ({ children, delay = 0, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-10%" }}
    transition={{ ...transition, delay }}
    className={className}
  >
    {children}
  </motion.div>
);

const ShineCard = ({ children, className = "" }) => {
  return (
    <motion.div 
      className={`group relative overflow-hidden bg-[#0a0a0a] border border-white/5 ${className}`}
      whileHover={{ scale: 0.995 }}
      transition={{ duration: 0.4 }}
    >
      {/* Metallic Sheen Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] pointer-events-none z-20" />
      
      {/* Inner Bevel Shadow */}
      <div className="absolute inset-0 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] pointer-events-none z-10 rounded-inherit" />
      
      {children}
    </motion.div>
  );
};

// --- React Bits Components ---

const DecryptedText = ({ text, speed = 50, maxIterations = 20, className, revealDelay = 0 }) => {
  const [displayText, setDisplayText] = useState(text);
  const [isScrambling, setIsScrambling] = useState(false);
  const [hasRevealed, setHasRevealed] = useState(false);
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_+";

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsScrambling(true);
      setHasRevealed(true);
    }, revealDelay);
    return () => clearTimeout(timeout);
  }, [revealDelay]);

  useEffect(() => {
    let interval;
    let iteration = 0;

    if (isScrambling) {
      interval = setInterval(() => {
        setDisplayText(
          text
            .split("")
            .map((letter, index) => {
              if (index < iteration) {
                return text[index];
              }
              return letters[Math.floor(Math.random() * letters.length)];
            })
            .join("")
        );

        if (iteration >= text.length) {
          setIsScrambling(false);
          clearInterval(interval);
        }

        iteration += 1 / (maxIterations / text.length);
      }, speed);
    } else {
      setDisplayText(text);
    }

    return () => clearInterval(interval);
  }, [isScrambling, text, speed, maxIterations]);

  return (
    <motion.span 
      className={`inline-block whitespace-pre ${className}`}
      onMouseEnter={() => {
        if (!isScrambling) setIsScrambling(true);
      }}
    >
      {displayText}
    </motion.span>
  );
};

// --------------------------------------------------------------------------
// PLACEHOLDER GRID SCAN (Delete this block when using locally)
// --------------------------------------------------------------------------

// --------------------------------------------------------------------------

// --- New Component: Full Screen Quote Section ---
const QuoteSection = ({ quote, author, backgroundText, direction = 1 }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Parallax effect for the background text
  const x = useTransform(scrollYProgress, [0, 1], ["-20%", direction === 1 ? "20%" : "-60%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 0.1, 0.1, 0]);

  return (
    <section ref={ref} className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-[#030303] border-y border-white/5">
      {/* Background Moving Text */}
      <motion.div 
        style={{ x, opacity }}
        className="absolute whitespace-nowrap text-[20vw] font-black leading-none text-white pointer-events-none select-none"
      >
        {backgroundText}
      </motion.div>

      {/* Foreground Content */}
      <div className="relative z-10 max-w-4xl px-6 text-center">
        <div className="mb-8 flex justify-center">
          <Quote className="text-[#46cef6] w-12 h-12 opacity-50" />
        </div>
        <MaskedReveal>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-tight mb-8">
            "{quote}"
          </h2>
        </MaskedReveal>
        
        {author && (
          <FadeIn delay={0.3}>
            <div className="flex items-center justify-center gap-4">
              <div className="h-[1px] w-12 bg-[#46cef6]" />
              <span className="text-neutral-400 font-mono tracking-widest uppercase text-sm">{author}</span>
              <div className="h-[1px] w-12 bg-[#46cef6]" />
            </div>
          </FadeIn>
        )}
      </div>
      
      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#030303_100%)] pointer-events-none" />
    </section>
  );
};

// --- Components ---

const Spotlight = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = ({ clientX, clientY }) => {
      mouseX.set(clientX);
      mouseY.set(clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-0 opacity-40 transition-opacity duration-300"
      style={{
        background: useMotionTemplate`
          radial-gradient(
            500px circle at ${mouseX}px ${mouseY}px,
            rgba(255, 255, 255, 0.05),
            transparent 80%
          )
        `,
      }}
    />
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <nav className="fixed top-0 left-0 w-full z-50 py-6 px-6 mix-blend-difference text-white">
      <div className="max-w-7xl mx-auto flex justify-between items-center backdrop-blur-md bg-black/20 rounded-full px-8 py-3 border border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
        <a href="#" className="text-lg font-bold tracking-tight flex items-center gap-2 group">
          <div className="relative flex items-center justify-center w-8 h-8 bg-white text-black rounded-full overflow-hidden">
            <Terminal size={16} className="relative z-10" />
            <div className="absolute inset-0 bg-gradient-to-tr from-gray-200 to-white opacity-100" />
          </div>
          <span className="tracking-widest text-sm font-mono">ODDLAMBDA</span>
        </a>

        <div className="hidden md:flex items-center gap-10">
          {["Work", "Expertise", "Pricing", "Process"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-xs font-bold uppercase tracking-[0.2em] hover:text-[#46cef6] transition-colors text-neutral-400">
              {item}
            </a>
          ))}
          <a href="#contact" className="text-xs font-bold uppercase tracking-[0.2em] bg-white text-black px-6 py-2 rounded-full hover:bg-[#46cef6] transition-colors shadow-[0_0_15px_rgba(255,255,255,0.2)]">
            Start Project
          </a>
        </div>

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-24 left-4 right-4 bg-[#111] border border-white/10 p-6 md:hidden rounded-2xl overflow-hidden"
          >
            <div className="flex flex-col gap-6 text-center">
              {["Work", "Expertise", "Pricing", "Process", "Contact"].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setIsOpen(false)} className="text-xl font-light uppercase text-white/80">
                  {item}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden text-center bg-[#030303]">
      
      {/* Real 3D Grid Scan Background */}
      <div style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }}>
        <GridScan
          sensitivity={0.55}
          lineThickness={1}
          linesColor="#392e4e"
          gridScale={0.1}
          scanColor="#FF9FFC"
          scanOpacity={0.4}
          enablePost
          bloomIntensity={0.6}
          chromaticAberration={0.002}
          noiseIntensity={0.01}
        />
      </div>

      <div className="max-w-6xl mx-auto z-10 flex flex-col items-center pointer-events-none">
          <div className="pointer-events-auto w-full flex flex-col items-center">
            <FadeIn delay={0.2} className="flex items-center justify-center gap-4 mb-8">
              <div className="h-[1px] w-8 bg-gradient-to-r from-transparent to-neutral-500" />
              <span className="text-neutral-400 font-mono text-xs tracking-[0.3em] uppercase">Digital Experience Agency</span>
              <div className="h-[1px] w-8 bg-gradient-to-l from-transparent to-neutral-500" />
            </FadeIn>
            
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[0.9] mb-10 text-white relative z-20">
              <MaskedReveal>
                <span className="block">CRAFTING</span>
              </MaskedReveal>
              <MaskedReveal delay={0.1}>
                {/* React Bits "Decrypted Text" Effect */}
                <div className="block text-transparent bg-clip-text bg-gradient-to-br from-white via-gray-400 to-gray-700 pb-2 drop-shadow-2xl">
                  <DecryptedText text="DIGITAL" speed={60} maxIterations={25} revealDelay={800} />
                </div>
              </MaskedReveal>
              <MaskedReveal delay={0.2}>
                <span className="block">REALITY</span>
              </MaskedReveal>
            </h1>
            
            <FadeIn delay={0.4} className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed mb-12 font-light">
              Oddlambda bridges the gap between raw code and human experience. 
              We build high-performance custom websites that define brands.
            </FadeIn>

            <FadeIn delay={0.6} className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a 
                href="#contact"
                className="group relative px-8 py-4 bg-white text-black font-bold text-sm tracking-widest uppercase rounded-full overflow-hidden shadow-[0_0_40px_rgba(255,255,255,0.1)] hover:shadow-[0_0_40px_rgba(70,206,246,0.3)] transition-all duration-500"
              >
                <span className="relative z-10 flex items-center gap-2">Initiate Project <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" /></span>
                <div className="absolute inset-0 bg-[#46cef6] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />
              </a>
              
              <a 
                href="#work"
                className="px-8 py-4 text-white/70 font-bold text-sm tracking-widest uppercase border border-white/10 rounded-full hover:bg-white/5 hover:border-white/30 transition-all flex items-center gap-2"
              >
                <Play size={12} fill="currentColor" /> Showreel
              </a>
            </FadeIn>
          </div>
      </div>
    </section>
  );
};

const TechStack = () => {
  const techs = ["React", "Next.js", "Three.js", "WebGL", "Typescript", "Node.js", "Tailwind", "Framer Motion"];
  return (
    <div className="py-10 border-y border-white/5 bg-[#080808] overflow-hidden relative z-10">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10" />
      <motion.div 
        animate={{ x: [0, -1000] }}
        transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
        className="flex whitespace-nowrap gap-24 font-mono text-sm tracking-[0.2em] text-neutral-500"
      >
        {[...techs, ...techs, ...techs, ...techs].map((tech, i) => (
          <div key={i} className="flex items-center gap-4">
             <span className="w-1 h-1 bg-[#46cef6] rounded-full" /> {tech.toUpperCase()}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const SelectedWorks = () => {
  const projects = [
    { title: "Lumina Real Estate", cat: "Lead Gen Landing Page", stat: "40% Conversion Lift" },
    { title: "Vanguard E-Com", cat: "Shopify Custom Theme", stat: "0.8s Load Time" },
    { title: "Nexus Finance", cat: "Web Application", stat: "Series A Funded" },
  ];

  return (
    <section id="work" className="py-32 px-6 relative z-10 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 border-b border-white/10 pb-8">
          <MaskedReveal>
            <h2 className="text-4xl md:text-7xl font-bold tracking-tighter text-white">SELECTED <span className="text-neutral-600">WORKS</span></h2>
          </MaskedReveal>
          <FadeIn delay={0.2} className="hidden md:block">
            <a href="#contact" className="text-sm font-mono text-[#46cef6] hover:text-white transition-colors flex items-center gap-2">
              VIEW ALL CASE STUDIES <ArrowRight size={14} />
            </a>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <ShineCard key={i} className="rounded-xl">
              <div className="aspect-[3/4] bg-[#111] relative group-hover:opacity-90 transition-opacity">
                {/* Image Placeholder Gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#050505]" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <span className="px-6 py-3 border border-white/20 bg-black/50 backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-widest text-white">View Project</span>
                </div>
              </div>
              <div className="p-8 absolute bottom-0 left-0 w-full">
                <span className="text-[#46cef6] font-mono text-xs uppercase tracking-wider mb-2 block">{project.cat}</span>
                <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-neutral-500 text-sm border-l border-[#46cef6] pl-3">{project.stat}</p>
              </div>
            </ShineCard>
          ))}
        </div>
      </div>
    </section>
  );
};

const BentoServices = () => {
  return (
    <section id="expertise" className="py-32 px-6 relative z-10 bg-[#030303]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <span className="text-[#46cef6] font-mono text-xs tracking-widest uppercase mb-4 block">Capabilites</span>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-white max-w-3xl">
            PRECISION ENGINEERING MEETS <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-200 to-neutral-600">AESTHETIC PERFECTION.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[340px]">
          <ShineCard className="md:col-span-2 rounded-2xl p-10 flex flex-col justify-between">
            <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center border border-white/10 mb-6">
              <Code className="text-white" />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-white mb-3">Custom Web Architecture</h3>
              <p className="text-neutral-400 max-w-md">Tailor-made solutions using React, Next.js. We don't just use templates; we build scalable digital assets.</p>
            </div>
            <div className="absolute top-10 right-10 opacity-20">
              <Code size={120} strokeWidth={0.5} />
            </div>
          </ShineCard>

          <ShineCard className="md:row-span-2 rounded-2xl p-10 flex flex-col justify-between bg-gradient-to-b from-[#0a0a0a] to-[#050505]">
            <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center border border-white/10">
              <Smartphone className="text-white" />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-white mb-4">Mobile-First <br/>Conversion</h3>
              <p className="text-neutral-400 mb-6">Designed for the thumb-scroll generation. High-ticket lead gen pages that actually convert.</p>
              <div className="flex flex-wrap gap-2">
                 {["React", "Framer", "GSAP"].map(t => <span key={t} className="text-[10px] uppercase border border-white/10 px-2 py-1 rounded text-neutral-500">{t}</span>)}
              </div>
            </div>
          </ShineCard>

          <ShineCard className="rounded-2xl p-10 flex flex-col justify-between">
            <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center border border-white/10">
              <Globe className="text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">E-Commerce Scale</h3>
              <p className="text-neutral-400 text-sm">Headless Shopify storefronts.</p>
            </div>
          </ShineCard>

          <ShineCard className="md:col-span-2 rounded-2xl p-10 flex flex-col justify-between bg-[#46cef6] relative">
             <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-40 mix-blend-overlay" />
             <div className="relative z-10 flex justify-between items-start">
               <div className="w-12 h-12 bg-black/10 rounded-full flex items-center justify-center border border-black/5">
                 <Zap className="text-black" />
               </div>
               <ArrowUpRight className="text-black" size={32} />
             </div>
             <div className="relative z-10">
                <h3 className="text-3xl font-bold text-black mb-2">Performance & SEO</h3>
                <p className="text-black/70 font-medium max-w-md">We target 99+ Lighthouse scores. Speed equals revenue in the modern web.</p>
             </div>
          </ShineCard>
        </div>
      </div>
    </section>
  );
};

// --- Refined Snake Process ---
const TimelineItem = ({ step, scrollProgress }) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const unsubscribe = scrollProgress.on("change", (latest) => {
      const stepThreshold = (step.id - 0.5) / 6.5; 
      setIsActive(latest > stepThreshold);
    });
    return () => unsubscribe();
  }, [scrollProgress, step.id]);

  return (
    <div className={`relative flex flex-col items-center justify-center p-6 transition-all duration-700 ${isActive ? 'opacity-100 scale-100' : 'opacity-20 scale-95 blur-[2px]'}`}>
      <div className={`relative z-10 p-5 rounded-2xl border mb-6 transition-all duration-500 backdrop-blur-md
          ${isActive 
              ? 'bg-[#46cef6]/10 border-[#46cef6] text-[#46cef6] shadow-[0_0_30px_rgba(70,206,246,0.3)]' 
              : 'bg-[#111] border-white/10 text-neutral-600 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)]'}`}>
        <step.icon size={28} strokeWidth={1.5} />
      </div>
      <h3 className={`text-xl font-bold mb-2 font-mono uppercase tracking-wider transition-colors duration-500 ${isActive ? 'text-white' : 'text-neutral-600'}`}>
        {step.title}
      </h3>
      <p className="text-sm text-neutral-500 max-w-[220px] text-center leading-relaxed font-medium">
        {step.desc}
      </p>
    </div>
  );
};

const MobileTimelineItem = ({ step, index, scrollProgress }) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const unsubscribe = scrollProgress.on("change", (latest) => {
      const stepThreshold = (index + 0.1) / 6.5; 
      setIsActive(latest > stepThreshold);
    });
    return () => unsubscribe();
  }, [scrollProgress, index]);

  return (
    <div className={`relative pl-16 transition-all duration-700 ${isActive ? 'opacity-100 translate-x-0' : 'opacity-30 translate-x-4'}`}>
      {/* Icon Bubble */}
      <div className={`absolute left-4 -translate-x-1/2 top-0 p-3 rounded-full border-2 transition-all duration-500 z-10 bg-[#050505]
          ${isActive 
              ? 'border-[#46cef6] text-[#46cef6] shadow-[0_0_20px_rgba(70,206,246,0.4)]' 
              : 'border-white/10 text-neutral-600'}`}>
        <step.icon size={20} />
      </div>
      
      <h3 className={`text-xl font-bold mb-2 font-mono uppercase tracking-wider transition-colors duration-500 ${isActive ? 'text-white' : 'text-neutral-600'}`}>
        {step.title}
      </h3>
      <p className="text-sm text-neutral-500 leading-relaxed font-medium">
        {step.desc}
      </p>
    </div>
  );
};

const ProcessSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end end"]
  });

  const pathLength = useSpring(scrollYProgress, { stiffness: 60, damping: 20, restDelta: 0.001 });
  const pathData = "M 50 150 H 850 Q 950 150 950 300 Q 950 450 850 450 H 50";

  const processSteps = [
    { id: 1, title: "Discovery", desc: "Brand goals & strategy.", icon: Search },
    { id: 2, title: "Architecture", desc: "User journey mapping.", icon: Layout },
    { id: 3, title: "Development", desc: "Clean, semantic code.", icon: Code },
    { id: 4, title: "Quality Check", desc: "Rigorous testing.", icon: CheckCircle },
    { id: 5, title: "Deployment", desc: "Launch with SEO.", icon: Rocket },
    { id: 6, title: "Evolution", desc: "Growth & analytics.", icon: BarChart }
  ];

  return (
    <section id="process" ref={containerRef} className="py-32 bg-[#050505] relative overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <span className="text-[#46cef6] font-mono text-xs tracking-[0.3em] uppercase block mb-4">The Methodology</span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white">FROM CONCEPT TO <br/> <span className="text-neutral-600">EXECUTION</span></h2>
        </div>

        {/* Desktop Snake View */}
        <div className="hidden md:block relative w-full max-w-6xl mx-auto h-[600px] select-none">
          <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible" viewBox="0 0 1000 600">
            <path d={pathData} fill="none" stroke="#1a1a1a" strokeWidth="4" strokeLinecap="round" />
          </svg>
          <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible" viewBox="0 0 1000 600">
            <motion.path 
              d={pathData} fill="none" stroke="#46cef6" strokeWidth="4" strokeLinecap="round" 
              style={{ pathLength }} filter="drop-shadow(0 0 8px rgba(70,206,246,0.6))"
            />
          </svg>
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-visible" style={{ zIndex: 20 }}>
            <svg className="w-full h-full overflow-visible" viewBox="0 0 1000 600">
              <motion.circle 
                r="8" fill="#000" stroke="#46cef6" strokeWidth="4"
                style={{ 
                  offsetPath: `path("${pathData}")`, 
                  "--snake-progress": useTransform(pathLength, [0, 1], ["0%", "100%"]) 
                }}
                className="snake-head shadow-[0_0_20px_#46cef6]"
              />
            </svg>
          </div>
          <div className="absolute inset-0 grid grid-cols-3 grid-rows-2">
            {[0, 1, 2].map(i => <div key={i} className="flex items-center justify-center"><TimelineItem step={processSteps[i]} scrollProgress={scrollYProgress} /></div>)}
            {[5, 4, 3].map(i => <div key={i} className="flex items-center justify-center"><TimelineItem step={processSteps[i]} scrollProgress={scrollYProgress} /></div>)}
          </div>
        </div>

        {/* Mobile View */}
        <div className="md:hidden relative ml-4 py-8">
          {/* Vertical Track */}
          <div className="absolute left-4 top-0 bottom-0 w-[2px] bg-white/10" />
          
          {/* Vertical Progress Line */}
          <motion.div 
            style={{ height: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]) }}
            className="absolute left-4 top-0 w-[2px] bg-[#46cef6] origin-top"
          >
             <div className="absolute -bottom-1 -left-[5px] w-3 h-3 rounded-full bg-[#46cef6] shadow-[0_0_15px_#46cef6]" />
          </motion.div>

          <div className="flex flex-col gap-16">
            {processSteps.map((step, index) => (
               <MobileTimelineItem key={index} step={step} index={index} scrollProgress={scrollYProgress} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Packages = () => {
  const plans = [
    {
      name: "Speed Launch",
      icon: Clock,
      desc: "For urgent landing pages.",
      features: ["3-Day Delivery", "One-Page Design", "Basic SEO", "Mobile Ready"],
      highlight: false
    },
    {
      name: "Custom Brand",
      icon: Star,
      desc: "Full corporate website.",
      features: ["React/Next.js Code", "5-7 Pages", "High-End Animation", "CMS Integration"],
      highlight: true
    },
    {
      name: "E-Com Scale",
      icon: Package,
      desc: "High-performance store.",
      features: ["Shopify/Headless", "Payments Setup", "Inventory System", "Sales Funnel"],
      highlight: false
    }
  ];

  return (
    <section id="pricing" className="py-24 px-6 relative z-10 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4 text-white">PACKAGES</h2>
          <p className="text-neutral-400">Transparent pricing for every stage of growth.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <ShineCard key={i} className={`rounded-2xl p-8 flex flex-col transition-all duration-300 ${plan.highlight ? 'border-[#46cef6]/50 shadow-[0_0_40px_-10px_rgba(70,206,246,0.15)]' : ''}`}>
              {plan.highlight && (
                <div className="absolute top-4 right-4 bg-[#46cef6] text-black text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">
                  Recommended
                </div>
              )}
              <div className={`p-4 rounded-xl w-fit mb-6 border ${plan.highlight ? 'bg-[#46cef6] text-black border-[#46cef6]' : 'bg-white/5 text-white border-white/5'}`}>
                <plan.icon size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
              <p className="text-neutral-400 text-sm mb-8">{plan.desc}</p>
              
              <ul className="space-y-4 mb-8 flex-grow">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm text-neutral-300">
                    <CheckCircle size={14} className="text-[#46cef6]" /> {feature}
                  </li>
                ))}
              </ul>
              
              <a href="#contact" className={`w-full py-4 rounded-lg font-bold text-center transition-all text-sm uppercase tracking-widest ${plan.highlight ? 'bg-[#46cef6] text-black hover:bg-white hover:shadow-lg' : 'bg-white/5 text-white hover:bg-white hover:text-black border border-white/5'}`}>
                Get Quote
              </a>
            </ShineCard>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-32 px-6 relative z-10 bg-[#080808]">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        <div>
          <MaskedReveal>
            <h2 className="text-5xl md:text-8xl font-bold tracking-tighter mb-8 text-white">LET'S <br/> TALK.</h2>
          </MaskedReveal>
          <div className="space-y-8 text-lg text-neutral-400 font-light">
            <p>Ready to outpace your competition? We are currently accepting new projects for Q1.</p>
            <div className="flex flex-col gap-4">
               <a href="mailto:hello@oddlambda.com" className="flex items-center gap-4 text-white hover:text-[#46cef6] transition-colors group">
                 <div className="p-3 border border-white/10 rounded-full group-hover:border-[#46cef6] transition-colors"><Mail size={20} /></div>
                 hello@oddlambda.com
               </a>
               <div className="flex items-center gap-4 text-white">
                 <div className="p-3 border border-white/10 rounded-full"><Smartphone size={20} /></div>
                 +1 (555) 123-4567
               </div>
            </div>
          </div>
        </div>

        <form className="space-y-8 mt-4">
          <div className="group relative">
            <input type="text" placeholder="Your Name" className="w-full bg-transparent border-b border-white/20 py-4 text-xl text-white focus:outline-none focus:border-[#46cef6] transition-colors placeholder:text-white/20" />
          </div>
          <div className="group relative">
            <input type="email" placeholder="Email Address" className="w-full bg-transparent border-b border-white/20 py-4 text-xl text-white focus:outline-none focus:border-[#46cef6] transition-colors placeholder:text-white/20" />
          </div>
          <div className="group relative">
            <select className="w-full bg-transparent border-b border-white/20 py-4 text-xl text-neutral-400 focus:outline-none focus:border-[#46cef6] transition-colors appearance-none bg-[#080808]">
              <option>Select Project Type</option>
              <option>Custom Development</option>
              <option>E-Commerce</option>
              <option>Landing Page</option>
            </select>
          </div>
          <div className="group relative">
            <textarea placeholder="Tell us about your project" rows={4} className="w-full bg-transparent border-b border-white/20 py-4 text-xl text-white focus:outline-none focus:border-[#46cef6] transition-colors resize-none placeholder:text-white/20" />
          </div>
          
          <button className="w-full bg-white text-black font-bold text-xl py-6 rounded hover:bg-[#46cef6] transition-colors tracking-wide flex justify-center items-center gap-2 group shadow-[0_0_30px_rgba(255,255,255,0.1)]">
            SEND PROPOSAL <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </button>
        </form>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/5 bg-black text-center relative z-10">
      <div className="text-white font-bold text-[10vw] opacity-[0.03] select-none pointer-events-none overflow-hidden whitespace-nowrap leading-none">
        ODDLAMBDA
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-6">
        <div className="flex gap-8 text-neutral-500 text-sm font-mono uppercase tracking-widest">
          <a href="#" className="hover:text-white transition-colors">Instagram</a>
          <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-white transition-colors">Twitter</a>
        </div>
        <p className="text-neutral-600 text-xs">© {new Date().getFullYear()} Oddlambda Agency. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className={`min-h-screen ${theme.bg} text-white font-sans selection:bg-[#46cef6] selection:text-black overflow-x-hidden`}>
      <style>{`
        .snake-head {
          offset-distance: var(--snake-progress);
        }
        @keyframes shimmer {
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
      <NoiseOverlay />
      <Spotlight />
      <Navbar />
      
      <Hero />
      <Description />
      <TechStack />
      <Manifesto />
      
      {/* --- Quote Section 1: Design Focus --- */}
      <QuoteSection 
        quote="Good design is obvious. Great design is transparent." 
        author="Joe Sparano"
        backgroundText="VISION"
        direction={1}
      />

     <HorizontalScroll />
      
      {/* --- Quote Section 2: Performance Focus --- */}
      <QuoteSection 
        quote="Speed is a feature. Performance is our promise." 
        author="Oddlambda Philosophy"
        backgroundText="SPEED"
        direction={6}
      />

      <BentoServices />
      <Packages />
      
      {/* --- Quote Section 3: Future Focus --- */}
      <QuoteSection 
        quote="The best way to predict the future is to create it." 
        author="Alan Kay"
        backgroundText="FUTURE"
        direction={1}
      />

      <ProcessSection />
      <Contact />
      <Footer />
    </div>
  );
}