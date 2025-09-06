import { useState, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, Users, TrendingUp, Star } from "lucide-react";
import { AnimatedSection } from "./home/AnimationUtils";
import HeroContent from "./home/HeroContent";
import StatsSection from "./home/StatsSection";
import ClientsGrid from "./home/ClientsGrid";
import FooterContent from "./home/FooterContent";

export default function HomeSection() {
  const [activeTab, setActiveTab] = useState("jobseekers");

  // Memoize feature arrays to prevent unnecessary re-renders
  const jobSeekerFeatures = useMemo(() => [
    { icon: <Briefcase className="w-5 h-5" />, text: "Browse 2000+ jobs across different industries" },
    { icon: <TrendingUp className="w-5 h-5" />, text: "Get interviewed within two weeks" },
    { icon: <Users className="w-5 h-5" />, text: "Build and manage your profile" },
    { icon: <Star className="w-5 h-5" />, text: "Receive tailored jobs in your inbox" },
  ], []);

  const employerFeatures = useMemo(() => [
    { icon: <Users className="w-5 h-5" />, text: "Over a million vetted candidate profiles" },
    { icon: <Briefcase className="w-5 h-5" />, text: "Catering across various industry verticals" },
    { icon: <TrendingUp className="w-5 h-5" />, text: "Build candidate pipeline within a week" },
    { icon: <Star className="w-5 h-5" />, text: "Free tool to manage your hiring process" },
  ], []);

  // Memoize tab change handler
  const handleTabChange = useCallback((tab) => {
    setActiveTab(tab);
  }, []);

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
                  onClick={() => handleTabChange(tab)}
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
            <HeroContent 
              activeTab={activeTab}
              jobSeekerFeatures={jobSeekerFeatures}
              employerFeatures={employerFeatures}
            />
          </AnimatePresence>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-50 via-white to-red-50 opacity-50"></div>
        <div className="container mx-auto max-w-6xl px-4 relative">
          <AnimatedSection variant="fadeInUp" className="text-center mb-8">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Our Impact in Numbers
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto"></div>
          </AnimatedSection>
          
          <StatsSection />
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-50 via-white to-red-50"></div>
        <div className="container mx-auto max-w-6xl px-4 relative">
          <AnimatedSection variant="fadeInUp" className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Our Clients
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto"></div>
          </AnimatedSection>

          <ClientsGrid />
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-32 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-gradient-to-tr from-orange-400/20 to-pink-600/20 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto max-w-4xl px-4 relative">
          <AnimatedSection variant="fadeInUp" className="text-center">
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
          </AnimatedSection>
        </div>
      </section>

      {/* <FooterContent /> */}
    </div>
  );
}