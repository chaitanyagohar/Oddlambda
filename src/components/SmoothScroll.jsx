import React from 'react';
import { ReactLenis } from '@studio-freight/react-lenis';

function SmoothScroll({ children }) {
  return (
    <ReactLenis 
      root 
      options={{ 
        lerp: 0.08,   // Lower = smoother/heavier feel
        duration: 1.5, // Scroll duration
        smoothTouch: false, // Keep touch native
      }}
    >
      {children}
    </ReactLenis>
  );
}

export default SmoothScroll;