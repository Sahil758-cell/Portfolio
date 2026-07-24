"use client";

import { motion } from "framer-motion";
import { Award, ExternalLink, CheckCircle } from "lucide-react";
import { CERTIFICATIONS } from "../constants/data";

const Certifications = () => (
  <section id="certifications" className="section-pad relative overflow-hidden">
    <div className="orb w-72 h-72 bg-cyan-500/10 top-0 right-0" />

    <div className="max-w-6xl mx-auto px-5 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-10"
      >
        <p className="sec-label mb-2">{"// 05"}</p>
        <h2 className="text-4xl md:text-5xl font-black font-space" style={{ color: "var(--text-1)" }}>
          My <span className="text-gradient">Certifications</span>
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 gap-4 max-w-3xl">
        {CERTIFICATIONS.map((cert, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="rounded-xl p-4 flex items-center justify-between gap-4 group transition-all"
            style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = "var(--border-hl)")}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 flex items-center justify-center rounded-lg flex-shrink-0"
                style={{ background: "linear-gradient(135deg, var(--primary-bg), var(--secondary-bg))", border: "1px solid var(--border)" }}
              >
                <Award size={17} style={{ color: "var(--primary)" }} />
              </div>
              <div>
                <p className="font-semibold text-sm font-space" style={{ color: "var(--text-1)" }}>{cert.name}</p>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <CheckCircle size={10} style={{ color: "var(--accent)" }} />
                  <span className="text-xs" style={{ color: "var(--text-2)" }}>{cert.issuer} · {cert.date}</span>
                </div>
              </div>
            </div>
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg transition-colors flex-shrink-0"
              style={{ color: "var(--text-3)", border: "1px solid var(--border)" }}
              onMouseEnter={(e) => { e.currentTarget.style.color = "var(--primary)"; e.currentTarget.style.borderColor = "var(--border-hl)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = "var(--text-3)"; e.currentTarget.style.borderColor = "var(--border)"; }}
              title="View Certificate"
            >
              <ExternalLink size={14} />
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Certifications;
