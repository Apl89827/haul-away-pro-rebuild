
import React from "react";
import { Shield, Clock, Award, Leaf } from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: Shield,
      title: "Fully Insured & Licensed",
      description: "Complete peace of mind with comprehensive insurance coverage and proper licensing.",
      stat: "15+ Years"
    },
    {
      icon: Clock,
      title: "On-Time Guarantee",
      description: "We respect your time with punctual arrivals and efficient, professional service.",
      stat: "98% On-Time"
    },
    {
      icon: Award,
      title: "Trusted Professionals",
      description: "Background-checked, uniformed team members with extensive training.",
      stat: "5-Star Rated"
    },
    {
      icon: Leaf,
      title: "Eco-Responsible",
      description: "Committed to donating and recycling to minimize environmental impact.",
      stat: "85% Diverted"
    }
  ];

  return (
    <section className="section bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-lg mb-4 text-brand-darkBlue">Why Cincinnati Chooses Haul Away Pro</h2>
          <p className="text-lg text-gray-600">
            Over 15 years of experience serving Cincinnati with reliable, 
            professional junk removal you can trust.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="relative bg-white border border-gray-200 rounded-lg p-6 text-center hover:border-brand-blue hover:shadow-lg transition-all duration-300 group"
            >
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="w-16 h-16 bg-brand-blue rounded-full flex items-center justify-center group-hover:bg-brand-green transition-colors duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
              </div>
              
              <div className="pt-8">
                <div className="text-2xl font-bold text-brand-green mb-2">{feature.stat}</div>
                <h3 className="heading-sm mb-3 text-brand-darkBlue">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
