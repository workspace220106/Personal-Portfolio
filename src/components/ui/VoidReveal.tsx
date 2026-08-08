"use client";

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function VoidReveal({ children, showIndicator = true }: { children: React.ReactNode, showIndicator?: boolean }) {
  const [isRevealed, setIsRevealed] = useState(false);
  const [progress, setProgress] = useState(1);

  useEffect(() => {
    const startTime = Date.now();
    const duration = 8000; // 8 seconds

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const currentProgress = Math.min(1 + Math.floor((elapsed / duration) * 99), 100);
      setProgress(currentProgress);

      if (elapsed >= duration) {
        clearInterval(interval);
        setIsRevealed(true);
      }
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen">
      {/* The Void Overlay */}
      <motion.div
        className="fixed inset-0 z-[100] bg-black pointer-events-none"
        initial={{ opacity: 1 }}
        animate={{
          opacity: isRevealed ? 0 : 1,
          scale: isRevealed ? 1.1 : 1
        }}
        transition={{ duration: 2.2, ease: [0.22, 1, 0.36, 1] }}
      />

      <AnimatePresence>
        {!isRevealed && showIndicator && (
          <motion.div
            className="fixed inset-0 z-[101] flex flex-col items-center justify-center pointer-events-none"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            {/* Percentage loader and progress bar */}
            <div className="flex flex-col items-center justify-center w-64 md:w-80 px-6">
              <span className="font-headline-xl text-5xl md:text-6xl text-primary font-bold mb-4 tracking-widest tabular-nums drop-shadow-[0_0_15px_rgba(192,193,255,0.4)]">
                {progress}%
              </span>
              <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden relative">
                <div 
                  className="h-full bg-primary transition-all duration-75 ease-out shadow-[0_0_8px_rgba(192,193,255,0.8)]"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* The Actual Content */}
      <motion.div
        className="relative"
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: isRevealed ? 1 : 0,
          y: isRevealed ? 0 : 20
        }}
        transition={{ duration: 1.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>

      {/* Animated Spacer */}
      <motion.div 
        animate={{ height: isRevealed ? 0 : "100vh" }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        className="w-full overflow-hidden"
      />
    </div>
  );
}
