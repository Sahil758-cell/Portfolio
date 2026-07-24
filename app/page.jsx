import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Education from "../components/Education";
import Certifications from "../components/Certifications";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg)", color: "var(--text-1)" }}>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Certifications />
      <Contact />
      <footer className="py-6 text-center border-t" style={{ borderColor: "var(--border)" }}>
        <p className="font-mono text-xs" style={{ color: "var(--text-3)" }}>
          © {new Date().getFullYear()} Sahil Surendra Deshmukh — Built with Next.js
        </p>
      </footer>
    </div>
  );
}
