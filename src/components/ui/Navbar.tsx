"use client";

import React from 'react';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50 px-6 md:px-margin-desktop py-6 flex justify-between items-center pointer-events-none">
      <div className="flex items-center gap-4 pointer-events-auto">
        <Link href="/" className="group flex items-center gap-3">
          <div className="w-8 h-8 bg-primary rounded-sm rotate-45 flex items-center justify-center group-hover:rotate-90 transition-transform duration-500">
            <div className="w-4 h-4 bg-black rotate-45" />
          </div>
          <span className="font-label-caps text-label-caps text-on-surface tracking-widest">RAJIV AGARWAL</span>
        </Link>
      </div>
    </nav>
  );
}
