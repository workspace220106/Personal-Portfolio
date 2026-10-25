"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import {
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion';

const PORTRAIT_SRC = '/portrait.webp';

export default function HeroPortrait() {
  const containerRef = useRef<HTMLDivElement>(null);

  // --- Cursor parallax ---
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const cursorSpring = { stiffness: 90, damping: 20, mass: 0.6 };
  const sx = useSpring(mx, cursorSpring);
  const sy = useSpring(my, cursorSpring);

  const cursorX = useTransform(sx, [-1, 1], [-22, 22]);
  const cursorY = useTransform(sy, [-1, 1], [-16, 16]);
  const rotateY = useTransform(sx, [-1, 1], [-7, 7]);
  const rotateX = useTransform(sy, [-1, 1], [6, -6]);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      const nx = (e.clientX / window.innerWidth) * 2 - 1;
      const ny = (e.clientY / window.innerHeight) * 2 - 1;
      mx.set(nx);
      my.set(ny);
    };
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, [mx, my]);

  // --- Scroll parallax ---
  // The portrait drifts upward and scales down slightly as the user scrolls past
  // the hero. Tracked against the container so it starts the moment the hero
  // enters the viewport and finishes once it has fully left.
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Lenis already smooths the raw scroll, so these transforms don't need an extra spring.
  const scrollY = useTransform(scrollYProgress, [0, 1], [-60, 160]);
  const scrollScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.04, 1, 0.9]);
  // Fade cleanly to fully transparent by the time the hero leaves the viewport
  // so the portrait dissolves instead of getting clipped at the section boundary.
  const scrollOpacity = useTransform(scrollYProgress, [0.45, 0.9], [1, 0]);

  return (
    <div
      ref={containerRef}
      className="relative mx-auto w-[320px] h-[460px] sm:w-[420px] sm:h-[580px] md:w-[540px] md:h-[720px] lg:w-[620px] lg:h-[820px] [perspective:1200px]"
    >
      {/* Soft radial glow sitting behind the subject */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 55% at 50% 50%, rgba(192,193,255,0.28) 0%, rgba(192,193,255,0.08) 40%, transparent 72%)',
          filter: 'blur(28px)',
        }}
      />

      {/* Scroll-parallax wrapper (vertical drift + scale + fade-out) */}
      <motion.div
        style={{ y: scrollY, scale: scrollScale, opacity: scrollOpacity }}
        className="relative w-full h-full will-change-transform"
      >
        {/* Cursor-parallax wrapper (translation + 3D tilt) */}
        <motion.div
          style={{
            x: cursorX,
            y: cursorY,
            rotateX,
            rotateY,
            transformStyle: 'preserve-3d',
          }}
          className="relative w-full h-full flex items-end justify-center will-change-transform"
        >
          <Image
            alt="Rajiv Agarwal"
            src={PORTRAIT_SRC}
            draggable={false}
            priority
            width={1200}
            height={1128}
            sizes="(max-width: 640px) 320px, (max-width: 1024px) 540px, 620px"
            className="relative h-full w-auto max-w-none select-none pointer-events-none"
            style={{
              filter:
                'drop-shadow(0 28px 48px rgba(0,0,0,0.6)) drop-shadow(0 0 36px rgba(192,193,255,0.22))',
              imageRendering: 'auto',
            }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
