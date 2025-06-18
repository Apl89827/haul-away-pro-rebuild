
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { CheckCircle, Home, DollarSign, Phone } from 'lucide-react';
import { useMeta } from '@/hooks/useMeta';

const EstateSaleCleanupCincinnati = () => {
  useMeta({
    title: "Estate Sale Cleanup Cincinnati | HaulAway Pro",
    description: "Professional estate sale cleanup services in Cincinnati. Post-sale cleanup, coordination with estate sale companies, and property preparation for real estate showings.",
    keywords: "estate sale cleanup Cincinnati, post estate sale cleaning Cincinnati, estate sale removal Cincinnati, property cleanup after estate sale Cincinnati",
    canonicalUrl: "https://haulawaypro.netlify.app/estate-sale-cleanup-cincinnati"
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
                Estate Sale Cleanup Services in Cincinnati
              </h1>
              <p className="text-xl mb-8 leading-relaxed text-gray-100">
                Professional estate sale cleanup services in Cincinnati. Complete post-sale cleanup, coordination with estate companies, and property preparation for real estate showings.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/booking" className="btn-primary bg-brand-green hover:bg-green-600">
                  Schedule Post-Sale Cleanup
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
                  HaulAway Pro provides comprehensive estate sale cleanup services throughout Cincinnati, handling the final phase of estate sales and ensuring properties are thoroughly cleared and prepared for the next chapter. We work closely with estate sale companies, real estate agents, and families to coordinate timing and ensure smooth transitions from sale completion to property preparation. Our team understands the importance of quickly and efficiently removing all remaining items while maintaining the property's condition and appeal for potential buyers or new owners.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Our estate sale cleanup service begins immediately after estate sale completion, removing all unsold items including furniture pieces that didn't attract buyers, household goods and decorative items, clothing and personal effects, books and media collections, and miscellaneous items throughout the property. We coordinate closely with estate sale companies to understand which items remain and any special handling requirements. Our team efficiently loads and removes all remaining items while being careful to protect floors, walls, and doorways from damage during the removal process.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  We maximize the value of remaining estate items through strategic donation and recycling partnerships throughout the Cincinnati area. Many items that don't sell at estate sales still have significant value for local charities, community organizations, and families in need. We coordinate donations to furniture banks, clothing closets, household goods programs, and educational organizations that can benefit from books and learning materials. Our team provides detailed donation documentation for tax purposes and ensures that usable items continue to serve the community rather than ending up in landfills.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Our estate sale cleanup service includes complete removal of all unsold items, coordination with estate sale companies for smooth transitions, donation services to maximize remaining value, thorough cleaning of all rooms and spaces, repair of any minor damage from sale activities, and preparation of the property for real estate showings or transfer. We work quickly and efficiently to meet tight timelines while maintaining professional standards throughout the process. Our goal is to help families complete the estate process and prepare properties for successful sale or transfer to new owners.
                </p>

                <div className="bg-brand-lightBlue rounded-lg p-6 mb-8">
                  <h2 className="text-2xl font-bold text-brand-darkBlue mb-4">Post-Estate Sale Services</h2>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                      <span>Complete removal of all unsold items</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                      <span>Coordination with estate sale companies</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                      <span>Strategic donations to local charities</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                      <span>Property cleaning and preparation</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                      <span>Real estate showing preparation</span>
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
            <h2 className="heading-lg mb-4 text-white">Need Estate Sale Cleanup Services?</h2>
            <p className="text-xl mb-8 text-gray-200">
              Complete post-sale cleanup and property preparation throughout Cincinnati
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/booking" className="btn-primary bg-brand-green hover:bg-green-600">
                Schedule Post-Sale Cleanup
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

export default EstateSaleCleanupCincinnati;
