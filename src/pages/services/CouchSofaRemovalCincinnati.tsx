
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { CheckCircle, Sofa, Phone } from 'lucide-react';
import { useMeta } from '@/hooks/useMeta';

const CouchSofaRemovalCincinnati = () => {
  useMeta({
    title: "Couch & Sofa Removal Cincinnati | HaulAway Pro",
    description: "Professional couch and sofa removal services in Cincinnati. We safely remove all types of upholstered furniture from your home. Same-day service available.",
    keywords: "couch removal Cincinnati, sofa removal Cincinnati, furniture removal Cincinnati, upholstered furniture disposal Cincinnati",
    canonicalUrl: "https://haulawaypro.netlify.app/couch-sofa-removal-cincinnati"
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
                Couch & Sofa Removal in Cincinnati
              </h1>
              <p className="text-xl mb-8 leading-relaxed text-gray-100">
                Professional couch and sofa removal services throughout Cincinnati. We handle all types of upholstered furniture with care and efficiency, ensuring safe removal from your home without damage to walls or doorways.
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
                  HaulAway Pro specializes in professional couch and sofa removal services throughout Cincinnati and surrounding areas. Our experienced team understands that removing large upholstered furniture can be challenging, especially when navigating tight spaces, stairs, and narrow doorways. We use proper lifting techniques and protective equipment to ensure your furniture is removed safely without causing damage to your home's walls, floors, or door frames.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Our couch and sofa removal service covers all types of upholstered furniture including sectional sofas, recliners, loveseats, sleeper sofas, and antique furniture pieces. Whether you're replacing old furniture, downsizing your home, or dealing with damaged upholstery, we provide efficient removal services that work around your schedule. We carefully assess each piece before removal to determine the best extraction method, ensuring minimal disruption to your living space.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Environmental responsibility is a core part of our couch and sofa removal process. Before disposal, we evaluate each piece for donation opportunities to local Cincinnati charities and furniture banks. Usable furniture that can benefit families in need is carefully transported to appropriate organizations. For furniture that cannot be donated, we ensure proper disposal at certified facilities where materials like wood frames and metal springs can be recycled.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Our Cincinnati couch and sofa removal service includes complete cleanup after removal, leaving your space ready for new furniture or other uses. We provide transparent upfront pricing with no hidden fees, and same-day service is often available for urgent removals. Our fully licensed and insured team respects your property and maintains professionalism throughout the entire process. Trust HaulAway Pro for reliable, efficient, and eco-friendly couch and sofa removal services in Cincinnati.
                </p>

                <div className="bg-brand-lightBlue rounded-lg p-6 mb-8">
                  <h2 className="text-2xl font-bold text-brand-darkBlue mb-4">Why Choose Our Couch Removal Service?</h2>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                      <span>Safe removal without damage to your home</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                      <span>Donation to local Cincinnati charities when possible</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                      <span>Complete cleanup after furniture removal</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                      <span>Same-day service available</span>
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
            <h2 className="heading-lg mb-4 text-white">Ready to Remove Your Couch or Sofa?</h2>
            <p className="text-xl mb-8 text-gray-200">
              Professional furniture removal with same-day service available in Cincinnati
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

export default CouchSofaRemovalCincinnati;
