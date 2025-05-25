
import React from "react";
import { Calendar, User } from "lucide-react";

const BlogGrid = () => {
  const blogPosts = [
    {
      title: "10 Items You Should Never Put in Regular Trash",
      excerpt: "Learn about hazardous materials and electronics that require special disposal methods to protect our environment.",
      author: "Haul Away Pro Team",
      date: "March 15, 2024",
      category: "Environmental",
      image: "/placeholder.svg"
    },
    {
      title: "Spring Cleaning: A Room-by-Room Guide",
      excerpt: "Make your spring cleaning more efficient with our comprehensive guide to decluttering every room in your home.",
      author: "Haul Away Pro Team", 
      date: "March 10, 2024",
      category: "Home Organization",
      image: "/placeholder.svg"
    },
    {
      title: "Estate Cleanout: What to Expect",
      excerpt: "Navigate the emotional and practical aspects of estate cleanouts with our compassionate, step-by-step approach.",
      author: "Haul Away Pro Team",
      date: "March 5, 2024", 
      category: "Estate Services",
      image: "/placeholder.svg"
    },
    {
      title: "How to Prepare for Furniture Removal",
      excerpt: "Simple steps to prepare your home and furniture for efficient, damage-free removal by our professional team.",
      author: "Haul Away Pro Team",
      date: "February 28, 2024",
      category: "Tips & Tricks",
      image: "/placeholder.svg"
    },
    {
      title: "The Hidden Costs of DIY Junk Removal",
      excerpt: "Why hiring professionals often costs less than doing it yourself when you factor in time, truck rental, and disposal fees.",
      author: "Haul Away Pro Team",
      date: "February 20, 2024",
      category: "Cost Savings",
      image: "/placeholder.svg"
    },
    {
      title: "Recycling vs. Donation: Making the Right Choice",
      excerpt: "Learn how to decide whether your unwanted items should be recycled, donated, or properly disposed of.",
      author: "Haul Away Pro Team",
      date: "February 15, 2024",
      category: "Environmental",
      image: "/placeholder.svg"
    }
  ];

  return (
    <section className="section bg-white">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article 
              key={index}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
            >
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="text-sm text-brand-blue font-medium mb-2">
                  {post.category}
                </div>
                <h3 className="heading-sm mb-3 text-brand-darkBlue">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-4 text-xs text-gray-500">
                  <div className="flex items-center gap-1">
                    <User className="w-3 h-3" />
                    {post.author}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {post.date}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600">
            More blog posts coming soon! Follow us for the latest updates.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BlogGrid;
