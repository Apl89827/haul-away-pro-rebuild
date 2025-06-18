
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { CheckCircle, Shield, Home, Phone } from 'lucide-react';
import { useMeta } from '@/hooks/useMeta';

const LargeFurnitureRemovalCincinnati = () => {
  useMeta({
    title: "Large Furniture Removal Cincinnati | HaulAway Pro",
    description: "Professional large furniture removal in Cincinnati. Safe removal of oversized furniture including entertainment centers, armoires, china cabinets, and heavy pieces.",
    keywords: "large furniture removal Cincinnati, oversized furniture disposal Cincinnati, heavy furniture removal Cincinnati, furniture moving Cincinnati, bulky item pickup",
    canonicalUrl: "https://haulawaypro.netlify.app/large-furniture-removal-cincinnati"
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
                Large Furniture Removal in Cincinnati
              </h1>
              <p className="text-xl mb-8 leading-relaxed text-gray-100">
                Professional large furniture removal in Cincinnati. We safely remove oversized and heavy furniture pieces that require special handling and equipment.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/booking" className="btn-primary bg-brand-green hover:bg-green-600">
                  Schedule Large Furniture Removal
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
                  HaulAway Pro specializes in large furniture removal throughout Cincinnati, handling oversized and heavy furniture pieces that require special handling due to size, weight, or construction complexity. Our experienced team removes entertainment centers, armoires, china cabinets, large bedroom sets, sectional furniture, and other bulky items that challenge standard removal methods. We use professional-grade moving equipment including furniture dollies, lifting straps, and protective materials to ensure safe removal without injury or property damage. Our team carefully assesses each piece and removal pathway to develop the most efficient and safe extraction strategy for your specific situation.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Our large furniture removal process begins with thorough assessment of the furniture piece, removal pathway, and any disassembly requirements. We carefully plan removal routes and may disassemble large furniture when necessary to navigate stairs, doorways, and tight spaces safely. Our team uses furniture pads, corner guards, and protective coverings to prevent damage to walls, floors, and other furniture during removal. We coordinate logistics for multi-piece furniture sets and can handle removal from any floor including basements, upper levels, and challenging access areas. Our service includes careful handling of antique and valuable furniture pieces that require extra attention and specialized techniques.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  We prioritize sustainable disposal by evaluating large furniture pieces for donation opportunities to local Cincinnati charities, furniture banks, and community organizations. Quality hardwood furniture, antique pieces, and functional large items are directed to organizations that can give them new life with families in need. When donation isn't possible, we coordinate with furniture recycling facilities that can process wood, metal, and upholstery components separately. Our environmental commitment ensures that large furniture pieces are diverted from landfills whenever possible while supporting community organizations and sustainable waste management practices.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Our large furniture removal service includes comprehensive assessment and planning, professional disassembly when needed, careful removal using specialized equipment, protective transport procedures, donation coordination for quality pieces, and complete cleanup after removal. We handle single large pieces, complete room sets, and estate furniture clearances with equal attention to safety and property protection. Whether you're downsizing, redecorating, or dealing with inherited furniture, our professional removal service provides safe and efficient handling of your largest furniture pieces. We coordinate timing with home renovations and new furniture deliveries to ensure seamless transitions.
                </p>

                <div className="bg-brand-lightBlue rounded-lg p-6 mb-8">
                  <h2 className="text-2xl font-bold text-brand-darkBlue mb-4">Large Furniture We Remove</h2>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                      <span>Entertainment centers and media cabinets</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                      <span>Armoires and large wardrobes</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                      <span>China cabinets and hutches</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                      <span>Large sectional sofas</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                      <span>Bedroom sets and large dressers</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                      <span>Antique and valuable furniture pieces</span>
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
            <h2 className="heading-lg mb-4 text-white">Need Large Furniture Removal?</h2>
            <p className="text-xl mb-8 text-gray-200">
              Professional removal of oversized furniture with donation coordination in Cincinnati
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

export default LargeFurnitureRemovalCincinnati;
