
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { CheckCircle, ShoppingBag, Phone } from 'lucide-react';
import { useMeta } from '@/hooks/useMeta';

const WardrobeRemovalCincinnati = () => {
  useMeta({
    title: "Wardrobe Removal Cincinnati | HaulAway Pro",
    description: "Professional wardrobe and armoire removal services in Cincinnati. We safely remove all types of clothing storage furniture including walk-in closets and built-in wardrobes. Same-day service available.",
    keywords: "wardrobe removal Cincinnati, armoire removal Cincinnati, closet removal Cincinnati, clothing storage removal Cincinnati",
    canonicalUrl: "https://haulawaypro.netlify.app/wardrobe-removal-cincinnati"
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
                Wardrobe Removal in Cincinnati
              </h1>
              <p className="text-xl mb-8 leading-relaxed text-gray-100">
                Professional wardrobe and armoire removal services throughout Cincinnati. We expertly handle large clothing storage furniture removal with careful disassembly and safe transport to protect your home and belongings.
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
                  HaulAway Pro specializes in professional wardrobe and armoire removal services throughout Cincinnati, recognizing that these large furniture pieces require specialized handling due to their size, weight, and intricate construction. Our skilled team employs careful disassembly techniques and uses appropriate protective equipment to ensure safe removal without causing damage to your clothing, home interiors, or other furniture. We understand the importance of preserving your wardrobe contents during the removal process.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Our wardrobe removal service covers all types of clothing storage furniture including freestanding wardrobes, built-in closet systems, armoires, chifforobes, gentleman's chests, bedroom sets with wardrobe components, and modular closet systems. Whether you're upgrading to a walk-in closet, downsizing your storage needs, or renovating your bedroom space, we handle projects from single wardrobe removal to complete bedroom storage system overhauls with professional expertise and attention to detail.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Environmental responsibility drives our wardrobe removal process. We evaluate each piece for donation opportunities to local Cincinnati organizations that assist individuals and families transitioning into stable housing, including domestic violence shelters, transitional housing programs, and refugee resettlement services. Quality wardrobes that can provide essential storage solutions for families establishing new homes are carefully prepared for donation. For wardrobes that cannot be donated, we ensure proper disposal through certified facilities where materials like wood and metal hardware are recycled.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Our Cincinnati wardrobe removal service includes assistance with clothing organization and temporary storage solutions if needed during your transition. We provide transparent pricing with comprehensive estimates and frequently offer same-day service for urgent removals. Our fully licensed and insured team maintains the highest standards of professionalism and respects your personal belongings throughout the entire process. Trust HaulAway Pro for reliable, careful, and environmentally conscious wardrobe removal services in Cincinnati.
                </p>

                <div className="bg-brand-lightBlue rounded-lg p-6 mb-8">
                  <h2 className="text-2xl font-bold text-brand-darkBlue mb-4">Why Choose Our Wardrobe Removal Service?</h2>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                      <span>Expert disassembly and careful clothing protection</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                      <span>Donation to Cincinnati housing assistance programs</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                      <span>Built-in closet system removal expertise</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                      <span>Complete bedroom storage solution removal</span>
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
            <h2 className="heading-lg mb-4 text-white">Need Wardrobe Removal?</h2>
            <p className="text-xl mb-8 text-gray-200">
              Professional clothing storage furniture removal with expert handling in Cincinnati
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

export default WardrobeRemovalCincinnati;
