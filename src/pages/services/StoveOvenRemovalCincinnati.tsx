
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { CheckCircle, Shield, Flame, Phone } from 'lucide-react';
import { useMeta } from '@/hooks/useMeta';

const StoveOvenRemovalCincinnati = () => {
  useMeta({
    title: "Stove & Oven Removal Cincinnati | HaulAway Pro",
    description: "Professional stove and oven removal services in Cincinnati. Safe disconnection of gas and electric ranges with certified disposal and recycling.",
    keywords: "stove removal Cincinnati, oven removal Cincinnati, range removal Cincinnati, gas appliance removal Cincinnati, electric stove disposal Cincinnati",
    canonicalUrl: "https://haulawaypro.netlify.app/stove-oven-removal-cincinnati"
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
                Stove & Oven Removal Services in Cincinnati
              </h1>
              <p className="text-xl mb-8 leading-relaxed text-gray-100">
                Professional stove and oven removal in Cincinnati with certified gas and electric disconnection. Safe disposal of ranges, cooktops, and built-in ovens.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/booking" className="btn-primary bg-brand-green hover:bg-green-600">
                  Schedule Stove & Oven Removal
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
                  HaulAway Pro specializes in safe stove and oven removal throughout Cincinnati, handling both gas and electric cooking appliances with certified disconnection procedures. Our trained technicians understand the safety requirements for gas line disconnection and electrical system management during appliance removal. We safely remove freestanding ranges, slide-in units, built-in cooktops, and wall ovens from all major manufacturers. Our team uses proper safety protocols and specialized tools to ensure no gas leaks or electrical hazards during the removal process, protecting your home and family throughout the service.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Our stove and oven removal process begins with thorough safety assessment and utility disconnection planning. For gas appliances, we safely shut off gas supply lines and verify proper disconnection using leak detection equipment. Electric units are disconnected following electrical safety procedures to prevent damage to your home's electrical system. Our team carefully removes appliances from tight kitchen spaces, protecting surrounding cabinetry, countertops, and flooring during extraction. We handle both standard and oversized cooking appliances, including commercial-grade ranges and specialty cooking equipment.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  We prioritize environmental responsibility by directing cooking appliances to certified recycling facilities that properly process appliance materials. Steel and cast iron components are recycled through metal recovery programs, while electronic controls and insulation materials are handled according to environmental regulations. Gas burner assemblies and electrical components are processed through specialized recycling streams to prevent environmental contamination. We evaluate working appliances for donation opportunities to local Cincinnati organizations, ensuring functional cooking equipment finds new homes with families in need.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Our stove and oven removal service includes comprehensive safety assessment, certified gas and electrical disconnection, careful removal without property damage, transportation in specialized vehicles, and proper disposal or donation coordination. We handle cooking appliances of all types, brands, and sizes, from compact apartment ranges to large commercial-style units. Whether you're upgrading your kitchen, renovating your cooking space, or dealing with appliance failure, our professional removal service ensures safe and responsible disposal. We coordinate timing with kitchen renovations and new appliance installations to provide seamless service.
                </p>

                <div className="bg-brand-lightBlue rounded-lg p-6 mb-8">
                  <h2 className="text-2xl font-bold text-brand-darkBlue mb-4">Cooking Appliances We Remove</h2>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                      <span>Gas and electric ranges (all brands)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                      <span>Built-in cooktops and wall ovens</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                      <span>Slide-in and freestanding units</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                      <span>Commercial-grade cooking equipment</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                      <span>Double ovens and specialty units</span>
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
            <h2 className="heading-lg mb-4 text-white">Need Stove & Oven Removal?</h2>
            <p className="text-xl mb-8 text-gray-200">
              Certified gas and electric disconnection with same-day service in Cincinnati
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

export default StoveOvenRemovalCincinnati;
