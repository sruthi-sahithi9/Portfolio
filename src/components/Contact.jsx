import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MapPin, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle, sending, success, error
  const [toastMessage, setToastMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      setToastMessage('Please fill out all fields.');
      setTimeout(() => setStatus('idle'), 3000);
      return;
    }

    setStatus('sending');

    // Simulate database write or API endpoint call
    setTimeout(() => {
      setStatus('success');
      setToastMessage('Thank you! Your message was sent successfully.');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 4000);
    }, 1500);
  };

  const contactDetails = [
    {
      icon: <Mail className="w-5 h-5 text-[#0ea5e9] dark:text-[#00f0ff]" />,
      label: 'Email',
      value: 'srruthisahithi118@gmail.com',
      href: 'mailto:srruthisahithi118@gmail.com'
    },
    {
      icon: <FaLinkedin className="w-5 h-5 text-indigo-500 dark:text-indigo-400" />,
      label: 'LinkedIn',
      value: 'linkedin.com/in/sruthi-sahithi9',
      href: 'https://www.linkedin.com/in/sruthi-sahithi9'
    },
    {
      icon: <FaGithub className="w-5 h-5 text-slate-800 dark:text-white" />,
      label: 'GitHub',
      value: 'github.com/sruthi-sahithi9',
      href: 'https://github.com/sruthi-sahithi9'
    },
    {
      icon: <MapPin className="w-5 h-5 text-emerald-500 dark:text-emerald-400" />,
      label: 'Location',
      value: 'Andhra Pradesh, India',
      href: '#'
    }
  ];

  return (
    <section
      id="contact"
      className="py-24 bg-slate-50 dark:bg-[#0a192f] text-slate-800 dark:text-slate-100 transition-colors duration-300 relative overflow-hidden"
    >
      {/* Toast Notification */}
      <AnimatePresence>
        {status === 'success' && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.9 }}
            className="fixed top-6 right-6 z-50 flex items-center gap-3 px-5 py-4 bg-emerald-500 text-white rounded-2xl shadow-xl shadow-emerald-500/10 border border-emerald-400/25"
          >
            <CheckCircle2 className="w-5 h-5 shrink-0" />
            <p className="text-sm font-semibold">{toastMessage}</p>
          </motion.div>
        )}
        {status === 'error' && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.9 }}
            className="fixed top-6 right-6 z-50 flex items-center gap-3 px-5 py-4 bg-rose-500 text-white rounded-2xl shadow-xl shadow-rose-500/10 border border-rose-450/25"
          >
            <AlertCircle className="w-5 h-5 shrink-0" />
            <p className="text-sm font-semibold">{toastMessage}</p>
          </motion.div>
        )}
      </AnimatePresence>

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
            Get In <span className="text-[#0ea5e9] dark:text-[#00f0ff]">Touch</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-[#0ea5e9] dark:bg-[#00f0ff] mx-auto mt-4 rounded-full"
          ></motion.div>
          <p className="mt-6 text-lg text-slate-600 dark:text-slate-400 font-sans">
            Have a project, query, or opportunity? Drop me a message directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Contact details card list */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-6"
          >
            <h3 className="text-2xl font-bold text-slate-950 dark:text-white font-sans mb-4">
              Let's connect & collaborate!
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
              I am open to full-time data analyst roles, cybersecurity auditing collaborations, and internship positions. Connect with me directly through any of these platforms.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:grid-cols-1">
              {contactDetails.map((detail) => (
                <a
                  key={detail.label}
                  href={detail.href}
                  target={detail.href.startsWith('http') ? '_blank' : undefined}
                  rel={detail.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="p-4 rounded-xl border border-slate-200/50 dark:border-slate-800/80 bg-white/60 dark:bg-slate-900/40 glass-card-light dark:glass-card-dark flex items-center gap-4 hover:border-[#0ea5e9] dark:hover:border-[#00f0ff] hover:shadow-sm hover:-translate-y-0.5 transition-all duration-300"
                >
                  <div className="p-3 rounded-lg bg-slate-100 dark:bg-slate-800 shrink-0">
                    {detail.icon}
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                      {detail.label}
                    </p>
                    <p className="text-sm font-semibold text-slate-700 dark:text-slate-200 mt-0.5">
                      {detail.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Contact form column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <form
              onSubmit={handleSubmit}
              className="p-6 sm:p-8 rounded-3xl border border-slate-200/50 dark:border-slate-800/80 bg-white/60 dark:bg-slate-900/40 glass-card-light dark:glass-card-dark shadow-md space-y-5"
            >
              <div>
                <label htmlFor="name" className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-sm text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-[#0ea5e9] dark:focus:ring-[#00f0ff] transition-all"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-sm text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-[#0ea5e9] dark:focus:ring-[#00f0ff] transition-all"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  placeholder="How can I help you?"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-sm text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-[#0ea5e9] dark:focus:ring-[#00f0ff] transition-all resize-none"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full py-3.5 px-6 rounded-xl font-semibold text-white bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 dark:from-[#00f0ff] dark:to-indigo-600 hover:opacity-95 shadow-md flex items-center justify-center gap-2 cursor-pointer border border-slate-700/50 dark:border-none disabled:opacity-50 transition-all duration-300"
              >
                {status === 'sending' ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  <>
                    <Send className="w-4 h-4" /> Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
