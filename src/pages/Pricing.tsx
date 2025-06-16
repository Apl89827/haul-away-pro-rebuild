
import React from 'react';
import { Link } from "react-router-dom";
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { CheckCircle, Phone, Shield, Clock, Truck } from 'lucide-react';
import PricingHero from '@/components/pricing/PricingHero';
import TruckPricingTiers from '@/components/pricing/TruckPricingTiers';
import LoadCalculator from '@/components/pricing/LoadCalculator';
import PricingTestimonials from '@/components/pricing/PricingTestimonials';

const PricingPage = () => {
  const whatWeInclude = [
    "Professional labor and loading",
    "Transportation to disposal facilities",
    "Responsible disposal and recycling",
    "Complete cleanup and sweeping",
    "All taxes and disposal fees"
  ];

  const pricingFactors = [
    "Volume of items being removed",
    "Type of materials (some items have disposal fees)",
    "Accessibility and location on property"
  ];

  return (
    <>
      <Header />
      <main>
        {/* Modern Hero Section */}
        <PricingHero />

        {/* Truck-Based Pricing Tiers */}
        <TruckPricingTiers />

        {/* Interactive Load Calculator */}
        <LoadCalculator />

        {/* How Our Pricing Works */}
        <section className="section bg-white">
          <div className="container-custom">
            <h2 className="heading-lg text-center mb-4 text-brand-darkBlue">How Our Pricing Works</h2>
            <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              Simple, transparent, and fair. No hourly charges, no hidden fees, no surprises.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="text-center">
                <div className="bg-brand-blue w-20 h-20 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-6">1</div>
                <h3 className="heading-md mb-4">Show Us Your Items</h3>
                <p className="text-gray-600">Point to what you want removed. Our team will assess the volume and provide an upfront estimate.</p>
              </div>
              <div className="text-center">
                <div className="bg-brand-blue w-20 h-20 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-6">2</div>
                <h3 className="heading-md mb-4">Approve Your Price</h3>
                <p className="text-gray-600">Get an all-inclusive price on the spot. You approve before we start - no surprises.</p>
              </div>
              <div className="text-center">
                <div className="bg-brand-blue w-20 h-20 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-6">3</div>
                <h3 className="heading-md mb-4">We Haul It Away</h3>
                <p className="text-gray-600">Relax while our professional crew loads everything and cleans up completely.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Customer Testimonials */}
        <PricingTestimonials />

        {/* What's Included & Pricing Factors */}
        <section className="section bg-gray-50">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="heading-md mb-6 text-brand-darkBlue">What's Included in Every Service</h3>
                <ul className="space-y-3 mb-6">
                  {whatWeInclude.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-brand-green mr-3 shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="bg-brand-lightBlue p-4 rounded-lg">
                  <p className="text-brand-darkBlue font-medium text-center">
                    Everything is included - no add-on fees!
                  </p>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="heading-md mb-6 text-brand-darkBlue">What Affects Your Price?</h3>
                <ul className="space-y-3 mb-6">
                  {pricingFactors.map((factor, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-brand-blue mr-3 shrink-0 mt-0.5" />
                      <span className="text-gray-700">{factor}</span>
                    </li>
                  ))}
                </ul>
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <p className="text-green-800 text-sm">
                    <strong>Fair Pricing Promise:</strong> You only pay for the space you use. 
                    No minimum time requirements or inflated hourly rates.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section - Condensed */}
        <section className="section bg-white">
          <div className="container-custom">
            <h2 className="heading-lg text-center mb-8 text-brand-darkBlue">Quick Pricing Questions</h2>
            <div className="max-w-3xl mx-auto grid gap-6 md:grid-cols-2">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold mb-2 text-brand-darkBlue">No hourly charges?</h3>
                <p className="text-gray-600 text-sm">Correct! We charge by volume only, so you know exactly what you'll pay upfront.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold mb-2 text-brand-darkBlue">Same-day service?</h3>
                <p className="text-gray-600 text-sm">Yes! Call before 12pm and we'll come today in most cases.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold mb-2 text-brand-darkBlue">Any discounts?</h3>
                <p className="text-gray-600 text-sm">We offer special rates for seniors and military personnel.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold mb-2 text-brand-darkBlue">Payment options?</h3>
                <p className="text-gray-600 text-sm">We accept all major credit cards, cash, and checks upon completion.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="section bg-brand-blue text-white">
          <div className="container-custom text-center">
            <Truck className="h-16 w-16 text-white mx-auto mb-6 opacity-80" />
            <h2 className="heading-lg text-white mb-4">Ready to Clear the Clutter?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Get your free, no-obligation estimate today. Most jobs completed same day!
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/booking">
                <Button className="bg-white text-brand-blue hover:bg-gray-100 font-medium py-3 px-8 text-lg">
                  Check Availability Now
                </Button>
              </Link>
              <a href="tel:5137128077">
                <Button className="bg-brand-green hover:bg-brand-green/90 text-white font-medium py-3 px-8 text-lg">
                  <Phone className="h-5 w-5 mr-2" />
                  Call (513) 712-8077
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default PricingPage;
