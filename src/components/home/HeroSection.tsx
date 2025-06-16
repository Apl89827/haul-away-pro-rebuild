
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Truck, FileText, Users, Clock } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="relative w-full min-h-[100vh] flex items-center">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
        backgroundImage: "url('/lovable-uploads/e9fb3e64-31d1-470c-8a69-daca627daa12.png')",
        backgroundPosition: "center 30%"
      }}></div>
      
      {/* Optimized gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-darkBlue/85 to-brand-blue/70 z-10"></div>
      
      <div className="container-custom relative z-20 pt-32 md:pt-20 pb-8 md:pb-40">
        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight text-white mb-6 md:mb-10 xl:text-5xl">
            Your #1 Choice for Junk Removal in Cincinnati
          </h1>
          <p className="text-lg md:text-2xl text-white/90 mb-8 md:mb-14 leading-relaxed lg:text-2xl">
            We offer professional junk removal services in Cincinnati with fast, fair, and eco-friendly solutions. From furniture to appliances - 
            we handle it all with transparent pricing and same-day service available.
          </p>
          
          {/* Mobile-optimized CTA buttons with better spacing */}
          <div className="flex flex-col sm:flex-row gap-3 md:gap-6 mb-12 md:mb-0">
            <Link to="/booking" className="w-full sm:w-auto">
              <Button className="btn-secondary w-full sm:w-auto text-lg md:text-xl py-5 md:py-6 px-8 md:px-10">
                Check Availability
                <ArrowRight className="ml-3 h-5 w-5 md:h-6 md:w-6" />
              </Button>
            </Link>
            <a href="tel:5137128077" className="w-full sm:w-auto">
              <Button className="btn-secondary w-full sm:w-auto min-h-[56px] md:min-h-[60px] text-lg md:text-xl py-5 md:py-6 px-8 md:px-10 text-slate-50 bg-green-600 hover:bg-green-500">
                <Phone className="mr-3 h-5 w-5 md:h-6 md:w-6" />
                Call Now
              </Button>
            </a>
          </div>
        </div>
      </div>
      
      {/* Compact trust indicators - hidden on mobile, shown on desktop */}
      <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm py-3 md:py-4 z-30 hidden md:block">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            <div className="flex flex-col items-center text-center p-2">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-brand-blue/10 rounded-full flex items-center justify-center mb-2">
                <Clock className="w-6 h-6 md:w-7 md:h-7 text-brand-blue" />
              </div>
              <h3 className="font-bold text-brand-darkBlue text-sm md:text-base mb-1">Same-day service</h3>
              <p className="text-gray-600 text-xs md:text-sm">Book today. We'll call before we arrive</p>
            </div>
            
            <div className="flex flex-col items-center text-center p-2">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-brand-green/10 rounded-full flex items-center justify-center mb-2">
                <FileText className="w-6 h-6 md:w-7 md:h-7 text-brand-green" />
              </div>
              <h3 className="font-bold text-brand-darkBlue text-sm md:text-base mb-1">Get a free estimate</h3>
              <p className="text-gray-600 text-xs md:text-sm">No hidden fees. No deposit. No obligation to continue</p>
            </div>
            
            <div className="flex flex-col items-center text-center p-2">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-brand-blue/10 rounded-full flex items-center justify-center mb-2">
                <Users className="w-6 h-6 md:w-7 md:h-7 text-brand-blue" />
              </div>
              <h3 className="font-bold text-brand-darkBlue text-sm md:text-base mb-1">Friendly, professional teams</h3>
              <p className="text-gray-600 text-xs md:text-sm">We'll take care of everything and sweep up when we're done</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
