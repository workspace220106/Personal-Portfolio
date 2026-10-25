"use client";

import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

/**
 * Custom cursor:
 * - a small primary-colored dot that tracks the pointer exactly
 * - a larger spring-smoothed ring that lags behind, scales up over any
 *   interactive element and reads any `data-cursor` label (e.g. "VIEW LIVE")
 *   written into its inner <span>
 *
 * Disabled on coarse-pointer devices and respects prefers-reduced-motion
 * (ring stops springing).
 */
export default function Cursor() {
  const [enabled, setEnabled] = useState<boolean>(() =>
    typeof window === 'undefined'
      ? false
      : !window.matchMedia('(hover: none)').matches
  );
  const [reduced, setReduced] = useState<boolean>(() =>
    typeof window === 'undefined'
      ? false
      : window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );
  const [hovering, setHovering] = useState(false);
  const [label, setLabel] = useState<string | null>(null);
  const labelRef = useRef<HTMLSpanElement>(null);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 400, damping: 32, mass: 0.4 });
  const ringY = useSpring(y, { stiffness: 400, damping: 32, mass: 0.4 });

  useEffect(() => {
    const mqCoarse = window.matchMedia('(hover: none)');
    const mqReduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    const onCoarse = () => setEnabled(!mqCoarse.matches);
    const onReduced = () => setReduced(mqReduced.matches);
    mqCoarse.addEventListener('change', onCoarse);
    mqReduced.addEventListener('change', onReduced);
    return () => {
      mqCoarse.removeEventListener('change', onCoarse);
      mqReduced.removeEventListener('change', onReduced);
    };
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };

    const over = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const interactive = target.closest(
        'a, button, [role="button"], input, textarea, select, [data-cursor]'
      ) as HTMLElement | null;
      if (interactive) {
        setHovering(true);
        setLabel(interactive.dataset.cursor ?? null);
      }
    };
    const out = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const interactive = target.closest(
        'a, button, [role="button"], input, textarea, select, [data-cursor]'
      );
      if (interactive) {
        setHovering(false);
        setLabel(null);
      }
    };

    window.addEventListener('mousemove', move);
    window.addEventListener('mouseover', over, { capture: true });
    window.addEventListener('mouseout', out, { capture: true });
    document.documentElement.classList.add('cursor-none-root');

    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseover', over, { capture: true } as EventListenerOptions);
      window.removeEventListener('mouseout', out, { capture: true } as EventListenerOptions);
      document.documentElement.classList.remove('cursor-none-root');
    };
  }, [enabled, x, y]);

  if (!enabled) return null;

  return (
    <>
      {/* Precise dot */}
      <motion.div
        aria-hidden
        className="fixed top-0 left-0 z-[90] pointer-events-none"
        style={{ x, y, translateX: '-50%', translateY: '-50%' }}
      >
        <div className="w-[6px] h-[6px] rounded-full bg-primary" />
      </motion.div>

      {/* Spring-smoothed ring */}
      <motion.div
        aria-hidden
        className="fixed top-0 left-0 z-[89] pointer-events-none"
        style={{
          x: reduced ? x : ringX,
          y: reduced ? y : ringY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        <motion.div
          animate={{
            width: hovering ? 72 : 36,
            height: hovering ? 72 : 36,
            backgroundColor: hovering
              ? 'rgba(192,193,255,0.18)'
              : 'rgba(192,193,255,0)',
            borderColor: hovering
              ? 'rgba(192,193,255,0.9)'
              : 'rgba(192,193,255,0.55)',
          }}
          transition={{ type: 'spring', stiffness: 300, damping: 24, mass: 0.5 }}
          className="rounded-full border backdrop-blur-[1px] flex items-center justify-center"
        >
          {label && (
            <span
              ref={labelRef}
              className="font-label-caps text-[9px] tracking-[0.2em] text-primary"
            >
              {label}
            </span>
          )}
        </motion.div>
      </motion.div>
    </>
  );
}
