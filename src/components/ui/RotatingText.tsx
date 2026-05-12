"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const words = ["DESIGNER", "PROTOTYPER", "AI/ML LEARNER"];

export default function RotatingText({ large = false }: { large?: boolean }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className={`flex flex-wrap items-center gap-x-4 gap-y-2 ${
      large 
        ? "font-headline-xl text-headline-xl md:text-headline-xl text-headline-lg-mobile" 
        : "font-label-caps text-label-caps text-primary tracking-[0.2em]"
    }`}>
      <span className={large ? "text-on-surface" : ""}>DEVELOPER +</span>
      <div className={`relative overflow-hidden ${
        large ? "h-[1.1em] min-w-[300px] md:min-w-[500px]" : "h-[1.2em] min-w-[150px]"
      }`}>
        <AnimatePresence mode="wait">
          <motion.span
            key={words[index]}
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-100%", opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className={`absolute left-0 ${large ? "text-primary/80 italic font-light" : ""}`}
          >
            {words[index]}
          </motion.span>
        </AnimatePresence>
      </div>
    </div>
  );
}
