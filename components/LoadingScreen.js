"use client";

import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import useThemeStore from "./useThemeStore";

const LoadingScreen = ({ onComplete }) => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 285, y: 174 });

  // Get persisted theme state from Zustand
  const store = useThemeStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const darkMode = mounted ? store.darkMode : false;

  useEffect(() => {
    document.body.style.overflow = "hidden";

    // Track mouse coordinates dynamically for the tactical coordinate widget
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);

    // Simulate progress animation smoothly
    const totalDuration = 2800; // 2.8 seconds
    const intervalTime = 30;
    const totalSteps = totalDuration / intervalTime;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const nextProgress = Math.min(100, (currentStep / totalSteps) * 100);

      // Add a slight realistic variable deceleration as progress nears 100%
      setProgress(nextProgress);

      if (currentStep >= totalSteps) {
        clearInterval(timer);
        setTimeout(() => {
          setLoading(false);
          setTimeout(() => {
            if (onComplete) onComplete();
          }, 600); // Allow fade-out animation to complete
        }, 400); // Hold at 100% briefly for signal lock indicator
      }
    }, intervalTime);

    return () => {
      clearInterval(timer);
      window.removeEventListener("mousemove", handleMouseMove);
      document.body.style.overflow = "";
    };
  }, [onComplete]);

  // Format mouse coordinates to match target design (e.g. X:0285 Y:0174)
  const formatCoord = (val) => String(Math.round(val)).padStart(4, "0");

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className={`fixed inset-0 z-[9999] transition-colors duration-500 flex items-center justify-center font-mono overflow-hidden select-none ${
            darkMode ? "bg-[#030303] text-[#F4F4F5]" : "bg-[#F4F4F5] text-[#18181B]"
          }`}
        >
          {/* Subtle Screen Crosshair Alignment Lines */}
          <div className="absolute inset-0 pointer-events-none opacity-20">
            <div className={`absolute top-1/2 left-0 w-full h-[1px] ${darkMode ? "bg-[#FF4F00]/20" : "bg-[#FF4F00]/15"}`} />
            <div className={`absolute left-1/2 top-0 w-[1px] h-full ${darkMode ? "bg-[#FF4F00]/20" : "bg-[#FF4F00]/15"}`} />
          </div>

          {/* Top Left: Signal Lock */}
          <div className={`absolute top-8 left-8 flex flex-col gap-1 text-[10px] uppercase tracking-[0.25em] ${
            darkMode ? "text-white/40" : "text-[#18181B]/40"
          }`}>
            <span>SIGNAL LOCK</span>
          </div>

          {/* Near Top Left: Tactical Target Coordinate Reticle Widget */}
          <div className={`absolute top-20 left-8 flex items-center gap-4 text-[9px] font-mono pointer-events-none ${
            darkMode ? "text-[#FF4F00]/70" : "text-[#FF4F00]/95"
          }`}>
            {/* Rotating Targeting Widget Circle */}
            <div className={`relative w-8 h-8 flex items-center justify-center border rounded-full ${
              darkMode ? "border-[#FF4F00]/40" : "border-[#FF4F00]/60"
            }`}>
              <div className={`absolute w-[2px] h-4 ${darkMode ? "bg-[#FF4F00]/40" : "bg-[#FF4F00]/50"}`} />
              <div className={`absolute h-[2px] w-4 ${darkMode ? "bg-[#FF4F00]/40" : "bg-[#FF4F00]/50"}`} />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="absolute w-6 h-6 border-t border-[#FF4F00] rounded-full"
              />
              <div className="w-1.5 h-1.5 rounded-full bg-[#FF4F00] animate-ping" />
            </div>
            <div className="flex flex-col tracking-[0.15em]">
              <span className="font-bold text-[#FF4F00]">TRACKING SYSTEM</span>
              <span className={`${darkMode ? "text-white/40" : "text-[#18181B]/50"} mt-0.5`}>
                X:{formatCoord(mousePos.x)} Y:{formatCoord(mousePos.y)}
              </span>
            </div>
          </div>

          {/* Center Circular Connection Loader */}
          <div className="relative flex flex-col items-center justify-center z-10">
            {/* Outer Progress Orbital Circle */}
            <div className={`relative w-48 h-48 rounded-full border flex items-center justify-center ${
              darkMode ? "border-white/5" : "border-black/5"
            }`}>
              {/* Spinning orbiting dot container */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 w-full h-full"
              >
                {/* Orbiting dot */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#FF4F00] shadow-[0_0_12px_#FF4F00]" />
              </motion.div>

              {/* Central Progress Number Text */}
              <div className="text-6xl font-bold tracking-tighter flex items-center">
                <span>{Math.round(progress)}</span>
              </div>
            </div>

            {/* Connection Subtitles Underneath */}
            <div className="mt-8 flex flex-col items-center gap-1.5 text-center">
              <span className={`text-[10px] uppercase tracking-[0.35em] ${
                darkMode ? "text-white/30" : "text-[#18181B]/40"
              }`}>
                ESTABLISHING CONNECTION
              </span>
              <div className="h-4 flex items-center justify-center">
                {progress >= 100 ? (
                  <span className="text-[10px] uppercase tracking-[0.35em] text-[#FF4F00] font-bold animate-pulse">
                    SIGNAL ACQUIRED - READY
                  </span>
                ) : (
                  <span className="text-[10px] uppercase tracking-[0.35em] text-[#FF4F00]/70 font-semibold">
                    CONNECTING...
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Bottom Left: Brand Tag */}
          <div className={`absolute bottom-8 left-8 text-[10px] uppercase tracking-[0.3em] font-bold ${
            darkMode ? "text-white/30" : "text-[#18181B]/40"
          }`}>
            <span className={darkMode ? "text-white/40" : "text-[#18181B]/50"}>KUNAL_RAI</span>
            <span className="text-[#FF4F00]">.TECH</span>
          </div>

          {/* Bottom Right: Coordinates */}
          <div className={`absolute bottom-8 right-8 text-[10px] uppercase tracking-[0.25em] ${
            darkMode ? "text-white/30" : "text-[#18181B]/45"
          }`}>
            <span>28.6139°N 77.2990°E</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
