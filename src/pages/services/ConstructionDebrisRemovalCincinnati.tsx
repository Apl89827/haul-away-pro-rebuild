
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { CheckCircle, HardHat, Phone } from 'lucide-react';
import { useMeta } from '@/hooks/useMeta';

const ConstructionDebrisRemovalCincinnati = () => {
  useMeta({
    title: "Construction Debris Removal Cincinnati | HaulAway Pro",
    description: "Professional construction debris removal services in Cincinnati. We remove drywall, lumber, concrete, roofing materials, and renovation waste. Roll-off containers and scheduled pickup available.",
    keywords: "construction debris removal Cincinnati, renovation waste Cincinnati, drywall removal Cincinnati, concrete disposal Cincinnati, construction cleanup Cincinnati",
    canonicalUrl: "https://haulawaypro.netlify.app/construction-debris-removal-cincinnati"
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
                Construction Debris Removal in Cincinnati
              </h1>
              <p className="text-xl mb-8 leading-relaxed text-gray-100">
                Professional construction debris removal services throughout Cincinnati. We handle renovation waste, demolition debris, and construction materials with contractor coordination and environmental compliance.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/booking" className="btn-primary bg-brand-green hover:bg-green-600">
                  Schedule Construction Cleanup
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
                  HaulAway Pro provides comprehensive construction debris removal services throughout Cincinnati, specializing in commercial renovation projects, new construction sites, and demolition cleanups. Our experienced team works closely with contractors, project managers, and construction crews to ensure debris removal doesn't interfere with project timelines while maintaining safe and clean work environments. We understand construction site safety requirements and ensure our team follows all necessary protocols while providing efficient debris removal services that keep your project on schedule.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Our construction debris removal service handles all types of building materials including drywall and sheetrock, lumber and wooden framing materials, concrete and masonry debris, roofing materials and shingles, flooring remnants, metal components and hardware, insulation materials, and general construction waste. Whether you're managing a small renovation project or a large commercial construction site in Cincinnati, we provide flexible service options including roll-off container rentals for ongoing projects and scheduled pickup services for completed construction phases. Our team sorts materials for maximum recycling opportunities while ensuring efficient site cleanup.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Environmental responsibility drives our construction debris disposal process. We partner with certified recycling facilities in the Cincinnati area that specialize in construction material processing, ensuring that wood, metal, concrete, and other reusable materials are properly recycled rather than sent to landfills. Our sorting process maximizes material recovery while reducing environmental impact and often provides cost savings for construction projects. We maintain detailed documentation of material disposal for environmental compliance and LEED certification requirements when applicable.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Our Cincinnati construction debris removal service includes project coordination with construction teams, flexible scheduling around construction phases, efficient debris loading and removal, and complete site cleanup services. We provide roll-off containers for ongoing projects or can schedule regular pickup services based on project needs. Our fully licensed and insured team maintains construction site safety standards and can accommodate tight project deadlines. Trust HaulAway Pro for reliable, efficient, and environmentally responsible construction debris removal services in Cincinnati.
                </p>

                <div className="bg-brand-lightBlue rounded-lg p-6 mb-8">
                  <h2 className="text-2xl font-bold text-brand-darkBlue mb-4">Construction Materials We Remove</h2>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                      <span>Drywall and sheetrock debris</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                      <span>Lumber and wooden materials</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                      <span>Concrete and masonry debris</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                      <span>Roofing materials and shingles</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                      <span>Flooring and tile remnants</span>
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
            <h2 className="heading-lg mb-4 text-white">Need Construction Debris Removal?</h2>
            <p className="text-xl mb-8 text-gray-200">
              Professional construction cleanup with contractor coordination in Cincinnati
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/booking" className="btn-primary bg-brand-green hover:bg-green-600">
                Get Construction Quote
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

export default ConstructionDebrisRemovalCincinnati;
