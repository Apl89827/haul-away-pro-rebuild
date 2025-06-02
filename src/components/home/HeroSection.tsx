
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Truck, FileText, Users, Clock } from "lucide-react";

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
      
      {/* Enhanced trust indicators section */}
      <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm py-6 md:py-8 z-30">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="flex flex-col items-center text-center p-4">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-brand-blue/10 rounded-full flex items-center justify-center mb-4">
                <Clock className="w-8 h-8 md:w-10 md:h-10 text-brand-blue" />
              </div>
              <h3 className="font-bold text-brand-darkBlue text-lg md:text-xl mb-2">Same-day service</h3>
              <p className="text-gray-600 text-sm md:text-base">Book today. We'll call before we arrive</p>
            </div>
            
            <div className="flex flex-col items-center text-center p-4">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-brand-green/10 rounded-full flex items-center justify-center mb-4">
                <FileText className="w-8 h-8 md:w-10 md:h-10 text-brand-green" />
              </div>
              <h3 className="font-bold text-brand-darkBlue text-lg md:text-xl mb-2">Get a free estimate</h3>
              <p className="text-gray-600 text-sm md:text-base">No hidden fees. No deposit. No obligation to continue</p>
            </div>
            
            <div className="flex flex-col items-center text-center p-4">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-brand-blue/10 rounded-full flex items-center justify-center mb-4">
                <Users className="w-8 h-8 md:w-10 md:h-10 text-brand-blue" />
              </div>
              <h3 className="font-bold text-brand-darkBlue text-lg md:text-xl mb-2">Friendly, professional teams</h3>
              <p className="text-gray-600 text-sm md:text-base">We'll take care of everything and sweep up when we're done</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
