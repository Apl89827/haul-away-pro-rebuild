
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { CheckCircle, Utensils, Phone } from 'lucide-react';
import { useMeta } from '@/hooks/useMeta';

const DiningRoomSetRemovalCincinnati = () => {
  useMeta({
    title: "Dining Room Set Removal Cincinnati | HaulAway Pro",
    description: "Professional dining room set removal services in Cincinnati. We remove dining tables, chairs, china cabinets, and all dining room furniture. Same-day service available.",
    keywords: "dining room set removal Cincinnati, dining table removal Cincinnati, dining room furniture removal Cincinnati, china cabinet removal Cincinnati",
    canonicalUrl: "https://haulawaypro.netlify.app/dining-room-set-removal-cincinnati"
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
                Dining Room Set Removal in Cincinnati
              </h1>
              <p className="text-xl mb-8 leading-relaxed text-gray-100">
                Professional dining room set removal services throughout Cincinnati. We carefully remove dining tables, chairs, china cabinets, and complete dining room furniture sets with expert handling and eco-friendly disposal.
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
                  HaulAway Pro provides professional dining room set removal services throughout Cincinnati, specializing in the careful handling of valuable dining room furniture including antique pieces, formal dining sets, and modern furniture collections. Our experienced team understands that dining room furniture often holds sentimental value and requires delicate handling during removal. We use protective materials and proper lifting techniques to ensure safe removal without damage to the furniture or your home's interior features like hardwood floors, wallpaper, or doorframes.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Our dining room furniture removal service covers complete dining room sets including dining tables, chairs, buffets, hutches, china cabinets, sideboards, and serving carts. Whether you're downsizing, inheriting furniture, redecorating, or moving to a smaller space, we handle dining room furniture of all styles and sizes. Our team can carefully disassemble large pieces when necessary and navigate challenging removal situations including narrow doorways, stairs, and tight corners that often complicate dining room furniture removal.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Given the often high quality and lasting value of dining room furniture, we prioritize donation opportunities to local Cincinnati families, charitable organizations, and community centers. Quality dining room sets can provide years of use for families establishing new homes or organizations hosting community meals. We work with local charities and furniture assistance programs to identify recipients who can benefit from donated dining room furniture. For pieces that cannot be donated, we ensure responsible disposal with materials like wood and metal hardware being recycled through appropriate facilities.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Our Cincinnati dining room set removal service includes careful pre-removal assessment, protective wrapping when needed, expert disassembly if required, and complete cleanup after removal. We provide detailed estimates and can often accommodate same-day service for urgent removals. Our fully licensed and insured team treats every piece with care and respects the sentimental value that dining room furniture often holds for families. Trust HaulAway Pro for professional, careful, and environmentally responsible dining room furniture removal services in Cincinnati.
                </p>

                <div className="bg-brand-lightBlue rounded-lg p-6 mb-8">
                  <h2 className="text-2xl font-bold text-brand-darkBlue mb-4">Dining Room Items We Remove</h2>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                      <span>Dining tables and extension tables</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                      <span>Dining chairs and upholstered seating</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                      <span>China cabinets and hutches</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                      <span>Buffets, sideboards, and serving furniture</span>
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
            <h2 className="heading-lg mb-4 text-white">Ready to Remove Your Dining Room Set?</h2>
            <p className="text-xl mb-8 text-gray-200">
              Professional dining room furniture removal with careful handling in Cincinnati
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

export default DiningRoomSetRemovalCincinnati;
