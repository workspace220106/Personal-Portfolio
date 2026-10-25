"use client";

import React from 'react';

export default function OrbitBadge({
  text = 'AI/ML • DEVELOPER • DESIGNER • PROTOTYPER • ',
  size = 140,
}: {
  text?: string;
  size?: number;
}) {
  const chars = text.split('');
  const radius = size / 2 - 14;
  const anglePerChar = 360 / chars.length;

  return (
    <div
      className="relative animate-[spin_18s_linear_infinite]"
      style={{ width: size, height: size }}
      aria-hidden
    >
      <div
        className="absolute inset-0 rounded-full border border-primary/25"
        style={{
          background:
            'radial-gradient(circle at center, rgba(192,193,255,0.08), transparent 70%)',
        }}
      />
      {chars.map((ch, i) => {
        const angle = i * anglePerChar - 90;
        const rad = (angle * Math.PI) / 180;
        const x = size / 2 + radius * Math.cos(rad);
        const y = size / 2 + radius * Math.sin(rad);
        return (
          <span
            key={i}
            className="absolute font-label-caps text-[10px] tracking-[0.25em] text-primary/80 uppercase"
            style={{
              left: x,
              top: y,
              transform: `translate(-50%, -50%) rotate(${angle + 90}deg)`,
            }}
          >
            {ch}
          </span>
        );
      })}

      {/* Center diamond mark */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-6 h-6 bg-primary/80 rotate-45 flex items-center justify-center">
          <div className="w-3 h-3 bg-black rotate-45" />
        </div>
      </div>
    </div>
  );
}
