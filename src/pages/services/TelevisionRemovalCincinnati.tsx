
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { CheckCircle, Monitor, Phone } from 'lucide-react';
import { useMeta } from '@/hooks/useMeta';

const TelevisionRemovalCincinnati = () => {
  useMeta({
    title: "Television Removal Cincinnati | HaulAway Pro",
    description: "Professional TV and electronics removal services in Cincinnati. Eco-friendly disposal of televisions, monitors, and electronic devices.",
    keywords: "television removal Cincinnati, TV disposal Cincinnati, electronics removal Cincinnati, e-waste recycling Cincinnati",
    canonicalUrl: "https://haulawaypro.netlify.app/television-removal-cincinnati"
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
                Television Removal in Cincinnati
              </h1>
              <p className="text-xl mb-8 leading-relaxed text-gray-100">
                Professional television and electronics removal services in Cincinnati. Responsible e-waste recycling and safe disposal of TVs, monitors, and electronic devices.
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
                  HaulAway Pro provides professional television removal services throughout Cincinnati, specializing in the safe and environmentally responsible disposal of all types of electronic displays. Television removal requires special handling due to the presence of hazardous materials like lead, mercury, and other toxic substances found in older CRT televisions and even some newer flat-screen models. Our certified team follows EPA guidelines and Ohio state regulations for proper e-waste handling and disposal.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Our television removal service covers all types of displays including tube televisions, flat-screen TVs, plasma displays, LCD and LED televisions, OLED screens, computer monitors, and projection systems. Whether you're upgrading to a newer model, clearing out multiple televisions from a home or business, or dealing with broken screens, we handle electronics of all sizes safely and efficiently. Our team comes equipped with proper lifting equipment and protective materials to prevent damage during removal.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  The television disposal process involves careful disassembly and material separation at certified electronic recycling facilities. Valuable materials like copper, gold, silver, and rare earth elements are recovered for reuse in new electronics manufacturing. Hazardous materials are safely extracted and disposed of according to environmental regulations, preventing contamination of soil and water sources. This responsible approach to e-waste recycling helps reduce the environmental impact of electronic waste in Cincinnati.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Our Cincinnati television removal service includes careful disconnection from entertainment systems, safe removal from homes and businesses, and complete cleanup of the area. We provide transparent pricing with no hidden fees and can accommodate same-day service for urgent removals. Our fully licensed and insured team maintains professionalism and respects your property throughout the process. Trust HaulAway Pro for certified, legal, and environmentally responsible television removal services in Cincinnati.
                </p>

                <div className="bg-brand-lightBlue rounded-lg p-6 mb-8">
                  <h2 className="text-2xl font-bold text-brand-darkBlue mb-4">Why Choose Professional TV Removal?</h2>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                      <span>Certified e-waste recycling and disposal</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                      <span>Safe handling of hazardous materials</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                      <span>Recovery of valuable electronic components</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                      <span>EPA-compliant environmental protection</span>
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
            <h2 className="heading-lg mb-4 text-white">Need Television Removal Service?</h2>
            <p className="text-xl mb-8 text-gray-200">
              Professional e-waste removal with certified recycling in Cincinnati
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

export default TelevisionRemovalCincinnati;
