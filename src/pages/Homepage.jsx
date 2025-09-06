// Homepage.jsx
import { useState, useEffect, useRef } from 'react';
import { ArrowRight, Users, Cpu, Globe, Star, TrendingUp, Shield } from 'lucide-react';
import card1 from '../assets/images/card1.png';
import card2 from '../assets/images/card2.png';
import card3 from '../assets/images/card3.png';

// Custom intersection observer hook for better performance
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

export default function HomepageCards() {
  const [headerRef, headerInView] = useInView();
  const [ctaRef, ctaInView] = useInView();
  const [metricsRef, metricsInView] = useInView();

  const cards = [
    {
      title: 'Staffing Solutions',
      subtitle: 'Talent Acquisition',
      description: 'We connect top talent with leading companies, ensuring the perfect match every time through our comprehensive screening process.',
      img: card1,
      icon: <Users className="w-6 h-6" />,
      features: ['Expert Screening', 'Quick Turnaround', 'Quality Assurance'],
      gradient: 'from-blue-500 to-blue-600',
      stats: '2000+ Placements'
    },
    {
      title: 'IT Consulting',
      subtitle: 'Technology Excellence',
      description: 'Delivering innovative IT strategies to help your business thrive in the digital age with cutting-edge solutions.',
      img: card2,
      icon: <Cpu className="w-6 h-6" />,
      features: ['Digital Transformation', 'Cloud Solutions', 'Tech Strategy'],
      gradient: 'from-purple-500 to-purple-600',
      stats: '500+ Projects'
    },
    {
      title: 'Global Recruitment',
      subtitle: 'Worldwide Network',
      description: 'Our network spans continents, sourcing the best professionals worldwide with local expertise and global reach.',
      img: card3,
      icon: <Globe className="w-6 h-6" />,
      features: ['Global Reach', 'Local Expertise', 'Cultural Fit'],
      gradient: 'from-green-500 to-green-600',
      stats: '50+ Countries'
    }
  ];

  return (
    <section className="relative py-16 bg-gradient-to-br from-gray-50 to-blue-50 overflow-hidden">
      {/* Lightweight background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 right-20 w-64 h-64 bg-blue-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-red-200 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div 
          ref={headerRef}
          className={`text-center mb-12 transition-all duration-700 ${
            headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex items-center gap-2 bg-white/80 px-4 py-2 rounded-full border border-gray-200 mb-6">
            <Star className="w-4 h-4 text-red-500" />
            <span className="text-sm font-medium text-gray-600">Our Services</span>
            <Star className="w-4 h-4 text-red-500" />
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Transform Your
            <span className="text-red-500 block">Business Journey</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive suite of services designed to accelerate your growth and connect you with exceptional opportunities.
          </p>
          
          <div className="w-20 h-1 bg-red-500 mx-auto mt-6"></div>
        </div>

        {/* Cards Grid */}
        {/* <div className="grid lg:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <ServiceCard key={i} card={card} index={i} />
          ))}
        </div> */}

        {/* CTA Section */}
        <div 
          ref={ctaRef}
          className={`text-center mt-12 transition-all duration-700 delay-300 ${
            ctaInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="bg-white/70 rounded-xl p-8 shadow-lg border border-gray-200 max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Shield className="w-5 h-5 text-green-500" />
              <span className="text-sm font-medium text-gray-600">Trusted by 1000+ Companies</span>
              <Shield className="w-5 h-5 text-green-500" />
            </div>
            
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Ready to Transform Your Business?
            </h3>
            
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Join thousands of satisfied clients who have accelerated their growth with our expert services.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-full font-semibold transition-colors duration-200 flex items-center justify-center gap-2">
                Get Started Today
                <ArrowRight className="w-4 h-4" />
              </button>
              
              <button className="bg-white hover:bg-gray-50 text-gray-700 px-8 py-3 rounded-full font-semibold border border-gray-300 transition-colors duration-200">
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* Success Metrics */}
        <div 
          ref={metricsRef}
          className={`grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 transition-all duration-700 delay-500 ${
            metricsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {[
            { number: "98%", label: "Client Satisfaction", icon: "⭐" },
            { number: "2.5K+", label: "Successful Placements", icon: "🎯" },
            { number: "50+", label: "Countries Served", icon: "🌍" },
            { number: "24/7", label: "Support Available", icon: "🚀" }
          ].map((metric, index) => (
            <div
              key={index}
              className="text-center bg-white/50 rounded-lg p-4 border border-gray-200 hover:bg-white/70 hover:shadow-md transition-all duration-200"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="text-2xl mb-2">{metric.icon}</div>
              <div className="text-xl font-bold text-gray-800">{metric.number}</div>
              <div className="text-sm text-gray-600">{metric.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Separate component for individual service cards
function ServiceCard({ card, index }) {
  const [cardRef, cardInView] = useInView();
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div 
      ref={cardRef}
      className={`group relative transition-all duration-700 ${
        cardInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 200}ms` }}
    >
      <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-200 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 h-full">
        
        {/* Image Section */}
        <div className="relative h-48 overflow-hidden bg-gray-100">
          {!imageLoaded && (
            <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
          )}
          <img
            src={card.img}
            alt={card.title}
            className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-105 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={() => setImageLoaded(true)}
            loading="lazy"
          />
          
          {/* Icon Badge */}
          <div className={`absolute top-3 right-3 w-12 h-12 bg-gradient-to-r ${card.gradient} rounded-full flex items-center justify-center text-white shadow-lg`}>
            {card.icon}
          </div>

          {/* Stats Badge */}
          <div className="absolute bottom-3 left-3 bg-white/90 px-3 py-1 rounded-full text-sm font-semibold text-gray-800 shadow-md">
            <TrendingUp className="w-3 h-3 inline mr-1 text-green-500" />
            {card.stats}
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <p className={`text-sm font-medium mb-2 bg-gradient-to-r ${card.gradient} bg-clip-text text-transparent`}>
            {card.subtitle}
          </p>

          <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-gray-900">
            {card.title}
          </h3>

          <p className="text-gray-600 mb-4 text-sm leading-relaxed">
            {card.description}
          </p>

          {/* Features */}
          <div className="space-y-2 mb-6">
            {card.features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2 text-sm">
                <div className={`w-1.5 h-1.5 bg-gradient-to-r ${card.gradient} rounded-full`}></div>
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <button className={`w-full bg-gradient-to-r ${card.gradient} text-white px-4 py-2.5 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group/btn`}>
            Learn More
            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
          </button>
        </div>
      </div>
    </div>
  );
}