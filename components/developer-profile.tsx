import Image from "next/image";
import { Github, Linkedin, Twitter } from "lucide-react";

export function DeveloperProfile() {
  return (
    <div className="grid grid-cols-1 items-center gap-10 text-center md:grid-cols-2 md:text-left md:gap-12 lg:gap-20">
      {/* Profile Text */}
      <div className="max-w-xl mx-auto md:mx-0">
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
      <div className="relative overflow-hidden rounded-full border-4 border-primary/20 h-40 w-40 sm:h-56 sm:w-56 md:h-72 md:w-72 lg:h-96 lg:w-96 justify-self-center md:justify-self-end">
        <Image
          src="/Profile.jpeg?height=384&width=384"
          alt="Developer profile"
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 24rem, (min-width: 768px) 18rem, (min-width: 640px) 14rem, 10rem"
          priority
        />
      </div>
    </div>
  );
}
