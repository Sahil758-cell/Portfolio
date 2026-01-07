import React from "react";
import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import { CERTIFICATIONS } from "../constants/data";

const Certifications = () => {
    return (
        <section id="certifications" className="section-padding bg-[var(--bg-dark)]">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mt-2">
                        My <span className="text-gradient">Certifications</span>
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    {CERTIFICATIONS.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="glass-card p-6 flex items-center justify-between gap-4 hover:border-[var(--primary)]/30 transition-all group"
                        >
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-cyan-500/10 rounded-full text-cyan-400 group-hover:text-cyan-300 transition-colors">
                                    <Award size={28} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-[var(--text-primary)] group-hover:text-[var(--primary)] transition-colors">{cert.name}</h3>
                                    <p className="text-[var(--text-secondary)] text-sm">{cert.issuer} • {cert.date}</p>
                                </div>
                            </div>

                            <a
                                href={cert.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors"
                            >
                                <ExternalLink size={20} />
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certifications;
