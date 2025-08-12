import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative h-[80vh] flex items-center justify-center bg-cover bg-center"
      // style={{
      //   backgroundImage:
      //     "url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1950&q=80')",
      // }}
    >
      <img className="absolute inset-0 w-full h-full object-cover max-w-full" src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1950&q=80" alt="Hero image" />
      <div className="absolute inset-0 bg-black/40"></div>

      <motion.div
        className="relative z-10 text-center text-white max-w-3xl px-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Global Talent Solutions
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Connecting businesses with top-tier professionals worldwide.
        </p>
        <motion.a
          href="#services"
          whileHover={{ scale: 1.05 }}
          className="bg-orange-700 hover:bg-orange-800 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition-all"
        >
          Explore Services
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Hero;
