// Navbar.jsx
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Phone, Mail, MapPin } from 'lucide-react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [industriesOpen, setIndustriesOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const industriesRef = useRef(null);

    const activePage = 'Home';
    const topLinks = [
        { icon: <Phone className="w-3 h-3" />, text: '(312) 450 8700', href: 'tel:+13124508700' },
        { icon: <Mail className="w-3 h-3" />, text: 'info@w3global.com', href: 'mailto:info@w3global.com' },
        { icon: <MapPin className="w-3 h-3" />, text: 'Hyderabad, India', href: '#' },
    ];

    const socialLinks = [
        { name: 'Facebook', icon: '📘', href: '#' },
        { name: 'LinkedIn', icon: '💼', href: '#' },
        { name: 'Twitter', icon: '🐦', href: '#' },
        { name: 'Instagram', icon: '📷', href: '#' }
    ];

    const mainLinks = [
        'Home',
        'About',
        'Find a Job',
        'Services',
        {
            name: 'Industries',
            subLinks: [
                'Information Technology', 'Government', 'Healthcare', 'Pharmaceutical', 'C-Level',
                'Administrative', 'Human Resources', 'Engineering', 'Accounting And Finance', 'Legal',
                'Manufacturing', 'Construction', 'Creative & Digital Marketing', 'Sales & Marketing'
            ]
        },
        'Our Team',
        'Resources',
        'Blog',
        'Contact Us'
    ];

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 80);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close industries dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (industriesRef.current && !industriesRef.current.contains(event.target)) {
                setIndustriesOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const toggleMobileMenu = () => {
        setIsOpen((prev) => {
            const newState = !prev;
            if (!newState) setIndustriesOpen(false);
            return newState;
        });
    };

    return (
        <header className="fixed w-full top-0 left-0 z-50">
            {/* Top bar */}
            <motion.div
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                className={`backdrop-blur-md border-b border-white/10 transition-all duration-500 ${
                    scrolled ? "bg-gray-900/95 shadow-lg" : "bg-black/80"
                }`}
            >
                <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-12">
                    {/* Contact Info */}
                    <div className="hidden md:flex items-center space-x-6 text-sm">
                        {topLinks.map((link, idx) => (
                            <motion.a
                                key={idx}
                                href={link.href}
                                whileHover={{ scale: 1.05, y: -1 }}
                                className="flex items-center gap-2 text-gray-300 hover:text-red-400 transition-all duration-300 group"
                            >
                                <span className="group-hover:text-red-400 transition-colors duration-300">
                                    {link.icon}
                                </span>
                                {link.text}
                            </motion.a>
                        ))}
                    </div>

                    {/* Social Links */}
                    <div className="flex items-center space-x-3">
                        {socialLinks.map((social, idx) => (
                            <motion.a
                                key={idx}
                                href={social.href}
                                whileHover={{ scale: 1.2, y: -2 }}
                                whileTap={{ scale: 0.9 }}
                                className="w-8 h-8 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-red-500 transition-all duration-300 group"
                                title={social.name}
                            >
                                <span className="text-xs group-hover:scale-110 transition-transform duration-300">
                                    {social.icon}
                                </span>
                            </motion.a>
                        ))}
                    </div>
                </div>
            </motion.div>

            {/* Main navbar */}
            <motion.div
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className={`backdrop-blur-md shadow-lg transition-all duration-500 ${
                    scrolled 
                        ? "bg-gradient-to-r from-red-500 to-red-600 shadow-xl" 
                        : "bg-black/90 shadow-2xl"
                }`}
            >
                <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-18">
                    {/* Logo */}
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }} 
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="flex items-center"
                    >
                        <motion.img 
                            src="samerican_group.svg"
                            alt="Samerican Group logo" 
                            className="h-35 w-auto top-3 relative pr-20"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                        />
                    </motion.div>

                    {/* Desktop nav */}
                    <nav className="hidden lg:flex items-center space-x-8">
                        {mainLinks.map((link, idx) =>
                            typeof link === 'string' ? (
                                <motion.a
                                    key={idx}
                                    href="#"
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: 0.6 + idx * 0.1 }}
                                    whileHover={{ y: -2 }}
                                    className={`relative text-white font-medium transition-all duration-300 group ${
                                        activePage === link ? 'text-orange-300' : 'hover:text-orange-300'
                                    }`}
                                >
                                    {link}
                                    <motion.div
                                        className={`absolute -bottom-2 left-0 h-0.5 bg-gradient-to-r from-orange-400 to-red-400 transition-all duration-300 ${
                                            activePage === link ? 'w-full' : 'w-0 group-hover:w-full'
                                        }`}
                                        layoutId={activePage === link ? 'activeNav' : undefined}
                                    />
                                </motion.a>
                            ) : (
                                <div
                                    key={idx}
                                    ref={industriesRef}
                                    className="relative"
                                    onMouseEnter={() => setIndustriesOpen(true)}
                                    onMouseLeave={() => setIndustriesOpen(false)}
                                >
                                    <motion.button
                                        initial={{ opacity: 0, y: -20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.4, delay: 0.6 + idx * 0.1 }}
                                        whileHover={{ y: -2 }}
                                        onClick={() => setIndustriesOpen((prev) => !prev)}
                                        className="flex items-center text-white font-medium hover:text-orange-300 transition-all duration-300 group focus:outline-none"
                                    >
                                        {link.name}
                                        <motion.div
                                            animate={{ rotate: industriesOpen ? 180 : 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <ChevronDown size={18} className="ml-1 group-hover:text-orange-300" />
                                        </motion.div>
                                        <motion.div
                                            className="absolute -bottom-2 left-0 h-0.5 bg-gradient-to-r from-orange-400 to-red-400 transition-all duration-300 w-0 group-hover:w-full"
                                        />
                                    </motion.button>

                                    <AnimatePresence>
                                        {industriesOpen && (
                                            <motion.div
                                                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                                                transition={{ duration: 0.2 }}
                                                className="absolute top-full left-0 bg-white/95 backdrop-blur-lg text-gray-800 py-4 shadow-2xl min-w-[280px] rounded-xl border border-white/20 mt-2"
                                            >
                                                <div className="grid grid-cols-1 gap-1">
                                                    {link.subLinks.map((sublink, subIdx) => (
                                                        <motion.a
                                                            key={subIdx}
                                                            href="#"
                                                            initial={{ opacity: 0, x: -20 }}
                                                            animate={{ opacity: 1, x: 0 }}
                                                            transition={{ duration: 0.3, delay: subIdx * 0.05 }}
                                                            whileHover={{ x: 5, backgroundColor: 'rgba(239, 68, 68, 0.1)' }}
                                                            className="block px-6 py-3 text-sm hover:text-red-600 transition-all duration-200 rounded-lg mx-2"
                                                        >
                                                            {sublink}
                                                        </motion.a>
                                                    ))}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            )
                        )}
                    </nav>

                    {/* CTA Button */}
                    <div className="hidden lg:block">
                        <motion.button
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.8 }}
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-white/20 backdrop-blur-sm text-white px-6 py-2.5 rounded-full font-semibold hover:bg-white/30 transition-all duration-300 border border-white/20"
                        >
                            Get Started
                        </motion.button>
                    </div>

                    {/* Mobile menu button */}
                    <motion.button
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        className="lg:hidden text-white p-2"
                        onClick={toggleMobileMenu}
                        whileTap={{ scale: 0.9 }}
                        aria-label={isOpen ? "Close menu" : "Open menu"}
                    >
                        <AnimatePresence mode="wait">
                            {isOpen ? (
                                <motion.div
                                    key="close"
                                    initial={{ rotate: -90, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: 90, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <X size={24} />
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="menu"
                                    initial={{ rotate: 90, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: -90, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <Menu size={24} />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.button>
                </div>
            </motion.div>

            {/* Mobile nav */}
            <AnimatePresence>
                {isOpen && (
                    <motion.nav
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="lg:hidden bg-black/95 backdrop-blur-lg text-white shadow-2xl border-t border-white/10"
                    >
                        <div className="max-h-[80vh] overflow-y-auto">
                            {mainLinks.map((link, idx) =>
                                typeof link === 'string' ? (
                                    <motion.a
                                        key={idx}
                                        href="#"
                                        initial={{ opacity: 0, x: -30 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.3, delay: idx * 0.05 }}
                                        whileHover={{ x: 10, backgroundColor: 'rgba(239, 68, 68, 0.1)' }}
                                        className="block px-6 py-4 hover:bg-red-500/10 transition-all duration-200 border-b border-white/5"
                                    >
                                        {link}
                                    </motion.a>
                                ) : (
                                    <motion.div 
                                        key={idx}
                                        initial={{ opacity: 0, x: -30 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.3, delay: idx * 0.05 }}
                                        className="border-b border-white/5"
                                    >
                                        <button
                                            onClick={() => setIndustriesOpen((prev) => !prev)}
                                            className="w-full flex justify-between items-center px-6 py-4 hover:bg-red-500/10 transition-all duration-200"
                                        >
                                            {link.name}
                                            <motion.div
                                                animate={{ rotate: industriesOpen ? 180 : 0 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <ChevronDown size={16} />
                                            </motion.div>
                                        </button>
                                        <AnimatePresence>
                                            {industriesOpen && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: 'auto', opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.3 }}
                                                    className="bg-black/50 overflow-hidden"
                                                >
                                                    {link.subLinks.map((sublink, subIdx) => (
                                                        <motion.a
                                                            key={subIdx}
                                                            href="#"
                                                            initial={{ opacity: 0, x: -20 }}
                                                            animate={{ opacity: 1, x: 0 }}
                                                            transition={{ duration: 0.2, delay: subIdx * 0.03 }}
                                                            whileHover={{ x: 15, backgroundColor: 'rgba(239, 68, 68, 0.1)' }}
                                                            className="block px-12 py-3 text-sm text-gray-300 hover:text-white transition-all duration-200"
                                                        >
                                                            {sublink}
                                                        </motion.a>
                                                    ))}
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </motion.div>
                                )
                            )}
                            
                            {/* Mobile CTA */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: 0.5 }}
                                className="p-6"
                            >
                                <button className="w-full bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-3 rounded-full font-semibold hover:from-red-600 hover:to-red-700 transition-all duration-300">
                                    Get Started
                                </button>
                            </motion.div>
                        </div>
                    </motion.nav>
                )}
            </AnimatePresence>
        </header>
    );
}