import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BlogCard } from "./blog-card";
import { Button } from "@/components/ui/button";

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
    url:"https://medium.com/@methodmanav/if-react-is-an-spa-how-does-it-handle-url-changes-a08857c3f300"
  },

];

export function BlogSection() {
  return (
    <section id="blog" className="py-16">
      <div className="mb-12 flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
        <div>
          <h2 className="mb-2 text-3xl font-bold text-foreground md:text-4xl">
            Latest Blog
          </h2>
          <p className="text-muted-foreground">
            Thoughts, tutorials, and insights on web development and design.
          </p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {featuredPosts.map((post) => {
          const href =
        (post as any).url ??
        (post as any).href ??
        `${(post as any).slug ?? (post as any).id}`;

          return (
        <Link
          key={(post as any).id ?? href}
          href={href}
          className="group block overflow-hidden rounded-lg border bg-card transition-shadow hover:shadow-lg"
          aria-label={`Read "${(post as any).title}"`}
        >
          {/* Image */}
          <div className="h-48 w-full overflow-hidden bg-muted">
            {/* If you have next/image available, replace <img> with <Image> */}
            <img
          src={(post as any).image}
          alt={(post as any).title ?? "Blog post image"}
          className="h-full w-full object-cover transition-transform group-hover:scale-105"
            />
          </div>

          {/* Title */}
          <div className="p-4">
            <h3 className="text-lg font-semibold text-foreground">
          {(post as any).title}
            </h3>
          </div>
        </Link>
          );
        })}
      </div>
    </section>
  );
}
