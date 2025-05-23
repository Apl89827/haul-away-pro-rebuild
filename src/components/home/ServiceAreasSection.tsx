
import React from "react";

const ServiceAreasSection = () => {
  const areas = [
    "Cincinnati",
    "West Chester",
    "Mason",
    "Springdale",
    "Fairfield",
    "Sharonville",
    "Blue Ash",
    "Loveland",
    "Montgomery",
    "Milford",
    "Anderson Township",
    "Kenwood",
    "Hyde Park"
  ];

  return (
    <section className="section bg-brand-lightBlue">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="heading-lg mb-4 text-brand-blue">Service Areas</h2>
          <p className="text-lg text-gray-600">
            We proudly serve the Greater Cincinnati area and surrounding communities.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mb-8">
          {areas.map((area) => (
            <div key={area} className="bg-white rounded-md p-3 text-center shadow-sm">
              {area}
            </div>
          ))}
        </div>
        
        <p className="text-center text-gray-600">
          Don't see your area listed? Contact us to check if we service your location!
        </p>
      </div>
    </section>
  );
};

export default ServiceAreasSection;
