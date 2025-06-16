
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { CheckCircle, Zap, Phone } from 'lucide-react';
import { useMeta } from '@/hooks/useMeta';

const WasherDryerRemovalCincinnati = () => {
  useMeta({
    title: "Washer & Dryer Removal Cincinnati | HaulAway Pro",
    description: "Professional washer and dryer removal services in Cincinnati. Safe disconnection and eco-friendly disposal of laundry appliances.",
    keywords: "washer removal Cincinnati, dryer removal Cincinnati, laundry appliance removal Cincinnati, appliance disposal Cincinnati",
    canonicalUrl: "https://haulawaypro.netlify.app/washer-dryer-removal-cincinnati"
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
                Washer & Dryer Removal in Cincinnati
              </h1>
              <p className="text-xl mb-8 leading-relaxed text-gray-100">
                Professional washer and dryer removal services throughout Cincinnati. Safe disconnection, careful removal, and eco-friendly disposal of all laundry appliances.
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
                  HaulAway Pro provides professional washer and dryer removal services throughout Cincinnati, handling all aspects of laundry appliance removal from safe disconnection to environmentally responsible disposal. Our experienced team understands the complexities involved in removing these heavy appliances, including proper disconnection of water lines, electrical connections, and gas lines when applicable. We ensure that all disconnections are performed safely and that your laundry room is left clean and ready for new appliances.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Our washer and dryer removal service covers all types of laundry appliances including top-loading and front-loading washers, electric and gas dryers, stackable units, and commercial laundry equipment. Whether you're upgrading to energy-efficient models, replacing broken appliances, or clearing out rental properties, we handle units of all sizes and configurations. Our team comes equipped with the proper tools and dollies to safely navigate stairs, tight spaces, and challenging removal situations.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Environmental responsibility is a key component of our appliance removal process. Washers and dryers contain valuable recyclable materials including steel, aluminum, copper wiring, and electronic components that can be recovered and reused. We partner with certified appliance recycling facilities that specialize in separating these materials for proper processing. This approach prevents appliances from ending up in landfills and ensures that valuable resources are returned to the manufacturing cycle.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Our Cincinnati washer and dryer removal service includes complete disconnection, safe removal from your home, and thorough cleanup of the laundry area. We provide transparent upfront pricing with no hidden fees and can often accommodate same-day service for urgent removals. Our fully licensed and insured team maintains professionalism throughout the process and treats your property with respect. Choose HaulAway Pro for reliable, safe, and eco-friendly washer and dryer removal services in Cincinnati.
                </p>

                <div className="bg-brand-lightBlue rounded-lg p-6 mb-8">
                  <h2 className="text-2xl font-bold text-brand-darkBlue mb-4">Our Washer & Dryer Removal Process</h2>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                      <span>Safe disconnection of water, electrical, and gas connections</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                      <span>Careful removal without damage to your home</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                      <span>Eco-friendly recycling of appliance components</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                      <span>Complete cleanup of laundry room area</span>
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
            <h2 className="heading-lg mb-4 text-white">Ready to Remove Your Washer & Dryer?</h2>
            <p className="text-xl mb-8 text-gray-200">
              Professional appliance removal with safe disconnection and eco-friendly disposal
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

export default WasherDryerRemovalCincinnati;
