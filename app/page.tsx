"use client";

import { useEffect, useState } from "react";
import { BackgroundGradient } from "@/components/background-gradient";
import { ParticlesBackground } from "@/components/particles-background";
import { FloatingShapes } from "@/components/floating-shapes";
import { Navbar } from "@/components/navbar";

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <>
      <Navbar />
      <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden">
        {/* Background elements */}
        <div className="fixed inset-0 z-0">
          <BackgroundGradient />
          {isMounted && <ParticlesBackground />}
          <FloatingShapes />
        </div>

        {/* Portfolio content */}
        <div className="z-10 w-full max-w-3xl px-5 text-center">
          <h1 className="mb-6 text-5xl font-bold tracking-tight text-foreground md:text-6xl">
            Manav Behera
          </h1>
          <p className="mb-8 text-xl text-foreground/80">
            Full Stack Developer
          </p>
          <div className="flex justify-center gap-4">
            <button className="rounded-full bg-primary px-6 py-2.5 font-medium text-primary-foreground transition-all hover:bg-primary/90">
              View Projects
            </button>
            <button className="rounded-full border border-primary/30 bg-transparent px-6 py-2.5 font-medium text-foreground transition-all hover:bg-primary/10">
              Contact Me
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
