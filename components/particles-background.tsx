"use client";

import { useCallback, useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import type { Engine } from "tsparticles-engine";

export function ParticlesBackground() {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";
  const [key, setKey] = useState(0);

  // Force re-render when theme changes
  useEffect(() => {
    setKey((prev) => prev + 1);
  }, [isDark]);

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      key={key}
      id="tsparticles"
      init={particlesInit}
      options={{
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "grab",
            },
          },
          modes: {
            grab: {
              distance: 140,
              links: {
                opacity: 0.2,
                color: isDark ? "#4d7cfe" : "#1e40af",
              },
            },
          },
        },
        particles: {
          color: {
            value: isDark
              ? ["#ffffff", "#8cb8ff", "#4d7cfe"]
              : ["#1e40af", "#3b82f6", "#1d4ed8"],
          },
          links: {
            color: isDark ? "#4d7cfe" : "#1e40af",
            distance: 150,
            enable: true,
            opacity: isDark ? 0.1 : 0.2,
            width: 1,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "out",
            },
            random: true,
            speed: 0.5,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 1000,
            },
            value: isDark ? 100 : 70,
          },
          opacity: {
            value: {
              min: isDark ? 0.1 : 0.2,
              max: isDark ? 0.5 : 0.6,
            },
            animation: {
              enable: true,
              speed: 0.3,
              minimumValue: isDark ? 0.1 : 0.2,
            },
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 3 },
            animation: {
              enable: true,
              speed: 0.5,
              minimumValue: 0.1,
            },
          },
        },
        detectRetina: true,
      }}
      className="fixed inset-0 -z-10"
    />
  );
}
