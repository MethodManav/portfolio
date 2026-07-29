"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ExternalLink, Github, X, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  demoUrl: string;
  githubUrl: string;
  tags: string[];
  // Additional fields for expanded view
  longDescription?: string;
  features?: string[];
  technologies?: string[];
  teamSize?: number;
  duration?: string;
  role?: string;
}

export function ProjectCard({
  title,
  description,
  image,
  demoUrl,
  githubUrl,
  tags,
  longDescription = "",
  features = [],
  technologies = [],
}: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  const springConfig = { stiffness: 200, damping: 20 };
  const rotateX = useSpring(useTransform(mouseY, [0, 1], [8, -8]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [0, 1], [-8, 8]), springConfig);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set((event.clientX - rect.left) / rect.width);
    mouseY.set((event.clientY - rect.top) / rect.height);
  };

  const handleMouseLeave = () => {
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  // Handle click outside to close
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isExpanded &&
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setIsExpanded(false);
      }
    };

    // Handle escape key to close
    const handleEscKey = (event: KeyboardEvent) => {
      if (isExpanded && event.key === "Escape") {
        setIsExpanded(false);
      }
    };

    if (isExpanded) {
      document.body.style.overflow = "hidden";
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleEscKey);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscKey);
    };
  }, [isExpanded]);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  // Use the long description if provided, otherwise use the regular description
  const expandedDescription = longDescription || description;

  return (
    <>
      <motion.div
        ref={cardRef}
        onClick={toggleExpand}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformPerspective: 800 }}
        whileHover={{ scale: 1.02, y: -6 }}
        whileTap={{ scale: 0.99 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className="group cursor-pointer relative overflow-hidden rounded-2xl neo-border neo-shadow bg-card"
      >
        <div className="aspect-video w-full overflow-hidden border-b-[3px] border-border">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            width={600}
            height={340}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        <div className="p-6">
          <h3 className="mb-2 text-xl font-extrabold text-foreground">{title}</h3>
          <p className="mb-4 text-sm text-muted-foreground line-clamp-2">
            {description}
          </p>

          <div className="mb-4 flex flex-wrap gap-2">
            {tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="rounded-full neo-border-thin bg-primary px-3 py-1 text-xs font-bold text-primary-foreground"
              >
                {tag}
              </span>
            ))}
            {tags.length > 3 && (
              <span className="rounded-full neo-border-thin bg-lavender px-3 py-1 text-xs font-bold text-lavender-foreground">
                +{tags.length - 3}
              </span>
            )}
          </div>

          <div className="flex gap-3">
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink size={16} />
              Live Demo
            </a>
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
              onClick={(e) => e.stopPropagation()}
            >
              <Github size={16} />
              Source Code
            </a>
          </div>
        </div>
      </motion.div>

      {/* Modal/Popup for expanded view */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/40 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              ref={modalRef}
              initial={{ opacity: 0, scale: 0.95, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 12 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="max-h-[90vh] w-full max-w-4xl overflow-auto rounded-2xl neo-border neo-shadow-lg bg-card"
            >
              <div className="relative">
                {/* Header image */}
                <div className="relative h-64 w-full border-b-[3px] border-border sm:h-80">
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Close button */}
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute right-4 top-4 rounded-full bg-card"
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsExpanded(false);
                  }}
                >
                  <X className="h-5 w-5" />
                  <span className="sr-only">Close</span>
                </Button>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                <h2 className="mb-4 text-2xl font-extrabold uppercase tracking-tight text-foreground sm:text-3xl">
                  {title}
                </h2>

                <div className="mb-6 grid gap-6 md:grid-cols-3">
                  {/* Project details */}
                  <div className="space-y-4 md:col-span-2">
                    <div>
                      <h3 className="mb-2 text-lg font-bold text-foreground">
                        Overview
                      </h3>
                      <p className="text-foreground/80">{expandedDescription}</p>
                    </div>

                    {features.length > 0 && (
                      <div>
                        <h3 className="mb-2 text-lg font-bold text-foreground">
                          Key Features
                        </h3>
                        <ul className="list-inside list-disc space-y-1 text-foreground/80">
                          {features.map((feature, index) => (
                            <li key={index}>{feature}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  {/* Project metadata */}
                  <div className="rounded-2xl neo-border-thin bg-muted p-4">
                    <h3 className="mb-3 text-lg font-bold text-foreground">
                      Project Details
                    </h3>

                    <div className="space-y-3">
                      {technologies.length > 0 && (
                        <div className="flex items-start gap-2">
                          <Layers className="mt-0.5 h-4 w-4 text-secondary" />
                          <div>
                            <p className="text-xs text-muted-foreground">
                              Tech Stack
                            </p>
                            <p className="text-sm text-foreground">
                              {technologies.join(", ")}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Tags */}
                <div className="mb-6 flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full neo-border-thin bg-primary px-3 py-1 text-xs font-bold text-primary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex flex-wrap gap-4">
                  <a href={demoUrl} target="_blank" rel="noopener noreferrer">
                    <Button className="gap-2">
                      <ExternalLink size={16} />
                      View Live Demo
                    </Button>
                  </a>
                  <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="gap-2">
                      <Github size={16} />
                      View Source Code
                    </Button>
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
