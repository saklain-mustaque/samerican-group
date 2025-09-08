import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Play, CheckCircle, Star, TrendingUp } from "lucide-react";

// Industry-specific background images with better quality and composition
const industryBackgrounds = {
  'information-technology': 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=2000&q=80',
  'government': 'https://images.unsplash.com/photo-1441015401724-70d16b783f5c?auto=format&fit=crop&w=2000&q=80',
  'healthcare': 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=2000&q=80',
  'pharmaceutical': 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&w=2000&q=80',
  'c-level': 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=2000&q=80',
  'administrative': 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=2000&q=80',
  'human-resources': 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=2000&q=80',
  'engineering': 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=2000&q=80',
  'accounting-and-finance': 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=2000&q=80',
  'legal': 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=2000&q=80',
  'manufacturing': 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=2000&q=80',
  'construction': 'https://images.unsplash.com/photo-1572981779307-38b8cabb2407?auto=format&fit=crop&w=2000&q=80',
  'creative--digital-marketing': 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=2000&q=80',
  'sales--marketing': 'https://images.unsplash.com/photo-1553484771-371a605b060b?auto=format&fit=crop&w=2000&q=80'
};

// Animation variants for better choreography
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99]
    }
  }
};

const Hero = ({
  title = "Global Talent Solutions",
  subtitle = "Connecting businesses with top-tier professionals worldwide",
  description = null,
  backgroundImage = null,
  showButtons = true,
  showStats = false,
  showVideo = false,
  industryId = null,
  className = "",
  variant = "default" // default, minimal, dynamic
}) => {

  // Determine which background image to use
  const getBackgroundImage = () => {
    if (backgroundImage && backgroundImage !== '/api/placeholder/1920/600') {
      return backgroundImage;
    }
    if (industryId && industryBackgrounds[industryId]) {
      return industryBackgrounds[industryId];
    }
    // Default high-quality business background
    return "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2000&q=80";
  };

  const bgImage = getBackgroundImage();
  const mobileImage = bgImage.replace('w=2000', 'w=800&h=1200');

  // Trust indicators and stats
  const trustIndicators = [
    { icon: <CheckCircle className="w-5 h-5 text-green-400" />, text: "ISO Certified" },
    { icon: <Star className="w-5 h-5 text-yellow-400" />, text: "5-Star Rated" },
    { icon: <TrendingUp className="w-5 h-5 text-blue-400" />, text: "98% Success Rate" }
  ];

  const stats = [
    { number: "2.5K+", label: "Successful Placements" },
    { number: "500+", label: "Partner Companies" },
    { number: "50+", label: "Countries Served" }
  ];

  return (
    <section className={`relative min-h-screen flex items-center overflow-hidden ${className}`}>
      {/* Background Image with Enhanced Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          className="w-full h-full object-cover object-center" 
          src={bgImage}
          alt={title}
        />
        
        {/* Enhanced Multi-layer Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-gray-900/60 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 via-transparent to-blue-600/20"></div>
      </div>

      {/* Floating Elements for Visual Interest */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-white/5 rounded-full blur-xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-32 right-16 w-24 h-24 bg-red-500/10 rounded-full blur-xl"
          animate={{
            x: [0, -25, 0],
            y: [0, 15, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            className="max-w-4xl mx-auto text-center lg:text-left mt-50"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Badge/Category */}
            <motion.div variants={itemVariants}>
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full text-white/90 text-sm font-medium mb-6">
                <Star className="w-4 h-4 text-yellow-400" />
                <span>Trusted by 1000+ Companies</span>
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              </div>
            </motion.div>

            {/* Main Title */}
            <motion.h1 
              className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight"
              variants={itemVariants}
            >
              <span className="block">{title.split(' ').slice(0, -1).join(' ')}</span>
              <span className="block bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent">
                {title.split(' ').slice(-1)}
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p 
              className="text-xl lg:text-2xl text-white/90 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
              variants={itemVariants}
            >
              {subtitle}
            </motion.p>

            {/* Description */}
            {description && (
              <motion.p 
                className="text-lg text-white/80 mb-8 max-w-3xl mx-auto lg:mx-0 leading-relaxed"
                variants={itemVariants}
              >
                {description}
              </motion.p>
            )}

            {/* Trust Indicators */}
            <motion.div 
              className="flex flex-wrap justify-center lg:justify-start gap-6 mb-8"
              variants={itemVariants}
            >
              {trustIndicators.map((indicator, index) => (
                <div key={index} className="flex items-center gap-2 text-white/80">
                  {indicator.icon}
                  <span className="text-sm font-medium">{indicator.text}</span>
                </div>
              ))}
            </motion.div>

            {/* Action Buttons */}
            {showButtons && (
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
                variants={itemVariants}
              >
                <Link
                  to="/services"
                  className="group inline-flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
                >
                  <span>Explore Services</span>
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>

                {showVideo && (
                  <button className="group inline-flex items-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300">
                    <Play className="w-5 h-5 transition-transform group-hover:scale-110" />
                    <span>Watch Demo</span>
                  </button>
                )}

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-3 bg-transparent hover:bg-white/10 text-white border-2 border-white/30 hover:border-white/60 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300"
                >
                  Get Started
                </Link>
              </motion.div>
            )}

            {/* Stats Section */}
            {showStats && (
              <motion.div 
                className="grid grid-cols-3 gap-8 max-w-2xl mx-auto lg:mx-0"
                variants={itemVariants}
              >
                {stats.map((stat, index) => (
                  <div key={index} className="text-center lg:text-left">
                    <div className="text-3xl lg:text-4xl font-bold text-white mb-1">
                      {stat.number}
                    </div>
                    <div className="text-sm text-white/70 uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      {/* <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <motion.div 
            className="w-1 h-3 bg-white/60 rounded-full mt-2"
            animate={{ scaleY: [1, 0.5, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>
      </motion.div> */}
    </section>
  );
};

export default Hero;