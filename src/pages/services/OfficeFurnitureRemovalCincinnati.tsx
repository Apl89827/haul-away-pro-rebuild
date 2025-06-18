
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { CheckCircle, Building, Phone } from 'lucide-react';
import { useMeta } from '@/hooks/useMeta';

const OfficeFurnitureRemovalCincinnati = () => {
  useMeta({
    title: "Office Furniture Removal Cincinnati | HaulAway Pro",
    description: "Professional office furniture removal services in Cincinnati. We remove desks, chairs, cubicles, conference tables, and filing cabinets with minimal business disruption. Same-day commercial service available.",
    keywords: "office furniture removal Cincinnati, desk removal Cincinnati, cubicle removal Cincinnati, office cleanout Cincinnati, commercial furniture disposal Cincinnati",
    canonicalUrl: "https://haulawaypro.netlify.app/office-furniture-removal-cincinnati"
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
                Office Furniture Removal in Cincinnati
              </h1>
              <p className="text-xl mb-8 leading-relaxed text-gray-100">
                Professional office furniture removal services throughout Cincinnati. We handle complete office relocations, downsizing projects, and renovations with minimal disruption to your business operations.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/booking" className="btn-primary bg-brand-green hover:bg-green-600">
                  Schedule Commercial Pickup
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
                  HaulAway Pro provides comprehensive office furniture removal services throughout Cincinnati, specializing in commercial relocations, office downsizing, and renovation projects. Our experienced team understands the unique challenges of office environments, including tight deadlines, elevator access, narrow hallways, and the need for professional, quiet service that doesn't disrupt ongoing business operations. We coordinate with office managers, facilities teams, and moving companies to ensure seamless furniture removal that aligns with your project timeline and business needs.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Our office furniture removal service covers all types of commercial furniture including executive desks, employee workstations, ergonomic office chairs, conference tables, reception furniture, filing cabinets, bookshelf units, cubicle systems, modular office partitions, and lobby seating. Whether you're relocating to a new Cincinnati office space, downsizing your current location, or renovating existing offices, we handle projects of all sizes with professionalism and efficiency. Our team uses proper equipment and techniques to safely remove furniture while protecting building surfaces, elevator interiors, and remaining office equipment.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Environmental responsibility guides our office furniture disposal process. We evaluate all removed furniture for donation opportunities to local Cincinnati nonprofits, schools, startups, and community organizations that can benefit from quality office furniture. Many office pieces retain significant functionality and can serve other businesses for years while supporting the local community. For furniture that cannot be donated, we ensure responsible disposal through certified recycling facilities where materials like metal, fabric, and composite materials are properly processed according to environmental regulations.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Our Cincinnati office furniture removal service includes detailed project planning, flexible scheduling around business hours, careful furniture disassembly when needed, professional removal and loading, and complete site cleanup after pickup. We provide comprehensive documentation for asset disposal tracking and can accommodate weekend or after-hours service to minimize business disruption. Our fully licensed and insured team maintains the highest standards of professionalism and confidentiality throughout the entire process. Trust HaulAway Pro for reliable, efficient, and environmentally responsible office furniture removal services in Cincinnati.
                </p>

                <div className="bg-brand-lightBlue rounded-lg p-6 mb-8">
                  <h2 className="text-2xl font-bold text-brand-darkBlue mb-4">Office Furniture We Remove</h2>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                      <span>Executive desks and workstations</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                      <span>Office chairs and seating</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                      <span>Conference tables and meeting furniture</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                      <span>Filing cabinets and storage systems</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                      <span>Cubicles and modular office systems</span>
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
            <h2 className="heading-lg mb-4 text-white">Ready to Clear Your Office Space?</h2>
            <p className="text-xl mb-8 text-gray-200">
              Professional office furniture removal with minimal business disruption in Cincinnati
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/booking" className="btn-primary bg-brand-green hover:bg-green-600">
                Get Commercial Quote
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

export default OfficeFurnitureRemovalCincinnati;
