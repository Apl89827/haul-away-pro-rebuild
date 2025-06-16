
import React from "react";
import { Calendar, User } from "lucide-react";
import { Link } from "react-router-dom";
import { useBlogPosts } from "@/hooks/useBlogPosts";

const BlogGrid = () => {
  const { posts, loading, error } = useBlogPosts();

  if (loading) {
    return (
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center">
            <p className="text-gray-600">Loading blog posts...</p>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center">
            <p className="text-red-600">{error}</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section bg-white">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <Link 
              key={index}
              to={`/blog/${post.slug}`}
              className="block"
            >
              <article className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="text-sm text-brand-blue font-medium mb-2">
                    {post.category}
                  </div>
                  <h3 className="heading-sm mb-3 text-brand-darkBlue hover:text-brand-blue transition-colors">
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
            </Link>
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
