import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, CheckCircle } from "lucide-react";
import { PROFILE } from "../constants/data";

const Contact = () => {
    const [status, setStatus] = useState("idle"); // idle, sending, success
    const formRef = useRef();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("sending");
        // Simulate sending
        setTimeout(() => {
            setStatus("success");
            setTimeout(() => setStatus("idle"), 3000);
            formRef.current.reset();
        }, 1500);
    };

    return (
        <section id="contact" className="section-padding">
            <div className="container mx-auto px-6 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="glass-card p-8 md:p-12 text-center"
                >
                    <span className="text-cyan-400 font-medium tracking-wider uppercase text-sm">Get In Touch</span>
                    <h2 className="text-4xl font-bold mt-2 mb-8">
                        Let's Work <span className="text-gradient">Together</span>
                    </h2>
                    <p className="text-[var(--text-secondary)] mb-10 max-w-xl mx-auto">
                        I'm currently available for freelance AI/ML projects and open to full-time opportunities.
                        If you have a project in mind or just want to say hi, feel free to reach out!
                    </p>

                    <form ref={formRef} onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4 text-left">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-[var(--text-secondary)] mb-2">Your Email</label>
                            <input
                                type="email"
                                id="email"
                                required
                                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-[var(--text-primary)] transition-colors"
                                placeholder="john@example.com"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-[var(--text-secondary)] mb-2">Message</label>
                            <textarea
                                id="message"
                                required
                                rows="4"
                                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-[var(--text-primary)] transition-colors"
                                placeholder="Project details..."
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={status === "sending"}
                            className="w-full py-4 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold rounded-lg transition-all transform active:scale-95 flex items-center justify-center gap-2"
                        >
                            {status === "idle" && (
                                <>
                                    Send Message <Send size={18} />
                                </>
                            )}
                            {status === "sending" && "Sending..."}
                            {status === "success" && (
                                <>
                                    Sent Successfully <CheckCircle size={18} />
                                </>
                            )}
                        </button>
                    </form>

                    <div className="mt-12 flex justify-center gap-8 border-t border-[var(--glass-border)] pt-8">
                        <a href={`mailto:${PROFILE.email}`} className="flex items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors">
                            <Mail size={20} />
                            <span>{PROFILE.email}</span>
                        </a>
                    </div>

                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
