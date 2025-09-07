import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Briefcase, CheckCircle } from 'lucide-react';
import Hero from '../components/Hero';
import { getAllIndustries } from '../data/industries';

export default function Industries() {
  const industries = getAllIndustries();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero
        title="Industries We Serve"
        subtitle="Specialized staffing solutions across diverse sectors"
        description="The satisfaction of employers and job seekers is our top priority. We maintain transparency and provide personal care to ensure the right talent meets the right opportunity at every stage of the hiring cycle."
        backgroundImage="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1950&q=80"
        showButtons={false}
        className="hero-industries"
      />

      {/* Action Buttons Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex-1 max-w-md"
            >
              <Link
                to="/employers"
                className="block bg-red-600 hover:bg-red-700 text-white p-8 rounded-lg text-center transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <Users className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">For Employers</h3>
                <p className="text-red-100 mb-4">Find the right talent for your organization</p>
                <div className="flex items-center justify-center text-white">
                  <span className="mr-2">Request Talent</span>
                  <ArrowRight className="w-5 h-5" />
                </div>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex-1 max-w-md"
            >
              <Link
                to="/jobs"
                className="block bg-gray-800 hover:bg-gray-900 text-white p-8 rounded-lg text-center transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <Briefcase className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">For Job Seekers</h3>
                <p className="text-gray-300 mb-4">Discover your dream career opportunity</p>
                <div className="flex items-center justify-center text-white">
                  <span className="mr-2">Find Your Dream Job</span>
                  <ArrowRight className="w-5 h-5" />
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Our Industry Expertise
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We specialize in connecting top talent with leading organizations across various industries, 
              ensuring the perfect match for both employers and job seekers.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {industries.map((industry, index) => (
              <motion.div
                key={industry.id}
                variants={itemVariants}
                className="group"
              >
                <Link
                  to={`/industries/${industry.id}`}
                  className="block bg-white hover:bg-gray-50 border border-gray-200 hover:border-red-300 rounded-xl p-6 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                >
                  <div className="text-center">
                    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {industry.icon}
                    </div>
                    <h3 className="text-lg font-bold text-gray-800 mb-3 group-hover:text-red-600 transition-colors duration-300">
                      {industry.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {industry.description}
                    </p>
                    <div className="space-y-1 mb-4">
                      {industry.features.slice(0, 3).map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-500">
                          <CheckCircle className="w-3 h-3 mr-2 text-green-500" />
                          {feature}
                        </div>
                      ))}
                      {industry.features.length > 3 && (
                        <div className="text-xs text-gray-400 mt-2">
                          +{industry.features.length - 3} more services
                        </div>
                      )}
                    </div>
                    <div className="flex items-center justify-center text-red-600 group-hover:text-red-700 font-semibold">
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Connect with Top Talent?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let us help you find the perfect match for your staffing needs across any industry.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full font-semibold transition-colors duration-300 inline-flex items-center justify-center"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/about"
                className="border border-white/30 hover:border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-full font-semibold transition-all duration-300"
              >
                Learn More About Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}