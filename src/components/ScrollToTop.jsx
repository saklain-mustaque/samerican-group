import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const timeoutRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    // Clear any existing timeout and animations
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }

    // Immediate scroll reset for route changes
    const resetScroll = () => {
      // Cancel any ongoing smooth scrolling
      document.documentElement.style.scrollBehavior = 'auto';
      document.body.style.scrollBehavior = 'auto';
      
      // Force immediate scroll to top
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };

    // Execute immediate scroll reset
    resetScroll();
    
    // Use requestAnimationFrame to ensure scroll happens after DOM updates
    animationRef.current = requestAnimationFrame(() => {
      resetScroll();
      
      // Additional fallback timeout for complex layouts
      timeoutRef.current = setTimeout(() => {
        if (window.pageYOffset > 0 || document.documentElement.scrollTop > 0) {
          resetScroll();
        }
        
        // Restore smooth scrolling for within-page navigation after route change is complete
        setTimeout(() => {
          document.documentElement.style.scrollBehavior = '';
          document.body.style.scrollBehavior = '';
        }, 100);
      }, 50);
    });

    // Cleanup function
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [pathname]);

  return null;
};

export default ScrollToTop;