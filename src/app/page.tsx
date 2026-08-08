"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Scene from '@/components/canvas/Scene';
import VoidReveal from '@/components/ui/VoidReveal';
import Link from 'next/link';
import RotatingText from '@/components/ui/RotatingText';
import { experiences, projects, stats } from '@/data/portfolioData';

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    }
  }
};

export default function Home() {
  return (
    <VoidReveal>
      <Scene />
      <main className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-[800px] flex flex-col justify-start px-8 md:px-margin-desktop relative overflow-hidden pt-32">
          <div className="absolute inset-0 glow-bg pointer-events-none" />
          <div className="max-w-7xl z-10">
            <motion.div
              initial="hidden"
              animate="show"
              variants={staggerContainer}
              className="flex flex-col"
            >

              <motion.h1
                variants={fadeUp}
                className="font-headline-xl text-headline-xl md:text-headline-xl text-headline-lg-mobile max-w-5xl mb-stack-lg"
              >
                <RotatingText large />
              </motion.h1>

              <motion.div
                variants={fadeUp}
                className="flex flex-col md:flex-row gap-gutter items-start md:items-center"
              >
                <div className="flex gap-4">
                  <Link href="/about" className="font-label-caps text-label-caps border border-primary/40 bg-primary/10 px-8 py-4 hover:shadow-[0_0_15px_rgba(192,193,255,0.4)] transition-all duration-300 cursor-pointer active:scale-95">
                    ABOUT ME
                  </Link>
                  <Link href="/contact" className="font-label-caps text-label-caps border border-white/20 bg-white/5 px-8 py-4 hover:bg-white/10 transition-all duration-300 cursor-pointer active:scale-95">
                    GET IN TOUCH
                  </Link>
                </div>
                <p className="max-w-sm text-on-surface-variant font-body-lg text-body-lg">
                  B.E. Information Technology student at Fr. C. Rodrigues Institute of Technology, passionate about building intelligent digital ecosystems.
                </p>
              </motion.div>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="z-10 mt-24 grid grid-cols-2 gap-8 border-t border-white/10 pt-12 md:grid-cols-4"
            >
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + (i * 0.1) }}
                >
                  <p className="font-label-caps text-[10px] text-primary mb-2">{stat.label}</p>
                  <p className="font-headline-md text-2xl uppercase">{stat.value}</p>
                </motion.div>
              ))}
            </motion.div>


          </div>
        </section>

        {/* Education & Highlights */}
        <section className="px-8 md:px-margin-desktop py-section-gap bg-surface-container-lowest" id="about">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-section-gap">
              <motion.div variants={fadeUp} initial="initial" whileInView="whileInView" viewport={{ once: true }}>
                <div className="mb-12 border-l-4 border-primary pl-6">
                  <h2 className="font-label-caps text-label-caps text-primary mb-2">EDUCATION</h2>
                  <h3 className="font-headline-md text-headline-md text-on-surface">Fr. C. Rodrigues Institute of Technology</h3>
                  <p className="text-on-surface-variant mt-2">B.E. Information Technology (CGPA 8.71)</p>
                  <p className="font-label-caps text-sm text-primary/60 mt-1">Expected May 2027</p>
                </div>
              </motion.div>
              <motion.div variants={fadeUp} initial="initial" whileInView="whileInView" viewport={{ once: true }}>
                <h2 className="font-headline-md text-headline-md mb-8">KEY HIGHLIGHTS</h2>
                <div className="space-y-8">
                  {[
                    { icon: 'developer_mode', title: 'Full-Stack Dev', desc: 'Expertise in React, Next.js, Node.js, and modern CSS frameworks to build responsive, performant web applications.' },
                    { icon: 'psychology', title: 'AI/ML Engineer', desc: 'Leveraging TensorFlow and PyTorch to integrate intelligent features and predictive models into software solutions.' },
                    { icon: 'groups', title: 'Agile Leader', desc: 'Serving as Scrum Master at ONJI, coordinating sprints and ensuring streamlined delivery pipelines.' },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-6 group">
                      <span className="material-symbols-outlined text-primary text-3xl group-hover:scale-110 transition-transform">{item.icon}</span>
                      <div>
                        <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                        <p className="text-on-surface-variant">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Work Experience */}
        <section className="px-8 md:px-margin-desktop py-section-gap bg-background overflow-hidden">
          <div className="max-w-4xl mx-auto">
            <div className="mb-16 text-center">
              <h2 className="font-label-caps text-label-caps text-primary mb-4 uppercase tracking-[0.3em]">Work Experience</h2>
              <div className="h-px w-24 bg-primary/40 mx-auto" />
            </div>
            <div className="relative flex flex-col items-center">
              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2 hidden md:block" />
              <div className="w-full space-y-24 relative">
                {experiences.map((exp, i) => (
                  <ExperienceItem key={i} exp={exp} index={i} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="px-8 md:px-margin-desktop py-section-gap bg-surface-container-lowest">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12 border-l-4 border-primary pl-6">
              <h2 className="font-label-caps text-label-caps text-primary mb-2 uppercase tracking-widest">Certifications</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: 'Google AI Professional Certificate' },
                { title: 'Microsoft Power BI Data Analyst' },
              ].map((cert, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -5 }}
                  className="glass-card p-8 group hover:border-primary/40 transition-all duration-300"
                >
                  <h3 className="font-headline-md text-xl mb-2">{cert.title}</h3>
                  <p className="text-on-surface-variant font-label-caps text-[10px]">VERIFIED CREDENTIAL</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects */}
        <section className="px-8 md:px-margin-desktop py-section-gap max-w-7xl mx-auto" id="projects">
          <div className="mb-stack-lg border-l-4 border-primary pl-6">
            <h2 className="font-headline-md text-headline-md text-on-surface mb-2">PROJECTS</h2>
            <p className="font-label-caps text-label-caps text-on-surface-variant">PROJECT SHOWCASE</p>
          </div>
          <div className="flex flex-col items-center">
            {projects.map((proj, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: proj.align === 'start' ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={`md:w-[60%] w-full ${proj.align === 'start' ? 'self-start' : 'self-end'} group cursor-pointer mb-32`}
              >
                <div className="glass-card overflow-hidden aspect-video mb-stack-sm transition-all duration-500 group-hover:border-primary/40 relative">
                  <img
                    alt={proj.name}
                    className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                    src={proj.img}
                  />
                  {proj.featured && (
                    <div className="absolute top-4 right-4">
                      <span className="font-label-caps text-[10px] px-3 py-1 bg-primary/20 backdrop-blur-md border border-primary/30 rounded-full text-primary">FEATURED</span>
                    </div>
                  )}
                </div>
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 py-4">
                  <div className="flex-grow transition-transform duration-500 group-hover:-translate-y-2">
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="font-headline-md text-3xl">{proj.name}</h3>
                      <span className="font-label-caps text-[10px] px-2 py-0.5 bg-white/5 rounded border border-white/10 uppercase">{proj.type}</span>
                    </div>
                    <p className="text-on-surface-variant max-w-xl">{proj.desc}</p>
                    <a className="inline-flex items-center gap-1 text-[10px] font-label-caps text-primary/60 hover:text-primary transition-colors mt-3 underline underline-offset-4 decoration-primary/20" href={proj.link} target="_blank">
                      VIEW LIVE <span className="material-symbols-outlined text-xs">open_in_new</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Core Capabilities */}
        <section className="px-8 md:px-margin-desktop py-section-gap bg-surface-container-lowest">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-gutter">
            <div className="md:w-1/3">
              <h2 className="font-headline-md text-headline-md sticky top-32">CORE<br/>CAPABILITIES</h2>
            </div>
            <div className="md:w-2/3">
              {[
                { id: '01', title: 'Data & Analytics', desc: 'Leveraging Power BI and deep database knowledge to extract insights, optimize queries, and build data structures that scale.' },
                { id: '02', title: 'Intelligent Systems', desc: 'Building custom Convolutional Neural Networks and real-time translation engines that bridge human communication and machine learning.' },
                { id: '03', title: 'Interactive Experiences', desc: 'Translating complex backend logic into sleek, responsive, and glassmorphic user interfaces that command attention and drive engagement.' },
              ].map((cap, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
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
        <section className="px-8 md:px-margin-desktop py-section-gap bg-background">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12 border-l-4 border-primary pl-6">
              <h2 className="font-label-caps text-label-caps text-primary mb-2 uppercase tracking-widest">Full Tech Stack</h2>
            </div>
            <div className="flex flex-wrap gap-4">
              {[
                'REACT', 'NEXT.JS', 'NODE.JS', 'EXPRESS', 'PYTHON',
                'TENSORFLOW', 'OPENCV', 'MEDIAPIPE', 'POSTGRESQL',
                'FIREBASE', 'THREE.JS', 'FLASK', 'TYPESCRIPT'
              ].map((tech, i) => (
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
      </main>
    </VoidReveal>
  );
}

function ExperienceItem({ exp, index }: { exp: { title: string; company: string; date: string; icon: string; align: string }; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className={`relative md:flex md:items-center ${exp.align === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'}`}
    >
      <div className={`md:w-1/2 ${exp.align === 'right' ? 'md:pr-16 md:text-right' : 'md:pl-16 md:text-left'}`}>
        <div className="hidden md:block">
          <h3 className="font-headline-md text-3xl text-on-surface mb-2">{exp.title}</h3>
          <p className="text-primary text-xl font-medium tracking-tight uppercase">{exp.company}</p>
          <p className="text-on-surface-variant/60 font-label-caps mt-2">{exp.date}</p>
        </div>
        <div className="md:hidden pl-16">
          <h3 className="font-headline-md text-3xl text-on-surface mb-2">{exp.title}</h3>
          <p className="text-primary text-xl font-medium tracking-tight uppercase">{exp.company}</p>
          <p className="text-on-surface-variant/60 font-label-caps mt-2">{exp.date}</p>
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
