import { motion } from 'framer-motion';
import { 
  Users, 
  Award, 
  Globe, 
  TrendingUp,
  CheckCircle,
  Target,
  Heart,
  Shield
} from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] sm:h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Desktop Image */}
        <img 
          className="hidden sm:block absolute inset-0 w-full h-full object-cover object-center" 
          src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1950&q=80" 
          alt="Team collaboration" 
        />
        {/* Mobile Image - Better cropped for mobile */}
        <img 
          className="sm:hidden absolute inset-0 w-full h-full object-cover object-center" 
          src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=800&h=1200&q=80" 
          alt="Team collaboration" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 sm:bg-gradient-to-r sm:from-black/60 sm:via-black/40 sm:to-black/60"></div>
        
        <motion.div
          className="relative z-10 text-center text-white max-w-4xl px-6 py-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
            About 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">
              {" "}Samerican Group
            </span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed">
            Connecting exceptional talent with innovative companies worldwide since 2008
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg shadow-lg transition-all duration-300 text-sm sm:text-base"
          >
            Learn More About Us
          </motion.button>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '15+', label: 'Years of Excellence', icon: <Award className="w-8 h-8" /> },
              { number: '500+', label: 'Happy Clients', icon: <Users className="w-8 h-8" /> },
              { number: '10K+', label: 'Professionals Placed', icon: <TrendingUp className="w-8 h-8" /> },
              { number: '25+', label: 'Countries Served', icon: <Globe className="w-8 h-8" /> }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2"
              >
                <div className="text-red-500 mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Founded in 2008, Samerican Group has evolved from a boutique staffing firm to a global talent solutions partner. 
                We recognized early on that the future of work was changing, and organizations needed more than just recruitment – 
                they needed strategic workforce solutions.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Today, we serve Fortune 500 companies and innovative startups alike, helping them build exceptional teams that 
                drive growth, innovation, and success. Our commitment to excellence and deep understanding of market dynamics 
                has made us a trusted partner across multiple industries.
              </p>
              
              <div className="space-y-4">
                {[
                  'Industry-leading expertise across multiple sectors',
                  'Global reach with local market knowledge', 
                  'Commitment to diversity, equity, and inclusion',
                  'Innovative technology-driven solutions'
                ].map((point, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{point}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=1200&q=80"
                alt="Our team"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-br from-red-500 to-red-600 rounded-full opacity-20 blur-2xl"></div>
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full opacity-20 blur-2xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide everything we do and shape the way we serve our clients and candidates
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Target className="w-8 h-8" />,
                title: "Excellence",
                description: "We strive for excellence in every interaction, delivering superior results that exceed expectations."
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Integrity",
                description: "We conduct business with the highest ethical standards, building trust through transparency and honesty."
              },
              {
                icon: <Heart className="w-8 h-8" />,
                title: "Partnership",
                description: "We believe in building long-term relationships based on mutual respect, collaboration, and shared success."
              },
              {
                icon: <Globe className="w-8 h-8" />,
                title: "Innovation",
                description: "We embrace change and continuously evolve our solutions to meet the dynamic needs of the modern workforce."
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2 text-center"
              >
                <div className="text-red-500 mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Leadership Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the visionary leaders who guide our mission to connect exceptional talent with innovative organizations
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                name: "Sarah Johnson",
                role: "Chief Executive Officer",
                image: "https://images.unsplash.com/photo-1494790108755-2616b332ce04?auto=format&fit=crop&w=400&q=80",
                bio: "20+ years of experience in talent acquisition and organizational development"
              },
              {
                name: "Michael Chen", 
                role: "Chief Technology Officer",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80",
                bio: "Expert in HR technology and data-driven recruitment solutions"
              },
              {
                name: "Emily Rodriguez",
                role: "VP of Global Operations",
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80", 
                bio: "Specialist in international staffing and cross-cultural team building"
              }
            ].map((leader, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="relative mb-6 mx-auto w-48 h-48 overflow-hidden rounded-full">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-red-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{leader.name}</h3>
                <p className="text-red-600 font-semibold mb-4">{leader.role}</p>
                <p className="text-gray-600 leading-relaxed">{leader.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-red-500 to-red-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Partner With Us?</h2>
            <p className="text-xl mb-8 text-red-100">
              Whether you're looking to build your dream team or advance your career, 
              we're here to make it happen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-red-600 px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Partner With Us
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-red-600 transition-all duration-300"
              >
                View Our Services
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
