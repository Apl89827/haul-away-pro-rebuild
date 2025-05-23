
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';

const PricingPage = () => {
  const pricingOptions = [
    {
      title: "Small Load",
      description: "For small items or single piece removal",
      price: "$99-$149",
      items: [
        "Single furniture items",
        "Small appliance removal",
        "Partial garage cleanout",
        "Small e-waste disposal",
        "Yard debris (small amount)"
      ]
    },
    {
      title: "Medium Load",
      description: "For approximately 1/4 truck load",
      price: "$229-$329",
      items: [
        "Multiple furniture items",
        "Single room cleanout",
        "Medium appliance removal",
        "Office equipment disposal",
        "Deck/fence removal (partial)"
      ],
      popular: true
    },
    {
      title: "Large Load",
      description: "For approximately 1/2 truck load",
      price: "$379-$529",
      items: [
        "Full room cleanout",
        "Multiple appliance removal",
        "Basement cleanout",
        "Garage cleanout",
        "Heavy yard debris removal"
      ]
    },
    {
      title: "Full Load",
      description: "For full truck load",
      price: "$549-$649",
      items: [
        "Complete home cleanout",
        "Full basement/garage junk removal",
        "Construction debris removal",
        "Complete renovation waste",
        "Estate cleanout services"
      ]
    }
  ];

  return (
    <>
      <Header />
      <main>
        {/* Pricing Hero Section */}
        <section className="pt-32 pb-16 bg-brand-lightBlue">
          <div className="container-custom text-center">
            <h1 className="heading-xl mb-4 text-brand-blue">Simple, Transparent Pricing</h1>
            <p className="text-xl max-w-3xl mx-auto text-gray-600">
              No hidden fees. Our pricing is based on volume - you only pay for the space your items take up in our truck.
            </p>
          </div>
        </section>

        {/* Pricing Tiers */}
        <section className="section bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {pricingOptions.map((option) => (
                <div 
                  key={option.title} 
                  className={`rounded-lg overflow-hidden border transition-all ${
                    option.popular 
                      ? 'border-brand-green shadow-lg scale-105 md:scale-105' 
                      : 'border-gray-200'
                  }`}
                >
                  {option.popular && (
                    <div className="bg-brand-green text-white text-center py-2 font-medium">
                      Most Popular
                    </div>
                  )}
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{option.title}</h3>
                    <p className="text-gray-600 mb-4">{option.description}</p>
                    <div className="mb-6">
                      <span className="text-3xl font-bold text-brand-blue">{option.price}</span>
                    </div>
                    <ul className="space-y-3 mb-6">
                      {option.items.map((item) => (
                        <li key={item} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-brand-green mr-2 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full btn-primary">Get Quote</Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How Pricing Works */}
        <section className="section bg-gray-50">
          <div className="container-custom">
            <h2 className="heading-lg text-center mb-12">How Our Pricing Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-brand-blue w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">1</div>
                <h3 className="heading-sm mb-3">We Provide a Quote</h3>
                <p className="text-gray-600">Our team will give you a free, no-obligation quote based on the volume of items you need removed.</p>
              </div>
              <div className="text-center">
                <div className="bg-brand-blue w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">2</div>
                <h3 className="heading-sm mb-3">You Approve the Price</h3>
                <p className="text-gray-600">Once you approve our upfront price, we'll schedule your junk removal at a time that works for you.</p>
              </div>
              <div className="text-center">
                <div className="bg-brand-blue w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">3</div>
                <h3 className="heading-sm mb-3">We Haul it Away</h3>
                <p className="text-gray-600">Our professional team removes your unwanted items quickly and responsibly disposes of them.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Frequently Asked Questions */}
        <section className="section bg-white">
          <div className="container-custom">
            <h2 className="heading-lg text-center mb-8">Pricing FAQ</h2>
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="heading-sm mb-2">What factors affect the price?</h3>
                <p className="text-gray-600">The cost depends primarily on the volume of items being removed. Other factors may include item type, disposal fees for certain materials, and difficulty of removal.</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="heading-sm mb-2">Do you offer any discounts?</h3>
                <p className="text-gray-600">We offer special discounts for seniors, military, and recurring customers. Just mention your eligibility when requesting a quote.</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="heading-sm mb-2">Is there a minimum charge?</h3>
                <p className="text-gray-600">Yes, our minimum charge is $99 for very small items. This covers our travel time, labor, and proper disposal costs.</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="heading-sm mb-2">Are there any hidden fees?</h3>
                <p className="text-gray-600">No, the price we quote is the price you pay. We will inform you upfront if there are any special disposal fees for items like electronics or hazardous materials.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="section bg-brand-blue text-white">
          <div className="container-custom text-center">
            <h2 className="heading-lg text-white mb-4">Ready to Get Started?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Contact us today for a free, no-obligation quote on your junk removal needs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="bg-white text-brand-blue hover:bg-gray-100 font-medium py-3 px-6">Get a Free Quote</Button>
              <Button className="bg-brand-green hover:bg-brand-green/90 text-white font-medium py-3 px-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                Call (513) 876-2858
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default PricingPage;
