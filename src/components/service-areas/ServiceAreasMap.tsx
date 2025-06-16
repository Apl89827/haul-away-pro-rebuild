
import React from "react";
import { MapPin, Clock, Phone } from "lucide-react";

const ServiceAreasMap = () => {
  return (
    <section className="section bg-brand-gray">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="heading-lg mb-4">Service Area Coverage</h2>
          <p className="text-lg text-gray-600">
            Our coverage area spans across Greater Cincinnati, providing convenient 
            junk removal services to both residential and commercial customers.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            {/* Map Header */}
            <div className="bg-gradient-to-r from-brand-blue to-brand-darkBlue p-6">
              <div className="flex items-center justify-between text-white">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">HaulAway Pro Service Area</h3>
                    <p className="text-white/80 text-sm">Greater Cincinnati & Surrounding Areas</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-white/80 text-sm">Service Hours</p>
                  <p className="font-semibold">Mon-Sat 7AM-7PM</p>
                </div>
              </div>
            </div>

            {/* Map Container */}
            <div className="relative">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d472379.22106238076!2d-84.3982185!3d39.37692295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dc6f226382aa093%3A0xbe7b2fe630d2e4b3!2sHaulAway%20Pro!5e0!3m2!1sen!2sus!4v1748813812965!5m2!1sen!2sus" 
                width="100%" 
                height="400" 
                style={{ border: 0 }} 
                allowFullScreen={true}
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
                title="HaulAway Pro Service Area Map"
              />
              
              {/* Map Overlay with Service Info */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-lg border border-white/20">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-brand-blue rounded-full flex items-center justify-center">
                        <Clock className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 text-sm">Same-Day Service Available</p>
                        <p className="text-gray-600 text-xs">Call for immediate scheduling</p>
                      </div>
                    </div>
                    <a 
                      href="tel:5137128077" 
                      className="flex items-center gap-2 bg-brand-blue text-white px-4 py-2 rounded-md hover:bg-brand-darkBlue transition-colors text-sm font-medium"
                    >
                      <Phone className="h-3 w-3" />
                      Call Now
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Footer */}
            <div className="p-6 bg-gray-50 border-t">
              <div className="grid md:grid-cols-3 gap-4 text-center">
                <div>
                  <p className="font-semibold text-brand-darkBlue mb-1">Coverage Area</p>
                  <p className="text-gray-600 text-sm">50+ neighborhoods served</p>
                </div>
                <div>
                  <p className="font-semibold text-brand-darkBlue mb-1">Response Time</p>
                  <p className="text-gray-600 text-sm">Same-day service available</p>
                </div>
                <div>
                  <p className="font-semibold text-brand-darkBlue mb-1">Service Confirmation</p>
                  <p className="text-gray-600 text-sm">Call <strong>(513) 712-8077</strong> to verify</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreasMap;
