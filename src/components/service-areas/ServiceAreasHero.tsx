
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, MapPin } from "lucide-react";

const ServiceAreasHero = () => {
  return (
    <section className="pt-32 pb-16 bg-gradient-to-br from-brand-lightBlue to-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="heading-xl mb-6">
            Cincinnati Junk Removal Service Areas
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Serving Cincinnati and surrounding areas with professional junk removal services. 
            Fast, reliable, and eco-friendly disposal for your home or business.
          </p>
          <div className="flex items-center justify-center gap-2 text-brand-blue mb-8">
            <MapPin className="h-5 w-5" />
            <span className="font-semibold">Proudly serving Greater Cincinnati since 2008</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/booking">
              <Button className="btn-primary text-lg">
                Check Availability
              </Button>
            </Link>
            <a 
              href="tel:5138762858" 
              className="inline-flex items-center justify-center gap-2 bg-white border-2 border-brand-blue text-brand-blue font-semibold py-3 px-6 rounded-md hover:bg-brand-blue hover:text-white transition-colors"
            >
              <Phone className="h-4 w-4" />
              Call (513) 876-2858
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreasHero;
