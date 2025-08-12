import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, MapPin, ArrowRight, Briefcase, Users, TrendingUp, Star } from "lucide-react";

export default function HomeSection() {
  const [activeTab, setActiveTab] = useState("jobseekers");

  const jobSeekerFeatures = [
    { icon: <Briefcase className="w-5 h-5" />, text: "Browse 2000+ jobs across different industries" },
    { icon: <TrendingUp className="w-5 h-5" />, text: "Get interviewed within two weeks" },
    { icon: <Users className="w-5 h-5" />, text: "Build and manage your profile" },
    { icon: <Star className="w-5 h-5" />, text: "Receive tailored jobs in your inbox" },
  ];

  const employerFeatures = [
    { icon: <Users className="w-5 h-5" />, text: "Over a million vetted candidate profiles" },
    { icon: <Briefcase className="w-5 h-5" />, text: "Catering across various industry verticals" },
    { icon: <TrendingUp className="w-5 h-5" />, text: "Build candidate pipeline within a week" },
    { icon: <Star className="w-5 h-5" />, text: "Free tool to manage your hiring process" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-32 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-gradient-to-tr from-orange-400/20 to-pink-600/20 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto max-w-7xl relative">
          {/* Tab Navigation */}
          <div className="flex justify-center mb-12">
            <div className="bg-white/80 backdrop-blur-sm p-2 rounded-2xl shadow-lg border border-white/20">
              {["jobseekers", "employers"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`relative px-8 py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${
                    activeTab === tab
                      ? "text-white shadow-lg"
                      : "text-gray-600 hover:text-gray-800 hover:bg-white/50"
                  }`}
                >
                  {activeTab === tab && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-600 rounded-xl"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className="relative z-10">
                    {tab === "jobseekers" ? "Job Seekers" : "Employers"}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Content */}
          <AnimatePresence mode="wait">
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
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
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
                        <motion.button
                          whileHover={{ scale: 1.02, y: -2 }}
                          whileTap={{ scale: 0.98 }}
                          className="bg-gradient-to-r from-red-500 to-red-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2"
                        >
                          <Search className="w-5 h-5" />
                          Find Jobs
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>

                  {/* Hero Image */}
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="relative"
                  >
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
                      <motion.div
                        animate={{ y: [-10, 10, -10] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -top-4 -right-4 bg-white rounded-full p-4 shadow-lg"
                      >
                        <TrendingUp className="w-6 h-6 text-green-500" />
                      </motion.div>
                      
                      <motion.div
                        animate={{ y: [10, -10, 10] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -bottom-4 -left-4 bg-white rounded-full p-4 shadow-lg"
                      >
                        <Users className="w-6 h-6 text-blue-500" />
                      </motion.div>
                    </div>
                  </motion.div>
                </div>

                {/* Features Section */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="text-center"
                >
                  <h2 className="text-3xl font-bold text-gray-800 mb-4">
                    Looking for a great career? Start your journey here!
                  </h2>
                  <div className="w-20 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto mb-12"></div>
                  
                  <div className="grid md:grid-cols-2 gap-8 mb-12">
                    <div className="space-y-6">
                      {jobSeekerFeatures.map((feature, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                          className="flex items-center gap-4 text-left"
                        >
                          <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center text-white flex-shrink-0">
                            {feature.icon}
                          </div>
                          <p className="text-gray-700">{feature.text}</p>
                        </motion.div>
                      ))}
                    </div>
                    
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 1.2 }}
                      className="flex items-center justify-center"
                    >
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
                    </motion.div>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-red-500 to-red-600 text-white px-12 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center gap-3"
                  >
                    Find Jobs
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </motion.div>
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
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <h1 className="text-5xl lg:text-6xl font-bold text-gray-800 mb-6 leading-tight">
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">
                        Trusted partner
                      </span>
                      <br />
                      for your hiring needs
                    </h1>
                    
                    <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/20">
                      <motion.button
                        whileHover={{ scale: 1.02, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full bg-gradient-to-r from-red-500 to-red-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-3"
                      >
                        Request Talent
                        <ArrowRight className="w-5 h-5" />
                      </motion.button>
                    </div>
                  </motion.div>

                  {/* Employers Image */}
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="relative"
                  >
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
                      <motion.div
                        animate={{ y: [-8, 8, -8] }}
                        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -top-4 -right-4 bg-white rounded-full p-4 shadow-lg"
                      >
                        <Star className="w-6 h-6 text-yellow-500" />
                      </motion.div>
                      
                      <motion.div
                        animate={{ y: [8, -8, 8] }}
                        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -bottom-4 -left-4 bg-white rounded-full p-4 shadow-lg"
                      >
                        <Briefcase className="w-6 h-6 text-purple-500" />
                      </motion.div>
                    </div>
                  </motion.div>
                </div>

                {/* Employers Features */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="text-center"
                >
                  <h2 className="text-3xl font-bold text-gray-800 mb-4">
                    Looking for a great talent pool?
                  </h2>
                  <div className="w-20 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto mb-12"></div>
                  
                  <div className="grid md:grid-cols-2 gap-8 mb-12">
                    <div className="space-y-6">
                      {employerFeatures.map((feature, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                          className="flex items-center gap-4 text-left"
                        >
                          <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center text-white flex-shrink-0">
                            {feature.icon}
                          </div>
                          <p className="text-gray-700">{feature.text}</p>
                        </motion.div>
                      ))}
                    </div>
                    
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 1.2 }}
                      className="flex items-center justify-center"
                    >
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
                    </motion.div>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-red-500 to-red-600 text-white px-12 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center gap-3"
                  >
                    Request Talent
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-50 via-white to-red-50"></div>
        <div className="container mx-auto max-w-6xl px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Be a part of our growth story
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-0 mb-16">
            {[
              { number: "3,000,000+", label: "Candidate data mine", delay: 0.2 },
              { number: "1000+", label: "Happy Clients", delay: 0.4 },
              { number: "200+", label: "Job Closures per week", delay: 0.6 }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: stat.delay }}
                className={`text-center p-8 ${
                  index === 1 
                    ? 'bg-gradient-to-r from-red-500 to-red-600 text-white' 
                    : 'bg-gradient-to-br from-red-100 to-red-200 text-gray-800'
                } ${index === 0 ? 'rounded-l-2xl' : ''} ${index === 2 ? 'rounded-r-2xl' : ''}`}
              >
                <motion.div
                  initial={{ scale: 0.5 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: stat.delay + 0.2, type: "spring", bounce: 0.4 }}
                  className={`text-5xl font-bold mb-3 ${index === 1 ? 'text-white' : 'text-red-600'}`}
                >
                  {stat.number}
                </motion.div>
                <p className={`font-semibold ${index === 1 ? 'text-red-100' : 'text-gray-700'}`}>
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <p className="text-gray-600 leading-relaxed text-lg">
              As a leading staffing firm, our goal is to transform an ordinary career into an extraordinary professional journey. We are passionate about making lives better for the people and driving the industry forward. W3Global's efficient recruiting process is powered by cutting-edge technology - matching exceptional people with exceptional opportunities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-32 -left-32 w-64 h-64 bg-gradient-to-br from-blue-400/10 to-purple-600/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-gradient-to-tr from-red-400/10 to-pink-600/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto max-w-6xl px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Industries We Serve
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { title: "Information Technology", icon: "💻" },
              { title: "Accounting & Finance", icon: "📊" },
              { title: "Engineering", icon: "⚙️" },
              { title: "C-Level Executive", icon: "👔" },
              { title: "Legal", icon: "⚖️" },
              { title: "Human Resources", icon: "👥" }
            ].map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 text-center group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {industry.icon}
                </div>
                <h3 className="font-semibold text-gray-800 group-hover:text-red-600 transition-colors duration-300">
                  {industry.title}
                </h3>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-red-500 to-red-600 text-white px-12 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Browse All Jobs
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-20 bg-white relative">
        <div className="container mx-auto max-w-6xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Our Clients
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-16">
            {[
              { name: "Microsoft", logo: "🧬" },
              { name: "Realme", logo: "🏭" },
              { name: "Samsung", logo: "🏢" },
              { name: "Asim Electronics", logo: "📱" },
              { name: "Dell", logo: "💻" },
              { name: "OnePlus", logo: "☎️" }
            ].map((client, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="bg-gray-50 p-6 rounded-xl flex items-center justify-center text-center hover:bg-gray-100 transition-all duration-300 group cursor-pointer"
              >
                <div>
                  <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
                    {client.logo}
                  </div>
                  <p className="text-sm font-semibold text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                    {client.name}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-32 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-gradient-to-tr from-orange-400/20 to-pink-600/20 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto max-w-4xl px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-8">
              Need Help?
            </h2>
            
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-red-500 to-red-600 text-white px-12 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 mb-8"
            >
              Email Us
            </motion.button>

            <p className="text-gray-600 mb-4">Or</p>

            <div className="flex items-center justify-center gap-2 text-gray-700">
              <span>Call us at</span>
              <div className="flex items-center gap-2">
                <div className="w-6 h-4 bg-gradient-to-r from-blue-500 to-red-500 rounded-sm"></div>
                <span className="font-semibold text-red-600">972-393-4471</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900"></div>
        
        {/* Main Footer Content */}
        <div className="relative">
          <div className="container mx-auto max-w-6xl px-4 py-12">
            <div className="grid md:grid-cols-4 gap-8 mb-12">
              {/* Column 1 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-4"
              >
                <a href="#" className="text-gray-300 hover:text-red-400 transition-colors duration-300 block">About Us</a>
                <a href="#" className="text-gray-300 hover:text-red-400 transition-colors duration-300 block">Contact Us</a>
                <a href="#" className="text-gray-300 hover:text-red-400 transition-colors duration-300 block">Careers</a>
              </motion.div>

              {/* Column 2 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="space-y-4"
              >
                <a href="#" className="text-gray-300 hover:text-red-400 transition-colors duration-300 block">Blog</a>
                <a href="#" className="text-gray-300 hover:text-red-400 transition-colors duration-300 block">News</a>
                <a href="#" className="text-gray-300 hover:text-red-400 transition-colors duration-300 block">All Jobs</a>
              </motion.div>

              {/* Column 3 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-4"
              >
                <a href="#" className="text-gray-300 hover:text-red-400 transition-colors duration-300 block">Privacy Policy</a>
                <a href="#" className="text-gray-300 hover:text-red-400 transition-colors duration-300 block">Terms & Conditions</a>
                <a href="#" className="text-gray-300 hover:text-red-400 transition-colors duration-300 block">Testimonials</a>
              </motion.div>

              {/* Column 4 - BBB Badge */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex justify-center md:justify-end"
              >
                
              </motion.div>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-700 mb-8"></div>

            {/* Bottom Footer */}
            <div className="grid md:grid-cols-3 gap-8 items-center">
              {/* Call Us */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center md:text-left"
              >
                <h3 className="text-white font-semibold mb-2 flex items-center justify-center md:justify-start gap-2">
                  <span className="text-red-400">📞</span> Call Us
                </h3>
                <div className="flex items-center justify-center md:justify-start gap-2">
                  <div className="w-6 h-4 bg-gradient-to-r from-blue-500 to-red-500 rounded-sm"></div>
                  <span className="text-red-400 font-semibold">972-393-4471</span>
                </div>
              </motion.div>

              {/* Email Us */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-center"
              >
                <h3 className="text-white font-semibold mb-2 flex items-center justify-center gap-2">
                  <span className="text-red-400">✉️</span> Email Us
                </h3>
                <a href="mailto:info@w3global.com" className="text-red-400 hover:text-red-300 transition-colors duration-300">
                  info@w3global.com
                </a>
              </motion.div>

              {/* Social Media */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-center md:text-right"
              >
                <h3 className="text-white font-semibold mb-2">Follow Us</h3>
                <div className="flex items-center justify-center md:justify-end gap-3">
                  {[
                    { icon: "💼", label: "LinkedIn" },
                    { icon: "📘", label: "Facebook" },
                    { icon: "🐦", label: "Twitter" },
                    { icon: "📷", label: "Instagram" },
                    { icon: "📌", label: "Pinterest" },
                    { icon: "📺", label: "YouTube" }
                  ].map((social, index) => (
                    <motion.a
                      key={index}
                      href="#"
                      whileHover={{ scale: 1.2, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-red-600 transition-all duration-300 group"
                      title={social.label}
                    >
                      <span className="text-sm group-hover:scale-110 transition-transform duration-300">
                        {social.icon}
                      </span>
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Bottom Text */}
            <div className="mt-12 pt-8 border-t border-gray-700 text-center space-y-4">
              
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-gray-500 text-sm"
              >
                Copyright © 2025 W3Global. All Rights Reserved
              </motion.p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}