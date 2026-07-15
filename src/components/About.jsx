import React from 'react';
import { motion } from 'framer-motion';
import { Shield, BarChart3, Database, Lightbulb } from 'lucide-react';

const highlights = [
  {
    icon: <BarChart3 className="w-6 h-6 text-[#0ea5e9] dark:text-[#00f0ff]" />,
    title: 'Data & BI Specialist',
    desc: 'Passionate about translating messy, unstructured data into clean, intuitive, and interactive dashboards that guide business decisions.'
  },
  {
    icon: <Shield className="w-6 h-6 text-indigo-500 dark:text-indigo-400" />,
    title: 'Cyber Security Background',
    desc: 'Currently pursuing a B.Tech in Cyber Security. Equipped with a strong security mindset, understanding data protection, integrity, and compliance.'
  },
  {
    icon: <Database className="w-6 h-6 text-emerald-500 dark:text-emerald-400" />,
    title: 'Database & SQL Management',
    desc: 'Proficient in database design, complex SQL queries, and optimizing data retrieval schemas across MySQL and SQLite environments.'
  },
  {
    icon: <Lightbulb className="w-6 h-6 text-amber-500 dark:text-amber-400" />,
    title: 'Problem Solver',
    desc: 'Combining technical coding skills with logical deduction to solve business problems, uncover trends, and communicate insights clearly.'
  }
];

export default function About() {
  return (
    <section
      id="about"
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
            About <span className="text-[#0ea5e9] dark:text-[#00f0ff]">Me</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-[#0ea5e9] dark:bg-[#00f0ff] mx-auto mt-4 rounded-full"
          ></motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-6 text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-sans"
          >
            I bridge the gap between complex raw data structures and actionable business growth. Leveraging a background in cybersecurity and real-world internship experience, I design dashboards that tell a story.
          </motion.p>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Narrative Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white font-sans">
              Combining Cyber Security principles with Modern Data Analytics.
            </h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              As a **B.Tech Cyber Security** student, I recognized early on that data is the ultimate driver of modern enterprise strategies and threat analysis. My path led me to dive deep into **Data Science and Business Intelligence**, learning to model, transform, and analyze datasets to uncover optimization points.
            </p>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              In my recent role as a **Data Analytics Intern at ApexPlanet Software Pvt. Ltd.**, I worked on cleaning legacy databases, running exploratory data analyses in Python, constructing Power BI reporting systems, and delivering KPI intelligence straight to management.
            </p>
            <div className="pt-4 border-t border-slate-200 dark:border-slate-800 grid grid-cols-2 gap-4">
              <div>
                <p className="text-3xl font-extrabold text-[#0ea5e9] dark:text-[#00f0ff] font-mono">10+</p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 uppercase font-bold tracking-wider">Dashboards Created</p>
              </div>
              <div>
                <p className="text-3xl font-extrabold text-indigo-500 dark:text-indigo-400 font-mono">2</p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 uppercase font-bold tracking-wider">Certifications Earned</p>
              </div>
            </div>
          </motion.div>

          {/* Right Highlights Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className="p-6 rounded-2xl glass-card-light dark:glass-card-dark transition-all duration-300 hover:shadow-lg dark:hover:border-slate-700/80"
              >
                <div className="p-3 bg-slate-100 dark:bg-slate-800/80 rounded-xl w-fit mb-4">
                  {item.icon}
                </div>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white font-sans mb-2">
                  {item.title}
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
