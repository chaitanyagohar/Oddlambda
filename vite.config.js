import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Increase the warning limit slightly (3D sites are naturally heavier)
    chunkSizeWarningLimit: 1600, 
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Split external libraries into separate chunks
          if (id.includes('node_modules')) {
            // Put Three.js in its own file
            if (id.includes('three')) {
              return 'three_vendor';
            }
            // Put Framer Motion in its own file
            if (id.includes('framer-motion')) {
              return 'motion_vendor';
            }
            // Put Face-API (if you still have it) in its own file
            if (id.includes('face-api')) {
              return 'face_api_vendor';
            }
            // Put React and other small libs in a vendor file
            return 'vendor';
          }
        },
      },
    },
  },
})