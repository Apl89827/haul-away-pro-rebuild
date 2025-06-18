
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { CheckCircle, Shield, Hammer, Phone } from 'lucide-react';
import { useMeta } from '@/hooks/useMeta';

const FenceRemovalCincinnati = () => {
  useMeta({
    title: "Fence Removal Cincinnati | HaulAway Pro",
    description: "Professional fence removal services in Cincinnati. Complete removal of wood, chain link, vinyl, aluminum, and wrought iron fencing with post extraction and cleanup.",
    keywords: "fence removal Cincinnati, fence demolition Cincinnati, chain link fence removal Cincinnati, wood fence removal Cincinnati, vinyl fence removal Cincinnati",
    canonicalUrl: "https://haulawaypro.netlify.app/fence-removal-cincinnati"
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
                Fence Removal Services in Cincinnati
              </h1>
              <p className="text-xl mb-8 leading-relaxed text-gray-100">
                Professional fence removal in Cincinnati. Complete removal of all fence types including wood, chain link, vinyl, aluminum, and wrought iron with post extraction.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/booking" className="btn-primary bg-brand-green hover:bg-green-600">
                  Get Fence Removal Quote
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
                  HaulAway Pro provides comprehensive fence removal services throughout Cincinnati for residential and commercial properties. Our experienced team removes all types of fencing including traditional wood fencing, chain link security fencing, modern vinyl systems, aluminum and wrought iron decorative fencing, and specialty fencing materials. We use proper tools and proven techniques to remove fence panels, posts, and gate systems while protecting surrounding landscaping and property features. Our service includes careful assessment of fence construction, identification of underground utilities, and coordination with property owners to ensure fence removal aligns with landscaping plans and property improvements.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Our fence removal process begins with comprehensive inspection of the fencing system including post placement, gate locations, and any attached structures or utilities. We systematically remove fence panels and sections while protecting surrounding landscaping, sprinkler systems, and underground utilities. Our team uses appropriate extraction tools and techniques to remove fence posts and concrete footings without damaging adjacent property features. We coordinate with utility locating services when necessary to ensure safe removal of posts near underground lines. All removal work is performed with attention to safety and efficiency while minimizing disruption to your property.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  We maximize recycling opportunities for all fence removal materials, sorting components by material type for appropriate processing facilities in the Cincinnati area. Metal fencing including chain link, aluminum, and wrought iron components are directed to scrap metal processing centers. Wood fencing materials are sent to construction recycling facilities when suitable for reuse. Vinyl and composite fencing materials are handled according to manufacturer recycling programs when available. Our environmental commitment ensures that fence removal waste is diverted from landfills while supporting sustainable practices in the construction industry.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Our fence removal service includes complete fence system assessment, panel and gate removal, post extraction and concrete footing removal, material sorting for recycling and disposal, landscaping protection throughout the process, and complete site cleanup and restoration. We coordinate with property owners to ensure fence removal timing aligns with new fencing installation or alternative landscaping plans. Whether you're replacing old fencing with new materials, opening up your property boundaries, or reconfiguring your outdoor space, our professional removal service handles every aspect of the process safely and efficiently.
                </p>

                <div className="bg-brand-lightBlue rounded-lg p-6 mb-8">
                  <h2 className="text-2xl font-bold text-brand-darkBlue mb-4">Fence Removal Services</h2>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                      <span>All fence types and materials</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                      <span>Post extraction and footing removal</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                      <span>Underground utility coordination</span>
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
            <h2 className="heading-lg mb-4 text-white">Need Fence Removal?</h2>
            <p className="text-xl mb-8 text-gray-200">
              Professional fence removal with post extraction and complete site cleanup in Cincinnati
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/booking" className="btn-primary bg-brand-green hover:bg-green-600">
                Get Fence Removal Quote
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

export default FenceRemovalCincinnati;
