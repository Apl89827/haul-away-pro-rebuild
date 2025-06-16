
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { CheckCircle, Utensils, Phone } from 'lucide-react';
import { useMeta } from '@/hooks/useMeta';

const DiningRoomSetRemovalCincinnati = () => {
  useMeta({
    title: "Dining Room Set Removal Cincinnati | HaulAway Pro",
    description: "Professional dining room set removal services in Cincinnati. We safely remove dining tables, chairs, china cabinets, and complete dining room furniture. Same-day service available.",
    keywords: "dining room set removal Cincinnati, dining table removal Cincinnati, china cabinet removal Cincinnati, dining furniture removal Cincinnati",
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
                Professional dining room set removal services throughout Cincinnati. We handle complete dining room furniture removal including tables, chairs, china cabinets, and buffets with care and efficiency.
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
                  HaulAway Pro provides expert dining room set removal services throughout Cincinnati, specializing in the safe and efficient removal of complete dining room furniture collections. Our experienced team understands that dining room furniture often includes valuable pieces with sentimental significance, requiring careful handling and assessment. We use protective padding and proper lifting techniques to ensure your furniture is removed without damage to the pieces themselves or your home's walls, floors, and doorways.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Our dining room removal service covers all types of dining furniture including formal dining tables, dining chairs, china cabinets, hutches, buffets, sideboards, bar carts, and dining room lighting fixtures. Whether you're downsizing, redecorating, inheriting furniture, or dealing with damaged pieces, we handle both individual items and complete dining room sets. Our team can disassemble large pieces when necessary and navigate challenging spaces like narrow hallways, stairs, and tight corners commonly found in Cincinnati homes.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Before disposal, we carefully evaluate each dining room piece for donation potential to local Cincinnati charities, churches, and community organizations. Quality dining furniture that can serve other families is donated whenever possible, extending the life of well-made pieces while supporting our community. For antique or valuable furniture, we can provide guidance on potential resale options. Items that cannot be donated are responsibly disposed of through certified facilities where materials like wood, metal hardware, and glass are recycled according to environmental standards.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Our Cincinnati dining room set removal service includes complete post-removal cleanup, leaving your dining space ready for new furniture or alternative use. We provide upfront pricing with detailed estimates and no surprise charges. Our fully licensed and insured team treats your home with respect and maintains professionalism throughout the entire process. Same-day service is often available for urgent situations. Trust HaulAway Pro for careful, reliable, and environmentally conscious dining room furniture removal in Cincinnati.
                </p>

                <div className="bg-brand-lightBlue rounded-lg p-6 mb-8">
                  <h2 className="text-2xl font-bold text-brand-darkBlue mb-4">Why Choose Our Dining Room Removal Service?</h2>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                      <span>Careful handling of valuable and antique pieces</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                      <span>Donation to local Cincinnati families and organizations</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                      <span>Professional disassembly when needed</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                      <span>Complete dining room cleanout services</span>
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
