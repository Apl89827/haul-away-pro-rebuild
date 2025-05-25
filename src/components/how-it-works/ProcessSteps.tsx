
import React from "react";
import { Calendar, DollarSign, Truck, CheckCircle } from "lucide-react";

const ProcessSteps = () => {
  const steps = [
    {
      number: "1",
      icon: Calendar,
      title: "Book Your Appointment",
      description: "Schedule online or call us. We offer flexible 2-hour arrival windows that work with your schedule.",
      details: [
        "Same-day service available",
        "Weekend and evening appointments",
        "No obligation consultation"
      ]
    },
    {
      number: "2",
      icon: DollarSign,
      title: "Get Your Free Estimate",
      description: "Our uniformed team arrives on time and provides an upfront, all-inclusive price before we start.",
      details: [
        "No hidden fees or surprises",
        "Price includes labor, disposal & cleanup",
        "You approve before we begin"
      ]
    },
    {
      number: "3",
      icon: Truck,
      title: "We Remove Everything",
      description: "Our insured professionals carefully remove your items from anywhere in your home or business.",
      details: [
        "We do all the heavy lifting",
        "Items removed from any location",
        "Fully insured and bonded"
      ]
    },
    {
      number: "4",
      icon: CheckCircle,
      title: "Clean Up & Recycle",
      description: "We sweep up the area and responsibly dispose of your items through donation and recycling.",
      details: [
        "Complete area cleanup",
        "Eco-friendly disposal",
        "Items donated when possible"
      ]
    }
  ];

  return (
    <section className="section bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-lg mb-4">Our Simple 4-Step Process</h2>
          <p className="text-lg text-gray-600">
            From booking to cleanup, we handle everything so you don't have to.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {steps.map((step, index) => (
            <div 
              key={step.number} 
              className="flex gap-6 items-start"
            >
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-brand-blue text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">
                  {step.number}
                </div>
                <step.icon className="w-8 h-8 text-brand-green mx-auto" />
              </div>
              
              <div className="flex-1">
                <h3 className="heading-sm mb-3 text-brand-darkBlue">{step.title}</h3>
                <p className="text-gray-600 mb-4">{step.description}</p>
                <ul className="space-y-2">
                  {step.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-brand-green flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;
