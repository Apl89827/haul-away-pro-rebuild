
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { CheckCircle, Waves, Phone } from 'lucide-react';
import { useMeta } from '@/hooks/useMeta';

const HotTubRemovalCincinnati = () => {
  useMeta({
    title: "Hot Tub Removal Cincinnati | HaulAway Pro",
    description: "Professional hot tub and spa removal services in Cincinnati. We safely remove and dispose of hot tubs, spas, and jacuzzis with specialized equipment. Same-day service available.",
    keywords: "hot tub removal Cincinnati, spa removal Cincinnati, jacuzzi removal Cincinnati, hot tub disposal Cincinnati",
    canonicalUrl: "https://haulawaypro.netlify.app/hot-tub-removal-cincinnati"
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
                Hot Tub Removal in Cincinnati
              </h1>
              <p className="text-xl mb-8 leading-relaxed text-gray-100">
                Professional hot tub and spa removal services throughout Cincinnati. We handle the complete removal process including disconnection, drainage, and disposal with specialized equipment and expertise.
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
                  HaulAway Pro provides comprehensive hot tub removal services throughout Cincinnati, specializing in the safe and efficient removal of hot tubs, spas, and jacuzzis of all sizes. Our experienced team understands the complexities involved in hot tub removal, including proper disconnection of electrical and plumbing systems, complete water drainage, and the logistics of removing these extremely heavy units from challenging locations like decks, patios, and tight backyard spaces.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Our hot tub removal service covers all types of spa equipment including portable hot tubs, built-in spas, swim spas, inflatable hot tubs, and commercial spa equipment. Whether your hot tub is located on a deck, in a basement, or in a backyard with limited access, we have the specialized equipment and expertise to handle the removal safely. We coordinate with qualified electricians and plumbers when necessary to ensure proper disconnection of utilities, and we handle all aspects of the removal process from start to finish.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Environmental responsibility is crucial in our hot tub removal process due to the various materials involved. We carefully separate and recycle materials including the fiberglass shell, metal components, pumps, and electronic systems. Hot tub chemicals and water are disposed of according to Cincinnati environmental regulations. When possible, working hot tubs in good condition are donated to organizations that can refurbish them for community use, though this is less common due to the specialized nature of spa equipment.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Our Cincinnati hot tub removal service includes site assessment, utility disconnection coordination, complete removal, and thorough cleanup of the removal area. We provide detailed estimates that account for access challenges and any special equipment needed. Our fully licensed and insured team prioritizes safety throughout the removal process and can often accommodate same-day service for urgent removals. Trust HaulAway Pro for professional, safe, and environmentally responsible hot tub removal services in Cincinnati.
                </p>

                <div className="bg-brand-lightBlue rounded-lg p-6 mb-8">
                  <h2 className="text-2xl font-bold text-brand-darkBlue mb-4">Why Choose Our Hot Tub Removal Service?</h2>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                      <span>Specialized equipment for heavy spa removal</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                      <span>Utility disconnection coordination</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                      <span>Environmentally responsible disposal</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                      <span>Complete site cleanup after removal</span>
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
            <h2 className="heading-lg mb-4 text-white">Ready to Remove Your Hot Tub?</h2>
            <p className="text-xl mb-8 text-gray-200">
              Professional hot tub removal with specialized equipment in Cincinnati
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

export default HotTubRemovalCincinnati;
