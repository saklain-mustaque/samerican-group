import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  const timeoutRef = useRef(null);
  const animationRef = useRef(null);
  const previousLocationRef = useRef({ pathname: '', hash: '' });

  useEffect(() => {
    // Clear any existing timeout and animations
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }

    const previousLocation = previousLocationRef.current;
    const isNewPage = pathname !== previousLocation.pathname;
    const isNewHash = hash !== previousLocation.hash;

    // Function to scroll to a specific element
    const scrollToElement = (elementId, offset = 120) => {
      const element = document.getElementById(elementId);
      if (!element) {
        console.warn(`Element with id "${elementId}" not found`);
        return false;
      }

      // Set focus for screen readers (WCAG compliance)
      element.setAttribute('tabindex', '-1');
      
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = Math.max(0, elementPosition - offset);

      // Custom smooth scroll with better performance
      const startPosition = window.pageYOffset;
      const distance = offsetPosition - startPosition;
      const duration = Math.min(Math.abs(distance) / 2, 800); // Dynamic duration
      let startTime = null;

      const animateScroll = (currentTime) => {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);

        // Easing function for smooth animation
        const easeInOutCubic = (t) => {
          return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
        };

        const currentPosition = startPosition + distance * easeInOutCubic(progress);
        window.scrollTo(0, currentPosition);

        if (progress < 1) {
          animationRef.current = requestAnimationFrame(animateScroll);
        } else {
          // Focus the element after scroll completes (WCAG compliance)
          element.focus({ preventScroll: true });
          
          // Announce to screen readers
          const announcement = `Navigated to ${element.getAttribute('aria-label') || 
                                             element.textContent?.slice(0, 50) || 
                                             elementId.replace('-', ' ')} section`;
          
          const announcer = document.createElement('div');
          announcer.setAttribute('aria-live', 'polite');
          announcer.setAttribute('aria-atomic', 'true');
          announcer.className = 'sr-only';
          announcer.textContent = announcement;
          document.body.appendChild(announcer);
          
          setTimeout(() => {
            if (document.body.contains(announcer)) {
              document.body.removeChild(announcer);
            }
          }, 1000);
        }
      };

      animationRef.current = requestAnimationFrame(animateScroll);
      return true;
    };

    // Function to reset scroll position
    const resetScroll = () => {
      // Cancel any ongoing smooth scrolling
      document.documentElement.style.scrollBehavior = 'auto';
      document.body.style.scrollBehavior = 'auto';
      
      // Force immediate scroll to top
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };

    // Handle different navigation scenarios
    if (isNewPage) {
      // New page navigation
      if (hash) {
        // New page with hash - scroll to top first, then to section
        resetScroll();
        
        timeoutRef.current = setTimeout(() => {
          const elementId = hash.substring(1);
          const scrolled = scrollToElement(elementId);
          
          if (!scrolled) {
            // Element not found, stay at top
            resetScroll();
          }
          
          // Restore smooth scrolling after navigation is complete
          setTimeout(() => {
            document.documentElement.style.scrollBehavior = '';
            document.body.style.scrollBehavior = '';
          }, 200);
        }, 100);
      } else {
        // New page without hash - scroll to top
        resetScroll();
        
        // Use requestAnimationFrame to ensure scroll happens after DOM updates
        animationRef.current = requestAnimationFrame(() => {
          resetScroll();
          
          // Additional fallback timeout for complex layouts
          timeoutRef.current = setTimeout(() => {
            if (window.pageYOffset > 0 || document.documentElement.scrollTop > 0) {
              resetScroll();
            }
            
            // Restore smooth scrolling
            setTimeout(() => {
              document.documentElement.style.scrollBehavior = '';
              document.body.style.scrollBehavior = '';
            }, 100);
          }, 50);
        });
      }
    } else if (isNewHash) {
      // Same page, different hash
      if (hash) {
        const elementId = hash.substring(1);
        timeoutRef.current = setTimeout(() => {
          scrollToElement(elementId);
        }, 50);
      } else {
        // Hash removed, scroll to top
        timeoutRef.current = setTimeout(() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 50);
      }
    }

    // Update previous location reference
    previousLocationRef.current = { pathname, hash };

    // Cleanup function
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [pathname, hash]);

  // Handle browser back/forward buttons
  useEffect(() => {
    const handlePopState = (event) => {
      const currentHash = window.location.hash.substring(1);
      if (currentHash) {
        setTimeout(() => {
          const element = document.getElementById(currentHash);
          if (element) {
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = Math.max(0, elementPosition - 120);
            
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
            
            // Focus for accessibility
            element.setAttribute('tabindex', '-1');
            element.focus({ preventScroll: true });
          }
        }, 100);
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  return null;
};

export default ScrollToTop;