import { useEffect, useCallback, useRef } from 'react';

// Custom hook for smooth scrolling utilities
export const useSmoothScroll = () => {
  const rafRef = useRef(null);

  // Smooth scroll to element
  const scrollToElement = useCallback((elementId, offset = 0) => {
    const element = document.getElementById(elementId);
    if (!element) return;

    const targetPosition = element.offsetTop - offset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 800;
    let startTime = null;

    const animateScroll = (currentTime) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      
      // Smooth easing function
      const easeInOutQuart = progress => 
        progress < 0.5 
          ? 8 * progress * progress * progress * progress 
          : 1 - 8 * (--progress) * progress * progress * progress;
      
      const currentPosition = startPosition + (distance * easeInOutQuart(progress));
      window.scrollTo(0, currentPosition);

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animateScroll);
      }
    };

    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
    }
    rafRef.current = requestAnimationFrame(animateScroll);
  }, []);

  // Smooth scroll to top
  const scrollToTop = useCallback(() => {
    const startPosition = window.pageYOffset;
    const duration = 600;
    let startTime = null;

    const animateScroll = (currentTime) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      
      const easeOutCubic = progress => 1 - Math.pow(1 - progress, 3);
      const currentPosition = startPosition * (1 - easeOutCubic(progress));
      
      window.scrollTo(0, currentPosition);

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animateScroll);
      }
    };

    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
    }
    rafRef.current = requestAnimationFrame(animateScroll);
  }, []);

  // Clean up on unmount
  useEffect(() => {
    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  return { scrollToElement, scrollToTop };
};

// Hook for optimizing scroll performance
export const useScrollOptimization = () => {
  const ticking = useRef(false);
  const lastScrollY = useRef(0);

  const updateScrollDirection = useCallback((callback) => {
    const scrollY = window.pageYOffset;
    const direction = scrollY > lastScrollY.current ? 'down' : 'up';
    
    callback({
      scrollY,
      direction,
      isScrolling: scrollY !== lastScrollY.current
    });
    
    lastScrollY.current = scrollY;
    ticking.current = false;
  }, []);

  const optimizedScrollHandler = useCallback((callback) => {
    if (!ticking.current) {
      requestAnimationFrame(() => updateScrollDirection(callback));
      ticking.current = true;
    }
  }, [updateScrollDirection]);

  return { optimizedScrollHandler };
};