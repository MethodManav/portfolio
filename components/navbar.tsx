"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 bg-background/30 backdrop-blur-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between p-4">
        <Link href="/" className="flex items-center space-x-2">
          {/* <div className="h-8 w-8 rounded-full bg-primary/20 p-1">
            <div className="h-full w-full rounded-full bg-primary"></div>
          </div> */}
          <span className="text-xl font-bold text-foreground">
            Method Manav
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center space-x-8 md:flex">
          <Link
            href="#projects"
            className="text-foreground/80 transition-colors hover:text-foreground"
          >
            Projects
          </Link>
          <Link
            href="#about"
            className="text-foreground/80 transition-colors hover:text-foreground"
          >
            About
          </Link>
          <Link
            href="#skills"
            className="text-foreground/80 transition-colors hover:text-foreground"
          >
            Skills
          </Link>
          <Link
            href="#contact"
            className="text-foreground/80 transition-colors hover:text-foreground"
          >
            Contact
          </Link>
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
            <Link
              href="#projects"
              className="p-2 text-foreground/80 transition-colors hover:text-foreground"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </Link>
            <Link
              href="#about"
              className="p-2 text-foreground/80 transition-colors hover:text-foreground"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="#skills"
              className="p-2 text-foreground/80 transition-colors hover:text-foreground"
              onClick={() => setIsOpen(false)}
            >
              Skills
            </Link>
            <Link
              href="#contact"
              className="p-2 text-foreground/80 transition-colors hover:text-foreground"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
