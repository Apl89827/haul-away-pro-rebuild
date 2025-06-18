import React from "react";
import ProjectCard from "./ProjectCard";

const ProjectsGrid = () => {
  const projects = [
    {
      id: 1,
      title: "Shed Demo - Cincinnati",
      description: "Completely demolished and removed an old wooden shed structure from a residential backyard. Cleared all debris and materials, leaving the concrete pad clean and ready for the homeowner's next project.",
      beforeImage: "/lovable-uploads/0796a4c1-a6b9-43e3-9802-814d814fe0ba.png",
      afterImage: "/lovable-uploads/74ebdce5-f24d-4d48-ac5a-02a0e5e27a5b.png",
      location: "Cincinnati, OH",
      category: "Shed Demo",
      duration: "1 day"
    },
    {
      id: 2,
      title: "Construction Debris Removal - Loveland",
      description: "Removed old deck materials and construction debris from a residential property. Cleared scattered wood planks, railings, and demolished deck components to restore the yard space.",
      beforeImage: "/lovable-uploads/75e8bacd-66d7-495f-92be-50e9dbf729a6.png",
      afterImage: "/lovable-uploads/07bcfce8-bfae-46fb-a1f3-a5a4bdfe5b72.png",
      location: "Loveland, OH",
      category: "Construction Debris",
      duration: "4 hours"
    },
    {
      id: 3,
      title: "Commercial Junk Removal - Sharonville",
      description: "Cleared out commercial junk and debris from a loading dock area. Removed cardboard boxes, tubes, metal mesh, and various commercial waste items to restore the workspace.",
      beforeImage: "/lovable-uploads/72852415-73b7-4e71-b443-29a12ed2a596.png",
      afterImage: "/lovable-uploads/618a2d7c-20b3-422c-ac20-51980d2f4cc0.png",
      location: "Sharonville, OH",
      category: "Commercial Junk",
      duration: "3 hours"
    },
    {
      id: 4,
      title: "Garage Cleanout - Finneytown",
      description: "Transformed a cluttered basement garage space filled with stored items, equipment, and miscellaneous belongings into a clean, organized area ready for use.",
      beforeImage: "/lovable-uploads/df2f36c6-319b-49b1-a1e1-ab8a78114d28.png",
      afterImage: "/lovable-uploads/aa9d9d0b-770d-4996-84ce-b33df5c306ad.png",
      location: "Finneytown, OH",
      category: "Garage Cleanout",
      duration: "1 day"
    },
    {
      id: 5,
      title: "Apartment Cleanout - Batavia",
      description: "Cleared out cluttered outdoor deck area filled with bags, boxes, and miscellaneous items. Transformed the space back into a clean, usable outdoor area for the tenants.",
      beforeImage: "/lovable-uploads/9b888145-8903-470d-8ac8-a9b131f39942.png",
      afterImage: "/lovable-uploads/99d82d32-b460-4eef-bb39-e952c7133337.png",
      location: "Batavia, OH",
      category: "Apartment Cleanout",
      duration: "4 hours"
    },
    {
      id: 6,
      title: "Pool Removal - Hamilton",
      description: "Removed an old above-ground pool filled with debris and miscellaneous items from a residential backyard. Cleaned up the entire area and restored the yard space for the homeowner.",
      beforeImage: "/lovable-uploads/24d16cfa-a2f0-4a24-9f12-658bc58fad09.png",
      afterImage: "/lovable-uploads/fd1e5499-e1b5-4f60-8336-32aca7363317.png",
      location: "Hamilton, OH",
      category: "Pool Removal",
      duration: "1 day"
    },
    {
      id: 7,
      title: "House Cleanout - Anderson Township",
      description: "Completely cleared out a severely cluttered bedroom filled with clothes, personal items, and household belongings. Transformed the space from an overwhelming mess into a clean, ready-to-use room.",
      beforeImage: "/lovable-uploads/6cbf7605-03a1-4a5e-acef-a063828f71f4.png",
      afterImage: "/lovable-uploads/df8b8633-114a-4d30-b544-bd36718c23fe.png",
      location: "Anderson Township, OH",
      category: "House Cleanout",
      duration: "1 day"
    }
  ];

  return (
    <section className="section bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="heading-lg mb-4 text-brand-blue">Recent Project Transformations</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Every project tells a story of transformation. Here are some of our recent success stories.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsGrid;
