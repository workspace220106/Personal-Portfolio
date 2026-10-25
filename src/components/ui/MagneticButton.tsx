"use client";

import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

/**
 * Magnetic button: within a 60px radius the children pull toward the cursor
 * as the pointer approaches, snap back on leave. Compound children so a child
 * icon can tilt a little further (strength prop).
 */
export default function MagneticButton({
  children,
  className = '',
  strength = 0.35,
  href,
  onClick,
  type = 'button',
  cursorLabel,
  ariaLabel,
}: {
  children: React.ReactNode;
  className?: string;
  strength?: number;
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
  type?: 'button' | 'submit' | 'reset';
  cursorLabel?: string;
  ariaLabel?: string;
}) {
  const ref = useRef<HTMLAnchorElement | HTMLButtonElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 220, damping: 20, mass: 0.4 });
  const sy = useSpring(my, { stiffness: 220, damping: 20, mass: 0.4 });

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    mx.set((e.clientX - cx) * strength);
    my.set((e.clientY - cy) * strength);
  };

  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };

  const commonProps = {
    className: `relative inline-flex items-center ${className}`,
    onMouseMove: onMove,
    onMouseLeave: onLeave,
    onClick,
    'data-cursor': cursorLabel,
    'aria-label': ariaLabel,
  };

  const inner = (
    <motion.span style={{ x: sx, y: sy }} className="inline-flex items-center gap-2">
      {children}
    </motion.span>
  );

  if (href) {
    return (
      <a
        ref={ref as React.RefObject<HTMLAnchorElement>}
        href={href}
        {...commonProps}
      >
        {inner}
      </a>
    );
  }

  return (
    <button
      ref={ref as React.RefObject<HTMLButtonElement>}
      type={type}
      {...commonProps}
    >
      {inner}
    </button>
  );
}
