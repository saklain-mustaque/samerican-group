// import { Link } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import { 
//   Phone, 
//   Mail, 
//   MapPin, 
//   Facebook, 
//   Twitter, 
//   Linkedin, 
//   Instagram,
//   Youtube,
//   ExternalLink 
// } from 'lucide-react';

// const Footer = () => {
//   const currentYear = new Date().getFullYear();

//   const quickLinks = [
//     { name: 'Home', href: '/' },
//     { name: 'Find a Job', href: '#' },
//     { name: 'Employers', href: '#' },
//     { name: 'About Us', href: '/about' },
//     { name: 'Contact Us', href: '/contact' }
//   ];

//   const services = [
//     { name: 'IT Staffing', href: '/services' },
//     { name: 'Executive Search', href: '/services' },
//     { name: 'Contract Staffing', href: '/services' },
//     { name: 'Direct Hire', href: '/services' },
//     { name: 'Payroll Services', href: '/services' }
//   ];

//   const industries = [
//     { name: 'Information Technology', href: '#' },
//     { name: 'Healthcare', href: '#' },
//     { name: 'Finance & Accounting', href: '#' },
//     { name: 'Engineering', href: '#' },
//     { name: 'Manufacturing', href: '#' }
//   ];

//   const socialLinks = [
//     { name: 'LinkedIn', icon: <Linkedin className="w-5 h-5" />, href: '#' },
//     { name: 'Facebook', icon: <Facebook className="w-5 h-5" />, href: '#' },
//     { name: 'Twitter', icon: <Twitter className="w-5 h-5" />, href: '#' },
//     { name: 'Instagram', icon: <Instagram className="w-5 h-5" />, href: '#' },
//     { name: 'YouTube', icon: <Youtube className="w-5 h-5" />, href: '#' }
//   ];

//   return (
//     <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
//       {/* Background decoration */}
//       <div className="absolute inset-0 bg-gradient-to-r from-red-900/10 via-transparent to-red-900/10"></div>

//       <div className="relative">
//         {/* Main footer content */}
//         <div className="max-w-7xl mx-auto px-4 py-16">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {/* Company Info */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6 }}
//               viewport={{ once: true }}
//             >
//               <div className="mb-6">
//                 <img 
//                   src="samerican_group.svg" 
//                   alt="Samerican Group" 
//                   className="h-10 w-auto mb-4"
//                 />
//                 <h3 className="text-xl font-bold text-white mb-3">Samerican Group</h3>
//               </div>
//               <p className="text-gray-300 mb-6 leading-relaxed">
//                 Connecting businesses with top-tier professionals worldwide. Your trusted partner for staffing solutions and career advancement.
//               </p>
//               <div className="flex space-x-4">
//                 {socialLinks.map((social, index) => (
//                   <motion.a
//                     key={index}
//                     href={social.href}
//                     whileHover={{ scale: 1.1, y: -2 }}
//                     whileTap={{ scale: 0.95 }}
//                     className="w-10 h-10 bg-gray-700 hover:bg-red-600 rounded-full flex items-center justify-center transition-all duration-300 group"
//                     title={social.name}
//                   >
//                     <span className="group-hover:scale-110 transition-transform duration-300">
//                       {social.icon}
//                     </span>
//                   </motion.a>
//                 ))}
//               </div>
//             </motion.div>

//             {/* Quick Links */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.1 }}
//               viewport={{ once: true }}
//             >
//               <h3 className="text-lg font-bold text-white mb-6">Quick Links</h3>
//               <ul className="space-y-3">
//                 {quickLinks.map((link, index) => (
//                   <li key={index}>
//                     {link.href.startsWith('/') ? (
//                       <Link
//                         to={link.href}
//                         className="text-gray-300 hover:text-red-400 transition-colors duration-300 flex items-center gap-2 group"
//                       >
//                         <span className="group-hover:translate-x-1 transition-transform duration-300">
//                           {link.name}
//                         </span>
//                       </Link>
//                     ) : (
//                       <a
//                         href={link.href}
//                         className="text-gray-300 hover:text-red-400 transition-colors duration-300 flex items-center gap-2 group"
//                       >
//                         <span className="group-hover:translate-x-1 transition-transform duration-300">
//                           {link.name}
//                         </span>
//                       </a>
//                     )}
//                   </li>
//                 ))}
//               </ul>
//             </motion.div>

//             {/* Services */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.2 }}
//               viewport={{ once: true }}
//             >
//               <h3 className="text-lg font-bold text-white mb-6">Our Services</h3>
//               <ul className="space-y-3">
//                 {services.map((service, index) => (
//                   <li key={index}>
//                     {service.href.startsWith('/') ? (
//                       <Link
//                         to={service.href}
//                         className="text-gray-300 hover:text-red-400 transition-colors duration-300 flex items-center gap-2 group"
//                       >
//                         <span className="group-hover:translate-x-1 transition-transform duration-300">
//                           {service.name}
//                         </span>
//                       </Link>
//                     ) : (
//                       <a
//                         href={service.href}
//                         className="text-gray-300 hover:text-red-400 transition-colors duration-300 flex items-center gap-2 group"
//                       >
//                         <span className="group-hover:translate-x-1 transition-transform duration-300">
//                           {service.name}
//                         </span>
//                       </a>
//                     )}
//                   </li>
//                 ))}
//               </ul>
//             </motion.div>

