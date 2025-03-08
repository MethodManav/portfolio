"use client";

import { useState, useEffect } from "react";
import { Search } from "lucide-react";
import { BlogCard } from "@/components/blog-card";
import { Input } from "@/components/ui/input";
import { BackgroundGradient } from "@/components/background-gradient";
import { ParticlesBackground } from "@/components/particles-background";
import { FloatingShapes } from "@/components/floating-shapes";
import { Navbar } from "@/components/navbar";

const allPosts = [
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
  {
    id: "react-performance-optimization",
    title: "React Performance Optimization Techniques",
    excerpt:
      "Learn practical techniques to optimize your React applications for better performance and user experience.",
    content: `
      <p>Performance optimization is crucial for delivering a smooth user experience in React applications. Here are some effective techniques to speed up your React apps.</p>
      
      <h3>Memoization with React.memo, useMemo, and useCallback</h3>
      <p>React provides several APIs for memoization to prevent unnecessary re-renders:</p>
      <ul>
        <li><strong>React.memo</strong>: Memoize components to prevent re-renders when props haven't changed</li>
        <li><strong>useMemo</strong>: Cache expensive calculations between renders</li>
        <li><strong>useCallback</strong>: Prevent function recreations on each render</li>
      </ul>
      
      <h3>Code Splitting</h3>
      <p>Reduce your initial bundle size by splitting your code and loading parts of your application on demand:</p>
      
      <pre><code>
// Using React.lazy and Suspense
const LazyComponent = React.lazy(() => import('./LazyComponent'));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <LazyComponent />
    </Suspense>
  );
}
      </code></pre>
      
      <h3>Virtualization for Long Lists</h3>
      <p>When rendering long lists, virtualization can significantly improve performance by only rendering items that are visible in the viewport.</p>
      
      <h3>Optimizing Context</h3>
      <p>Context is powerful but can cause performance issues if not used correctly. Split your contexts by purpose and keep state as local as possible.</p>
      
      <h3>Profiling and Measuring</h3>
      <p>Use React DevTools Profiler and performance monitoring tools to identify bottlenecks in your application.</p>
      
      <p>By applying these techniques strategically, you can create React applications that remain fast and responsive even as they grow in complexity.</p>
    `,
    image: "/placeholder.svg?height=450&width=800",
    date: "Dec 5, 2022",
    readTime: "9 min read",
    category: "React",
    tags: ["react", "performance", "optimization", "memoization"],
  },
  {
    id: "css-animation-techniques",
    title: "Advanced CSS Animation Techniques",
    excerpt:
      "Explore advanced CSS animation techniques to create engaging and performant web animations without JavaScript.",
    content: `
      <p>CSS animations have come a long way and can now handle complex animations that previously required JavaScript. Let's explore some advanced techniques.</p>
      
      <h3>CSS Custom Properties for Dynamic Animations</h3>
      <p>Using CSS variables allows you to create animations that can be dynamically modified with JavaScript:</p>
      
      <pre><code>
.element {
  --animation-duration: 2s;
  animation: slide var(--animation-duration) ease infinite;
}

// Update with JavaScript
element.style.setProperty('--animation-duration', '0.5s');
      </code></pre>
      
      <h3>Staggered Animations</h3>
      <p>Create staggered animations using CSS custom properties and calc():</p>
      
      <pre><code>
.item {
  animation: fadeIn 1s ease forwards;
  animation-delay: calc(var(--i) * 0.1s);
}
      </code></pre>
      
      <h3>3D Transforms and Perspective</h3>
      <p>Create depth and realism with 3D transforms:</p>
      
      <pre><code>
.container {
  perspective: 1000px;
}

.card {
  transform-style: preserve-3d;
  transition: transform 0.5s;
}

.card:hover {
  transform: rotateY(180deg);
}
      </code></pre>
      
      <h3>Animation Performance</h3>
      <p>For optimal performance, stick to animating only transform and opacity properties when possible, as these can be hardware-accelerated.</p>
      
      <h3>Scroll-Triggered Animations</h3>
      <p>Use Intersection Observer API with CSS animations to trigger animations when elements enter the viewport.</p>
      
      <p>These techniques allow you to create sophisticated animations that enhance user experience while maintaining good performance.</p>
    `,
    image: "/placeholder.svg?height=450&width=800",
    date: "Nov 18, 2022",
    readTime: "7 min read",
    category: "CSS",
    tags: ["css", "animation", "transitions", "web-design"],
  },
  {
    id: "state-management-comparison",
    title: "Modern React State Management: A Comparison",
    excerpt:
      "Compare different state management approaches in React from Context API to Redux, Zustand, Jotai, and more.",
    content: `
      <p>State management in React has evolved significantly over the years. Let's compare the most popular solutions to help you choose the right one for your project.</p>
      
      <h3>React Context + useReducer</h3>
      <p>Built into React, this combination works well for simpler applications:</p>
      <ul>
        <li><strong>Pros</strong>: No extra dependencies, simple API, built into React</li>
        <li><strong>Cons</strong>: Performance concerns with large state objects, no dev tools</li>
      </ul>
      
      <h3>Redux (with Redux Toolkit)</h3>
      <p>The veteran state management library, now modernized with Redux Toolkit:</p>
      <ul>
        <li><strong>Pros</strong>: Mature ecosystem, excellent dev tools, predictable state updates</li>
        <li><strong>Cons</strong>: More boilerplate than newer alternatives, steeper learning curve</li>
      </ul>
      
      <h3>Zustand</h3>
      <p>A minimalist state management solution:</p>
      <ul>
        <li><strong>Pros</strong>: Simple API, minimal boilerplate, good performance</li>
        <li><strong>Cons</strong>: Less mature ecosystem than Redux</li>
      </ul>
      
      <pre><code>
// Zustand example
import create from 'zustand';

const useStore = create((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
}));
      </code></pre>
      
      <h3>Jotai</h3>
      <p>Atomic state management inspired by Recoil:</p>
      <ul>
        <li><strong>Pros</strong>: Atomic approach prevents unnecessary re-renders, simple API</li>
        <li><strong>Cons</strong>: Newer library with smaller community</li>
      </ul>
      
      <h3>XState</h3>
      <p>State machines for complex state logic:</p>
      <ul>
        <li><strong>Pros</strong>: Handles complex state transitions, visualizer tools</li>
        <li><strong>Cons</strong>: Steeper learning curve, might be overkill for simpler applications</li>
      </ul>
      
      <h3>Choosing the Right Solution</h3>
      <p>When selecting a state management solution, consider:</p>
      <ul>
        <li>Application size and complexity</li>
        <li>Team familiarity with the technology</li>
        <li>Performance requirements</li>
        <li>Developer experience needs</li>
      </ul>
      
      <p>For smaller applications, Context API or Zustand might be sufficient. For larger, more complex applications, Redux or XState could be better choices. The good news is that the React ecosystem offers solutions for every use case.</p>
    `,
    image: "/placeholder.svg?height=450&width=800",
    date: "Oct 30, 2022",
    readTime: "10 min read",
    category: "React",
    tags: ["react", "state-management", "redux", "zustand", "context-api"],
  },
];

