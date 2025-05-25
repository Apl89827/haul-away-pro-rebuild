
import React from "react";
import { Shield, Clock, Truck, Heart } from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: Shield,
      title: "Fully Insured & Licensed",
      description: "Complete peace of mind with full insurance coverage and proper licensing."
    },
    {
      icon: Clock,
      title: "On-Time Service",
      description: "We respect your time with punctual arrivals and efficient service."
    },
    {
      icon: Truck,
      title: "Professional Equipment",
      description: "Modern trucks and proper equipment to handle any job safely."
    },
    {
      icon: Heart,
      title: "Eco-Friendly Disposal",
      description: "We donate and recycle whenever possible to minimize landfill waste."
    }
  ];

  return (
    <section className="section bg-brand-gray">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="heading-lg mb-4">Why Choose Haul Away Pro?</h2>
          <p className="text-lg text-gray-600">
            Over 15 years of experience serving Cincinnati with reliable, professional junk removal.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg p-6 text-center card-shadow"
            >
              <feature.icon className="w-12 h-12 text-brand-blue mx-auto mb-4" />
              <h3 className="heading-sm mb-3">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
