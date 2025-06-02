
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="relative w-full min-h-[95vh] md:min-h-screen flex items-center">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: "url('/lovable-uploads/e9fb3e64-31d1-470c-8a69-daca627daa12.png')",
      backgroundPosition: "center 30%"
    }}></div>
      
      {/* Optimized gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-darkBlue/85 to-brand-blue/70 z-10"></div>
      
      <div className="container-custom relative z-20 pt-24 md:pt-20 pb-24 md:pb-32">
        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-white mb-6 md:mb-8">
            Cincinnati's #1 Junk Removal Service
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl text-white/90 mb-8 md:mb-12 leading-relaxed">
            Fast, fair, and eco-friendly junk removal. From furniture to appliances - 
            we handle it all with transparent pricing.
          </p>
          
          {/* Mobile-optimized CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
            <Link to="/booking" className="w-full sm:w-auto">
              <Button className="btn-secondary w-full sm:w-auto text-xl py-6 px-10">
                Check Availability
                <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
            </Link>
            <a href="tel:5137128077" className="w-full sm:w-auto">
              <Button className="btn-secondary w-full sm:w-auto min-h-[60px] text-xl py-6 px-10 text-slate-50 bg-green-600 hover:bg-green-500">
                <Phone className="mr-3 h-6 w-6" />
                Call Now
              </Button>
            </a>
          </div>
        </div>
      </div>
      
      {/* Mobile trust indicators */}
      <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm py-4 md:py-6 z-30">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 text-center">
            <div>
              <span className="font-bold text-brand-blue block text-lg md:text-xl">15+ Years</span>
              <span className="text-gray-600 text-sm md:text-base">Experience</span>
            </div>
            <div>
              <span className="font-bold text-brand-blue block text-lg md:text-xl">Licensed</span>
              <span className="text-gray-600 text-sm md:text-base">& Insured</span>
            </div>
            <div>
              <span className="font-bold text-brand-blue block text-lg md:text-xl">Free</span>
              <span className="text-gray-600 text-sm md:text-base">Estimates</span>
            </div>
            <div>
              <span className="font-bold text-brand-blue block text-lg md:text-xl">Same Day</span>
              <span className="text-gray-600 text-sm md:text-base">Service</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
