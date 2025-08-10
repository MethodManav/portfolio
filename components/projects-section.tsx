import { ProjectCard } from "./project-card";

const projects = [
  {
    title: "Smart-Sync",
    description:
      "A unified content distribution platform that posts to multiple social networks simultaneously.",
    longDescription:
      "Smart-Sync is a powerful content management platform that allows users to create content once and distribute it across multiple social media platforms automatically. With intelligent scheduling, platform-specific formatting, and performance analytics, it helps content creators and businesses maximize their online presence with minimal effort. The platform supports major social networks and provides detailed analytics on engagement across all platforms.",
    image: "/smart-sync.png?height=340&width=600",
    demoUrl: "https://smart-ochre-eight.vercel.app/",
    githubUrl: "https://github.com/MethodManav/smart",
    tags: ["Social Media", "Content Distribution", "Automation", "Analytics"],
    features: [
      "Single-point content creation for multiple platforms",
      "Automatic platform-specific formatting optimization",
      "Advanced scheduling system with timezone awareness",
      "Cross-platform engagement analytics dashboard",
      "Team collaboration features for agencies and businesses",
      "API access for developers to build custom integrations",
    ],
    technologies: [
      "Next js",
      "Node.js",
      "Express",
      "MongoDB",
      "Auth0",
      "Redis",
      "Docker",
    ],
  },
  {
    title: "SharinXDc",
    description:
      "A user-friendly web interface for generating and managing Ethereum and Solana wallets securely.",
    longDescription:
      "Smart-Sync Wallet Manager simplifies blockchain wallet creation by providing an intuitive interface for generating Ethereum and Solana wallets. Users can quickly create new wallets, securely store private keys, and manage their assets without needing deep technical knowledge. The platform ensures security through client-side key generation and encrypted storage options.",
    image: "/sharin.png?height=340&width=600",
    demoUrl: "https://sharinx-dc-yqp7.vercel.app/",
    githubUrl: "https://github.com/MethodManav/SharinxDc",
    tags: ["Blockchain", "Ethereum", "Solana", "Web3", "Crypto"],
    features: [
      "Generate Ethereum wallets (securely & offline)",
      "Generate Solana wallets (with mnemonic phrase support)",
      "User-friendly dashboard for wallet management",
      "Secure private key storage (exportable, encrypted)",
      "Basic transaction history for generated wallets",
      "Responsive design for desktop & mobile",
    ],
    technologies: ["Next.js", "Ethers.js", "Solana Web3.js"],
  },
  {
    title: "Java Single & Multi-threaded Server",
    description:
      "A server application demonstrating single-threaded and multi-threaded architectures in Java for handling client requests.",
    longDescription:
      "This project implements both single-threaded and multi-threaded server models in Java to illustrate their performance and concurrency differences. It establishes socket connections to handle client requests, enabling the processing of multiple clients sequentially (single-threaded) or concurrently (multi-threaded) using Java's multithreading capabilities. The implementation showcases socket creation, I/O streams, and thread management with a focus on efficiency and scalability.",
    image: "/java-server.png?height=340&width=600",
    demoUrl: "https://github.com/MethodManav/single-thread-server",
    githubUrl: "https://github.com/MethodManav/single-thread-server",
    tags: ["Java", "Sockets", "Networking", "Multithreading"],
    features: [
      "Single-threaded server for sequential client request handling",
      "Multi-threaded server for concurrent request processing",
      "Socket programming for TCP communication",
      "I/O stream handling for request/response exchange",
      "Demonstrates performance differences between server models",
    ],
    technologies: ["Java", "Socket Programming", "Threads", "I/O Streams"],
    teamSize: 1,
    duration: "2 weeks", // Adjust based on your actual time
    role: "Java Developer",
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
