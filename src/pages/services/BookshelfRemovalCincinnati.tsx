
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { CheckCircle, BookOpen, Phone } from 'lucide-react';
import { useMeta } from '@/hooks/useMeta';

const BookshelfRemovalCincinnati = () => {
  useMeta({
    title: "Bookshelf Removal Cincinnati | HaulAway Pro",
    description: "Professional bookshelf and bookcase removal services in Cincinnati. We safely remove all types of shelving units including built-in bookcases and library furniture. Same-day service available.",
    keywords: "bookshelf removal Cincinnati, bookcase removal Cincinnati, library furniture removal Cincinnati, shelving unit removal Cincinnati",
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
                Professional bookshelf and bookcase removal services throughout Cincinnati. We carefully remove all types of shelving units, from small bookcases to large built-in library systems, with attention to preserving your books and home.
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
                  HaulAway Pro offers expert bookshelf and bookcase removal services throughout Cincinnati, understanding that these furniture pieces often hold both functional and sentimental value. Our experienced team carefully handles the removal process, ensuring that any books or personal items are safely preserved while efficiently removing the shelving units themselves. We use appropriate protective materials and disassembly techniques to prevent damage to surrounding walls, floors, and other furniture during the removal process.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Our bookshelf removal service encompasses all types of library and storage furniture including freestanding bookcases, built-in shelving systems, modular shelving units, entertainment centers with shelving, corner bookcases, ladder shelves, and specialty library furniture. Whether you're reorganizing your home library, downsizing your book collection, or renovating your study space, we handle projects ranging from single bookcase removal to complete home library clearouts with professional attention to detail.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Environmental stewardship is central to our bookshelf removal approach. We actively seek donation opportunities for quality bookcases to local Cincinnati schools, libraries, community centers, and families who could benefit from additional storage and organization solutions. Well-constructed shelving units that can serve educational and organizational purposes in other homes are carefully transported to appropriate recipients. For shelving that cannot be donated, we ensure proper disposal through certified facilities where materials like wood and metal hardware are recycled.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Our Cincinnati bookshelf removal service includes assistance with book packing and organization if needed, helping you transition your library to new storage solutions. We provide clear, upfront pricing with no hidden costs and can often accommodate same-day service requests. Our fully licensed and insured team treats your books and home with respect throughout the entire process. Trust HaulAway Pro for thoughtful, efficient, and environmentally responsible bookshelf removal services in Cincinnati.
                </p>

                <div className="bg-brand-lightBlue rounded-lg p-6 mb-8">
                  <h2 className="text-2xl font-bold text-brand-darkBlue mb-4">Why Choose Our Bookshelf Removal Service?</h2>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                      <span>Careful handling of books and personal items</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                      <span>Donation to Cincinnati schools and libraries</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                      <span>Professional disassembly of built-in units</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                      <span>Complete home library clearout services</span>
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
            <h2 className="heading-lg mb-4 text-white">Ready to Remove Your Bookcases?</h2>
            <p className="text-xl mb-8 text-gray-200">
              Professional bookshelf removal with careful book handling in Cincinnati
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
