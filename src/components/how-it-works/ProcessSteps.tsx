
import React from "react";
import { CalendarCheck, Calculator, Truck, Leaf } from "lucide-react";

const ProcessSteps = () => {
  const steps = [{
    number: "1",
    icon: CalendarCheck,
    title: "Book Your Service",
    description: "Schedule online in 60 seconds or call us directly.",
    image: "/lovable-uploads/6ed075ab-e276-475f-a098-96ff4c5a372f.png",
    details: ["2-hour arrival windows", "Same-day availability", "Weekend & evening slots"]
  }, {
    number: "2",
    icon: Calculator,
    title: "Free On-Site Estimate",
    description: "We arrive, assess your items, and provide upfront pricing.",
    image: "/lovable-uploads/2f448ac4-ba2d-41a2-a01b-0a9a25961a39.png",
    details: ["No hidden fees", "Price includes everything", "You approve before we start"]
  }, {
    number: "3",
    icon: Truck,
    title: "We Haul Everything",
    description: "Our team does all the heavy lifting and loading.",
    image: "/lovable-uploads/ec1595b2-2922-43fb-8f15-990ec8357725.png",
    details: ["From anywhere on property", "Fully insured team", "Professional equipment"]
  }, {
    number: "4",
    icon: Leaf,
    title: "Clean & Dispose",
    description: "We sweep up and responsibly dispose of everything.",
    image: "/lovable-uploads/6ebbb972-bc82-48db-94f9-838103be1d75.png",
    details: ["Complete cleanup", "Donate when possible", "Eco-friendly disposal"]
  }];

  return (
    <section className="section bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-lg mb-4 text-brand-darkBlue">How It Works</h2>
          <p className="text-lg text-gray-600">
            Our simple 4-step process makes junk removal effortless. 
            From booking to cleanup, we handle everything.
          </p>
        </div>

        <div className="space-y-16">
          {steps.map((step, index) => (
            <div key={step.number} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
              {/* Content */}
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-brand-blue text-white rounded-full flex items-center justify-center text-xl font-bold">
                    {step.number}
                  </div>
                </div>
                
                <h3 className="heading-md mb-4 text-brand-darkBlue">{step.title}</h3>
                <p className="text-gray-600 mb-6 text-lg">{step.description}</p>
                
                <ul className="space-y-3">
                  {step.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-gray-700">
                      <div className="w-2 h-2 bg-brand-green rounded-full flex-shrink-0"></div>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Image */}
              <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                <div className="relative">
                  <img 
                    src={step.image} 
                    alt={`Step ${step.number}: ${step.title}`} 
                    className="w-full h-80 object-contain rounded-lg shadow-lg bg-gray-50" 
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full w-12 h-12 flex items-center justify-center">
                    <step.icon className="w-6 h-6 text-brand-blue" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;
