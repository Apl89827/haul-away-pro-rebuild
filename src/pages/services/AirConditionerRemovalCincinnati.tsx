
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { CheckCircle, Shield, Wind, Phone } from 'lucide-react';
import { useMeta } from '@/hooks/useMeta';

const AirConditionerRemovalCincinnati = () => {
  useMeta({
    title: "Air Conditioner Removal Cincinnati | HaulAway Pro",
    description: "Professional air conditioner removal services in Cincinnati. EPA-compliant refrigerant recovery and safe disposal of window, central, and portable AC units.",
    keywords: "air conditioner removal Cincinnati, AC disposal Cincinnati, HVAC removal Cincinnati, refrigerant recovery Cincinnati, air conditioning recycling Cincinnati",
    canonicalUrl: "https://haulawaypro.netlify.app/air-conditioner-removal-cincinnati"
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
                Air Conditioner Removal Services in Cincinnati
              </h1>
              <p className="text-xl mb-8 leading-relaxed text-gray-100">
                Professional air conditioner removal in Cincinnati with EPA-compliant refrigerant recovery. Safe disposal of window, central, and portable AC units.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/booking" className="btn-primary bg-brand-green hover:bg-green-600">
                  Schedule AC Removal
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
                  HaulAway Pro specializes in professional air conditioner removal throughout Cincinnati, handling EPA-compliant refrigerant recovery and safe disposal of all types of cooling systems. Our certified technicians follow strict environmental regulations for proper refrigerant handling, ensuring safe removal of window units, central air systems, portable air conditioners, and commercial HVAC equipment. We use specialized equipment to safely recover refrigerant gases before removal, preventing environmental damage and ensuring compliance with federal regulations. Our team understands the complexities of AC removal including electrical disconnection, mounting system management, and safe handling of heavy units.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Our air conditioner removal process begins with thorough assessment of the cooling system and proper refrigerant recovery procedures. We safely disconnect electrical connections and properly seal refrigerant lines before beginning removal. Our team uses specialized equipment including refrigerant recovery units, electrical testing equipment, and heavy-duty moving tools to ensure safe extraction. We carefully remove window units without damaging window frames or surrounding structures, and handle central air components including outdoor condensers and indoor air handlers. Our service includes safe navigation of rooftops, basements, and tight spaces where AC equipment is commonly installed.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  We prioritize environmental responsibility by partnering with certified refrigerant recovery facilities that properly process cooling system components according to EPA regulations. Refrigerant gases are safely recovered and recycled, while valuable metals including copper coils, aluminum fins, and steel components are directed to recycling facilities. We evaluate newer or functioning air conditioners for donation opportunities to local Cincinnati organizations and community programs that can refurbish them for families in need. Our commitment to sustainable practices helps prevent harmful refrigerants from entering the atmosphere while supporting circular economy principles.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Our air conditioner removal service includes comprehensive system assessment, EPA-compliant refrigerant recovery, safe electrical disconnection, careful removal from any location, transportation in specialized vehicles, and proper disposal or donation coordination. We handle cooling systems of all types, brands, and sizes, from small window units to large commercial HVAC systems. Whether you're upgrading to a more efficient system, dealing with equipment failure, or renovating your property, our professional removal service ensures safe and environmentally responsible disposal. We coordinate timing with new installations and seasonal service needs.
                </p>

                <div className="bg-brand-lightBlue rounded-lg p-6 mb-8">
                  <h2 className="text-2xl font-bold text-brand-darkBlue mb-4">Air Conditioning Systems We Remove</h2>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                      <span>Window and wall-mounted units</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                      <span>Central air conditioning systems</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                      <span>Portable air conditioners</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                      <span>Ductless mini-split systems</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                      <span>Commercial HVAC equipment</span>
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
            <h2 className="heading-lg mb-4 text-white">Need Air Conditioner Removal?</h2>
            <p className="text-xl mb-8 text-gray-200">
              EPA-compliant refrigerant recovery with same-day service in Cincinnati
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/booking" className="btn-primary bg-brand-green hover:bg-green-600">
                Schedule Pickup Today
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

export default AirConditionerRemovalCincinnati;
