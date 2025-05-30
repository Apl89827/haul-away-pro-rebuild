
import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProjectsHero from "@/components/projects/ProjectsHero";
import ProjectsCtaSection from "@/components/projects/ProjectsCtaSection";
import ProjectsGrid from "@/components/projects/ProjectsGrid";

const Projects = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <ProjectsHero />
        <ProjectsCtaSection />
        <ProjectsGrid />
      </main>
      <Footer />
    </div>
  );
};

export default Projects;
