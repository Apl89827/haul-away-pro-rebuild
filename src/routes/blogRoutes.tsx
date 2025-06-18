
import { Route } from "react-router-dom";
import Blog from "@/pages/Blog";
import BlogPost from "@/pages/BlogPost";
import SpringCleaningBlog from "@/pages/SpringCleaningBlog";

export const blogRoutes = (
  <>
    <Route path="/blog" element={<Blog />} />
    <Route path="/blog/:slug" element={<BlogPost />} />
    <Route path="/blog/spring-cleaning-room-by-room-guide-cincinnati" element={<SpringCleaningBlog />} />
    <Route path="/blog/estate-cleanout-cincinnati" element={<BlogPost />} />
  </>
);
