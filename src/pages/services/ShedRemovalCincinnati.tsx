
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { CheckCircle, Shield, Hammer, Phone } from 'lucide-react';
import { useMeta } from '@/hooks/useMeta';

const ShedRemovalCincinnati = () => {
  useMeta({
    title: "Shed Removal Cincinnati | HaulAway Pro",
    description: "Professional shed removal services in Cincinnati. Complete demolition and removal of storage sheds, garden sheds, and small outbuildings with foundation removal.",
    keywords: "shed removal Cincinnati, shed demolition Cincinnati, storage shed removal Cincinnati, garden shed removal Cincinnati, outbuilding demolition Cincinnati",
    canonicalUrl: "https://haulawaypro.netlify.app/shed-removal-cincinnati"
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
                Shed Removal Services in Cincinnati
              </h1>
              <p className="text-xl mb-8 leading-relaxed text-gray-100">
                Professional shed removal in Cincinnati. Complete demolition of storage sheds, garden sheds, and outbuildings with foundation removal and site cleanup.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/booking" className="btn-primary bg-brand-green hover:bg-green-600">
                  Get Shed Removal Quote
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
                  HaulAway Pro provides comprehensive shed removal services throughout Cincinnati, handling the complete demolition and removal of storage sheds, garden sheds, and small outbuildings from residential properties. Our experienced team removes sheds of all materials including wood construction, metal buildings, vinyl structures, and modern composite outbuildings. We carefully assess each shed before beginning demolition to identify any electrical connections, water lines, or structural considerations that require special attention. Our service includes complete contents removal, safe disconnection of utilities, and systematic demolition that protects surrounding landscaping and property features.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Our shed removal process begins with thorough inspection of the structure and surrounding area to identify any utilities, foundation systems, or contents that need special handling. We safely remove all contents from the shed and disconnect any electrical connections before beginning demolition. Our team uses appropriate tools and techniques to dismantle shed structures safely while protecting surrounding landscaping, fencing, and property features. We carefully remove roofing materials, siding, framing, and foundation elements in a controlled manner that minimizes debris scatter and maintains clean work areas throughout the process.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  We prioritize environmental responsibility by sorting all shed demolition materials for recycling opportunities. Usable lumber and wood materials are directed to construction recycling facilities, metal components including roofing and siding are sent to scrap processing centers, and hardware and fasteners are properly sorted for metal recycling. Our commitment to sustainable practices ensures that shed demolition waste is diverted from landfills while supporting circular economy principles in the construction and demolition industry.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Our shed removal service includes complete contents clearing, utility disconnection and safety protocols, systematic demolition and material sorting, foundation and anchor system removal, debris cleanup and disposal, and site restoration preparation. We coordinate with homeowners to ensure shed removal timing aligns with landscaping plans and yard improvement projects. Whether you're removing a damaged shed, clearing space for new construction, or reclaiming yard area for alternative uses, our professional removal service handles every aspect of the process safely and efficiently.
                </p>

                <div className="bg-brand-lightBlue rounded-lg p-6 mb-8">
                  <h2 className="text-2xl font-bold text-brand-darkBlue mb-4">Shed Removal Services</h2>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                      <span>Complete shed contents removal</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                      <span>Utility disconnection and safety</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                      <span>Foundation and anchor removal</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                      <span>Material recycling and disposal</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                      <span>Landscaping protection and cleanup</span>
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
            <h2 className="heading-lg mb-4 text-white">Need Shed Removal?</h2>
            <p className="text-xl mb-8 text-gray-200">
              Professional shed demolition with foundation removal and complete site cleanup in Cincinnati
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/booking" className="btn-primary bg-brand-green hover:bg-green-600">
                Get Shed Removal Quote
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

export default ShedRemovalCincinnati;
