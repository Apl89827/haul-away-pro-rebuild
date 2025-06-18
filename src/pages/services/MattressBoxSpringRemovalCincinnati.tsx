
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { CheckCircle, Shield, Bed, Phone } from 'lucide-react';
import { useMeta } from '@/hooks/useMeta';

const MattressBoxSpringRemovalCincinnati = () => {
  useMeta({
    title: "Mattress & Box Spring Removal Cincinnati | HaulAway Pro",
    description: "Professional mattress and box spring removal in Cincinnati. Hygienic disposal of sleep sets with mattress recycling and same-day pickup available.",
    keywords: "mattress removal Cincinnati, box spring disposal Cincinnati, sleep set removal Cincinnati, mattress recycling Cincinnati, bedroom cleanout Cincinnati",
    canonicalUrl: "https://haulawaypro.netlify.app/mattress-box-spring-removal-cincinnati"
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
                Mattress & Box Spring Removal in Cincinnati
              </h1>
              <p className="text-xl mb-8 leading-relaxed text-gray-100">
                Professional mattress and box spring removal in Cincinnati. Hygienic handling and eco-friendly disposal of sleep sets with convenient same-day pickup.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/booking" className="btn-primary bg-brand-green hover:bg-green-600">
                  Schedule Mattress Removal
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
                  HaulAway Pro specializes in mattress and box spring removal throughout Cincinnati, providing hygienic disposal services for sleep sets of all sizes from twin to California king. We understand the unique challenges of mattress disposal including size constraints, hygiene considerations, and environmental responsibility. Our experienced team uses protective coverings and sanitation protocols during removal to prevent contamination and maintain cleanliness throughout the process. We can safely remove mattresses and box springs from bedrooms on any floor, including navigating narrow stairways, tight hallways, and challenging doorway configurations that make sleep set removal difficult.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Our mattress removal process prioritizes hygiene and efficiency while protecting your home during extraction. We use protective coverings on all mattresses and box springs to prevent contamination during transport. Our team carefully plans removal routes to minimize contact with walls, furniture, and other household items. We handle all types of sleep systems including traditional innerspring mattresses, memory foam mattresses, latex mattresses, hybrid systems, and adjustable bed mattresses. For larger sleep sets or multiple bedroom cleanouts, we coordinate logistics to ensure efficient removal while maintaining our strict hygiene standards throughout the process.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  We prioritize environmental sustainability by partnering with specialized mattress recycling facilities in the Cincinnati area that deconstruct sleep sets to recover valuable materials. Steel springs are extracted and sent to metal recycling facilities, foam components are processed for reuse in new products, and fabric materials are sorted for textile recycling programs. Our mattress recycling partnerships help divert thousands of pounds of material from local landfills each year while supporting circular economy principles in bedding industry waste management. When possible, we coordinate donation opportunities for gently used mattresses to local charitable organizations serving families in need.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Our mattress and box spring removal service includes comprehensive hygiene protocols, careful removal from any bedroom location, protective transport procedures, coordination with specialized recycling facilities, and complete cleanup after removal. We handle single mattresses, complete sleep sets, and multiple bedroom clearances with equal attention to detail and cleanliness. Whether you're upgrading to a new sleep system, clearing out rental properties, or managing estate cleanouts, our professional removal service ensures hygienic and environmentally responsible disposal. We coordinate timing with mattress deliveries and bedroom renovations to provide seamless service that fits your schedule and maintains bedroom cleanliness.
                </p>

                <div className="bg-brand-lightBlue rounded-lg p-6 mb-8">
                  <h2 className="text-2xl font-bold text-brand-darkBlue mb-4">Sleep Sets We Remove</h2>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                      <span>Twin, full, queen, and king mattresses</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                      <span>Box springs and foundation sets</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                      <span>Memory foam and latex mattresses</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                      <span>Adjustable bed mattresses</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                      <span>Futon mattresses and sofa beds</span>
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
            <h2 className="heading-lg mb-4 text-white">Need Mattress & Box Spring Removal?</h2>
            <p className="text-xl mb-8 text-gray-200">
              Hygienic mattress disposal with eco-friendly recycling in Cincinnati
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/booking" className="btn-primary bg-brand-green hover:bg-green-600">
                Schedule Pickup Today
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

export default MattressBoxSpringRemovalCincinnati;
