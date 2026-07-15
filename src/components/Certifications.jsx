import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink, ShieldCheck } from 'lucide-react';
import { FaDatabase, FaPython } from 'react-icons/fa';

// Custom lightweight SVG/text badges for guaranteed compile safety
const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M12.24 10.285V14.4h6.887c-.648 2.41-2.519 4.114-5.136 4.114-3.41 0-6.19-2.78-6.19-6.19s2.78-6.19 6.19-6.19c1.7 0 3.2.69 4.29 1.79l3.07-3.07C19.16 2.19 15.93 1 12.24 1 5.48 1 0 6.48 0 13.24s5.48 12.24 12.24 12.24c6.88 0 12.24-5.36 12.24-12.24 0-.89-.09-1.74-.26-2.56H12.24z" fill="#4285F4"/>
  </svg>
);

const MicrosoftIcon = () => (
  <svg viewBox="0 0 23 23" className="w-4 h-4">
    <rect x="0" y="0" width="10" height="10" fill="#F25022" />
    <rect x="11" y="0" width="10" height="10" fill="#7FBA00" />
    <rect x="0" y="11" width="10" height="10" fill="#00A4EF" />
    <rect x="11" y="11" width="10" height="10" fill="#FFB900" />
  </svg>
);

const IbmIcon = () => (
  <span className="text-[11px] font-extrabold text-[#052FAD] tracking-wider leading-none select-none">IBM</span>
);

const ExcelIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="3" width="18" height="18" rx="2" fill="#107C41" />
    <path d="M8 8l8 8M16 8l-8 8" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

const certs = [
  {
    title: 'Python & Machine Learning',
    issuer: 'Nlite solutions',
    date: '2025',
    logo: <FaPython className="w-5 h-5 text-[#3776AB]" />,
    skills: ['Python Programming', 'Supervised Learning', 'Data Preprocessing', 'Model Validation'],
    link: 'https://github.com/sruthi-sahithi9'
  },
  {
    title: 'Oracle Certified Associate – MySQL',
    issuer: 'Oracle',
    date: '2024',
    logo: <FaDatabase className="w-5 h-5 text-[#F29111]" />,
    skills: ['Relational Database Design', 'SQL DDL & DML Commands', 'Complex Query Joins', 'Database Optimization'],
    link: 'https://github.com/sruthi-sahithi9'
  }
];

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="py-24 bg-white dark:bg-[#0b0f19] text-slate-800 dark:text-slate-100 transition-colors duration-300 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-bold tracking-tight font-sans"
          >
            Certifications & <span className="text-[#0ea5e9] dark:text-[#00f0ff]">Credentials</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-[#0ea5e9] dark:bg-[#00f0ff] mx-auto mt-4 rounded-full"
          ></motion.div>
          <p className="mt-6 text-lg text-slate-600 dark:text-slate-400 font-sans">
            Validated industry certifications across database programming, BI, and spreadsheet systems.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certs.map((cert, idx) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              whileHover={{ y: -5 }}
              className="p-6 rounded-2xl border border-slate-200/50 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-900/40 glass-card-light dark:glass-card-dark flex flex-col justify-between h-full shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div>
                {/* Header */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200/50 dark:border-slate-700/50 shadow-sm flex items-center justify-center shrink-0 w-11 h-11">
                    {cert.logo}
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider bg-[#0ea5e9]/10 text-[#0ea5e9] dark:bg-[#00f0ff]/10 dark:text-[#00f0ff] px-2.5 py-1 rounded-md border border-[#0ea5e9]/20 dark:border-[#00f0ff]/20">
                    {cert.date}
                  </span>
                </div>

                {/* Title & Issuer */}
                <h3 className="text-lg font-bold text-slate-900 dark:text-white font-sans leading-tight">
                  {cert.title}
                </h3>
                <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mt-1 mb-4 flex items-center gap-1">
                  <Award className="w-3.5 h-3.5 text-[#0ea5e9] dark:text-[#00f0ff]" /> Issued by {cert.issuer}
                </p>

                {/* Certified Skills list */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-[10px] font-semibold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200/30 dark:border-slate-700/30"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* View credential link */}
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-xl border border-slate-200 dark:border-slate-850 hover:bg-slate-100 dark:hover:bg-slate-800/60 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
              >
                <ShieldCheck className="w-4 h-4 text-emerald-500" /> Verify Credential <ExternalLink className="w-3 h-3 text-slate-400" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
