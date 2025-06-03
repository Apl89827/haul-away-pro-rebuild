
import React from "react";
import { Check, Clock, FileText, Users } from "lucide-react";

const TrustBar = () => {
  return (
    <div className="bg-brand-blue py-6 md:hidden">
      <div className="container-custom">
        <div className="space-y-4">
          {/* Main trust points */}
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
          
          {/* Additional mobile-specific trust signals */}
          <div className="border-t border-white/20 pt-4">
            <div className="flex items-center justify-center gap-6 text-white/90 text-xs">
              <div className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                <span>Quick response</span>
              </div>
              <div className="flex items-center gap-1">
                <FileText className="h-3 w-3" />
                <span>Transparent pricing</span>
              </div>
              <div className="flex items-center gap-1">
                <Users className="h-3 w-3" />
                <span>Professional team</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustBar;
