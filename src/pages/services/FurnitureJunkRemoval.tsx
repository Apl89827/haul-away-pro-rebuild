
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { CheckCircle, Clock, Shield, Truck } from 'lucide-react';

const FurnitureJunkRemoval = () => {
  const furnitureItems = [
    "Sofas and sectionals",
    "Chairs and recliners", 
    "Dining tables and chairs",
    "Coffee tables and end tables",
    "Desks and office chairs",
    "Dressers and armoires",
    "Mattresses and box springs",
    "Bed frames and headboards",
    "Cabinets and bookcases",
    "Entertainment centers",
    "Lamps and lighting fixtures",
    "Rugs and carpeting",
    "Mirrors and artwork",
    "Home décor items",
    "Antique furniture",
    "Outdoor furniture"
  ];

  const processSteps = [
    {
      step: "1",
      title: "Schedule Your Pickup",
      description: "Book online or call for same-day service"
    },
    {
      step: "2", 
      title: "Free On-Site Estimate",
      description: "We provide upfront pricing with no hidden fees"
    },
    {
      step: "3",
      title: "Safe Furniture Removal",
      description: "Our team handles all the heavy lifting and loading"
    },
    {
      step: "4",
      title: "Responsible Disposal",
      description: "We donate, recycle, or dispose of furniture properly"
    }
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
                Furniture & Home Junk Removal Near Me
              </h1>
              <p className="text-xl mb-8 leading-relaxed text-gray-100">
                Professional furniture removal service in Cincinnati and surrounding areas. 
                We handle everything from single pieces to complete home cleanouts with 
                same-day availability and eco-friendly disposal.
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
              <h2 className="heading-lg mb-4">Furniture We Remove</h2>
              <p className="text-lg text-gray-600">
                From antique furniture to modern pieces, we handle all types of furniture removal 
                throughout Cincinnati, Blue Ash, Mason, West Chester, and surrounding neighborhoods.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {furnitureItems.map((item, index) => (
                <div key={index} className="flex items-center bg-gray-50 rounded-lg p-4">
                  <CheckCircle className="h-5 w-5 text-brand-green mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="section bg-brand-gray">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="heading-lg mb-4">Furniture Removal Service Areas</h2>
              <p className="text-lg text-gray-600 mb-8">
                We provide furniture junk removal services throughout Greater Cincinnati
              </p>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                {[
                  "Cincinnati", "Blue Ash", "Mason", "West Chester",
                  "Over-the-Rhine", "Hyde Park", "Oakley", "Mount Adams",
                  "Clifton", "Walnut Hills", "Downtown", "And more..."
                ].map((area, index) => (
                  <div key={index} className="bg-white rounded p-3 text-center">
                    {area}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="section bg-white">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="heading-lg mb-4">How Our Furniture Removal Works</h2>
              <p className="text-lg text-gray-600">
                Simple, straightforward furniture removal process with transparent pricing
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-brand-blue text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {step.step}
                  </div>
                  <h3 className="heading-sm mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="section bg-brand-lightBlue">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="heading-lg mb-4">Why Choose HaulAway Pro for Furniture Removal?</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <Clock className="h-12 w-12 text-brand-blue mx-auto mb-4" />
                <h3 className="heading-sm mb-3">Same-Day Service</h3>
                <p className="text-gray-600">Need furniture removed today? We offer same-day pickup throughout Cincinnati.</p>
              </div>
              
              <div className="text-center">
                <Shield className="h-12 w-12 text-brand-blue mx-auto mb-4" />
                <h3 className="heading-sm mb-3">Fully Insured</h3>
                <p className="text-gray-600">Licensed and insured team protects your property during furniture removal.</p>
              </div>
              
              <div className="text-center">
                <Truck className="h-12 w-12 text-brand-blue mx-auto mb-4" />
                <h3 className="heading-sm mb-3">Complete Service</h3>
                <p className="text-gray-600">We handle all the heavy lifting, loading, and responsible disposal.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section bg-brand-darkBlue text-white">
          <div className="container-custom text-center">
            <h2 className="heading-lg mb-4 text-white">Ready to Remove Your Furniture?</h2>
            <p className="text-xl mb-8 text-gray-200">
              Get your free estimate today for furniture removal near you in Cincinnati
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

export default FurnitureJunkRemoval;
