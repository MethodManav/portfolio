"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

interface Shape {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  speed: number;
  opacity: number;
  blur: number;
  type: "nebula" | "planet" | "comet";
  rotation: number;
  rotationSpeed: number;
}

export function FloatingShapes() {
  const [shapes, setShapes] = useState<Shape[]>([]);
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  useEffect(() => {
    // Space-themed colors for nebulae and celestial objects
    const darkNebulaColors = [
      "rgba(138, 43, 226, 0.15)", // Purple
      "rgba(65, 105, 225, 0.15)", // Royal blue
      "rgba(220, 20, 60, 0.15)", // Crimson
      "rgba(75, 0, 130, 0.15)", // Indigo
      "rgba(0, 191, 255, 0.15)", // Deep sky blue
    ];

    const lightNebulaColors = [
      "rgba(37, 99, 235, 0.1)", // Blue
      "rgba(79, 70, 229, 0.1)", // Indigo
      "rgba(147, 51, 234, 0.1)", // Purple
      "rgba(219, 39, 119, 0.1)", // Pink
      "rgba(59, 130, 246, 0.1)", // Light blue
    ];

    const darkPlanetColors = [
      "rgba(176, 224, 230, 0.4)", // Powder blue
      "rgba(255, 160, 122, 0.4)", // Light salmon
      "rgba(152, 251, 152, 0.4)", // Pale green
      "rgba(238, 130, 238, 0.4)", // Violet
    ];

    const lightPlanetColors = [
      "rgba(30, 64, 175, 0.3)", // Dark blue
      "rgba(79, 70, 229, 0.3)", // Indigo
      "rgba(147, 51, 234, 0.3)", // Purple
      "rgba(219, 39, 119, 0.3)", // Pink
    ];

    const nebulaColors = isDark ? darkNebulaColors : lightNebulaColors;
    const planetColors = isDark ? darkPlanetColors : lightPlanetColors;

    const types: ("nebula" | "planet" | "comet")[] = [
      "nebula",
      "nebula",
      "nebula",
      "planet",
      "comet",
    ];

    const newShapes: Shape[] = [];

    // Create nebulae (larger, more blurred shapes)
    for (let i = 0; i < 8; i++) {
      const type = types[Math.floor(Math.random() * types.length)];
      const isNebula = type === "nebula";
      const isPlanet = type === "planet";
      const isComet = type === "comet";

      newShapes.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: isNebula
          ? Math.random() * 300 + 100
          : isPlanet
          ? Math.random() * 60 + 20
          : Math.random() * 10 + 5,
        color: isNebula
          ? nebulaColors[Math.floor(Math.random() * nebulaColors.length)]
          : planetColors[Math.floor(Math.random() * planetColors.length)],
        speed: isComet
          ? Math.random() * 0.5 + 0.3
          : Math.random() * 0.05 + 0.02,
        opacity: isNebula
          ? Math.random() * 0.2 + 0.05
          : isPlanet
          ? Math.random() * 0.7 + 0.3
          : Math.random() * 0.8 + 0.2,
        blur: isNebula
          ? Math.random() * 50 + 30
          : isPlanet
          ? Math.random() * 3 + 1
          : 0,
        type,
        rotation: Math.random() * 360,
        rotationSpeed: Math.random() * 0.1 - 0.05,
      });
    }

    setShapes(newShapes);

    // Animation loop
    const interval = setInterval(() => {
      setShapes((prevShapes) =>
        prevShapes.map((shape) => ({
          ...shape,
          y: (shape.y + shape.speed) % 100,
          rotation: (shape.rotation + shape.rotationSpeed) % 360,
        }))
      );
    }, 50);

    return () => clearInterval(interval);
  }, [isDark]);

  const renderShape = (shape: Shape) => {
    const style = {
      left: `${shape.x}%`,
      top: `${shape.y}%`,
      width: `${shape.size}px`,
      height: `${shape.size}px`,
      backgroundColor: shape.color,
      opacity: shape.opacity,
      filter: `blur(${shape.blur}px)`,
      transform: `rotate(${shape.rotation}deg)`,
    };

    if (shape.type === "nebula") {
      return (
        <div key={shape.id} className="absolute rounded-full" style={style} />
      );
    } else if (shape.type === "planet") {
      return (
        <div
          key={shape.id}
          className="absolute rounded-full"
          style={{
            ...style,
            boxShadow: `0 0 ${shape.size / 4}px ${shape.color.replace(
              /[0-9.]+\)$/,
              "0.6)"
            )}`,
          }}
        />
      );
    } else {
      // Comet
      const cometStyle = {
        left: `${shape.x}%`,
        top: `${shape.y}%`,
        width: `${shape.size}px`,
        height: `${shape.size}px`,
        opacity: shape.opacity,
        filter: `blur(${shape.blur}px)`,
        transform: `rotate(${shape.rotation}deg)`,
        borderRadius: "50% 0 50% 50%",
        boxShadow: `0 0 ${shape.size}px ${
          isDark ? "rgba(255, 255, 255, 0.8)" : "rgba(30, 64, 175, 0.8)"
        }`,
        background: isDark
          ? "linear-gradient(45deg, rgba(255,255,255,0.8), rgba(70,131,255,0.4))"
          : "linear-gradient(45deg, rgba(30,64,175,0.8), rgba(59,130,246,0.4))",
      };

      return <div key={shape.id} className="absolute" style={cometStyle} />;
    }
  };

  return (
    <div className="fixed inset-0 -z-5 overflow-hidden">
      {shapes.map(renderShape)}
    </div>
  );
}
