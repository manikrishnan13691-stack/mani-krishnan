import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Preloader = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsExiting(true);
            setTimeout(onComplete, 800);
          }, 300);
          return 100;
        }
        return prev + Math.random() * 12 + 3;
      });
    }, 80);
    return () => clearInterval(interval);
  }, [onComplete]);

  const displayProgress = Math.min(Math.round(progress), 100);

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          className="fixed inset-0 z-[100] bg-background flex flex-col items-center justify-center"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
        >
          {/* Background glow */}
          <motion.div
            className="absolute w-64 h-64 bg-primary/15 rounded-full blur-3xl"
            animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
          />

          {/* Logo */}
          <motion.div
            className="relative mb-12"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="font-display font-bold text-6xl text-gradient">SK.</span>
          </motion.div>

          {/* Progress bar */}
          <div className="w-48 h-[2px] bg-border/30 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-primary rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: `${displayProgress}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>

          {/* Percentage */}
          <motion.p
            className="mt-4 font-mono text-sm text-muted-foreground tabular-nums"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {displayProgress}%
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
