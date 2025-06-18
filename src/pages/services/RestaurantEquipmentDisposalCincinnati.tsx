
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { CheckCircle, ChefHat, Phone } from 'lucide-react';
import { useMeta } from '@/hooks/useMeta';

const RestaurantEquipmentDisposalCincinnati = () => {
  useMeta({
    title: "Restaurant Equipment Disposal Cincinnati | HaulAway Pro",
    description: "Professional restaurant equipment disposal services in Cincinnati. We remove commercial kitchen equipment, refrigeration units, fryers, and food service equipment. Certified disposal and recycling.",
    keywords: "restaurant equipment disposal Cincinnati, commercial kitchen removal Cincinnati, fryer disposal Cincinnati, restaurant closure Cincinnati, food service equipment removal Cincinnati",
    canonicalUrl: "https://haulawaypro.netlify.app/restaurant-equipment-disposal-cincinnati"
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
                Restaurant Equipment Disposal in Cincinnati
              </h1>
              <p className="text-xl mb-8 leading-relaxed text-gray-100">
                Professional restaurant equipment disposal services throughout Cincinnati. We handle commercial kitchen cleanouts with specialized equipment removal and certified disposal of food service equipment.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/booking" className="btn-primary bg-brand-green hover:bg-green-600">
                  Schedule Kitchen Cleanout
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
                  HaulAway Pro provides specialized restaurant equipment disposal services throughout Cincinnati, handling the unique challenges of commercial kitchen cleanouts and food service equipment removal. Our experienced team understands the weight, size, and safety considerations involved with commercial kitchen equipment, including proper handling of refrigerants, gas connections, and electrical systems. We coordinate with restaurant owners, contractors, and equipment dealers to ensure safe and efficient removal that meets all regulatory requirements and industry standards.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Our restaurant equipment disposal service covers all types of commercial food service equipment including industrial ovens, commercial fryers, grills and griddles, refrigeration systems, walk-in coolers, dishwashing equipment, prep tables, commercial sinks, exhaust hoods, and specialized food processing equipment. Whether you're closing a Cincinnati restaurant, renovating your kitchen, or upgrading to new equipment, we handle the complete removal process with attention to safety and environmental compliance. Our team uses proper lifting equipment and techniques to safely remove heavy commercial equipment while protecting kitchen surfaces and building structures.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Environmental responsibility and regulatory compliance guide our restaurant equipment disposal process. We work with certified recycling facilities that specialize in commercial appliance disposal, ensuring proper handling of refrigerants, oils, and other potentially hazardous materials according to EPA regulations. Many restaurant equipment pieces retain significant value, and we can connect you with equipment brokers or facilitate donations to culinary schools and nonprofit organizations in the Cincinnati area. Our disposal process includes proper documentation for environmental compliance and asset tracking requirements.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Our Cincinnati restaurant equipment disposal service includes comprehensive safety assessment, proper disconnection of utilities, specialized equipment removal, and thorough kitchen cleanup after pickup. We provide detailed documentation for equipment disposal tracking and can coordinate with equipment appraisers when items have resale value. Our fully licensed and insured team follows all safety protocols and maintains food service industry standards throughout the removal process. Trust HaulAway Pro for safe, compliant, and environmentally responsible restaurant equipment disposal services in Cincinnati.
                </p>

                <div className="bg-brand-lightBlue rounded-lg p-6 mb-8">
                  <h2 className="text-2xl font-bold text-brand-darkBlue mb-4">Restaurant Equipment We Remove</h2>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                      <span>Commercial ovens and fryers</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                      <span>Refrigeration and freezer units</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                      <span>Dishwashing and prep equipment</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                      <span>Grills, griddles, and cooking equipment</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                      <span>Exhaust hoods and ventilation systems</span>
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
            <h2 className="heading-lg mb-4 text-white">Need Restaurant Equipment Removal?</h2>
            <p className="text-xl mb-8 text-gray-200">
              Professional kitchen equipment disposal with certified handling in Cincinnati
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/booking" className="btn-primary bg-brand-green hover:bg-green-600">
                Get Kitchen Cleanout Quote
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

export default RestaurantEquipmentDisposalCincinnati;
