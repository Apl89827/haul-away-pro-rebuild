
import React from "react";
import { HeartHandshake, Recycle, Users, TreePine } from "lucide-react";

const RepurposeSection = () => {
  const impactStats = [{
    icon: Recycle,
    number: "Up to 50%",
    label: "Items Donated or Recycled",
    description: "We keep most items out of landfills"
  }, {
    icon: Users,
    number: "10+",
    label: "Local Charity Partners",
    description: "Supporting Cincinnati communities"
  }, {
    icon: TreePine,
    number: "50+",
    label: "Tons Diverted Annually",
    description: "From landfills to better use"
  }];

  const donationPartners = ["Goodwill", "Salvation Army", "Habitat for Humanity", "Matthew 25 Ministries", "New Life Furniture Bank", "St. Vincent de Paul"];

  return (
    <section className="section bg-brand-gray">
      <div className="container-custom">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="heading-lg mb-6 text-brand-darkBlue">
            We Don't Just Remove - We Repurpose & Give Back
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Your unwanted items can make a real difference in our community. 
            We're committed to responsible disposal that benefits Cincinnati 
            families and protects our environment.
          </p>
        </div>

        {/* Impact Statistics */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {impactStats.map((stat, index) => (
            <div key={index} className="bg-white rounded-lg p-8 text-center card-shadow">
              <stat.icon className="w-12 h-12 text-brand-green mx-auto mb-4" />
              <div className="text-3xl font-bold text-brand-blue mb-2">{stat.number}</div>
              <h3 className="heading-sm mb-3 text-brand-darkBlue">{stat.label}</h3>
              <p className="text-gray-600">{stat.description}</p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Process */}
          <div>
            <h3 className="heading-md mb-6 text-brand-darkBlue">Our Responsible Disposal Process</h3>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-brand-green rounded-full flex items-center justify-center flex-shrink-0">
                  <HeartHandshake className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-brand-darkBlue mb-2">Donate Quality Items</h4>
                  <p className="text-gray-600">Furniture, clothing, electronics, and household goods in good condition go to local charities.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 bg-brand-blue rounded-full flex items-center justify-center flex-shrink-0">
                  <Recycle className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-brand-darkBlue mb-2">Recycle Materials</h4>
                  <p className="text-gray-600">Metal, wood, electronics, and other materials are sent to certified recycling facilities.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 bg-brand-green rounded-full flex items-center justify-center flex-shrink-0">
                  <TreePine className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-brand-darkBlue mb-2">Eco-Friendly Disposal</h4>
                  <p className="text-gray-600">Items that can't be donated or recycled are disposed of using environmentally responsible methods.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Partners & Image */}
          <div>
            <div className="bg-white rounded-lg p-8 card-shadow">
              <img 
                alt="HaulAway PRO junk removal truck at donation drop-off facility" 
                className="w-full h-64 object-contain rounded-lg mb-8 bg-gray-50" 
                src="/lovable-uploads/bbd75837-0d8d-46dd-b630-0e2bd854a10c.png" 
              />
              
              <h4 className="heading-sm mb-6 text-brand-darkBlue">Our Donation Partners</h4>
              <div className="grid grid-cols-1 gap-3">
                {donationPartners.map((partner, index) => (
                  <div key={index} className="flex items-center gap-3 text-sm text-gray-700 py-1">
                    <div className="w-2 h-2 bg-brand-green rounded-full flex-shrink-0"></div>
                    <span className="font-medium">{partner}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RepurposeSection;
