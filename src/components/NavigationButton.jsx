import { motion } from 'framer-motion';
import { useEnhancedNavigation } from '../hooks/useEnhancedNavigation';

/**
 * NavigationButton component for consistent navigation behavior
 * Supports both page navigation and section navigation with WCAG compliance
 */
const NavigationButton = ({ 
  to, 
  section = null, 
  children, 
  className = '', 
  variant = 'primary',
  size = 'medium',
  onClick = null,
  ...props 
}) => {
  const { navigateToSection } = useEnhancedNavigation();

  // Predefined styles for different variants
  const variants = {
    primary: 'bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white',
    secondary: 'border-2 border-white text-white hover:bg-white hover:text-gray-900',
    outline: 'border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white',
    ghost: 'text-gray-700 hover:text-red-600 hover:bg-red-50'
  };

  const sizes = {
    small: 'px-4 py-2 text-sm',
    medium: 'px-8 py-3 text-base',
    large: 'px-8 py-4 text-lg'
  };

  const handleClick = (e) => {
    e.preventDefault();
    
    // Call custom onClick if provided
    if (onClick) {
      onClick(e);
    }
    
    // Navigate using enhanced navigation
    navigateToSection(to, section);
  };

  const baseClasses = className?` ${className} `: `
    inline-flex items-center justify-center gap-2 
    font-semibold rounded-xl transition-all duration-300 
    transform hover:scale-105 hover:shadow-xl
    focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50
    ${variants[variant]} ${sizes[size]}
  `.trim();

  // Create proper aria-label
  const getAriaLabel = () => {
    if (props['aria-label']) return props['aria-label'];
    
    if (section) {
      const pageLabel = to.replace('/', '').replace('-', ' ') || 'home';
      const sectionLabel = section.replace('-', ' ');
      return `Navigate to ${sectionLabel} section on ${pageLabel} page`;
    }
    
    const pageLabel = to.replace('/', '').replace('-', ' ') || 'home';
    return `Navigate to ${pageLabel} page`;
  };

  return (
    <motion.button
      onClick={handleClick}
      className={baseClasses}
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
      aria-label={getAriaLabel()}
      {...props}
    >
      {children}
    </motion.button>
  );
};

/**
 * NavigationLink component for link-style navigation
 * Alternative to NavigationButton for text links
 */
const NavigationLink = ({ 
  to, 
  section = null, 
  children, 
  className = '', 
  onClick = null,
  ...props 
}) => {
  const { navigateToSection } = useEnhancedNavigation();

  const handleClick = (e) => {
    e.preventDefault();
    
    if (onClick) {
      onClick(e);
    }
    
    navigateToSection(to, section);
  };

  const getAriaLabel = () => {
    if (props['aria-label']) return props['aria-label'];
    
    if (section) {
      const pageLabel = to.replace('/', '').replace('-', ' ') || 'home';
      const sectionLabel = section.replace('-', ' ');
      return `Navigate to ${sectionLabel} section on ${pageLabel} page`;
    }
    
    const pageLabel = to.replace('/', '').replace('-', ' ') || 'home';
    return `Navigate to ${pageLabel} page`;
  };

  return (
    <a
      href={section ? `${to}#${section}` : to}
      onClick={handleClick}
      className={`transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 rounded ${className}`}
      aria-label={getAriaLabel()}
      {...props}
    >
      {children}
    </a>
  );
};

export { NavigationButton, NavigationLink };