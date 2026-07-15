import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-white dark:bg-[#0b0f19] border-t border-slate-200/50 dark:border-slate-800/80 text-slate-500 dark:text-slate-405 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-between gap-6 sm:flex-row">
        {/* Logo/Name */}
        <div className="text-center sm:text-left">
          <p className="text-base font-bold text-slate-800 dark:text-slate-205 flex items-center justify-center sm:justify-start gap-1 font-sans">
            <span>Sruthi</span>
            <span className="text-[#0ea5e9]">Sahithi</span>
          </p>
          <p className="text-xs text-slate-450 dark:text-slate-500 mt-1 font-medium font-sans">
            Data Analyst
          </p>
        </div>

        {/* Copyright */}
        <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 text-center order-last sm:order-none font-sans">
          Designed & Developed by Bandaru Sruthi Sahithi &copy; {currentYear}
        </p>

        {/* Social Link List */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/sruthi-sahithi9"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-[#0ea5e9] dark:hover:text-[#00f0ff] hover:scale-105 transition-all"
            aria-label="GitHub profile"
          >
            <FaGithub className="w-4 h-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/sruthi-sahithi9"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-[#0ea5e9] dark:hover:text-[#00f0ff] hover:scale-105 transition-all"
            aria-label="LinkedIn profile"
          >
            <FaLinkedin className="w-4 h-4" />
          </a>
          <a
            href="mailto:srruthisahithi118@gmail.com"
            className="p-2 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-[#0ea5e9] dark:hover:text-[#00f0ff] hover:scale-105 transition-all"
            aria-label="Email contact"
          >
            <FaEnvelope className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
