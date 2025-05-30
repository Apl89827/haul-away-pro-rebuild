
import React from "react";
import { MapPin, Star, Phone } from "lucide-react";

const GoogleMapsMockup = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      {/* GMB Business Card Mockup */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-start gap-4">
          <div className="w-16 h-16 bg-brand-blue rounded-lg flex items-center justify-center flex-shrink-0">
            <span className="text-white font-bold text-xl">H</span>
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-brand-darkBlue mb-1">
              HaulAway Pro
            </h3>
            <div className="flex items-center gap-1 mb-2">
              <div className="flex items-center">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-sm text-gray-600 ml-1">(127 reviews)</span>
            </div>
            <p className="text-gray-600 text-sm mb-2">Junk Removal Service</p>
            <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
              <MapPin className="w-4 h-4" />
              <span>Cincinnati, OH</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Phone className="w-4 h-4 text-brand-blue" />
              <a href="tel:5137128077" className="text-brand-blue hover:underline">
                (513) 712-8077
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Service Territory Map Mockup */}
      <div className="relative bg-gray-100 h-64 md:h-80">
        {/* Map placeholder with service area overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-green-50">
          {/* Cincinnati area mockup */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="relative">
              {/* Main service circle */}
              <div className="w-32 h-32 md:w-40 md:h-40 bg-brand-blue/20 rounded-full border-2 border-brand-blue/40 flex items-center justify-center">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-brand-blue/40 rounded-full border-2 border-brand-blue flex items-center justify-center">
                  <MapPin className="w-6 h-6 md:w-8 md:h-8 text-brand-blue" />
                </div>
              </div>
              
              {/* Service area points */}
              <div className="absolute -top-4 left-8 w-3 h-3 bg-brand-green rounded-full"></div>
              <div className="absolute top-8 -right-6 w-3 h-3 bg-brand-green rounded-full"></div>
              <div className="absolute bottom-4 right-4 w-3 h-3 bg-brand-green rounded-full"></div>
              <div className="absolute bottom-0 left-2 w-3 h-3 bg-brand-green rounded-full"></div>
              <div className="absolute top-16 -left-8 w-3 h-3 bg-brand-green rounded-full"></div>
            </div>
          </div>
          
          {/* Area labels */}
          <div className="absolute top-4 left-4 bg-white px-2 py-1 rounded text-xs font-medium shadow-sm">
            Mason
          </div>
          <div className="absolute top-8 right-8 bg-white px-2 py-1 rounded text-xs font-medium shadow-sm">
            Blue Ash
          </div>
          <div className="absolute bottom-8 right-4 bg-white px-2 py-1 rounded text-xs font-medium shadow-sm">
            Hyde Park
          </div>
          <div className="absolute bottom-4 left-8 bg-white px-2 py-1 rounded text-xs font-medium shadow-sm">
            West Chester
          </div>
        </div>
        
        {/* Map controls mockup */}
        <div className="absolute top-4 right-4 flex flex-col gap-1">
          <button className="w-8 h-8 bg-white shadow-md rounded flex items-center justify-center text-gray-600 hover:bg-gray-50">
            +
          </button>
          <button className="w-8 h-8 bg-white shadow-md rounded flex items-center justify-center text-gray-600 hover:bg-gray-50">
            −
          </button>
        </div>
        
        {/* Coming soon overlay */}
        <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
          <div className="bg-white/95 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg">
            <p className="text-sm font-medium text-gray-700">Interactive Map Coming Soon</p>
          </div>
        </div>
      </div>
      
      {/* Service hours and contact */}
      <div className="p-4 bg-gray-50 text-center">
        <p className="text-sm text-gray-600 mb-2">
          <span className="font-medium text-brand-green">Open</span> • Mon-Sat 7AM-7PM, Sun 9AM-5PM
        </p>
        <p className="text-xs text-gray-500">
          Service area shown above • Call to confirm availability in your location
        </p>
      </div>
    </div>
  );
};

export default GoogleMapsMockup;
