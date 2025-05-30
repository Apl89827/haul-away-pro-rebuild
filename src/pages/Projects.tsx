
import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProjectsHero from "@/components/projects/ProjectsHero";
import ProjectsGrid from "@/components/projects/ProjectsGrid";
import ProjectsCtaSection from "@/components/projects/ProjectsCtaSection";

const Projects = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <ProjectsHero />
        <ProjectsGrid />
        <ProjectsCtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default Projects;
