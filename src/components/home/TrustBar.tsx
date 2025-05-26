
import React from "react";
import { Check } from "lucide-react";

const TrustBar = () => {
  return (
    <div className="bg-brand-blue py-4 md:hidden">
      <div className="container-custom">
        <div className="grid grid-cols-2 gap-3">
          <div className="flex items-center gap-2">
            <Check className="h-4 w-4 text-brand-green shrink-0" />
            <span className="text-white text-sm">15+ Years Experience</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="h-4 w-4 text-brand-green shrink-0" />
            <span className="text-white text-sm">Licensed & Insured</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="h-4 w-4 text-brand-green shrink-0" />
            <span className="text-white text-sm">Free Estimates</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="h-4 w-4 text-brand-green shrink-0" />
            <span className="text-white text-sm">Same Day Service</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustBar;
