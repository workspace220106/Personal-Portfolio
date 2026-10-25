"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, MotionValue } from 'framer-motion';
import type { Project } from '@/data/portfolioData';

/**
 * Horizontal pinned-scroll project gallery with 3D cover-flow tilt.
 *
 * Vertical scroll is converted into horizontal travel while the hero of
 * this section is `position: sticky`. Each card computes its own distance
 * from the viewport centre on every tick and tilts/scales accordingly, so
 * the active card faces the viewer while neighbours fan out in perspective.
 */

const CARD_W_PX = 720; // card width on md+
const CARD_GAP_PX = 48;

interface ProjectScrollProps {
  projects: Project[];
}

export default function ProjectScroll({ projects }: ProjectScrollProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  // Scroll progress through the pinned section (0 at enter, 1 at exit).
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });

  // Heavier spring so the tilt and translation glide like oil instead of
  // snapping to the scroll position. Low stiffness + high damping + more
  // mass = slow, buttery follow with no overshoot.
  const smooth = useSpring(scrollYProgress, {
    stiffness: 42,
    damping: 42,
    mass: 1.1,
    restDelta: 0.0005,
  });

  const n = projects.length;

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative"
      // Enough vertical travel to pin the row for ~1 card-width per card.
      style={{ height: `${Math.max(2, n) * 100}vh` }}
    >
      {/* Sticky stage pinned to the viewport while the parent scrolls.
          Vertical layout: title band (reserved), then the horizontal 3D stage. */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col">
        {/* Title band — reserves its own vertical slot so cards never overlap it */}
        <div className="shrink-0 pt-24 pb-6 px-6 md:px-margin-desktop">
          <div className="max-w-7xl mx-auto flex items-end justify-between gap-6">
            <div className="border-l-4 border-primary pl-6">
              <h2 className="font-headline-md text-headline-md text-on-surface mb-1">PROJECTS</h2>
              <p className="font-label-caps text-label-caps text-on-surface-variant tracking-widest">
                SCROLL · EVERY ONE LIVE, NOT JUST SOURCE
              </p>
            </div>
            <div className="hidden md:flex items-center gap-2 font-label-caps text-[10px] tracking-[0.3em] text-on-surface-variant/60">
              <span className="material-symbols-outlined text-[14px]">swipe</span>
              SCROLL TO ADVANCE
            </div>
          </div>
        </div>

        {/* 3D perspective container fills the remaining space */}
        <div
          className="relative flex-1 flex items-center overflow-hidden"
          style={{ perspective: '1600px' }}
        >
          <TrackInner
            projects={projects}
            trackRef={trackRef}
            smooth={smooth}
          />
        </div>
      </div>
    </section>
  );
}

function TrackInner({
  projects,
  trackRef,
  smooth,
}: {
  projects: Project[];
  trackRef: React.RefObject<HTMLDivElement | null>;
  smooth: MotionValue<number>;
}) {
  const n = projects.length;

  // Translate the row from 0 → -(totalWidth - viewportWidth). We approximate
  // viewportWidth with CARD_W_PX so the first card lands centred when
  // progress = 0 / (n-1) and the last at progress = 1.
  const travel = (n - 1) * (CARD_W_PX + CARD_GAP_PX);
  const x = useTransform(smooth, [0, 1], [0, -travel]);

  return (
    <motion.div
      ref={trackRef}
      style={{ x, transformStyle: 'preserve-3d' }}
      // Push the first card to viewport centre; the final card lands centred too.
      className="relative will-change-transform flex items-center gap-12 pl-[calc(50vw-360px)] pr-[calc(50vw-360px)]"
    >
      {projects.map((proj, i) => (
        <ProjectCard
          key={proj.name}
          project={proj}
          index={i}
          total={n}
          smooth={smooth}
        />
      ))}
    </motion.div>
  );
}

