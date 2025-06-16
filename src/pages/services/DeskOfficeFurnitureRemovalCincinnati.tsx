
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { CheckCircle, Monitor, Phone } from 'lucide-react';
import { useMeta } from '@/hooks/useMeta';

const DeskOfficeFurnitureRemovalCincinnati = () => {
  useMeta({
    title: "Desk & Office Furniture Removal Cincinnati | HaulAway Pro",
    description: "Professional desk and office furniture removal services in Cincinnati. We handle desks, chairs, filing cabinets, and complete office cleanouts. Same-day service available.",
    keywords: "desk removal Cincinnati, office furniture removal Cincinnati, filing cabinet removal Cincinnati, office cleanout Cincinnati",
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
                Professional desk and office furniture removal services throughout Cincinnati. We efficiently remove desks, chairs, filing cabinets, and complete office setups with minimal disruption to your business operations.
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
                  HaulAway Pro specializes in professional desk and office furniture removal services throughout Cincinnati and surrounding areas. Our experienced team understands the unique challenges of office furniture removal, including navigating tight office spaces, coordinating with building management, and maintaining business operations during the removal process. We work efficiently to minimize disruption to your workplace while ensuring all furniture is removed safely and responsibly.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Our office furniture removal service covers all types of workplace furniture including executive desks, modular workstations, ergonomic office chairs, conference tables, filing cabinets, bookcases, and reception furniture. Whether you're relocating your office, downsizing, upgrading furniture, or conducting a complete office renovation, we handle projects of all sizes from single desk removals to entire floor cleanouts. Our team is equipped with the proper tools and techniques to disassemble and remove large furniture pieces safely.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Environmental responsibility is integral to our office furniture removal process. We carefully assess each piece for donation opportunities to local Cincinnati nonprofits, schools, and community organizations that can benefit from quality office furniture. Usable desks, chairs, and filing cabinets are donated whenever possible, supporting the local community while reducing waste. For furniture that cannot be donated, we ensure proper disposal through certified recycling facilities where materials like metal, wood, and plastics are processed according to environmental guidelines.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Our Cincinnati office furniture removal service includes flexible scheduling to accommodate your business needs, including after-hours and weekend appointments. We provide transparent pricing with detailed estimates and no hidden fees. Our fully licensed and insured team maintains the highest standards of professionalism and can coordinate with building management for elevator reservations and loading dock access. Trust HaulAway Pro for reliable, efficient, and environmentally responsible office furniture removal services in Cincinnati.
                </p>

                <div className="bg-brand-lightBlue rounded-lg p-6 mb-8">
                  <h2 className="text-2xl font-bold text-brand-darkBlue mb-4">Why Choose Our Office Furniture Removal Service?</h2>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                      <span>Minimal disruption to business operations</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                      <span>Donation to local Cincinnati organizations</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                      <span>Flexible scheduling including after-hours service</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                      <span>Complete office cleanout services</span>
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
              Professional office furniture removal with flexible scheduling in Cincinnati
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
