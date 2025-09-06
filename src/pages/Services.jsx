import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Users, 
  Search, 
  Target, 
  TrendingUp,
  CheckCircle,
  Code,
  Briefcase,
  Heart,
  Shield,
  Award,
  Globe
} from 'lucide-react';

const ServicesPage = () => {
  const services = [
    {
      icon: <Search className="w-12 h-12" />,
      title: "IT Staffing & Recruitment",
      description: "Find top-tier technology professionals for your organization. From software developers to cybersecurity experts.",
      features: ["Full-Stack Developers", "DevOps Engineers", "Data Scientists", "Cloud Architects"]
    },
    {
      icon: <Target className="w-12 h-12" />,
      title: "Executive Search",
      description: "Strategic leadership placement for C-level executives and senior management positions.",
      features: ["C-Level Executives", "VP & Director Roles", "Board Positions", "Strategic Advisors"]
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Contract Staffing",
      description: "Flexible workforce solutions to scale your team up or down based on project needs.",
      features: ["Project-Based Teams", "Temporary Staffing", "Contract-to-Hire", "Seasonal Workers"]
    },
    {
      icon: <Briefcase className="w-12 h-12" />,
      title: "Direct Hire",
      description: "Permanent placement services to build long-term teams and organizational growth.",
      features: ["Permanent Placements", "Cultural Fit Analysis", "Skills Assessment", "Background Checks"]
    },
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: "Workforce Consulting",
      description: "Strategic workforce planning and optimization to maximize your human capital potential.",
      features: ["Workforce Planning", "Talent Analytics", "Process Optimization", "Market Insights"]
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: "Global Talent Solutions",
      description: "International recruitment and global workforce management across multiple countries.",
      features: ["International Hiring", "Visa Support", "Global Compliance", "Remote Teams"]
    }
  ];

  const industries = [
    { name: "Information Technology", icon: <Code className="w-8 h-8" /> },
    { name: "Healthcare", icon: <Heart className="w-8 h-8" /> },
    { name: "Finance & Banking", icon: <TrendingUp className="w-8 h-8" /> },
    { name: "Government", icon: <Shield className="w-8 h-8" /> },
    { name: "Manufacturing", icon: <Award className="w-8 h-8" /> },
    { name: "Pharmaceutical", icon: <Target className="w-8 h-8" /> }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center bg-cover bg-center">
        <img 
          className="absolute inset-0 w-full h-full object-cover" 
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1950&q=80" 
          alt="Our Services" 
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60"></div>
        
        <motion.div
          className="relative z-10 text-center text-white max-w-4xl px-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">
              {" "}Services
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Comprehensive talent solutions tailored to your business needs
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold px-8 py-4 rounded-lg shadow-lg transition-all duration-300"
          >
            Explore Our Solutions
          </motion.button>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-6">What We Offer</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From strategic workforce planning to specialized recruitment, we provide end-to-end talent solutions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2"
              >
                <div className="text-red-500 mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700 text-sm font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  className="w-full mt-6 bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-3 rounded-lg font-semibold hover:from-red-600 hover:to-red-700 transition-all duration-300"
                >
                  Learn More
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Industries We Serve</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Deep industry expertise across multiple sectors ensures we understand your unique challenges
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2 text-center border border-gray-100"
              >
                <div className="text-red-500 mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {industry.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-800">{industry.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology that delivers results every time
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Understand", desc: "We dive deep into your needs, culture, and requirements" },
              { step: "02", title: "Source", desc: "Leverage our network and tools to find top talent" },
              { step: "03", title: "Evaluate", desc: "Rigorous screening and assessment process" },
              { step: "04", title: "Deliver", desc: "Present qualified candidates and support integration" }
            ].map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-lg">
                  {process.step}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{process.title}</h3>
                <p className="text-gray-600 leading-relaxed">{process.desc}</p>
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
            <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl mb-8 text-red-100">
              Let's discuss how our services can help you achieve your talent acquisition goals
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to={"/contact"}
                role="button"
                className="bg-white text-red-600 px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Contact Us Today
              </Link>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-red-600 transition-all duration-300"
              >
                Schedule Consultation
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
