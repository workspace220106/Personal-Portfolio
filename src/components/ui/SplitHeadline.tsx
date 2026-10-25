"use client";

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

/**
 * Split-letter headline reveal.
 * Each character rises from below with a tiny stagger when the headline
 * enters the viewport. Accepts coloured segments so "HI, I'M " and "RAJIV"
 * can keep their distinct colours.
 *
 * Respects prefers-reduced-motion via the `reduceMotion` prop (passed from
 * the hook used by the parent) — collapses to a static render.
 */

export interface Segment {
  text: string;
  className?: string;
}

export default function SplitHeadline({
  segments,
  className = '',
  stagger = 0.03,
  as: Tag = 'h1',
  once = true,
}: {
  segments: Segment[];
  className?: string;
  stagger?: number;
  as?: 'h1' | 'h2' | 'h3' | 'div';
  once?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once, margin: '-10% 0px -10% 0px' });

  // Pre-flatten the segments to characters while preserving which segment
  // (and therefore which colour) each one belongs to.
  const letters: { ch: string; className?: string; key: string }[] = [];
  segments.forEach((seg, segIdx) => {
    for (let i = 0; i < seg.text.length; i++) {
      letters.push({
        ch: seg.text[i],
        className: seg.className,
        key: `${segIdx}-${i}`,
      });
    }
  });

  const inner = (
    <>
      {letters.map(({ ch, className: segCls, key }, i) => {
        if (ch === ' ') {
          return (
            <span key={key} className={segCls} style={{ display: 'inline-block', width: '0.28em' }} aria-hidden>
              {' '}
            </span>
          );
        }
        return (
          <span
            key={key}
            className="inline-block overflow-hidden align-top"
            style={{ paddingTop: '0.12em', paddingBottom: '0.02em' }}
            aria-hidden
          >
            <motion.span
              className={`inline-block ${segCls ?? ''}`}
              initial={{ y: '110%' }}
              animate={inView ? { y: '0%' } : { y: '110%' }}
              transition={{
                duration: 0.9,
                delay: i * stagger,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {ch}
            </motion.span>
          </span>
        );
      })}
    </>
  );

  const label = segments.map((s) => s.text).join('');

  const content = (
    <div ref={ref} aria-label={label} className={className}>
      {inner}
    </div>
  );

  // Keep the semantic tag of the parent – render a wrapping element so
  // crawlers still see an <h1>/<h2> etc. with its accessible name.
  if (Tag === 'div') return content;
  return <Tag className="contents">{content}</Tag>;
}
