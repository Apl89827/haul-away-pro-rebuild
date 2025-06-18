
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { CheckCircle, Shield, Hammer, Phone } from 'lucide-react';
import { useMeta } from '@/hooks/useMeta';

const DeckDemolitionCincinnati = () => {
  useMeta({
    title: "Deck Demolition Cincinnati | HaulAway Pro",
    description: "Professional deck demolition services in Cincinnati. Complete deck removal for all materials including wood, composite, and multi-level structures with foundation removal.",
    keywords: "deck demolition Cincinnati, deck removal Cincinnati, deck teardown Cincinnati, composite deck removal Cincinnati, wood deck demolition Cincinnati",
    canonicalUrl: "https://haulawaypro.netlify.app/deck-demolition-cincinnati"
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
                Deck Demolition Services in Cincinnati
              </h1>
              <p className="text-xl mb-8 leading-relaxed text-gray-100">
                Professional deck demolition in Cincinnati. Complete removal of wood, composite, and multi-level decks with electrical disconnection and foundation removal.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/booking" className="btn-primary bg-brand-green hover:bg-green-600">
                  Get Deck Removal Quote
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
                  HaulAway Pro specializes in deck demolition throughout Cincinnati, safely removing old, damaged, or unwanted decks from residential properties. Our experienced team handles decks of all sizes and materials, including traditional wood construction, modern composite materials, and complex multi-level structures. We use proper safety equipment and proven demolition techniques to prevent injury and protect your property during the removal process. Our service includes careful assessment of deck structure, identification of electrical connections, and coordination with homeowners to ensure minimal disruption to surrounding landscaping and property features.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Our deck demolition process begins with comprehensive inspection of the deck structure, foundation systems, and any attached electrical or plumbing connections. We safely disconnect all electrical components including lighting, outlets, and ceiling fans before beginning demolition. Our team systematically removes railings, decking boards, and support structures while protecting surrounding landscaping and property features. We use appropriate tools and techniques to extract foundation elements including concrete footings, pier blocks, and support posts. All demolition work is performed with attention to safety and efficiency while minimizing impact on your yard and adjacent structures.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  We maximize recycling opportunities for all deck demolition materials, sorting wood, metal, and composite components for appropriate processing facilities in the Cincinnati area. Usable lumber is directed to construction recycling centers, metal hardware and fasteners are sent to scrap processing facilities, and composite materials are handled according to manufacturer recycling programs when available. Our environmental commitment ensures that demolition waste is diverted from landfills whenever possible while supporting sustainable practices in the construction industry.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Our deck demolition service includes complete structure assessment, electrical disconnection and safety protocols, systematic demolition and debris removal, foundation and footing extraction, material sorting for recycling, and complete site cleanup and restoration. We coordinate with homeowners to ensure deck removal aligns with landscaping plans and new construction timelines. Whether you're replacing an old deck with a new design or reclaiming yard space for alternative uses, our professional demolition service ensures safe and efficient removal while preparing your outdoor space for its next chapter.
                </p>

                <div className="bg-brand-lightBlue rounded-lg p-6 mb-8">
                  <h2 className="text-2xl font-bold text-brand-darkBlue mb-4">Deck Demolition Services</h2>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                      <span>Complete deck structure removal</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                      <span>Electrical disconnection and safety</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                      <span>Foundation and footing removal</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                      <span>Material recycling and disposal</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                      <span>Landscaping protection and site cleanup</span>
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
            <h2 className="heading-lg mb-4 text-white">Need Deck Demolition?</h2>
            <p className="text-xl mb-8 text-gray-200">
              Professional deck removal with foundation extraction and complete site cleanup in Cincinnati
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/booking" className="btn-primary bg-brand-green hover:bg-green-600">
                Get Deck Removal Quote
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

export default DeckDemolitionCincinnati;
