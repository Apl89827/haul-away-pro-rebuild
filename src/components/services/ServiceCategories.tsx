
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const ServiceCategories = () => {
  const categories = [
    {
      title: "Residential Junk Removal",
      icon: "🏠",
      path: "/residential-junk-removal-cincinnati",
      items: [
        "Complete home cleanouts",
        "Furniture and appliance removal",
        "Basement and attic clearing",
        "Garage cleanouts",
        "Single item pickups",
        "Same-day service available"
      ]
    },
    {
      title: "Commercial Junk Removal",
      icon: "🏢",
      path: "/commercial-junk-removal-cincinnati",
      items: [
        "Office furniture and equipment",
        "Retail fixtures removal",
        "Restaurant equipment disposal",
        "Construction debris removal",
        "Warehouse cleanouts",
        "Scheduled pickup service"
      ]
    },
    {
      title: "Appliance & Furniture Removal",
      icon: "🧊",
      path: "/appliance-furniture-removal-cincinnati",
      items: [
        "Refrigerators and freezers",
        "Washers and dryers",
        "Mattresses and box springs",
        "Large furniture pieces",
        "EPA-compliant disposal",
        "Donation coordination"
      ]
    },
    {
      title: "Estate Cleanout Services",
      icon: "🏛️",
      path: "/estate-cleanout-services-cincinnati",
      items: [
        "Complete property clearing",
        "Probate property cleanouts",
        "Deceased family cleanouts",
        "Estate sale cleanup",
        "Hoarding cleanouts",
        "Compassionate service"
      ]
    },
    {
      title: "Light Demolition Services",
      icon: "🔨",
      path: "/light-demolition-services-cincinnati",
      items: [
        "Interior wall removal",
        "Deck demolition",
        "Shed removal",
        "Fence removal",
        "Small structure demolition",
        "Debris removal included"
      ]
    },
    {
      title: "Electronics & Technology",
      icon: "📺",
      path: "/services/electronic-waste-removal",
      items: [
        "Televisions and monitors",
        "Computers and laptops",
        "Printers and office equipment",
        "Stereo systems",
        "Gaming consoles",
        "Certified data destruction"
      ]
    }
  ];

  return (
    <section className="section bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-lg mb-4">Comprehensive Junk Removal Services</h2>
          <p className="text-lg text-gray-600">
            From residential cleanouts to commercial projects, we handle all types of junk removal 
            with professional service and environmental responsibility.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Link key={category.title} to={category.path}>
              <Card className="card-shadow hover:shadow-xl transition-all duration-300 cursor-pointer h-full">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <span className="text-4xl mr-3">{category.icon}</span>
                    <h3 className="heading-sm">{category.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {category.items.map((item, index) => (
                      <li key={index} className="flex items-center text-gray-700">
                        <span className="w-2 h-2 bg-brand-green rounded-full mr-3 flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-brand-gray rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="heading-md mb-4">Don't See Your Item Listed?</h3>
            <p className="text-lg text-gray-600 mb-6">
              We handle many more items than what's listed here. If you're unsure whether we can take something, 
              just ask! Our team is experienced with all types of junk removal projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:5137128077" 
                className="btn-primary"
              >
                Call (513) 712-8077
              </a>
              <a 
                href="/booking" 
                className="btn-secondary"
              >
                Check Availability Online
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceCategories;
