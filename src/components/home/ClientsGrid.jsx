import { useMemo } from "react";
import { useCustomInView } from "./AnimationUtils";

// Optimized clients grid
export const ClientsGrid = () => {
  const clients = useMemo(() => [
    { name: "Microsoft", logo: "🧬" },
    { name: "Realme", logo: "🏭" },
    { name: "Samsung", logo: "🏢" },
    { name: "Asim Electronics", logo: "📱" },
    { name: "Dell", logo: "💻" },
    { name: "OnePlus", logo: "☎️" }
  ], []);

  const [clientsRef, clientsInView] = useCustomInView();

  return (
    <div
      ref={clientsRef}
      className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-16 transition-all duration-700 ${
        clientsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      {clients.map((client, index) => (
        <div
          key={index}
          className="bg-gray-50 p-6 rounded-xl flex items-center justify-center text-center hover:bg-gray-100 transition-all duration-300 group cursor-pointer hover:-translate-y-2"
          style={{ transitionDelay: `${index * 100}ms` }}
        >
          <div>
            <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
              {client.logo}
            </div>
            <p className="text-sm font-semibold text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
              {client.name}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ClientsGrid;