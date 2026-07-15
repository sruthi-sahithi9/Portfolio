import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { FiDownload } from 'react-icons/fi';

const roles = [
  'Data Analyst',
  'Cyber Security Student',
  'Business Intelligence Developer',
  'Python Programmer',
  'SQL & Database Enthusiast'
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;
    const currentFullText = roles[roleIndex];

    if (isDeleting) {
      timer = setTimeout(() => {
        setDisplayedText((prev) => prev.slice(0, -1));
      }, 40);
    } else {
      timer = setTimeout(() => {
        setDisplayedText((prev) => currentFullText.slice(0, prev.length + 1));
      }, 80);
    }

    if (!isDeleting && displayedText === currentFullText) {
      timer = setTimeout(() => setIsDeleting(true), 1500);
    } else if (isDeleting && displayedText === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, roleIndex]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-24 pb-16 bg-slate-50 dark:bg-[#0a192f] transition-colors duration-300 relative overflow-hidden"
    >
      {/* Background neon glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#0ea5e9]/10 rounded-full blur-3xl dark:bg-[#00f0ff]/5 pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl dark:bg-indigo-500/5 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        {/* Hero Left Content */}
        <div className="col-span-1 md:col-span-7 flex flex-col justify-center space-y-6 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="px-3 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#0ea5e9]/10 dark:bg-[#00f0ff]/10 text-[#0ea5e9] dark:text-[#00f0ff] border border-[#0ea5e9]/20 dark:border-[#00f0ff]/20">
              Welcome to my portfolio
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white leading-tight font-sans tracking-tight"
          >
            Hi, I'm{' '}
            <span className="text-[#0ea5e9] dark:text-[#00f0ff]">
              Bandaru Sruthi Sahithi
            </span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl sm:text-3xl font-semibold text-slate-800 dark:text-slate-200 h-10"
          >
            I am a <span className="text-slate-900 dark:text-white border-r-2 border-[#0ea5e9] dark:border-[#00f0ff] pr-1 animate-pulse">{displayedText}</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl font-sans"
          >
            Transforming Data into Business Insights. Data Analytics Intern specializing in Python, SQL, Power BI, and Cyber Security. Passioned about building interactive dashboards and solving complex technical puzzles.
          </motion.p>

          {/* Call to Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 pt-4"
          >
            <a
              href="#resume"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 dark:from-[#00f0ff] dark:to-indigo-600 dark:hover:from-[#00f0ff] dark:hover:to-[#00f0ff] hover:opacity-95 shadow-lg shadow-slate-900/10 dark:shadow-[#00f0ff]/10 flex items-center justify-center gap-2 border border-slate-700/50 dark:border-none cursor-pointer transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <FiDownload className="w-5 h-5" /> Download Resume
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-semibold text-slate-800 dark:text-slate-200 bg-white/50 dark:bg-slate-800/40 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-300 dark:border-slate-700 backdrop-blur-sm flex items-center justify-center transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Contact Me
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex items-center justify-center md:justify-start gap-5 pt-6"
          >
            <a
              href="https://github.com/sruthi-sahithi9"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 text-slate-700 hover:text-[#0ea5e9] dark:text-slate-300 dark:hover:text-[#00f0ff] hover:scale-110 shadow-sm transition-all duration-300"
              aria-label="GitHub profile"
            >
              <FaGithub className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/sruthi-sahithi9"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 text-slate-700 hover:text-[#0ea5e9] dark:text-slate-300 dark:hover:text-[#00f0ff] hover:scale-110 shadow-sm transition-all duration-300"
              aria-label="LinkedIn profile"
            >
              <FaLinkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:srruthisahithi118@gmail.com"
              className="p-3 rounded-xl bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 text-slate-700 hover:text-[#0ea5e9] dark:text-slate-300 dark:hover:text-[#00f0ff] hover:scale-110 shadow-sm transition-all duration-300"
              aria-label="Email contact"
            >
              <FaEnvelope className="w-5 h-5" />
            </a>
          </motion.div>
        </div>

        {/* Hero Right Image */}
        <div className="col-span-1 md:col-span-5 flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'spring', stiffness: 100, delay: 0.2 }}
            className="relative"
          >
            {/* Glowing rings */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#0ea5e9] to-indigo-600 rounded-full blur-2xl opacity-30 dark:opacity-40 animate-pulse"></div>
            
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full p-2 bg-gradient-to-tr from-slate-200 to-slate-300 dark:from-[#00f0ff] dark:to-indigo-600">
              <img
                src="/avatar.jpg"
                alt="Bandaru Sruthi Sahithi"
                className="w-full h-full object-cover rounded-full bg-slate-900 border-4 border-white dark:border-[#0a192f]"
              />
            </div>
            
            {/* Overlay statistics badge */}
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="absolute -bottom-4 -right-4 bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shadow-xl backdrop-blur-md flex items-center gap-3"
            >
              <div className="w-3 h-3 rounded-full bg-emerald-500 animate-ping"></div>
              <div>
                <p className="text-xs text-slate-500 dark:text-slate-400">Current Position</p>
                <p className="text-sm font-bold text-slate-800 dark:text-slate-100">Data Analytics Intern</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
