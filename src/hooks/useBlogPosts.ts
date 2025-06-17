
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
            title: "Navigating an Estate Cleanout in Cincinnati: A Compassionate Guide for Families",
            excerpt: "Losing a loved one is profound and deeply personal. In the midst of grief, managing their estate can feel overwhelming. This compassionate guide offers support and a clear path forward for Cincinnati families.",
            author: "Haul Away Pro Team",
            date: "December 16, 2024",
            category: "Estate Services",
            image: "/lovable-uploads/6afd18b0-de05-484b-b268-028fb7439465.png",
            body: "Full content from markdown file...",
            slug: "navigating-estate-cleanout-cincinnati-compassionate-guide",
            seoTitle: "Estate Cleanout Cincinnati: Compassionate Guide for Families | Haul Away Pro",
            seoDescription: "Professional estate cleanout services in Cincinnati. Compassionate support for families during difficult times. Free consultation and respectful handling of belongings."
          },
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
