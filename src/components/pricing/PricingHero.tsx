
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, CheckCircle, DollarSign, Clock, Shield } from "lucide-react";

const PricingHero = () => {
  const benefits = [
    { icon: DollarSign, text: "No hidden fees or hourly charges" },
    { icon: Clock, text: "Same-day service available" },
    { icon: Shield, text: "Fully licensed and insured" }
  ];

  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-brand-lightBlue via-white to-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="heading-xl mb-6 text-brand-darkBlue">
            Transparent Pricing.<br />
            <span className="text-brand-blue">No Surprises.</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Get an upfront estimate before we start. You pay only for the space your items 
            take up in our truck - it's that simple.
          </p>

          {/* Benefits */}
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm">
                <benefit.icon className="h-5 w-5 text-brand-green" />
                <span className="text-gray-700 font-medium">{benefit.text}</span>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <Link to="/booking">
              <Button className="btn-primary text-lg px-8">
                Get Free Estimate
              </Button>
            </Link>
            <a href="tel:5137128077">
              <Button variant="outline" className="text-lg px-8 border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white">
                <Phone className="h-5 w-5 mr-2" />
                Call (513) 712-8077
              </Button>
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-brand-blue mb-1">$99</div>
                <div className="text-sm text-gray-600">Minimum Service</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-brand-blue mb-1">200+</div>
                <div className="text-sm text-gray-600">Happy Customers</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-brand-blue mb-1">4.9★</div>
                <div className="text-sm text-gray-600">Average Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingHero;
