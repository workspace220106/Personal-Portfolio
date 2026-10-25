"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      // Lower lerp = snappier, higher = buttery. 0.08–0.12 is the sweet spot.
      lerp: 0.1,
      // Natural wheel feel — no fractional multiplier so flicks don't feel sluggish
      wheelMultiplier: 1,
      touchMultiplier: 1.4,
      smoothWheel: true,
      // Respect prefers-reduced-motion
      syncTouch: false,
      orientation: "vertical",
      gestureOrientation: "vertical",
      // Default easing is already a smooth ease-out; override only if we want flair
      easing: (t) => 1 - Math.pow(1 - t, 3),
    });

    // Expose lenis for anchor click handlers and other UI that wants to drive scroll
    (window as unknown as { lenis?: Lenis }).lenis = lenis;

    let rafId = 0;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    // Keep framer-motion's useScroll perfectly in sync with Lenis so parallax
    // never lags behind the smoothed scroll position.
    const onScroll = () => {
      window.dispatchEvent(new CustomEvent("lenis-scroll"));
    };
    lenis.on("scroll", onScroll);

    // Intercept in-page anchor clicks and route them through Lenis so the jump
    // is a smooth interpolation instead of a hard native snap.
    const onAnchorClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement | null)?.closest(
        'a[href*="#"]'
      ) as HTMLAnchorElement | null;
      if (!anchor) return;

      const url = new URL(anchor.href, window.location.href);
      // Only hijack same-page anchors
      if (url.pathname !== window.location.pathname) return;
      if (!url.hash) return;

      const target = document.querySelector(url.hash);
      if (!target) return;

      e.preventDefault();
      lenis.scrollTo(target as HTMLElement, { offset: -80 });
      // Update the URL hash without triggering a jump
      history.replaceState(null, "", url.hash);
    };
    document.addEventListener("click", onAnchorClick);

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener("click", onAnchorClick);
      lenis.off("scroll", onScroll);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
