
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="relative w-full min-h-[85vh] md:min-h-[90vh] flex items-center">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url('/lovable-uploads/e9fb3e64-31d1-470c-8a69-daca627daa12.png')",
          backgroundPosition: "center 30%"
        }}
      ></div>
      
      {/* Optimized gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-darkBlue/85 to-brand-blue/70 z-10"></div>
      
      <div className="container-custom relative z-20 pt-20 md:pt-16">
        <div className="max-w-2xl">
          <h1 className="heading-xl text-white mb-4 md:mb-6">
            Cincinnati's #1 Junk Removal Service
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-6 md:mb-8 leading-relaxed">
            Fast, fair, and eco-friendly junk removal. From furniture to appliances - 
            we handle it all with transparent pricing.
          </p>
          
          {/* Mobile-optimized CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
            <Link to="/booking" className="w-full sm:w-auto">
              <Button className="btn-secondary w-full sm:w-auto">
                Check Availability
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <a 
              href="tel:5138762858" 
              className="w-full sm:w-auto"
            >
              <Button variant="outline" className="bg-white/10 text-white border-white hover:bg-white/20 w-full sm:w-auto min-h-[48px] text-lg">
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </Button>
            </a>
          </div>
        </div>
      </div>
      
      {/* Mobile trust indicators */}
      <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm py-3 md:py-4 z-30">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 text-center text-sm md:text-base">
            <div>
              <span className="font-semibold text-brand-blue block">15+ Years</span>
              <span className="text-gray-600 text-xs md:text-sm">Experience</span>
            </div>
            <div>
              <span className="font-semibold text-brand-blue block">Licensed</span>
              <span className="text-gray-600 text-xs md:text-sm">& Insured</span>
            </div>
            <div>
              <span className="font-semibold text-brand-blue block">Free</span>
              <span className="text-gray-600 text-xs md:text-sm">Estimates</span>
            </div>
            <div>
              <span className="font-semibold text-brand-blue block">Same Day</span>
              <span className="text-gray-600 text-xs md:text-sm">Service</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
