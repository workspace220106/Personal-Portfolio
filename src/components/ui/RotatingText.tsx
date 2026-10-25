"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const words = [
  "FULL-STACK ENGINEER",
  "AI / ML ENGINEER",
  "AGENT BUILDER",
  "AGILE OPERATOR",
  "PROTOTYPER",
];

export default function RotatingText({ large = false }: { large?: boolean }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  if (large) {
    // "DEVELOPER + <role>" renders on a single line that spans the full
    // viewport. Font-size scales with vw so the whole phrase (including the
    // longest role) stretches across the width. The rotating slot is sized
    // to the longest word so the row never reflows when the word changes.
    return (
      <div
        className="font-headline-xl font-bold leading-[0.92] tracking-[-0.055em] whitespace-nowrap flex items-baseline w-full"
        style={{ fontSize: "clamp(28px, 5.7vw, 170px)" }}
      >
        <span className="text-fade-dark">DEVELOPER</span>
        <span className="text-primary mx-[0.18em]">+</span>
        <span
          className="relative inline-block overflow-hidden align-baseline"
          style={{ height: "1em", width: "18ch" }}
        >
          {/* Invisible baseline anchor — gives this inline-block a real text
              baseline so the absolute-positioned rotating word aligns with the
              "DEVELOPER +" baseline on its left. Without it, an inline-block
              with only absolute children baselines to its bottom edge, which
              is what caused "DEVELOPER" to sit lower than the rotating word. */}
          <span aria-hidden className="opacity-0 select-none">
            M
          </span>
          <AnimatePresence mode="wait">
            <motion.span
              key={words[index]}
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "-100%", opacity: 0 }}
              transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
              className="absolute left-0 top-0 whitespace-nowrap text-primary"
            >
              {words[index]}
            </motion.span>
          </AnimatePresence>
        </span>
      </div>
    );
  }

  return (
    <div className="flex flex-wrap items-center font-label-caps text-label-caps text-primary tracking-[0.2em]">
      <span>DEVELOPER</span>
      <div className="relative overflow-hidden h-[1.2em] min-w-[200px]">
        <AnimatePresence mode="wait">
          <motion.span
            key={words[index]}
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-100%", opacity: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-0 whitespace-nowrap"
          >
            <span className="text-primary font-black mr-2">+</span>
            {words[index]}
          </motion.span>
        </AnimatePresence>
      </div>
    </div>
  );
}
