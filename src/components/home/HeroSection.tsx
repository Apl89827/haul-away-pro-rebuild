
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Clock, Award, Users } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="relative w-full min-h-[90vh] flex items-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center animate-zoom-slow"
        style={{ backgroundImage: "url('/lovable-uploads/e9fb3e64-31d1-470c-8a69-daca627daa12.png')" }}
      ></div>
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-darkBlue/80 to-brand-blue/60 z-10" style={{ bottom: '80px' }}></div>
      
      {/* Floating Trust Badges */}
      <div className="absolute top-20 right-4 md:top-32 md:right-8 z-30 hidden sm:block">
        <div className="space-y-4">
          <div className="floating-badge animate-float-1">
            <div className="bg-white/95 backdrop-blur-sm rounded-full p-3 shadow-lg">
              <Shield className="h-6 w-6 text-brand-green" />
            </div>
          </div>
          <div className="floating-badge animate-float-2">
            <div className="bg-white/95 backdrop-blur-sm rounded-full p-3 shadow-lg">
              <Clock className="h-6 w-6 text-brand-blue" />
            </div>
          </div>
          <div className="floating-badge animate-float-3">
            <div className="bg-white/95 backdrop-blur-sm rounded-full p-3 shadow-lg">
              <Award className="h-6 w-6 text-brand-green" />
            </div>
          </div>
        </div>
      </div>

      {/* Social Proof Badge */}
      <div className="absolute top-20 left-4 md:top-32 md:left-8 z-30 hidden lg:block">
        <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-lg animate-fade-in-up">
          <div className="flex items-center gap-3">
            <Users className="h-8 w-8 text-brand-blue" />
            <div>
              <div className="text-sm font-semibold text-gray-800">1000+ Happy Customers</div>
              <div className="text-xs text-gray-600 typing-animation">Trusted throughout Cincinnati</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container-custom relative z-20 mt-16">
        <div className="max-w-3xl animate-fade-in-stagger">
          <h1 className="heading-xl text-white mb-6 animate-slide-up">
            Cincinnati's Top-Rated Junk Removal Service – Fast, Fair, & Friendly!
          </h1>
          <p className="text-xl text-white/90 mb-8 animate-slide-up-delay">
            From furniture to appliances, yard waste to estate cleanouts - 
            we handle it all with eco-friendly solutions and transparent pricing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up-delay-2">
            <Link to="/booking" className="group">
              <Button size="lg" className="enhanced-cta bg-brand-green hover:bg-brand-green/90 text-white text-lg min-h-[48px] px-8 relative overflow-hidden">
                <span className="relative z-10 flex items-center">
                  Check Availability
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </span>
                <div className="shimmer-effect"></div>
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="enhanced-cta-secondary bg-white/20 text-white border-white hover:bg-white/30 text-lg min-h-[48px] px-8 backdrop-blur-sm">
              Learn More
            </Button>
          </div>
        </div>
      </div>
      
      {/* Enhanced Trust Bar - Visible on larger screens */}
      <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm py-4 hidden md:block z-30 animate-slide-up-from-bottom">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center animate-fade-in-stagger-1">
              <span className="font-semibold text-lg text-brand-blue">15+ Years</span>
              <span className="text-sm text-gray-700">Experience</span>
            </div>
            <div className="flex flex-col items-center animate-fade-in-stagger-2">
              <span className="font-semibold text-lg text-brand-blue">Licensed & Insured</span>
              <span className="text-sm text-gray-700">For Your Peace of Mind</span>
            </div>
            <div className="flex flex-col items-center animate-fade-in-stagger-3">
              <span className="font-semibold text-lg text-brand-blue">Free Estimates</span>
              <span className="text-sm text-gray-700">No Obligation</span>
            </div>
            <div className="flex flex-col items-center animate-fade-in-stagger-4">
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
