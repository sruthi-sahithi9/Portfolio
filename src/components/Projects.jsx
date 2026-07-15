import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { FiTrendingUp } from 'react-icons/fi';

const projects = [
  {
    title: 'Twitter Sentiment Analysis',
    image: './images/netflix_churn.jpg',
    description: 'A machine learning and data analysis pipeline that preprocesses raw tweets to extract emotional intelligence, hashtags, and emoji distributions.',
    technologies: ['Python', 'Pandas', 'NLTK', 'Regex', 'Scikit-Learn', 'Matplotlib'],
    businessInsights: 'Evaluated model performance using Accuracy, F1-Score, ROC curve, and confusion matrix, adding custom emoji sentiment mapping layers for enhanced insight resolution.',
    github: 'https://github.com/sruthi-sahithi9',
    demo: 'https://github.com/sruthi-sahithi9'
  },
  {
    title: 'Sales & E-commerce Analytics',
    image: './images/sales_retail.jpg',
    description: 'Interactive commercial reporting dashboard that tracks retail revenues, e-commerce growth rates, and region-wise profitability.',
    technologies: ['Power BI', 'SQL', 'Python', 'A/B Testing', 'Excel'],
    businessInsights: 'Delivered insights on retail sales trends and landing page experiments, identifying underperforming regions to boost resource reallocation ROI.',
    github: 'https://github.com/sruthi-sahithi9',
    demo: 'https://github.com/sruthi-sahithi9'
  },
  {
    title: 'Student Performance Dashboard',
    image: './images/student_hr.jpg',
    description: 'An interactive analytical dashboard tracking student grades, attendance patterns, and overall academic performance metrics.',
    technologies: ['Power BI', 'DAX', 'Excel', 'Data Cleaning'],
    businessInsights: 'Identified key correlations between low attendance and academic risks, enabling school systems to execute early counseling interventions.',
    github: 'https://github.com/sruthi-sahithi9',
    demo: 'https://github.com/sruthi-sahithi9'
  },
  {
    title: 'Customer Churn Analysis',
    image: './images/netflix_churn.jpg',
    description: 'Exploratory data analysis and predictive indicators pointing out telecom customer churn based on historical usage plans.',
    technologies: ['Python', 'Pandas', 'NumPy', 'SQLite', 'Statistics'],
    businessInsights: 'Uncovered that users on month-to-month contracts had a 42% higher churn risk, suggesting custom retention packages and landing page optimization.',
    github: 'https://github.com/sruthi-sahithi9',
    demo: 'https://github.com/sruthi-sahithi9'
  },
  {
    title: 'HR Attrition Dashboard',
    image: './images/student_hr.jpg',
    description: 'Workforce analysis dashboard focusing on employee retention, tenure distributions, performance ratings, and attrition trends.',
    technologies: ['Power BI', 'DAX', 'SQL Server', 'Excel'],
    businessInsights: 'Revealed that employees with tenure between 2-3 years in technical roles had a 30% higher attrition rate due to salary gaps.',
    github: 'https://github.com/sruthi-sahithi9',
    demo: 'https://github.com/sruthi-sahithi9'
  },
  {
    title: 'Retail Inventory Dashboard',
    image: './images/sales_retail.jpg',
    description: 'Business Intelligence dashboard displaying inventory turnover, sales growth, and supplier performance indicators for a retail brand.',
    technologies: ['Tableau', 'SQL', 'Excel', 'Python'],
    businessInsights: 'Optimized inventory stocking rates for top 10 products, reducing warehousing carry costs by 12% without stock-outs.',
    github: 'https://github.com/sruthi-sahithi9',
    demo: 'https://github.com/sruthi-sahithi9'
  }
];

export default function Projects() {
  return (
    <section
      id="projects"
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
            My <span className="text-[#0ea5e9] dark:text-[#00f0ff]">Projects</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-[#0ea5e9] dark:bg-[#00f0ff] mx-auto mt-4 rounded-full"
          ></motion.div>
          <p className="mt-6 text-lg text-slate-600 dark:text-slate-400 font-sans">
            A curation of dashboard designs, exploratory data analytics, and business intelligence operations.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="flex flex-col h-full rounded-2xl overflow-hidden border border-slate-200/50 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-900/40 glass-card-light dark:glass-card-dark transition-all duration-300 group shadow-md"
            >
              {/* Project Image Container */}
              <div className="relative h-48 overflow-hidden bg-slate-950">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 group-hover:opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60"></div>
                <span className="absolute bottom-3 left-4 text-xs font-bold uppercase tracking-wider text-[#00f0ff] bg-slate-900/80 px-2.5 py-1 rounded-md backdrop-blur-sm border border-[#00f0ff]/20">
                  Dashboard / Case Study
                </span>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2.5 group-hover:text-[#0ea5e9] dark:group-hover:text-[#00f0ff] transition-colors font-sans">
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Technologies Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-bold px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200/50 dark:border-slate-700/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Business Insights Box */}
                  <div className="p-3.5 rounded-xl bg-slate-100/80 dark:bg-slate-800/30 border border-slate-200/50 dark:border-slate-800/80 mb-6 flex items-start gap-2.5">
                    <FiTrendingUp className="w-5 h-5 text-emerald-500 dark:text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Business Impact</p>
                      <p className="text-xs text-slate-600 dark:text-slate-300 italic mt-0.5 leading-relaxed">
                        "{project.businessInsights}"
                      </p>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-4 pt-4 border-t border-slate-200/50 dark:border-slate-800/80">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2 px-3 rounded-lg border border-slate-300 dark:border-slate-700 hover:border-[#0ea5e9] dark:hover:border-[#00f0ff] text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <FaGithub className="w-4 h-4" /> GitHub
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2 px-3 rounded-lg bg-[#0ea5e9] dark:bg-[#0ea5e9] hover:bg-[#00f0ff] dark:hover:bg-[#00f0ff] text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <FaExternalLinkAlt className="w-3.5 h-3.5" /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
