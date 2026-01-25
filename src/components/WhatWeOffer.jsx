// "use client";

// import React, { useRef, useState, useEffect } from "react";
// import { motion, useSpring, useMotionValue } from "framer-motion";
// import { ArrowUpRight } from "lucide-react";

// // --- SERVICE DATA ---
// const serviceItems = [
//   { 
//     text: 'Corporate Website', 
//     link: '#corporate', 
//     image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop',
//     desc: 'High-authority digital headquarters.'
//   },
//   { 
//     text: 'Landing Pages', 
//     link: '#landing', 
//     image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop',
//     desc: 'Conversion-focused entry points.'
//   },
//   { 
//     text: 'E-commerce', 
//     link: '#ecommerce', 
//     image: 'https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?q=80&w=2070&auto=format&fit=crop',
//     desc: 'Scalable revenue engines.'
//   },
//   { 
//     text: 'Brand Identity', 
//     link: '#brand', 
//     image: 'https://images.unsplash.com/photo-1634152962476-4b8a00e1915c?q=80&w=2068&auto=format&fit=crop',
//     desc: 'Visual systems that endure.'
//   },
//   { 
//     text: 'Personal Portfolio', 
//     link: '#portfolio', 
//     image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=2055&auto=format&fit=crop',
//     desc: 'Digital proof of competence.'
//   },
//   { 
//     text: 'Digital Presence', 
//     link: '#presence', 
//     image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=2076&auto=format&fit=crop',
//     desc: 'Holistic online authority.'
//   },
//   { 
//     text: 'Digital Marketing', 
//     link: '#marketing', 
//     image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop',
//     desc: 'Data-driven growth loops.'
//   }
// ];

// // --- FLOWING MENU ITEM ---
// const FlowingMenuItem = ({ item, index, setHoveredIndex, setMousePosition }) => {
//   return (
//     <motion.a
//       href={item.link}
//       onMouseEnter={(e) => {
//         setHoveredIndex(index);
//         // Optional: Reset cursor pos if needed, but the parent handles global mouse
//       }}
//       onMouseLeave={() => setHoveredIndex(null)}
//       initial={{ opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ delay: index * 0.1, duration: 0.5 }}
//       viewport={{ once: true }}
//       className="group relative flex items-center justify-between py-10 md:py-14 border-t border-white/10 hover:bg-white/5 transition-colors duration-300 px-4 md:px-8 cursor-none"
//     >
//       <div className="flex items-baseline gap-6 md:gap-12">
//         <span className="font-mono text-xs md:text-sm text-stone-500 group-hover:text-amber-400 transition-colors">
//           0{index + 1}
//         </span>
//         <h3 className="text-3xl md:text-6xl font-bold tracking-tighter text-stone-300 group-hover:text-white transition-colors">
//           {item.text}
//         </h3>
//       </div>
      
//       <div className="flex items-center gap-4 md:gap-8">
//         <span className="hidden md:block font-mono text-xs text-stone-600 group-hover:text-stone-400 transition-colors uppercase tracking-widest">
//           {item.desc}
//         </span>
//         <ArrowUpRight 
//             className="text-stone-600 group-hover:text-amber-400 group-hover:rotate-45 transition-all duration-300" 
//             size={24} 
//         />
//       </div>
//     </motion.a>
//   );
// };

// const WhatWeOffer = () => {
//   const [hoveredIndex, setHoveredIndex] = useState(null);
  
//   // Spring physics for smooth cursor following
//   const mouseX = useMotionValue(0);
//   const mouseY = useMotionValue(0);
  
//   const springConfig = { damping: 20, stiffness: 150, mass: 0.5 };
//   const x = useSpring(mouseX, springConfig);
//   const y = useSpring(mouseY, springConfig);

//   useEffect(() => {
//     const move = (e) => {
//       mouseX.set(e.clientX);
//       mouseY.set(e.clientY);
//     };
//     window.addEventListener("mousemove", move);
//     return () => window.removeEventListener("mousemove", move);
//   }, [mouseX, mouseY]);

//   return (
//     <section className="relative bg-[#030303] text-white py-32 overflow-hidden cursor-none">
      
//       {/* ---------------- DECORATION ---------------- */}
//       {/* Noise Texture */}
//       <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      
//       {/* Vertical Grid Lines */}
//       <div className="absolute left-6 md:left-12 top-0 bottom-0 w-px bg-white/5" />
//       <div className="absolute right-6 md:right-12 top-0 bottom-0 w-px bg-white/5" />

//       {/* ---------------- CONTENT ---------------- */}
//       <div className="relative z-10 max-w-[90rem] mx-auto px-6 md:px-24">
        
//         {/* Section Header */}
//         <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
//           <div>
//             <div className="flex items-center gap-4 mb-6 opacity-60">
//                 <span className="text-xs font-mono text-amber-400 tracking-[0.2em] uppercase">// 02. Capabilities</span>
//                 <div className="h-px w-12 bg-amber-400/50" />
//             </div>
//             <h2 className="text-5xl md:text-8xl font-bold tracking-tighter leading-none text-white">
//               SYSTEM<br />
//               <span className="text-stone-600">MODULES</span>
//             </h2>
//           </div>
//           <p className="font-mono text-xs md:text-sm text-stone-400 max-w-xs leading-relaxed uppercase tracking-wide">
//             Our suite of engineered solutions designed to elevate brand authority and maximize conversion.
//           </p>
//         </div>

