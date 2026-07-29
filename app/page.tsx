"use client";

import { FloatingShapes } from "@/components/floating-shapes";
import { Navbar } from "@/components/navbar";
import { DeveloperProfile } from "@/components/developer-profile";
import { AboutSection } from "@/components/about-section";
import { ContactSection } from "@/components/contact-section";
import { ProjectsSection } from "@/components/projects-section";
import { SkillsSection } from "@/components/skills-section";
import { BlogSection } from "@/components/blog-section";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="relative">
        {/* Background elements */}
        <div className="fixed inset-0 z-0 bg-background neo-dot-grid">
          <FloatingShapes />
        </div>

        {/* Content */}
        <main className="relative z-10">
          {/* Hero section with developer profile */}
          <section className="container mx-auto flex min-h-[calc(100vh-4rem)] items-center px-4 py-16">
            <DeveloperProfile />
          </section>

          {/* Projects section */}
          <section className="container mx-auto px-4">
            <ProjectsSection />
          </section>
          
          {/* Blog section */}
          <section className="container mx-auto px-4">
            <BlogSection />
          </section>

          {/* About section */}
          <section className="container mx-auto px-4">
            <AboutSection />
          </section>

          {/* Skills section */}
          <section className="container mx-auto px-4">
            <SkillsSection />
          </section>

          {/* Contact section */}
          <section className="container mx-auto px-4">
            <ContactSection />
          </section>
        </main>
      </div>
    </>
  );
}
