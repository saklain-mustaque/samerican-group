import { useState, useEffect } from "react";
import { Link } from "react-scroll";

export default function HomePage() {
  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavBg(true);
      } else {
        setNavBg(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="font-sans">
      {/* Navbar */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          navBg ? "bg-orange-500 shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-white font-bold text-xl">W3Global</div>
          <div className="space-x-6 hidden md:flex">
            {[
              { name: "Home", to: "home" },
              { name: "Services", to: "services" },
              { name: "Testimonials", to: "testimonials" },
              { name: "Contact", to: "contact" },
            ].map((link) => (
              <Link
                key={link.name}
                to={link.to}
                smooth={true}
                duration={500}
                className="text-white hover:text-gray-200 cursor-pointer"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="h-screen bg-cover bg-center flex items-center justify-center text-center relative"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://source.unsplash.com/1600x900/?business,team')",
        }}
      >
        <div className="text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fadeIn">
            Connecting Talent with Opportunity
          </h1>
          <p className="text-lg md:text-2xl mb-6 animate-fadeIn delay-200">
            We provide top staffing solutions tailored to your needs.
          </p>
          <a
            href="#services"
            className="bg-orange-700 text-white px-6 py-3 rounded-lg text-lg hover:bg-orange-800 transition-all"
          >
            Explore Services
          </a>
        </div>
      </section>
    </div>
  );
}
