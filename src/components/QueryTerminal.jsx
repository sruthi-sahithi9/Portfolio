import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal as TerminalIcon, Play, ChevronRight, X, Minus, Square } from 'lucide-react';

const PRESETS = [
  { cmd: 'SELECT * FROM profile;', desc: 'Query professional summary' },
  { cmd: 'python run_sentiment_model.py', desc: 'Simulate sentiment model execution' },
  { cmd: 'nmap -sV security_audit', desc: 'Simulate cybersecurity audit' },
  { cmd: 'cat certifications.txt', desc: 'Display certifications' }
];

export default function QueryTerminal() {
  const [history, setHistory] = useState([
    { type: 'input', text: 'help' },
    { type: 'output', text: 'Welcome to Sruthi\'s portfolio terminal database v1.0.4. Ready for queries.\n\nType a command or select one of the quick queries below to fetch records.' }
  ]);
  const [inputVal, setInputVal] = useState('');
  const [isSimulating, setIsSimulating] = useState(false);
  const terminalEndRef = useRef(null);
  const isFirstMount = useRef(true);

  useEffect(() => {
    // Scroll to bottom on updates, but bypass on initial mount to prevent page auto-scrolling
    if (isFirstMount.current) {
      isFirstMount.current = false;
      return;
    }
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const simulateCommand = async (command) => {
    setIsSimulating(true);
    const cleanedCmd = command.trim();

    setHistory((prev) => [...prev, { type: 'input', text: command }]);

    // Small delay to simulate system latency
    await new Promise((resolve) => setTimeout(resolve, 600));

    if (cleanedCmd === 'help') {
      setHistory((prev) => [
        ...prev,
        {
          type: 'output',
          text: `Available Commands:
  - SELECT * FROM profile;     : Queries profile details (Name, Role, Location, etc.)
  - python run_sentiment_model.py : Simulates training/evaluation of Twitter Sentiment Model
  - nmap -sV security_audit   : Performs a security sweep of local ports (Cybersecurity demo)
  - cat certifications.txt     : Lists all verified credentials
  - help                      : Shows this instruction set
  - clear                     : Wipes the terminal history`
        }
      ]);
    } else if (cleanedCmd === 'clear') {
      setHistory([]);
    } else if (cleanedCmd === 'SELECT * FROM profile;' || cleanedCmd.toLowerCase() === 'select * from profile;') {
      setHistory((prev) => [
        ...prev,
        {
          type: 'output',
          text: `+--------------------+---------------------------------------------------+
| Attribute          | Value                                             |
+--------------------+---------------------------------------------------+
| Name               | Bandaru Sruthi Sahithi                            |
| Current Role       | Data Analytics Intern @ ApexPlanet Software        |
| Focus Area         | Data Engineering, Business Intelligence, Security  |
| Education          | B.Tech CSE (CyberSecurity) - VIIT (CGPA: 8.54)     |
| Main Tech Stack    | Python, SQL (MySQL/SQLite), Power BI, Excel       |
| Core Objective     | Deriving actionable insights from complex systems  |
+--------------------+---------------------------------------------------+
1 row in set (0.04 sec)`
        }
      ]);
    } else if (cleanedCmd === 'python run_sentiment_model.py' || cleanedCmd.toLowerCase() === 'python run_sentiment_model.py') {
      // Step-by-step model execution simulation
      setHistory((prev) => [...prev, { type: 'system', text: 'Initializing Sentiment Analysis Pipeline...' }]);
      await new Promise((r) => setTimeout(r, 605));
      setHistory((prev) => [...prev, { type: 'system', text: 'Loading NLTK corpus & cleaning emoji patterns...' }]);
      await new Promise((r) => setTimeout(r, 805));
      setHistory((prev) => [...prev, { type: 'system', text: 'Vectorizing text: 12,450 tweets loaded into memory.' }]);
      await new Promise((r) => setTimeout(r, 705));
      
      // Print epochs
      for (let i = 1; i <= 3; i++) {
        setHistory((prev) => [...prev, { type: 'system', text: `Epoch ${i}/3 - loss: ${0.28 - (i * 0.07)} - accuracy: ${0.81 + (i * 0.03)}` }]);
        await new Promise((r) => setTimeout(r, 505));
      }

      setHistory((prev) => [
        ...prev,
        {
          type: 'output',
          text: `[Model Run Complete]
---------------------------------------
Evaluation Metrics (Testing Set):
- Accuracy  : 88.54% (Accuary metrics verified)
- F1-Score  : 0.8672
- Precision : 0.8711
- Recall    : 0.8633

Hashtag & Emoji mapping layers loaded. Real-time inference dashboard: Online.
---------------------------------------`
        }
      ]);
    } else if (cleanedCmd === 'nmap -sV security_audit' || cleanedCmd.toLowerCase() === 'nmap -sV security_audit') {
      setHistory((prev) => [...prev, { type: 'system', text: 'Starting Nmap 9.00 ( https://nmap.org ) at 2026-07-15...' }]);
      await new Promise((r) => setTimeout(r, 605));
      setHistory((prev) => [...prev, { type: 'system', text: 'Scanning local profile endpoint (127.0.0.1)...' }]);
      await new Promise((r) => setTimeout(r, 905));

      setHistory((prev) => [
        ...prev,
        {
          type: 'output',
          text: `Nmap scan report for localhost (127.0.0.1)
Host is up (0.00015s latency).
Not shown: 996 closed ports

PORT     STATE SERVICE      VERSION
22/tcp   open  ssh          OpenSSH 9.2p1 (Security protocol active)
80/tcp   open  http         Nginx/1.24.0 (Portfolio webserver active)
1433/tcp open  ms-sql-s     Microsoft SQL Server 2022 (Data warehousing)
3306/tcp open  mysql        MySQL Community Server 8.0.32 (Relational DB)

Device Type: General Purpose
Running: Linux 5.x | Windows 11
OS Details: Node environment under hypervisor.
Network Security Assessment: Compliant. No vulnerabilities discovered.

Nmap done: 1 IP address (1 host up) scanned in 1.54 seconds`
        }
      ]);
    } else if (cleanedCmd === 'cat certifications.txt' || cleanedCmd.toLowerCase() === 'cat certifications.txt') {
      setHistory((prev) => [
        ...prev,
        {
          type: 'output',
          text: `Retrieving certified records...
===================================================
1. Nlite Solutions: Python & Machine Learning
   - Status: Active / Verified
   - Focus: Predictive modeling, script automations.

2. Oracle Certified Associate: MySQL
   - Status: Active / Verified
   - Focus: Relational database design, query optimization.
===================================================`
        }
      ]);
    } else {
      setHistory((prev) => [
        ...prev,
        {
          type: 'error',
          text: `Command not found: "${cleanedCmd}". Type "help" for a list of available queries.`
        }
      ]);
    }

    setIsSimulating(false);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!inputVal.trim() || isSimulating) return;
    simulateCommand(inputVal);
    setInputVal('');
  };

  return (
    <section id="terminal-section" className="py-20 bg-white dark:bg-[#0b0f19] text-slate-800 dark:text-slate-100 transition-colors duration-300 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl font-bold tracking-tight font-sans"
          >
            Interactive <span className="text-[#0ea5e9] dark:text-[#00f0ff]">Portfolio Database</span>
          </motion.h2>
          <div className="h-1 bg-[#0ea5e9] dark:bg-[#00f0ff] w-20 mx-auto mt-3 rounded-full"></div>
          <p className="mt-4 text-sm text-slate-600 dark:text-slate-400 font-sans">
            Verify credentials, trigger machine learning script simulations, or audit ports in real-time.
          </p>
        </div>

        {/* Terminal Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 bg-[#0c101a] text-slate-300 font-mono text-xs sm:text-sm"
        >
          {/* macOS Title Bar */}
          <div className="bg-[#141b2a] px-4 py-3 flex items-center justify-between border-b border-slate-850">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-rose-500 flex items-center justify-center hover:opacity-85 cursor-pointer">
                <X className="w-2 h-2 text-rose-900 opacity-0 hover:opacity-100" />
              </span>
              <span className="w-3 h-3 rounded-full bg-amber-500 flex items-center justify-center hover:opacity-85 cursor-pointer">
                <Minus className="w-2 h-2 text-amber-900 opacity-0 hover:opacity-100" />
              </span>
              <span className="w-3 h-3 rounded-full bg-emerald-500 flex items-center justify-center hover:opacity-85 cursor-pointer">
                <Square className="w-1.5 h-1.5 text-emerald-900 opacity-0 hover:opacity-100" />
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-slate-500 font-sans text-xs">
              <TerminalIcon className="w-3.5 h-3.5 text-[#0ea5e9] dark:text-[#00f0ff]" />
              <span>sahithi@viit-desktop:~ (bash)</span>
            </div>
            <div className="w-10"></div>
          </div>

          {/* Terminal Console Output */}
          <div className="p-4 sm:p-6 h-[28rem] overflow-y-auto space-y-3.5 scrollbar-thin scrollbar-thumb-slate-850 scrollbar-track-transparent">
            {history.map((log, index) => (
              <div key={index} className="leading-relaxed whitespace-pre-wrap">
                {log.type === 'input' && (
                  <div className="flex items-start text-emerald-400">
                    <ChevronRight className="w-4 h-4 mt-0.5 shrink-0" />
                    <span className="font-semibold">{log.text}</span>
                  </div>
                )}
                {log.type === 'output' && (
                  <div className="text-slate-350 select-text selection:bg-[#00f0ff]/20 font-mono">
                    {log.text}
                  </div>
                )}
                {log.type === 'system' && (
                  <div className="text-cyan-500 font-semibold italic flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-ping"></span>
                    <span>{log.text}</span>
                  </div>
                )}
                {log.type === 'error' && (
                  <div className="text-rose-500 font-medium">
                    {log.text}
                  </div>
                )}
              </div>
            ))}

            {isSimulating && (
              <div className="flex items-center gap-1.5 text-slate-500">
                <span className="w-1.5 h-1.5 bg-slate-500 rounded-full animate-bounce"></span>
                <span className="w-1.5 h-1.5 bg-slate-500 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                <span className="w-1.5 h-1.5 bg-slate-500 rounded-full animate-bounce [animation-delay:0.4s]"></span>
              </div>
            )}

            <div ref={terminalEndRef} />
          </div>

          {/* Terminal Input Form */}
          <form
            onSubmit={handleFormSubmit}
            className="flex items-center border-t border-slate-850 bg-[#0d1322] px-4 py-3"
          >
            <ChevronRight className="w-4 h-4 text-[#0ea5e9] dark:text-[#00f0ff] shrink-0" />
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              disabled={isSimulating}
              placeholder='Type a command (e.g. "SELECT * FROM profile;") or use presets below...'
              className="flex-grow bg-transparent border-none outline-none focus:ring-0 text-slate-255 placeholder-slate-600 ml-1.5 text-xs sm:text-sm font-mono"
            />
            <button
              type="submit"
              disabled={isSimulating || !inputVal.trim()}
              className="p-1.5 rounded bg-slate-800 text-slate-400 hover:text-white dark:hover:text-[#00f0ff] disabled:opacity-30 cursor-pointer transition-colors"
              aria-label="Run command"
            >
              <Play className="w-3.5 h-3.5" />
            </button>
          </form>
        </motion.div>

        {/* Quick Presets Selection */}
        <div className="mt-5">
          <p className="text-xs font-bold text-slate-400 dark:text-slate-550 uppercase tracking-wider mb-2.5">
            Quick Queries (Click to run):
          </p>
          <div className="flex flex-wrap gap-2.5">
            {PRESETS.map((preset) => (
              <button
                key={preset.cmd}
                onClick={() => {
                  if (!isSimulating) {
                    simulateCommand(preset.cmd);
                  }
                }}
                disabled={isSimulating}
                className="px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-850 bg-slate-50 hover:bg-slate-100 dark:bg-slate-900/60 dark:hover:bg-slate-850 text-xs text-slate-700 dark:text-slate-355 hover:text-[#0ea5e9] dark:hover:text-[#00f0ff] hover:border-[#0ea5e9]/50 dark:hover:border-[#00f0ff]/50 disabled:opacity-40 transition-all cursor-pointer font-mono"
                title={preset.desc}
              >
                {preset.cmd}
              </button>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
