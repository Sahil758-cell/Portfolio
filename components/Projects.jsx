"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { PROJECTS } from "../constants/data";

const tagStyle = {
  "AI / Full Stack": { bg: "rgba(34,211,238,0.1)",   border: "rgba(34,211,238,0.25)",   text: "#22d3ee" },
  "AI / Backend":    { bg: "rgba(167,139,250,0.1)",  border: "rgba(167,139,250,0.25)",  text: "#a78bfa" },
  "Deep Learning":   { bg: "rgba(232,121,249,0.1)",  border: "rgba(232,121,249,0.25)",  text: "#e879f9" },
  "Data / Backend":  { bg: "rgba(52,211,153,0.1)",   border: "rgba(52,211,153,0.25)",   text: "#34d399" },
};

const Projects = () => (
  <section id="projects" className="section-pad relative overflow-hidden">
    <div className="orb w-80 h-80 bg-violet-500/10 bottom-0 right-0" />

    <div className="max-w-6xl mx-auto px-5 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-10"
      >
        <p className="sec-label mb-2">{"// 03"}</p>
        <h2 className="text-4xl md:text-5xl font-black font-space" style={{ color: "var(--text-1)" }}>
          Featured <span className="text-gradient">Projects</span>
        </h2>
        <p className="text-sm mt-2 max-w-lg" style={{ color: "var(--text-2)" }}>
          Real-world AI/ML applications — computer vision to LLM-powered platforms.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-5">
        {PROJECTS.map((p, i) => {
          const ts = tagStyle[p.tag] || tagStyle["AI / Full Stack"];
          return (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="rounded-2xl overflow-hidden flex flex-col group transition-all duration-200"
              style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = "var(--border-hl)")}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
            >
              {/* Header strip */}
              <div className="px-5 pt-5 pb-4 flex items-start justify-between gap-3"
                style={{ borderBottom: "1px solid var(--border)" }}
              >
                <div className="flex items-center gap-2.5">
                  <span className="text-xs font-mono" style={{ color: "var(--text-3)" }}>0{i + 1}</span>
                  <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full"
                    style={{ background: ts.bg, border: `1px solid ${ts.border}`, color: ts.text }}
                  >
                    {p.tag}
                  </span>
                </div>
                <div className="flex gap-1">
                  {p.github && p.github !== "#" && (
                    <a href={p.github} target="_blank" rel="noopener noreferrer"
                      className="p-1.5 rounded-lg transition-colors"
                      style={{ color: "var(--text-3)" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-1)")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-3)")}
                    >
                      <Github size={16} />
                    </a>
                  )}
                  {p.live && p.live !== "#" && (
                    <a href={p.live} target="_blank" rel="noopener noreferrer"
                      className="p-1.5 rounded-lg transition-colors"
                      style={{ color: "var(--text-3)" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "var(--primary)")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-3)")}
                    >
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              </div>

              {/* Body */}
              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-bold text-base mb-2 font-space transition-colors"
                  style={{ color: "var(--text-1)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--primary)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-1)")}
                >
                  {p.title}
                </h3>
                <p className="text-xs leading-relaxed flex-1 mb-4" style={{ color: "var(--text-2)" }}>
                  {p.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {p.tech.map((t) => (
                    <span key={t} className="tech-tag">{t}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mt-10"
      >
        <a href="https://github.com/Sahil758-cell" target="_blank" rel="noopener noreferrer"
          className="btn-outline inline-flex items-center gap-2"
        >
          <Github size={16} /> View All on GitHub
        </a>
      </motion.div>
    </div>
  </section>
);

export default Projects;
