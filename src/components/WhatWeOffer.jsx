"use client";

import React from "react";
import FlowingMenu from "./FlowingMenu";
import "./FlowingMenu.css";

const WhatWeOffer = () => {

  /* ---------------- DATA ---------------- */

  const oddLambdaServices = [
    { 
      text: "Corporate Website", 
      link: "#corporate", 
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
    },
    { 
      text: "Landing Pages", 
      link: "#landing", 
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop"
    },
    { 
      text: "Web Applications", 
      link: "#apps", 
      image: "https://images.unsplash.com/photo-1590971862391-06cac0657603?q=80&w=1170&auto=format&fit=crop"
    },
    { 
      text: "E-commerce", 
      link: "#ecommerce", 
      image: "https://images.pexels.com/photos/6214472/pexels-photo-6214472.jpeg"
    },
    { 
      text: "Brand Identity", 
      link: "#brand", 
      image: "https://images.unsplash.com/photo-1634152962476-4b8a00e1915c?q=80&w=2068&auto=format&fit=crop"
    },
    { 
      text: "Personal Portfolio", 
      link: "#portfolio", 
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=2055&auto=format&fit=crop"
    },
    { 
      text: "Digital Presence", 
      link: "#presence", 
      image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=2076&auto=format&fit=crop"
    },
    { 
      text: "Digital Marketing", 
      link: "#marketing", 
      image: "https://images.unsplash.com/photo-1636114673156-052a83459fc1?q=80&w=1170&auto=format&fit=crop"
    }
  ];

  return (
    <section className="relative bg-black text-white py-24 md:py-32 overflow-hidden min-h-screen">

      {/* ============================================================= */}
      {/* Background Video (Same As Trust Section) */}
      {/* ============================================================= */}

      <video
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover opacity-[0.45]"
        src="https://www.pexels.com/download/video/7010499/"
      />

      {/* Dark Overlay (For Readability) */}
      <div className="absolute inset-0 bg-black/60" />

      {/* ============================================================= */}
      {/* UI Overlays */}
      {/* ============================================================= */}

      {/* Noise */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      {/* Grid Lines */}
      <div className="absolute left-6 md:left-12 top-0 bottom-0 w-px bg-white/5 z-0" />
      <div className="absolute right-6 md:right-12 top-0 bottom-0 w-px bg-white/5 z-0" />

      {/* ============================================================= */}
      {/* Content */}
      {/* ============================================================= */}

      <div className="relative z-10 max-w-[90rem] mx-auto px-6 md:px-24 mb-16">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">

          <div>
            <div className="flex items-center gap-4 mb-6 opacity-60">
              <span className="text-xs font-mono text-amber-400 tracking-[0.2em] uppercase">
                // 02. Capabilities
              </span>

              <div className="h-px w-12 bg-amber-400/50" />
            </div>

            <h2 className="text-5xl md:text-8xl font-bold tracking-tighter leading-none text-white">
              SYSTEM
              <br />
              <span className="text-stone-600">MODULES</span>
            </h2>
          </div>

          {/* Right Meta */}
          <div className="hidden md:block text-right">
            <p className="font-mono text-xs text-emerald-500 mb-2 uppercase tracking-widest">
              /// STATUS: DEPLOYABLE
            </p>

            <p className="font-mono text-xs md:text-sm text-stone-400 max-w-xs leading-relaxed uppercase tracking-wide">
              Modular systems engineered for brand authority and growth.
            </p>
          </div>
        </div>
      </div>

      {/* ============================================================= */}
      {/* Flowing Menu */}
      {/* ============================================================= */}

      <div className="relative z-10 w-full h-[600px] md:h-[800px]">
        <FlowingMenu items={oddLambdaServices} />
      </div>

    </section>
  );
};

export default WhatWeOffer;
