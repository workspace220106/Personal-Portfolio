"use client";

import React from 'react';

/**
 * Infinite horizontal marquee of tech names. The track holds the list twice
 * back-to-back and translates -50% so the loop is seamless. Pauses on hover.
 */
export default function TechMarquee({ items }: { items: string[] }) {
  const sep = '●';
  return (
    <div className="relative w-full overflow-hidden py-10 border-y border-white/10">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />
      <div className="flex w-max marquee-track whitespace-nowrap">
        {[...items, ...items].map((t, i) => (
          <span
            key={`${t}-${i}`}
            className="inline-flex items-center gap-6 pr-6 font-label-caps text-[22px] md:text-[28px] tracking-[0.1em] text-on-surface-variant/80 hover:text-primary transition-colors"
          >
            {t}
            <span className="text-primary/40 text-[10px]">{sep}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