//         {/* ---------------- LIST ---------------- */}
//         <div className="w-full border-b border-white/10">
//           {serviceItems.map((item, i) => (
//             <FlowingMenuItem 
//               key={i} 
//               item={item} 
//               index={i} 
//               setHoveredIndex={setHoveredIndex} 
//             />
//           ))}
//         </div>

//       </div>

//       {/* ---------------- FLOATING IMAGE REVEAL ---------------- */}
//       <motion.div
//         style={{ x, y }}
//         className="fixed top-0 left-0 w-[300px] h-[400px] pointer-events-none z-50 rounded-sm overflow-hidden mix-blend-normal hidden md:block"
//         initial={{ opacity: 0, scale: 0.5 }}
//         animate={{ 
//           opacity: hoveredIndex !== null ? 1 : 0,
//           scale: hoveredIndex !== null ? 1 : 0.5,
//         }}
//         transition={{ duration: 0.2 }}
//       >
//         {/* We render ALL images but only show the active one to prevent flickering on switch */}
//         {serviceItems.map((item, i) => (
//           <img
//             key={i}
//             src={item.image}
//             alt={item.text}
//             className={`
//                 absolute inset-0 w-full h-full object-cover transition-opacity duration-300
//                 ${hoveredIndex === i ? "opacity-100" : "opacity-0"}
//             `}
//           />
//         ))}
        
//         {/* Overlay for Tacticall Look */}
//         <div className="absolute inset-0 border border-amber-400/30" />
//         <div className="absolute bottom-2 left-2 bg-black/80 px-2 py-1">
//              <span className="text-[10px] font-mono text-amber-400 uppercase tracking-widest">
//                 FIG. 0{hoveredIndex !== null ? hoveredIndex + 1 : "0"}
//              </span>
//         </div>
//       </motion.div>

//     </section>
//   );
// };

// export default WhatWeOffer;






"use client";

import React from "react";
import FlowingMenu from "./FlowingMenu"; // Importing your existing component
import "./FlowingMenu.css"; // Importing your existing CSS

const WhatWeOffer = () => {

  // --- 1. THE DATA (Your Services + Tactical Images) ---
  const oddLambdaServices = [
    { 
      text: 'Corporate Website', 
      link: '#corporate', 
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop'
    },
    { 
      text: 'Landing Pages', 
      link: '#landing', 
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop'
    },
    { 
      text: 'Web Applications', 
      link: '#corporate', 
      image: 'https://images.unsplash.com/photo-1590971862391-06cac0657603?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    { 
      text: 'E-commerce', 
      link: '#ecommerce', 
      image: 'https://images.pexels.com/photos/6214472/pexels-photo-6214472.jpeg'
    },
    { 
      text: 'Brand Identity', 
      link: '#brand', 
      image: 'https://images.unsplash.com/photo-1634152962476-4b8a00e1915c?q=80&w=2068&auto=format&fit=crop'
    },
    { 
      text: 'Personal Portfolio', 
      link: '#portfolio', 
      image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=2055&auto=format&fit=crop'
    },
    { 
      text: 'Digital Presence', 
      link: '#presence', 
      image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=2076&auto=format&fit=crop'
    },
    { 
      text: 'Digital Marketing', 
      link: '#marketing', 
      image: 'https://images.unsplash.com/photo-1636114673156-052a83459fc1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
  ];

  return (
    <section className="relative bg-[#030303] text-white py-24 md:py-32 overflow-hidden min-h-screen">
      
      {/* ---------------- DECORATION (The OddLambda Look) ---------------- */}
      {/* Noise Texture */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      
      {/* Vertical Grid Lines */}
      <div className="absolute left-6 md:left-12 top-0 bottom-0 w-px bg-white/5 z-0" />
      <div className="absolute right-6 md:right-12 top-0 bottom-0 w-px bg-white/5 z-0" />

      {/* ---------------- HEADER ---------------- */}
      <div className="relative z-10 max-w-[90rem] mx-auto px-6 md:px-24 mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <div className="flex items-center gap-4 mb-6 opacity-60">
                <span className="text-xs font-mono text-amber-400 tracking-[0.2em] uppercase">// 02. Capabilities</span>
                <div className="h-px w-12 bg-amber-400/50" />
            </div>
            <h2 className="text-5xl md:text-8xl font-bold tracking-tighter leading-none text-white">
              SYSTEM<br />
              <span className="text-stone-600">MODULES</span>
            </h2>
          </div>
          
          <div className="hidden md:block text-right">
             <p className="font-mono text-xs text-emerald-500 mb-2 uppercase tracking-widest">
                /// STATUS: DEPLOYABLE
             </p>
             <p className="font-mono text-xs md:text-sm text-stone-400 max-w-xs leading-relaxed uppercase tracking-wide">
                Our suite of engineered solutions designed to elevate brand authority.
             </p>
          </div>
        </div>
      </div>

      {/* ---------------- THE FLOWING MENU COMPONENT ---------------- */}
      <div className="relative w-full h-[600px] md:h-[800px]">
        <FlowingMenu items={oddLambdaServices} />
      </div>

    </section>
  );
};

export default WhatWeOffer;