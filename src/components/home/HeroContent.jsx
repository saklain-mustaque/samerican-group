import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Search, MapPin, ArrowRight, Briefcase, Users, TrendingUp, Star } from "lucide-react";
import { AnimatedSection, FloatingElement } from "./AnimationUtils";
import FeatureList from "./FeatureList";

export const HeroContent = ({ activeTab, jobSeekerFeatures, employerFeatures }) => {
  return (
    <>
      {activeTab === "jobseekers" && (
        <motion.div
          key="jobseekers"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {/* Main Hero Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <AnimatedSection variant="fadeInLeft" delay={0.2}>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-800 mb-6 leading-tight">
                Right Job.
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">
                  Preferred Location.
                </span>
                <br />
                Rewarding Salary.
              </h1>
              
              {/* Search Form */}
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-white/20 mb-8">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="relative">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Job title, Keywords"
                      className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 text-gray-700"
                    />
                  </div>
                  <div className="relative">
                    <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="City, State (Ex: Dallas, TX) or State or ZIP"
                      className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 text-gray-700"
                    />
                  </div>
                  <Link to="/jobs">
                    <motion.button
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-gradient-to-r from-red-500 to-red-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2"
                    >
                      <Search className="w-5 h-5" />
                      Find Jobs
                    </motion.button>
                  </Link>
                </div>
              </div>
            </AnimatedSection>

            {/* Hero Image */}
            <AnimatedSection variant="fadeInRight" delay={0.4} className="relative">
              <div className="relative bg-gradient-to-br from-blue-100 to-indigo-200 rounded-3xl p-8 shadow-2xl">
                <div className="flex justify-center items-center h-80">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-gradient-to-r from-red-500 to-red-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                      <Briefcase className="w-12 h-12 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-700 mb-2">Professional Network</h3>
                    <p className="text-gray-600">Connect with opportunities</p>
                  </div>
                </div>
                
                {/* Floating Elements */}
                <FloatingElement duration={4} className="-top-4 -right-4">
                  <div className="bg-white rounded-full p-4 shadow-lg">
                    <TrendingUp className="w-6 h-6 text-green-500" />
                  </div>
                </FloatingElement>
                
                <FloatingElement duration={3} delay={1.5} className="-bottom-4 -left-4">
                  <div className="bg-white rounded-full p-4 shadow-lg">
                    <Users className="w-6 h-6 text-blue-500" />
                  </div>
                </FloatingElement>
              </div>
            </AnimatedSection>
          </div>

          {/* Features Section */}
          <AnimatedSection variant="fadeInUp" delay={0.6} className="text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Looking for a great career? Start your journey here!
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto mb-12"></div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <FeatureList features={jobSeekerFeatures} delay={0.8} />
              
              <AnimatedSection variant="scaleIn" delay={1.2} className="flex items-center justify-center">
                <div className="relative">
                  <div className="w-64 h-64 bg-gradient-to-br from-orange-200 to-red-200 rounded-full flex items-center justify-center">
                    <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-lg">
                      <Briefcase className="w-16 h-16 text-red-500" />
                    </div>
                  </div>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 border-4 border-dashed border-red-300 rounded-full"
                  ></motion.div>
                </div>
              </AnimatedSection>
            </div>

            <Link to="/jobs">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-red-500 to-red-600 text-white px-12 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center gap-3"
              >
                Find Jobs
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
          </AnimatedSection>
        </motion.div>
      )}

      {activeTab === "employers" && (
        <motion.div
          key="employers"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {/* Employers Hero Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <AnimatedSection variant="fadeInLeft" delay={0.2}>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-800 mb-6 leading-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">
                  Trusted partner
                </span>
                <br />
                for your hiring needs
              </h1>
              
              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/20">
                <Link to="/employers">
                  <motion.button
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-red-500 to-red-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-3"
                  >
                    Request Talent
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </Link>
              </div>
            </AnimatedSection>

            {/* Employers Image */}
            <AnimatedSection variant="fadeInRight" delay={0.4} className="relative">
              <div className="relative bg-gradient-to-br from-purple-100 to-pink-200 rounded-3xl p-8 shadow-2xl">
                <div className="flex justify-center items-center h-80">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-gradient-to-r from-red-500 to-red-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                      <Users className="w-12 h-12 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-700 mb-2">Talent Pool</h3>
                    <p className="text-gray-600">Find the perfect candidates</p>
                  </div>
                </div>
                
                {/* Floating Elements */}
                <FloatingElement duration={3.5} className="-top-4 -right-4">
                  <div className="bg-white rounded-full p-4 shadow-lg">
                    <Star className="w-6 h-6 text-yellow-500" />
                  </div>
                </FloatingElement>
                
                <FloatingElement duration={2.5} delay={1} className="-bottom-4 -left-4">
                  <div className="bg-white rounded-full p-4 shadow-lg">
                    <Briefcase className="w-6 h-6 text-purple-500" />
                  </div>
                </FloatingElement>
              </div>
            </AnimatedSection>
          </div>

          {/* Employers Features */}
          <AnimatedSection variant="fadeInUp" delay={0.6} className="text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Looking for a great talent pool?
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto mb-12"></div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <FeatureList features={employerFeatures} delay={0.8} />
              
              <AnimatedSection variant="scaleIn" delay={1.2} className="flex items-center justify-center">
                <div className="relative">
                  <div className="w-64 h-64 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full flex items-center justify-center">
                    <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-lg">
                      <Users className="w-16 h-16 text-red-500" />
                    </div>
                  </div>
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 border-4 border-dashed border-purple-300 rounded-full"
                  ></motion.div>
                </div>
              </AnimatedSection>
            </div>

            <Link to="/employers">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-red-500 to-red-600 text-white px-12 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center gap-3"
              >
                Request Talent
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
          </AnimatedSection>
        </motion.div>
      )}
    </>
  );
};

export default HeroContent;