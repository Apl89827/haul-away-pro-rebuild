
import React from "react";
import { CalendarCheck, Calculator, Truck, Leaf } from "lucide-react";

const ProcessSteps = () => {
  const steps = [
    {
      number: "1",
      icon: CalendarCheck,
      title: "Book Your Service",
      description: "Schedule online in 60 seconds or call us directly.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&crop=center",
      details: ["2-hour arrival windows", "Same-day availability", "Weekend & evening slots"]
    },
    {
      number: "2", 
      icon: Calculator,
      title: "Free On-Site Estimate",
      description: "We arrive, assess your items, and provide upfront pricing.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop&crop=center",
      details: ["No hidden fees", "Price includes everything", "You approve before we start"]
    },
    {
      number: "3",
      icon: Truck,
      title: "We Haul Everything", 
      description: "Our team does all the heavy lifting and loading.",
      image: "/lovable-uploads/b1bdcd6d-fd1a-4b76-9d60-6bbec62a37e1.png",
      details: ["From anywhere on property", "Fully insured team", "Professional equipment"]
    },
    {
      number: "4",
      icon: Leaf,
      title: "Clean & Dispose",
      description: "We sweep up and responsibly dispose of everything.",
      image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=400&h=300&fit=crop&crop=center",
      details: ["Complete cleanup", "Donate when possible", "Eco-friendly disposal"]
    }
  ];

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
                  <step.icon className="w-8 h-8 text-brand-green" />
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
                    className="w-full h-80 object-cover rounded-lg shadow-lg"
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
