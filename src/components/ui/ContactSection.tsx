"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LiveLocation from '@/components/ui/LiveLocation';

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (response.ok && result.success) {
        setSubmitStatus('success');
        (e.target as HTMLFormElement).reset();
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  return (
    <section
      id="contact"
      className="relative px-8 md:px-margin-desktop py-section-gap scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-stack-lg border-l-4 border-primary pl-6"
        >
          <h2 className="font-label-caps text-label-caps text-primary mb-2 uppercase tracking-widest">
            Contact
          </h2>
          <h3 className="font-headline-md text-headline-md text-on-surface mt-2">
            Let&apos;s build something together.
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
          {/* Command Cards */}
          <div className="lg:col-span-4 flex flex-col gap-stack-md">
            <motion.h4
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="font-label-caps text-label-caps text-on-surface-variant mb-4"
            >
              COMMAND CENTER
            </motion.h4>

            {[
              {
                label: 'NETWORK / 01',
                title: 'LINKEDIN',
                url: 'https://www.linkedin.com/in/rajiv-agarwal221/',
                icon: 'hub',
                sub: 'linkedin.com/in/rajiv-agarwal221/',
              },
              {
                label: 'SOURCE / 02',
                title: 'GITHUB',
                url: 'https://github.com/workspace220106',
                icon: 'code',
                sub: 'github.com/workspace220106',
              },
              {
                label: 'DIRECT / 03',
                title: 'EMAIL',
                url: 'mailto:workspace220106@gmail.com',
                icon: 'mail_outline',
                sub: 'workspace220106@gmail.com',
              },
            ].map((link, i) => (
              <motion.a
                key={i}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * (i + 1) }}
                whileHover={{ scale: 1.02, x: 5 }}
                className="command-card glass-card p-8 group transition-all duration-300 flex justify-between items-center cursor-pointer"
              >
                <div className="flex flex-col gap-2">
                  <span className="font-label-caps text-label-caps text-on-surface-variant">
                    {link.label}
                  </span>
                  <h4
                    className="font-headline-md text-headline-md text-primary"
                    style={{ textShadow: 'rgba(192, 193, 255, 0.2) 0px 0px 10px' }}
                  >
                    {link.title}
                  </h4>
                  <span className="text-[10px] text-on-surface-variant opacity-60 font-mono mt-1">
                    {link.sub}
                  </span>
                </div>
                <span className="material-symbols-outlined text-primary text-4xl group-hover:text-white transition-colors duration-300">
                  {link.icon}
                </span>
              </motion.a>
            ))}

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-stack-md p-8 border border-white/5 bg-surface-container-lowest"
            >
              <p className="font-body-md text-body-md text-on-surface-variant italic opacity-60">
                &quot;Technology is best when it brings people together.&quot;
              </p>
            </motion.div>
          </div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-8 glass-card p-8 md:p-12"
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="flex flex-col gap-3 group">
                  <label className="font-label-caps text-label-caps text-on-surface-variant group-focus-within:text-primary transition-colors">
                    IDENTIFICATION / NAME
                  </label>
                  <input
                    name="name"
                    required
                    className="bg-transparent border-0 border-b border-white/10 px-0 py-4 font-body-lg text-body-lg focus:ring-0 focus:border-primary transition-all placeholder:text-white/10 text-on-surface outline-none"
                    placeholder="Commander Name"
                    type="text"
                  />
                </div>
                <div className="flex flex-col gap-3 group">
                  <label className="font-label-caps text-label-caps text-on-surface-variant group-focus-within:text-primary transition-colors">
                    COMMUNICATION / EMAIL
                  </label>
                  <input
                    name="email"
                    required
                    className="bg-transparent border-0 border-b border-white/10 px-0 py-4 font-body-lg text-body-lg focus:ring-0 focus:border-primary transition-all placeholder:text-white/10 text-on-surface outline-none"
                    placeholder="access@network.com"
                    type="email"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-3 group">
                <label className="font-label-caps text-label-caps text-on-surface-variant group-focus-within:text-primary transition-colors">
                  PROJECT VISION
                </label>
                <textarea
                  name="message"
                  required
                  className="bg-transparent border-0 border-b border-white/10 px-0 py-4 font-body-lg text-body-lg focus:ring-0 focus:border-primary transition-all placeholder:text-white/10 text-on-surface resize-none outline-none"
                  placeholder="Describe the breakthrough..."
                  rows={4}
                />
              </div>
              <div className="flex flex-col md:flex-row items-center gap-8 mt-4">
                <button
                  disabled={isSubmitting}
                  className={`w-full md:w-auto font-label-caps text-label-caps px-12 py-6 transition-all duration-300 active:scale-95 flex items-center justify-center gap-3 group ${
                    submitStatus === 'success'
                      ? 'bg-green-500/20 text-green-400 border-green-500/40'
                      : 'bg-primary-container/20 text-primary border border-primary/40 hover:bg-primary-container/30 hover:border-primary'
                  }`}
                  type="submit"
                >
                  {isSubmitting
                    ? 'TRANSMITTING...'
                    : submitStatus === 'success'
                      ? 'TRANSMISSION COMPLETE'
                      : 'INITIATE TRANSMISSION'}
                  <span
                    className={`material-symbols-outlined text-[18px] transition-all ${
                      isSubmitting ? 'animate-pulse' : 'group-hover:translate-x-1'
                    }`}
                  >
                    {submitStatus === 'success' ? 'check_circle' : 'send'}
                  </span>
                </button>

                <AnimatePresence>
                  {submitStatus === 'error' && (
                    <motion.span
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0 }}
                      className="text-red-400 font-label-caps text-[10px]"
                    >
                      TRANSMISSION FAILED. PLEASE TRY AGAIN.
                    </motion.span>
                  )}
                </AnimatePresence>
              </div>
            </form>
          </motion.div>
        </div>

        {/* Live location banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-section-gap"
        >
          <div className="relative w-full h-[280px] md:h-[360px] overflow-hidden glass-card group">
            <img
              alt="Global connectivity grid"
              className="w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-all duration-700 scale-105 group-hover:scale-100"
              src="/location-bg.png"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8">
              <h5 className="font-label-caps text-label-caps text-on-surface mb-2">
                CURRENT LOCATION
              </h5>
              <div className="flex items-center gap-2">
                <LiveLocation />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
