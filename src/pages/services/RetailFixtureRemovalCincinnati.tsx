
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { CheckCircle, Store, Phone } from 'lucide-react';
import { useMeta } from '@/hooks/useMeta';

const RetailFixtureRemovalCincinnati = () => {
  useMeta({
    title: "Retail Fixture Removal Cincinnati | HaulAway Pro",
    description: "Professional retail fixture removal services in Cincinnati. We remove shelving, display cases, checkout counters, and retail equipment for store closures and renovations. Fast commercial service.",
    keywords: "retail fixture removal Cincinnati, store closure Cincinnati, display case removal Cincinnati, retail shelving removal Cincinnati, commercial fixture disposal Cincinnati",
    canonicalUrl: "https://haulawaypro.netlify.app/retail-fixture-removal-cincinnati"
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
                Retail Fixture Removal in Cincinnati
              </h1>
              <p className="text-xl mb-8 leading-relaxed text-gray-100">
                Professional retail fixture removal services throughout Cincinnati. We handle store closures, renovations, and rebranding projects with efficient fixture removal and disposal services.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/booking" className="btn-primary bg-brand-green hover:bg-green-600">
                  Schedule Store Cleanout
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
                  HaulAway Pro specializes in retail fixture removal services throughout Cincinnati, providing comprehensive solutions for store closures, renovations, and rebranding projects. Our experienced team understands the urgency often associated with retail transitions and works efficiently to meet tight deadlines while maintaining professional standards. We handle the complete removal of retail fixtures, displays, and equipment while protecting store surfaces and ensuring your space is ready for the next phase of your business transition or renovation project.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Our retail fixture removal service covers all types of commercial retail equipment including gondola shelving systems, slatwall displays, checkout counters, cash wrap stations, fitting rooms, mannequins, clothing racks, jewelry display cases, refrigerated display units, and specialized retail lighting systems. Whether you're closing a Cincinnati retail location, renovating your store layout, or transitioning to a new retail concept, we handle projects ranging from small boutiques to large retail chains. Our team carefully disassembles and removes fixtures while minimizing disruption to neighboring businesses and maintaining a professional appearance throughout the process.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Environmental responsibility drives our retail fixture disposal approach. We evaluate all removed fixtures for resale opportunities through liquidation companies, donation to nonprofit organizations, or transfer to startup businesses in the Cincinnati area. Many retail fixtures retain significant value and can provide cost-effective solutions for new businesses establishing their operations. For electronic components like POS systems, security equipment, and LED lighting, we ensure proper recycling through certified e-waste facilities that handle electronic components according to environmental regulations.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Our Cincinnati retail fixture removal service includes comprehensive project planning, rapid response scheduling, careful fixture disassembly, professional removal and loading, and thorough site cleanup. We provide detailed documentation for asset tracking and can coordinate with liquidation companies when fixtures have resale value. Our fully licensed and insured team works discreetly to maintain your business image during transition periods and can accommodate after-hours service to minimize customer disruption. Trust HaulAway Pro for efficient, professional, and environmentally responsible retail fixture removal services in Cincinnati.
                </p>

                <div className="bg-brand-lightBlue rounded-lg p-6 mb-8">
                  <h2 className="text-2xl font-bold text-brand-darkBlue mb-4">Retail Fixtures We Remove</h2>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                      <span>Shelving and display systems</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                      <span>Checkout counters and cash wraps</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                      <span>Fitting rooms and dressing areas</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                      <span>Clothing racks and mannequins</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                      <span>POS systems and security equipment</span>
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
            <h2 className="heading-lg mb-4 text-white">Need Retail Fixture Removal?</h2>
            <p className="text-xl mb-8 text-gray-200">
              Fast and professional retail fixture removal for store transitions in Cincinnati
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/booking" className="btn-primary bg-brand-green hover:bg-green-600">
                Get Store Cleanout Quote
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

export default RetailFixtureRemovalCincinnati;
