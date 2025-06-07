
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { CheckCircle, TreePine, Waves, Sun } from 'lucide-react';

const OutdoorItemRemoval = () => {
  const outdoorItems = [
    "Tree branches and brush",
    "Shed removal",
    "Patio furniture",
    "Grills and outdoor equipment",
    "Pool equipment",
    "Jacuzzi removal",
    "Deck furniture",
    "Outdoor toys and equipment",
    "Garden tools and equipment",
    "Lawn mowers",
    "Outdoor storage units",
    "Gazebos and pergolas",
    "Fencing materials",
    "Outdoor appliances",
    "Hot tubs and spas",
    "Playground equipment"
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
                Outdoor Item Removal Near Me
              </h1>
              <p className="text-xl mb-8 leading-relaxed text-gray-100">
                Professional removal of sheds, jacuzzis, patio furniture, and all outdoor items 
                in Cincinnati. We handle the heavy lifting for pool equipment, outdoor structures, 
                and yard cleanup with same-day service available.
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
              <h2 className="heading-lg mb-4">Outdoor Items We Remove</h2>
              <p className="text-lg text-gray-600">
                From small patio items to large structures like sheds and jacuzzis, 
                we handle all outdoor item removal throughout Greater Cincinnati.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {outdoorItems.map((item, index) => (
                <div key={index} className="flex items-center bg-gray-50 rounded-lg p-4">
                  <CheckCircle className="h-5 w-5 text-brand-green mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Specialty Services */}
        <section className="section bg-green-50">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="heading-lg mb-4">Specialty Outdoor Removal Services</h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg p-8 text-center card-shadow">
                <TreePine className="h-16 w-16 text-green-600 mx-auto mb-6" />
                <h3 className="heading-sm mb-4">Shed Removal</h3>
                <p className="text-gray-600">
                  Complete shed dismantling and removal service. We handle all sizes 
                  of sheds and storage buildings throughout Cincinnati.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-8 text-center card-shadow">
                <Waves className="h-16 w-16 text-blue-600 mx-auto mb-6" />
                <h3 className="heading-sm mb-4">Jacuzzi & Hot Tub Removal</h3>
                <p className="text-gray-600">
                  Professional jacuzzi and hot tub removal with proper disconnection 
                  of electrical and plumbing systems.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-8 text-center card-shadow">
                <Sun className="h-16 w-16 text-orange-600 mx-auto mb-6" />
                <h3 className="heading-sm mb-4">Pool Equipment</h3>
                <p className="text-gray-600">
                  Safe removal of pool equipment, filters, pumps, and accessories 
                  with proper disposal and recycling.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section bg-brand-darkBlue text-white">
          <div className="container-custom text-center">
            <h2 className="heading-lg mb-4 text-white">Ready to Clear Your Outdoor Space?</h2>
            <p className="text-xl mb-8 text-gray-200">
              Professional outdoor item removal service throughout Cincinnati
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

export default OutdoorItemRemoval;
