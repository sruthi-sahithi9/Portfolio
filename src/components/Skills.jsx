import React from 'react';
import { motion } from 'framer-motion';
import { FaPython, FaGithub, FaCode, FaDatabase, FaGitAlt } from 'react-icons/fa';
import { SiPandas, SiNumpy } from 'react-icons/si';
import { Terminal, BarChart2, Brain, LineChart, BookOpen } from 'lucide-react';

// Custom high-quality SVG icons for brand consistency and 100% build reliability
const PowerBiIcon = () => (
  <svg viewBox="0 0 32 32" className="w-5 h-5" fill="currentColor">
    <rect x="6" y="14" width="5" height="12" fill="#E1A11A" rx="0.5" />
    <rect x="13" y="8" width="5" height="18" fill="#F2C811" rx="0.5" />
    <rect x="20" y="2" width="5" height="24" fill="#F5DC3C" rx="0.5" />
  </svg>
);

const TableauIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
    <path d="M12 3v18M3 12h18" stroke="#E97627" />
    <path d="M7 7l10 10M7 17l10-10" stroke="#72B2B4" />
  </svg>
);

const ExcelIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="3" width="18" height="18" rx="2" fill="#107C41" />
    <path d="M8 8l8 8M16 8l-8 8" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

const VsCodeIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M23.984 6.742l-3.328-3.033c-.347-.317-.891-.218-1.121.206L12 16.142l-5.535-4.48c-.287-.233-.7-.2-.942.08L.231 17.65c-.322.38-.178.986.3.1.666l6.637-5.32 5.378 4.352c.287.233.7.2.942-.08l9.645-12.025c.348-.432.222-1.077-.149-1.378z" fill="#007ACC" />
  </svg>
);

const JupyterIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 13.914c-.053.473-.342.923-.746 1.156l-3.6 2.08c-.768.444-1.92.444-2.688 0l-3.6-2.08c-.482-.278-.797-.847-.797-1.455v-4.16c0-.608.315-1.177.797-1.455l3.6-2.08c.768-.444 1.92-.444 2.688 0l3.6 2.08c.482.278.797.847.797 1.455v4.16c0 .484-.2.944-.55 1.258l-.1.086z" fill="#F37626" />
  </svg>
);

const skillCategories = [
  {
    title: 'Programming',
    icon: <FaCode className="w-5 h-5 text-[#0ea5e9]" />,
    skills: [
      { name: 'Python', icon: <FaPython className="text-[#3776AB]" /> },
      { name: 'SQL', icon: <FaDatabase className="text-[#4479A1]" /> }
    ]
  },
  {
    title: 'Data Analysis',
    icon: <Brain className="w-5 h-5 text-indigo-500" />,
    skills: [
      { name: 'Pandas', icon: <SiPandas className="text-[#150458]" /> },
      { name: 'NumPy', icon: <SiNumpy className="text-[#013243]" /> },
      { name: 'Statistics', icon: <LineChart className="w-4 h-4 text-pink-500" /> },
      { name: 'Data Cleaning', icon: <Terminal className="w-4 h-4 text-emerald-500" /> },
      { name: 'Exploratory Data Analysis', icon: <BarChart2 className="w-4 h-4 text-amber-500" /> }
    ]
  },
  {
    title: 'Visualization',
    icon: <BarChart2 className="w-5 h-5 text-[#00f0ff]" />,
    skills: [
      { name: 'Power BI', icon: <PowerBiIcon /> },
      { name: 'Tableau', icon: <TableauIcon /> },
      { name: 'Excel', icon: <ExcelIcon /> },
      { name: 'Matplotlib', icon: <FaCode className="text-purple-500" /> }
    ]
  },
  {
    title: 'Databases',
    icon: <FaDatabase className="w-5 h-5 text-emerald-500" />,
    skills: [
      { name: 'MySQL', icon: <FaDatabase className="text-[#4479A1]" /> },
      { name: 'SQLite', icon: <FaDatabase className="text-[#003B57]" /> }
    ]
  },
  {
    title: 'Tools & Environments',
    icon: <FaGitAlt className="w-5 h-5 text-[#F05032]" />,
    skills: [
      { name: 'Git', icon: <FaGitAlt className="text-[#F05032]" /> },
      { name: 'GitHub', icon: <FaGithub className="text-slate-900 dark:text-white" /> },
      { name: 'VS Code', icon: <VsCodeIcon /> },
      { name: 'Jupyter Notebook', icon: <JupyterIcon /> }
    ]
  }
];

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section
      id="skills"
      className="py-24 bg-slate-50 dark:bg-[#0a192f] text-slate-800 dark:text-slate-100 transition-colors duration-300 relative overflow-hidden"
    >
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-bold tracking-tight font-sans"
          >
            My <span className="text-[#0ea5e9] dark:text-[#00f0ff]">Skills</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-[#0ea5e9] dark:bg-[#00f0ff] mx-auto mt-4 rounded-full"
          ></motion.div>
          <p className="mt-6 text-lg text-slate-600 dark:text-slate-400 font-sans">
            Technical proficiencies, programming languages, analysis platforms, and core cyber operations.
          </p>
        </div>

        {/* Categories Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="p-6 rounded-2xl glass-card-light dark:glass-card-dark border border-slate-200/50 dark:border-slate-800/80 shadow-md flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3 pb-4 mb-6 border-b border-slate-200/60 dark:border-slate-800/50">
                  <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-100 flex items-center justify-center">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white font-sans">
                    {category.title}
                  </h3>
                </div>

                {/* Skills Badges List */}
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <motion.div
                      key={skill.name}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="px-4 py-2.5 rounded-xl bg-white dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-700/40 shadow-sm flex items-center gap-2.5 text-sm font-semibold text-slate-700 dark:text-slate-200 transition-colors hover:border-[#0ea5e9] dark:hover:border-[#00f0ff] hover:text-slate-900 dark:hover:text-white hover:shadow-md cursor-default"
                    >
                      <span className="text-lg flex items-center justify-center">{skill.icon}</span>
                      <span>{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
