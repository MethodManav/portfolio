"use client";

import type React from "react";

import { useState } from "react";
import { Database, Layout, Settings, Terminal, Wand2 } from "lucide-react";

type SkillCategory = {
  name: string;
  icon: React.ReactNode;
  skills: {
    name: string;
    level: number;
  }[];
};

export function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState<string>("Frontend");

  const categories: SkillCategory[] = [
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
      name: "Backend",
      icon: <Database className="h-5 w-5" />,
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express", level: 80 },
        { name: "MongoDB", level: 75 },
        { name: "PostgreSQL", level: 70 },
        { name: "GraphQL", level: 65 },
      ],
    },
    {
      name: "Tools",
      icon: <Settings className="h-5 w-5" />,
      skills: [
        { name: "Git", level: 90 },
        { name: "Docker", level: 70 },
        { name: "CI/CD", level: 75 },
        { name: "Jest", level: 80 },
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
      <div className="mb-12 text-center">
        <h2 className="mb-2 text-3xl font-bold text-foreground md:text-4xl">
          Skills & Expertise
        </h2>
        <p className="mx-auto max-w-2xl text-muted-foreground">
          My technical skills and areas of expertise in web development and
          design.
        </p>
      </div>

      <div className="mx-auto max-w-4xl">
        {/* Category tabs */}
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => setActiveCategory(category.name)}
              className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                activeCategory === category.name
                  ? "bg-primary text-primary-foreground"
                  : "bg-card/30 text-foreground/70 hover:bg-primary/20 hover:text-foreground"
              }`}
            >
              {category.icon}
              {category.name}
            </button>
          ))}
        </div>

        {/* Skills bars */}
        <div className="rounded-xl bg-card/30 p-6 backdrop-blur-sm">
          <div className="grid gap-6 md:grid-cols-2">
            {activeSkills.map((skill) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm font-medium text-foreground">
                    {skill.name}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {skill.level}%
                  </span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-background/50">
                  <div
                    className="h-full rounded-full bg-primary transition-all duration-500 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional skills */}
          <div className="mt-8">
            <h3 className="mb-4 text-lg font-medium text-foreground">
              Additional Skills
            </h3>
            <div className="flex flex-wrap gap-2">
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
                <span
                  key={skill}
                  className="rounded-full bg-foreground/10 px-3 py-1 text-xs font-medium text-foreground/80"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
