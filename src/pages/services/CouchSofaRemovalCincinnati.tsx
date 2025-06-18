
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { CheckCircle, Sofa, Phone } from 'lucide-react';
import { useMeta } from '@/hooks/useMeta';

const CouchSofaRemovalCincinnati = () => {
  useMeta({
    title: "Couch & Sofa Removal Cincinnati | HaulAway Pro",
    description: "Professional couch and sofa removal services in Cincinnati. We remove sectionals, loveseats, recliners, and all living room furniture. Same-day service available.",
    keywords: "couch removal Cincinnati, sofa removal Cincinnati, sectional removal Cincinnati, living room furniture removal Cincinnati",
    canonicalUrl: "https://haulawaypro.netlify.app/couch-sofa-removal-cincinnati"
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
                Couch & Sofa Removal in Cincinnati
              </h1>
              <p className="text-xl mb-8 leading-relaxed text-gray-100">
                Professional couch and sofa removal services throughout Cincinnati. We safely remove sectionals, loveseats, recliners, and all living room furniture with careful handling and eco-friendly disposal.
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
                  HaulAway Pro provides professional couch and sofa removal services throughout Cincinnati, handling all types of living room furniture with the care and expertise these valuable pieces deserve. Our experienced team understands that couches and sofas can be challenging to remove due to their size, weight, and the narrow doorways and stairs commonly found in Cincinnati homes. We use proper lifting techniques, protective materials, and specialized equipment to ensure safe removal without damage to your furniture, walls, floors, or doorframes.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Our couch and sofa removal service covers all types of living room seating including sectional sofas, traditional three-seat sofas, loveseats, recliners, sleeper sofas, modular seating systems, leather furniture, and antique pieces. Whether you're upgrading your living room, moving to a new home, or dealing with damaged furniture, we handle each piece with appropriate care. Our team can navigate challenging removal situations including basement family rooms, upstairs living areas, and tight spaces that make furniture removal particularly difficult.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Given the substantial value and potential longevity of quality furniture, we prioritize donation opportunities to local Cincinnati families and charitable organizations. Couches and sofas in good condition can provide comfort and functionality for families establishing new homes or transitioning to stable housing. We work with local charities, furniture banks, and assistance programs to identify recipients who can benefit from donated living room furniture. For furniture that cannot be donated due to condition, we ensure responsible disposal through certified facilities where materials are properly processed.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Our Cincinnati couch and sofa removal service includes careful assessment of removal challenges, protective preparation, expert handling during removal, and complete cleanup after pickup. We provide transparent pricing with detailed estimates and can often accommodate same-day service for urgent removals. Our fully licensed and insured team maintains the highest standards of care and respects your home throughout the entire process. Trust HaulAway Pro for reliable, careful, and environmentally responsible couch and sofa removal services in Cincinnati.
                </p>

                <div className="bg-brand-lightBlue rounded-lg p-6 mb-8">
                  <h2 className="text-2xl font-bold text-brand-darkBlue mb-4">Living Room Furniture We Remove</h2>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                      <span>Sectional sofas and modular seating</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                      <span>Traditional sofas and loveseats</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                      <span>Recliners and sleeper sofas</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                      <span>Leather furniture and antique pieces</span>
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
            <h2 className="heading-lg mb-4 text-white">Ready to Remove Your Couch or Sofa?</h2>
            <p className="text-xl mb-8 text-gray-200">
              Professional living room furniture removal with careful handling in Cincinnati
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

export default CouchSofaRemovalCincinnati;
