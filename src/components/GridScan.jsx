import { useEffect, useRef } from 'react';
import { EffectComposer, RenderPass, EffectPass, BloomEffect, ChromaticAberrationEffect } from 'postprocessing';
import * as THREE from 'three';
import './GridScan.css';

const vert = `
varying vec2 vUv;
void main(){
  vUv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}
`;

const frag = `
precision highp float;
uniform vec3 iResolution;
uniform float iTime;
uniform vec2 uSkew;
uniform float uTilt;
uniform float uYaw;
uniform float uLineThickness;
uniform vec3 uLinesColor;
uniform vec3 uScanColor;
uniform float uGridScale;
uniform float uLineStyle;
uniform float uLineJitter;
uniform float uScanOpacity;
uniform float uScanDirection;
uniform float uNoise;
uniform float uBloomOpacity;
uniform float uScanGlow;
uniform float uScanSoftness;
uniform float uPhaseTaper;
uniform float uScanDuration;
uniform float uScanDelay;
varying vec2 vUv;

float smoother01(float a, float b, float x){
  float t = clamp((x - a) / max(1e-5, (b - a)), 0.0, 1.0);
  return t * t * t * (t * (t * 6.0 - 15.0) + 10.0);
}

void mainImage(out vec4 fragColor, in vec2 fragCoord)
{
    vec2 p = (2.0 * fragCoord - iResolution.xy) / iResolution.y;
    vec3 ro = vec3(0.0);
    vec3 rd = normalize(vec3(p, 2.0));

    // Rotation Matrices
    float cR = cos(uTilt), sR = sin(uTilt);
    rd.xy = mat2(cR, -sR, sR, cR) * rd.xy;
    float cY = cos(uYaw), sY = sin(uYaw);
    rd.xz = mat2(cY, -sY, sY, cY) * rd.xz;

    vec2 skew = clamp(uSkew, vec2(-0.7), vec2(0.7));
    rd.xy += skew * rd.z;

    float minT = 1e20;
    float gridScale = max(1e-5, uGridScale);
    float fadeStrength = 2.0;
    vec2 gridUV = vec2(0.0);
    float hitIsY = 1.0;

    // Raycast to 4 planes (ceiling, floor, left wall, right wall)
    for (int i = 0; i < 4; i++) {
        float isY = float(i < 2);
        float pos = mix(-0.2, 0.2, float(i)) * isY + mix(-0.5, 0.5, float(i - 2)) * (1.0 - isY);
        float num = pos - (isY * ro.y + (1.0 - isY) * ro.x);
        float den = isY * rd.y + (1.0 - isY) * rd.x;
        float t = num / den;
        vec3 h = ro + rd * t;
        float depthBoost = smoothstep(0.0, 3.0, h.z);
        h.xy += skew * 0.15 * depthBoost;
        bool use = t > 0.0 && t < minT;
        gridUV = use ? mix(h.zy, h.xz, isY) / gridScale : gridUV;
        minT = use ? t : minT;
        hitIsY = use ? isY : hitIsY;
    }

    vec3 hit = ro + rd * minT;
    float dist = length(hit - ro);

    // Grid Lines Logic
    float jitterAmt = clamp(uLineJitter, 0.0, 1.0);
    if (jitterAmt > 0.0) {
        vec2 j = vec2(sin(gridUV.y * 2.7 + iTime * 1.8), cos(gridUV.x * 2.3 - iTime * 1.6)) * (0.15 * jitterAmt);
        gridUV += j;
    }
    vec2 fw = fwidth(gridUV);
    vec2 halfPx = vec2(max(0.0, uLineThickness) * 0.5) * fw;
    vec2 a = min(fract(gridUV), 1.0 - fract(gridUV));
    vec2 gridMask = 1.0 - smoothstep(halfPx, halfPx + fw, a);
    float lineMask = max(gridMask.x, gridMask.y);

    // Fade into distance
    float fade = exp(-dist * fadeStrength);

    // Scan Pulse Logic
    float dur = max(0.05, uScanDuration);
    float del = max(0.0, uScanDelay);
    float scanZMax = 2.0;
    float cycle = dur + del;
    float tCycle = mod(iTime, cycle);
    float scanPhase = clamp((tCycle - del) / dur, 0.0, 1.0);
    
    // Pingpong direction
    if (uScanDirection > 1.5) {
        float t2 = mod(max(0.0, iTime - del), 2.0 * dur);
        scanPhase = (t2 < dur) ? (t2 / dur) : (1.0 - (t2 - dur) / dur);
    }
    
    float scanZ = scanPhase * scanZMax;
    float dz = abs(hit.z - scanZ);
    float widthScale = max(0.1, uScanGlow);
    float sigma = max(0.001, 0.18 * widthScale * uScanSoftness);
    float lineBand = exp(-0.5 * (dz * dz) / (sigma * sigma));
    
    float combinedPulse = lineBand * clamp(uScanOpacity, 0.0, 1.0);

    // Colors
    vec3 gridCol = uLinesColor * lineMask * fade;
    vec3 scanCol = uScanColor * combinedPulse;
    vec3 color = gridCol + scanCol;

    // Noise
    float n = fract(sin(dot(gl_FragCoord.xy + vec2(iTime * 123.4), vec2(12.9898,78.233))) * 43758.5453123);
    color += (n - 0.5) * uNoise;
    
    // Bloom Alpha
    float alpha = clamp(max(lineMask, combinedPulse), 0.0, 1.0);
    float halo = max(gridMask.x, gridMask.y) * fade;
    alpha = max(alpha, halo * clamp(uBloomOpacity, 0.0, 1.0));

    fragColor = vec4(color, alpha);
}

void main(){
  vec4 c;
  mainImage(c, vUv * iResolution.xy);
  gl_FragColor = c;
}
`;

