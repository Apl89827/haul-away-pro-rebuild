
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { CheckCircle, Shield, Hammer, Phone } from 'lucide-react';
import { useMeta } from '@/hooks/useMeta';

const InteriorWallRemovalCincinnati = () => {
  useMeta({
    title: "Interior Wall Removal Cincinnati | HaulAway Pro",
    description: "Professional interior wall removal services in Cincinnati. Non-load-bearing wall demolition with structural assessment, utility coordination, and complete debris removal.",
    keywords: "interior wall removal Cincinnati, wall demolition Cincinnati, non-load-bearing wall removal Cincinnati, interior demolition Cincinnati, wall teardown Cincinnati",
    canonicalUrl: "https://haulawaypro.netlify.app/interior-wall-removal-cincinnati"
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
                Interior Wall Removal Services in Cincinnati
              </h1>
              <p className="text-xl mb-8 leading-relaxed text-gray-100">
                Professional interior wall removal in Cincinnati. Safe demolition of non-load-bearing walls with structural assessment, utility coordination, and complete debris removal.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/booking" className="btn-primary bg-brand-green hover:bg-green-600">
                  Get Wall Removal Quote
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
                  HaulAway Pro provides professional interior wall removal services throughout Cincinnati, specializing in the safe demolition of non-load-bearing walls for residential and commercial properties. Our experienced team conducts thorough structural assessments before beginning any wall removal project to ensure safety and prevent damage to your property's structural integrity. We coordinate carefully with contractors, homeowners, and architects to ensure wall removal aligns with renovation timelines and building permits. Our service includes proper identification of electrical, plumbing, and HVAC systems within walls, with professional coordination to safely relocate or protect these utilities during demolition.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Our interior wall removal process begins with comprehensive assessment of wall structure, utility locations, and surrounding areas that need protection. We use professional-grade demolition tools and techniques to minimize dust and debris while maintaining clean work areas. Our team installs protective barriers and plastic sheeting to contain dust and protect furniture, flooring, and adjacent rooms during the demolition process. We carefully remove drywall, insulation, and framing materials in sections to maintain control over the debris and ensure efficient cleanup. All demolished materials are sorted for recycling opportunities, with drywall, metal framing, and wood components directed to appropriate processing facilities in the Cincinnati area.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  We prioritize safety throughout every interior wall removal project, using proper personal protective equipment and following established demolition protocols. Our team coordinates with electrical and plumbing professionals when utility relocation is required, ensuring all work meets Cincinnati building codes and safety standards. We provide detailed project timelines and work efficiently to minimize disruption to your daily routine or business operations. Our service includes complete site cleanup, debris removal, and preparation of the space for the next phase of your renovation project.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Our interior wall removal service includes structural assessment and planning, utility identification and coordination, professional demolition with dust control, debris sorting and recycling, complete site cleanup, and preparation for renovation continuation. We work closely with general contractors, architects, and homeowners to ensure wall removal supports your overall renovation goals while maintaining safety and efficiency throughout the process. Whether you're creating open floor plans, modernizing office spaces, or expanding room layouts, our professional wall removal service helps transform your space safely and effectively.
                </p>

                <div className="bg-brand-lightBlue rounded-lg p-6 mb-8">
                  <h2 className="text-2xl font-bold text-brand-darkBlue mb-4">Interior Wall Removal Services</h2>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                      <span>Structural assessment and safety evaluation</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                      <span>Utility identification and coordination</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                      <span>Dust containment and area protection</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                      <span>Professional demolition and debris removal</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                      <span>Material recycling and disposal</span>
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
            <h2 className="heading-lg mb-4 text-white">Need Interior Wall Removal?</h2>
            <p className="text-xl mb-8 text-gray-200">
              Professional wall demolition with structural assessment and complete cleanup in Cincinnati
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/booking" className="btn-primary bg-brand-green hover:bg-green-600">
                Get Wall Removal Quote
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

export default InteriorWallRemovalCincinnati;
