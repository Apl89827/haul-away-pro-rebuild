import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { CheckCircle, Shield, Home, Phone } from 'lucide-react';
import { useMeta } from '@/hooks/useMeta';

const ApplianceFurnitureRemovalCincinnati = () => {
  useMeta({
    title: "Appliance & Furniture Removal Cincinnati | HaulAway Pro",
    description: "Professional appliance and furniture removal services in Cincinnati. We remove refrigerators, washers, dryers, sofas, mattresses, and more. Eco-friendly disposal.",
    keywords: "appliance removal Cincinnati, furniture removal Cincinnati, refrigerator disposal Cincinnati, washer dryer removal Cincinnati, sofa removal Cincinnati, mattress disposal Cincinnati",
    canonicalUrl: "https://haulawaypro.netlify.app/appliance-furniture-removal-cincinnati"
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
                Appliance & Furniture Removal in Cincinnati
              </h1>
              <p className="text-xl mb-8 leading-relaxed text-gray-100">
                Professional appliance and furniture removal services in Cincinnati. We handle everything from refrigerators to sofas with eco-friendly disposal methods.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/booking" className="btn-primary bg-brand-green hover:bg-green-600">
                  Schedule Appliance & Furniture Removal
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
                  HaulAway Pro specializes in appliance and furniture removal throughout Cincinnati, providing comprehensive services for homes, apartments, and commercial properties. We understand the challenges of removing large, bulky items, and our experienced team is equipped to handle everything from refrigerators and washing machines to sofas and mattresses. Our goal is to make the removal process as easy and stress-free as possible for our clients, with transparent pricing and reliable service.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Our appliance removal services include the safe and responsible disposal of refrigerators, freezers, washers, dryers, ovens, stoves, dishwashers, and water heaters. We adhere to all EPA guidelines for refrigerant recovery and ensure that appliances are recycled whenever possible. Our furniture removal services cover sofas, chairs, tables, beds, dressers, and other household furnishings. We carefully remove items from your property, taking care to protect your walls, floors, and doorways.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  We prioritize eco-friendly disposal methods, working with local recycling centers and donation facilities to minimize landfill waste. Appliances are processed to recover valuable metals and components, while usable furniture is donated to local charities and community organizations. Our commitment to sustainability ensures that your unwanted items are disposed of in an environmentally responsible manner.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Our appliance and furniture removal service includes on-site assessment, item removal, loading, transportation, and disposal or donation coordination. We handle single-item pickups as well as full house cleanouts, providing flexible scheduling to meet your needs. Whether you're upgrading your appliances, redecorating your home, or managing an estate cleanout, our professional removal service ensures a hassle-free experience.
                </p>

                <div className="bg-brand-lightBlue rounded-lg p-6 mb-8">
                  <h2 className="text-2xl font-bold text-brand-darkBlue mb-6">Our Appliance & Furniture Services</h2>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-semibold text-brand-darkBlue mb-3">Major Appliances</h3>
                      <ul className="space-y-2">
                        <li>
                          <a href="/refrigerator-removal-cincinnati" className="text-brand-blue hover:text-brand-darkBlue hover:underline">
                            Refrigerator & Freezer Removal
                          </a>
                        </li>
                        <li>
                          <a href="/washer-dryer-removal-cincinnati" className="text-brand-blue hover:text-brand-darkBlue hover:underline">
                            Washer & Dryer Removal
                          </a>
                        </li>
                        <li>
                          <a href="/dishwasher-removal-cincinnati" className="text-brand-blue hover:text-brand-darkBlue hover:underline">
                            Dishwasher Removal
                          </a>
                        </li>
                        <li>
                          <a href="/stove-oven-removal-cincinnati" className="text-brand-blue hover:text-brand-darkBlue hover:underline">
                            Stove & Oven Removal
                          </a>
                        </li>
                        <li>
                          <a href="/water-heater-removal-cincinnati" className="text-brand-blue hover:text-brand-darkBlue hover:underline">
                            Water Heater Removal
                          </a>
                        </li>
                        <li>
                          <a href="/air-conditioner-removal-cincinnati" className="text-brand-blue hover:text-brand-darkBlue hover:underline">
                            Air Conditioner Removal
                          </a>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold text-brand-darkBlue mb-3">Furniture Removal</h3>
                      <ul className="space-y-2">
                        <li>
                          <a href="/couch-sofa-removal-cincinnati" className="text-brand-blue hover:text-brand-darkBlue hover:underline">
                            Couch & Sofa Removal
                          </a>
                        </li>
                        <li>
                          <a href="/mattress-box-spring-removal-cincinnati" className="text-brand-blue hover:text-brand-darkBlue hover:underline">
                            Mattress & Box Spring Removal
                          </a>
                        </li>
                        <li>
                          <a href="/large-furniture-removal-cincinnati" className="text-brand-blue hover:text-brand-darkBlue hover:underline">
                            Large Furniture Removal
                          </a>
                        </li>
                        <li>
                          <a href="/desk-office-furniture-removal-cincinnati" className="text-brand-blue hover:text-brand-darkBlue hover:underline">
                            Desk & Office Furniture
                          </a>
                        </li>
                        <li>
                          <a href="/dining-room-set-removal-cincinnati" className="text-brand-blue hover:text-brand-darkBlue hover:underline">
                            Dining Room Set Removal
                          </a>
                        </li>
                        <li>
                          <a href="/exercise-equipment-removal-cincinnati" className="text-brand-blue hover:text-brand-darkBlue hover:underline">
                            Exercise Equipment Removal
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Our team is fully licensed and insured, providing you with peace of mind knowing that your property is protected during the removal process. We offer competitive pricing and free estimates, with no hidden fees or surprises. Contact us today to schedule your appliance and furniture removal service in Cincinnati.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section bg-brand-darkBlue text-white">
          <div className="container-custom text-center">
            <h2 className="heading-lg mb-4 text-white">Need Appliance & Furniture Removal?</h2>
            <p className="text-xl mb-8 text-gray-200">
              Eco-friendly appliance and furniture disposal with same-day service available in Cincinnati
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

export default ApplianceFurnitureRemovalCincinnati;
