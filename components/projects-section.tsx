import { ProjectCard } from "./project-card";

const projects = [
  {
    title: "Cosmic Dashboard",
    description:
      "A responsive admin dashboard with dark mode, analytics charts, and a customizable UI.",
    image: "/placeholder.svg?height=340&width=600",
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
    tags: ["React", "TypeScript", "Tailwind CSS", "Chart.js"],
  },
  {
    title: "Nebula E-commerce",
    description:
      "Full-featured e-commerce platform with product filtering, cart functionality, and payment integration.",
    image: "/placeholder.svg?height=340&width=600",
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
    tags: ["Next.js", "MongoDB", "Stripe", "Redux"],
  },
  {
    title: "Stellar Chat",
    description:
      "Real-time chat application with message encryption, file sharing, and user presence indicators.",
    image: "/placeholder.svg?height=340&width=600",
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
    tags: ["React", "Firebase", "WebSockets", "Styled Components"],
  },
  {
    title: "Orbit CMS",
    description:
      "Headless CMS with a visual editor, content modeling, and API-first architecture.",
    image: "/placeholder.svg?height=340&width=600",
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
    tags: ["Node.js", "GraphQL", "PostgreSQL", "Docker"],
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-16">
      <div className="mb-12 text-center">
        <h2 className="mb-2 text-3xl font-bold text-foreground md:text-4xl">
          Featured Projects
        </h2>
        <p className="mx-auto max-w-2xl text-muted-foreground">
          A selection of my recent work, showcasing my skills in web
          development, design, and problem-solving.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}
