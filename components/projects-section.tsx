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
    title: "Stellar Chat",
    description:
      "Real-time chat application with message encryption, file sharing, and user presence indicators.",
    longDescription:
      "Stellar Chat is a secure messaging platform built with React and Firebase. It offers end-to-end encrypted messaging, real-time user presence indicators, file and media sharing capabilities, and group chat functionality with admin controls.",
    image: "/placeholder.svg?height=340&width=600",
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
    tags: ["React", "Firebase", "WebSockets", "Styled Components"],
    features: [
      "End-to-end encrypted messaging for privacy",
      "Real-time user presence and typing indicators",
      "File and media sharing with preview capabilities",
      "Group chat with admin controls and moderation",
      "Message search and conversation history",
    ],
    technologies: [
      "React",
      "Firebase",
      "WebSockets",
      "Styled Components",
      "Crypto-JS",
    ],
    teamSize: 2,
    duration: "3 months",
    role: "Frontend Developer",
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
