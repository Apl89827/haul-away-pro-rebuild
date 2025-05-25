
import React from "react";
import { Check, Star, Shield, Clock } from "lucide-react";

const TrustBar = () => {
  const trustItems = [
    { icon: Star, text: "5.0 Rating", subtext: "Google Reviews" },
    { icon: Shield, text: "Licensed & Insured", subtext: "Fully Protected" },
    { icon: Check, text: "Free Estimates", subtext: "No Hidden Fees" },
    { icon: Clock, text: "Same Day Service", subtext: "Quick Response" }
  ];

  return (
    <div className="bg-gradient-to-r from-brand-blue to-brand-darkBlue py-6 md:hidden relative overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 animate-shimmer"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-2 gap-4">
          {trustItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={item.text}
                className="flex items-center gap-2 group transform transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex-shrink-0 p-2 bg-brand-green/20 rounded-full group-hover:bg-brand-green/30 transition-colors duration-300">
                  <Icon className="h-4 w-4 text-brand-green animate-pulse" />
                </div>
                <div className="min-w-0">
                  <div className="text-white text-sm font-medium leading-tight animate-fade-in-up">
                    {item.text}
                  </div>
                  <div className="text-white/80 text-xs leading-tight animate-fade-in-up animation-delay-200">
                    {item.subtext}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Scrolling trust message */}
        <div className="mt-4 overflow-hidden">
          <div className="text-center">
            <div className="inline-block text-white/90 text-xs bg-brand-green/20 rounded-full px-3 py-1 animate-pulse-glow">
              ✨ Trusted by 10,000+ Cincinnati families
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustBar;
