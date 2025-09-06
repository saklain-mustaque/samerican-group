import { useMemo } from "react";
import { useCustomInView } from "./AnimationUtils";

// Optimized industry grid
export const IndustryGrid = () => {
  const industries = useMemo(() => [
    { title: "Information Technology", icon: "💻" },
    { title: "Accounting & Finance", icon: "📊" },
    { title: "Engineering", icon: "⚙️" },
    { title: "C-Level Executive", icon: "👔" },
    { title: "Legal", icon: "⚖️" },
    { title: "Human Resources", icon: "👥" }
  ], []);

  const [gridRef, gridInView] = useCustomInView();

  return (
    <div
      ref={gridRef}
      className={`grid md:grid-cols-3 gap-6 mb-12 transition-all duration-700 ${
        gridInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      {industries.map((industry, index) => (
        <div
          key={index}
          className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 text-center group hover:-translate-y-2"
          style={{ transitionDelay: `${index * 100}ms` }}
        >
          <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
            {industry.icon}
          </div>
          <h3 className="font-semibold text-gray-800 group-hover:text-red-600 transition-colors duration-300">
            {industry.title}
          </h3>
        </div>
      ))}
    </div>
  );
};

export default IndustryGrid;