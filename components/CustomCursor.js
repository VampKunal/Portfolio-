"use client";

import { useEffect, useState } from "react";
import { motion, useSpring } from "motion/react";

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const springConfig = { damping: 25, stiffness: 200 };
  const cursorX = useSpring(0, springConfig);
  const cursorY = useSpring(0, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      const isClickable = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') || 
        target.closest('button') ||
        target.classList.contains('cursor-pointer');
      
      setIsHovering(!!isClickable);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      {/* Main Cursor Dot */}
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 bg-[#FF4F00] rounded-full pointer-events-none z-[10000] mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
          scale: isHovering ? 2.5 : 1,
        }}
        transition={{ type: "spring", stiffness: 250, damping: 20 }}
      />
      
      {/* Outer Ring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border border-[#FF4F00] rounded-full pointer-events-none z-[10000] opacity-30"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{ type: "spring", stiffness: 150, damping: 25 }}
      />

      {/* Grid Alignment Lines (Subtle) */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{ x: cursorX, y: cursorY }}
      >
        <div className="absolute top-0 left-[-20px] w-[40px] h-px bg-[#FF4F00]/20" />
        <div className="absolute top-[-20px] left-0 h-[40px] w-px bg-[#FF4F00]/20" />
      </motion.div>
    </>
  );
};

export default CustomCursor;
