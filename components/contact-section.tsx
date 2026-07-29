"use client";

import type React from "react";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Mail, MapPin, MessageSquare, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Reveal } from "@/components/reveal";

export function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-16">
      <Reveal className="mb-12 text-center">
        <h2 className="mb-2 text-3xl font-extrabold uppercase tracking-tight text-foreground md:text-4xl">
          Get In Touch
        </h2>
        <p className="mx-auto max-w-2xl text-muted-foreground">
          {`Have a project in mind or want to discuss opportunities? I'd love to
          hear from you.`}
        </p>
      </Reveal>

      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
        {/* Contact form */}
        <Reveal y={24} className="rounded-2xl neo-border neo-shadow bg-card p-6">
          <AnimatePresence mode="wait">
          {isSubmitted ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="flex h-full flex-col items-center justify-center text-center"
            >
              <motion.div
                initial={{ scale: 0, rotate: -30 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: "spring", stiffness: 260, damping: 15, delay: 0.1 }}
                className="mb-4 rounded-full neo-border bg-primary p-3"
              >
                <MessageSquare className="h-6 w-6 text-primary-foreground" />
              </motion.div>
              <h3 className="mb-2 text-xl font-bold text-foreground">
                Message Sent!
              </h3>
              <p className="text-muted-foreground">
                {`Thank you for reaching out. I'll get back to you as soon as
                possible.`}
              </p>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onSubmit={handleSubmit}
              className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-bold text-foreground"
                  >
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    placeholder="Manav Behera"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-bold text-foreground"
                  >
                    Your Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formState.email}
                    onChange={handleChange}
                    placeholder="manav@example.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-bold text-foreground"
                >
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formState.subject}
                  onChange={handleChange}
                  placeholder="Project Inquiry"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-bold text-foreground"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or inquiry..."
                  rows={5}
                  required
                />
              </div>

              <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.98 }}>
                <Button
                  type="submit"
                  variant="secondary"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24">
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                          fill="none"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send className="h-4 w-4" />
                      Send Message
                    </span>
                  )}
                </Button>
              </motion.div>
            </motion.form>
          )}
          </AnimatePresence>
        </Reveal>

        {/* Contact info */}
        <div className="flex flex-col justify-between gap-6">
          <Reveal y={24} delay={0.1} className="rounded-2xl neo-border neo-shadow bg-card p-6">
            <h3 className="mb-4 text-xl font-bold text-foreground">
              Contact Information
            </h3>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="rounded-full neo-border bg-secondary p-3">
                  <Mail className="h-5 w-5 text-secondary-foreground" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-muted-foreground">
                    Email
                  </h4>
                  <a
                    href="mailto:alex@example.com"
                    className="text-foreground hover:text-primary"
                  >
                    manavbehera123@gmail.com
                  </a>
                </div>
              </div>

              {/* <div className="flex items-start gap-4">
                <div className="rounded-full bg-primary/20 p-3">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground">
                    Phone
                  </h4>
                  <a
                    href="tel:+11234567890"
                    className="text-foreground hover:text-primary"
                  >
                    +1 (123) 456-7890
                  </a>
                </div>
              </div> */}

              <div className="flex items-start gap-4">
                <div className="rounded-full neo-border bg-accent p-3">
                  <MapPin className="h-5 w-5 text-accent-foreground" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-muted-foreground">
                    Location
                  </h4>
                  <p className="text-foreground">Surat, Gujarat</p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal y={24} delay={0.2} className="rounded-2xl neo-border neo-shadow bg-card p-6">
            <h3 className="mb-4 text-xl font-bold text-foreground">
              {` Let's Connect`}
            </h3>
            <p className="mb-4 text-foreground/80">
              {` Whether you have a project in mind, job opportunity, or just want
              to say hello, I'm always open to discussing new ideas and
              opportunities.`}
            </p>
            <p className="text-foreground/80">
              {` I typically respond within 24 hours.`}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
