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
    return (
      <div
        className="flex flex-wrap items-baseline gap-x-6 md:gap-x-10 font-headline-xl font-bold leading-[0.88] tracking-[-0.04em] text-[48px] sm:text-[80px] md:text-[112px] lg:text-[150px] xl:text-[176px]"
      >
        <span className="text-fade-dark">DEVELOPER</span>

        <div className="relative overflow-hidden h-[1em] min-w-[260px] sm:min-w-[460px] md:min-w-[640px] lg:min-w-[860px] xl:min-w-[1000px]">
          <AnimatePresence mode="wait">
            <motion.span
              key={words[index]}
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "-100%", opacity: 0 }}
              transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
              className="absolute left-0 whitespace-nowrap text-primary"
            >
              <span className="mr-3 md:mr-5">+</span>
              {words[index]}
            </motion.span>
          </AnimatePresence>
        </div>
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
