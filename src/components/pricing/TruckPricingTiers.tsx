
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Truck } from "lucide-react";

const TruckPricingTiers = () => {
  const pricingTiers = [
    {
      name: "Minimum Load",
      description: "Perfect for one piece of furniture or appliance",
      examples: ["Single refrigerator", "One couch", "Washer or dryer", "Small desk"],
      truckFill: "10%",
      price: "$99",
      popular: false
    },
    {
      name: "1/8 Truck Load",
      description: "Small cleanouts and a few items",
      examples: ["Small furniture set", "2-3 appliances", "Several boxes", "Small room items"],
      truckFill: "12.5%",
      price: "$200",
      popular: false
    },
    {
      name: "1/4 Truck Load", 
      description: "Medium-sized projects",
      examples: ["Bedroom set", "Office furniture", "Multiple appliances", "Small garage cleanout"],
      truckFill: "25%",
      price: "$300",
      popular: true
    },
    {
      name: "3/8 Truck Load",
      description: "Larger room cleanouts",
      examples: ["Living room furniture", "Kitchen appliances", "Home office cleanout", "Moderate decluttering"],
      truckFill: "37.5%",
      price: "$400",
      popular: false
    },
    {
      name: "1/2 Truck Load",
      description: "Large room or garage cleanouts",
      examples: ["Full room cleanout", "Garage clearing", "Construction debris", "Estate items"],
      truckFill: "50%",
      price: "$450",
      popular: false
    },
    {
      name: "5/8 Truck Load",
      description: "Multi-room cleanout projects",
      examples: ["Two-room cleanout", "Large garage project", "Basement clearing", "Major furniture removal"],
      truckFill: "62.5%",
      price: "$500",
      popular: false
    },
    {
      name: "3/4 Truck Load",
      description: "Major cleanout projects",
      examples: ["Multi-room cleanout", "Large renovation debris", "Business cleanout", "Major decluttering"],
      truckFill: "75%",
      price: "$550",
      popular: false
    },
    {
      name: "7/8 Truck Load",
      description: "Near-complete home cleanouts",
      examples: ["Most of house cleanout", "Large estate clearing", "Major renovation", "Commercial project"],
      truckFill: "87.5%",
      price: "$600",
      popular: false
    },
    {
      name: "Full Truck Load",
      description: "Complete home or business cleanouts",
      examples: ["Whole house cleanout", "Complete renovation", "Large estate cleanout", "Commercial cleanout"],
      truckFill: "100%",
      price: "$650",
      popular: false
    }
  ];

  return (
    <section className="section bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="heading-lg mb-4 text-brand-darkBlue">Choose Your Truck Size</h2>
          <p className="text-lg text-gray-600">
            Our transparent pricing is based on how much space your items take up in our truck. 
            No hourly charges, no hidden fees.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pricingTiers.map((tier, index) => (
            <Card 
              key={index} 
              className={`relative overflow-hidden transition-all duration-300 hover:shadow-lg ${
                tier.popular ? 'ring-2 ring-brand-blue scale-105' : ''
              }`}
            >
              {tier.popular && (
                <div className="absolute top-0 left-0 right-0 bg-brand-blue text-white text-center py-2 text-sm font-medium">
                  Most Popular
                </div>
              )}
              
              <CardContent className={`p-6 ${tier.popular ? 'pt-12' : ''}`}>
                {/* Price Badge */}
                <div className="absolute top-4 right-4 bg-brand-green text-white px-3 py-1 rounded-full text-sm font-bold">
                  {tier.price}
                </div>

                {/* Truck Illustration */}
                <div className="relative mb-6">
                  <div className="bg-gray-100 rounded-lg p-4 flex items-center justify-center h-24">
                    <div className="relative">
                      <Truck className="h-12 w-12 text-gray-400" />
                      <div 
                        className="absolute top-0 left-0 bg-brand-blue rounded opacity-70"
                        style={{
                          width: tier.truckFill,
                          height: '100%'
                        }}
                      />
                    </div>
                  </div>
                  <div className="text-center mt-2 text-sm text-gray-600">
                    {tier.truckFill} filled
                  </div>
                </div>

                <h3 className="heading-sm mb-2 text-brand-darkBlue text-center">
                  {tier.name}
                </h3>
                
                <p className="text-gray-600 text-center mb-4 text-sm">
                  {tier.description}
                </p>

                <div className="space-y-2">
                  <h4 className="font-medium text-sm text-gray-800">Perfect for:</h4>
                  <ul className="space-y-1 text-sm text-gray-600">
                    {tier.examples.map((example, idx) => (
                      <li key={idx} className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-brand-green rounded-full mr-2 flex-shrink-0" />
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-gray-600 mb-4">
            All prices include labor, transportation, and responsible disposal.
          </p>
          <div className="bg-brand-lightBlue p-4 rounded-lg inline-block">
            <p className="text-brand-darkBlue font-medium">
              Starting at $99 • Free on-site estimates • Same-day service available
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TruckPricingTiers;
