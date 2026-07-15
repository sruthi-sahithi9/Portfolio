import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, CheckCircle2 } from 'lucide-react';

const timelineEvents = [
  {
    type: 'work',
    role: 'Data Analytics Intern',
    company: 'ApexPlanet Software Pvt. Ltd.',
    duration: 'Feb 2026 – Apr 2026',
    description: 'Applied data analytics techniques to analyze business datasets, run statistical validation, and build reporting pipelines.',
    responsibilities: [
      'Applied Data analytics techniques to analyze business datasets and generate actionable insights.',
      'Performed exploratory data analysis, built interactive dashboards, and conducted statistical testing using Python, SQL, and Power BI across multiple real-world datasets.',
      'Delivered insights on retail sales trends, e-commerce performance, and landing page experiments while completing end-to-end analytics tasks including EDA, Dashboards, and A/B testing.'
    ]
  },
  {
    type: 'education',
    role: 'B-Tech CSE – CyberSecurity',
    company: 'Vignan’s Institute of Information Technology',
    duration: '2023 – 2027',
    description: 'Focusing on computer science fundamentals, cyber security architectures, relational databases, and data analytical models.',
    responsibilities: [
      'Maintaining a strong academic standing with a current CGPA of 8.54.',
      'Engaging in coursework covering Data Protection, Relational Databases, Cybersecurity frameworks, and Advanced Analytics.',
      'Applying Python scripting, SQL query structures, and statistics to security data modeling.'
    ]
  }
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-24 bg-slate-50 dark:bg-[#0a192f] text-slate-800 dark:text-slate-100 transition-colors duration-300 relative overflow-hidden"
    >
      <div className="absolute bottom-1/3 left-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none"></div>

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
            My <span className="text-[#0ea5e9] dark:text-[#00f0ff]">Journey</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-[#0ea5e9] dark:bg-[#00f0ff] mx-auto mt-4 rounded-full"
          ></motion.div>
          <p className="mt-6 text-lg text-slate-600 dark:text-slate-400 font-sans">
            Work history, professional internships, and ongoing academic milestones.
          </p>
        </div>

        {/* Timeline container */}
        <div className="relative border-l border-slate-300 dark:border-slate-800 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
          {timelineEvents.map((event, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[38px] sm:-left-[54px] top-1.5 p-2 bg-white dark:bg-[#0a192f] border-2 border-[#0ea5e9] dark:border-[#00f0ff] rounded-full shadow-md z-10 text-slate-800 dark:text-slate-100">
                {event.type === 'work' ? (
                  <Briefcase className="w-5 h-5 text-[#0ea5e9] dark:text-[#00f0ff]" />
                ) : (
                  <GraduationCap className="w-5 h-5 text-indigo-500 dark:text-indigo-400" />
                )}
              </div>

              {/* Event Card */}
              <div className="p-6 sm:p-8 rounded-2xl border border-slate-200/50 dark:border-slate-800/80 bg-white/60 dark:bg-slate-900/40 glass-card-light dark:glass-card-dark shadow-md">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white font-sans">
                      {event.role}
                    </h3>
                    <p className="text-sm font-semibold text-[#0ea5e9] dark:text-[#00f0ff] mt-0.5">
                      {event.company}
                    </p>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 w-fit">
                    {event.duration}
                  </span>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6 font-sans">
                  {event.description}
                </p>

                {/* Responsibilities list */}
                <div className="space-y-3">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Key Contributions</p>
                  <ul className="grid grid-cols-1 gap-2.5">
                    {event.responsibilities.map((resp, rIdx) => (
                      <li key={rIdx} className="flex items-start gap-2.5 text-sm text-slate-700 dark:text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 dark:text-emerald-400 shrink-0 mt-0.5" />
                        <span className="leading-normal">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
