
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { CheckCircle, Shield, Snowflake, Phone } from 'lucide-react';
import { useMeta } from '@/hooks/useMeta';

const RefrigeratorRemovalCincinnati = () => {
  useMeta({
    title: "Refrigerator Removal Cincinnati | HaulAway Pro",
    description: "Professional refrigerator removal services in Cincinnati. Safe disposal of all refrigeration units with EPA-compliant refrigerant recovery and eco-friendly recycling.",
    keywords: "refrigerator removal Cincinnati, fridge disposal Cincinnati, appliance removal Cincinnati, refrigerant recovery Cincinnati, refrigerator recycling Cincinnati",
    canonicalUrl: "https://haulawaypro.netlify.app/refrigerator-removal-cincinnati"
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
                Refrigerator Removal Services in Cincinnati
              </h1>
              <p className="text-xl mb-8 leading-relaxed text-gray-100">
                Professional refrigerator removal in Cincinnati with EPA-compliant refrigerant recovery. We safely remove and recycle all types of refrigeration units from your home.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/booking" className="btn-primary bg-brand-green hover:bg-green-600">
                  Schedule Refrigerator Removal
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
                  HaulAway Pro provides specialized refrigerator removal services throughout Cincinnati, handling safe disposal of all types of refrigeration units including full-size refrigerators, compact fridges, chest freezers, upright freezers, wine coolers, and commercial refrigeration equipment. Our certified technicians follow strict EPA guidelines for proper refrigerant recovery and disposal, ensuring environmentally responsible handling of cooling systems. We use specialized equipment to safely remove refrigerators from kitchens, basements, garages, and tight spaces without damaging floors, walls, or doorways. Our experienced team understands the unique challenges of refrigerator removal including weight distribution, door clearances, and utility disconnection requirements.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Our refrigerator removal process begins with thorough assessment of the unit and removal pathway to ensure safe extraction. We safely disconnect electrical connections and verify that refrigerant systems are properly sealed before beginning removal. Our team uses specialized moving equipment including appliance dollies, furniture pads, and protective materials to prevent damage during transport. We carefully navigate stairs, narrow hallways, and doorways that make refrigerator removal challenging. For units in basements or upper floors, we coordinate logistics to ensure safe removal without property damage. Our service includes cleanup after removal, leaving your space ready for new appliances or alternative use.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  We prioritize environmental responsibility by partnering with certified refrigerant recovery facilities that properly process cooling systems according to EPA regulations. Refrigerant gases are safely recovered and processed to prevent environmental damage, while valuable metals including steel, copper, and aluminum are directed to recycling facilities. We evaluate working refrigerators for donation opportunities to local Cincinnati charities and community organizations, ensuring functional units find new homes rather than immediate disposal. Our commitment to sustainable practices helps reduce landfill waste while supporting circular economy principles in appliance lifecycle management.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Our refrigerator removal service includes complete assessment and preparation, safe electrical disconnection, EPA-compliant refrigerant handling, careful removal from any location, transportation in specialized vehicles, and proper disposal or donation coordination. We handle refrigerators of all brands, sizes, and ages, from vintage units to modern energy-efficient models. Whether you're upgrading to a new refrigerator, clearing out rental properties, or dealing with appliance failure, our professional removal service ensures safe and responsible disposal. We coordinate timing with appliance deliveries and home renovation projects to provide seamless service that fits your schedule.
                </p>

                <div className="bg-brand-lightBlue rounded-lg p-6 mb-8">
                  <h2 className="text-2xl font-bold text-brand-darkBlue mb-4">Refrigerator Types We Remove</h2>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                      <span>Full-size refrigerators (all brands)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                      <span>Compact and mini fridges</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                      <span>Chest and upright freezers</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                      <span>Wine coolers and beverage centers</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                      <span>Commercial refrigeration units</span>
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
            <h2 className="heading-lg mb-4 text-white">Need Refrigerator Removal?</h2>
            <p className="text-xl mb-8 text-gray-200">
              EPA-compliant refrigerator disposal with same-day service available in Cincinnati
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

export default RefrigeratorRemovalCincinnati;
