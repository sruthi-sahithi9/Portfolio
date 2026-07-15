import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import QueryTerminal from './components/QueryTerminal';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import GitHubSection from './components/GitHubSection';
import ResumeSection from './components/ResumeSection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import useDarkMode from './hooks/useDarkMode';

export default function App() {
  const [isDark, toggleDark] = useDarkMode();

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0a192f] text-slate-800 dark:text-slate-100 transition-colors duration-300 antialiased font-sans">
      {/* Navigation */}
      <Navbar isDark={isDark} toggleDark={toggleDark} />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section */}
        <Hero />

        {/* Interactive Query Terminal */}
        <QueryTerminal />

        {/* About Section */}
        <About />

        {/* Skills Section */}
        <Skills />

        {/* Projects Section */}
        <Projects />

        {/* Experience Section */}
        <Experience />

        {/* Certifications Section */}
        <Certifications />

        {/* GitHub Contribution & Statistics Section */}
        <GitHubSection />

        {/* Resume Preview & Download Section */}
        <ResumeSection />

        {/* Contact Form Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