export const GridScan = ({
  sensitivity = 0.55,
  lineThickness = 1,
  linesColor = '#392e4e',
  scanColor = '#FF9FFC',
  scanOpacity = 0.4,
  gridScale = 0.1,
  lineStyle = 'solid',
  lineJitter = 0.1,
  scanDirection = 'pingpong',
  enablePost = true,
  bloomIntensity = 0,
  bloomThreshold = 0,
  bloomSmoothing = 0,
  chromaticAberration = 0.002,
  noiseIntensity = 0.01,
  scanGlow = 0.5,
  scanSoftness = 2,
  scanPhaseTaper = 0.9,
  scanDuration = 2.0,
  scanDelay = 2.0,
  className,
  style
}) => {
  const containerRef = useRef(null);
  const rendererRef = useRef(null);
  const materialRef = useRef(null);
  const composerRef = useRef(null);
  const rafRef = useRef(null);

  // Mouse Interaction Refs
  const lookTarget = useRef(new THREE.Vector2(0, 0));
  // const tiltTarget = useRef(0);
  // const yawTarget = useRef(0);
  const lookCurrent = useRef(new THREE.Vector2(0, 0));
  const lookVel = useRef(new THREE.Vector2(0, 0));
  const tiltCurrent = useRef(0);
  // const tiltVel = useRef(0);
  const yawCurrent = useRef(0);
  // const yawVel = useRef(0);

  // Animation constants
  const s = THREE.MathUtils.clamp(sensitivity, 0, 1);
  const skewScale = THREE.MathUtils.lerp(0.06, 0.2, s);
  const tiltScale = THREE.MathUtils.lerp(0.12, 0.3, s);
  const yawScale = THREE.MathUtils.lerp(0.1, 0.28, s);
  const smoothTime = THREE.MathUtils.lerp(0.45, 0.12, s);
  const maxSpeed = Infinity;
  const yBoost = THREE.MathUtils.lerp(1.2, 1.6, s);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // --- Mouse Handler ---
    const onMove = e => {
      const width = el.offsetWidth || 1;
      const height = el.offsetHeight || 1;
      // Calculate normalized coordinates (-1 to 1) relative to container center
      // e.offsetX gives position relative to the element
      const nx = (e.offsetX / width) * 2 - 1;
      const ny = -((e.offsetY / height) * 2 - 1);
      lookTarget.current.set(nx, ny);
    };

    const onLeave = () => {
        // Reset to center when mouse leaves
        lookTarget.current.set(0, 0);
    };

    el.addEventListener('mousemove', onMove);
    el.addEventListener('mouseleave', onLeave);
    
    return () => {
      el.removeEventListener('mousemove', onMove);
      el.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // --- 1. Renderer Setup ---
    // Force context loss on unmount to prevent "Too many active WebGL contexts"
    const renderer = new THREE.WebGLRenderer({ 
        antialias: false, 
        alpha: true, 
        powerPreference: "high-performance",
        stencil: false,
        depth: false
    });
    rendererRef.current = renderer;
    
    // Performance optimization: Render at 1x or max 1.5x pixel ratio
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.autoClear = false;
    
    // Remove any existing canvas before appending
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    container.appendChild(renderer.domElement);

    // --- 2. Shader Material ---
    const uniforms = {
      iResolution: { value: new THREE.Vector3(container.clientWidth, container.clientHeight, 1) },
      iTime: { value: 0 },
      uSkew: { value: new THREE.Vector2(0, 0) },
      uTilt: { value: 0 },
      uYaw: { value: 0 },
      uLineThickness: { value: lineThickness },
      uLinesColor: { value: new THREE.Color(linesColor) },
      uScanColor: { value: new THREE.Color(scanColor) },
      uGridScale: { value: gridScale },
      uLineStyle: { value: lineStyle === 'dashed' ? 1 : lineStyle === 'dotted' ? 2 : 0 },
      uLineJitter: { value: Math.max(0, Math.min(1, lineJitter || 0)) },
      uScanOpacity: { value: scanOpacity },
      uNoise: { value: noiseIntensity },
      uBloomOpacity: { value: bloomIntensity },
      uScanGlow: { value: scanGlow },
      uScanSoftness: { value: scanSoftness },
      uPhaseTaper: { value: scanPhaseTaper },
      uScanDuration: { value: scanDuration },
      uScanDelay: { value: scanDelay },
      uScanDirection: { value: scanDirection === 'backward' ? 1 : scanDirection === 'pingpong' ? 2 : 0 },
    };

    const material = new THREE.ShaderMaterial({
      uniforms,
      vertexShader: vert,
      fragmentShader: frag,
      transparent: true,
      depthWrite: false,
      depthTest: false
    });
    materialRef.current = material;

    // --- 3. Scene ---
    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const quad = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), material);
    scene.add(quad);

    // --- 4. Post Processing ---
    let composer = null;
    if (enablePost) {
      composer = new EffectComposer(renderer);
      composerRef.current = composer;
      const renderPass = new RenderPass(scene, camera);
      composer.addPass(renderPass);

      const bloom = new BloomEffect({
        intensity: 0.8,
        luminanceThreshold: bloomThreshold,
        luminanceSmoothing: bloomSmoothing
      });
      bloom.blendMode.opacity.value = Math.max(0, bloomIntensity);

      const chroma = new ChromaticAberrationEffect({
        offset: new THREE.Vector2(chromaticAberration, chromaticAberration),
        radialModulation: true,
        modulationOffset: 0.0
      });

      const effectPass = new EffectPass(camera, bloom, chroma);
      effectPass.renderToScreen = true;
      composer.addPass(effectPass);
    }

    const onResize = () => {
      if(!container || !renderer) return;
      renderer.setSize(container.clientWidth, container.clientHeight);
      material.uniforms.iResolution.value.set(container.clientWidth, container.clientHeight, renderer.getPixelRatio());
      if (composerRef.current) composerRef.current.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener('resize', onResize);

    // --- 5. Animation Loop ---
    let last = performance.now();
    const tick = () => {
      const now = performance.now();
      const dt = Math.max(0, Math.min(0.1, (now - last) / 1000)); // Cap delta time
      last = now;

      // Mouse Physics
      lookCurrent.current.copy(
        smoothDampVec2(lookCurrent.current, lookTarget.current, lookVel.current, smoothTime, maxSpeed, dt)
      );

      // Skew Calculation
      const skew = new THREE.Vector2(
          lookCurrent.current.x * skewScale, 
          -lookCurrent.current.y * yBoost * skewScale
      );
      
      // Update Uniforms
      material.uniforms.uSkew.value.set(skew.x, skew.y);
      material.uniforms.uTilt.value = tiltCurrent.current * tiltScale; // Tilt currently static unless we add physics
      material.uniforms.uYaw.value = THREE.MathUtils.clamp(yawCurrent.current * yawScale, -0.6, 0.6); // Yaw currently static
      material.uniforms.iTime.value = now / 1000;
      
      renderer.clear();
      if (composerRef.current) {
        composerRef.current.render(dt);
      } else {
        renderer.render(scene, camera);
      }
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);

    // --- Cleanup ---
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', onResize);

      // Force WebGL context loss to free GPU memory
      try {
          const gl = renderer.getContext();
          const ext = gl.getExtension('WEBGL_lose_context');
          if (ext) ext.loseContext();
      } catch (e) { console.warn("Context loss failed", e); }
      
      material.dispose();
      quad.geometry.dispose();
      if (composerRef.current) {
        composerRef.current.dispose();
        composerRef.current = null;
      }
      renderer.dispose();
      if(container.contains(renderer.domElement)) {
          container.removeChild(renderer.domElement);
      }
    };
  }, [
    sensitivity, lineThickness, linesColor, scanColor, scanOpacity, gridScale, 
    lineStyle, lineJitter, scanDirection, enablePost, noiseIntensity, 
    bloomIntensity, scanGlow, scanSoftness, scanPhaseTaper, scanDuration, scanDelay,
    bloomThreshold, bloomSmoothing, chromaticAberration, smoothTime, skewScale, yBoost, tiltScale, maxSpeed, yawScale
  ]);

  return (
    <div ref={containerRef} className={`gridscan${className ? ` ${className}` : ''}`} style={{ ...style, position: 'relative', width: '100%', height: '100%' }} />
  );
};

export default GridScan;

// --- UTILS ---

function smoothDampVec2(current, target, currentVelocity, smoothTime, maxSpeed, deltaTime) {
  const out = current.clone();
  smoothTime = Math.max(0.0001, smoothTime);
  const omega = 2 / smoothTime;
  const x = omega * deltaTime;
  const exp = 1 / (1 + x + 0.48 * x * x + 0.235 * x * x * x);
  let change = current.clone().sub(target);
  const maxChange = maxSpeed * smoothTime;
  if (change.length() > maxChange) change.setLength(maxChange);
  target = current.clone().sub(change);
  const temp = currentVelocity.clone().addScaledVector(change, omega).multiplyScalar(deltaTime);
  currentVelocity.sub(temp.clone().multiplyScalar(omega));
  currentVelocity.multiplyScalar(exp);
  return out.copy(target.clone().add(change.add(temp).multiplyScalar(exp)));
}