"use client";

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function VoidReveal({ children, showIndicator = true }: { children: React.ReactNode, showIndicator?: boolean }) {
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsRevealed(true);
    }, 5000);

    return () => clearTimeout(timer);
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
            {/* Bouncing Motion Logo */}
            <motion.div
              animate={{ 
                y: [0, -40, 0],
              }}
              transition={{ 
                y: { 
                  duration: 0.8, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }
              }}
              className="w-16 h-16 bg-primary rounded-sm flex items-center justify-center relative"
            >
              <div className="w-8 h-8 bg-black rotate-45" />
              {/* Outer orbit circle for extra "visionary" feel */}
              <div className="absolute inset-[-20px] border border-primary/20 rounded-full animate-pulse" />
            </motion.div>
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
