"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, CheckCircle, Github, Linkedin, Phone } from "lucide-react";
import { PROFILE } from "../constants/data";

const InfoLink = ({ href, icon: Icon, label, value, hoverColor, isExternal }) => (
  <a
    href={href}
    target={isExternal ? "_blank" : undefined}
    rel={isExternal ? "noopener noreferrer" : undefined}
    className="flex items-center gap-3 p-3.5 rounded-xl transition-all group"
    style={{ border: "1px solid var(--border)", background: "var(--bg-card)" }}
    onMouseEnter={(e) => (e.currentTarget.style.borderColor = hoverColor + "55")}
    onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
  >
    <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
      style={{ background: hoverColor + "15", border: `1px solid ${hoverColor}25` }}
    >
      <Icon size={15} style={{ color: hoverColor }} />
    </div>
    <div>
      <p className="text-[10px] uppercase tracking-widest" style={{ color: "var(--text-3)" }}>{label}</p>
      <p className="text-xs font-medium" style={{ color: "var(--text-1)" }}>{value}</p>
    </div>
  </a>
);

const Contact = () => {
  const [status, setStatus] = useState("idle");
  const formRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: e.target.email.value, message: e.target.message.value }),
      });
      if (res.ok) { setStatus("success"); formRef.current.reset(); setTimeout(() => setStatus("idle"), 5000); }
      else { setStatus("error"); }
    } catch { setStatus("error"); }
  };

  const inputStyle = {
    width: "100%", padding: "10px 14px", borderRadius: "10px",
    border: "1px solid var(--border)", background: "var(--bg-raised)",
    color: "var(--text-1)", fontSize: "13px", outline: "none",
    transition: "border-color 0.2s",
  };

  return (
    <section id="contact" className="section-pad relative overflow-hidden">
      <div className="orb w-80 h-80 bg-violet-500/10 bottom-0 left-0" />

      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <p className="sec-label mb-2">{"// 06"}</p>
          <h2 className="text-4xl md:text-5xl font-black font-space" style={{ color: "var(--text-1)" }}>
            Let&apos;s Work <span className="text-gradient">Together</span>
          </h2>
          <p className="text-sm mt-2 max-w-md" style={{ color: "var(--text-2)" }}>
            Available for freelance AI/ML projects and full-time opportunities.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl items-start">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-3"
          >
            <InfoLink href={`mailto:${PROFILE.email}`} icon={Mail} label="Email" value={PROFILE.email} hoverColor="var(--primary)" />
            <InfoLink href={`tel:${PROFILE.phone}`} icon={Phone} label="Phone" value={`+91 ${PROFILE.phone}`} hoverColor="var(--accent)" />
            <InfoLink href={PROFILE.github} icon={Github} label="GitHub" value="github.com/Sahil758-cell" hoverColor="var(--primary)" isExternal />
            <InfoLink href={PROFILE.linkedin} icon={Linkedin} label="LinkedIn" value="Sahil Deshmukh" hoverColor="var(--secondary)" isExternal />
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl p-6"
            style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}
          >
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-[11px] font-medium uppercase tracking-wider mb-1.5" style={{ color: "var(--text-2)" }}>
                  Your Email
                </label>
                <input
                  type="email" name="email" required placeholder="you@example.com"
                  style={inputStyle}
                  onFocus={(e) => (e.target.style.borderColor = "var(--border-hl)")}
                  onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
                />
              </div>
              <div>
                <label className="block text-[11px] font-medium uppercase tracking-wider mb-1.5" style={{ color: "var(--text-2)" }}>
                  Message
                </label>
                <textarea
                  name="message" required rows={5} placeholder="Tell me about your project..."
                  style={{ ...inputStyle, resize: "none" }}
                  onFocus={(e) => (e.target.style.borderColor = "var(--border-hl)")}
                  onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
                />
              </div>
              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-opacity disabled:opacity-60"
                style={{ background: "linear-gradient(135deg, var(--primary), var(--secondary))", color: "#07070f" }}
              >
                {status === "idle"    && <><Send size={14} /> Send Message</>}
                {status === "sending" && "Sending…"}
                {status === "success" && <><CheckCircle size={14} /> Sent!</>}
                {status === "error"   && "Try Again"}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
