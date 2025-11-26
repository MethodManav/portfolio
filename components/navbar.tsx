"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    id: string
  ) => {
    event.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false); // Close mobile menu after clicking
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="sticky left-0 right-0 top-0 z-50 bg-background/30 backdrop-blur-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between p-4">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold text-foreground">
            Method Manav
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center space-x-8 md:flex">
          <a
            href="#projects"
            onClick={(e) => scrollToSection(e, "projects")}
            className="text-foreground/80 transition-colors hover:text-foreground"
          >
            Projects
          </a>
          <a
            href="#about"
            onClick={(e) => scrollToSection(e, "about")}
            className="text-foreground/80 transition-colors hover:text-foreground"
          >
            About
          </a>
          <a
            href="#skills"
            onClick={(e) => scrollToSection(e, "skills")}
            className="text-foreground/80 transition-colors hover:text-foreground"
          >
            Skills
          </a>
          <Link
            href="#blog"
            className="text-foreground/80 transition-colors hover:text-foreground"
          >
            Blog
          </Link>
          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, "contact")}
            className="text-foreground/80 transition-colors hover:text-foreground"
          >
            Contact
          </a>
          <ThemeToggle />
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="flex items-center md:hidden">
          <ThemeToggle />
          <button
            onClick={toggleMenu}
            className="ml-2 rounded-md p-2 text-foreground hover:bg-accent"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="absolute left-0 right-0 z-20 bg-background/95 p-4 backdrop-blur-lg md:hidden">
          <div className="flex flex-col space-y-4">
            <a
              href="#projects"
              onClick={(e) => scrollToSection(e, "projects")}
              className="p-2 text-foreground/80 transition-colors hover:text-foreground"
            >
              Projects
            </a>
            <a
              href="#about"
              onClick={(e) => scrollToSection(e, "about")}
              className="p-2 text-foreground/80 transition-colors hover:text-foreground"
            >
              About
            </a>
            <a
              href="#skills"
              onClick={(e) => scrollToSection(e, "skills")}
              className="p-2 text-foreground/80 transition-colors hover:text-foreground"
            >
              Skills
            </a>
            <Link
              href="/blog"
              className="p-2 text-foreground/80 transition-colors hover:text-foreground"
            >
              Blog
            </Link>
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, "contact")}
              className="p-2 text-foreground/80 transition-colors hover:text-foreground"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
