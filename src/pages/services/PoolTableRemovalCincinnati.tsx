
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { CheckCircle, Circle, Phone } from 'lucide-react';
import { useMeta } from '@/hooks/useMeta';

const PoolTableRemovalCincinnati = () => {
  useMeta({
    title: "Pool Table Removal Cincinnati | HaulAway Pro",
    description: "Professional pool table removal services in Cincinnati. We safely remove and disassemble pool tables, air hockey tables, and game room furniture. Specialized equipment and expertise.",
    keywords: "pool table removal Cincinnati, billiard table removal Cincinnati, game table removal Cincinnati, air hockey table removal Cincinnati",
    canonicalUrl: "https://haulawaypro.netlify.app/pool-table-removal-cincinnati"
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
                Pool Table Removal in Cincinnati
              </h1>
              <p className="text-xl mb-8 leading-relaxed text-gray-100">
                Professional pool table removal services throughout Cincinnati. We specialize in the safe disassembly and removal of pool tables, billiard tables, and game room furniture with expert handling of slate and heavy components.
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
                  HaulAway Pro offers specialized pool table removal services throughout Cincinnati, understanding that these substantial game tables require expert knowledge and specialized equipment for safe removal. Our experienced team is trained in proper pool table disassembly techniques, including careful handling of slate surfaces, felt removal, and safe transport of extremely heavy components. We use professional dollies, straps, and protective materials to ensure safe removal from basements, game rooms, and challenging locations without damage to your home.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Our pool table removal service encompasses all types of game tables including regulation pool tables, bar-size billiard tables, snooker tables, air hockey tables, foosball tables, ping pong tables, and complete game room furniture sets. Whether you're renovating your basement, moving to a new home, or replacing your game table, we handle the complex disassembly process that includes removing rails, pockets, felt, and carefully managing multi-piece slate surfaces that can weigh several hundred pounds each.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Environmental stewardship guides our pool table removal process. We work with local Cincinnati recreation centers, youth organizations, and community groups that can benefit from donated game tables. Quality pool tables that can provide entertainment and social benefits in community settings are carefully prepared for donation when possible. For tables that cannot be donated, we ensure responsible disposal where materials like wood, metal hardware, and slate are properly recycled through certified facilities.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Our Cincinnati pool table removal service includes complete game room clearout if needed and post-removal cleanup to prepare your space for new uses. We provide detailed estimates that account for access challenges and disassembly complexity, with no hidden fees. Our fully licensed and insured team prioritizes safety throughout the removal process due to the substantial weight and complexity of these items. Trust HaulAway Pro for professional, safe, and environmentally responsible pool table removal services in Cincinnati.
                </p>

                <div className="bg-brand-lightBlue rounded-lg p-6 mb-8">
                  <h2 className="text-2xl font-bold text-brand-darkBlue mb-4">Why Choose Our Pool Table Removal Service?</h2>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                      <span>Expert slate handling and disassembly techniques</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                      <span>Specialized equipment for heavy components</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                      <span>Donation to Cincinnati recreation programs</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                      <span>Complete game room furniture removal</span>
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
            <h2 className="heading-lg mb-4 text-white">Need Pool Table Removal?</h2>
            <p className="text-xl mb-8 text-gray-200">
              Professional game table removal with specialized equipment in Cincinnati
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

export default PoolTableRemovalCincinnati;