//             {/* Contact Info */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.3 }}
//               viewport={{ once: true }}
//             >
//               <h3 className="text-lg font-bold text-white mb-6">Contact Info</h3>
//               <div className="space-y-4">
//                 <div className="flex items-start gap-3">
//                   <MapPin className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
//                   <div>
//                     <p className="text-gray-300">1701 Legacy Dr, Suite 1000</p>
//                     <p className="text-gray-300">Frisco, Texas - 75034</p>
//                   </div>
//                 </div>

//                 <div className="flex items-center gap-3">
//                   <Phone className="w-5 h-5 text-red-400 flex-shrink-0" />
//                   <a 
//                     href="tel:+19723934471" 
//                     className="text-gray-300 hover:text-red-400 transition-colors duration-300"
//                   >
//                     +1 (972) 393-4471
//                   </a>
//                 </div>

//                 <div className="flex items-center gap-3">
//                   <Mail className="w-5 h-5 text-red-400 flex-shrink-0" />
//                   <a 
//                     href="mailto:info@w3global.com" 
//                     className="text-gray-300 hover:text-red-400 transition-colors duration-300"
//                   >
//                     info@w3global.com
//                   </a>
//                 </div>
//               </div>

//               {/* Call to Action */}
//               <div className="mt-6">
//                 <Link
//                   to="/contact"
//                   className="inline-flex items-center gap-2 bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-red-600 hover:to-red-700 transition-all duration-300 group"
//                 >
//                   Get In Touch
//                   <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
//                 </Link>
//               </div>
//             </motion.div>
//           </div>
//         </div>

//         {/* Bottom bar */}
//         <div className="border-t border-gray-700">
//           <div className="max-w-7xl mx-auto px-4 py-6">
//             <div className="flex flex-col md:flex-row justify-between items-center gap-4">
//               <motion.p 
//                 initial={{ opacity: 0 }}
//                 whileInView={{ opacity: 1 }}
//                 transition={{ duration: 0.6 }}
//                 viewport={{ once: true }}
//                 className="text-gray-400 text-sm"
//               >
//                 © {currentYear} W3Global / Samerican Group. All rights reserved.
//               </motion.p>

//               <motion.div 
//                 initial={{ opacity: 0 }}
//                 whileInView={{ opacity: 1 }}
//                 transition={{ duration: 0.6, delay: 0.2 }}
//                 viewport={{ once: true }}
//                 className="flex items-center gap-6 text-sm"
//               >
//                 <a href="#" className="text-gray-400 hover:text-red-400 transition-colors duration-300">
//                   Privacy Policy
//                 </a>
//                 <a href="#" className="text-gray-400 hover:text-red-400 transition-colors duration-300">
//                   Terms of Service
//                 </a>
//                 <a href="#" className="text-gray-400 hover:text-red-400 transition-colors duration-300">
//                   Cookie Policy
//                 </a>
//               </motion.div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import { motion } from "framer-motion";
import { AnimatedSection } from "./home/AnimationUtils";
import { Link } from "react-router-dom";
import { Facebook, Linkedin, Twitter, Instagram } from "lucide-react";

export const Footer = () => {
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
                            [
                                { label: "About Us", href: "about" },
                                { label: "Contact Us", href: "contact" },
                                { label: "Services", href: "services" },
                            ],
                            [
                                { label: "Find a Job", href: "jobs" },
                                { label: "Hire Talent", href: "employers" },
                                { label: "Industries", href: "industries" },
                            ],
                            [
                                { label: "Privacy Policy", href: "#" },
                                { label: "Terms & Conditions", href: "#" }
                            ],
                            [],
                        ].map((column, columnIndex) => (
                            <AnimatedSection
                                key={columnIndex}
                                variant="fadeInUp"
                                delay={columnIndex * 0.1}
                                className="space-y-4"
                            >
                                {column.map((link, linkIndex) => (
                                    <Link
                                        to={link.href}
                                        className="text-gray-300 hover:text-red-400 transition-colors duration-300 block"
                                    >
                                        {link.label}
                                    </Link>
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
                            <a href="mailto:info@w3global.com" className="text-red-400 hover:text-red-300 transition-colors duration-300">
                                info@samericangroup.com
                            </a>
                        </AnimatedSection>

                        {/* Social Media */}
                        <AnimatedSection variant="fadeInRight" delay={0.2} className="text-center md:text-right">
                            <h3 className="text-white font-semibold mb-2">Follow Us</h3>
                            <div className="flex items-center justify-center md:justify-end gap-3">
                                {[
                                    {
                                        name: 'Facebook',
                                        icon: <Facebook className="w-4 h-4" />,
                                        href: '#',
                                        color: 'hover:bg-blue-600'
                                    },
                                    {
                                        name: 'LinkedIn',
                                        icon: <Linkedin className="w-4 h-4" />,
                                        href: '#',
                                        color: 'hover:bg-blue-700'
                                    },
                                    {
                                        name: 'Twitter',
                                        icon: <Twitter className="w-4 h-4" />,
                                        href: '#',
                                        color: 'hover:bg-sky-500'
                                    },
                                    {
                                        name: 'Instagram',
                                        icon: <Instagram className="w-4 h-4" />,
                                        href: '#',
                                        color: 'hover:bg-pink-600'
                                    }
                                ].map((social, index) => (
                                    <motion.a
                                        key={index}
                                        href={social.href}
                                        className={`w-10 h-10 bg-gray-700/80 backdrop-blur-sm ${social.color} rounded-lg flex items-center justify-center transition-all duration-200 border border-gray-600/50 hover:border-white/40`}
                                        title={social.name}
                                        whileHover={{ scale: 1.1, y: -2 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <span className="text-white">{social.icon}</span>
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

export default Footer;