// Categories for filtering
const categories = ["All", "React", "Next.js", "CSS", "TypeScript"];

export default function BlogPage() {
  const [isMounted, setIsMounted] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredPosts, setFilteredPosts] = useState(allPosts);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    // Filter posts based on search query and selected category
    const filtered = allPosts.filter((post) => {
      const matchesSearch =
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some((tag) =>
          tag.toLowerCase().includes(searchQuery.toLowerCase())
        );

      const matchesCategory =
        selectedCategory === "All" || post.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });

    setFilteredPosts(filtered);
  }, [searchQuery, selectedCategory]);

  return (
    <>
      <Navbar />
      <div className="relative">
        {/* Background elements */}
        <div className="fixed inset-0 z-0">
          <BackgroundGradient />
          {isMounted && <ParticlesBackground />}
          <FloatingShapes />
        </div>

        {/* Content */}
        <main className="relative z-10">
          <div className="container mx-auto px-4 py-16">
            {/* Header */}
            {/* <div className="mb-8 flex items-center">
              <Link href="/" className="mr-4">
                <Button variant="ghost" size="sm" className="gap-1">
                  <ArrowLeft className="h-4 w-4" />
                  Back
                </Button>
              </Link>
              <div>
                <h1 className="text-3xl font-bold text-foreground md:text-4xl">
                  Blog
                </h1>
                <p className="text-muted-foreground">
                  Thoughts, tutorials, and insights on web development and
                  design.
                </p>
              </div>
            </div> */}

            {/* Search and filters */}
            <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="relative max-w-md">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Search articles..."
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                      selectedCategory === category
                        ? "bg-primary text-primary-foreground"
                        : "bg-card/30 text-foreground/70 hover:bg-primary/20 hover:text-foreground"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Blog posts grid */}
            {filteredPosts.length > 0 ? (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {filteredPosts.map((post) => (
                  <BlogCard key={post.id} {...post} />
                ))}
              </div>
            ) : (
              <div className="flex h-40 flex-col items-center justify-center rounded-xl bg-card/30 backdrop-blur-sm">
                <p className="text-lg font-medium text-foreground">
                  No articles found
                </p>
                <p className="text-muted-foreground">
                  Try adjusting your search or filter criteria
                </p>
              </div>
            )}
          </div>
        </main>
      </div>
    </>
  );
}
