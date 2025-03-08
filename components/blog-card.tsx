"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Calendar, ChevronDown, ChevronUp, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface BlogCardProps {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
}

export function BlogCard({
  id,
  title,
  excerpt,
  content,
  image,
  date,
  readTime,
  category,
  tags,
}: BlogCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className={cn(
        "group overflow-hidden rounded-xl bg-card/30 backdrop-blur-sm transition-all duration-300",
        isExpanded ? "col-span-full" : ""
      )}
    >
      <div
        className={cn(
          "grid transition-all duration-300",
          isExpanded ? "grid-cols-1 md:grid-cols-2" : ""
        )}
      >
        {/* Image */}
        <div
          className={cn(
            "aspect-video w-full overflow-hidden",
            isExpanded ? "md:h-full" : ""
          )}
        >
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            width={800}
            height={450}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Category and date */}
          <div className="mb-3 flex items-center justify-between">
            <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
              {category}
            </span>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <div className="flex items-center">
                <Calendar className="mr-1 h-3 w-3" />
                {date}
              </div>
              <div className="flex items-center">
                <Clock className="mr-1 h-3 w-3" />
                {readTime}
              </div>
            </div>
          </div>

          {/* Title */}
          <h3 className="mb-2 text-xl font-bold text-foreground">{title}</h3>

          {/* Excerpt or Content */}
          <div
            className={cn(
              "prose prose-sm dark:prose-invert max-w-none text-foreground/80",
              isExpanded ? "" : "line-clamp-3"
            )}
          >
            {isExpanded ? (
              <div dangerouslySetInnerHTML={{ __html: content }} />
            ) : (
              <p>{excerpt}</p>
            )}
          </div>

          {/* Tags - only show when expanded */}
          {isExpanded && (
            <div className="mt-4 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-foreground/10 px-2 py-1 text-xs font-medium text-foreground/70"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}

          {/* Actions */}
          <div className="mt-4 flex items-center justify-between">
            <Button
              variant="ghost"
              size="sm"
              className="p-0 text-primary hover:bg-transparent hover:text-primary/80"
              onClick={toggleExpand}
            >
              {isExpanded ? (
                <span className="flex items-center">
                  <ChevronUp className="mr-1 h-4 w-4" />
                  Show Less
                </span>
              ) : (
                <span className="flex items-center">
                  <ChevronDown className="mr-1 h-4 w-4" />
                  Read More
                </span>
              )}
            </Button>

            {isExpanded && (
              <Link href={`/blog/${id}`}>
                <Button variant="outline" size="sm">
                  View Full Post
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
