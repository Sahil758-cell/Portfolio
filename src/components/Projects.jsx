import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { PROJECTS } from "../constants/data";

const Projects = () => {
    return (
        <section id="projects" className="section-padding bg-[var(--bg-dark)]">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <span className="text-purple-400 font-medium tracking-wider uppercase text-sm">Portfolio</span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-2">
                        Featured <span className="text-gradient">Projects</span>
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {PROJECTS.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="glass-card p-8 flex flex-col h-full hover:border-purple-500/30 transition-all duration-300 group"
                        >
                            <div className="mb-6 flex justify-between items-start">
                                <div className="p-3 rounded-full bg-white/5 text-purple-400 group-hover:text-purple-300 transition-colors">
                                    <span className="text-xl font-bold">0{index + 1}</span>
                                </div>
                                <div className="flex gap-3">
                                    <a href={project.github} className="text-gray-400 hover:text-white transition-colors" title="View Code">
                                        <Github size={20} />
                                    </a>
                                    <a href={project.live} className="text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors" title="Live Demo">
                                        <ExternalLink size={20} />
                                    </a>
                                </div>
                            </div>

                            <h3 className="text-2xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">
                                {project.title}
                            </h3>

                            <p className="text-[var(--text-secondary)] mb-6 flex-grow leading-relaxed">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mt-auto">
                                {project.tech.map((tag) => (
                                    <span key={tag} className="text-xs font-medium px-3 py-1 rounded-full bg-[var(--text-primary)]/5 border border-[var(--text-primary)]/10 text-[var(--text-secondary)]">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
