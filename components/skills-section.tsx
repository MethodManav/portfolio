"use client";

import type React from "react";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Database, Layout, Settings, Terminal, Wand2 } from "lucide-react";
import { Reveal, RevealGroup, RevealItem } from "./reveal";

type SkillCategory = {
  name: string;
  icon: React.ReactNode;
  skills: {
    name: string;
    level: number;
  }[];
};

export function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState<string>("Backend");

  const categories: SkillCategory[] = [
    {
      name: "Backend",
      icon: <Database className="h-5 w-5" />,
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express", level: 80 },
        { name: "MongoDB", level: 75 },
        { name: "PostgreSQL", level: 70 },
        { name: "GraphQL", level: 50 },
        { name: "Redis", level: 60 },
        { name: "Java + Spring Boot", level: 50 },
        { name: "Python + FastApi", level: 40 },
        { name: "Go lang", level: 60 },
      ],
    },
    {
      name: "Frontend",
      icon: <Layout className="h-5 w-5" />,
      skills: [
        { name: "React", level: 90 },
        { name: "Next.js", level: 85 },
        { name: "TypeScript", level: 80 },
        { name: "Tailwind CSS", level: 95 },
        { name: "HTML/CSS", level: 95 },
      ],
    },

    {
      name: "Tools",
      icon: <Settings className="h-5 w-5" />,
      skills: [
        { name: "Git", level: 90 },
        { name: "Docker", level: 70 },
        { name: "CI/CD", level: 75 },
        { name: "Jest", level: 60 },
        { name: "Webpack", level: 65 },
      ],
    },
    {
      name: "Design",
      icon: <Wand2 className="h-5 w-5" />,
      skills: [
        { name: "Figma", level: 85 },
        { name: "UI/UX", level: 80 },
        { name: "Responsive Design", level: 90 },
        { name: "Animation", level: 75 },
        { name: "Accessibility", level: 85 },
      ],
    },
    {
      name: "Other",
      icon: <Terminal className="h-5 w-5" />,
      skills: [
        { name: "Agile/Scrum", level: 85 },
        { name: "Problem Solving", level: 90 },
        { name: "Communication", level: 85 },
        { name: "Mentoring", level: 80 },
        { name: "Technical Writing", level: 75 },
      ],
    },
  ];

  const activeSkills =
    categories.find((cat) => cat.name === activeCategory)?.skills || [];

  return (
    <section id="skills" className="py-16">
      <Reveal className="mb-12 text-center">
        <h2 className="mb-2 text-3xl font-extrabold uppercase tracking-tight text-foreground md:text-4xl">
          Skills & Expertise
        </h2>
        <p className="mx-auto max-w-2xl text-muted-foreground">
          My technical skills and areas of expertise in web development and
          design.
        </p>
      </Reveal>

      <Reveal delay={0.1} className="mx-auto max-w-4xl">
        {/* Category tabs */}
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => setActiveCategory(category.name)}
              className={`relative flex items-center gap-2 rounded-full neo-border neo-shadow-sm neo-hover-sm px-4 py-2 text-sm font-bold uppercase transition-colors ${
                activeCategory === category.name
                  ? "text-primary-foreground"
                  : "bg-card text-foreground/70 hover:bg-primary/20 hover:text-foreground"
              }`}
            >
              {activeCategory === category.name && (
                <motion.span
                  layoutId="active-skill-pill"
                  className="absolute inset-0 rounded-full bg-primary"
                  transition={{ type: "spring", stiffness: 350, damping: 28 }}
                />
              )}
              <span className="relative flex items-center gap-2">
                {category.icon}
                {category.name}
              </span>
            </button>
          ))}
        </div>

        {/* Skills bars */}
        <div className="rounded-2xl neo-border neo-shadow bg-card p-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
              className="grid gap-6 md:grid-cols-2"
            >
              {activeSkills.map((skill, index) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm font-bold text-foreground">
                      {skill.name}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-3 w-full overflow-hidden rounded-full neo-border-thin bg-muted">
                    <motion.div
                      className="h-full rounded-full bg-primary"
                      initial={{ width: "0%" }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{
                        duration: 0.7,
                        ease: [0.16, 1, 0.3, 1],
                        delay: index * 0.05,
                      }}
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Additional skills */}
          <div className="mt-8">
            <h3 className="mb-4 text-lg font-bold text-foreground">
              Additional Skills
            </h3>
            <RevealGroup className="flex flex-wrap gap-2">
              {[
                "JavaScript",
                "CSS3",
                "Sass",
                "Redux",
                "REST API",
                "Vercel",
                "AWS",
                "Firebase",
                "Material UI",
                "Chakra UI",
                "Storybook",
                "Cypress",
                "Responsive Design",
              ].map((skill) => (
                <RevealItem key={skill} y={12}>
                  <span className="rounded-full neo-border-thin bg-lavender px-3 py-1 text-xs font-bold text-lavender-foreground">
                    {skill}
                  </span>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
