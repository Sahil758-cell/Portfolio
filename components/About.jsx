"use client";

import { motion } from "framer-motion";
import { PROFILE, EXPERIENCE } from "../constants/data";
import { Calendar, MapPin, Briefcase } from "lucide-react";

const About = () => (
  <section id="about" className="section-pad relative overflow-hidden">
    <div className="orb w-80 h-80 bg-violet-500/15 top-0 right-0" />

    <div className="max-w-6xl mx-auto px-5 md:px-8">
      <div className="grid md:grid-cols-2 gap-10 items-start">

        {/* LEFT — Bio */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <p className="sec-label mb-2">{"// 01"}</p>
          <h2 className="text-4xl md:text-5xl font-black leading-tight mb-4 font-space" style={{ color: "var(--text-1)" }}>
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-sm leading-relaxed mb-3" style={{ color: "var(--text-2)" }}>
            {PROFILE.bio}
          </p>
          <p className="text-sm leading-relaxed mb-7" style={{ color: "var(--text-2)" }}>
            I specialize in building scalable AI solutions — bridging complex data with
            real-world applications. My strength is turning abstract problems into
            intelligent, production-ready systems.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-3">
            {[
              { v: "1+",   l: "Years Exp" },
              { v: "~85%", l: "ML Accuracy", accent: "var(--accent)" },
              { v: "10+",  l: "Projects" },
            ].map(({ v, l, accent }) => (
              <div key={l} className="rounded-xl p-3 text-center"
                style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}
              >
                <p className="text-2xl font-black font-space text-gradient" style={accent ? { backgroundImage: `linear-gradient(135deg, ${accent}, ${accent})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" } : {}}>
                  {v}
                </p>
                <p className="text-[10px] uppercase tracking-widest mt-0.5" style={{ color: "var(--text-3)" }}>{l}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT — Experience */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="rounded-2xl p-6"
          style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}
        >
          <h3 className="text-base font-bold mb-5 flex items-center gap-2 font-space" style={{ color: "var(--text-1)" }}>
            <Briefcase size={16} style={{ color: "var(--primary)" }} />
            Experience
          </h3>

          <div className="relative pl-5">
            <div className="absolute left-[5px] top-1 bottom-1 w-px" style={{ background: `linear-gradient(to bottom, var(--primary), var(--secondary), transparent)` }} />

            <div className="space-y-6">
              {EXPERIENCE.map((job, i) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="relative"
                >
                  <span className="absolute -left-5 top-1 w-2.5 h-2.5 rounded-full border-2"
                    style={{ borderColor: "var(--primary)", background: "var(--bg)" }}
                  />
                  <p className="font-bold text-sm" style={{ color: "var(--text-1)" }}>{job.role}</p>
                  <p className="text-xs font-medium mt-0.5 flex items-center gap-1" style={{ color: "var(--primary)" }}>
                    <MapPin size={10} /> {job.company}
                  </p>
                  <p className="text-[11px] font-mono flex items-center gap-1 mt-0.5 mb-1.5" style={{ color: "var(--text-3)" }}>
                    <Calendar size={10} /> {job.period} · {job.location}
                  </p>
                  <p className="text-xs leading-relaxed" style={{ color: "var(--text-2)" }}>{job.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default About;
