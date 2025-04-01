import Image from "next/image";
import { Github, Linkedin, Twitter } from "lucide-react";

export function DeveloperProfile() {
  return (
    <div className="flex flex-col items-center text-center md:flex-row md:items-center md:text-left md:gap-12 lg:gap-20">
      {/* Profile Text */}
      <div className="max-w-xl">
        <h1 className="mb-2 text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
          Manav Behera
        </h1>
        <h2 className="mb-4 text-xl text-primary md:text-2xl">
          Full-Stack Developer & UI/UX Enthusiast
        </h2>
        <p className="mb-6 text-foreground/80">
          {`I'm a passionate developer with 1+ years of experience creating
          beautiful, functional web applications. Specializing in React,
          Next.js, and modern frontend technologies, I build solutions that
          combine elegant design with robust functionality. My background in
          both design and development allows me to bridge the gap between
          aesthetics and technical implementation.`}
        </p>

        {/* Social Links */}
        <div className="flex justify-center gap-4 md:justify-start">
          <a
            href="https://github.com/MethodManav"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-foreground/10 p-3 text-foreground transition-colors hover:bg-primary/20 hover:text-primary"
          >
            <Github size={20} />
            <span className="sr-only">GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/manav-behera-/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-foreground/10 p-3 text-foreground transition-colors hover:bg-primary/20 hover:text-primary"
          >
            <Linkedin size={20} />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a
            href="https://x.com/methodmanav"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-foreground/10 p-3 text-foreground transition-colors hover:bg-primary/20 hover:text-primary"
          >
            <Twitter size={20} />
            <span className="sr-only">Twitter</span>
          </a>
        </div>
      </div>

      {/* Profile Image */}
      <div className="relative flex-shrink-0 h-72 w-72 left-52 overflow-hidden rounded-full border-4 border-primary/20 md:h-80 md:w-80 lg:h-96 lg:w-96">
        <Image
          src="/Profile.jpeg?height=384&width=384"
          alt="Developer profile"
          fill
          className="object-cover"
          priority
        />
      </div>
    </div>
  );
}
