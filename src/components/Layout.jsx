import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Github, Linkedin, Mail, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';
import Logo from './Logo';
import Background from './Background';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services' },
        { name: 'Portfolio', path: '/portfolio' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav className={clsx(
            "fixed w-full z-50 transition-all duration-300",
            scrolled ? "bg-background/80 backdrop-blur-md border-b border-white/10 py-4" : "bg-transparent py-6"
        )}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    <Link to="/" className="flex flex-col items-center gap-0 group">
                        <Logo className="h-28 w-auto group-hover:scale-105 transition-transform duration-300" />
                        <span className="text-xs uppercase tracking-widest text-primary/80 font-medium -mt-1">
                            Your Personal AI & Data Adviser
                        </span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={clsx(
                                    "text-lg font-medium transition-colors hover:text-primary",
                                    location.pathname === link.path ? "text-white" : "text-gray-400"
                                )}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            to="/contact"
                            className="px-7 py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg text-lg font-medium transition-all border border-white/10 hover:border-white/30"
                        >
                            Get Started
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-white"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-background border-b border-white/10"
                    >
                        <div className="px-4 pt-2 pb-6 space-y-2">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    onClick={() => setIsOpen(false)}
                                    className={clsx(
                                        "block px-3 py-3 rounded-md text-base font-medium",
                                        location.pathname === link.path ? "bg-white/10 text-white" : "text-gray-400 hover:text-white hover:bg-white/5"
                                    )}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

const Footer = () => {
    return (
        <footer className="bg-surface border-t border-white/10 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center gap-3 mb-4">
                            <Logo className="h-20" />
                        </div>
                        <p className="text-gray-400 max-w-sm">
                            Transforming businesses with LLM/Agent systems (GenAI) and production ML. Expert consulting in ML Engineering, MLOps, and Data Science.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold mb-4">Services</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li><Link to="/services" className="hover:text-primary transition">LLM / Agent Systems (GenAI)</Link></li>
                            <li><Link to="/services" className="hover:text-primary transition">RAG Assistants & Automation</Link></li>
                            <li><Link to="/services" className="hover:text-primary transition">Machine Learning Engineering</Link></li>
                            <li><Link to="/services" className="hover:text-primary transition">MLOps (Deployment & Monitoring)</Link></li>
                            <li><Link to="/services" className="hover:text-primary transition">Data Science & Experimentation</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold mb-4">Connect</h3>
                        <div className="flex space-x-4">
                            <a
                                href="https://www.linkedin.com/in/yohanmedalsy"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all"
                            >
                                <Linkedin size={20} />
                            </a>
                            <a
                                href="https://github.com/YohanMedalsy"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub"
                                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all"
                            >
                                <Github size={20} />
                            </a>
                            <Link
                                to="/contact"
                                aria-label="Contact"
                                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all"
                            >
                                <Mail size={20} />
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm">
                        © {new Date().getFullYear()} advAIser. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-sm text-gray-500">
                    </div>
                </div>
            </div>
        </footer>
    );
};



const Layout = ({ children }) => {
    return (
        <div className="min-h-screen bg-background text-white selection:bg-primary/30 relative">
            <Background />
            <Navbar />
            <main className="pt-20 relative z-10">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
