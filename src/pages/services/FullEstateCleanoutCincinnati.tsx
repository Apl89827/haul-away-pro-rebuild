
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { CheckCircle, Heart, Home, Phone } from 'lucide-react';
import { useMeta } from '@/hooks/useMeta';

const FullEstateCleanoutCincinnati = () => {
  useMeta({
    title: "Full Estate Cleanout Cincinnati | HaulAway Pro",
    description: "Complete full estate cleanout services in Cincinnati. Professional property clearing with family coordination, donation services, and preparation for sale. Compassionate and thorough.",
    keywords: "full estate cleanout Cincinnati, complete estate clearing Cincinnati, property cleanout Cincinnati, family estate clearing Cincinnati, estate cleanout services Cincinnati",
    canonicalUrl: "https://haulawaypro.netlify.app/full-estate-cleanout-cincinnati"
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
                Full Estate Cleanout Services in Cincinnati
              </h1>
              <p className="text-xl mb-8 leading-relaxed text-gray-100">
                Comprehensive estate cleanout services throughout Cincinnati. We handle complete property clearing with compassion, family coordination, and preparation for the next chapter.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/booking" className="btn-primary bg-brand-green hover:bg-green-600">
                  Schedule Consultation
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
                  HaulAway Pro provides comprehensive full estate cleanout services throughout Cincinnati, understanding that clearing an entire estate property is both emotionally challenging and logistically complex. Our experienced team approaches each full estate cleanout with sensitivity, professionalism, and meticulous attention to detail. We work closely with families, executors, and estate attorneys to ensure all aspects of the property clearing process are handled appropriately. From the initial assessment through final cleanup, we coordinate every detail while allowing families time to review belongings and make informed decisions about what to preserve, donate, or dispose of.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Our full estate cleanout service begins with a comprehensive walkthrough and assessment of the entire property, including main living areas, bedrooms, basements, attics, garages, and outdoor spaces. We carefully categorize items throughout the property, identifying valuable pieces that may require appraisal, important documents and family records, sentimental items for family review, furniture and household goods suitable for donation, and items requiring special disposal methods. Our team provides detailed documentation of the cleanout process and can coordinate with estate sale companies, antique dealers, and auction houses when beneficial to maximize estate value.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  We prioritize meaningful connections with local Cincinnati charities and community organizations to ensure that usable items continue to serve the community. Our donation partnerships include furniture banks that help families transitioning from homelessness, clothing closets serving those in need, household goods programs supporting refugees and new residents, and educational organizations that can benefit from books and learning materials. We provide detailed donation receipts for tax purposes and can arrange memorial donations in honor of your loved one when requested.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Our full estate cleanout service includes complete property clearing, careful sorting and categorization of all items, coordination with family members for decision-making, donation services to local Cincinnati charities, proper disposal of non-donatable items, deep cleaning after item removal, and preparation of the property for sale or transfer. We maintain detailed records throughout the process and provide comprehensive documentation for estate proceedings. Our goal is to handle the physical aspects of estate clearing with professionalism and care, allowing families to focus on healing and moving forward during this difficult time.
                </p>

                <div className="bg-brand-lightBlue rounded-lg p-6 mb-8">
                  <h2 className="text-2xl font-bold text-brand-darkBlue mb-4">What We Handle in Full Estate Cleanouts</h2>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                      <span>Complete furniture removal from all rooms</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                      <span>Personal belongings and household items</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                      <span>Basement, attic, and garage cleanouts</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                      <span>Appliances and electronics disposal</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                      <span>Outdoor equipment and yard items</span>
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
            <h2 className="heading-lg mb-4 text-white">Need Full Estate Cleanout Services?</h2>
            <p className="text-xl mb-8 text-gray-200">
              Comprehensive estate clearing with compassionate service throughout Cincinnati
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/booking" className="btn-primary bg-brand-green hover:bg-green-600">
                Schedule Consultation
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

export default FullEstateCleanoutCincinnati;
