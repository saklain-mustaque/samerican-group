import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { ArrowRight, Users, Briefcase, CheckCircle, ArrowLeft } from 'lucide-react';
import Hero from '../components/Hero';
import FAQ from '../components/FAQ';
import { getIndustryById } from '../data/industries';

export default function IndustryDetail() {
  const { industryId } = useParams();
  const navigate = useNavigate();
  const industry = getIndustryById(industryId);

  if (!industry) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Industry Not Found</h1>
          <Link to="/industries" className="text-red-600 hover:text-red-700">
            ← Back to Industries
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero
        title={industry.name}
        subtitle={`Specialized staffing solutions for ${industry.shortName.toLowerCase()} professionals`}
        description={industry.description}
        industryId={industryId}
        showButtons={false}
      />

      {/* Breadcrumb */}
      <section className="py-4 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-red-600">Home</Link>
            <span>/</span>
            <Link to="/industries" className="hover:text-red-600">Industries</Link>
            <span>/</span>
            <span className="text-gray-800">{industry.name}</span>
          </div>
        </div>
      </section>

      {/* Action Buttons Section */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-6 justify-center mb-16">
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
                <h3 className="text-xl font-bold mb-2">Hire {industry.shortName} Talent</h3>
                <p className="text-red-100 mb-4">Connect with qualified {industry.shortName.toLowerCase()} professionals</p>
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
                <h3 className="text-xl font-bold mb-2">Find {industry.shortName} Jobs</h3>
                <p className="text-gray-300 mb-4">Explore career opportunities in {industry.shortName.toLowerCase()}</p>
                <div className="flex items-center justify-center text-white">
                  <span className="mr-2">Browse Jobs</span>
                  <ArrowRight className="w-5 h-5" />
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services & Features */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Our {industry.name} Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive staffing solutions across all areas of {industry.shortName.toLowerCase()}, 
              ensuring you get the right expertise for your specific needs.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, staggerChildren: 0.1 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {industry.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                  <h3 className="font-semibold text-gray-800">{feature}</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Professional staffing solutions for {feature.toLowerCase()} roles across all experience levels.
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Why Choose Samerican Group for {industry.shortName}?
              </h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Industry Expertise</h3>
                    <p className="text-gray-600">Deep understanding of {industry.shortName.toLowerCase()} market trends and skill requirements.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Qualified Talent Pool</h3>
                    <p className="text-gray-600">Extensive network of pre-screened {industry.shortName.toLowerCase()} professionals.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Fast Placement</h3>
                    <p className="text-gray-600">Quick turnaround times without compromising on quality.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Flexible Solutions</h3>
                    <p className="text-gray-600">Temporary, permanent, and contract-to-hire options available.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-red-500 to-red-700 p-8 rounded-2xl text-white">
                <div className="text-6xl mb-6 text-center opacity-20">
                  {industry.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-center">Ready to Get Started?</h3>
                <p className="text-red-100 text-center mb-6">
                  Connect with our {industry.shortName.toLowerCase()} specialists today and discover how we can help you achieve your goals.
                </p>
                <div className="text-center">
                  <Link
                    to="/contact"
                    className="inline-flex items-center bg-white text-red-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300"
                  >
                    Contact Us Today
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ 
        faqs={industry.faqs}
        title="Frequently Asked Questions"
        subtitle={`Common questions about our ${industry.shortName.toLowerCase()} staffing services`}
      />

      {/* Back to Industries */}
      <section className="py-8 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <button
            onClick={() => navigate('/industries')}
            className="inline-flex items-center text-gray-600 hover:text-red-600 transition-colors duration-200"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to All Industries
          </button>
        </div>
      </section>
    </div>
  );
}