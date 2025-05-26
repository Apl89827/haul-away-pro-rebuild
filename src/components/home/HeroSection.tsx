
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import OptimizedImage from "@/components/ui/optimized-image";
import { ArrowRight, Phone, Star } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="relative w-full min-h-[90vh] flex items-center overflow-hidden">
      <OptimizedImage
        src="/lovable-uploads/e9fb3e64-31d1-470c-8a69-daca627daa12.png"
        alt="Professional junk removal service in Cincinnati"
        className="absolute inset-0 object-cover transform scale-105 animate-[zoom_20s_ease-in-out_infinite_alternate]"
        priority={true}
        width={1920}
        height={1080}
      />
      
      {/* Enhanced gradient overlay with animation */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-darkBlue/90 via-brand-blue/70 to-brand-darkBlue/80 z-10 animate-pulse-slow" style={{ bottom: '80px' }}></div>
      
      <div className="container-custom relative z-20 mt-16">
        <div className="max-w-3xl animate-fade-in-up">
          {/* Trust badges with floating animation */}
          <div className="flex items-center gap-4 mb-4 animate-bounce-subtle">
            <div className="flex items-center gap-1 bg-brand-green/20 backdrop-blur-sm rounded-full px-3 py-1 border border-brand-green/30">
              <Star className="h-4 w-4 text-yellow-400 fill-current" />
              <span className="text-white text-sm font-medium">5.0 Rating</span>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 border border-white/30">
              <span className="text-white text-sm font-medium">15+ Years</span>
            </div>
          </div>

          <h1 className="heading-xl text-white mb-6 animate-fade-in-up animation-delay-200">
            Cincinnati's Top-Rated Junk Removal Service – Fast, Fair, & Friendly!
          </h1>
          <p className="text-xl text-white/90 mb-8 animate-fade-in-up animation-delay-400">
            From furniture to appliances, yard waste to estate cleanouts - 
            we handle it all with eco-friendly solutions and transparent pricing.
          </p>
          
          {/* Enhanced CTA buttons with hover animations */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-600">
            <Link to="/booking" className="group">
              <Button size="lg" className="bg-brand-green hover:bg-brand-green/90 text-white text-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-brand-green/50 relative overflow-hidden group-hover:animate-pulse">
                <span className="relative z-10 flex items-center">
                  Check Availability
                  <ArrowRight className="ml-2 h-5 w-5 transform transition-transform group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:animate-shimmer"></div>
              </Button>
            </Link>
            
            <a href="tel:5138762858" className="group">
              <Button variant="outline" size="lg" className="bg-white/20 text-white border-white hover:bg-white hover:text-brand-blue text-lg backdrop-blur-sm transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <Phone className="mr-2 h-4 w-4 transform transition-transform group-hover:rotate-12" />
                Call Now
              </Button>
            </a>
          </div>

          {/* Social proof with typing animation */}
          <div className="mt-8 animate-fade-in-up animation-delay-800">
            <p className="text-white/80 text-sm mb-2">Join 10,000+ satisfied customers:</p>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className={`h-4 w-4 text-yellow-400 fill-current animate-bounce`}
                  style={{ animationDelay: `${i * 100}ms` }}
                />
              ))}
              <span className="text-white/90 text-sm ml-2 animate-type-writer">
                "Best junk removal service in Cincinnati!"
              </span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Enhanced Trust Bar with slide-in animation */}
      <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md py-4 hidden md:block z-30 transform translate-y-full animate-slide-up animation-delay-1000">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center transform hover:scale-105 transition-transform duration-300 hover:bg-brand-lightBlue/50 rounded-lg p-2">
              <span className="font-semibold text-lg text-brand-blue animate-count-up">15+</span>
              <span className="text-sm text-gray-700">Years Experience</span>
            </div>
            <div className="flex flex-col items-center transform hover:scale-105 transition-transform duration-300 hover:bg-brand-lightBlue/50 rounded-lg p-2">
              <span className="font-semibold text-lg text-brand-blue">Licensed & Insured</span>
              <span className="text-sm text-gray-700">For Your Peace of Mind</span>
            </div>
            <div className="flex flex-col items-center transform hover:scale-105 transition-transform duration-300 hover:bg-brand-lightBlue/50 rounded-lg p-2">
              <span className="font-semibold text-lg text-brand-blue">Free Estimates</span>
              <span className="text-sm text-gray-700">No Obligation</span>
            </div>
            <div className="flex flex-col items-center transform hover:scale-105 transition-transform duration-300 hover:bg-brand-lightBlue/50 rounded-lg p-2">
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
