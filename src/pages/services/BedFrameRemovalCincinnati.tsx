
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { CheckCircle, Bed, Phone } from 'lucide-react';
import { useMeta } from '@/hooks/useMeta';

const BedFrameRemovalCincinnati = () => {
  useMeta({
    title: "Bed Frame Removal Cincinnati | HaulAway Pro",
    description: "Professional bed frame removal services in Cincinnati. We remove all types of bed frames, headboards, footboards, and bedroom furniture. Same-day service available.",
    keywords: "bed frame removal Cincinnati, headboard removal Cincinnati, bedroom furniture removal Cincinnati, bed disposal Cincinnati",
    canonicalUrl: "https://haulawaypro.netlify.app/bed-frame-removal-cincinnati"
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
                Bed Frame Removal in Cincinnati
              </h1>
              <p className="text-xl mb-8 leading-relaxed text-gray-100">
                Professional bed frame removal services throughout Cincinnati. We safely remove bed frames, headboards, footboards, and complete bedroom sets with careful handling and eco-friendly disposal.
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
                  HaulAway Pro provides professional bed frame removal services throughout Cincinnati, handling all types of bedroom furniture from simple metal frames to elaborate wooden bedroom sets. Our experienced team understands that bed frames can be challenging to remove due to their size, weight, and the tight spaces of bedrooms. We use proper disassembly techniques and protective materials to ensure safe removal without damaging bedroom walls, floors, or other furniture during the process.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Our bed frame removal service covers all types of bedroom furniture including platform beds, sleigh beds, four-poster beds, bunk beds, adjustable bed frames, metal bed frames, wooden bed frames, headboards, footboards, and complete bedroom sets. Whether you're upgrading to a new bedroom set, moving to a smaller space, or clearing out guest rooms, we handle bedroom furniture of all sizes and styles. Our team can carefully disassemble complex bed frames and navigate challenging removal situations including narrow stairways and tight bedroom doorways.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Environmental responsibility drives our bed frame disposal process. We evaluate all bedroom furniture for donation opportunities to local Cincinnati families, charitable organizations, and transitional housing programs. Quality bed frames and bedroom furniture can provide comfort and stability for individuals and families establishing new homes. We work with local charities and furniture assistance programs to identify recipients who can benefit from donated bedroom furniture. For items that cannot be donated, we ensure responsible disposal through certified facilities where materials like wood and metal are properly recycled.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Our Cincinnati bed frame removal service includes careful assessment of removal challenges, expert disassembly when needed, safe removal from bedrooms, and complete cleanup after pickup. We provide transparent pricing with detailed estimates and can often accommodate same-day service for urgent removals. Our fully licensed and insured team maintains the highest standards of care and respects your home throughout the entire process. Trust HaulAway Pro for reliable, careful, and environmentally responsible bed frame removal services in Cincinnati.
                </p>

                <div className="bg-brand-lightBlue rounded-lg p-6 mb-8">
                  <h2 className="text-2xl font-bold text-brand-darkBlue mb-4">Bedroom Items We Remove</h2>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                      <span>Bed frames and platform beds</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                      <span>Headboards and footboards</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                      <span>Bunk beds and loft beds</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                      <span>Complete bedroom furniture sets</span>
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
            <h2 className="heading-lg mb-4 text-white">Need Bed Frame Removal?</h2>
            <p className="text-xl mb-8 text-gray-200">
              Professional bedroom furniture removal with careful handling in Cincinnati
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

export default BedFrameRemovalCincinnati;
