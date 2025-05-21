
import React from "react";

const ProcessSection = () => {
  const steps = [
    {
      number: "1",
      title: "Schedule Your Pickup",
      description: "Book online or call us to set up a convenient appointment time."
    },
    {
      number: "2",
      title: "Get a Free On-Site Quote",
      description: "Our team arrives, assesses the job, and provides a clear, no-obligation price."
    },
    {
      number: "3",
      title: "We Haul It All Away",
      description: "Once you approve, we'll quickly load everything and clean up afterward."
    }
  ];

  return (
    <section className="section bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="heading-lg mb-4">How It Works</h2>
          <p className="text-lg text-gray-600">
            Getting rid of unwanted items has never been easier. Our simple 3-step process makes junk removal hassle-free.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div 
              key={step.number} 
              className="relative bg-white rounded-lg p-8 text-center card-shadow"
            >
              <div className="w-12 h-12 bg-brand-blue text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                {step.number}
              </div>
              <h3 className="heading-sm mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