function ProjectCard({
  project,
  index,
  total,
  smooth,
}: {
  project: Project;
  index: number;
  total: number;
  smooth: MotionValue<number>;
}) {
  // Where this card sits in the sequence, in [0, 1].
  const stage = total > 1 ? index / (total - 1) : 0;

  // Signed distance from the focal card, in units of "cards".
  // Negative => card is to the left (already passed); positive => to the right.
  const distance = useTransform(smooth, (p) => (index - p * (total - 1)));

  // Perspective tilt: cards to the right of focus rotate toward the viewer
  // from their right edge (negative rotateY), left-side cards mirror it.
  const rotateY = useTransform(distance, (d) => clamp(d * -22, -42, 42));
  const scale = useTransform(distance, (d) => {
    const falloff = 1 - Math.min(Math.abs(d), 1) * 0.18;
    return falloff;
  });
  const opacity = useTransform(distance, (d) => {
    if (Math.abs(d) < 0.6) return 1;
    return Math.max(0.35, 1 - (Math.abs(d) - 0.6) * 0.6);
  });
  const z = useTransform(distance, (d) => -Math.abs(d) * 160);
  const blur = useTransform(distance, (d) => `blur(${Math.min(Math.abs(d) * 2.5, 6)}px)`);
  const chroma = useTransform(distance, (d) => {
    const off = Math.min(Math.abs(d), 1) * 6;
    return `drop-shadow(${off}px 0 0 rgba(255,0,96,0.35)) drop-shadow(${-off}px 0 0 rgba(0,220,255,0.3))`;
  });

  return (
    <motion.div
      style={{
        rotateY,
        scale,
        opacity,
        z,
        transformStyle: 'preserve-3d',
        transformOrigin: '50% 50%',
      }}
      className="relative shrink-0 w-[85vw] md:w-[720px] max-w-[760px] will-change-transform"
    >
      {/* Card frame */}
      <div className="relative aspect-video w-full overflow-hidden glass-card border border-white/10 group">
        <motion.img
          alt={project.name}
          src={project.img}
          style={{ filter: blur }}
          className="w-full h-full object-cover scale-105"
        />
        {/* Chromatic aberration — intensifies as the card leaves centre */}
        <motion.div
          aria-hidden
          style={{ filter: chroma }}
          className="pointer-events-none absolute inset-0 mix-blend-screen"
        >
          <img
            alt=""
            src={project.img}
            className="w-full h-full object-cover opacity-30 scale-105"
          />
        </motion.div>

        {/* Dark grading */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

        {/* Featured */}
        {project.featured && (
          <div className="absolute top-4 right-4">
            <span className="font-label-caps text-[10px] px-3 py-1 bg-primary/20 backdrop-blur-md border border-primary/30 rounded-full text-primary">
              FEATURED
            </span>
          </div>
        )}

        {/* Content block anchored bottom-left */}
        <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 flex flex-col gap-3">
          <div className="flex items-center gap-3 flex-wrap">
            <h3 className="font-headline-md text-2xl md:text-3xl text-white">
              {project.name}
            </h3>
            <span className="font-label-caps text-[10px] px-2 py-0.5 bg-white/10 rounded border border-white/20 uppercase text-white/90">
              {project.type}
            </span>
          </div>
          <p className="text-white/80 max-w-xl text-sm md:text-base">
            {project.desc}
          </p>
          {project.tags && project.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-1">
              {project.tags.map((t) => (
                <span
                  key={t}
                  className="font-label-caps text-[9px] px-2 py-0.5 bg-primary/15 border border-primary/25 text-primary rounded-full tracking-[0.1em]"
                >
                  {t}
                </span>
              ))}
            </div>
          )}
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 self-start mt-2 font-label-caps text-[10px] tracking-[0.2em] text-primary hover:text-white transition-colors border-b border-primary/40 pb-1"
          >
            VIEW LIVE
            <span className="material-symbols-outlined text-[14px]">open_in_new</span>
          </a>
        </div>
      </div>

      {/* Floating index on the side */}
      <div
        className="absolute -top-10 left-0 font-label-caps text-[10px] tracking-[0.3em] text-primary/60"
        style={{ transform: 'translateZ(0)' }}
      >
        {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
      </div>
    </motion.div>
  );
}

function clamp(v: number, lo: number, hi: number) {
  return Math.min(Math.max(v, lo), hi);
}
