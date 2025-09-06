import { useMemo } from "react";
import { motion } from "framer-motion";
import { useCustomInView } from "./AnimationUtils";

// Memoized stats component
export const StatsSection = () => {
  const [statsRef, statsInView] = useCustomInView();
  
  const stats = useMemo(() => [
    { number: "3,000,000+", label: "Candidate data mine" },
    { number: "1000+", label: "Happy Clients" },
    { number: "200+", label: "Job Closures per week" }
  ], []);

  return (
    <div 
      ref={statsRef}
      className={`grid md:grid-cols-3 gap-0 mb-16 transition-all duration-700 ${
        statsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      {stats.map((stat, index) => (
        <div
          key={index}
          className={`text-center p-8 ${
            index === 1 
              ? 'bg-gradient-to-r from-red-500 to-red-600 text-white' 
              : 'bg-gradient-to-br from-red-100 to-red-200 text-gray-800'
          } ${index === 0 ? 'rounded-l-2xl' : ''} ${index === 2 ? 'rounded-r-2xl' : ''}`}
          style={{ transitionDelay: `${index * 200}ms` }}
        >
          <motion.div
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.2 + index * 0.2, 
              type: "spring", 
              bounce: 0.4 
            }}
            className={`text-5xl font-bold mb-3 ${index === 1 ? 'text-white' : 'text-red-600'}`}
          >
            {stat.number}
          </motion.div>
          <p className={`font-semibold ${index === 1 ? 'text-red-100' : 'text-gray-700'}`}>
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
};

export default StatsSection;