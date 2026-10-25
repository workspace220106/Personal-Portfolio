"use client";

import React from 'react';

export default function Footer() {
  const social = [
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/rajiv-agarwal221/',
    },
    { label: 'GitHub', href: 'https://github.com/workspace220106' },
    { label: 'Email', href: 'mailto:workspace220106@gmail.com' },
  ];

  return (
    <footer className="relative z-10 border-t border-white/10 bg-surface">
      <div className="max-w-7xl mx-auto px-6 md:px-margin-desktop pt-20 pb-8">
        {/* Giant brand wordmark */}
        <div className="pointer-events-none select-none">
          <h2
            aria-hidden
            className="font-headline-xl font-bold tracking-[-0.04em] leading-[0.85] text-[80px] sm:text-[120px] md:text-[180px] lg:text-[220px] text-fade-dark"
          >
            RAJIV
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-10 pb-16 border-b border-white/10">
          {/* Column 1 — short bio */}
          <div className="max-w-md">
            <p className="text-on-surface-variant leading-relaxed">
              Software / IT Engineer in Thane. Building the bridge between
              AI/ML innovation and production software.
            </p>
          </div>

          {/* Column 2 — contact */}
          <div className="space-y-2 font-label-caps text-[11px] tracking-[0.2em] text-on-surface-variant">
            <p className="text-primary mb-3">CONTACT</p>
            <a
              href="mailto:workspace220106@gmail.com"
              data-cursor="EMAIL"
              className="block hover:text-primary transition-colors normal-case tracking-normal text-sm"
            >
              workspace220106@gmail.com
            </a>
            <p className="normal-case tracking-normal text-sm text-on-surface-variant/80">
              Mira Road (E), Thane · 401107
            </p>
          </div>

          {/* Column 3 — social */}
          <div className="space-y-2 font-label-caps text-[11px] tracking-[0.2em] text-on-surface-variant">
            <p className="text-primary mb-3">ELSEWHERE</p>
            <ul className="space-y-2">
              {social.map((s) => (
                <li key={s.href}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="OPEN"
                    className="group inline-flex items-center gap-2 hover:text-primary transition-colors"
                  >
                    <span className="material-symbols-outlined text-[14px]">
                      arrow_outward
                    </span>
                    {s.label.toUpperCase()}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 flex flex-col md:flex-row justify-between items-center font-label-caps text-[10px] tracking-[0.3em] text-on-surface-variant/60 gap-3">
          <div>© {new Date().getFullYear()} RAJIV AGARWAL · MADE WITH INTENT</div>
          <div>DESIGN · CODE · SHIP</div>
        </div>
      </div>
    </footer>
  );
}
