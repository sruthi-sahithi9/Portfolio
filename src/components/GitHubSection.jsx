import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaCodeBranch, FaRegFolderOpen } from 'react-icons/fa';
import { GitPullRequest, Award, GitCommit } from 'lucide-react';

export default function GitHubSection() {
  const [hoveredSquare, setHoveredSquare] = useState(null);

  // Generate mock contributions data for the last 52 weeks (approx 364 days)
  const contributions = useMemo(() => {
    const data = [];
    const baseDate = new Date();
    baseDate.setDate(baseDate.getDate() - 364);

    for (let i = 0; i < 364; i++) {
      const date = new Date(baseDate);
      date.setDate(date.getDate() + i);
      
      // Random contributions count with higher weight on 0-2 range
      const randomValue = Math.random();
      let count = 0;
      if (randomValue > 0.45 && randomValue <= 0.75) count = Math.floor(Math.random() * 3) + 1; // 1-3
      else if (randomValue > 0.75 && randomValue <= 0.9) count = Math.floor(Math.random() * 4) + 4; // 4-7
      else if (randomValue > 0.9) count = Math.floor(Math.random() * 5) + 8; // 8-12

      // Choose color grade
      let level = 0;
      if (count > 0 && count <= 3) level = 1;
      else if (count > 3 && count <= 7) level = 2;
      else if (count > 7 && count <= 10) level = 3;
      else if (count > 10) level = 4;

      data.push({
        date: date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        count,
        level
      });
    }
    return data;
  }, []);

  // Format contributions into a 52-week array (columns) of 7 days (rows)
  const grid = useMemo(() => {
    const cols = [];
    for (let i = 0; i < 52; i++) {
      cols.push(contributions.slice(i * 7, (i + 1) * 7));
    }
    return cols;
  }, [contributions]);

  const stats = [
    { label: 'Total Repositories', value: '18', icon: <FaRegFolderOpen className="w-5 h-5 text-indigo-500" /> },
    { label: 'Total Commits (2026)', value: '342', icon: <GitCommit className="w-5 h-5 text-emerald-500 animate-pulse" /> },
    { label: 'Pull Requests Opened', value: '47', icon: <GitPullRequest className="w-5 h-5 text-[#0ea5e9]" /> },
    { label: 'Contributions (Yearly)', value: '628', icon: <Award className="w-5 h-5 text-amber-500" /> }
  ];

  return (
    <section
      id="github"
      className="py-24 bg-slate-50 dark:bg-[#0a192f] text-slate-800 dark:text-slate-100 transition-colors duration-300 relative overflow-hidden"
    >
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
            GitHub <span className="text-[#0ea5e9] dark:text-[#00f0ff]">Activity</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-[#0ea5e9] dark:bg-[#00f0ff] mx-auto mt-4 rounded-full"
          ></motion.div>
          <p className="mt-6 text-lg text-slate-600 dark:text-slate-400 font-sans">
            Weekly code commitments, project versioning, and open source records.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Stats Column */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-4">
            {stats.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="p-5 rounded-2xl border border-slate-200/60 dark:border-slate-800/80 bg-white/60 dark:bg-slate-900/40 glass-card-light dark:glass-card-dark shadow-sm flex flex-col justify-between"
              >
                <div className="p-2.5 rounded-lg bg-slate-100 dark:bg-slate-800 w-fit mb-3">
                  {stat.icon}
                </div>
                <div>
                  <p className="text-2xl font-extrabold text-slate-950 dark:text-white font-mono">
                    {stat.value}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-sans font-semibold mt-1">
                    {stat.label}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Graph Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-8 p-6 sm:p-8 rounded-2xl border border-slate-200/50 dark:border-slate-800/80 bg-white/60 dark:bg-slate-900/40 glass-card-light dark:glass-card-dark shadow-md"
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
              <div>
                <h3 className="text-lg font-bold text-slate-950 dark:text-white font-sans flex items-center gap-2">
                  <FaGithub className="w-5 h-5" /> Contribution Calendar
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  Visual snapshot of developer commitments over the past 365 days.
                </p>
              </div>
              <a
                href="https://github.com/sruthi-sahithi9"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-slate-900 hover:bg-slate-850 dark:bg-[#00f0ff] dark:text-[#0a192f] dark:hover:bg-cyan-400 transition-colors flex items-center justify-center gap-1.5 w-fit cursor-pointer shadow-sm"
              >
                <FaGithub className="w-4 h-4" /> View Profile
              </a>
            </div>

            {/* Simulated Grid Container */}
            <div className="relative">
              <div className="flex gap-[3px] overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-slate-300 dark:scrollbar-thumb-slate-800 scrollbar-track-transparent">
                {grid.map((col, cIdx) => (
                  <div key={cIdx} className="flex flex-col gap-[3px] shrink-0">
                    {col.map((day, dIdx) => {
                      // Define color grades based on activity level
                      let bgClass = 'bg-slate-200 dark:bg-slate-800'; // level 0
                      if (day.level === 1) bgClass = 'bg-[#9be9a8] dark:bg-[#0e4429]';
                      if (day.level === 2) bgClass = 'bg-[#40c463] dark:bg-[#006d32]';
                      if (day.level === 3) bgClass = 'bg-[#30a14e] dark:bg-[#26a641]';
                      if (day.level === 4) bgClass = 'bg-[#216e39] dark:bg-[#39d353]';

                      return (
                        <div
                          key={dIdx}
                          onMouseEnter={() => setHoveredSquare(day)}
                          onMouseLeave={() => setHoveredSquare(null)}
                          className={`w-[11px] h-[11px] rounded-[2px] ${bgClass} transition-colors duration-150 hover:ring-2 hover:ring-[#0ea5e9] dark:hover:ring-[#00f0ff] cursor-pointer`}
                        ></div>
                      );
                    })}
                  </div>
                ))}
              </div>

              {/* Tooltip Overlay */}
              <div className="h-6 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mt-2">
                <div className="flex items-center gap-1.5">
                  <span>Less</span>
                  <div className="w-[10px] h-[10px] rounded-[1px] bg-slate-200 dark:bg-slate-800"></div>
                  <div className="w-[10px] h-[10px] rounded-[1px] bg-[#9be9a8] dark:bg-[#0e4429]"></div>
                  <div className="w-[10px] h-[10px] rounded-[1px] bg-[#40c463] dark:bg-[#006d32]"></div>
                  <div className="w-[10px] h-[10px] rounded-[1px] bg-[#30a14e] dark:bg-[#26a641]"></div>
                  <div className="w-[10px] h-[10px] rounded-[1px] bg-[#216e39] dark:bg-[#39d353]"></div>
                  <span>More</span>
                </div>

                {hoveredSquare ? (
                  <motion.span
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="font-semibold text-slate-800 dark:text-slate-200"
                  >
                    {hoveredSquare.count === 0 ? 'No' : hoveredSquare.count} {hoveredSquare.count === 1 ? 'contribution' : 'contributions'} on {hoveredSquare.date}
                  </motion.span>
                ) : (
                  <span>Hover grid cells to view details</span>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
