"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { PROFILE } from "../constants/data";
import NeuralBackground from "./NeuralBackground";
import AvatarVideo from "./AvatarVideo";

const roles = ["AI/ML Engineer", "Data Scientist", "Python Developer", "ML Model Builder"];

const StatPill = ({ value, label, color }) => (
  <div className="flex flex-col items-center px-4 py-2.5 rounded-xl"
    style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}
  >
    <span className="text-lg font-black font-space"
      style={{ color: color || "var(--primary)" }}
    >{value}</span>
    <span className="text-[9px] uppercase tracking-widest mt-0.5" style={{ color: "var(--text-3)" }}>{label}</span>
  </div>
);

const Hero = () => {
  const [idx, setIdx]       = useState(0);
  const [text, setText]     = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    let t;
    const cur = roles[idx];
    if (typing) {
      if (text.length < cur.length) t = setTimeout(() => setText(cur.slice(0, text.length + 1)), 65);
      else t = setTimeout(() => setTyping(false), 1800);
    } else {
      if (text.length > 0) t = setTimeout(() => setText(text.slice(0, -1)), 35);
      else { setIdx((i) => (i + 1) % roles.length); setTyping(true); }
    }
    return () => clearTimeout(t);
  }, [text, typing, idx]);

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20 pb-8">
      <NeuralBackground />
      <div className="orb w-96 h-96 bg-cyan-500/20 -top-32 -left-32 animate-float-slow" />
      <div className="orb w-80 h-80 bg-violet-500/15 bottom-0 -right-20 animate-float" style={{ animationDelay: "2s" }} />

      <div className="max-w-6xl mx-auto px-5 md:px-8 relative z-10 w-full">

        {/* ── Main two-column layout ── */}
        <div className="grid md:grid-cols-[1fr_420px] gap-8 lg:gap-12 items-center">

          {/* LEFT — Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Available badge */}
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 text-xs font-mono px-3 py-1.5 rounded-full mb-5"
              style={{ border: "1px solid var(--border)", color: "var(--text-2)", background: "var(--bg-card)" }}
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Available for opportunities
              <span className="w-px h-3 mx-1" style={{ background: "var(--border)" }} />
              <MapPin size={11} style={{ color: "var(--primary)" }} />
              {PROFILE.location}
            </motion.div>

            {/* Name */}
            <h1 className="text-5xl md:text-6xl lg:text-[4.5rem] font-black leading-[1.05] mb-3 tracking-tight font-space">
              Sahil<br />
              <span className="text-gradient">Deshmukh</span>
            </h1>

            {/* Typewriter */}
            <div className="flex items-center gap-2 mb-4 h-8">
              <span className="font-mono text-base" style={{ color: "var(--primary)" }}>&gt;</span>
              <span className="font-mono text-base" style={{ color: "var(--text-2)" }}>{text}</span>
              <span className="inline-block w-0.5 h-5 animate-pulse" style={{ background: "var(--primary)" }} />
            </div>

            {/* Bio */}
            <p className="text-sm leading-relaxed mb-7 max-w-md" style={{ color: "var(--text-2)" }}>
              Building intelligent ML systems end-to-end — raw data pipelines to production deployments.
              Specializing in{" "}
              <span style={{ color: "var(--primary)" }} className="font-medium">computer vision</span>,{" "}
              <span style={{ color: "var(--secondary)" }} className="font-medium">predictive analytics</span>, and{" "}
              <span style={{ color: "var(--accent)" }} className="font-medium">LLM-powered apps</span>.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 mb-6">
              <a href="#projects" className="btn-primary">
                View Work <ArrowRight size={15} />
              </a>
              <a href="/resume.pdf" download="Sahil_Deshmukh_Resume.pdf" className="btn-outline">
                Resume <Download size={15} />
              </a>
            </div>

            {/* Socials */}
            <div className="flex items-center gap-5">
              {[
                { href: PROFILE.github,          icon: Github,   label: "GitHub",   hv: "--primary" },
                { href: PROFILE.linkedin,         icon: Linkedin, label: "LinkedIn", hv: "--secondary" },
                { href: `mailto:${PROFILE.email}`, icon: Mail,     label: "Email",    hv: "--accent" },
              ].map(({ href, icon: Icon, label, hv }) => (
                <a key={label} href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs font-medium transition-colors"
                  style={{ color: "var(--text-2)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = `var(${hv})`)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-2)")}
                >
                  <Icon size={15} /> {label}
                </a>
              ))}
            </div>
          </motion.div>

          {/* RIGHT — AI Avatar Video */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="w-full"
          >
            {/* Label above video */}
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[11px] font-mono tracking-widest uppercase" style={{ color: "var(--text-2)" }}>
                AI Avatar · Personal Introduction
              </span>
            </div>

            <AvatarVideo />

            {/* Caption below video */}
            <p className="text-[11px] text-center mt-2 font-mono" style={{ color: "var(--text-3)" }}>
              🔊 Click to unmute · AI-generated introduction
            </p>
          </motion.div>
        </div>

        {/* ── Stats strip ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-10 flex flex-wrap justify-center gap-3"
        >
          {[
            { value: "1+",    label: "Years Exp",       color: "var(--primary)" },
            { value: "10+",   label: "Projects",        color: "var(--secondary)" },
            { value: "~85%",  label: "ML Accuracy",     color: "var(--accent)" },
            { value: "3",     label: "Roles",           color: "var(--primary)" },
            { value: "4",     label: "Certifications",  color: "var(--secondary)" },
          ].map((s) => <StatPill key={s.label} {...s} />)}
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
        style={{ color: "var(--text-3)" }}
      >
        <span className="text-[9px] uppercase tracking-widest font-mono">scroll</span>
        <div className="w-px h-7 animate-pulse" style={{ background: `linear-gradient(to bottom, var(--primary), transparent)` }} />
      </motion.div>
    </section>
  );
};

export default Hero;
