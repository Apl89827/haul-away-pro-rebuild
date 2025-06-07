
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { CheckCircle, Clock, Shield, Recycle } from 'lucide-react';

const ApplianceRemoval = () => {
  const applianceItems = [
    "Refrigerators and freezers",
    "Washers and dryers",
    "Dishwashers",
    "Stoves and ovens",
    "Microwaves",
    "Water heaters",
    "Air conditioners",
    "Dehumidifiers",
    "Garbage disposals",
    "Wine coolers",
    "Ice makers",
    "Range hoods",
    "Trash compactors",
    "Small kitchen appliances",
    "Broken appliances",
    "Old appliances"
  ];

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-brand-blue to-brand-darkBlue py-20 mt-16">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h1 className="heading-xl mb-6 text-white font-bold drop-shadow-lg">
                Appliance Removal Near Me - Cincinnati
              </h1>
              <p className="text-xl mb-8 leading-relaxed text-gray-100">
                Professional appliance removal and disposal service in Cincinnati. 
                We safely remove refrigerators, washers, dryers, and all major appliances 
                with eco-friendly recycling and same-day service.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/booking" className="btn-primary bg-brand-green hover:bg-green-600">
                  Get Free Estimate
                </a>
                <a href="tel:5138762858" className="bg-white text-brand-blue font-semibold py-3 px-6 rounded-md hover:bg-gray-100 transition-colors">
                  Call (513) 876-2858
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* What We Remove Section */}
        <section className="section bg-white">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="heading-lg mb-4">Appliances We Remove</h2>
              <p className="text-lg text-gray-600">
                From large appliances to small kitchen items, we handle all appliance removal 
                and recycling throughout Cincinnati and surrounding areas.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {applianceItems.map((item, index) => (
                <div key={index} className="flex items-center bg-gray-50 rounded-lg p-4">
                  <CheckCircle className="h-5 w-5 text-brand-green mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Eco-Friendly Section */}
        <section className="section bg-green-50">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <Recycle className="h-16 w-16 text-green-600 mx-auto mb-6" />
              <h2 className="heading-lg mb-4 text-green-800">Eco-Friendly Appliance Recycling</h2>
              <p className="text-lg text-gray-700">
                We responsibly recycle up to 95% of appliance materials, keeping them out of landfills 
                and supporting Cincinnati's environmental goals.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">95%</div>
                <h3 className="font-semibold mb-2">Materials Recycled</h3>
                <p className="text-gray-600">Metals, plastics, and components properly recycled</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
                <h3 className="font-semibold mb-2">Safe Disposal</h3>
                <p className="text-gray-600">Refrigerants and hazardous materials handled safely</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">0%</div>
                <h3 className="font-semibold mb-2">Landfill Waste</h3>
                <p className="text-gray-600">Working appliances donated to local charities</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section bg-brand-darkBlue text-white">
          <div className="container-custom text-center">
            <h2 className="heading-lg mb-4 text-white">Need Appliance Removal Today?</h2>
            <p className="text-xl mb-8 text-gray-200">
              Fast, reliable appliance removal service throughout Greater Cincinnati
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/booking" className="btn-primary bg-brand-green hover:bg-green-600">
                Schedule Pickup Online
              </a>
              <a href="tel:5138762858" className="bg-white text-brand-darkBlue font-semibold py-3 px-6 rounded-md hover:bg-gray-100 transition-colors">
                Call (513) 876-2858
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ApplianceRemoval;
