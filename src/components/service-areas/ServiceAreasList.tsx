
import React from "react";
import { CheckCircle } from "lucide-react";

const ServiceAreasList = () => {
  const serviceAreas = {
    "Primary Service Areas": [
      "Cincinnati",
      "Blue Ash", 
      "Mason",
      "West Chester",
      "Fairfield",
      "Hamilton",
      "Springdale",
      "Forest Park",
      "Sharonville",
      "Evendale"
    ],
    "Extended Service Areas": [
      "Loveland",
      "Lebanon",
      "Monroe",
      "Trenton",
      "Oxford",
      "Middletown",
      "Franklin",
      "Springboro",
      "Centerville",
      "Kettering"
    ],
    "Butler County": [
      "Fairfield",
      "Hamilton", 
      "Oxford",
      "Monroe",
      "Trenton",
      "Middletown",
      "Franklin",
      "West Chester",
      "Mason",
      "Lebanon"
    ],
    "Warren County": [
      "Mason",
      "Lebanon",
      "Springboro",
      "Franklin",
      "Centerville",
      "Miamisburg",
      "Kettering",
      "Beavercreek",
      "Xenia",
      "Bellbrook"
    ]
  };

  return (
    <section className="section bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="heading-lg mb-4">Areas We Serve</h2>
          <p className="text-lg text-gray-600">
            We provide comprehensive junk removal services throughout the Greater Cincinnati area. 
            Don't see your city listed? Call us - we may still be able to help!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(serviceAreas).map(([category, cities]) => (
            <div key={category} className="bg-brand-gray rounded-lg p-6">
              <h3 className="heading-sm mb-4 text-brand-darkBlue">{category}</h3>
              <ul className="space-y-2">
                {cities.map((city, index) => (
                  <li key={index} className="flex items-center gap-2 text-gray-700">
                    <CheckCircle className="w-4 h-4 text-brand-green flex-shrink-0" />
                    {city}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center bg-brand-lightBlue rounded-lg p-8">
          <h3 className="heading-sm mb-4">Not Sure If We Serve Your Area?</h3>
          <p className="text-gray-600 mb-6">
            We're always expanding our service areas and may be able to accommodate special requests. 
            Give us a call and we'll let you know if we can help with your junk removal needs.
          </p>
          <a 
            href="tel:5138762858" 
            className="inline-flex items-center gap-2 bg-brand-blue text-white font-semibold py-3 px-6 rounded-md hover:bg-brand-darkBlue transition-colors"
          >
            <Phone className="h-4 w-4" />
            Call (513) 876-2858
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreasList;
