import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BlogCard } from "./blog-card";
import { Button } from "@/components/ui/button";

// Sample blog data
const featuredPosts = [
  {
    id: "building-responsive-uis",
    title: "Building Responsive UIs with Modern CSS",
    excerpt:
      "Learn how to create responsive user interfaces using modern CSS techniques like Grid, Flexbox, and Container Queries.",
    content: `
      <p>Responsive design has evolved significantly over the years. While media queries remain important, modern CSS provides powerful tools that make creating adaptive layouts much easier.</p>
      
      <h3>CSS Grid: Two-Dimensional Layouts</h3>
      <p>CSS Grid allows us to create complex two-dimensional layouts with ease. One of its most powerful features is the ability to create responsive designs without media queries using functions like <code>minmax()</code>, <code>auto-fill</code>, and <code>auto-fit</code>.</p>
      
      <pre><code>
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}
      </code></pre>
      
      <p>This simple code creates a responsive grid where items automatically adjust based on the available space, without any media queries!</p>
      
      <h3>Flexbox: One-Dimensional Layouts</h3>
      <p>Flexbox excels at distributing space and aligning items in one dimension (either rows or columns). It's perfect for navigation bars, card layouts, and centering elements.</p>
      
      <h3>Container Queries: Component-Level Responsiveness</h3>
      <p>Container queries are a game-changer for component-based design. Unlike media queries that look at the viewport size, container queries allow components to adapt based on their parent container's size.</p>
      
      <p>By combining these modern CSS techniques, you can create truly responsive interfaces that adapt beautifully across all device sizes.</p>
    `,
    image: "/placeholder.svg?height=450&width=800",
    date: "Mar 15, 2023",
    readTime: "6 min read",
    category: "CSS",
    tags: ["css", "responsive", "web-design", "flexbox", "grid"],
  },
  {
    id: "nextjs-server-components",
    title: "Understanding Next.js Server Components",
    excerpt:
      "Dive into Next.js Server Components and learn how they can improve performance and user experience in your applications.",
    content: `
      <p>Next.js 13 introduced a revolutionary approach to rendering React components with the App Router and React Server Components. This paradigm shift offers significant performance benefits and simplifies data fetching.</p>
      
      <h3>What Are Server Components?</h3>
      <p>Server Components are React components that render on the server. Unlike traditional components, they:</p>
      <ul>
        <li>Don't increase your JavaScript bundle size</li>
        <li>Can access server-side resources directly</li>
        <li>Remain interactive through Client Components integration</li>
      </ul>
      
      <h3>Benefits of Server Components</h3>
      <p>Using Server Components provides several advantages:</p>
      <ul>
        <li><strong>Improved Performance</strong>: Reduced JavaScript sent to the client</li>
        <li><strong>Direct Backend Access</strong>: Query databases without API endpoints</li>
        <li><strong>Automatic Code Splitting</strong>: Only ship the necessary client-side code</li>
        <li><strong>Enhanced Security</strong>: Keep sensitive operations on the server</li>
      </ul>
      
      <h3>When to Use Client Components</h3>
      <p>While Server Components are powerful, Client Components are still necessary for:</p>
      <ul>
        <li>Interactive UI elements</li>
        <li>Using React hooks</li>
        <li>Browser-only APIs</li>
        <li>Event listeners</li>
      </ul>
      
      <p>The beauty of Next.js is how it seamlessly integrates both paradigms, allowing you to build fast, interactive applications with the best of both worlds.</p>
    `,
    image: "/placeholder.svg?height=450&width=800",
    date: "Feb 22, 2023",
    readTime: "8 min read",
    category: "Next.js",
    tags: ["nextjs", "react", "server-components", "performance"],
  },
  {
    id: "typescript-best-practices",
    title: "TypeScript Best Practices for Large Projects",
    excerpt:
      "Essential TypeScript patterns and practices to keep your large-scale projects maintainable and type-safe.",
    content: `
      <p>As projects grow in size and complexity, TypeScript becomes increasingly valuable for maintaining code quality and developer productivity. Here are some best practices I've learned from working on large TypeScript projects.</p>
      
      <h3>Strict Type Checking</h3>
      <p>Always enable strict mode in your tsconfig.json. This catches more potential issues and forces better typing practices:</p>
      
      <pre><code>
{
  "compilerOptions": {
    "strict": true,
    // Other options...
  }
}
      </code></pre>
      
      <h3>Type vs Interface</h3>
      <p>Use interfaces for public APIs and when you want to take advantage of declaration merging. Use type aliases for unions, intersections, and when you don't need interface features.</p>
      
      <h3>Discriminated Unions</h3>
      <p>Discriminated unions are powerful for modeling state machines and handling different cases:</p>
      
      <pre><code>
type RequestState =
  | { status: 'idle' }
  | { status: 'loading' }
  | { status: 'success', data: ResponseData }
  | { status: 'error', error: Error };
      </code></pre>
      
      <h3>Utility Types</h3>
      <p>TypeScript's built-in utility types like Partial, Pick, Omit, and Record can help you create derived types without duplication.</p>
      
      <h3>Branded Types</h3>
      <p>Use branded types to distinguish between primitive types that should be treated differently:</p>
      
      <pre><code>
type UserId = string & { readonly _brand: unique symbol };

function createUserId(id: string): UserId {
  return id as UserId;
}
      </code></pre>
      
      <p>By following these practices, you can build large-scale TypeScript applications that remain maintainable and type-safe as they grow.</p>
    `,
    image: "/placeholder.svg?height=450&width=800",
    date: "Jan 10, 2023",
    readTime: "7 min read",
    category: "TypeScript",
    tags: ["typescript", "best-practices", "type-safety", "development"],
  },
];

export function BlogSection() {
  return (
    <section id="blog" className="py-16">
      <div className="mb-12 flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
        <div>
          <h2 className="mb-2 text-3xl font-bold text-foreground md:text-4xl">
            Latest Articles
          </h2>
          <p className="text-muted-foreground">
            Thoughts, tutorials, and insights on web development and design.
          </p>
        </div>
        <Link href="/blog">
          <Button variant="outline" className="group">
            View All Posts
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </Link>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {featuredPosts.map((post) => (
          <BlogCard key={post.id} {...post} />
        ))}
      </div>
    </section>
  );
}
