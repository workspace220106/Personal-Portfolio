"use client";

import React from 'react';

/**
 * Infinite horizontal marquee of tech names. The track holds the list twice
 * back-to-back and translates -50% so the loop is seamless. Pauses on hover.
 */
export default function TechMarquee({ items }: { items: string[] }) {
  const sep = '●';
  return (
    <div className="relative w-full overflow-hidden py-10 border-y border-white/10 select-none">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-36 md:w-48 bg-gradient-to-r from-black via-black/80 to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-36 md:w-48 bg-gradient-to-l from-black via-black/80 to-transparent z-10" />
      <div
        className="flex w-max marquee-track whitespace-nowrap"
        style={{
          animation: 'marquee-scroll 48s linear infinite',
          animationPlayState: 'running',
        }}
      >
        {[...items, ...items].map((t, i) => (
          <span
            key={`${t}-${i}`}
            className="inline-flex items-center gap-6 pr-8 font-headline-md font-bold text-[24px] sm:text-[28px] md:text-[34px] tracking-[0.08em] select-none"
          >
            <span className="text-fade-dark">{t}</span>
            <span className="text-primary/40 text-[10px]">{sep}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
