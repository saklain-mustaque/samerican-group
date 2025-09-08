import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu, X, ChevronDown, Phone, Mail, MapPin,
  Facebook, Linkedin, Twitter, Instagram, ExternalLink
} from 'lucide-react';
import { useScrollOptimization } from '../hooks/useScrollOptimization';

export default function EnhancedNavbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [hoverTimeout, setHoverTimeout] = useState(null);
  const industriesRef = useRef(null);
  const dropdownRef = useRef(null);
  const lastScrollY = useRef(0);
  const { optimizedScrollHandler } = useScrollOptimization();

  // Enhanced contact info with better styling
  const contactInfo = [
    {
      icon: <Phone className="w-4 h-4" />,
      text: '(312) 450-8700',
      href: 'tel:+13124508700',
      label: 'Call us'
    },
    {
      icon: <Mail className="w-4 h-4" />,
      text: 'info@samerican-group.com',
      href: 'mailto:info@samerican-group.com',
      label: 'Email us'
    },
    {
      icon: <MapPin className="w-4 h-4" />,
      text: 'Hyderabad, Telangana',
      href: '#',
      label: 'Our location'
    },
  ];

  // Enhanced social links with proper icons
  const socialLinks = [
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
  ];

  // Enhanced navigation structure
  const navigationLinks = [
    { name: 'Find a Job', path: '/jobs', description: 'Discover opportunities' },
    { name: 'Employers', path: '/employers', description: 'Find talent' },
    { name: 'Services', path: '/services', description: 'Our expertise' },
    {
      name: 'Industries',
      path: '/industries',
      description: 'Sector expertise',
      isDropdown: true,
      subLinks: [
        { name: 'Information Technology', path: '/industries/information-technology' },
        { name: 'Government', path: '/industries/government' },
        { name: 'Healthcare', path: '/industries/healthcare' },
        { name: 'Pharmaceutical', path: '/industries/pharmaceutical' },
        { name: 'C-Level', path: '/industries/c-level' },
        { name: 'Administrative', path: '/industries/administrative' },
        { name: 'Human Resources', path: '/industries/human-resources' },
        { name: 'Engineering', path: '/industries/engineering' },
        { name: 'Accounting And Finance', path: '/industries/accounting-and-finance' },
        { name: 'Legal', path: '/industries/legal' },
        { name: 'Manufacturing', path: '/industries/manufacturing' },
        { name: 'Construction', path: '/industries/construction' },
        { name: 'Creative & Digital Marketing', path: '/industries/creative--digital-marketing' },
        { name: 'Sales & Marketing', path: '/industries/sales--marketing' }
      ]
    },
    { name: 'About', path: '/about', description: 'Our story' },
    { name: 'Contact', path: '/contact', description: 'Get in touch' }
  ];

  // Scroll handling with enhanced behavior
  useEffect(() => {
    const handleScroll = ({ scrollY, direction }) => {
      setIsVisible(true); // Always show navbar for better UX
      setScrolled(scrollY > 20);
      lastScrollY.current = scrollY;
    };

    const scrollHandler = () => optimizedScrollHandler(handleScroll);
    window.addEventListener("scroll", scrollHandler, { passive: true });

    return () => window.removeEventListener("scroll", scrollHandler);
  }, [optimizedScrollHandler]);

  // Enhanced click outside handling
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (industriesRef.current && !industriesRef.current.contains(event.target)) {
        setIndustriesOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside, { passive: true });

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  // Cleanup hover timeout
  useEffect(() => {
    return () => {
      if (hoverTimeout) {
        clearTimeout(hoverTimeout);
      }
    };
  }, [hoverTimeout]);

  const toggleMobileMenu = () => {
    setIsOpen(prev => {
      const newState = !prev;
      if (!newState) {
        setIndustriesOpen(false);
        setMobileIndustriesOpen(false);
      }
      return newState;
    });
  };

  // Enhanced dropdown handling
  const handleIndustriesMouseEnter = () => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
    setIndustriesOpen(true);
  };

  const handleIndustriesMouseLeave = () => {
    const timeout = setTimeout(() => {
      setIndustriesOpen(false);
    }, 200);
    setHoverTimeout(timeout);
  };

  const handleIndustriesClick = (e) => {
    e.preventDefault();
    setIndustriesOpen(!industriesOpen);

    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
  };

  // Check if current path is active
  const isActivePath = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <motion.header
      className="fixed w-full top-0 left-0 z-50"
      initial={{ y: -100 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      {/* Enhanced Top Bar */}
      <div className={`transition-all duration-300 ${scrolled
        ? "bg-gray-900/95 backdrop-blur-xl border-b border-white/10"
        : "bg-transparent"
        }`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-12">
            {/* Contact Info - Hidden on mobile for cleaner look */}
            <div className="hidden lg:flex items-center space-x-6">
              {contactInfo.map((contact, idx) => (
                <a
                  key={idx}
                  href={contact.href}
                  className="flex items-center gap-2 text-white/80 hover:text-white text-sm transition-colors duration-200 group"
                  title={contact.label}
                >
                  <span className="text-red-400 group-hover:text-red-300 transition-colors">
                    {contact.icon}
                  </span>
                  <span className="font-medium">{contact.text}</span>
                </a>
              ))}
            </div>

            {/* Enhanced Social Links */}
            <div className="flex items-center space-x-2">
              {socialLinks.map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.href}
                  className={`w-8 h-8 bg-white/10 backdrop-blur-sm ${social.color} rounded-lg flex items-center justify-center transition-all duration-200 border border-white/20 hover:border-white/40`}
                  title={social.name}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-white">{social.icon}</span>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Main Navigation */}
      <div className={`transition-all duration-300 ${scrolled
        ? "bg-white/95 backdrop-blur-xl shadow-lg border-b border-gray-200/50"
        : "bg-transparent "
        }`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">

            {/* Enhanced Logo */}
            <Link to="/" className="flex items-center group">
              <motion.div
                className="flex items-center"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <img
                  src="samerican_group.svg"
                  alt="Samerican Group - Global Talent Solutions"
                  className="h-35 mt-10 w-auto group-hover:brightness-110 transition-all duration-300"
                />
              </motion.div>
            </Link>

            {/* Enhanced Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-2">
              {navigationLinks.map((link, idx) =>
                !link.isDropdown ? (
                  <Link
                    key={idx}
                    to={link.path}
                    className={`relative px-4 py-2 rounded-xl font-semibold transition-all duration-200 group ${scrolled
                        ? isActivePath(link.path)
                          ? 'text-red-600 bg-red-50'
                          : 'text-gray-700 hover:text-red-600 hover:bg-red-50'
                        : isActivePath(link.path)
                          ? 'text-gray-700 bg-white'
                          : 'text-white hover:text-red-400'
                      }`}
                  >
                    <span className="relative z-10">{link.name}</span>

                    {isActivePath(link.path) && (
                      <motion.div
                        className={`absolute inset-0 rounded-xl ${scrolled ? 'bg-red-100' : 'bg-white'
                          }`}
                        layoutId="activeTab"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </Link>

                ) : (
                  <div
                    key={idx}
                    ref={industriesRef}
                    className="relative"
                    onMouseEnter={handleIndustriesMouseEnter}
                    onMouseLeave={handleIndustriesMouseLeave}
                  >
                    <div className="flex items-center">
                      <Link
                    to={link.path}
                    className={`relative px-4 py-2 rounded-xl font-semibold transition-all duration-200 group ${scrolled
                        ? isActivePath(link.path)
                          ? 'text-red-600 bg-red-50'
                          : 'text-gray-700 hover:text-red-600 hover:bg-red-50'
                        : isActivePath(link.path)
                          ? 'text-gray-700 bg-white'
                          : 'text-white hover:text-red-400'
                      }`}
                  >
                    <span className="relative z-10">{link.name}</span>

                    {isActivePath(link.path) && (
                      <motion.div
                        className={`absolute inset-0 rounded-xl ${scrolled ? 'bg-red-100' : 'bg-white'
                          }`}
                        layoutId="activeTab"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </Link>

                      <button
                        onClick={handleIndustriesClick}
                        className={`${scrolled ? 'text-gray-700 hover:text-red-600' : 'text-white hover:text-red-400'
                          } transition-colors duration-200 focus:outline-none`}

                        aria-expanded={industriesOpen}
                      >
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${industriesOpen ? 'rotate-180' : ''
                            }`}
                        />
                      </button>
                    </div>

                    {/* Enhanced Dropdown Menu */}
                    <AnimatePresence>
                      {industriesOpen && (
                        <motion.div
                          ref={dropdownRef}
                          className="absolute top-full left-0 mt-2 w-80 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-200/50 z-50"
                          initial={{ opacity: 0, y: -10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: -10, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                          onMouseEnter={handleIndustriesMouseEnter}
                          onMouseLeave={handleIndustriesMouseLeave}
                        >
                          <div className="p-6">
                            <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">
                              Industry Expertise
                            </h3>
                            <div className="grid grid-cols-1 gap-1">
                              {link.subLinks.map((sublink, subIdx) => (
                                <Link
                                  key={subIdx}
                                  to={sublink.path}
                                  className="flex items-center gap-3 px-3 py-2 text-gray-700 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all duration-200 group"
                                  onClick={() => setIndustriesOpen(false)}
                                >
                                  {/* <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" /> */}
                                  <span className="font-medium">{sublink.name}</span>
                                </Link>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )
              )}
            </nav>

            {/* Enhanced CTA Button */}
            <div className="hidden lg:block">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-3 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center gap-2"
              >
                <span>Get Started</span>
                {/* <ExternalLink className="w-4 h-4" />f */}
              </Link>
            </div>

            {/* Enhanced Mobile Menu Button */}
            <button
              className="lg:hidden p-2  hover:text-red-600 hover:bg-red-50 rounded-xl transition-all duration-200"
              onClick={toggleMobileMenu}
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.div>
            </button>
          </div>
        </div>
      </div>

      {/* Enhanced Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            className="lg:hidden bg-white/95 backdrop-blur-xl shadow-2xl border-t border-gray-200/50"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="max-h-[70vh] overflow-y-auto px-6 py-6">
              <div className="space-y-2">
                {navigationLinks.map((link, idx) =>
                  !link.isDropdown ? (
                    <Link
                      key={idx}
                      to={link.path}
                      className={`block px-4 py-3 rounded-xl font-semibold transition-all duration-200 ${isActivePath(link.path)
                        ? 'text-red-600 bg-red-50'
                        : 'text-gray-700 hover:text-red-600 hover:bg-red-50'
                        }`}
                      onClick={toggleMobileMenu}
                    >
                      <div>
                        <div>{link.name}</div>
                        <div className="text-sm text-gray-500 mt-1">{link.description}</div>
                      </div>
                    </Link>
                  ) : (
                    <div key={idx} className="space-y-1">
                      <div className="flex items-center justify-between">
                        <Link
                          to={link.path}
                          className={`flex-1 px-4 py-3 rounded-xl font-semibold transition-all duration-200 ${isActivePath(link.path)
                            ? 'text-red-600 bg-red-50'
                            : 'text-gray-700 hover:text-red-600 hover:bg-red-50'
                            }`}
                          onClick={toggleMobileMenu}
                        >
                          <div>
                            <div>{link.name}</div>
                            <div className="text-sm text-gray-500 mt-1">{link.description}</div>
                          </div>
                        </Link>

                        <button
                          className="p-3 text-gray-700 hover:text-red-600 hover:bg-red-50 rounded-xl transition-all duration-200"
                          onClick={() => setMobileIndustriesOpen(!mobileIndustriesOpen)}
                        >
                          <ChevronDown
                            className={`w-5 h-5 transition-transform duration-200 ${mobileIndustriesOpen ? 'rotate-180' : ''
                              }`}
                          />
                        </button>
                      </div>

                      <AnimatePresence>
                        {mobileIndustriesOpen && (
                          <motion.div
                            className="ml-4 space-y-1"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            {link.subLinks.map((sublink, subIdx) => (
                              <Link
                                key={subIdx}
                                to={sublink.path}
                                className="block px-4 py-2 text-sm text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all duration-200"
                                onClick={toggleMobileMenu}
                              >
                                {sublink.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )
                )}
              </div>

              {/* Mobile CTA */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <Link
                  to="/contact"
                  className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 flex items-center justify-center gap-2"
                  onClick={toggleMobileMenu}
                >
                  <span>Get Started</span>
                  {/* <ExternalLink className="w-4 h-4" /> */}
                </Link>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}