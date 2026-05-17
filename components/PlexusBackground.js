"use client";

import { useEffect, useRef } from "react";

export default function PlexusBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationFrameId;

    // Dynamic Particle Setup & Resize
    let particles = [];

    const resizeCanvas = () => {
      const oldWidth = canvas.width;
      const oldHeight = canvas.height;
      const newWidth = window.innerWidth;
      const newHeight = window.innerHeight;

      canvas.width = newWidth;
      canvas.height = newHeight;

      // Calculate perfect density. Mobile should have fewer particles to look elegant and spread out!
      const targetCount = Math.max(
        10,
        Math.min(
          newWidth < 768 ? 22 : 65,
          Math.floor((newWidth * newHeight) / 22000)
        )
      );

      // Scale existing particles proportionally to avoid crumpling or clustering in a corner
      if (oldWidth > 0 && oldHeight > 0 && particles.length > 0) {
        particles.forEach((p) => {
          p.x = (p.x / oldWidth) * newWidth;
          p.y = (p.y / oldHeight) * newHeight;
        });
      }

      // Add or remove particles dynamically to maintain perfect spread-apart density
      if (particles.length < targetCount) {
        const toAdd = targetCount - particles.length;
        for (let i = 0; i < toAdd; i++) {
          particles.push({
            x: Math.random() * newWidth,
            y: Math.random() * newHeight,
            vx: (Math.random() - 0.5) * 0.2,
            vy: (Math.random() - 0.5) * 0.2,
            radius: Math.random() * 2.2 + 1.8,
          });
        }
      } else if (particles.length > targetCount) {
        particles.splice(targetCount);
      }
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Mouse tracking
    let mouse = { x: null, y: null };
    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    // Animation Loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Adaptive connection thresholds based on screen width to prevent crowding on mobile
      const connectionDist = canvas.width < 768 ? 100 : 150;
      const mouseRadius = canvas.width < 768 ? 110 : 180;

      // Draw particles and update positions
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        // Bounce off screen boundaries
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        // Clamp to screen boundaries
        p.x = Math.max(0, Math.min(canvas.width, p.x));
        p.y = Math.max(0, Math.min(canvas.height, p.y));

        // Draw particle node with a high-fidelity glowing drop shadow
        ctx.shadowBlur = 10;
        ctx.shadowColor = "rgba(255, 79, 0, 0.8)";
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255, 79, 0, 0.8)";
        ctx.fill();
        ctx.shadowBlur = 0; // Reset shadow blur to keep line drawing optimized

        // Connect lines to mouse
        if (mouse.x !== null && mouse.y !== null) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < mouseRadius) {
            const alpha = (1 - dist / mouseRadius) * 0.45;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = `rgba(255, 79, 0, ${alpha})`;
            ctx.lineWidth = 1.0;
            ctx.stroke();
          }
        }

        // Connect lines to nearby particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDist) {
            const alpha = (1 - dist / connectionDist) * 0.35;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(255, 79, 0, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none -z-10 bg-background"
    />
  );
}
