import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    let scrollTimeout;

    const handleScroll = () => {
      const scrollY = window.pageYOffset;
      
      // Show button after scrolling 400px
      setIsVisible(scrollY > 400);
      
      // Track scrolling state for visual feedback
      setIsScrolling(true);
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, 150);
    };

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

    const animateScroll = (currentTime) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      
      const easeOutCubic = progress => 1 - Math.pow(1 - progress, 3);
      const currentPosition = startPosition * (1 - easeOutCubic(progress));
      
      window.scrollTo(0, currentPosition);

      if (progress < 1) {
        requestAnimationFrame(animateScroll);
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
          className={`fixed bottom-6 right-6 z-40 p-3 rounded-full shadow-lg transition-all duration-200 ${
            isScrolling 
              ? 'bg-red-600/90 text-white' 
              : 'bg-red-600 text-white hover:bg-red-700'
          } backdrop-blur-sm border border-white/10`}
          aria-label="Scroll to top"
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
            <ArrowUp size={20} />
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
          
          {/* Progress ring indicator */}
          <svg
            className="absolute inset-0 w-full h-full -rotate-90"
            viewBox="0 0 36 36"
          >
            <motion.circle
              cx="18"
              cy="18"
              r="16"
              fill="none"
              stroke="rgba(255, 255, 255, 0.2)"
              strokeWidth="2"
            />
            <motion.circle
              cx="18"
              cy="18"
              r="16"
              fill="none"
              stroke="rgba(255, 255, 255, 0.8)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray="100 100"
              initial={{ strokeDashoffset: 100 }}
              animate={{ 
                strokeDashoffset: Math.max(0, 100 - (window.pageYOffset / (document.documentElement.scrollHeight - window.innerHeight)) * 100)
              }}
              transition={{ duration: 0.1 }}
            />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;