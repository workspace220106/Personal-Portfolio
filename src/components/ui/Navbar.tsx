"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const SECTIONS = [
  { id: 'pitch', label: 'PITCH' },
  { id: 'experience', label: 'WORK' },
  { id: 'projects', label: 'PROJECTS' },
  { id: 'contact', label: 'CONTACT' },
];

/**
 * Nav strip:
 * - brand mark on the left
 * - inline scroll-spy chapter list that highlights the current section
 * - live local clock + location badge on the right (classic Awwwards move)
 */
export default function Navbar() {
  const [active, setActive] = useState<string>('');
  const [time, setTime] = useState<string>('');

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      const fmt = new Intl.DateTimeFormat('en-US', {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
      }).format(now);
      setTime(fmt);
    };
    tick();
    const id = setInterval(tick, 30 * 1000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const targets = SECTIONS.map((s) => document.getElementById(s.id)).filter(
      (el): el is HTMLElement => !!el
    );
    if (!targets.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        }
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 }
    );
    targets.forEach((t) => io.observe(t));
    return () => io.disconnect();
  }, []);

  const scrollTo = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const lenis = (window as unknown as { lenis?: { scrollTo: (t: Element | number, o?: { offset?: number }) => void } }).lenis;
    const target = document.getElementById(id);
    if (lenis && target) {
      lenis.scrollTo(target, { offset: -80 });
    } else if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
    history.replaceState(null, '', `#${id}`);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 md:px-margin-desktop py-5 flex justify-between items-center pointer-events-none">
      {/* Brand */}
      <Link
        href="/"
        className="group flex items-center gap-3 pointer-events-auto"
        data-cursor="HOME"
      >
        <div className="w-8 h-8 bg-primary rounded-sm rotate-45 flex items-center justify-center group-hover:rotate-[135deg] transition-transform duration-500">
          <div className="w-4 h-4 bg-black rotate-45" />
        </div>
        <span className="font-label-caps text-label-caps text-on-surface tracking-widest">
          RAJIV AGARWAL
        </span>
      </Link>

      {/* Chapters */}
      <ul className="hidden lg:flex items-center gap-7 pointer-events-auto">
        {SECTIONS.map((s) => (
          <li key={s.id}>
            <a
              href={`#${s.id}`}
              onClick={scrollTo(s.id)}
              data-cursor="JUMP"
              className={`group font-label-caps text-[10px] tracking-[0.3em] transition-colors relative py-2 ${
                active === s.id ? 'text-primary' : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              {s.label}
              <span
                className={`absolute left-0 right-0 -bottom-0.5 h-px bg-primary origin-left transition-transform duration-300 ${
                  active === s.id ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`}
              />
            </a>
          </li>
        ))}
      </ul>

      {/* Local badge */}
      <div className="hidden md:flex items-center gap-3 pointer-events-auto font-label-caps text-[10px] tracking-[0.25em] text-on-surface-variant">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-70 animate-ping" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
        </span>
        <span>THANE · {time} IST</span>
      </div>
    </nav>
  );
}
