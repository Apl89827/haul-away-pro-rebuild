
import React from "react";
import { Check } from "lucide-react";

const WhyChooseSection = () => {
  const benefits = [
    {
      title: "Experienced & Uniformed Team",
      description: "Professional, background-checked crew members who respect your property"
    },
    {
      title: "Transparent Volume-Based Pricing",
      description: "Clear pricing starting at just $99, with no hidden fees or surprises"
    },
    {
      title: "Eco-Friendly Disposal",
      description: "We recycle or donate whenever possible to minimize landfill waste"
    },
    {
      title: "Satisfaction Guaranteed",
      description: "We're not satisfied until you are - that's our promise to you"
    }
  ];

  return (
    <section className="section bg-white">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2">
            <h2 className="heading-lg mb-6">Why Choose Haul Away Pro?</h2>
            
            <div className="space-y-6">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="flex gap-4">
                  <div className="mt-1 flex-shrink-0">
                    <div className="w-6 h-6 rounded-full bg-brand-blue flex items-center justify-center">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="heading-sm mb-1">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-brand-blue rounded-lg opacity-20"></div>
              <img 
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=8256&q=80"
                alt="Professional junk removal team" 
                className="rounded-lg shadow-lg relative z-10 w-full h-auto object-cover"
                style={{ maxHeight: "500px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
