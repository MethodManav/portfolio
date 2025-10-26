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
          {`Backend-Focused Full-Stack Developer passionate about building fast, secure, and scalable systems. With 1+ years of experience, I specialize in Node.js, Go (Golang), PostgreSQL, and cloud-native architectures, delivering APIs and services that power data-intensive applications with reliability and performance. While my core strength lies in backend engineering, I bring a full-stack mindset—crafting clean, accessible UIs with React and Next.js to deliver polished, end-to-end solutions. I thrive in solving complex problems, optimizing systems, and shipping features that make a measurable impact.`}
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
      <div className="relative overflow-hidden rounded-full border-4 border-primary/20 h-56 w-56 sm:h-64 sm:w-64 md:h-72 md:w-72 lg:h-96 lg:w-96 justify-self-center md:justify-self-end md:translate-x-6 transform transition-transform">
        <Image
          src="/Profile.jpeg?height=384&width=384"
          alt="Developer profile"
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 24rem, (min-width: 768px) 18rem, (min-width: 640px) 16rem, 14rem"
          priority
        />
      </div>
    </div>
  );
}
