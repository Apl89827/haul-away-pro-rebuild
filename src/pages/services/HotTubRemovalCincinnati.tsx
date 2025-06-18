
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { CheckCircle, Waves, Phone } from 'lucide-react';
import { useMeta } from '@/hooks/useMeta';

const HotTubRemovalCincinnati = () => {
  useMeta({
    title: "Hot Tub Removal Cincinnati | HaulAway Pro",
    description: "Professional hot tub and spa removal services in Cincinnati. We safely disconnect and remove hot tubs, spas, and jacuzzis with specialized equipment. Same-day service available.",
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
                Professional hot tub and spa removal services throughout Cincinnati. We safely disconnect, drain, and remove hot tubs, spas, and jacuzzis with specialized equipment and expert techniques.
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
                  HaulAway Pro provides professional hot tub removal services throughout Cincinnati, specializing in the safe disconnection, draining, and removal of hot tubs, spas, and jacuzzis from residential properties. Our experienced team understands the complexities involved in hot tub removal, including proper electrical disconnection, water drainage, and the substantial weight and size challenges these units present. We coordinate with licensed electricians when necessary to ensure safe disconnection of electrical systems and follow all local codes and safety requirements.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Our hot tub removal service covers all types of spa systems including portable hot tubs, in-ground spas, above-ground hot tubs, swim spas, and custom-built spa installations. Whether your hot tub is located on a deck, patio, in a backyard, or integrated into a pool area, we have the equipment and expertise to safely remove it. Our team uses specialized lifting equipment, cranes when necessary, and protective materials to prevent damage to your property during the removal process. We can navigate challenging access situations including tight gates, stairs, and landscaped areas.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Environmental stewardship guides our hot tub disposal process. We carefully evaluate each unit for potential donation or resale opportunities, particularly for newer hot tubs in good working condition. Quality units can provide years of enjoyment for new owners while keeping them out of landfills. For hot tubs that cannot be donated, we ensure responsible disposal through certified facilities where materials like acrylic shells, insulation, pumps, and metal components are properly separated and recycled. This approach minimizes environmental impact while recovering valuable materials.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Our Cincinnati hot tub removal service includes complete project coordination, safe electrical disconnection, water drainage, careful removal, and thorough cleanup of the installation area. We provide detailed estimates that account for access challenges and removal complexity, with no hidden fees. Our fully licensed and insured team prioritizes safety throughout the process due to the electrical, plumbing, and weight considerations involved in hot tub removal. Trust HaulAway Pro for professional, safe, and environmentally responsible hot tub removal services in Cincinnati.
                </p>

                <div className="bg-brand-lightBlue rounded-lg p-6 mb-8">
                  <h2 className="text-2xl font-bold text-brand-darkBlue mb-4">Our Hot Tub Removal Process</h2>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                      <span>Safe electrical disconnection by certified technicians</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                      <span>Complete water drainage and preparation</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                      <span>Specialized lifting equipment for safe removal</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                      <span>Eco-friendly disposal and recycling</span>
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
              Professional hot tub removal with safe disconnection and specialized equipment
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
