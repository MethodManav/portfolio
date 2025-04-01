"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
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
      <div
        ref={cardRef}
        className="group cursor-pointer relative overflow-hidden rounded-xl bg-card/30 backdrop-blur-sm transition-all duration-300 hover:bg-card/50 hover:shadow-lg hover:shadow-primary/10"
        onClick={toggleExpand}
      >
        <div className="aspect-video w-full overflow-hidden">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            width={600}
            height={340}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        <div className="p-6">
          <h3 className="mb-2 text-xl font-bold text-foreground">{title}</h3>
          <p className="mb-4 text-sm text-muted-foreground line-clamp-2">
            {description}
          </p>

          <div className="mb-4 flex flex-wrap gap-2">
            {tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
              >
                {tag}
              </span>
            ))}
            {tags.length > 3 && (
              <span className="rounded-full bg-foreground/10 px-3 py-1 text-xs font-medium text-foreground/70">
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
      </div>

      {/* Modal/Popup for expanded view */}
      {isExpanded && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 p-4 backdrop-blur-sm">
          <div
            ref={modalRef}
            className="animate-in fade-in zoom-in-95 slide-in-from-bottom-5 max-h-[90vh] w-full max-w-4xl overflow-auto rounded-xl bg-card shadow-xl"
          >
            <div className="relative">
              {/* Header image */}
              <div className="relative h-64 w-full sm:h-80">
                <Image
                  src={image || "/placeholder.svg"}
                  alt={title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent"></div>
              </div>

              {/* Close button */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-4 rounded-full bg-background/50 backdrop-blur-sm hover:bg-background/70"
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
              <h2 className="mb-4 text-2xl font-bold text-foreground sm:text-3xl">
                {title}
              </h2>

              <div className="mb-6 grid gap-6 md:grid-cols-3">
                {/* Project details */}
                <div className="space-y-4 md:col-span-2">
                  <div>
                    <h3 className="mb-2 text-lg font-semibold text-foreground">
                      Overview
                    </h3>
                    <p className="text-foreground/80">{expandedDescription}</p>
                  </div>

                  {features.length > 0 && (
                    <div>
                      <h3 className="mb-2 text-lg font-semibold text-foreground">
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
                <div className="rounded-xl bg-foreground/5 p-4">
                  <h3 className="mb-3 text-lg font-semibold text-foreground">
                    Project Details
                  </h3>

                  <div className="space-y-3">
                    {technologies.length > 0 && (
                      <div className="flex items-start gap-2">
                        <Layers className="mt-0.5 h-4 w-4 text-primary" />
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
                    className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
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
          </div>
        </div>
      )}
    </>
  );
}
