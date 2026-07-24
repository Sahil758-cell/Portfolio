"use client";

import { motion } from "framer-motion";
import { EDUCATION } from "../constants/data";
import { GraduationCap, Calendar, Building2 } from "lucide-react";

const Education = () => (
  <section id="education" className="section-pad relative overflow-hidden">
    <div className="orb w-72 h-72 bg-violet-500/10 top-0 left-0" />

    <div className="max-w-6xl mx-auto px-5 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-10"
      >
        <p className="sec-label mb-2">{"// 04"}</p>
        <h2 className="text-4xl md:text-5xl font-black font-space" style={{ color: "var(--text-1)" }}>
          My <span className="text-gradient">Education</span>
        </h2>
      </motion.div>

      <div className="max-w-2xl relative pl-5">
        <div className="absolute left-[5px] top-1 bottom-1 w-px"
          style={{ background: `linear-gradient(to bottom, var(--secondary), var(--primary), transparent)` }}
        />

        <div className="space-y-4">
          {EDUCATION.map((edu, i) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              className="relative rounded-xl p-4 flex items-start gap-4"
              style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}
            >
              <span className="absolute -left-5 top-4 w-2.5 h-2.5 rounded-full border-2"
                style={{ borderColor: "var(--secondary)", background: "var(--bg)" }}
              />

              <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ background: "var(--secondary-bg)", border: "1px solid rgba(167,139,250,0.2)" }}
              >
                <GraduationCap size={18} style={{ color: "var(--secondary)" }} />
              </div>

              <div>
                <p className="font-bold text-sm font-space" style={{ color: "var(--text-1)" }}>{edu.degree}</p>
                <p className="text-xs mt-0.5 flex items-center gap-1" style={{ color: "var(--primary)" }}>
                  <Building2 size={11} /> {edu.school}
                </p>
                {edu.university && (
                  <p className="text-xs mt-0.5" style={{ color: "var(--text-3)" }}>{edu.university}</p>
                )}
                <p className="text-[11px] font-mono flex items-center gap-1 mt-1" style={{ color: "var(--text-3)" }}>
                  <Calendar size={10} /> {edu.period}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Education;
