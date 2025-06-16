
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, Users, Clock } from "lucide-react";

const ServiceAreasHero = () => {
  return (
    <section className="pt-32 pb-16 bg-gradient-to-br from-brand-lightBlue via-white to-brand-lightBlue">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="heading-xl mb-6">
            Cincinnati Junk Removal Service Areas
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Serving Cincinnati and surrounding areas with professional junk removal services. 
            Fast, reliable, and eco-friendly disposal for your home or business.
          </p>
          
          {/* Stats Bar */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 max-w-2xl mx-auto">
            <div className="bg-white rounded-lg p-4 shadow-sm border border-brand-blue/10">
              <div className="flex items-center justify-center gap-2 text-brand-blue mb-2">
                <MapPin className="h-5 w-5" />
                <span className="font-semibold text-lg">50+</span>
              </div>
              <p className="text-sm text-gray-600">Neighborhoods Served</p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm border border-brand-blue/10">
              <div className="flex items-center justify-center gap-2 text-brand-green mb-2">
                <Users className="h-5 w-5" />
                <span className="font-semibold text-lg">15+</span>
              </div>
              <p className="text-sm text-gray-600">Years Experience</p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm border border-brand-blue/10">
              <div className="flex items-center justify-center gap-2 text-brand-blue mb-2">
                <Clock className="h-5 w-5" />
                <span className="font-semibold text-lg">Same Day</span>
              </div>
              <p className="text-sm text-gray-600">Service Available</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/booking">
              <Button className="btn-primary text-lg">
                Check Availability
              </Button>
            </Link>
            <a 
              href="tel:5137128077" 
              className="inline-flex items-center justify-center gap-2 bg-white border-2 border-brand-blue text-brand-blue font-semibold py-3 px-6 rounded-md hover:bg-brand-blue hover:text-white transition-colors"
            >
              <Phone className="h-4 w-4" />
              Call (513) 712-8077
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreasHero;
