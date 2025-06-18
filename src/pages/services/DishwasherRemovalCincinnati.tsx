
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { CheckCircle, Shield, Droplets, Phone } from 'lucide-react';
import { useMeta } from '@/hooks/useMeta';

const DishwasherRemovalCincinnati = () => {
  useMeta({
    title: "Dishwasher Removal Cincinnati | HaulAway Pro",
    description: "Professional dishwasher removal services in Cincinnati. Safe disconnection and disposal of built-in and portable dishwashers with eco-friendly recycling.",
    keywords: "dishwasher removal Cincinnati, dishwasher disposal Cincinnati, appliance removal Cincinnati, dishwasher recycling Cincinnati, kitchen appliance removal",
    canonicalUrl: "https://haulawaypro.netlify.app/dishwasher-removal-cincinnati"
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
                Dishwasher Removal Services in Cincinnati
              </h1>
              <p className="text-xl mb-8 leading-relaxed text-gray-100">
                Professional dishwasher removal in Cincinnati with safe disconnection and eco-friendly disposal. We handle built-in and portable dishwashers of all brands.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/booking" className="btn-primary bg-brand-green hover:bg-green-600">
                  Schedule Dishwasher Removal
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
                  HaulAway Pro provides professional dishwasher removal services throughout Cincinnati, handling safe disconnection and disposal of built-in and portable dishwashers from all major manufacturers. Our experienced technicians understand the complexities of dishwasher removal including electrical disconnection, water line management, and cabinet integration considerations. We safely remove dishwashers from tight kitchen spaces without damaging surrounding cabinetry, countertops, or flooring. Our team uses proper tools and techniques to disconnect electrical and plumbing connections safely, ensuring no water damage or electrical hazards during the removal process.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Our dishwasher removal process begins with thorough assessment of the installation and surrounding kitchen layout to plan the safest extraction method. We carefully disconnect electrical connections and shut off water supply lines before beginning removal. Our team uses protective materials to safeguard kitchen surfaces and carefully maneuvers dishwashers through tight spaces without damage. We handle both standard built-in units and compact portable dishwashers, adapting our techniques based on the specific installation type. Our service includes cleanup after removal, leaving your kitchen ready for new appliance installation or alternative cabinet configurations.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  We prioritize environmental responsibility by directing dishwashers to certified recycling facilities that properly process appliance components. Steel and stainless steel components are recycled through metal recovery programs, while plastic parts are processed through specialized recycling streams. Electronic components including control panels and motors are handled according to e-waste regulations to prevent environmental contamination. We evaluate working dishwashers for donation opportunities to local Cincinnati charities and community organizations, ensuring functional appliances find new homes rather than immediate disposal.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Our dishwasher removal service includes comprehensive assessment and planning, safe electrical and plumbing disconnection, careful removal without property damage, transportation in specialized vehicles, and proper disposal or donation coordination. We handle dishwashers of all brands, sizes, and installation types, from standard built-in units to compact countertop models. Whether you're upgrading to a new dishwasher, renovating your kitchen, or dealing with appliance failure, our professional removal service ensures safe and responsible disposal. We coordinate timing with kitchen renovations and new appliance installations to provide seamless service.
                </p>

                <div className="bg-brand-lightBlue rounded-lg p-6 mb-8">
                  <h2 className="text-2xl font-bold text-brand-darkBlue mb-4">Dishwasher Types We Remove</h2>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                      <span>Built-in dishwashers (all brands)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                      <span>Portable and countertop units</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                      <span>Compact and apartment-size models</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                      <span>Commercial dishwashers</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                      <span>Drawer-style dishwashers</span>
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
            <h2 className="heading-lg mb-4 text-white">Need Dishwasher Removal?</h2>
            <p className="text-xl mb-8 text-gray-200">
              Safe disconnection and eco-friendly disposal with same-day service in Cincinnati
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

export default DishwasherRemovalCincinnati;
