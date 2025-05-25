
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight, Zap } from "lucide-react";

const CtaSection = () => {
  return (
    <section className="bg-gradient-to-br from-brand-blue via-brand-darkBlue to-brand-blue py-16 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-20 w-16 h-16 bg-brand-green rounded-full animate-float animation-delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-white rounded-full animate-float animation-delay-500"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          {/* Urgency indicator */}
          <div className="inline-flex items-center gap-2 bg-brand-green/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-brand-green/30 animate-pulse-glow">
            <Zap className="h-4 w-4 text-brand-green animate-bounce" />
            <span className="text-white text-sm font-medium">Limited Time - Same Day Service Available</span>
          </div>

          <h2 className="heading-lg text-white mb-6 animate-fade-in-up">
            Ready to Clear the Clutter?
          </h2>
          <p className="text-xl text-white/90 mb-8 animate-fade-in-up animation-delay-200">
            Check availability for your junk removal project and experience our 
            fast, friendly, and fair service.
          </p>
          
          {/* Enhanced CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-400">
            <Link to="/booking" className="group relative">
              <Button className="btn-secondary text-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-brand-green/50 relative overflow-hidden">
                <span className="relative z-10 flex items-center">
                  Check Availability
                  <ArrowRight className="ml-2 h-4 w-4 transform transition-transform group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:animate-shimmer"></div>
              </Button>
            </Link>
            
            <a 
              href="tel:5138762858" 
              className="group inline-flex items-center justify-center gap-2 bg-white text-brand-blue font-semibold py-3 px-6 rounded-md hover:bg-white/90 transition-all duration-300 transform hover:scale-105 hover:shadow-xl relative overflow-hidden"
            >
              <Phone className="h-4 w-4 transform transition-transform group-hover:rotate-12 group-hover:animate-pulse" />
              <span className="relative z-10">Call (513) 876-2858</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-lightBlue/30 to-transparent transform -skew-x-12 -translate-x-full group-hover:animate-shimmer"></div>
            </a>
          </div>

          {/* Trust indicators with staggered animation */}
          <div className="mt-8 flex justify-center items-center gap-8 text-white/80 text-sm animate-fade-in-up animation-delay-600">
            <div className="flex items-center gap-2 animate-bounce-subtle">
              <div className="w-2 h-2 bg-brand-green rounded-full animate-pulse"></div>
              <span>Free Estimates</span>
            </div>
            <div className="flex items-center gap-2 animate-bounce-subtle animation-delay-200">
              <div className="w-2 h-2 bg-brand-green rounded-full animate-pulse animation-delay-300"></div>
              <span>Fully Insured</span>
            </div>
            <div className="flex items-center gap-2 animate-bounce-subtle animation-delay-400">
              <div className="w-2 h-2 bg-brand-green rounded-full animate-pulse animation-delay-600"></div>
              <span>Eco-Friendly</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
