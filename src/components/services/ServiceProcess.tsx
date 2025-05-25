
import React from "react";
import { Phone, Calendar, Truck, Recycle } from "lucide-react";

const ServiceProcess = () => {
  const steps = [
    {
      icon: Phone,
      title: "Contact Us",
      description: "Call us or book online to schedule your junk removal service."
    },
    {
      icon: Calendar,
      title: "Schedule Service",
      description: "We'll arrange a convenient time that works with your schedule."
    },
    {
      icon: Truck,
      title: "We Remove It",
      description: "Our professional team handles all the heavy lifting and removal."
    },
    {
      icon: Recycle,
      title: "Eco-Friendly Disposal",
      description: "We donate, recycle, or properly dispose of your items responsibly."
    }
  ];

  return (
    <section className="section bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-lg mb-4">How Our Service Works</h2>
          <p className="text-lg text-gray-600">
            Our streamlined process makes junk removal simple and stress-free. 
            From booking to completion, we handle everything.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.title} className="text-center relative">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-brand-blue rounded-full flex items-center justify-center">
                  <step.icon className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="heading-sm mb-4">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
              
              {/* Arrow for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 -right-4 text-brand-blue">
                  →
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceProcess;
