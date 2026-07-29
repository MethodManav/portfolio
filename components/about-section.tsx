"use client";

import { Briefcase, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";
import { Reveal, RevealGroup, RevealItem } from "./reveal";

const timeline = [
  {
    Icon: Briefcase,
    title: "Junior Backend Developer",
    meta: "2024 - Present • Elemensis Softech LLP.",
    description:
      "Leading frontend development for enterprise applications, mentoring junior developers, and implementing best practices.",
  },
  {
    Icon: Briefcase,
    title: "UI/UX Intern",
    meta: "2023 - 2024 • Tata Strive",
    description:
      "Developed responsive websites and web applications for clients across various industries.",
  },
  {
    Icon: GraduationCap,
    title: "BCA",
    meta: "2021 - 2024 • Bhagwan Mahavir University",
    description:
      "Specialized in Human-Computer Interaction and Web Technologies.",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-16">
      <Reveal className="mb-12 text-center">
        <h2 className="mb-2 text-3xl font-extrabold uppercase tracking-tight text-foreground md:text-4xl">
          About Me
        </h2>
        <p className="mx-auto max-w-2xl text-muted-foreground">
          My journey, experience, and what drives me as a developer.
        </p>
      </Reveal>

      <div className="grid gap-8 md:grid-cols-2">
        {/* Left column - Bio */}
        <Reveal y={24} className="rounded-2xl neo-border neo-shadow bg-card p-6">
          <h3 className="mb-4 text-xl font-bold text-foreground">
            My Story
          </h3>
          <p className="mb-4 text-foreground/80">
            {`I started my journey as a self-taught developer, fascinated by the
            ability to create something from nothing with just code. What began
            as a hobby quickly evolved into a passion and then a career.`}
          </p>
          <p className="mb-4 text-foreground/80">
            {`With a background in both design and computer science, I bring a
            unique perspective to development projects. I believe in creating
            applications that are not only functional but also intuitive and
            enjoyable to use.`}
          </p>
          <p className="text-foreground/80">
            {`When I'm not coding, you can find me exploring new technologies,
            contributing to open-source projects, or mentoring aspiring
            developers. I'm constantly learning and evolving my skills to stay
            at the forefront of web development.`}
          </p>
        </Reveal>

        {/* Right column - Timeline */}
        <Reveal y={24} delay={0.1} className="rounded-2xl neo-border neo-shadow bg-card p-6">
          <h3 className="mb-4 text-xl font-bold text-foreground">
            Experience & Education
          </h3>

          <RevealGroup className="space-y-6">
            {timeline.map(({ Icon, title, meta, description }) => (
              <RevealItem
                key={title}
                className="relative border-l-[3px] border-border pl-6"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 300, damping: 15, delay: 0.15 }}
                  className="absolute -left-2.5 mt-1.5 h-4 w-4 rounded-full neo-border bg-primary"
                />
                <div className="mb-1 flex items-center">
                  <Icon className="mr-2 h-4 w-4 text-secondary" />
                  <h4 className="text-lg font-bold text-foreground">{title}</h4>
                </div>
                <p className="mb-1 text-sm font-bold text-secondary">{meta}</p>
                <p className="text-sm text-foreground/80">{description}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </Reveal>
      </div>
    </section>
  );
}
