
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { CheckCircle, Bed, Phone } from 'lucide-react';
import { useMeta } from '@/hooks/useMeta';

const MattressRemovalCincinnati = () => {
  useMeta({
    title: "Mattress Removal Cincinnati | HaulAway Pro",
    description: "Professional mattress and box spring removal services in Cincinnati. Hygienic removal and eco-friendly disposal. Same-day service available.",
    keywords: "mattress removal Cincinnati, box spring removal Cincinnati, bed disposal Cincinnati, mattress disposal Cincinnati",
    canonicalUrl: "https://haulawaypro.netlify.app/mattress-removal-cincinnati"
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
                Mattress Removal in Cincinnati
              </h1>
              <p className="text-xl mb-8 leading-relaxed text-gray-100">
                Professional mattress and box spring removal services throughout Cincinnati. We provide hygienic removal and responsible disposal of all types of sleep systems with same-day service available.
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
                  HaulAway Pro provides professional mattress removal services throughout Cincinnati, handling mattresses and box springs of all sizes with care and hygiene as top priorities. We understand that mattresses can be challenging to dispose of due to their size, weight, and the need for proper sanitation during removal. Our experienced team uses protective coverings and proper handling techniques to ensure hygienic removal from bedrooms, including navigation of stairs and narrow hallways.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Our mattress removal service covers all types of sleep systems including twin, full, queen, and king-size mattresses, box springs, memory foam mattresses, pillow-top mattresses, and specialty beds like waterbeds or adjustable bases. Whether you're upgrading to a new mattress, clearing out multiple bedrooms, or dealing with damaged or worn-out sleep surfaces, we handle the entire removal process efficiently and professionally.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Environmental responsibility is crucial in our mattress disposal process. We partner with certified mattress recycling facilities that specialize in deconstructing mattresses to recover valuable materials. Steel springs are separated and sent to metal recycling facilities, while foam components and fabric materials are processed according to environmental guidelines. This approach ensures that mattresses don't end up in landfills where they can take decades to decompose.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Our Cincinnati mattress removal service includes complete sanitization of the removal area and cleanup after pickup. We provide transparent pricing with no hidden fees and can often accommodate same-day service for urgent removals. Our fully licensed and insured team maintains the highest standards of cleanliness and professionalism throughout the process. Trust HaulAway Pro for reliable, hygienic, and environmentally responsible mattress removal services in Cincinnati.
                </p>

                <div className="bg-brand-lightBlue rounded-lg p-6 mb-8">
                  <h2 className="text-2xl font-bold text-brand-darkBlue mb-4">Why Choose Our Mattress Removal Service?</h2>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                      <span>Hygienic removal with protective coverings</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                      <span>Eco-friendly mattress recycling and disposal</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                      <span>Safe navigation of stairs and tight spaces</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                      <span>Same-day service available</span>
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
            <h2 className="heading-lg mb-4 text-white">Need Mattress Removal Service?</h2>
            <p className="text-xl mb-8 text-gray-200">
              Professional, hygienic mattress removal with eco-friendly disposal in Cincinnati
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

export default MattressRemovalCincinnati;
