
import React from "react";

const ProjectsHero = () => {
  return (
    <section className="section pt-20 md:pt-24 bg-gradient-to-br from-brand-lightBlue to-white">
      <div className="container-custom text-center">
        <h1 className="heading-xl mb-6 text-brand-blue">
          Our Projects
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          See the incredible transformations we've completed for our customers. 
          From cluttered spaces to clean, organized areas - these before and after 
          photos showcase the quality of our junk removal services.
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-sm text-brand-blue">
          <span className="bg-white px-4 py-2 rounded-full">✓ Estate Cleanouts</span>
          <span className="bg-white px-4 py-2 rounded-full">✓ Basement Clearing</span>
          <span className="bg-white px-4 py-2 rounded-full">✓ Garage Organization</span>
          <span className="bg-white px-4 py-2 rounded-full">✓ Office Cleanouts</span>
        </div>
      </div>
    </section>
  );
};

export default ProjectsHero;
