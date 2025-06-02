import React from "react";
import { Button } from "@/components/ui/button";
const ServicesSection = () => {
  const services = [{
    title: "Furniture Removal",
    description: "Sofas, chairs, tables, mattresses, and more",
    icon: "🪑"
  }, {
    title: "Appliance Removal",
    description: "Refrigerators, washers, dryers, and more",
    icon: "🧊"
  }, {
    title: "Electronic Waste",
    description: "TVs, computers, printers, and other electronics",
    icon: "📺"
  }, {
    title: "Yard Waste",
    description: "Branches, leaves, soil, and landscaping debris",
    icon: "🌿"
  }, {
    title: "Construction Debris",
    description: "Wood, drywall, concrete, and renovation waste",
    icon: "🔨"
  }, {
    title: "Estate Cleanouts",
    description: "Complete property clearing and cleanouts",
    icon: "🏠"
  }];
  return <section className="section bg-brand-gray">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="heading-lg mb-4">What We Haul</h2>
          <p className="text-lg text-gray-600">
            From single items to complete cleanouts, we handle it all with care
            and environmental responsibility.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map(service => <div key={service.title} className="bg-white rounded-lg p-6 card-shadow flex items-start">
              <span className="text-4xl mr-4">{service.icon}</span>
              <div>
                <h3 className="heading-sm mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>)}
        </div>

        <div className="text-center">
          <p className="mb-6 text-lg">
            Not sure if we take your items? We probably do!
          </p>
          <Button className="btn-primary">Call If You Have A Question About Your Items</Button>
        </div>
      </div>
    </section>;
};
export default ServicesSection;