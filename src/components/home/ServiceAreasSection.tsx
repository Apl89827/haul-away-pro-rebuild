
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

        {/* Google Maps Embed */}
        <div className="mb-12 max-w-4xl mx-auto">
          <div className="bg-white rounded-lg p-6">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d472379.22106238076!2d-84.3982185!3d39.37692295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dc6f226382aa093%3A0xbe7b2fe630d2e4b3!2sHaulAway%20Pro!5e1!3m2!1sen!2sus!4v1748813812965!5m2!1sen!2sus" 
              width="100%" 
              height="400" 
              style={{ border: 0 }} 
              allowFullScreen={true}
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full rounded-lg"
              title="HaulAway Pro Service Area Map"
            />
          </div>
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
