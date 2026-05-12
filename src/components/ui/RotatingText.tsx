"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const words = ["DESIGNER", "PROTOTYPER", "AI/ML LEARNER"];

export default function RotatingText() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex items-center gap-2 font-label-caps text-label-caps text-primary tracking-[0.2em]">
      <span>DEVELOPER +</span>
      <div className="relative h-[1.2em] overflow-hidden min-w-[150px]">
        <AnimatePresence mode="wait">
          <motion.span
            key={words[index]}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-0"
          >
            {words[index]}
          </motion.span>
        </AnimatePresence>
      </div>
    </div>
  );
}
