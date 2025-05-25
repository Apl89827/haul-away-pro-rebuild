
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
        // This will be populated by your build process
        // For now, we'll use the existing static data as fallback
        const fallbackPosts: BlogPost[] = [
          {
            title: "10 Items You Should Never Put in Regular Trash",
            excerpt: "Learn about hazardous materials and electronics that require special disposal methods to protect our environment.",
            author: "Haul Away Pro Team",
            date: "March 15, 2024",
            category: "Environmental",
            image: "/placeholder.svg",
            body: "Content will be loaded from markdown files...",
            slug: "10-items-never-put-regular-trash"
          },
          {
            title: "Spring Cleaning: A Room-by-Room Guide",
            excerpt: "Make your spring cleaning more efficient with our comprehensive guide to decluttering every room in your home.",
            author: "Haul Away Pro Team", 
            date: "March 10, 2024",
            category: "Home Organization",
            image: "/placeholder.svg",
            body: "Content will be loaded from markdown files...",
            slug: "spring-cleaning-room-by-room-guide"
          },
          {
            title: "Estate Cleanout: What to Expect",
            excerpt: "Navigate the emotional and practical aspects of estate cleanouts with our compassionate, step-by-step approach.",
            author: "Haul Away Pro Team",
            date: "March 5, 2024", 
            category: "Estate Services",
            image: "/placeholder.svg",
            body: "Content will be loaded from markdown files...",
            slug: "estate-cleanout-what-to-expect"
          }
        ];
        
        setPosts(fallbackPosts);
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
