// hooks/useEnhancedNavigation.js
import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useRef } from 'react';

export const useEnhancedNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const scrollTimeoutRef = useRef(null);
  const isNavigatingRef = useRef(false);

  // Smooth scroll to element with WCAG compliance
  const scrollToElement = (elementId, offset = 120) => {
    const element = document.getElementById(elementId);
    if (!element) return false;

    // Set focus for screen readers (WCAG compliance)
    element.setAttribute('tabindex', '-1');
    
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - offset;

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
        requestAnimationFrame(animateScroll);
      } else {
        // Focus the element after scroll completes (WCAG compliance)
        element.focus({ preventScroll: true });
        
        // Update URL hash without triggering navigation
        if (window.location.hash !== `#${elementId}`) {
          window.history.replaceState(null, null, `#${elementId}`);
        }
      }
    };

    requestAnimationFrame(animateScroll);
    return true;
  };

  // Navigate to section with enhanced behavior
  const navigateToSection = (path, sectionId = null, options = {}) => {
    const { 
      offset = 120, 
      updateHistory = true, 
      focus = true 
    } = options;

    // Store the target section for after navigation
    if (sectionId) {
      sessionStorage.setItem('targetSection', sectionId);
      sessionStorage.setItem('targetOffset', offset.toString());
      sessionStorage.setItem('targetFocus', focus.toString());
    }

    const currentPath = location.pathname;
    const targetPath = path.startsWith('/') ? path : `/${path}`;

    // If we're on the same page, just scroll to section
    if (currentPath === targetPath && sectionId) {
      const scrolled = scrollToElement(sectionId, offset);
      if (scrolled && focus) {
        // Announce to screen readers
        const element = document.getElementById(sectionId);
        if (element) {
          element.setAttribute('aria-live', 'polite');
          element.setAttribute('aria-atomic', 'true');
          setTimeout(() => {
            element.removeAttribute('aria-live');
            element.removeAttribute('aria-atomic');
          }, 1000);
        }
      }
      return;
    }

    // Navigate to different page
    isNavigatingRef.current = true;
    const fullPath = sectionId ? `${targetPath}#${sectionId}` : targetPath;
    
    if (updateHistory) {
      navigate(fullPath);
    } else {
      window.history.replaceState(null, null, fullPath);
    }
  };

  // Handle hash navigation after route change
  useEffect(() => {
    // Clear any existing timeout
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }

    // Check for stored target section or hash in URL
    const targetSection = sessionStorage.getItem('targetSection') || 
                          location.hash.substring(1);
    
    if (targetSection) {
      scrollTimeoutRef.current = setTimeout(() => {
        const offset = parseInt(sessionStorage.getItem('targetOffset') || '120');
        const shouldFocus = sessionStorage.getItem('targetFocus') !== 'false';
        
        const scrolled = scrollToElement(targetSection, offset);
        
        if (scrolled && shouldFocus) {
          // Announce navigation to screen readers
          const element = document.getElementById(targetSection);
          if (element) {
            const announcement = `Navigated to ${element.getAttribute('aria-label') || 
                                                 element.textContent || 
                                                 targetSection} section`;
            
            // Create and dispatch announcement for screen readers
            const announcer = document.createElement('div');
            announcer.setAttribute('aria-live', 'assertive');
            announcer.setAttribute('aria-atomic', 'true');
            announcer.className = 'sr-only';
            announcer.textContent = announcement;
            document.body.appendChild(announcer);
            
            setTimeout(() => {
              document.body.removeChild(announcer);
            }, 1000);
          }
        }

        // Clear stored values
        sessionStorage.removeItem('targetSection');
        sessionStorage.removeItem('targetOffset');
        sessionStorage.removeItem('targetFocus');
        isNavigatingRef.current = false;
      }, 100);
    } else {
      isNavigatingRef.current = false;
    }

    return () => {
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [location]);

  // Handle browser back/forward buttons
  useEffect(() => {
    const handlePopState = (event) => {
      const hash = window.location.hash.substring(1);
      if (hash) {
        setTimeout(() => {
          scrollToElement(hash);
        }, 100);
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  return {
    navigateToSection,
    scrollToElement,
    isNavigating: isNavigatingRef.current
  };
};

// Utility function for creating navigation links with proper ARIA attributes
export const createNavigationLink = (text, path, sectionId = null) => {
  const fullPath = sectionId ? `${path}#${sectionId}` : path;
  
  return {
    href: fullPath,
    'aria-label': sectionId 
      ? `Navigate to ${text} section on ${path.replace('/', '')} page`
      : `Navigate to ${text} page`,
    'data-section': sectionId,
    'data-path': path
  };
};