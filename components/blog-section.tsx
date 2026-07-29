"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Reveal, RevealGroup, RevealItem } from "./reveal";

// Sample blog data
const featuredPosts: Array<{
  id: string;
  title: string;
  image?: string;
  slug?: string;
  url?: string;
  href?: string;
}> = [
  {
    id: "post-1",
    title: "If React Is an SPA, How Does It Handle URL Changes?",
    image: "/react.png?height=340&width=600",
    slug: "if-react-is-an-spa-how-does-it-handle-url-changes",
    url: "https://medium.com/@methodmanav/if-react-is-an-spa-how-does-it-handle-url-changes-a08857c3f300",
  },
];

export function BlogSection() {
  return (
    <section id="blog" className="py-16">
      <Reveal className="mb-12 flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
        <div>
          <h2 className="mb-2 text-3xl font-extrabold uppercase tracking-tight text-foreground md:text-4xl">
            Latest Blog
          </h2>
          <p className="text-muted-foreground">
            Thoughts, tutorials, and insights on web development and design.
          </p>
        </div>
      </Reveal>

      <RevealGroup className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {featuredPosts.map((post) => {
          const href = post.url ?? post.href ?? `${post.slug ?? post.id}`;

          return (
            <RevealItem key={post.id ?? href}>
              <motion.div whileHover={{ y: -6 }} transition={{ type: "spring", stiffness: 260, damping: 20 }}>
                <Link
                  href={href}
                  className="group block overflow-hidden rounded-2xl neo-border neo-shadow bg-card"
                  aria-label={`Read "${post.title}"`}
                >
                  {/* Image */}
                  <div className="h-48 w-full overflow-hidden border-b-[3px] border-border bg-muted">
                    {post.image && (
                      <Image
                        src={post.image}
                        alt={post.title ?? "Blog post image"}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        width={600}
                        height={340}
                      />
                    )}
                  </div>

                  {/* Title */}
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-foreground">
                      {post.title}
                    </h3>
                  </div>
                </Link>
              </motion.div>
            </RevealItem>
          );
        })}
      </RevealGroup>
    </section>
  );
}
