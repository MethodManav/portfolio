"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

type DoodleShape = {
  id: number;
  kind: "circle" | "semicircle" | "square" | "blob";
  color: "primary" | "secondary" | "accent" | "lavender";
  size: number;
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  rotate: number;
};

const shapes: DoodleShape[] = [
  { id: 1, kind: "semicircle", color: "secondary", size: 90, top: "18%", left: "4%", rotate: -20 },
  { id: 2, kind: "circle", color: "accent", size: 70, top: "62%", left: "8%", rotate: 0 },
  { id: 3, kind: "square", color: "primary", size: 60, top: "8%", right: "10%", rotate: 12 },
  { id: 4, kind: "blob", color: "lavender", size: 110, bottom: "10%", right: "6%", rotate: 8 },
  { id: 5, kind: "semicircle", color: "accent", size: 80, bottom: "20%", left: "45%", rotate: 160 },
  { id: 6, kind: "circle", color: "primary", size: 50, top: "40%", right: "20%", rotate: 0 },
];

const colorClass: Record<DoodleShape["color"], string> = {
  primary: "bg-primary",
  secondary: "bg-secondary",
  accent: "bg-accent",
  lavender: "bg-lavender",
};

function renderShape(shape: DoodleShape, ref: (el: HTMLDivElement | null) => void) {
  const base = "absolute neo-border will-change-transform";
  const style = {
    top: shape.top,
    bottom: shape.bottom,
    left: shape.left,
    right: shape.right,
    width: shape.size,
    height: shape.size,
  };

  if (shape.kind === "circle") {
    return (
      <div
        key={shape.id}
        ref={ref}
        className={`${base} ${colorClass[shape.color]} rounded-full`}
        style={style}
      />
    );
  }

  if (shape.kind === "square") {
    return (
      <div
        key={shape.id}
        ref={ref}
        className={`${base} ${colorClass[shape.color]} rounded-xl`}
        style={style}
      />
    );
  }

  if (shape.kind === "semicircle") {
    return (
      <div
        key={shape.id}
        ref={ref}
        className={`${base} ${colorClass[shape.color]}`}
        style={{ ...style, borderRadius: "9999px 9999px 0 0" }}
      />
    );
  }

  // blob
  return (
    <div
      key={shape.id}
      ref={ref}
      className={`${base} ${colorClass[shape.color]}`}
      style={{ ...style, borderRadius: "42% 58% 63% 37% / 41% 44% 56% 59%" }}
    />
  );
}

export function FloatingShapes() {
  const containerRef = useRef<HTMLDivElement>(null);
  const shapeRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      shapeRefs.current.forEach((el, index) => {
        if (!el) return;
        const shape = shapes[index];

        gsap.set(el, { rotate: shape.rotate });

        gsap.to(el, {
          y: `random(-26, 26)`,
          x: `random(-18, 18)`,
          rotate: shape.rotate + (index % 2 === 0 ? 14 : -14),
          duration: 5 + (index % 3),
          delay: index * 0.2,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      });

      // Gentle parallax that follows the pointer
      const handlePointerMove = (event: PointerEvent) => {
        const { innerWidth, innerHeight } = window;
        const relX = event.clientX / innerWidth - 0.5;
        const relY = event.clientY / innerHeight - 0.5;

        shapeRefs.current.forEach((el, index) => {
          if (!el) return;
          const depth = ((index % 3) + 1) * 6;
          gsap.to(el, {
            xPercent: relX * depth,
            yPercent: relY * depth,
            duration: 1.2,
            ease: "power2.out",
            overwrite: "auto",
          });
        });
      };

      window.addEventListener("pointermove", handlePointerMove);
      return () => window.removeEventListener("pointermove", handlePointerMove);
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 -z-10 overflow-hidden opacity-70 dark:opacity-40"
    >
      {shapes.map((shape, index) =>
        renderShape(shape, (el) => {
          shapeRefs.current[index] = el;
        })
      )}
    </div>
  );
}
