import React from "react";
import { motion } from "framer-motion";
import { PROFILE, EXPERIENCE } from "../constants/data";
import { Calendar, Building, Briefcase } from "lucide-react";

const About = () => {
    return (
        <section id="about" className="section-padding relative">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-16 items-center">

                    {/* Bio Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="text-cyan-400 font-medium tracking-wider uppercase text-sm">About Me</span>
                        <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-6">
                            Driven by <span className="text-gradient">Innovation</span>
                        </h2>
                        <p className="text-[var(--text-secondary)] text-lg leading-relaxed mb-6">
                            {PROFILE.bio}
                        </p>
                        <p className="text-[var(--text-secondary)] text-lg leading-relaxed mb-8">
                            I specialize in building scalable AI solutions and possess a deep understanding of machine learning algorithms.
                            My goal is to bridge the gap between complex data and user-friendly applications.
                        </p>

                        <div className="flex gap-8">
                            <div className="text-center">
                                <h3 className="text-4xl font-bold text-[var(--text-primary)]">1+</h3>
                                <p className="text-sm text-[var(--text-secondary)] uppercase tracking-wide mt-1">Years Exp</p>
                            </div>
                            <div className="text-center">
                                <h3 className="text-4xl font-bold text-[var(--text-primary)]">10+</h3>
                                <p className="text-sm text-[var(--text-secondary)] uppercase tracking-wide mt-1">Projects</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Experience Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-[var(--bg-card)] p-8 rounded-2xl border border-[var(--glass-border)] backdrop-blur-sm shadow-xl"
                    >
                        <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                            <Briefcase className="text-purple-400" size={24} />
                            Experience
                        </h3>

                        <div className="space-y-8 relative before:absolute before:left-[9px] before:top-2 before:h-full before:w-[2px] before:bg-zinc-800">
                            {EXPERIENCE.map((job) => (
                                <div key={job.id} className="relative pl-8">
                                    <span className="absolute left-0 top-2 w-5 h-5 rounded-full border-4 border-white bg-purple-500" />
                                    <h4 className="text-xl font-bold text-[var(--text-primary)]">{job.role}</h4>
                                    <p className="text-purple-400 font-medium mb-2">{job.company}</p>
                                    <div className="flex items-center gap-2 text-xs text-[var(--text-secondary)] mb-3 font-mono">
                                        <Calendar size={14} />
                                        {job.period}
                                    </div>
                                    <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                                        {job.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default About;
