
import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Phone, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ServiceAreasList = () => {
  const cincinnatiNeighborhoods = [
    { name: "Over-the-Rhine", description: "Historic arts district with vibrant culture" },
    { name: "Downtown Cincinnati", description: "Business district and urban core" },
    { name: "The Banks", description: "Waterfront entertainment district" },
    { name: "Newport", description: "Kentucky riverfront community" },
    { name: "Covington", description: "Historic Northern Kentucky city" },
    { name: "Hyde Park", description: "Upscale residential neighborhood" },
    { name: "Oakley", description: "Trendy area with shopping and dining" },
    { name: "Mount Adams", description: "Hillside community with city views" },
    { name: "Clifton", description: "University area with diverse community" },
    { name: "Walnut Hills", description: "Historic hilltop neighborhood" },
    { name: "Mount Auburn", description: "Diverse residential community" },
    { name: "Corryville", description: "University of Cincinnati area" },
    { name: "University of Cincinnati", description: "Campus and surrounding area" },
    { name: "Northside", description: "Creative community with local charm" },
    { name: "Camp Washington", description: "Industrial area with growing arts scene" },
    { name: "Queensgate", description: "Industrial and logistics hub" },
    { name: "West End", description: "Historic African American community" },
    { name: "East Walnut Hills", description: "Quiet residential neighborhood" },
    { name: "Evanston", description: "Family-friendly community" },
    { name: "Avondale", description: "Diverse neighborhood with rich history" },
    { name: "Bond Hill", description: "Residential area with community focus" },
    { name: "Roselawn", description: "Established residential neighborhood" },
    { name: "Golf Manor", description: "Small village community" },
    { name: "Pleasant Ridge", description: "Family-oriented neighborhood" },
    { name: "Kennedy Heights", description: "Close-knit residential community" },
    { name: "Silverton", description: "Small city with local character" },
    { name: "Deer Park", description: "Suburban residential area" },
    { name: "Blue Ash", description: "Business hub with parks and recreation" },
    { name: "Montgomery", description: "Upscale suburban community" },
    { name: "Symmes Township", description: "Residential township area" },
    { name: "Anderson Township", description: "Large suburban township" },
    { name: "Mariemont", description: "Planned community with historic charm" },
    { name: "Terrace Park", description: "Small village with tree-lined streets" },
    { name: "Indian Hill", description: "Exclusive residential community" },
    { name: "Madeira", description: "Small city with family appeal" },
    { name: "Wyoming", description: "Historic suburb with character" },
    { name: "Lockland", description: "Small city with industrial heritage" },
    { name: "Elmwood Place", description: "Compact residential community" },
    { name: "Saint Bernard", description: "Small city with local pride" },
    { name: "Norwood", description: "Independent city within Cincinnati" },
    { name: "Cheviot", description: "Working-class community" },
    { name: "Delhi Township", description: "Western suburban area" },
    { name: "Green Township", description: "Growing suburban community" },
    { name: "Colerain Township", description: "Large suburban township" },
    { name: "Springfield Township", description: "Northern suburban area" },
    { name: "Finneytown", description: "Unincorporated community" },
    { name: "Forest Park", description: "Planned suburban city" },
    { name: "Springdale", description: "Small suburban city" },
    { name: "Sharonville", description: "Business and residential community" },
    { name: "Evendale", description: "Small village community" }
  ];

  const nearbyAreas = [
    { name: "Mason", description: "Growing suburban city with amenities" },
    { name: "West Chester", description: "Large suburban township" },
    { name: "Fairfield", description: "Mid-sized city with parks" },
    { name: "Hamilton", description: "Historic county seat" },
    { name: "Loveland", description: "Charming riverside community" },
    { name: "Milford", description: "Small city with historic downtown" },
    { name: "Kenwood", description: "Shopping and business district" },
    { name: "Sycamore Township", description: "Northeastern suburban area" },
    { name: "Deerfield Township", description: "Fast-growing suburban area" }
  ];

  const formatNeighborhoodSlug = (neighborhood: string) => {
    return neighborhood.toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^a-z0-9-]/g, '');
  };

  const AreaTile = ({ area, isNearby = false }: { area: { name: string; description: string }, isNearby?: boolean }) => (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 hover:border-brand-blue/20">
      <CardContent className="p-4">
        <Link
          to={`/junk-removal-${formatNeighborhoodSlug(area.name)}`}
          className="block"
        >
          <div className="flex items-start justify-between mb-2">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-brand-blue flex-shrink-0 mt-0.5" />
              <h3 className="font-semibold text-brand-darkBlue group-hover:text-brand-blue transition-colors">
                {area.name}
              </h3>
            </div>
            <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-brand-blue transition-colors opacity-0 group-hover:opacity-100" />
          </div>
          <p className="text-sm text-gray-600 mb-3 line-clamp-2">
            {area.description}
          </p>
          <div className="flex items-center justify-between">
            <span className="text-xs px-2 py-1 bg-brand-lightBlue text-brand-blue rounded-full font-medium">
              {isNearby ? "Nearby Area" : "Cincinnati"}
            </span>
            <span className="text-xs text-brand-blue font-medium group-hover:underline">
              View Services →
            </span>
          </div>
        </Link>
      </CardContent>
    </Card>
  );

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

        {/* Cincinnati Neighborhoods */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 bg-brand-blue rounded-lg flex items-center justify-center">
              <MapPin className="w-4 h-4 text-white" />
            </div>
            <h3 className="heading-sm text-brand-darkBlue">Cincinnati Neighborhoods</h3>
            <div className="flex-1 h-px bg-gradient-to-r from-brand-blue/20 to-transparent"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {cincinnatiNeighborhoods.map((area) => (
              <AreaTile key={area.name} area={area} />
            ))}
          </div>
        </div>

        {/* Nearby Areas */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 bg-brand-green rounded-lg flex items-center justify-center">
              <MapPin className="w-4 h-4 text-white" />
            </div>
            <h3 className="heading-sm text-brand-darkBlue">Nearby Areas</h3>
            <div className="flex-1 h-px bg-gradient-to-r from-brand-green/20 to-transparent"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {nearbyAreas.map((area) => (
              <AreaTile key={area.name} area={area} isNearby={true} />
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-br from-brand-lightBlue to-white rounded-xl p-8 border border-brand-blue/10">
          <h3 className="heading-sm mb-4">Not Sure If We Serve Your Area?</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            We're always expanding our service areas and may be able to accommodate special requests. 
            Give us a call and we'll let you know if we can help with your junk removal needs.
          </p>
          <a 
            href="tel:5137128077" 
            className="inline-flex items-center gap-2 bg-brand-blue text-white font-semibold py-3 px-6 rounded-md hover:bg-brand-darkBlue transition-colors"
          >
            <Phone className="h-4 w-4" />
            Call (513) 712-8077
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreasList;
