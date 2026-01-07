import React, { useState, useEffect } from "react";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { PROFILE } from "../constants/data";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Skills", href: "#skills" },
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "glass-nav py-4" : "bg-transparent py-6"
                }`}
        >
            <div className="container mx-auto flex justify-between items-center">
                <a href="#" className="text-2xl font-bold font-space-grotesk text-gradient">
                    SSD<span className="text-[var(--primary)]">.</span>
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors text-sm uppercase tracking-wider font-medium"
                        >
                            {link.name}
                        </a>
                    ))}
                    <a
                        href={PROFILE.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors"
                    >
                        <Github size={20} />
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-[var(--text-primary)] hover:text-[var(--primary)]"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 w-full glass-nav md:hidden pb-8 shadow-xl"
                    >
                        <div className="flex flex-col items-center space-y-6 pt-6">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-lg text-[var(--text-primary)] hover:text-[var(--primary)] font-medium"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <div className="flex space-x-6 pt-4">
                                <a href={PROFILE.github} className="text-[var(--text-secondary)] hover:text-[var(--primary)]">
                                    <Github size={24} />
                                </a>
                                <a href={PROFILE.linkedin} className="text-[var(--text-secondary)] hover:text-[var(--primary)]">
                                    <Linkedin size={24} />
                                </a>
                                <a href={`mailto:${PROFILE.email}`} className="text-[var(--text-secondary)] hover:text-[var(--primary)]">
                                    <Mail size={24} />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
