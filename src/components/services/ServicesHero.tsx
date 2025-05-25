
import React from "react";
import { CheckCircle } from "lucide-react";

const ServicesHero = () => {
  return (
    <section className="bg-gradient-to-b from-brand-blue to-brand-darkBlue py-20 mt-16">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="heading-xl mb-6">What We Take</h1>
          <p className="text-xl mb-8 leading-relaxed">
            From single items to complete property cleanouts, HaulAway Pro handles it all. 
            We make junk removal simple with our comprehensive service that covers almost everything you need gone.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="flex items-center justify-center gap-3">
              <CheckCircle className="h-6 w-6 text-brand-green" />
              <span className="font-medium">Fast & Reliable</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <CheckCircle className="h-6 w-6 text-brand-green" />
              <span className="font-medium">Eco-Friendly Disposal</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <CheckCircle className="h-6 w-6 text-brand-green" />
              <span className="font-medium">Licensed & Insured</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;
