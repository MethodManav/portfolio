"use client";

import { useEffect, useState } from "react";
import { BackgroundGradient } from "@/components/background-gradient";
import { ParticlesBackground } from "@/components/particles-background";
import { FloatingShapes } from "@/components/floating-shapes";
import { Navbar } from "@/components/navbar";
import { DeveloperProfile } from "@/components/developer-profile";

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <>
      <Navbar />
      <div className="relative">
        {/* Background elements */}
        <div className="fixed inset-0 z-0">
          <BackgroundGradient />
          {isMounted && <ParticlesBackground />}
          <FloatingShapes />
        </div>

        {/* Content */}
        <main className="relative z-10">
          {/* Hero section with developer profile */}
          <section className="container mx-auto flex min-h-[calc(100vh-4rem)] items-center px-4 py-16">
            <DeveloperProfile />
          </section>
        </main>
      </div>
    </>
  );
}
