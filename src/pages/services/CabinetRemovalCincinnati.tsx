
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { CheckCircle, Square, Phone } from 'lucide-react';
import { useMeta } from '@/hooks/useMeta';

const CabinetRemovalCincinnati = () => {
  useMeta({
    title: "Cabinet Removal Cincinnati | HaulAway Pro",
    description: "Professional cabinet removal services in Cincinnati. We remove kitchen cabinets, bathroom vanities, and storage cabinets with expert demolition and disposal. Same-day service available.",
    keywords: "cabinet removal Cincinnati, kitchen cabinet removal Cincinnati, bathroom vanity removal Cincinnati, cabinet demolition Cincinnati",
    canonicalUrl: "https://haulawaypro.netlify.app/cabinet-removal-cincinnati"
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
                Cabinet Removal in Cincinnati
              </h1>
              <p className="text-xl mb-8 leading-relaxed text-gray-100">
                Professional cabinet removal services throughout Cincinnati. We safely remove kitchen cabinets, bathroom vanities, and built-in storage with expert demolition techniques and complete debris cleanup.
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
                  HaulAway Pro provides professional cabinet removal services throughout Cincinnati, specializing in the safe removal of kitchen cabinets, bathroom vanities, and built-in storage systems. Our experienced team understands the complexities involved in cabinet removal, including proper disconnection of plumbing, electrical components, and careful demolition techniques that protect surrounding walls, floors, and countertops. We coordinate with contractors and homeowners to ensure cabinet removal aligns with renovation timelines and project requirements.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Our cabinet removal service covers all types of cabinetry including kitchen base cabinets, wall-mounted cabinets, bathroom vanities, built-in storage units, pantry cabinets, laundry room cabinets, and custom millwork. Whether you're renovating your kitchen, updating bathroom fixtures, or removing damaged cabinets, we handle projects of all sizes and complexity levels. Our team uses proper tools and techniques to carefully remove cabinets while minimizing damage to walls and preserving any components that you wish to salvage or donate.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Environmental responsibility guides our cabinet disposal process. We evaluate all removed cabinets for donation opportunities to local Cincinnati organizations, including Habitat for Humanity ReStore, which can provide quality cabinetry to families building or renovating homes. Cabinets in good condition can serve new families for many years while reducing waste in landfills. For cabinets that cannot be donated, we ensure responsible disposal through certified facilities where materials like wood, metal hardware, and composite materials are properly recycled.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Our Cincinnati cabinet removal service includes complete project coordination, careful disconnection of utilities, expert demolition, and thorough cleanup of all debris. We provide detailed estimates that account for removal complexity and disposal requirements, with no hidden fees. Our fully licensed and insured team maintains professionalism throughout the process and coordinates with your renovation schedule. Trust HaulAway Pro for professional, efficient, and environmentally responsible cabinet removal services in Cincinnati.
                </p>

                <div className="bg-brand-lightBlue rounded-lg p-6 mb-8">
                  <h2 className="text-2xl font-bold text-brand-darkBlue mb-4">Cabinet Types We Remove</h2>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                      <span>Kitchen base and wall cabinets</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                      <span>Bathroom vanities and medicine cabinets</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                      <span>Built-in storage and pantry systems</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                      <span>Custom millwork and specialty cabinetry</span>
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
            <h2 className="heading-lg mb-4 text-white">Ready to Remove Your Cabinets?</h2>
            <p className="text-xl mb-8 text-gray-200">
              Professional cabinet removal with expert demolition and cleanup in Cincinnati
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

export default CabinetRemovalCincinnati;
