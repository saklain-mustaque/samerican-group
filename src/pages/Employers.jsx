import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { NavigationButton } from '../components/NavigationButton';
import Hero from '../components/Hero';
import { 
  Building2, 
  Users, 
  Target, 
  Clock,
  CheckCircle,
  Shield,
  Award,
  Search,
  UserCheck,
  Globe,
  Zap,
  Star,
  ArrowRight,
  Phone,
  Mail,
  X
} from 'lucide-react';

const EmployersPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: ''
  });
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccessModal(true);
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: ''
      });
    }, 1000);
  };

  const closeModal = () => {
    setShowSuccessModal(false);
  };

  const heroProps = {
    title: "Right Match. On Time. Within Budget.",
    subtitle: "We Make Hiring Easy with AI-Powered Technology",
    description: "Every hour, someone is hired through Samerican Group. Experience faster submittals with over 5 million vetted candidate profiles and seasoned recruiters who understand your budget.",
    backgroundImage: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1950&q=80",
    showButtons: true,
    marginTop: 'mt-50'
  };
  return (
    <div className="min-h-screen">
      {/* Hero Section using consistent Hero component */}
      <Hero {...heroProps} />

      {/* Contact Form Section */}
      <section id='get-started-section' className="py-20 bg-gradient-to-br from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-white"
            >
              <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Hiring Process?</h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Join hundreds of companies who trust Samerican Group to find their perfect candidates. 
                Our proven process delivers results faster than traditional recruiting methods.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-lg text-gray-200">AI-Powered technology through a robust & proven screening process</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-lg text-gray-200">Faster submittals with the help of over 5 million vetted candidate profiles</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-lg text-gray-200">Seasoned Recruiters who understand the client's budget</span>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-green-400/20 to-green-500/20 p-6 rounded-xl backdrop-blur-sm border border-green-400/30">
                <div className="text-2xl font-bold text-green-400 mb-2">Every hour,</div>
                <div className="text-xl text-green-300">someone is hired through Samerican Group</div>
              </div>
            </motion.div>

            {/* Right Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-gray-800/80 backdrop-blur-sm p-8 rounded-2xl shadow-2xl border border-gray-700/50">
                <h3 className="text-white text-2xl font-bold mb-6 text-center">We Make Hiring Easy</h3>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none transition-all duration-300"
                  />
                  
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none transition-all duration-300"
                  />
                  
                  <input
                    type="email"
                    name="email"
                    placeholder="Email ID"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none transition-all duration-300"
                  />
                  
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none transition-all duration-300"
                  />
                  
                  <input
                    type="text"
                    name="company"
                    placeholder="Company Name"
                    value={formData.company}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none transition-all duration-300"
                  />
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Submitting...' : 'Get Started'}
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Why Leading Companies Choose Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We understand that your success depends on having the right people in the right roles. 
              Our comprehensive approach ensures you get exactly what you need.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Target className="w-8 h-8" />,
                title: "Precision Matching",
                description: "Advanced algorithms and human expertise combine to find candidates who perfectly match your requirements and culture."
              },
              {
                icon: <Clock className="w-8 h-8" />,
                title: "Rapid Turnaround",
                description: "Fill critical positions quickly with our streamlined process. Most placements completed within 2-3 weeks."
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Quality Guarantee",
                description: "Every placement comes with our satisfaction guarantee. If it's not a perfect fit, we'll find you another candidate at no cost."
              },
              {
                icon: <Globe className="w-8 h-8" />,
                title: "Global Reach",
                description: "Access talent from around the world with our extensive international network spanning 25+ countries."
              },
              {
                icon: <UserCheck className="w-8 h-8" />,
                title: "Thorough Vetting",
                description: "Comprehensive background checks, skills assessments, and cultural fit evaluations for every candidate."
              },
              {
                icon: <Award className="w-8 h-8" />,
                title: "Industry Expertise",
                description: "Specialized knowledge across 14+ industries with dedicated experts who understand your unique challenges."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-8 rounded-xl hover:bg-white hover:shadow-xl transition-all duration-300 group"
              >
                <div className="text-red-500 mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Complete Talent Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From temporary staffing to executive search, we offer comprehensive solutions 
              tailored to your specific hiring needs and business objectives.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {[
              {
                icon: <Search className="w-10 h-10" />,
                title: "Executive Search",
                description: "Find C-level executives and senior leadership talent who can drive strategic vision and organizational growth.",
                features: [
                  "Confidential search process",
                  "Comprehensive candidate assessment", 
                  "Cultural fit evaluation",
                  "90-day placement guarantee"
                ]
              },
              {
                icon: <Users className="w-10 h-10" />,
                title: "Direct Hire Placement",
                description: "Permanent staffing solutions across all skill levels and industries to build your core team.",
                features: [
                  "Skills-based matching",
                  "Background verification",
                  "Reference validation",
                  "Competitive fee structure"
                ]
              },
              {
                icon: <Clock className="w-10 h-10" />,
                title: "Contract Staffing",
                description: "Flexible workforce solutions for project-based needs, seasonal demands, and temporary coverage.",
                features: [
                  "Rapid deployment",
                  "Scalable solutions",
                  "Complete payroll management",
                  "Worker classification compliance"
                ]
              },
              {
                icon: <Zap className="w-10 h-10" />,
                title: "Contract-to-Hire",
                description: "Evaluate talent through contract arrangements with the option to transition to permanent roles.",
                features: [
                  "Risk mitigation",
                  "Extended evaluation period",
                  "Seamless conversion process",
                  "Flexible terms"
                ]
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="flex items-start space-x-4">
                  <div className="text-red-500 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">{service.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-2">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Proven Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From initial consultation to successful placement, our systematic approach 
              ensures optimal outcomes for both employers and candidates.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-red-500 to-red-600 hidden lg:block"></div>

            <div className="space-y-12">
              {[
                {
                  step: "01",
                  title: "Consultation & Requirements",
                  description: "We start with an in-depth consultation to understand your specific needs, company culture, and hiring objectives.",
                  details: ["Role analysis and definition", "Cultural fit assessment", "Timeline and budget planning", "Success metrics establishment"]
                },
                {
                  step: "02", 
                  title: "Candidate Sourcing",
                  description: "Leveraging our extensive network and advanced search techniques to identify top-tier candidates.",
                  details: ["Database mining and networking", "Industry-specific job boards", "Social media and professional platforms", "Referral network activation"]
                },
                {
                  step: "03",
                  title: "Screening & Assessment",
                  description: "Comprehensive evaluation process including skills assessment, background checks, and cultural alignment.",
                  details: ["Technical skills evaluation", "Behavioral interviews", "Reference verification", "Background and credential checks"]
                },
                {
                  step: "04",
                  title: "Presentation & Placement",
                  description: "Present qualified candidates and facilitate the interview process through to successful placement.",
                  details: ["Candidate presentation and profiles", "Interview coordination", "Offer negotiation support", "Onboarding assistance"]
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex-col lg:space-x-8`}
                >
                  <div className="flex-1 lg:max-w-md">
                    <div className={`bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ${
                      index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'
                    } text-center`}>
                      <div className="text-6xl font-bold text-red-500/20 mb-4">{item.step}</div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-4">{item.title}</h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">{item.description}</p>
                      <ul className={`space-y-2 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'} text-center`}>
                        {item.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className={`flex items-center space-x-2 ${
                            index % 2 === 0 ? 'lg:justify-end' : 'lg:justify-start'
                          } justify-center`}>
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                            <span className="text-gray-700 text-sm">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="hidden lg:block w-4 h-4 bg-red-500 rounded-full border-4 border-white shadow-lg z-10 my-8 lg:my-0"></div>
                  
                  <div className="flex-1 lg:max-w-md"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-gradient-to-br from-red-500 to-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Industries We Serve</h2>
            <p className="text-xl text-red-100 max-w-3xl mx-auto">
              Deep expertise across diverse sectors ensures we understand your unique challenges 
              and can find talent that fits your industry's specific requirements.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[
              { name: 'Information Technology', id: 'information-technology' },
              { name: 'Healthcare & Life Sciences', id: 'healthcare' },
              { name: 'Financial Services', id: 'accounting-and-finance' },
              { name: 'Manufacturing', id: 'manufacturing' },
              { name: 'Engineering', id: 'engineering' },
              { name: 'Government & Public Sector', id: 'government' },
              { name: 'Legal & Compliance', id: 'legal' },
              { name: 'Human Resources', id: 'human-resources' },
              { name: 'Sales & Marketing', id: 'sales--marketing' },
              { name: 'Creative & Digital', id: 'creative--digital-marketing' },
              { name: 'Construction', id: 'construction' },
              { name: 'Pharmaceutical', id: 'pharmaceutical' },
              { name: 'Administrative', id: 'administrative' },
              { name: 'C-Level & Executive', id: 'c-level' }
            ].map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:bg-white/20 transition-all duration-300 group"
              >
                <Link 
                  to={`/industries/${industry.id}`}
                  className="flex items-center justify-between w-full"
                >
                  <span className="font-semibold text-white group-hover:text-red-100 transition-colors duration-300">
                    {industry.name}
                  </span>
                  <ArrowRight className="w-5 h-5 text-white/70 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from industry leaders who have transformed their organizations with our talent solutions
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                company: "TechGlobal Solutions",
                industry: "Technology",
                challenge: "Needed 15 senior developers within 6 weeks for a critical project launch.",
                result: "Delivered 18 qualified candidates, filled all positions within 4 weeks.",
                impact: "40% faster time-to-market, $2M in additional revenue",
                testimonial: "Samerican Group's efficiency and quality of candidates exceeded our expectations.",
                name: "Sarah Chen",
                title: "CTO"
              },
              {
                company: "MedCore Industries",
                industry: "Healthcare",
                challenge: "Required regulatory compliance experts for FDA approval process.",
                result: "Placed 3 senior regulatory affairs specialists with perfect track records.",
                impact: "FDA approval achieved 3 months ahead of schedule",
                testimonial: "Their industry expertise made all the difference in our product launch success.",
                name: "Dr. Michael Rodriguez",
                title: "VP of Regulatory Affairs"
              },
              {
                company: "FinanceFirst Corp",
                industry: "Financial Services",
                challenge: "Sought a new CFO with public company and M&A experience.",
                result: "Successfully placed seasoned CFO with 15+ years relevant experience.",
                impact: "Led successful IPO raising $150M in capital",
                testimonial: "The executive search process was thorough, confidential, and highly professional.",
                name: "Jennifer Walsh",
                title: "CEO"
              }
            ].map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{story.company}</h3>
                  <span className="text-red-500 font-semibold text-sm bg-red-50 px-3 py-1 rounded-full">
                    {story.industry}
                  </span>
                </div>

                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-2">Challenge:</h4>
                    <p className="text-gray-600 text-sm">{story.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-2">Solution:</h4>
                    <p className="text-gray-600 text-sm">{story.result}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-2">Impact:</h4>
                    <p className="text-green-600 font-semibold text-sm">{story.impact}</p>
                  </div>
                </div>

                <div className="border-t pt-6">
                  <div className="flex items-center space-x-2 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <blockquote className="text-gray-600 italic mb-4">
                    "{story.testimonial}"
                  </blockquote>
                  <div>
                    <div className="font-semibold text-gray-800">{story.name}</div>
                    <div className="text-gray-500 text-sm">{story.title}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '500+', label: 'Companies Served', icon: <Building2 className="w-8 h-8" /> },
              { number: '10K+', label: 'Successful Placements', icon: <UserCheck className="w-8 h-8" /> },
              { number: '95%', label: 'Client Satisfaction Rate', icon: <Star className="w-8 h-8" /> },
              { number: '2.5 weeks', label: 'Average Time to Fill', icon: <Clock className="w-8 h-8" /> }
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

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-black text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Build Your Dream Team?</h2>
            <p className="text-xl mb-8 text-gray-300">
              Let's discuss your hiring needs and create a customized talent acquisition strategy 
              that drives your business forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Get Started Today
              </motion.button>
              <NavigationButton
                to="/contact"
                section="contact-form"
                variant="secondary"
              >
                Schedule a Call
              </NavigationButton>
            </div>
            <div className="mt-12 grid md:grid-cols-3 gap-8 text-center">
              <div className="flex flex-col items-center">
                <Phone className="w-6 h-6 text-red-400 mb-2" />
                <span className="text-gray-300">(312) 450-8700</span>
              </div>
              <div className="flex flex-col items-center">
                <Mail className="w-6 h-6 text-red-400 mb-2" />
                <span className="text-gray-300">employers@samerican.com</span>
              </div>
              <div className="flex flex-col items-center">
                <Clock className="w-6 h-6 text-red-400 mb-2" />
                <span className="text-gray-300">24/7 Support Available</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.7 }}
            className="bg-white rounded-2xl p-8 max-w-md mx-4 relative shadow-2xl"
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors duration-200"
            >
              <X className="w-6 h-6" />
            </button>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-500" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Success!</h3>
              <p className="text-gray-600 mb-4">Thanks for contacting us.</p>
              <p className="text-gray-500 text-sm mb-6">
                One of our team members will get back in touch with you soon!
              </p>
              
              <button
                onClick={closeModal}
                className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300"
              >
                Close
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default EmployersPage;