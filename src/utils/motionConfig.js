import { motion } from 'framer-motion';

// Optimized Framer Motion configuration for smooth performance
export const optimizedMotionConfig = {
  // Reduce motion for users who prefer it
  reducedMotion: "user",
  
  // Global transition settings for better performance
  transition: {
    type: "tween",
    ease: "easeInOut",
    duration: 0.3
  },
  
  // Optimized animation variants
  variants: {
    // Fade animations
    fadeIn: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      transition: { duration: 0.3, ease: "easeInOut" }
    },
    
    fadeInUp: {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: -20 },
      transition: { duration: 0.4, ease: "easeOut" }
    },
    
    fadeInDown: {
      initial: { opacity: 0, y: -20 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: 20 },
      transition: { duration: 0.4, ease: "easeOut" }
    },
    
    // Scale animations
    scaleIn: {
      initial: { opacity: 0, scale: 0.95 },
      animate: { opacity: 1, scale: 1 },
      exit: { opacity: 0, scale: 0.95 },
      transition: { duration: 0.3, ease: "easeOut" }
    },
    
    // Slide animations
    slideInLeft: {
      initial: { opacity: 0, x: -30 },
      animate: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: 30 },
      transition: { duration: 0.4, ease: "easeOut" }
    },
    
    slideInRight: {
      initial: { opacity: 0, x: 30 },
      animate: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: -30 },
      transition: { duration: 0.4, ease: "easeOut" }
    }
  },
  
  // Stagger animation settings
  stagger: {
    container: {
      initial: {},
      animate: {
        transition: {
          staggerChildren: 0.1,
          delayChildren: 0.2
        }
      }
    },
    item: {
      initial: { opacity: 0, y: 20 },
      animate: { 
        opacity: 1, 
        y: 0,
        transition: { duration: 0.4, ease: "easeOut" }
      }
    }
  },
  
  // Hover animations
  hover: {
    scale: 1.05,
    transition: { duration: 0.2, ease: "easeInOut" }
  },
  
  tap: {
    scale: 0.95,
    transition: { duration: 0.1, ease: "easeInOut" }
  },
  
  // Mobile-optimized settings
  mobile: {
    transition: { duration: 0.2 }, // Faster animations on mobile
    reducedMotion: true, // Reduce complex animations
    hover: { scale: 1.02 }, // Smaller hover effects
    tap: { scale: 0.98 }
  }
};

// Utility function to get mobile-optimized motion props
export const getMotionProps = (variant, isMobile = false) => {
  const config = optimizedMotionConfig;
  const baseProps = config.variants[variant] || {};
  
  if (isMobile) {
    return {
      ...baseProps,
      transition: {
        ...baseProps.transition,
        duration: (baseProps.transition?.duration || 0.3) * 0.7 // 30% faster on mobile
      }
    };
  }
  
  return baseProps;
};

// Performance-optimized motion components
export const MotionDiv = ({ children, variant = "fadeIn", ...props }) => {
  const isMobile = window.innerWidth < 768;
  const motionProps = getMotionProps(variant, isMobile);
  
  return (
    <motion.div
      {...motionProps}
      {...props}
      style={{
        willChange: 'transform, opacity',
        backfaceVisibility: 'hidden',
        ...props.style
      }}
    >
      {children}
    </motion.div>
  );
};