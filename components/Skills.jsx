"use client";

import { motion } from "framer-motion";
import { SKILL_CATEGORIES } from "../constants/data";

const accent = {
  cyan:    { bar: "#22d3ee", tag: "rgba(34,211,238,0.1)",  tagBorder: "rgba(34,211,238,0.2)",  text: "#22d3ee" },
  violet:  { bar: "#a78bfa", tag: "rgba(167,139,250,0.1)", tagBorder: "rgba(167,139,250,0.2)", text: "#a78bfa" },
  fuchsia: { bar: "#e879f9", tag: "rgba(232,121,249,0.1)", tagBorder: "rgba(232,121,249,0.2)", text: "#e879f9" },
  emerald: { bar: "#34d399", tag: "rgba(52,211,153,0.1)",  tagBorder: "rgba(52,211,153,0.2)",  text: "#34d399" },
  amber:   { bar: "#fbbf24", tag: "rgba(251,191,36,0.1)",  tagBorder: "rgba(251,191,36,0.2)",  text: "#fbbf24" },
  rose:    { bar: "#fb7185", tag: "rgba(251,113,133,0.1)", tagBorder: "rgba(251,113,133,0.2)", text: "#fb7185" },
};

const Skills = () => (
  <section id="skills" className="section-pad relative overflow-hidden">
    <div className="orb w-80 h-80 bg-cyan-500/10 -top-10 left-0" />

    <div className="max-w-6xl mx-auto px-5 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-10"
      >
        <p className="sec-label mb-2">{"// 02"}</p>
        <h2 className="text-4xl md:text-5xl font-black font-space" style={{ color: "var(--text-1)" }}>
          Technical <span className="text-gradient">Skills</span>
        </h2>
        <p className="text-sm mt-2 max-w-lg" style={{ color: "var(--text-2)" }}>
          End-to-end ML pipeline expertise — raw data to production AI.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {SKILL_CATEGORIES.map((cat, i) => {
          const c = accent[cat.color];
          return (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              whileHover={{ y: -3 }}
              className="rounded-2xl overflow-hidden transition-all duration-200"
              style={{ background: "var(--bg-card)", border: `1px solid var(--border)`, boxShadow: "var(--shadow)" }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = c.bar + "55")}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
            >
              {/* Top accent bar */}
              <div className="h-[3px]" style={{ background: `linear-gradient(90deg, ${c.bar}, transparent)` }} />

              <div className="p-4">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2 h-2 rounded-full" style={{ background: c.bar }} />
                  <p className="text-xs font-bold uppercase tracking-wider" style={{ color: c.text }}>{cat.category}</p>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {cat.skills.map((s) => (
                    <span key={s} className="text-xs px-2 py-0.5 rounded-md font-medium"
                      style={{ background: c.tag, border: `1px solid ${c.tagBorder}`, color: c.text }}
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

export default Skills;
