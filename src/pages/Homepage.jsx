import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, Users, Cpu, Globe, Star, TrendingUp, Shield, 
  CheckCircle, Award, Zap, Target, Heart, Sparkles 
} from 'lucide-react';
import { Link } from 'react-router-dom';

// Enhanced intersection observer hook
function useInView(options = {}) {
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

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.15
    }
  }
};

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 50,
    scale: 0.9
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99]
    }
  }
};

export default function EnhancedHomepageCards() {
  const [headerRef, headerInView] = useInView();
  const [servicesRef, servicesInView] = useInView();
  const [ctaRef, ctaInView] = useInView();
  const [metricsRef, metricsInView] = useInView();

  // Enhanced service cards with better visual hierarchy
  const services = [
    {
      id: 'staffing',
      title: 'Staffing Solutions',
      subtitle: 'Talent Acquisition Excellence',
      description: 'We connect exceptional talent with leading companies through our comprehensive screening process and deep industry expertise.',
      icon: <Users className="w-8 h-8" />,
      features: ['Expert Screening', 'Quick Turnaround', 'Quality Assurance', 'Cultural Fit Assessment'],
      gradient: 'from-blue-500 via-blue-600 to-indigo-700',
      accentColor: 'blue',
      stats: '2000+ Placements',
      image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80',
      ctaText: 'Find Talent',
      link: '/employers'
    },
    {
      id: 'consulting',
      title: 'IT Consulting',
      subtitle: 'Technology Excellence',
      description: 'Delivering innovative IT strategies and solutions to help your business thrive in the digital transformation era.',
      icon: <Cpu className="w-8 h-8" />,
      features: ['Digital Transformation', 'Cloud Solutions', 'Tech Strategy', 'System Integration'],
      gradient: 'from-purple-500 via-purple-600 to-pink-700',
      accentColor: 'purple',
      stats: '500+ Projects',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1950&q=80',
      ctaText: 'Learn More',
      link: '/services'
    },
    {
      id: 'global',
      title: 'Global Recruitment',
      subtitle: 'Worldwide Network',
      description: 'Our international network spans continents, sourcing the best professionals worldwide with local expertise and global reach.',
      icon: <Globe className="w-8 h-8" />,
      features: ['Global Reach', 'Local Expertise', 'Cultural Fit', 'Multi-language Support'],
      gradient: 'from-emerald-500 via-green-600 to-teal-700',
      accentColor: 'emerald',
      stats: '50+ Countries',
      image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1950&q=80',
      ctaText: 'Explore Global',
      link: '/about'
    }
  ];

  // Enhanced metrics with icons
  const metrics = [
    { 
      number: "98%", 
      label: "Client Satisfaction", 
      icon: <Star className="w-6 h-6 text-yellow-500" />,
      description: "Consistently exceeding expectations"
    },
    // { 
    //   number: "2.5K+", 
    //   label: "Successful Placements", 
    //   icon: <Target className="w-6 h-6 text-green-500" />,
    //   description: "Perfect matches made"
    // },
    { 
      number: "50+", 
      label: "Countries Served", 
      icon: <Globe className="w-6 h-6 text-blue-500" />,
      description: "Global presence, local expertise"
    },
    { 
      number: "24/7", 
      label: "Support Available", 
      icon: <Heart className="w-6 h-6 text-red-500" />,
      description: "Always here when you need us"
    }
  ];

  return (
    <section className="relative py-12 bg-gradient-to-br from-gray-50 via-blue-50/50 to-indigo-50/30 overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-400/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-red-400/20 to-pink-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-emerald-400/10 to-teal-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Enhanced Section Header */}
        <motion.div 
          ref={headerRef}
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <motion.div 
            className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full border border-gray-200/50 shadow-lg mb-8"
            initial={{ scale: 0 }}
            animate={headerInView ? { scale: 1 } : { scale: 0 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          >
            <Sparkles className="w-5 h-5 text-red-500" />
            <span className="font-semibold text-gray-700">Our Services</span>
            <Sparkles className="w-5 h-5 text-red-500" />
          </motion.div>
          
          {/* Main Title */}
          <motion.h2 
            className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Transform Your
            <span className="block bg-gradient-to-r from-red-600 via-red-500 to-pink-600 bg-clip-text text-transparent">
              Business Journey
            </span>
          </motion.h2>
          
          {/* Subtitle */}
          <motion.p 
            className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Discover our comprehensive suite of services designed to accelerate your growth and connect you with exceptional opportunities.
          </motion.p>
          
          {/* Decorative line */}
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-red-500 to-pink-500 mx-auto mt-8 rounded-full"
            initial={{ width: 0 }}
            animate={headerInView ? { width: 96 } : { width: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          />
        </motion.div>

        {/* Enhanced Services Grid */}
        <motion.div 
          ref={servicesRef}
          className="grid lg:grid-cols-3 gap-8 mb-20"
          variants={containerVariants}
          initial="hidden"
          animate={servicesInView ? "visible" : "hidden"}
        >
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </motion.div>

        {/* Enhanced CTA Section */}
        <motion.div 
          ref={ctaRef}
          className="relative"
          initial={{ opacity: 0, y: 30 }}
          animate={ctaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-12 shadow-2xl border border-white/50 max-w-5xl mx-auto relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 via-transparent to-blue-500/5"></div>
            
            <div className="relative z-10">
              {/* Trust badge */}
              <div className="flex items-center justify-center gap-3 mb-6">
                <Shield className="w-6 h-6 text-green-500" />
                <span className="font-semibold text-gray-700">Trusted by 1000+ Companies</span>
                <Award className="w-6 h-6 text-yellow-500" />
              </div>
              
              <h3 className="text-4xl font-bold text-gray-900 mb-6 text-center">
                Ready to Transform Your Business?
              </h3>
              
              <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto text-center leading-relaxed">
                Join thousands of satisfied clients who have accelerated their growth with our expert services. Let's build something amazing together.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link 
                  to='/employers' 
                  className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-10 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
                >
                  <Zap className="w-5 h-5" />
                  Get Started Today
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>
                
                <Link 
                  to='/about' 
                  className="inline-flex items-center justify-center gap-3 bg-white hover:bg-gray-50 text-gray-700 px-10 py-4 rounded-2xl font-semibold text-lg border-2 border-gray-200 hover:border-gray-300 transition-all duration-300 transform hover:scale-105"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Enhanced Success Metrics */}
        <motion.div 
          ref={metricsRef}
          className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-20"
          variants={containerVariants}
          initial="hidden"
          animate={metricsInView ? "visible" : "hidden"}
        >
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              className="group text-center bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-white/50 hover:bg-white/80 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              variants={cardVariants}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex justify-center mb-4 transform group-hover:scale-110 transition-transform duration-300">
                {metric.icon}
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{metric.number}</div>
              <div className="text-sm font-semibold text-gray-700 mb-2 uppercase tracking-wider">{metric.label}</div>
              <div className="text-xs text-gray-500 leading-relaxed">{metric.description}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// Enhanced Service Card Component
function ServiceCard({ service, index }) {
  const [cardRef, cardInView] = useInView();
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div 
      ref={cardRef}
      className="group relative h-full"
      variants={cardVariants}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-500 h-full flex flex-col relative">
        
        {/* Hover overlay effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
        
        {/* Image Section with Enhanced Effects */}
        <div className="relative h-64 overflow-hidden">
          {!imageLoaded && (
            <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
          )}
          <motion.img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
            onLoad={() => setImageLoaded(true)}
            loading="lazy"
            animate={isHovered ? { scale: 1.1 } : { scale: 1 }}
            transition={{ duration: 0.6 }}
            style={{
              opacity: imageLoaded ? 1 : 0,
              transition: 'opacity 0.5s ease'
            }}
          />
          
          {/* Enhanced gradient overlay */}
          <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent`}></div>
          
          {/* Floating Icon */}
          <motion.div 
            className={`absolute top-6 right-6 w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center text-white shadow-lg backdrop-blur-sm`}
            animate={isHovered ? { rotate: 360, scale: 1.1 } : { rotate: 0, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            {service.icon}
          </motion.div>

          {/* Stats Badge */}
          <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-green-500" />
              <span className="text-sm font-bold text-gray-800">{service.stats}</span>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-8 flex-1 flex flex-col relative z-10">
          <div className={`text-sm font-bold mb-3 bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent uppercase tracking-wider`}>
            {service.subtitle}
          </div>

          <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-gray-700 transition-colors">
            {service.title}
          </h3>

          <p className="text-gray-600 mb-6 leading-relaxed flex-1">
            {service.description}
          </p>

          {/* Enhanced Features */}
          <div className="space-y-3 mb-8">
            {service.features.map((feature, index) => (
              <motion.div 
                key={index} 
                className="flex items-center gap-3"
                initial={{ opacity: 0, x: -20 }}
                animate={cardInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
              >
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700 font-medium">{feature}</span>
              </motion.div>
            ))}
          </div>

          {/* Enhanced CTA Button */}
          <Link
            to={service.link}
            className={`group/btn w-full bg-gradient-to-r ${service.gradient} text-white px-6 py-4 rounded-2xl font-semibold hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-3 transform hover:scale-105`}
          >
            <span>{service.ctaText}</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover/btn:translate-x-1" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}