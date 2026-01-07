import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { PROFILE } from "../constants/data";

const Hero = () => {
    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
        >
            {/* Background Glow Effects */}
            <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[100px] opacity-50 animate-pulse" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[100px] opacity-50 animate-pulse delay-1000" />

            <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-[var(--primary)] text-sm mb-6 font-medium tracking-wide">
                        Available for Hire
                    </span>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                        Hi, I'm <br />
                        <span className="text-gradient hover:opacity-80 transition-opacity cursor-default">
                            Sahil
                        </span>
                    </h1>
                    <h2 className="text-2xl md:text-3xl text-[var(--text-secondary)] mb-8 font-light">
                        <span className="text-[var(--text-primary)] font-medium">{PROFILE.role}</span> turning data into intelligence.
                    </h2>

                    <div className="flex flex-wrap gap-4">
                        <a
                            href="#projects"
                            className="group relative px-8 py-3 bg-[var(--text-primary)] text-white font-semibold rounded-full overflow-hidden flex items-center gap-2 hover:opacity-90 transition-all"
                        >
                            <span className="relative z-10">View Work</span>
                            <ArrowRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                        </a>

                        <a
                            href="dist/SAHIL SURENDRA DESHMUKH Resume .pdf"
                            download
                            className="px-8 py-3 border border-[var(--text-primary)]/20 rounded-full text-[var(--text-primary)] font-semibold hover:bg-[var(--text-primary)]/5 transition-all flex items-center gap-2"
                        >
                            <span>Resume</span>
                            <Download size={18} />
                        </a>
                    </div>
                </motion.div>

                {/* Visual Element (3D-like abstract representation) */}
                {/* Visual Element (User Image) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative hidden md:block"
                >
                    <div className="relative w-full aspect-square max-w-[500px] mx-auto flex items-center justify-center">
                        {/* Abstract background */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-purple-500/20 rounded-full animate-float blur-3xl" />

                        <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/50 rotate-3 hover:rotate-0 transition-all duration-500">
                            <img
                                src="/hero-image.png"
                                alt="Sahil Deshmukh"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
