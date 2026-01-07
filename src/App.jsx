import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen text-[var(--text-secondary)] selection:bg-cyan-500/30">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Certifications />
      <Projects />
      <Contact />

      {/* Footer */}
      <footer className="py-8 text-center text-gray-500 text-sm border-t border-white/5 bg-black">
        <p>&copy; {new Date().getFullYear()} Sahil Surendra Deshmukh. All rights reserved.</p>
        <p className="mt-2">Built with React & Vite</p>
      </footer>
    </div>
  );
}

export default App;
