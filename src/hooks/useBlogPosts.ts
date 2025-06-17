
import { useState, useEffect } from 'react';

export interface BlogPost {
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  image: string;
  body: string;
  slug: string;
  seoTitle?: string;
  seoDescription?: string;
}

export const useBlogPosts = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        // Real blog posts from our markdown content
        const realPosts: BlogPost[] = [
          {
            title: "Spring Cleaning: A Room-by-Room Guide to Decluttering Your Cincinnati Home",
            excerpt: "Spring has arrived in Cincinnati! Transform your home with our comprehensive room-by-room guide to spring cleaning and decluttering. Make the process manageable and effective.",
            author: "Haul Away Pro Team",
            date: "February 16, 2025",
            category: "Home Organization",
            image: "/lovable-uploads/b6caf7af-dc47-439a-894f-c3a5ffb43c1e.png",
            body: "Full spring cleaning guide content...",
            slug: "spring-cleaning-room-by-room-guide-cincinnati",
            seoTitle: "Spring Cleaning Guide Cincinnati: Room-by-Room Decluttering Tips | Haul Away Pro",
            seoDescription: "Comprehensive spring cleaning guide for Cincinnati homes. Expert tips for decluttering every room, donation options, and professional junk removal services."
          },
          {
            title: "Navigating an Estate Cleanout in Cincinnati: A Compassionate Guide for Families",
            excerpt: "Losing a loved one is profound and deeply personal. In the midst of grief, managing their estate can feel overwhelming. This compassionate guide offers support and a clear path forward for Cincinnati families.",
            author: "Haul Away Pro Team",
            date: "June 16, 2025",
            category: "Estate Services",
            image: "/lovable-uploads/6afd18b0-de05-484b-b268-028fb7439465.png",
            body: "Full content from markdown file...",
            slug: "estate-cleanout-cincinnati",
            seoTitle: "Estate Cleanout Cincinnati: Compassionate Guide for Families | Haul Away Pro",
            seoDescription: "Professional estate cleanout services in Cincinnati. Compassionate support for families during difficult times. Free consultation and respectful handling of belongings."
          }
        ];
        
        setPosts(realPosts);
        setLoading(false);
      } catch (err) {
        setError('Failed to load blog posts');
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return { posts, loading, error };
};
