import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const CyberTunnel = ({ 
  colors = ["#46cef6", "#ffffff"], 
  speed = 0.5, 
  size = 10, 
  opacity = 0.5 
}) => {
  const mountRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // --- Scene Setup ---
    const scene = new THREE.Scene();
    // Add fog to fade out the tunnel distance smoothly
    scene.fog = new THREE.FogExp2(0x000000, 0.03);

    const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
    camera.position.z = 0;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5)); // Cap pixel ratio for performance
    container.appendChild(renderer.domElement);

    // --- Tunnel Geometry (Cylinder) ---
    // RadiusTop, RadiusBottom, Height, RadialSegments, HeightSegments, OpenEnded
    const geometry = new THREE.CylinderGeometry(size, size, 200, 32, 20, true);
    
    // Flip geometry inside out so we see the grid from the inside
    geometry.scale(-1, 1, 1);
    // Rotate to align with Z axis (the direction we travel)
    geometry.rotateX(-Math.PI / 2);

    // Convert to wireframe for the grid look
    const wireframe = new THREE.WireframeGeometry(geometry);
    
    const material = new THREE.LineBasicMaterial({
      color: new THREE.Color(colors[0]),
      opacity: opacity,
      transparent: true,
      blending: THREE.AdditiveBlending, // Makes overlapping lines glow brighter
      depthTest: false, // Ensures we see "through" the tunnel walls
      side: THREE.BackSide
    });

    // Create two tunnel segments for infinite looping
    const tunnel1 = new THREE.LineSegments(wireframe, material);
    const tunnel2 = new THREE.LineSegments(wireframe, material);

    // Position second tunnel behind the first
    tunnel2.position.z = -200;

    scene.add(tunnel1);
    scene.add(tunnel2);

    // --- Particle Starfield (Warp Effect) ---
    const particlesGeo = new THREE.BufferGeometry();
    const particlesCount = 1000;
    const posArray = new Float32Array(particlesCount * 3);

    for(let i = 0; i < particlesCount * 3; i++) {
        // Spread particles randomly in a wide area
        posArray[i] = (Math.random() - 0.5) * size * 5; 
    }
    
    particlesGeo.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    const particlesMat = new THREE.PointsMaterial({
        size: 0.05,
        color: colors[1], // Secondary color (white)
        transparent: true,
        opacity: 0.6,
        blending: THREE.AdditiveBlending
    });
    const particles = new THREE.Points(particlesGeo, particlesMat);
    scene.add(particles);

    // --- Mouse Interaction ---
    const handleMouseMove = (e) => {
        // Normalize mouse position (-1 to 1)
        const x = (e.clientX / window.innerWidth) * 2 - 1;
        const y = -(e.clientY / window.innerHeight) * 2 + 1;
        mouseRef.current = { x, y };
    };
    window.addEventListener('mousemove', handleMouseMove);

    // --- Animation Loop ---
    let animationId;
    const animate = () => {
      animationId = requestAnimationFrame(animate);

      // 1. Move Tunnels (Infinite Scroll)
      tunnel1.position.z += speed;
      tunnel2.position.z += speed;

      if (tunnel1.position.z >= 200) tunnel1.position.z = -200;
      if (tunnel2.position.z >= 200) tunnel2.position.z = -200;

      // 2. Rotate Tunnels (Dynamic Feel)
      tunnel1.rotation.z += 0.002;
      tunnel2.rotation.z += 0.002;

      // 3. Move Particles (Warp Speed)
      const positions = particles.geometry.attributes.position.array;
      for(let i = 2; i < particlesCount * 3; i += 3) {
          positions[i] += speed * 3; // Particles move faster than tunnel
          if (positions[i] > 100) {
              positions[i] = -100; // Reset to back when they pass camera
          }
      }
      particles.geometry.attributes.position.needsUpdate = true;

      // 4. Camera Parallax (Follow Mouse)
      // Smoothly interpolate current camera position to target mouse position
      camera.position.x += (mouseRef.current.x * 3 - camera.position.x) * 0.05;
      camera.position.y += (mouseRef.current.y * 3 - camera.position.y) * 0.05;
      
      // Keep looking forward
      camera.lookAt(0, 0, -20);

      renderer.render(scene, camera);
    };

    animate();

    // --- Resize Handler ---
    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener('resize', handleResize);

    // --- Cleanup ---
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (animationId) cancelAnimationFrame(animationId);
      if (container && renderer.domElement) container.removeChild(renderer.domElement);
      
      // Dispose Three.js resources to prevent memory leaks
      geometry.dispose();
      wireframe.dispose();
      material.dispose();
      particlesGeo.dispose();
      particlesMat.dispose();
      renderer.dispose();
    };
  }, [colors, speed, size, opacity]);

  return <div ref={mountRef} className="w-full h-full" />;
};

export default CyberTunnel;