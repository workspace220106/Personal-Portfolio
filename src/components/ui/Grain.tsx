"use client";

/**
 * Fullscreen inline-SVG noise overlay at ~3% opacity.
 * Unifies the dark theme, hides banding on gradients, and signals craft.
 * Pointer-events-none so it never intercepts clicks.
 */
export default function Grain() {
  return (
    <div
      aria-hidden
      className="fixed inset-0 z-[70] pointer-events-none mix-blend-overlay opacity-[0.08]"
      style={{
        backgroundImage:
          'url("data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22160%22 height=%22160%22><filter id=%22n%22><feTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%222%22 stitchTiles=%22stitch%22/><feColorMatrix values=%220 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 1 0%22/></filter><rect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22/></svg>")',
      }}
    />
  );
}
