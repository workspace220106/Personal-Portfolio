"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Scene from '@/components/canvas/Scene';
import VoidReveal from '@/components/ui/VoidReveal';
import RotatingText from '@/components/ui/RotatingText';
import HeroPortrait from '@/components/ui/HeroPortrait';
import ContactSection from '@/components/ui/ContactSection';
import ProjectScroll from '@/components/ui/ProjectScroll';
import {
  experiences,
  projects,
  techStack,
  narrativePillars,
} from '@/data/portfolioData';

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
};

export default function Home() {
  return (
    <VoidReveal>
      <Scene />
      <main className="relative z-10">
        {/* Hero Section — Alex-style: HI I'M <NAME> wrapping over a centered portrait */}
        <section className="relative min-h-screen px-6 md:px-margin-desktop pt-28 md:pt-24 pb-16 overflow-hidden">
          <div className="absolute inset-0 glow-bg pointer-events-none" />

          <div className="relative z-10 max-w-7xl mx-auto">

            {/* Big headline — full width, sits BEHIND the portrait */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10 font-headline-xl font-bold leading-[0.88] tracking-[-0.04em] text-[64px] sm:text-[96px] md:text-[140px] lg:text-[180px] xl:text-[210px]"
            >
              <span className="text-fade-dark">HI, I&apos;M </span>
              <span className="text-primary">RAJIV</span>
            </motion.h1>

            {/* Portrait layer — pulled up with negative margin, sits ON TOP of the headline */}
            <div className="relative mt-[-40px] sm:mt-[-70px] md:mt-[-110px] lg:mt-[-150px]">
              <div className="relative z-30 flex justify-center">
                <HeroPortrait />
              </div>

              {/* Subcopy (left) + CTA (right) layered on top of portrait at mid-torso height */}
              <div className="pointer-events-none absolute inset-x-0 top-[42%] md:top-[38%] z-20 flex items-start justify-between gap-6 md:gap-10 px-0">
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="pointer-events-auto max-w-[180px] md:max-w-[240px] font-label-caps text-[11px] md:text-[12px] tracking-[0.2em] uppercase text-on-surface-variant leading-[1.9]"
                >
                  A SOFTWARE / IT ENGINEER PASSIONATE ABOUT BUILDING INTELLIGENT, SCALABLE DIGITAL PRODUCTS 🚀
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="pointer-events-auto"
                >
                  <a
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault();
                      const lenis = (window as unknown as { lenis?: { scrollTo: (t: Element | number, o?: { offset?: number }) => void } }).lenis;
                      const target = document.getElementById('contact');
                      if (lenis && target) {
                        lenis.scrollTo(target, { offset: -80 });
                      } else if (target) {
                        target.scrollIntoView({ behavior: 'smooth' });
                      }
                      history.replaceState(null, '', '#contact');
                    }}
                    className="inline-flex items-center gap-2 bg-primary text-black font-label-caps text-label-caps px-6 md:px-8 py-3.5 md:py-4 rounded-full hover:shadow-[0_0_28px_rgba(192,193,255,0.5)] transition-all duration-300 active:scale-95"
                  >
                    CONTACT ME
                    <span className="material-symbols-outlined text-[18px]">arrow_outward</span>
                  </a>
                </motion.div>
              </div>
            </div>

          </div>
        </section>

        {/* DEVELOPER + <rotating role> — oversized tagline spanning the full
            viewport width below the hero. No max-width cap so it stretches edge
            to edge; minimal padding so no empty band hangs underneath. */}
        <section className="relative px-6 md:px-margin-desktop pt-0 pb-0 overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
          >
            <RotatingText large />
          </motion.div>
        </section>

        {/* Narrative pillars */}
        <section className="px-6 md:px-margin-desktop pt-20 md:pt-28 pb-section-gap">
          <div className="max-w-7xl mx-auto">
            <motion.div
              variants={fadeUp}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="mb-10 border-l-4 border-primary pl-6"
            >
              <h2 className="font-label-caps text-label-caps text-primary mb-2 uppercase tracking-widest">The Pitch</h2>
              <h3 className="font-headline-md text-headline-md md:text-headline-lg">{narrativePillars.tagline}</h3>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {narrativePillars.threads.map((t, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-card p-6 border border-white/10"
                >
                  <span className="font-label-caps text-[10px] text-primary tracking-[0.2em] block mb-3">THREAD / 0{i + 1}</span>
                  <p className="font-body-md text-on-surface-variant leading-relaxed">{t}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Work Experience */}
        <section className="px-6 md:px-margin-desktop py-section-gap overflow-hidden" id="experience">
          <div className="max-w-4xl mx-auto">
            <div className="mb-16 text-center">
              <h2 className="font-label-caps text-label-caps text-primary mb-4 uppercase tracking-[0.3em]">Work Experience</h2>
              <p className="text-on-surface-variant max-w-xl mx-auto">10 roles across 7 organizations — operator, engineer, builder.</p>
              <div className="h-px w-24 bg-primary/40 mx-auto mt-6" />
            </div>
            <div className="relative flex flex-col items-center">
              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2 hidden md:block" />
              <div className="w-full space-y-20 relative">
                {experiences.map((exp, i) => (
                  <ExperienceItem key={i} exp={exp} index={i} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Projects — pinned horizontal 3D cover-flow scroll */}
        <ProjectScroll projects={projects} />

        {/* Core Capabilities */}
        <section className="px-6 md:px-margin-desktop py-section-gap">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-gutter">
            <div className="md:w-1/3">
              <h2 className="font-headline-md text-headline-md sticky top-32">CORE<br/>CAPABILITIES</h2>
            </div>
            <div className="md:w-2/3">
              {[
                { id: '01', title: 'Full-Stack Product', desc: 'React / Next.js on the frontend, Node, Express, FastAPI and Flask on the backend. Postgres schemas, Firebase, Vercel edge deployments — the whole surface, one brain.' },
                { id: '02', title: 'Applied AI & Agents', desc: 'Custom CNNs, Transformer-from-scratch impl, RAG pipelines with FAISS + Gemini, multi-agent dev systems. ML fundamentals, not just API-glue.' },
                { id: '03', title: 'Range Across Domains', desc: 'Web, mobile (Flutter/Dart), IoT, BTC forensics with Three.js, PWA, Blade/PHP, Power BI — few students touch all these. I ship across all of them.' },
                { id: '04', title: 'Operator & Agile Leader', desc: 'COO at ONJI driving 90%+ on-time sprints and 3 new eng hires. Scrum Master handling standups, planning, retros, and technical interviewing for a distributed team.' },
              ].map((cap, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="border-t border-white/10 py-10 group hover:pl-6 transition-all duration-300"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="font-label-caps text-label-caps text-primary mb-4 block">{cap.id}</span>
                      <h3 className="font-headline-lg text-headline-md md:text-headline-lg transition-colors group-hover:text-primary">{cap.title}</h3>
                    </div>
                    <span className="material-symbols-outlined text-4xl group-hover:rotate-45 transition-transform duration-300">north_east</span>
                  </div>
                  <p className="max-w-lg mt-6 text-on-surface-variant font-body-lg text-body-lg">{cap.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="px-6 md:px-margin-desktop py-section-gap">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12 border-l-4 border-primary pl-6">
              <h2 className="font-label-caps text-label-caps text-primary mb-2 uppercase tracking-widest">Full Tech Stack</h2>
              <p className="text-on-surface-variant mt-2 max-w-xl">Breadth: web, mobile, backend, ML, agents, IoT, data viz, PHP/Blade.</p>
            </div>
            <div className="flex flex-wrap gap-4">
              {techStack.map((tech, i) => (
                <div
                  key={tech}
                  className={`tech-badge-circular animate-float delay-${(i % 4) + 1}`}
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <ContactSection />
      </main>
    </VoidReveal>
  );
}

function ExperienceItem({ exp, index }: { exp: { title: string; company: string; date: string; icon: string; align: string; description?: string }; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.05 }}
      className={`relative md:flex md:items-center ${exp.align === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'}`}
    >
      <div className={`md:w-1/2 ${exp.align === 'right' ? 'md:pr-16 md:text-right' : 'md:pl-16 md:text-left'}`}>
        <div className="hidden md:block">
          <h3 className="font-headline-md text-2xl lg:text-3xl text-on-surface mb-2">{exp.title}</h3>
          <p className="text-primary text-base lg:text-lg font-medium tracking-tight uppercase">{exp.company}</p>
          <p className="text-on-surface-variant/60 font-label-caps mt-2 text-[11px] tracking-[0.15em]">{exp.date}</p>
          {exp.description && (
            <p className="text-on-surface-variant/80 mt-3 text-sm leading-relaxed max-w-md md:max-w-md md:inline-block">
              {exp.description}
            </p>
          )}
        </div>
        <div className="md:hidden pl-16">
          <h3 className="font-headline-md text-2xl text-on-surface mb-2">{exp.title}</h3>
          <p className="text-primary text-base font-medium tracking-tight uppercase">{exp.company}</p>
          <p className="text-on-surface-variant/60 font-label-caps mt-2 text-[11px] tracking-[0.15em]">{exp.date}</p>
          {exp.description && (
            <p className="text-on-surface-variant/80 mt-3 text-sm leading-relaxed">
              {exp.description}
            </p>
          )}
        </div>
      </div>

      <div className="absolute left-1/2 -translate-x-1/2 top-0 md:top-1/2 md:-translate-y-1/2 z-10">
        <div className={`w-12 h-12 bg-surface-container-high border-2 ${index === 0 ? 'border-primary animate-pulse-glow' : 'border-white/20 hover:border-primary/50 transition-colors'} rounded-full flex items-center justify-center`}>
          <span className="material-symbols-outlined text-primary text-2xl">{exp.icon}</span>
        </div>
      </div>

      <div className={`hidden md:block md:w-1/2 ${exp.align === 'right' ? 'md:pl-0' : 'md:pr-0'}`} />
    </motion.div>
  );
}
