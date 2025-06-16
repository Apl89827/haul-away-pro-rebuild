
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { CheckCircle, Music, Phone } from 'lucide-react';
import { useMeta } from '@/hooks/useMeta';

const PianoRemovalCincinnati = () => {
  useMeta({
    title: "Piano Removal Cincinnati | HaulAway Pro",
    description: "Professional piano removal services in Cincinnati. We safely remove upright pianos, grand pianos, and digital pianos with specialized equipment and expertise. Same-day service available.",
    keywords: "piano removal Cincinnati, upright piano removal Cincinnati, grand piano removal Cincinnati, piano disposal Cincinnati",
    canonicalUrl: "https://haulawaypro.netlify.app/piano-removal-cincinnati"
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
                Piano Removal in Cincinnati
              </h1>
              <p className="text-xl mb-8 leading-relaxed text-gray-100">
                Professional piano removal services throughout Cincinnati. We safely remove upright pianos, grand pianos, and digital pianos with specialized equipment and techniques to protect your instrument and property.
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
                  HaulAway Pro offers specialized piano removal services throughout Cincinnati, understanding that pianos require expert handling due to their significant weight, delicate internal mechanisms, and high value. Our experienced team is trained in proper piano moving techniques and uses professional-grade equipment including piano dollies, straps, and protective padding to ensure safe removal from your home. We carefully assess each situation to determine the best approach for navigating stairs, tight spaces, and doorways while protecting both the piano and your property.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Our piano removal service covers all types of pianos including upright pianos, console pianos, studio pianos, baby grand pianos, grand pianos, digital pianos, and antique player pianos. Whether you're downsizing, moving, inheriting a piano, or dealing with a damaged instrument, we handle each removal with the care and expertise that these valuable instruments deserve. Our team understands the unique challenges posed by different piano types and adjusts our approach accordingly, from the compact handling required for uprights to the complex logistics of grand piano removal.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Given the cultural and educational value of pianos, we prioritize donation opportunities to local Cincinnati schools, churches, community centers, and music programs. Pianos in good playing condition can provide years of musical enjoyment and education to new owners. We work with local piano technicians and music organizations to evaluate instruments for donation potential. For pianos that cannot be donated due to condition or repair costs, we ensure responsible disposal with materials like wood, metal strings, and cast iron plates being recycled through appropriate facilities.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Our Cincinnati piano removal service includes thorough pre-removal planning, professional packing and protection, careful extraction, and complete cleanup. We provide detailed estimates that account for the specific challenges of your piano's location and type. Our fully licensed and insured team maintains the highest standards of care and professionalism throughout the process. While same-day service may be available for smaller instruments, we typically recommend advance scheduling to ensure proper preparation for piano removals. Trust HaulAway Pro for expert, careful, and responsible piano removal services in Cincinnati.
                </p>

                <div className="bg-brand-lightBlue rounded-lg p-6 mb-8">
                  <h2 className="text-2xl font-bold text-brand-darkBlue mb-4">Why Choose Our Piano Removal Service?</h2>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                      <span>Specialized piano moving equipment and techniques</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                      <span>Donation to Cincinnati schools and music programs</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                      <span>Expert handling of all piano types</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                      <span>Comprehensive protection for instrument and property</span>
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
            <h2 className="heading-lg mb-4 text-white">Need Professional Piano Removal?</h2>
            <p className="text-xl mb-8 text-gray-200">
              Expert piano removal with specialized equipment and techniques in Cincinnati
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

export default PianoRemovalCincinnati;
