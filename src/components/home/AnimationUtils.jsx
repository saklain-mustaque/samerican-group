import { useState, useRef, useMemo, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";

// Custom intersection observer hook for better performance
export function useCustomInView(options = {}) {
  const [inView, setInView] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
        ...options
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return [ref, inView];
}

// Memoized animation variants for better performance
export const createAnimationVariants = () => ({
  // Fade in from bottom
  fadeInUp: {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  },
  
  // Fade in from left
  fadeInLeft: {
    hidden: { opacity: 0, x: -30 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  },
  
  // Fade in from right
  fadeInRight: {
    hidden: { opacity: 0, x: 30 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  },
  
  // Scale in
  scaleIn: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  },
  
  // Staggered container
  staggerContainer: {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  },
  
  // Staggered items
  staggerItem: {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  }
});

// Memoized floating animation component
export const FloatingElement = ({ children, duration = 4, delay = 0, className = "" }) => {
  const shouldReduceMotion = useReducedMotion();
  
  if (shouldReduceMotion) {
    return <div className={`absolute ${className}`}>{children}</div>;
  }
  
  return (
    <motion.div
      animate={{ y: [-10, 10, -10] }}
      transition={{ 
        duration, 
        repeat: Infinity, 
        ease: "easeInOut",
        delay
      }}
      className={`absolute ${className}`}
    >
      {children}
    </motion.div>
  );
};

// Optimized AnimatedSection component
export const AnimatedSection = ({ 
  children, 
  variant = "fadeInUp", 
  className = "",
  delay = 0,
  ...props 
}) => {
  const [ref, isInView] = useCustomInView();
  const variants = useMemo(() => createAnimationVariants(), []);
  
  return (
    <motion.div
      ref={ref}
      variants={variants[variant]}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ delay }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};