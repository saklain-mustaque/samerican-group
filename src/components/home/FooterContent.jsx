import { motion } from "framer-motion";
import { AnimatedSection } from "./AnimationUtils";

export const FooterContent = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900"></div>
      
      {/* Main Footer Content */}
      <div className="relative">
        <div className="container mx-auto max-w-6xl px-4 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-8 mb-12">
            {/* Footer Columns */}
            {[
              ["About Us", "Contact Us", "Careers"],
              ["Blog", "News", "All Jobs"],
              ["Privacy Policy", "Terms & Conditions", "Testimonials"],
              []
            ].map((column, columnIndex) => (
              <AnimatedSection
                key={columnIndex}
                variant="fadeInUp"
                delay={columnIndex * 0.1}
                className="space-y-4"
              >
                {column.map((link, linkIndex) => (
                  <a
                    key={linkIndex}
                    href="#"
                    className="text-gray-300 hover:text-red-400 transition-colors duration-300 block"
                  >
                    {link}
                  </a>
                ))}
              </AnimatedSection>
            ))}
          </div>

          {/* Divider */}
          <div className="border-t border-gray-700 mb-8"></div>

          {/* Bottom Footer */}
          <div className="grid md:grid-cols-3 gap-8 items-center">
            {/* Call Us */}
            <AnimatedSection variant="fadeInLeft" className="text-center md:text-left">
              <h3 className="text-white font-semibold mb-2 flex items-center justify-center md:justify-start gap-2">
                <span className="text-red-400">📞</span> Call Us
              </h3>
              <div className="flex items-center justify-center md:justify-start gap-2">
                <div className="w-6 h-4 bg-gradient-to-r from-blue-500 to-red-500 rounded-sm"></div>
                <span className="text-red-400 font-semibold">972-393-4471</span>
              </div>
            </AnimatedSection>

            {/* Email Us */}
            <AnimatedSection variant="fadeInUp" delay={0.1} className="text-center">
              <h3 className="text-white font-semibold mb-2 flex items-center justify-center gap-2">
                <span className="text-red-400">✉️</span> Email Us
              </h3>
              <a href="mailto:info@samerican-group.com" className="text-red-400 hover:text-red-300 transition-colors duration-300">
                info@samerican-grouop.com
              </a>
            </AnimatedSection>

            {/* Social Media */}
            <AnimatedSection variant="fadeInRight" delay={0.2} className="text-center md:text-right">
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
            </AnimatedSection>
          </div>

          {/* Bottom Text */}
          <div className="mt-12 pt-8 border-t border-gray-700 text-center space-y-4">
            <AnimatedSection variant="fadeInUp" delay={0.4}>
              <p className="text-gray-500 text-sm">
                Copyright © 2025 Samerican Group. All Rights Reserved
              </p>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterContent;