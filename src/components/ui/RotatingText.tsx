"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const words = ["DESIGNER", "PROTOTYPER", "AI/ML LEARNER"];

export default function RotatingText({ large = false }: { large?: boolean }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className={`flex flex-wrap items-center ${
      large 
        ? "font-headline-xl text-headline-xl md:text-headline-xl text-headline-lg-mobile leading-tight" 
        : "font-label-caps text-label-caps text-primary tracking-[0.2em]"
    }`}>
      <span className={large ? "text-on-surface font-bold" : ""}>DEVELOPER</span>
      
      {/* Straight Purple Line Separator */}
      {large && (
        <div className="hidden md:block w-[2px] h-[0.8em] bg-primary/40 mx-8 self-center" />
      )}

      <div className={`relative overflow-hidden ${
        large ? "h-[1.1em] min-w-[350px] sm:min-w-[550px] md:min-w-[750px]" : "h-[1.2em] min-w-[200px]"
      }`}>
        <AnimatePresence mode="wait">
          <motion.span
            key={words[index]}
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-100%", opacity: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className={`absolute left-0 whitespace-nowrap ${large ? "text-primary/80 font-bold" : ""}`}
          >
            <span className="text-primary font-black mr-2">+</span>
            {words[index]}
          </motion.span>
        </AnimatePresence>
      </div>
    </div>
  );
}
