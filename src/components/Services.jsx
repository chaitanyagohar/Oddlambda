import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const services = [
  {
    id: "01",
    title: "Web Architecture",
    description: "We don't use templates. We build bespoke React & Next.js platforms designed for scalability, security, and long-term growth.",
    tags: ["React", "Next.js", "Node.js", "Vercel"],
    img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "02",
    title: "E-Commerce",
    description: "Headless Shopify and custom storefronts. We engineer the buying journey to maximize conversion rates and average order value.",
    tags: ["Shopify Plus", "Stripe", "Headless", "CRO"],
    img: "https://images.unsplash.com/photo-1556742102-820c8e762363?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "03",
    title: "Motion & WebGL",
    description: "Immersive 3D experiences and fluid animations that differentiate your brand from the static noise of competitors.",
    tags: ["Three.js", "R3F", "GLSL", "Framer Motion"],
    img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop"
  },
  {
    id: "04",
    title: "Growth Engine",
    description: "Technical SEO, Core Web Vitals optimization, and conversion tracking. We ensure the beautiful site we build actually ranks.",
    tags: ["Technical SEO", "Analytics", "Performance", "Ads"],
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
  }
];

const Services = () => {
  const [hoveredService, setHoveredService] = useState(null);

  return (
    <section className="relative bg-[#030303] text-white py-32 px-6 md:px-12 border-b border-white/5">
      <div className="max-w-[90rem] mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24">
        
        {/* Sticky Visual Area (Left) */}
        <div className="lg:w-5/12">
          <div className="sticky top-32 flex flex-col gap-10">
            <div>
              <span className="text-[#46cef6] font-mono text-xs tracking-[0.3em] uppercase mb-4 block">
                Capabilities
              </span>
              <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[0.9] text-white">
                DIGITAL <br/>
                <span className="text-neutral-600">EXPERTISE.</span>
              </h2>
            </div>
            
            {/* Image Preview Container */}
            <div className="relative aspect-[4/3] w-full rounded-lg overflow-hidden bg-neutral-900 border border-white/5 hidden lg:block">
               <AnimatePresence mode="wait">
                 {hoveredService ? (
                   <motion.div 
                     key={hoveredService}
                     className="absolute inset-0"
                     initial={{ opacity: 0, scale: 1.1 }}
                     animate={{ opacity: 1, scale: 1 }}
                     exit={{ opacity: 0, scale: 1.05 }}
                     transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                   >
                     <img 
                        src={services.find(s => s.id === hoveredService).img} 
                        alt="Service Preview"
                        className="w-full h-full object-cover opacity-80"
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-transparent opacity-60" />
                     
                     {/* Overlay Index */}
                     <div className="absolute bottom-6 left-6">
                        <span className="text-[8rem] leading-none font-bold text-white/10 font-mono tracking-tighter">
                          {services.find(s => s.id === hoveredService).id}
                        </span>
                     </div>
                   </motion.div>
                 ) : (
                   <div className="absolute inset-0 flex items-center justify-center">
                     <span className="text-neutral-700 font-mono text-xs tracking-widest uppercase animate-pulse">
                       ( Hover a service )
                     </span>
                   </div>
                 )}
               </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Services List (Right) */}
        <div className="lg:w-7/12 flex flex-col justify-center">
          {services.map((service) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 1 }}
              animate={{ 
                opacity: hoveredService && hoveredService !== service.id ? 0.3 : 1,
                filter: hoveredService && hoveredService !== service.id ? "blur(2px)" : "blur(0px)"
              }}
              transition={{ duration: 0.4 }}
              className="group border-t border-white/10 py-12 relative cursor-pointer"
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
            >
              <div className="flex flex-col md:flex-row gap-6 md:gap-12 relative z-10">
                {/* ID */}
                <span className="text-neutral-500 font-mono text-sm pt-2 group-hover:text-[#46cef6] transition-colors duration-300">
                  {service.id}
                </span>

                <div className="flex-1">
                  {/* Title */}
                  <h3 className="text-3xl md:text-5xl font-bold text-white mb-4 group-hover:translate-x-2 transition-transform duration-500 ease-out">
                    {service.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-lg text-neutral-400 leading-relaxed max-w-xl group-hover:text-white transition-colors duration-300">
                    {service.description}
                  </p>

                  {/* Tags Reveal */}
                  <div className="overflow-hidden h-0 group-hover:h-auto transition-all duration-500 ease-in-out mt-0 group-hover:mt-6">
                    <div className="flex flex-wrap gap-2 pt-2">
                      {service.tags.map((tag, i) => (
                        <span 
                          key={tag} 
                          className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-mono text-[#46cef6]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Arrow */}
                <div className="absolute right-0 top-12 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-500">
                   <ArrowUpRight className="text-[#46cef6] w-8 h-8" />
                </div>
              </div>
            </motion.div>
          ))}
          <div className="border-t border-white/10" />
        </div>

      </div>
    </section>
  );
};

export default Services;