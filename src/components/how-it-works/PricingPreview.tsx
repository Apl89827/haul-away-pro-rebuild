
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const PricingPreview = () => {
  const pricingTiers = [
    {
      volume: "1/8 Truck",
      description: "Small cleanouts, single items",
      price: "Starting at $149",
      items: ["1-2 pieces of furniture", "Small appliances", "Boxes and bags"]
    },
    {
      volume: "1/4 Truck",
      description: "Medium-sized projects",
      price: "Starting at $249",
      items: ["3-4 pieces of furniture", "Multiple appliances", "Office cleanouts"]
    },
    {
      volume: "1/2 Truck",
      description: "Large cleanouts",
      price: "Starting at $349",
      items: ["Room cleanouts", "Garage clearing", "Estate cleanouts"]
    }
  ];

  return (
    <section className="section bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="heading-lg mb-4">Transparent Pricing</h2>
          <p className="text-lg text-gray-600">
            Our pricing is based on how much space your items take up in our truck. 
            No hidden fees, no surprises.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {pricingTiers.map((tier, index) => (
            <div 
              key={index}
              className="bg-white border-2 border-gray-200 rounded-lg p-6 text-center hover:border-brand-blue transition-colors"
            >
              <h3 className="heading-sm mb-2 text-brand-blue">{tier.volume}</h3>
              <p className="text-gray-600 mb-4">{tier.description}</p>
              <div className="text-2xl font-bold text-brand-darkBlue mb-4">{tier.price}</div>
              <ul className="space-y-2 text-sm text-gray-600">
                {tier.items.map((item, idx) => (
                  <li key={idx}>• {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-gray-600 mb-6">
            Final price determined on-site based on actual volume. 
            Labor, disposal, and cleanup included.
          </p>
          <Link to="/pricing">
            <Button className="btn-primary">
              View Full Pricing Details
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PricingPreview;
