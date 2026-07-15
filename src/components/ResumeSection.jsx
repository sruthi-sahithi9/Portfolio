import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, Eye, Award, CheckCircle } from 'lucide-react';

const resumePoints = [
  'B.Tech CSE in Cyber Security at Vignan\'s Institute (CGPA: 8.54)',
  'Relational database engineering using SQL (MySQL, SQLite)',
  'Data Analytics Intern experience building KPI dashboards & EDA tools',
  'Scripting & Machine Learning modeling in Python (Pandas, NLTK)',
  'Industry credentials in Python & Machine Learning (Nlite) and MySQL (Oracle)'
];

export default function ResumeSection() {
  return (
    <section
      id="resume"
      className="py-24 bg-white dark:bg-[#0b0f19] text-slate-800 dark:text-slate-100 transition-colors duration-300 relative overflow-hidden"
    >
      <div className="absolute top-1/4 left-1/3 w-80 h-80 bg-[#0ea5e9]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-bold tracking-tight font-sans"
          >
            My <span className="text-[#0ea5e9] dark:text-[#00f0ff]">Resume</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-[#0ea5e9] dark:bg-[#00f0ff] mx-auto mt-4 rounded-full"
          ></motion.div>
          <p className="mt-6 text-lg text-slate-600 dark:text-slate-400 font-sans">
            Download or preview my CV summarizing my professional experiences and academic timeline.
          </p>
        </div>

        {/* Resume card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="p-6 sm:p-10 rounded-3xl border border-slate-200/50 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-900/40 glass-card-light dark:glass-card-dark shadow-lg flex flex-col md:flex-row items-center gap-8 justify-between"
        >
          {/* Card left: Summary list */}
          <div className="flex-1 space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-indigo-500/10 text-indigo-500 dark:text-indigo-400">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-950 dark:text-white font-sans">
                  Resume Highlights
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-semibold mt-0.5">
                  Bandaru Sruthi Sahithi — Data Analyst Intern
                </p>
              </div>
            </div>

            <ul className="space-y-3.5">
              {resumePoints.map((point, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-350">
                  <CheckCircle className="w-5 h-5 text-emerald-500 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <span className="leading-snug">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Card right: CTA buttons */}
          <div className="w-full md:w-auto shrink-0 flex flex-col sm:flex-row md:flex-col gap-4">
            <a
              href="./resume.pdf"
              download="Bandaru_Sruthi_Sahithi_Resume.pdf"
              className="w-full md:w-56 px-6 py-4 rounded-2xl text-sm font-bold text-white bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 dark:from-[#00f0ff] dark:to-indigo-600 dark:hover:from-[#00f0ff] dark:hover:to-[#00f0ff] hover:opacity-95 shadow-md flex items-center justify-center gap-2 cursor-pointer border border-slate-700/50 dark:border-none transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <Download className="w-4 h-4" /> Download Resume (PDF)
            </a>
            <a
              href="./resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-56 px-6 py-4 rounded-2xl text-sm font-bold text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-750 flex items-center justify-center gap-2 cursor-pointer shadow-sm transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <Eye className="w-4 h-4 text-indigo-500" /> Preview Resume Online
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
