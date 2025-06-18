
import React from "react";
import ProjectCard from "./ProjectCard";

const ProjectsGrid = () => {
  const projects = [
    {
      id: 1,
      title: "Complete Estate Cleanout - Hyde Park",
      description: "Cleared out a 3-bedroom home filled with decades of belongings. Our team carefully sorted through items, donated what we could, and responsibly disposed of the rest.",
      beforeImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
      afterImage: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&h=400&fit=crop",
      location: "Hyde Park, Cincinnati",
      category: "Estate Cleanout",
      duration: "2 days"
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
      title: "Office Building Cleanout - Downtown",
      description: "Cleared out an entire office floor including furniture, electronics, and filing cabinets. All electronics were recycled responsibly.",
      beforeImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop",
      afterImage: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=600&h=400&fit=crop",
      location: "Downtown Cincinnati",
      category: "Commercial Cleanout",
      duration: "3 days"
    },
    {
      id: 4,
      title: "Garage Cleanout - Mason",
      description: "Turned an overcrowded garage back into a functional space. Removed old appliances, furniture, and organized remaining items.",
      beforeImage: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=600&h=400&fit=crop",
      afterImage: "https://images.unsplash.com/photo-1560185009-5b539f6f83e0?w=600&h=400&fit=crop",
      location: "Mason, OH",
      category: "Garage Cleanout",
      duration: "4 hours"
    },
    {
      id: 5,
      title: "Attic Clearance - Oakley",
      description: "Cleared decades of stored items from a cramped attic space. Found some valuable antiques that we helped the family preserve.",
      beforeImage: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop",
      afterImage: "https://images.unsplash.com/photo-1560185008-b033106af5d3?w=600&h=400&fit=crop",
      location: "Oakley, Cincinnati",
      category: "Attic Cleanout",
      duration: "1 day"
    },
    {
      id: 6,
      title: "Apartment Move-Out - Over-the-Rhine",
      description: "Helped a tenant clear out their apartment quickly for move-out. Removed furniture, appliances, and personal items.",
      beforeImage: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop",
      afterImage: "https://images.unsplash.com/photo-1560448204-444034e4603c?w=600&h=400&fit=crop",
      location: "Over-the-Rhine, Cincinnati",
      category: "Apartment Cleanout",
      duration: "6 hours"
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
