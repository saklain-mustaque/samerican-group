import { useEffect, useRef } from 'react';

const ScrollPerformanceMonitor = ({ enableLogging = false }) => {
  const frameId = useRef();
  const lastScrollTime = useRef(0);
  const scrollEvents = useRef([]);

  useEffect(() => {
    if (!enableLogging) return;

    const measureScrollPerformance = () => {
      const now = performance.now();
      const timeSinceLastScroll = now - lastScrollTime.current;
      
      scrollEvents.current.push(timeSinceLastScroll);
      
      // Keep only last 10 measurements
      if (scrollEvents.current.length > 10) {
        scrollEvents.current.shift();
      }
      
      // Calculate average frame time
      const avgFrameTime = scrollEvents.current.reduce((a, b) => a + b, 0) / scrollEvents.current.length;
      
      // Log performance issues (frame time > 16.67ms indicates < 60fps)
      if (avgFrameTime > 16.67 && scrollEvents.current.length >= 5) {
        console.warn(`Scroll performance issue detected: ${avgFrameTime.toFixed(2)}ms avg frame time`);
      }
      
      lastScrollTime.current = now;
    };

    const handleScroll = () => {
      if (frameId.current) {
        cancelAnimationFrame(frameId.current);
      }
      
      frameId.current = requestAnimationFrame(measureScrollPerformance);
    };

    // Monitor scroll performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Performance optimization checks
    const checkPerformance = () => {
      // Check if hardware acceleration is available
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      
      if (!gl) {
        console.warn('WebGL not available - scroll performance may be reduced');
      }
      
      // Check device memory (if available)
      if ('deviceMemory' in navigator) {
        const memory = navigator.deviceMemory;
        if (memory < 4) {
          console.info(`Low memory device detected (${memory}GB) - optimizing animations`);
          document.documentElement.classList.add('low-memory-device');
        }
      }
      
      // Check for reduced motion preference
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        document.documentElement.classList.add('prefers-reduced-motion');
        console.info('Reduced motion preference detected');
      }
    };

    checkPerformance();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (frameId.current) {
        cancelAnimationFrame(frameId.current);
      }
    };
  }, [enableLogging]);

  return null;
};

export default ScrollPerformanceMonitor;