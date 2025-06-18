
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { CheckCircle, Shield, Hammer, Phone } from 'lucide-react';
import { useMeta } from '@/hooks/useMeta';

const SmallStructureDemolitionCincinnati = () => {
  useMeta({
    title: "Small Structure Demolition Cincinnati | HaulAway Pro",
    description: "Professional small structure demolition in Cincinnati. Gazebos, pergolas, small garages, and accessory buildings demolished safely with complete debris removal.",
    keywords: "small structure demolition Cincinnati, gazebo removal Cincinnati, pergola demolition Cincinnati, small garage demolition Cincinnati, accessory building removal Cincinnati",
    canonicalUrl: "https://haulawaypro.netlify.app/small-structure-demolition-cincinnati"
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
                Small Structure Demolition in Cincinnati
              </h1>
              <p className="text-xl mb-8 leading-relaxed text-gray-100">
                Professional small structure demolition in Cincinnati. Safe removal of gazebos, pergolas, small garages, and accessory buildings with complete debris removal.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/booking" className="btn-primary bg-brand-green hover:bg-green-600">
                  Get Demolition Quote
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
                  HaulAway Pro specializes in small structure demolition throughout Cincinnati, handling various small buildings and accessory structures including gazebos, pergolas, small garages, pool houses, and other outbuildings. Our service focuses on structures that don't require heavy equipment or extensive permitting but still need professional demolition expertise to ensure safety and efficiency. We carefully assess each structure for utilities, structural considerations, and safety requirements before beginning demolition. Our experienced team uses appropriate tools and techniques to safely dismantle structures while minimizing impact on surrounding property and landscaping.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Our small structure demolition process begins with comprehensive assessment of the building including foundation systems, utility connections, and structural components that require special handling. We safely disconnect any electrical connections, water lines, or gas services before beginning demolition work. Our team systematically dismantles structures from top to bottom, carefully removing roofing materials, siding, framing, and foundation elements in a controlled manner. We use proper safety equipment and follow established demolition protocols to protect workers and surrounding property throughout the process.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  We prioritize environmental responsibility by maximizing recycling opportunities for all demolition materials. Usable lumber and wood components are directed to construction recycling facilities, metal materials including roofing and hardware are sent to scrap processing centers, and concrete and masonry materials are handled according to local recycling programs. Our commitment to sustainable practices ensures that small structure demolition waste is diverted from landfills while supporting circular economy principles in the construction industry.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Our small structure demolition service includes complete structure assessment and planning, utility disconnection and safety protocols, systematic demolition and material handling, foundation and footing removal when required, material sorting for recycling and disposal, and complete site preparation and cleanup. We coordinate with property owners and contractors to ensure demolition timing aligns with construction schedules and permit requirements. Whether you're clearing space for new construction, removing damaged structures, or reconfiguring your outdoor space, our professional demolition service provides safe and efficient removal while preparing your property for its next use.
                </p>

                <div className="bg-brand-lightBlue rounded-lg p-6 mb-8">
                  <h2 className="text-2xl font-bold text-brand-darkBlue mb-4">Small Structure Demolition Services</h2>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                      <span>Gazebos and pergola removal</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                      <span>Small garage and carport demolition</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                      <span>Pool house and accessory building removal</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                      <span>Utility disconnection and safety</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                      <span>Material recycling and site cleanup</span>
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
            <h2 className="heading-lg mb-4 text-white">Need Small Structure Demolition?</h2>
            <p className="text-xl mb-8 text-gray-200">
              Professional demolition of gazebos, pergolas, and small buildings with complete cleanup in Cincinnati
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/booking" className="btn-primary bg-brand-green hover:bg-green-600">
                Get Demolition Quote
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

export default SmallStructureDemolitionCincinnati;
