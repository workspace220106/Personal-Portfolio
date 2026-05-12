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
    <div className={`flex items-center w-full ${
      large 
        ? "font-headline-xl text-headline-xl md:text-headline-xl text-headline-lg-mobile leading-tight" 
        : "font-label-caps text-label-caps text-primary tracking-[0.2em]"
    }`}>
      <span className={large ? "text-on-surface font-bold whitespace-nowrap" : ""}>DEVELOPER</span>
      
      <div className={`relative overflow-hidden mx-8 ${
        large ? "h-[1.1em] min-w-[320px] sm:min-w-[450px] md:min-w-[550px]" : "h-[1.2em] min-w-[180px]"
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

      {/* Horizontal "Tail" Line filling the space */}
      {large && (
        <motion.div 
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, delay: 0.5, ease: "circOut" }}
          className="flex-grow h-[4px] bg-gradient-to-r from-primary/60 to-transparent rounded-full origin-left shadow-[0_0_10px_rgba(192,193,255,0.2)]" 
        />
      )}
    </div>
  );
}
