import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, CheckCircle } from "lucide-react";
const HowItWorksHero = () => {
  return <section className="pt-32 pb-20 bg-gradient-to-br from-brand-lightBlue via-white to-brand-gray">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div>
            <h1 className="heading-xl mb-6 text-brand-darkBlue">
              Junk Removal Made Simple
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              From booking to cleanup, we handle everything so you don't have to. 
              Our professional team makes junk removal stress-free with transparent 
              pricing and eco-friendly disposal.
            </p>
            
            {/* Key benefits */}
            <div className="space-y-3 mb-8">
              {["Same-day service available", "Upfront, all-inclusive pricing", "Fully insured professionals", "Eco-friendly disposal & donation"].map((benefit, index) => <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </div>)}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/booking">
                <Button className="btn-primary text-lg px-8 bg-green-600 hover:bg-green-500">
                  Get Free Estimate
                </Button>
              </Link>
              <a href="tel:5137128077" className="inline-flex items-center justify-center gap-2 bg-white border-2 border-brand-blue text-brand-blue font-semibold py-3 px-6 rounded-md hover:bg-brand-blue hover:text-white transition-colors">
                <Phone className="h-4 w-4" />
                Call (513) 712-8077
              </a>
            </div>
          </div>

          {/* Right side - Hero Image */}
          <div className="relative">
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <img src="/lovable-uploads/50fa9c69-620f-460b-97e8-abcd9a3853b5.png" alt="HaulAway PRO professional junk removal truck - Same-day service in Greater Cincinnati" className="w-full h-80 object-contain rounded-lg mb-6 bg-gray-50" />
              <h3 className="heading-sm mb-2 text-brand-darkBlue">Professional & Reliable</h3>
              <p className="text-gray-600">
                Our branded trucks and uniformed team arrive on time with modern equipment 
                to handle any size job safely and efficiently.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HowItWorksHero;