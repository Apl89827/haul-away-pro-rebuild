import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="relative w-full min-h-[90vh] flex items-center">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/lovable-uploads/e9fb3e64-31d1-470c-8a69-daca627daa12.png')" }}
      ></div>
      
      {/* Gradient overlay - only covers the main content area, not the trust bar */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-darkBlue/80 to-brand-blue/60 z-10" style={{ bottom: '80px' }}></div>
      
      <div className="container-custom relative z-20 mt-16">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="heading-xl text-white mb-6">
            Cincinnati's Top-Rated Junk Removal Service – Fast, Fair, & Friendly!
          </h1>
          <p className="text-xl text-white/90 mb-8">
            From furniture to appliances, yard waste to estate cleanouts - 
            we handle it all with eco-friendly solutions and transparent pricing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/booking">
              <Button size="lg" className="bg-brand-green hover:bg-brand-green/90 text-white text-lg">
                Check Availability
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="bg-white/20 text-white border-white hover:bg-white/30 text-lg">
              Learn More
            </Button>
          </div>
        </div>
      </div>
      
      {/* Trust Bar - Visible on larger screens */}
      <div className="absolute bottom-0 left-0 right-0 bg-white/95 py-4 hidden md:block z-30">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center">
              <span className="font-semibold text-lg text-brand-blue">15+ Years</span>
              <span className="text-sm text-gray-700">Experience</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-semibold text-lg text-brand-blue">Licensed & Insured</span>
              <span className="text-sm text-gray-700">For Your Peace of Mind</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-semibold text-lg text-brand-blue">Free Estimates</span>
              <span className="text-sm text-gray-700">No Obligation</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-semibold text-lg text-brand-blue">Same Day Service</span>
              <span className="text-sm text-gray-700">Often Available</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
