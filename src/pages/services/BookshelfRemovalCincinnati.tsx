
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { CheckCircle, BookOpen, Phone } from 'lucide-react';
import { useMeta } from '@/hooks/useMeta';

const BookshelfRemovalCincinnati = () => {
  useMeta({
    title: "Bookshelf Removal Cincinnati | HaulAway Pro",
    description: "Professional bookshelf and library furniture removal services in Cincinnati. We remove bookcases, shelving units, and storage furniture. Same-day service available.",
    keywords: "bookshelf removal Cincinnati, bookcase removal Cincinnati, shelving unit removal Cincinnati, library furniture removal Cincinnati",
    canonicalUrl: "https://haulawaypro.netlify.app/bookshelf-removal-cincinnati"
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
                Bookshelf Removal in Cincinnati
              </h1>
              <p className="text-xl mb-8 leading-relaxed text-gray-100">
                Professional bookshelf and library furniture removal services throughout Cincinnati. We carefully remove bookcases, shelving units, and storage furniture with expert handling and eco-friendly disposal.
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
                  HaulAway Pro specializes in professional bookshelf and library furniture removal services throughout Cincinnati, understanding that these storage pieces often contain valuable books and personal collections that require careful handling. Our experienced team provides comprehensive service that includes assistance with book organization and temporary storage solutions if needed during your transition. We use protective materials and proper techniques to ensure safe removal of tall, heavy bookshelves without damage to your books, walls, or flooring.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Our bookshelf removal service covers all types of storage furniture including traditional bookcases, modular shelving systems, built-in library units, entertainment centers, display cases, and custom storage solutions. Whether you're downsizing your library, renovating your home office, or clearing out inherited collections, we handle storage furniture of all sizes and configurations. Our team can carefully disassemble large modular systems and navigate challenging removal situations including narrow hallways, stairs, and rooms with limited access.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Environmental stewardship and community benefit guide our bookshelf disposal process. We evaluate all shelving units for donation opportunities to local Cincinnati schools, libraries, community centers, and literacy programs that can benefit from quality storage furniture. Functional bookshelves can provide years of use for educational programs and community organizations. For shelving that cannot be donated, we ensure responsible disposal through certified facilities where materials like wood, metal hardware, and composite materials are properly recycled.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Our Cincinnati bookshelf removal service includes careful pre-removal planning, assistance with book handling if needed, expert disassembly when required, and complete cleanup after removal. We provide transparent pricing with detailed estimates and can often accommodate same-day service for urgent removals. Our fully licensed and insured team respects the value of your book collections and treats every piece of furniture with appropriate care. Trust HaulAway Pro for professional, careful, and environmentally responsible bookshelf removal services in Cincinnati.
                </p>

                <div className="bg-brand-lightBlue rounded-lg p-6 mb-8">
                  <h2 className="text-2xl font-bold text-brand-darkBlue mb-4">Storage Furniture We Remove</h2>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                      <span>Traditional bookcases and library furniture</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                      <span>Modular shelving and storage systems</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                      <span>Entertainment centers and media storage</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                      <span>Display cases and custom storage solutions</span>
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
            <h2 className="heading-lg mb-4 text-white">Need Bookshelf Removal?</h2>
            <p className="text-xl mb-8 text-gray-200">
              Professional storage furniture removal with careful book handling in Cincinnati
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

export default BookshelfRemovalCincinnati;
