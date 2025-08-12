// Homepage.jsx
import { motion } from 'framer-motion';
import { ArrowRight, Users, Cpu, Globe, Star, TrendingUp, Shield } from 'lucide-react';
import card1 from '../assets/images/card1.png';
import card2 from '../assets/images/card2.png';
import card3 from '../assets/images/card3.png';

export default function HomepageCards() {
  const cards = [
    {
      title: 'Staffing Solutions',
      subtitle: 'Talent Acquisition',
      description: 'We connect top talent with leading companies, ensuring the perfect match every time through our comprehensive screening process.',
      img: card1,
      icon: <Users className="w-8 h-8" />,
      features: ['Expert Screening', 'Quick Turnaround', 'Quality Assurance'],
      color: 'from-blue-500 to-cyan-500',
      stats: '2000+ Placements'
    },
    {
      title: 'IT Consulting',
      subtitle: 'Technology Excellence',
      description: 'Delivering innovative IT strategies to help your business thrive in the digital age with cutting-edge solutions.',
      img: card2,
      icon: <Cpu className="w-8 h-8" />,
      features: ['Digital Transformation', 'Cloud Solutions', 'Tech Strategy'],
      color: 'from-purple-500 to-pink-500',
      stats: '500+ Projects'
    },
    {
      title: 'Global Recruitment',
      subtitle: 'Worldwide Network',
      description: 'Our network spans continents, sourcing the best professionals worldwide with local expertise and global reach.',
      img: card3,
      icon: <Globe className="w-8 h-8" />,
      features: ['Global Reach', 'Local Expertise', 'Cultural Fit'],
      color: 'from-emerald-500 to-teal-500',
      stats: '50+ Countries'
    }
  ];

  return (
    <section className="relative py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-purple-600/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-gradient-to-tr from-red-400/10 to-pink-600/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-orange-400/5 to-yellow-600/5 rounded-full blur-2xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 mb-6"
          >
            <Star className="w-4 h-4 text-red-500" />
            <span className="text-sm font-medium text-gray-600">Our Services</span>
            <Star className="w-4 h-4 text-red-500" />
          </motion.div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Transform Your
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600 block">
              Business Journey
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our comprehensive suite of services designed to accelerate your growth and connect you with exceptional opportunities.
          </p>
          
          <div className="w-20 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto mt-8"></div>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid lg:grid-cols-3 gap-8 items-stretch">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              className="group relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              whileHover={{ y: -10 }}
            >
              {/* Card Container */}
              <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-500 h-full">
                
                {/* Image Section with Overlay */}
                <div className="relative h-56 overflow-hidden">
                  <motion.img
                    src={card.img}
                    alt={card.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${card.color} opacity-0 group-hover:opacity-80 transition-opacity duration-500`}></div>
                  
                  {/* Floating Icon */}
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.2 + 0.3, type: "spring", bounce: 0.5 }}
                    className={`absolute top-4 right-4 w-16 h-16 bg-gradient-to-r ${card.color} rounded-full flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    {card.icon}
                  </motion.div>

                  {/* Stats Badge */}
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.2 + 0.5 }}
                    className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm font-semibold text-gray-800 shadow-lg"
                  >
                    <TrendingUp className="w-4 h-4 inline mr-1 text-green-500" />
                    {card.stats}
                  </motion.div>
                </div>

                {/* Content Section */}
                <div className="p-8">
                  {/* Subtitle */}
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.2 + 0.4 }}
                    className={`text-sm font-medium mb-2 bg-gradient-to-r ${card.color} bg-clip-text text-transparent`}
                  >
                    {card.subtitle}
                  </motion.p>

                  {/* Title */}
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.2 + 0.5 }}
                    className="text-2xl font-bold mb-4 text-gray-800 group-hover:text-gray-900 transition-colors duration-300"
                  >
                    {card.title}
                  </motion.h3>

                  {/* Description */}
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.2 + 0.6 }}
                    className="text-gray-600 mb-6 leading-relaxed line-clamp-3"
                  >
                    {card.description}
                  </motion.p>

                  {/* Features List */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.2 + 0.7 }}
                    className="space-y-2 mb-8"
                  >
                    {card.features.map((feature, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: i * 0.2 + 0.8 + index * 0.1 }}
                        className="flex items-center gap-3 text-sm"
                      >
                        <div className={`w-2 h-2 bg-gradient-to-r ${card.color} rounded-full`}></div>
                        <span className="text-gray-700 font-medium">{feature}</span>
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* CTA Button */}
                  <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.2 + 0.9 }}
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className={`group/btn w-full bg-gradient-to-r ${card.color} text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2`}
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </motion.button>
                </div>

                {/* Decorative Elements */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                
                {/* Premium Border Effect */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${card.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none`}></div>
              </div>

              {/* Floating Decoration */}
              <motion.div
                animate={{ 
                  y: [-5, 5, -5],
                  rotate: [0, 5, 0, -5, 0]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: i * 0.5 
                }}
                className={`absolute -top-2 -right-2 w-12 h-12 bg-gradient-to-r ${card.color} rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-500 blur-sm`}
              ></motion.div>

              {/* Bottom Floating Element */}
              <motion.div
                animate={{ 
                  y: [5, -5, 5],
                  x: [-2, 2, -2]
                }}
                transition={{ 
                  duration: 3.5, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: i * 0.3 + 1
                }}
                className={`absolute -bottom-2 -left-2 w-8 h-8 bg-gradient-to-r ${card.color} rounded-full opacity-15 group-hover:opacity-30 transition-opacity duration-500 blur-sm`}
              ></motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-white/60 backdrop-blur-lg rounded-2xl p-8 shadow-xl border border-white/20 max-w-4xl mx-auto">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1 }}
              className="flex items-center justify-center gap-2 mb-6"
            >
              <Shield className="w-6 h-6 text-green-500" />
              <span className="text-sm font-medium text-gray-700">Trusted by 1000+ Companies</span>
              <Shield className="w-6 h-6 text-green-500" />
            </motion.div>
            
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Ready to Transform Your Business?
            </h3>
            
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied clients who have accelerated their growth with our expert services. 
              Let's discuss how we can help you achieve your goals.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-red-500 to-red-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/80 backdrop-blur-sm text-gray-700 px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl border border-white/20 transition-all duration-300"
              >
                Learn More
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Success Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-16"
        >
          {[
            { number: "98%", label: "Client Satisfaction", icon: "⭐" },
            // { number: "2.5K+", label: "Successful Placements", icon: "🎯" },
            { number: "50+", label: "Countries Served", icon: "🌍" },
            { number: "24/7", label: "Support Available", icon: "🚀" }
          ].map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
              whileHover={{ y: -5, scale: 1.05 }}
              className="text-center bg-white/40 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/60 transition-all duration-300"
            >
              <div className="text-2xl mb-2">{metric.icon}</div>
              <div className="text-2xl font-bold text-gray-800 mb-1">{metric.number}</div>
              <div className="text-sm text-gray-600 font-medium">{metric.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}