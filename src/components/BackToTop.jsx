import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let scrollTimeout;

    const handleScroll = () => {
      const scrollY = window.pageYOffset;
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = Math.min((scrollY / documentHeight) * 100, 100);
      
      // Show button after scrolling 400px
      setIsVisible(scrollY > 400);
      
      // Update scroll progress for the progress indicator
      setScrollProgress(progress);
      
      // Track scrolling state for visual feedback
      setIsScrolling(true);
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, 150);
    };

    // Optimized scroll handler with passive listeners
    let ticking = false;
    const optimizedScrollHandler = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', optimizedScrollHandler, { passive: true });

    return () => {
      window.removeEventListener('scroll', optimizedScrollHandler);
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
    };
  }, []);

  const scrollToTop = () => {
    const startPosition = window.pageYOffset;
    const duration = 800; // Smooth scroll duration
    let startTime = null;

    // Announce to screen readers
    const announcer = document.createElement('div');
    announcer.setAttribute('aria-live', 'polite');
    announcer.setAttribute('aria-atomic', 'true');
    announcer.className = 'sr-only';
    announcer.textContent = 'Scrolling to top of page';
    document.body.appendChild(announcer);

    const animateScroll = (currentTime) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      
      // Easing function for smooth animation
      const easeOutCubic = progress => 1 - Math.pow(1 - progress, 3);
      const currentPosition = startPosition * (1 - easeOutCubic(progress));
      
      window.scrollTo(0, currentPosition);

      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      } else {
        // Clean up announcer
        setTimeout(() => {
          if (document.body.contains(announcer)) {
            document.body.removeChild(announcer);
          }
        }, 1000);
        
        // Focus management for accessibility
        const mainElement = document.querySelector('main') || document.body;
        mainElement.focus({ preventScroll: true });
      }
    };

    requestAnimationFrame(animateScroll);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ 
            opacity: 0, 
            scale: 0.5,
            y: 20
          }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            y: 0
          }}
          exit={{ 
            opacity: 0, 
            scale: 0.5,
            y: 20
          }}
          whileHover={{ 
            scale: 1.1,
            y: -2
          }}
          whileTap={{ 
            scale: 0.9 
          }}
          transition={{
            duration: 0.3,
            ease: "easeInOut"
          }}
          onClick={scrollToTop}
          className={`fixed bottom-6 right-6 z-40 p-3 md:p-4 rounded-full shadow-lg transition-all duration-200 ${
            isScrolling 
              ? 'bg-red-600/90 text-white' 
              : 'bg-red-600 text-white hover:bg-red-700'
          } backdrop-blur-sm border border-white/10 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50`}
          style={{
            // Ensure proper positioning on mobile devices
            position: 'fixed',
            transform: 'translate3d(0, 0, 0)', // Force hardware acceleration
            WebkitTransform: 'translate3d(0, 0, 0)',
            willChange: 'transform, opacity'
          }}
          aria-label="Scroll to top of page"
          title="Back to top"
        >
          <motion.div
            animate={{ 
              rotate: isScrolling ? 360 : 0 
            }}
            transition={{ 
              duration: 0.6,
              ease: "easeInOut"
            }}
          >
            <ArrowUp size={window.innerWidth < 768 ? 18 : 20} />
          </motion.div>

          {/* Ripple effect on hover */}
          <motion.div
            className="absolute inset-0 rounded-full bg-white/20"
            initial={{ scale: 0, opacity: 0 }}
            whileHover={{ 
              scale: 1.5, 
              opacity: [0, 0.3, 0] 
            }}
            transition={{ 
              duration: 0.4,
              ease: "easeOut"
            }}
          />
          
          {/* Enhanced progress ring indicator */}
          <svg
            className="absolute inset-0 w-full h-full -rotate-90"
            viewBox="0 0 36 36"
            style={{ overflow: 'visible' }}
          >
            {/* Background circle */}
            <circle
              cx="18"
              cy="18"
              r="16"
              fill="none"
              stroke="rgba(255, 255, 255, 0.2)"
              strokeWidth="2"
            />
            {/* Progress circle */}
            <motion.circle
              cx="18"
              cy="18"
              r="16"
              fill="none"
              stroke="rgba(255, 255, 255, 0.8)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray="100 100"
              strokeDashoffset={100 - scrollProgress}
              transition={{ duration: 0.1, ease: "easeOut" }}
            />
          </svg>

          {/* Mobile-specific touch target enhancement */}
          <div 
            className="absolute inset-0 rounded-full -m-2 md:m-0"
            style={{ minWidth: '44px', minHeight: '44px' }} // WCAG touch target size
            aria-hidden="true"
          />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;