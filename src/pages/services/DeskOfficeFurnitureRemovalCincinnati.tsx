
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { CheckCircle, Briefcase, Phone } from 'lucide-react';
import { useMeta } from '@/hooks/useMeta';

const DeskOfficeFurnitureRemovalCincinnati = () => {
  useMeta({
    title: "Desk & Office Furniture Removal Cincinnati | HaulAway Pro",
    description: "Professional desk and office furniture removal services in Cincinnati. We remove desks, chairs, filing cabinets, and all office equipment. Same-day service available.",
    keywords: "desk removal Cincinnati, office furniture removal Cincinnati, filing cabinet removal Cincinnati, office equipment disposal Cincinnati",
    canonicalUrl: "https://haulawaypro.netlify.app/desk-office-furniture-removal-cincinnati"
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
                Desk & Office Furniture Removal in Cincinnati
              </h1>
              <p className="text-xl mb-8 leading-relaxed text-gray-100">
                Professional desk and office furniture removal services throughout Cincinnati. We handle complete office cleanouts, individual desk removal, and all types of business furniture with efficient service and eco-friendly disposal.
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
                  HaulAway Pro specializes in professional desk and office furniture removal services throughout Cincinnati, handling everything from single desk pickup to complete office building cleanouts. Our experienced team understands the unique challenges of office furniture removal, including navigating elevators, stairwells, and tight office spaces while protecting building interiors and other furnishings. We coordinate with building management and businesses to schedule removals during convenient hours that minimize disruption to daily operations.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Our office furniture removal service covers all types of business furniture including executive desks, computer workstations, reception desks, conference tables, office chairs, filing cabinets, bookcases, storage units, and modular office systems. Whether you're relocating, downsizing, upgrading furniture, or closing a business, we handle office furniture of all sizes and configurations. Our team comes equipped with proper dollies, straps, and protective materials to safely remove heavy items like large executive desks and multi-piece modular systems.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Environmental responsibility guides our office furniture disposal process. We evaluate all furniture for donation opportunities to local Cincinnati nonprofit organizations, schools, and startup businesses that can benefit from quality office furniture. Items in good condition are carefully prepared for donation, extending their useful life and supporting the local business community. For furniture that cannot be donated, we ensure responsible disposal through certified facilities where materials like wood, metal, and plastic components are properly recycled.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Our Cincinnati desk and office furniture removal service includes complete project coordination, careful disassembly when needed, safe removal, and thorough cleanup. We provide transparent pricing with detailed estimates and can accommodate urgent removals for business relocations. Our fully licensed and insured team maintains professionalism throughout the process and understands the importance of confidentiality in business environments. Trust HaulAway Pro for reliable, efficient, and environmentally responsible office furniture removal services in Cincinnati.
                </p>

                <div className="bg-brand-lightBlue rounded-lg p-6 mb-8">
                  <h2 className="text-2xl font-bold text-brand-darkBlue mb-4">Office Furniture We Remove</h2>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                      <span>Executive desks and computer workstations</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                      <span>Office chairs and conference room furniture</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                      <span>Filing cabinets and storage units</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                      <span>Modular office systems and cubicles</span>
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
            <h2 className="heading-lg mb-4 text-white">Need Office Furniture Removal?</h2>
            <p className="text-xl mb-8 text-gray-200">
              Professional desk and office furniture removal with donation opportunities in Cincinnati
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

export default DeskOfficeFurnitureRemovalCincinnati;
