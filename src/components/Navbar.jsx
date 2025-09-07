import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, ChevronDown, Phone, Mail, MapPin } from 'lucide-react';
import { useScrollOptimization } from '../hooks/useScrollOptimization';

export default function Navbar() {
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

    const activePage = 'Home';
    const topLinks = [
        { icon: <Phone className="w-3 h-3" />, text: '(312) 450 8700', href: 'tel:+13124508700' },
        { icon: <Mail className="w-3 h-3" />, text: 'info@samerican-group.com', href: 'mailto:info@samerican-group.com' },
        { icon: <MapPin className="w-3 h-3" />, text: 'Hyderbad, Telangana', href: '#' },
    ];

    const socialLinks = [
        { name: 'Facebook', icon: '📘', href: '#' },
        { name: 'LinkedIn', icon: '💼', href: '#' },
        { name: 'Twitter', icon: '🐦', href: '#' },
        { name: 'Instagram', icon: '📷', href: '#' }
    ];

    const mainLinks = [
        'Find a Job',
        'Employers',
        'Services',
        {
            name: 'Industries',
            subLinks: [
                'Information Technology', 'Government', 'Healthcare', 'Pharmaceutical', 'C-Level',
                'Administrative', 'Human Resources', 'Engineering', 'Accounting And Finance', 'Legal',
                'Manufacturing', 'Construction', 'Creative & Digital Marketing', 'Sales & Marketing'
            ]
        },
        'About',
        'Contact Us'
    ];

    useEffect(() => {
        const handleScroll = ({ scrollY, direction }) => {
            // Always show navbar (remove hide behavior)
            setIsVisible(true);
            
            // Update scrolled state for background change
            setScrolled(scrollY > 50);
            
            lastScrollY.current = scrollY;
        };
        
        const scrollHandler = () => optimizedScrollHandler(handleScroll);
        window.addEventListener("scroll", scrollHandler, { passive: true });
        
        return () => window.removeEventListener("scroll", scrollHandler);
    }, [optimizedScrollHandler]);

    // Handle click outside to close dropdown
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

    // Clear hover timeout on unmount
    useEffect(() => {
        return () => {
            if (hoverTimeout) {
                clearTimeout(hoverTimeout);
            }
        };
    }, [hoverTimeout]);

    const toggleMobileMenu = () => {
        setIsOpen((prev) => {
            const newState = !prev;
            if (!newState) {
                setIndustriesOpen(false);
                setMobileIndustriesOpen(false);
            }
            return newState;
        });
    };

    // Handle Industries dropdown with both hover and click support
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
        }, 150); // Small delay to allow moving to dropdown
        setHoverTimeout(timeout);
    };

    const handleIndustriesClick = (e) => {
        e.preventDefault();
        setIndustriesOpen(!industriesOpen);
        
        // Clear any pending hover timeout
        if (hoverTimeout) {
            clearTimeout(hoverTimeout);
            setHoverTimeout(null);
        }
    };

    const handleDropdownMouseEnter = () => {
        if (hoverTimeout) {
            clearTimeout(hoverTimeout);
            setHoverTimeout(null);
        }
    };

    const handleDropdownMouseLeave = () => {
        const timeout = setTimeout(() => {
            setIndustriesOpen(false);
        }, 150);
        setHoverTimeout(timeout);
    };

    const handleMobileIndustriesToggle = () => {
        setMobileIndustriesOpen(!mobileIndustriesOpen);
    };

    const handleMobileIndustriesNavigation = () => {
        // Navigate to industries page on mobile when clicking the text
        toggleMobileMenu(); // Close mobile menu
    };

    return (
        <motion.header 
            className="fixed w-full top-0 left-0 z-50"
            initial={{ y: 0 }}
            animate={{ y: isVisible ? 0 : -100 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
        >
            {/* Top bar */}
            <div className={`transition-all duration-300 ${
                scrolled ? "bg-black/90 backdrop-blur-md" : "bg-transparent"
            }`}>
                <div className="max-w-7xl mx-auto px-4 flex justify-end items-center h-10">
                    {/* Contact Info */}
                    

                    {/* Social Links */}
                    <div className="flex items-center space-x-2">
                        {socialLinks.map((social, idx) => (
                            <a
                                key={idx}
                                href={social.href}
                                className="w-7 h-7 bg-white/20 hover:bg-red-500/80 rounded-full flex items-center justify-center transition-colors duration-200 backdrop-blur-sm"
                                title={social.name}
                            >
                                <span className="text-xs">{social.icon}</span>
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            {/* Main navbar */}
            <div className={`transition-all duration-300 ${
                scrolled 
                    ? "bg-black/90 backdrop-blur-md shadow-lg" 
                    : "bg-transparent"
            }`}>
                <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link to="/" className="flex items-center">
                        <motion.div 
                            initial={{ opacity: 0, x: -30 }} 
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="flex items-center"
                        >
                            <motion.img 
                                src="samerican_group.svg"
                                alt="Samerican Group logo" 
                                className="h-35 w-auto top-3 relative pr-20 cursor-pointer"
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                            />
                        </motion.div>
                    </Link>

                    {/* Desktop nav */}
                    <nav className="hidden lg:flex items-center space-x-6">
                        {mainLinks.map((link, idx) =>
                            typeof link === 'string' ? (
                                link === 'Contact Us' ? (
                                    <Link
                                        key={idx}
                                        to="/contact"
                                        className={`relative text-white font-semibold hover:text-red-200 transition-colors duration-200 py-2 ${
                                            activePage === link ? 'text-red-100' : ''
                                        }`}
                                    >
                                        {link}
                                        {activePage === link && (
                                            <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-red-200"></div>
                                        )}
                                    </Link>
                                ) : link === 'About' ? (
                                    <Link
                                        key={idx}
                                        to="/about"
                                        className={`relative text-white font-semibold hover:text-red-200 transition-colors duration-200 py-2 ${
                                            activePage === link ? 'text-red-100' : ''
                                        }`}
                                    >
                                        {link}
                                        {activePage === link && (
                                            <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-red-200"></div>
                                        )}
                                    </Link>
                                ) : link === 'Services' ? (
                                    <Link
                                        key={idx}
                                        to="/services"
                                        className={`relative text-white font-semibold hover:text-red-200 transition-colors duration-200 py-2 ${
                                            activePage === link ? 'text-red-100' : ''
                                        }`}
                                    >
                                        {link}
                                        {activePage === link && (
                                            <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-red-200"></div>
                                        )}
                                    </Link>
                                ) : link === 'Find a Job' ? (
                                    <Link
                                        key={idx}
                                        to="/jobs"
                                        className={`relative text-white font-semibold hover:text-red-200 transition-colors duration-200 py-2 ${
                                            activePage === link ? 'text-red-100' : ''
                                        }`}
                                    >
                                        {link}
                                        {activePage === link && (
                                            <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-red-200"></div>
                                        )}
                                    </Link>
                                ) : link === 'Employers' ? (
                                    <Link
                                        key={idx}
                                        to="/employers"
                                        className={`relative text-white font-semibold hover:text-red-200 transition-colors duration-200 py-2 ${
                                            activePage === link ? 'text-red-100' : ''
                                        }`}
                                    >
                                        {link}
                                        {activePage === link && (
                                            <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-red-200"></div>
                                        )}
                                    </Link>
                                ) : (
                                    <a
                                        key={idx}
                                        href="#"
                                        className={`relative text-white font-semibold hover:text-red-200 transition-colors duration-200 py-2 ${
                                            activePage === link ? 'text-red-100' : ''
                                        }`}
                                    >
                                        {link}
                                        {activePage === link && (
                                            <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-red-200"></div>
                                        )}
                                    </a>
                                )
                            ) : (
                                <div
                                    key={idx}
                                    ref={industriesRef}
                                    className="relative"
                                    onMouseEnter={handleIndustriesMouseEnter}
                                    onMouseLeave={handleIndustriesMouseLeave}
                                >
                                    <div className="flex items-center">
                                        {/* Industries text - navigates to industries page */}
                                        <Link
                                            to="/industries"
                                            className="text-white font-semibold hover:text-red-200 transition-colors duration-200 py-2 pr-1"
                                        >
                                            {link.name}
                                        </Link>
                                        
                                        {/* Dropdown button - toggles dropdown */}
                                        <button
                                            onClick={handleIndustriesClick}
                                            onMouseEnter={handleIndustriesMouseEnter}
                                            className="text-white font-semibold hover:text-red-200 transition-colors duration-200 focus:outline-none focus:text-red-200 py-2 pl-1"
                                            aria-expanded={industriesOpen}
                                            aria-haspopup="true"
                                            aria-label="Toggle industries dropdown"
                                        >
                                            <ChevronDown 
                                                size={16} 
                                                className={`transition-transform duration-200 ${
                                                    industriesOpen ? 'rotate-180' : ''
                                                }`} 
                                            />
                                        </button>
                                    </div>

                                    {/* Dropdown Menu */}
                                    {industriesOpen && (
                                        <div 
                                            ref={dropdownRef}
                                            className="absolute top-full left-0 bg-white/95 backdrop-blur-sm text-gray-800 py-2 shadow-xl min-w-[280px] rounded-lg border mt-1 z-50"
                                            onMouseEnter={handleDropdownMouseEnter}
                                            onMouseLeave={handleDropdownMouseLeave}
                                        >
                                            {link.subLinks.map((sublink, subIdx) => {
                                                // Convert navbar link text to industry ID
                                                let industryId = sublink.toLowerCase()
                                                    .replace(/\s+/g, '-')
                                                    .replace(/&/g, '')
                                                    .replace(/\s*-\s*/g, '-');
                                                
                                                // Handle special cases
                                                if (sublink === 'Creative & Digital Marketing') {
                                                    industryId = 'creative--digital-marketing';
                                                } else if (sublink === 'Sales & Marketing') {
                                                    industryId = 'sales--marketing';
                                                }
                                                
                                                return (
                                                    <Link
                                                        key={subIdx}
                                                        to={`/industries/${industryId}`}
                                                        className="block px-4 py-2 hover:bg-red-50 hover:text-red-600 transition-colors duration-150 focus:bg-red-50 focus:text-red-600 focus:outline-none"
                                                        onClick={() => setIndustriesOpen(false)}
                                                    >
                                                        {sublink}
                                                    </Link>
                                                );
                                            })}
                                        </div>
                                    )}
                                </div>
                            )
                        )}
                    </nav>

                    {/* CTA Button */}
                    <div className="hidden lg:block">
                        <Link 
                            to="/contact"
                            className="bg-red-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-red-500 transition-colors duration-200 border border-white/20"
                        >
                            Get Started
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <button
                        className="lg:hidden text-white p-2"
                        onClick={toggleMobileMenu}
                        aria-label={isOpen ? "Close menu" : "Open menu"}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile nav */}
            <motion.nav 
                className={`lg:hidden bg-red-600/95 backdrop-blur-md text-white shadow-lg transition-all duration-300 ${
                    isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                }`}
                initial={{ opacity: 0, height: 0 }}
                animate={{ 
                    opacity: isOpen ? 1 : 0, 
                    height: isOpen ? "auto" : 0
                }}
                transition={{ duration: 0.3 }}
            >
                <div className="max-h-[70vh] overflow-y-auto">
                    {mainLinks.map((link, idx) =>
                        typeof link === 'string' ? (
                            link === 'Contact Us' ? (
                                <Link
                                    key={idx}
                                    to="/contact"
                                    className="block px-4 py-3 hover:bg-red-700 transition-colors duration-150 border-b border-red-500"
                                    onClick={toggleMobileMenu}
                                >
                                    {link}
                                </Link>
                            ) : link === 'About' ? (
                                <Link
                                    key={idx}
                                    to="/about"
                                    className="block px-4 py-3 hover:bg-red-700 transition-colors duration-150 border-b border-red-500"
                                    onClick={toggleMobileMenu}
                                >
                                    {link}
                                </Link>
                            ) : link === 'Home' ? (
                                <Link
                                    key={idx}
                                    to="/"
                                    className="block px-4 py-3 hover:bg-red-700 transition-colors duration-150 border-b border-red-500"
                                    onClick={toggleMobileMenu}
                                >
                                    {link}
                                </Link>
                            ) : link === 'Services' ? (
                                <Link
                                    key={idx}
                                    to="/services"
                                    className="block px-4 py-3 hover:bg-red-700 transition-colors duration-150 border-b border-red-500"
                                    onClick={toggleMobileMenu}
                                >
                                    {link}
                                </Link>
                            ) : link === 'Find a Job' ? (
                                <Link
                                    key={idx}
                                    to="/jobs"
                                    className="block px-4 py-3 hover:bg-red-700 transition-colors duration-150 border-b border-red-500"
                                    onClick={toggleMobileMenu}
                                >
                                    {link}
                                </Link>
                            ) : link === 'Employers' ? (
                                <Link
                                    key={idx}
                                    to="/employers"
                                    className="block px-4 py-3 hover:bg-red-700 transition-colors duration-150 border-b border-red-500"
                                    onClick={toggleMobileMenu}
                                >
                                    {link}
                                </Link>
                            ) : (
                                <a
                                    key={idx}
                                    href="#"
                                    className="block px-4 py-3 hover:bg-red-700 transition-colors duration-150 border-b border-red-500"
                                >
                                    {link}
                                </a>
                            )
                        ) : (
                            <div key={idx} className="border-b border-red-500">
                                <div className="flex items-center">
                                    {/* Industries text - navigates to industries page */}
                                    <Link
                                        to="/industries"
                                        className="flex-1 px-4 py-3 hover:bg-red-700 transition-colors duration-150"
                                        onClick={handleMobileIndustriesNavigation}
                                    >
                                        {link.name}
                                    </Link>
                                    
                                    {/* Dropdown toggle button */}
                                    <button
                                        className="px-4 py-3 hover:bg-red-700 transition-colors duration-150 focus:outline-none focus:bg-red-700"
                                        onClick={handleMobileIndustriesToggle}
                                        aria-expanded={mobileIndustriesOpen}
                                        aria-label="Toggle industries submenu"
                                    >
                                        <ChevronDown 
                                            size={16} 
                                            className={`transition-transform duration-200 ${
                                                mobileIndustriesOpen ? 'rotate-180' : ''
                                            }`}
                                        />
                                    </button>
                                </div>
                                
                                {/* Mobile Submenu */}
                                {mobileIndustriesOpen && (
                                    <div className="bg-red-700">
                                        {link.subLinks.map((sublink, subIdx) => {
                                            // Convert navbar link text to industry ID
                                            let industryId = sublink.toLowerCase()
                                                .replace(/\s+/g, '-')
                                                .replace(/&/g, '')
                                                .replace(/\s*-\s*/g, '-');
                                            
                                            // Handle special cases
                                            if (sublink === 'Creative & Digital Marketing') {
                                                industryId = 'creative--digital-marketing';
                                            } else if (sublink === 'Sales & Marketing') {
                                                industryId = 'sales--marketing';
                                            }
                                            
                                            return (
                                                <Link
                                                    key={subIdx}
                                                    to={`/industries/${industryId}`}
                                                    className="block px-8 py-2 text-sm hover:bg-red-800 transition-colors duration-150 focus:bg-red-800 focus:outline-none"
                                                    onClick={toggleMobileMenu}
                                                >
                                                    {sublink}
                                                </Link>
                                            );
                                        })}
                                    </div>
                                )}
                            </div>
                        )
                    )}
                    
                    <div className="p-4">
                        <Link 
                            to="/contact"
                            className="w-full bg-white text-red-600 px-6 py-3 rounded-full font-semibold hover:bg-red-50 transition-colors duration-200 block text-center"
                            onClick={toggleMobileMenu}
                        >
                            Get Started
                        </Link>
                    </div>
                </div>
            </motion.nav>
        </motion.header>
    );
}