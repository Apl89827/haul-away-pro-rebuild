
import React from "react";
import { Link } from "react-router-dom";
import { CheckCircle, Phone } from "lucide-react";

const ServiceAreasList = () => {
  const cincinnatiNeighborhoods = [
    "Over-the-Rhine",
    "Downtown Cincinnati", 
    "The Banks",
    "Newport",
    "Covington",
    "Hyde Park",
    "Oakley",
    "Mount Adams",
    "Clifton",
    "Walnut Hills",
    "Mount Auburn",
    "Corryville",
    "University of Cincinnati",
    "Northside",
    "Camp Washington",
    "Queensgate",
    "West End",
    "East Walnut Hills",
    "Evanston",
    "Avondale",
    "Bond Hill",
    "Roselawn",
    "Golf Manor",
    "Pleasant Ridge",
    "Kennedy Heights",
    "Silverton",
    "Deer Park",
    "Blue Ash",
    "Montgomery",
    "Symmes Township",
    "Anderson Township",
    "Mariemont",
    "Terrace Park",
    "Indian Hill",
    "Madeira",
    "Wyoming",
    "Lockland",
    "Elmwood Place",
    "Saint Bernard",
    "Norwood",
    "Cheviot",
    "Delhi Township",
    "Green Township",
    "Colerain Township",
    "Springfield Township",
    "Finneytown",
    "Forest Park",
    "Springdale",
    "Sharonville",
    "Evendale"
  ];

  const nearbyAreas = [
    "Mason",
    "West Chester",
    "Fairfield", 
    "Hamilton",
    "Loveland",
    "Milford",
    "Kenwood",
    "Sycamore Township",
    "Deerfield Township"
  ];

  const formatNeighborhoodSlug = (neighborhood: string) => {
    return neighborhood.toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^a-z0-9-]/g, '');
  };

  return (
    <section className="section bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="heading-lg mb-4">Areas We Serve</h2>
          <p className="text-lg text-gray-600">
            We provide comprehensive junk removal services throughout Cincinnati and surrounding neighborhoods. 
            Click on any area below to learn more about our services in that location.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-brand-gray rounded-lg p-6">
            <h3 className="heading-sm mb-4 text-brand-darkBlue">Cincinnati Neighborhoods</h3>
            <div className="grid grid-cols-1 gap-2">
              {cincinnatiNeighborhoods.map((neighborhood) => (
                <Link
                  key={neighborhood}
                  to={`/junk-removal-${formatNeighborhoodSlug(neighborhood)}`}
                  className="flex items-center gap-2 text-gray-700 hover:text-brand-blue hover:bg-white p-2 rounded transition-colors"
                >
                  <CheckCircle className="w-4 h-4 text-brand-green flex-shrink-0" />
                  {neighborhood}
                </Link>
              ))}
            </div>
          </div>

          <div className="bg-brand-gray rounded-lg p-6">
            <h3 className="heading-sm mb-4 text-brand-darkBlue">Nearby Areas</h3>
            <div className="grid grid-cols-1 gap-2">
              {nearbyAreas.map((area) => (
                <Link
                  key={area}
                  to={`/junk-removal-${formatNeighborhoodSlug(area)}`}
                  className="flex items-center gap-2 text-gray-700 hover:text-brand-blue hover:bg-white p-2 rounded transition-colors"
                >
                  <CheckCircle className="w-4 h-4 text-brand-green flex-shrink-0" />
                  {area}
                </Link>
              ))}
            </div>
          </div>
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
