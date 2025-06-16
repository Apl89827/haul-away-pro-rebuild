
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { CheckCircle, Bed, Phone } from 'lucide-react';
import { useMeta } from '@/hooks/useMeta';

const BedFrameRemovalCincinnati = () => {
  useMeta({
    title: "Bed Frame Removal Cincinnati | HaulAway Pro",
    description: "Professional bed frame removal services in Cincinnati. We safely remove all types of bed frames including platform beds, metal frames, and wooden headboards. Same-day service available.",
    keywords: "bed frame removal Cincinnati, mattress frame removal Cincinnati, headboard removal Cincinnati, bedroom furniture removal Cincinnati",
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
                Professional bed frame removal services throughout Cincinnati. We safely remove all types of bed frames, headboards, and bedroom furniture with careful handling to prevent damage to your home.
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
                  HaulAway Pro provides comprehensive bed frame removal services throughout Cincinnati, specializing in the safe and efficient removal of all types of bedroom furniture. Our experienced team understands that bed frames can be challenging to remove due to their size, weight, and the need to navigate stairs and tight spaces. We use proper disassembly techniques and protective equipment to ensure your bed frame is removed without damage to walls, floors, or other furniture in your home.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Our bed frame removal service covers all types of sleeping furniture including platform beds, sleigh beds, canopy beds, bunk beds, adjustable bed frames, metal bed frames, wooden headboards, footboards, and complete bedroom sets. Whether you're upgrading to a new bedroom set, moving to a smaller space, or dealing with damaged furniture, we handle projects of all sizes with professional care. Our team can disassemble complex bed frames and reassemble them if needed for donation purposes.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Environmental responsibility guides our bed frame removal process. We carefully evaluate each piece for donation opportunities to local Cincinnati furniture banks, homeless shelters, and families transitioning into permanent housing. Quality bed frames that can provide comfort to others are donated whenever possible, supporting community members in need while extending the furniture's useful life. For frames that cannot be donated, we ensure responsible disposal through certified facilities where materials like wood and metal are recycled.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Our Cincinnati bed frame removal service includes complete bedroom cleanout if needed, allowing you to refresh your entire sleeping space. We provide transparent pricing with detailed estimates and often offer same-day service for urgent removals. Our fully licensed and insured team maintains professionalism throughout the process and ensures complete cleanup after removal. Trust HaulAway Pro for reliable, careful, and environmentally conscious bed frame removal services in Cincinnati.
                </p>

                <div className="bg-brand-lightBlue rounded-lg p-6 mb-8">
                  <h2 className="text-2xl font-bold text-brand-darkBlue mb-4">Why Choose Our Bed Frame Removal Service?</h2>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                      <span>Professional disassembly and careful handling</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                      <span>Donation to Cincinnati families and shelters</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                      <span>Complete bedroom furniture removal</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                      <span>Same-day service often available</span>
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
