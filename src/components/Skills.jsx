import React from "react";
import { motion } from "framer-motion";
import { SKILLS } from "../constants/data";

const Skills = () => {
    return (
        <section id="skills" className="section-padding relative overflow-hidden">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-cyan-400 font-medium tracking-wider uppercase text-sm">Technical Expertise</span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-2">
                        My <span className="text-gradient">Skills</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {SKILLS.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            whileHover={{ scale: 1.05, translateY: -5 }}
                            className="glass-card p-6 flex flex-col items-center justify-center gap-4 group cursor-pointer hover:border-cyan-500/30 transition-colors"
                        >
                            <div className="p-4 rounded-full bg-[var(--text-primary)]/5 group-hover:bg-cyan-500/10 transition-colors">
                                <skill.icon size={32} className="text-[var(--text-secondary)] group-hover:text-cyan-400 transition-colors" />
                            </div>
                            <h3 className="font-medium text-lg text-[var(--text-primary)] group-hover:text-[var(--primary)]">{skill.name}</h3>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
