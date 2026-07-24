"use client";

import { useState, useEffect } from "react";
import { Menu, X, Github, Linkedin, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { PROFILE } from "../constants/data";
import { useTheme } from "../context/ThemeContext";

const navLinks = [
  { name: "Home",      href: "#home" },
  { name: "About",     href: "#about" },
  { name: "Skills",    href: "#skills" },
  { name: "Projects",  href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Contact",   href: "#contact" },
];

const Navbar = () => {
  const [isOpen,   setIsOpen]   = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active,   setActive]   = useState("home");
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks.map((l) => document.querySelector(l.href));
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); }),
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach((s) => s && obs.observe(s));
    return () => sections.forEach((s) => s && obs.unobserve(s));
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "nav-blur py-3" : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 md:px-8 flex justify-between items-center">

        {/* Logo */}
        <a href="#home" className="text-lg font-bold font-space text-gradient tracking-tight">
          SD<span style={{ color: "var(--primary)" }}>.</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs tracking-widest uppercase font-medium transition-colors duration-200"
              style={{
                color: active === link.href.slice(1) ? "var(--primary)" : "var(--text-2)",
              }}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Right side */}
        <div className="hidden md:flex items-center gap-3">
          <a href={PROFILE.github} target="_blank" rel="noopener noreferrer"
            className="p-1.5 rounded-lg transition-colors"
            style={{ color: "var(--text-2)" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--primary)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-2)")}
          >
            <Github size={17} />
          </a>
          <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer"
            className="p-1.5 rounded-lg transition-colors"
            style={{ color: "var(--text-2)" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--secondary)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-2)")}
          >
            <Linkedin size={17} />
          </a>

          {/* Theme toggle */}
          <button
            onClick={toggle}
            className="p-1.5 rounded-lg border transition-all"
            style={{ borderColor: "var(--border)", color: "var(--text-2)", background: "var(--bg-card)" }}
            title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </div>

        {/* Mobile */}
        <div className="md:hidden flex items-center gap-2">
          <button onClick={toggle} className="p-1.5 rounded-lg border"
            style={{ borderColor: "var(--border)", color: "var(--text-2)", background: "var(--bg-card)" }}
          >
            {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
          </button>
          <button onClick={() => setIsOpen(!isOpen)} style={{ color: "var(--text-1)" }}>
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="md:hidden nav-blur border-t px-5 py-4"
            style={{ borderColor: "var(--border)" }}
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="font-medium text-sm"
                  style={{ color: active === link.href.slice(1) ? "var(--primary)" : "var(--text-2)" }}
                >
                  {link.name}
                </a>
              ))}
              <div className="flex gap-3 pt-2 border-t" style={{ borderColor: "var(--border)" }}>
                <a href={PROFILE.github} target="_blank" rel="noopener noreferrer" style={{ color: "var(--text-2)" }}>
                  <Github size={18} />
                </a>
                <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: "var(--text-2)" }}>
                  <Linkedin size={18} />
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
