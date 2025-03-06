"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";

export function BackgroundGradient() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Create stars
    const stars: {
      x: number;
      y: number;
      radius: number;
      opacity: number;
      pulse: number;
      pulseFactor: number;
    }[] = [];
    const starCount = isDark ? 200 : 100;

    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5,
        opacity: Math.random() * 0.8 + 0.2,
        pulse: Math.random() * 0.1,
        pulseFactor: 0,
      });
    }

    let animationFrameId: number;

    const render = () => {
      if (!ctx) return;

      // Create gradient
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);

      if (isDark) {
        // Dark mode - deep space gradient
        gradient.addColorStop(0, "rgba(13, 6, 30, 1)"); // Deep purple
        gradient.addColorStop(0.5, "rgba(9, 9, 36, 1)"); // Deep blue
        gradient.addColorStop(1, "rgba(2, 0, 10, 1)"); // Almost black
      } else {
        // Light mode - light blue sky gradient
        gradient.addColorStop(0, "rgba(224, 242, 254, 1)"); // Light sky blue
        gradient.addColorStop(0.5, "rgba(186, 230, 253, 1)"); // Light blue
        gradient.addColorStop(1, "rgba(240, 249, 255, 1)"); // Very light blue
      }

      // Fill canvas with gradient
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw stars (only in dark mode or fewer/lighter in light mode)
      if (isDark || true) {
        stars.forEach((star) => {
          // Update star pulsing
          star.pulseFactor += star.pulse;
          const pulsatingRadius =
            star.radius * (1 + 0.2 * Math.sin(star.pulseFactor));

          // Draw star
          ctx.beginPath();
          ctx.arc(star.x, star.y, pulsatingRadius, 0, Math.PI * 2);

          // In light mode, use darker stars with lower opacity
          const starOpacity = isDark ? star.opacity : star.opacity * 0.3;
          ctx.fillStyle = isDark
            ? `rgba(255, 255, 255, ${starOpacity})`
            : `rgba(0, 51, 102, ${starOpacity})`;

          ctx.fill();

          // Add glow effect to some stars
          if (star.radius > 1 && isDark) {
            const glow = ctx.createRadialGradient(
              star.x,
              star.y,
              0,
              star.x,
              star.y,
              star.radius * 4
            );
            glow.addColorStop(0, `rgba(120, 180, 255, ${star.opacity * 0.5})`);
            glow.addColorStop(1, "rgba(120, 180, 255, 0)");

            ctx.beginPath();
            ctx.arc(star.x, star.y, star.radius * 4, 0, Math.PI * 2);
            ctx.fillStyle = glow;
            ctx.fill();
          }
        });
      }

      animationFrameId = window.requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [isDark]);

  return <canvas ref={canvasRef} className="fixed inset-0 -z-10" />;
}
