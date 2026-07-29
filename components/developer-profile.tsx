"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter } from "lucide-react";
import gsap from "gsap";
import Shuffle from "./Shuffle";

const socials = [
  { href: "https://github.com/MethodManav", label: "GitHub", Icon: Github },
  {
    href: "https://www.linkedin.com/in/manav-behera-/",
    label: "LinkedIn",
    Icon: Linkedin,
  },
  { href: "https://x.com/methodmanav", label: "Twitter", Icon: Twitter },
];

export function DeveloperProfile() {
  const imageWrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = imageWrapRef.current;
    if (!el) return;

    const quickX = gsap.quickTo(el, "rotateY", { duration: 0.6, ease: "power3.out" });
    const quickY = gsap.quickTo(el, "rotateX", { duration: 0.6, ease: "power3.out" });
    const quickScale = gsap.quickTo(el, "scale", { duration: 0.6, ease: "power3.out" });

    gsap.set(el, { transformPerspective: 800 });

    const handleMove = (event: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const relX = (event.clientX - rect.left) / rect.width - 0.5;
      const relY = (event.clientY - rect.top) / rect.height - 0.5;
      quickX(relX * 18);
      quickY(-relY * 18);
      quickScale(1.03);
    };

    const handleLeave = () => {
      quickX(0);
      quickY(0);
      quickScale(1);
    };

    el.addEventListener("mousemove", handleMove);
    el.addEventListener("mouseleave", handleLeave);

    return () => {
      el.removeEventListener("mousemove", handleMove);
      el.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return (
    <div className="grid grid-cols-1 items-center gap-10 text-center md:grid-cols-2 md:text-left md:gap-12 lg:gap-20">
      {/* Profile Text */}
      <motion.div
        className="max-w-xl mx-auto md:mx-0"
        initial="hidden"
        animate="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.12 } },
        }}
      >
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 16 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
          }}
          className="mb-2 font-bold uppercase tracking-widest text-secondary"
        >
          Hi, my name is
        </motion.p>
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 24 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
          }}
        >
          <Shuffle
            text="Manav Behera"
            tag="h1"
            className="mb-4 text-4xl font-extrabold uppercase tracking-tight text-foreground md:text-5xl lg:text-6xl"
            textAlign="inherit"
            shuffleDirection="right"
            duration={0.35}
            animationMode="evenodd"
            shuffleTimes={1}
            ease="power3.out"
            stagger={0.03}
            threshold={0.1}
            triggerOnce={true}
            triggerOnHover={true}
          />
        </motion.div>
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 24 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
          }}
          className="mb-6 rounded-2xl neo-border neo-shadow bg-card p-4 text-foreground/80"
        >
          {`Backend-Focused Full-Stack Developer passionate about building fast, secure, and scalable systems. With 1+ years of experience, I specialize in Node.js, Go (Golang), PostgreSQL, and cloud-native architectures, delivering APIs and services that power data-intensive applications with reliability and performance. While my core strength lies in backend engineering, I bring a full-stack mindset—crafting clean, accessible UIs with React and Next.js to deliver polished, end-to-end solutions. I thrive in solving complex problems, optimizing systems, and shipping features that make a measurable impact.`}
        </motion.p>

        {/* Social Links */}
        <motion.div
          className="flex justify-center gap-4 md:justify-start"
          variants={{
            visible: { transition: { staggerChildren: 0.08 } },
          }}
        >
          {socials.map(({ href, label, Icon }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              variants={{
                hidden: { opacity: 0, y: 16, scale: 0.8 },
                visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4 } },
              }}
              whileHover={{ y: -4, rotate: -6, scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              className="neo-border neo-shadow-sm rounded-full bg-card p-3 text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              <Icon size={20} />
              <span className="sr-only">{label}</span>
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      {/* Profile Image */}
      <motion.div
        className="relative justify-self-center md:justify-self-end md:translate-x-6"
        initial={{ opacity: 0, scale: 0.85, rotate: 6 }}
        animate={{ opacity: 1, scale: 1, rotate: 2 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
      >
        <div
          ref={imageWrapRef}
          className="relative overflow-hidden rounded-[2.5rem] neo-border neo-shadow-lg bg-lavender h-56 w-56 sm:h-64 sm:w-64 md:h-72 md:w-72 lg:h-96 lg:w-96"
          style={{ transformStyle: "preserve-3d" }}
        >
          <Image
            src="/Profile.jpeg?height=384&width=384"
            alt="Developer profile"
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 24rem, (min-width: 768px) 18rem, (min-width: 640px) 16rem, 14rem"
            priority
          />
        </div>
      </motion.div>
    </div>
  );
}
