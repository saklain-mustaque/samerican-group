import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Industry-specific background images
const industryBackgrounds = {
  'information-technology': 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=1950&q=80',
  'government': 'https://images.unsplash.com/photo-1441015401724-70d16b783f5c?auto=format&fit=crop&w=1950&q=80',
  'healthcare': 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=1950&q=80',
  'pharmaceutical': 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&w=1950&q=80',
  'c-level': 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=1950&q=80',
  'administrative': 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1950&q=80',
  'human-resources': 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1950&q=80',
  'engineering': 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1950&q=80',
  'accounting-and-finance': 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1950&q=80',
  'legal': 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1950&q=80',
  'manufacturing': 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=1950&q=80',
  'construction': 'https://images.unsplash.com/photo-1572981779307-38b8cabb2407?auto=format&fit=crop&w=1950&q=80',
  'creative--digital-marketing': 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1950&q=80',
  'sales--marketing': 'https://images.unsplash.com/photo-1553484771-371a605b060b?auto=format&fit=crop&w=1950&q=80'
};

const Hero = ({
  title = "Global Talent Solutions",
  subtitle = "Connecting businesses with top-tier professionals worldwide.",
  description = null,
  backgroundImage = null,
  showButtons = true,
  industryId = null,
  className = ""
}) => {

  // Determine which background image to use
  const getBackgroundImage = () => {
    if (backgroundImage && backgroundImage !== '/api/placeholder/1920/600') {
      return backgroundImage;
    }
    if (industryId && industryBackgrounds[industryId]) {
      return industryBackgrounds[industryId];
    }
    // Default background
    return "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1950&q=80";
  };

  const bgImage = getBackgroundImage();
  const mobileImage = bgImage.replace('w=1950', 'w=800&h=1200');

  return (
    <section className={`hero ${className}`}>
      {/* Desktop Image */}
      <img 
        className="hero-img hidden lg:block" 
        src={bgImage}
        alt={title}
      />
      {/* Mobile Image - Better cropped for mobile */}
      <img 
        className="hero-img lg:hidden" 
        src={mobileImage}
        alt={title}
      />

      <div className="hero-content">
        <motion.div
          className="content-wrapper"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="hero-title text-white mb-4">
            {title}
          </h1>
          <p className="hero-subtitle text-white opacity-90 mb-4">
            {subtitle}
          </p>
          {description && (
            <p className="text-base lg:text-lg text-white opacity-80 mb-4 leading-relaxed max-w-3xl">
              {description}
            </p>
          )}
          {showButtons && (
            <div className="hero__buttons">
              <Link
                to={"/services"}
                className="hero-btn"
              >
                Explore Services
              </Link>
            </div>
          )}
        </motion.div>
      </div>


    </section>
  );
};

export default Hero;