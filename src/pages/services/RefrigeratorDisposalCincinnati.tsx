
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { CheckCircle, Snowflake, Phone } from 'lucide-react';
import { useMeta } from '@/hooks/useMeta';

const RefrigeratorDisposalCincinnati = () => {
  useMeta({
    title: "Refrigerator Disposal Cincinnati | HaulAway Pro",
    description: "Professional refrigerator and freezer disposal services in Cincinnati. EPA-compliant refrigerant recovery and eco-friendly appliance recycling.",
    keywords: "refrigerator disposal Cincinnati, freezer removal Cincinnati, appliance disposal Cincinnati, refrigerant recovery Cincinnati",
    canonicalUrl: "https://haulawaypro.netlify.app/refrigerator-disposal-cincinnati"
  });

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-brand-blue to-brand-darkBlue py-20 mt-16">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h1 className="heading-xl mb-6 text-white font-bold">
                Refrigerator Disposal in Cincinnati
              </h1>
              <p className="text-xl mb-8 leading-relaxed text-gray-100">
                Professional refrigerator and freezer disposal services in Cincinnati with EPA-compliant refrigerant recovery. Safe, legal, and environmentally responsible appliance removal.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/booking" className="btn-primary bg-brand-green hover:bg-green-600">
                  Schedule Pickup
                </a>
                <a href="tel:5137128077" className="bg-white text-brand-blue font-semibold py-3 px-6 rounded-md hover:bg-gray-100 transition-colors">
                  Call (513) 712-8077
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="section bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  HaulAway Pro specializes in professional refrigerator disposal services throughout Cincinnati, ensuring compliance with EPA regulations for proper refrigerant recovery and environmental protection. Refrigerators and freezers contain refrigerants that must be safely recovered by certified technicians before disposal. Our team follows all federal and state guidelines for handling these appliances, preventing harmful chemicals from entering the atmosphere and protecting the ozone layer.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Our refrigerator disposal service covers all types of cooling appliances including standard refrigerators, side-by-side units, French door models, compact refrigerators, chest freezers, upright freezers, and commercial cooling units. We handle both working and non-working appliances, providing the same level of environmental responsibility regardless of the unit's condition. Our experienced team carefully disconnects units and safely removes them from kitchens, basements, garages, and tight spaces.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  The refrigerator disposal process involves several critical steps that require professional expertise. First, we safely disconnect the appliance and prepare it for removal. Then, certified technicians recover refrigerants using EPA-approved equipment before the unit is transported to specialized recycling facilities. At these facilities, valuable materials like steel, aluminum, copper, and plastic components are separated and recycled, while hazardous materials are properly disposed of according to environmental regulations.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Choosing professional refrigerator disposal in Cincinnati ensures legal compliance and environmental protection while providing convenience for homeowners and businesses. Our service includes complete removal, proper documentation for regulatory compliance, and cleanup of the removal area. We provide transparent pricing with no hidden fees and can often accommodate same-day service for urgent removals. Trust HaulAway Pro for certified, legal, and environmentally responsible refrigerator disposal services in Cincinnati.
                </p>

                <div className="bg-brand-lightBlue rounded-lg p-6 mb-8">
                  <h2 className="text-2xl font-bold text-brand-darkBlue mb-4">Why Professional Refrigerator Disposal Matters</h2>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                      <span>EPA-compliant refrigerant recovery by certified technicians</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                      <span>Legal compliance with federal and state regulations</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                      <span>Environmental protection and ozone layer preservation</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                      <span>Recycling of valuable materials and components</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section bg-brand-darkBlue text-white">
          <div className="container-custom text-center">
            <h2 className="heading-lg mb-4 text-white">Need Refrigerator Disposal Service?</h2>
            <p className="text-xl mb-8 text-gray-200">
              EPA-compliant refrigerator disposal with certified refrigerant recovery in Cincinnati
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/booking" className="btn-primary bg-brand-green hover:bg-green-600">
                Get Free Estimate
              </a>
              <a href="tel:5137128077" className="bg-white text-brand-darkBlue font-semibold py-3 px-6 rounded-md hover:bg-gray-100 transition-colors">
                Call (513) 712-8077
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default RefrigeratorDisposalCincinnati;
