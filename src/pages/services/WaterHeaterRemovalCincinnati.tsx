
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { CheckCircle, Shield, Droplets, Phone } from 'lucide-react';
import { useMeta } from '@/hooks/useMeta';

const WaterHeaterRemovalCincinnati = () => {
  useMeta({
    title: "Water Heater Removal Cincinnati | HaulAway Pro",
    description: "Professional water heater removal services in Cincinnati. Safe disconnection and disposal of gas, electric, and tankless water heaters with certified technicians.",
    keywords: "water heater removal Cincinnati, water heater disposal Cincinnati, gas water heater removal Cincinnati, electric water heater removal Cincinnati, tankless water heater disposal",
    canonicalUrl: "https://haulawaypro.netlify.app/water-heater-removal-cincinnati"
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
                Water Heater Removal Services in Cincinnati
              </h1>
              <p className="text-xl mb-8 leading-relaxed text-gray-100">
                Professional water heater removal in Cincinnati with certified disconnection. Safe disposal of gas, electric, and tankless water heaters by licensed technicians.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/booking" className="btn-primary bg-brand-green hover:bg-green-600">
                  Schedule Water Heater Removal
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
                  HaulAway Pro provides professional water heater removal services throughout Cincinnati, handling safe disconnection and disposal of gas, electric, and tankless water heating systems. Our certified technicians understand the complex safety requirements for water heater removal including gas line management, electrical disconnection, and water line isolation. We safely remove water heaters from basements, utility rooms, garages, and closets without damaging surrounding areas or utility systems. Our team uses proper safety protocols and specialized equipment to ensure no gas leaks, electrical hazards, or water damage during the removal process.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Our water heater removal process begins with comprehensive assessment of the installation and utility connections to plan the safest disconnection procedure. We properly shut off gas supply lines, electrical connections, and water lines before beginning removal. Our team carefully drains remaining water from tank units and safely disconnects all utility connections using appropriate tools and techniques. We handle both standard tank water heaters and modern tankless systems, adapting our removal methods based on the specific installation type and location. Our service includes safe navigation of tight spaces and stairs when removing units from basement installations.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  We prioritize environmental responsibility by directing water heaters to certified recycling facilities that properly process heating equipment components. Steel tanks are recycled through metal recovery programs, while gas burner assemblies and electronic controls are handled according to environmental regulations. Insulation materials and other components are processed through specialized recycling streams to prevent landfill accumulation. We evaluate newer or functioning water heaters for donation opportunities to local Cincinnati organizations and community programs that can give them new life with families in need.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Our water heater removal service includes comprehensive safety assessment, certified utility disconnection, careful removal from any location, proper draining and preparation, transportation in specialized vehicles, and environmentally responsible disposal or donation coordination. We handle water heaters of all types, brands, and sizes, from compact apartment units to large commercial systems. Whether you're upgrading to a more efficient system, dealing with equipment failure, or renovating your utility space, our professional removal service ensures safe and responsible disposal. We coordinate timing with new installations and home improvement projects.
                </p>

                <div className="bg-brand-lightBlue rounded-lg p-6 mb-8">
                  <h2 className="text-2xl font-bold text-brand-darkBlue mb-4">Water Heater Types We Remove</h2>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                      <span>Gas tank water heaters (all sizes)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                      <span>Electric tank water heaters</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                      <span>Tankless water heaters</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                      <span>Hybrid and heat pump units</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                      <span>Commercial water heating systems</span>
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
            <h2 className="heading-lg mb-4 text-white">Need Water Heater Removal?</h2>
            <p className="text-xl mb-8 text-gray-200">
              Certified disconnection and safe disposal with same-day service in Cincinnati
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

export default WaterHeaterRemovalCincinnati;
