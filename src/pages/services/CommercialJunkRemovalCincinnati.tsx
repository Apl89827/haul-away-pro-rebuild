
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Building, Clock, Shield, Recycle } from 'lucide-react';
import { useMeta } from '@/hooks/useMeta';

const CommercialJunkRemovalCincinnati = () => {
  useMeta({
    title: "Commercial Junk Removal Cincinnati | HaulAway Pro",
    description: "Professional commercial junk removal services in Cincinnati. Office furniture, retail fixtures, restaurant equipment, and construction debris removal.",
    keywords: "commercial junk removal Cincinnati, office cleanout Cincinnati, retail fixture removal Cincinnati, restaurant equipment disposal Cincinnati",
    canonicalUrl: "https://haulawaypro.netlify.app/commercial-junk-removal-cincinnati"
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
                Commercial Junk Removal in Cincinnati
              </h1>
              <p className="text-xl mb-8 leading-relaxed text-gray-100">
                HaulAway Pro provides reliable commercial junk removal services for Cincinnati businesses. From office cleanouts to retail renovations, we minimize disruption while maximizing efficiency.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/booking" className="btn-primary bg-brand-green hover:bg-green-600">
                  Get Commercial Quote
                </a>
                <a href="tel:5137128077" className="bg-white text-brand-blue font-semibold py-3 px-6 rounded-md hover:bg-gray-100 transition-colors">
                  Call (513) 712-8077
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Service Categories */}
        <section className="section bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto space-y-12">
              
              {/* Office Furniture Removal */}
              <div className="bg-gray-50 rounded-lg p-8">
                <h2 className="heading-lg mb-4 text-brand-darkBlue">Office Furniture Removal Cincinnati</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Our office furniture removal service in Cincinnati handles complete office cleanouts for businesses of all sizes. We remove desks, chairs, conference tables, filing cabinets, cubicle systems, and reception furniture with minimal disruption to your ongoing operations. Our team works efficiently during off-hours, weekends, or scheduled downtime to ensure your business continues running smoothly. We understand the unique challenges of office environments, including elevator access, narrow hallways, and the need for quiet, professional service. All removed office furniture is evaluated for donation to local Cincinnati nonprofits, schools, or community organizations. We provide detailed removal documentation for tax purposes and ensure that confidential materials are handled securely. Whether you're relocating, downsizing, or renovating your Cincinnati office space, we make the transition seamless and professional.
                </p>
                <a href="/office-furniture-removal-cincinnati" className="text-brand-blue hover:text-brand-darkBlue font-semibold">
                  Learn More About Office Furniture Removal →
                </a>
              </div>

              {/* Retail Fixture Removal */}
              <div className="bg-gray-50 rounded-lg p-8">
                <h2 className="heading-lg mb-4 text-brand-darkBlue">Retail Fixture Removal Cincinnati</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  HaulAway Pro specializes in retail fixture removal for Cincinnati businesses undergoing renovations, closures, or rebranding. We handle shelving units, display cases, checkout counters, clothing racks, mannequins, and specialized retail equipment. Our team understands the urgency often associated with retail transitions and can work within tight timelines to meet your reopening schedule. We carefully dismantle and remove fixtures while protecting store surfaces and remaining inventory. Many retail fixtures have resale value, and we can coordinate with liquidation companies or donate usable items to startup businesses in the Cincinnati area. Our service includes proper disposal of electronic components like POS systems, security equipment, and lighting fixtures. We work discreetly and professionally to maintain your business image during the transition process.
                </p>
                <a href="/retail-fixture-removal-cincinnati" className="text-brand-blue hover:text-brand-darkBlue font-semibold">
                  Learn More About Retail Fixture Removal →
                </a>
              </div>

              {/* Restaurant Equipment Disposal */}
              <div className="bg-gray-50 rounded-lg p-8">
                <h2 className="heading-lg mb-4 text-brand-darkBlue">Restaurant Equipment Disposal Cincinnati</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Our restaurant equipment disposal service in Cincinnati handles the unique challenges of commercial kitchen cleanouts. We remove industrial ovens, fryers, grills, refrigeration units, dishwashers, prep tables, and specialized food service equipment. Our team understands the weight and size constraints of commercial kitchen equipment and uses proper lifting equipment and techniques for safe removal. We coordinate with certified recycling facilities that specialize in commercial appliance disposal, ensuring proper handling of refrigerants and hazardous materials. Many restaurant equipment pieces retain significant value, and we can connect you with equipment brokers or facilitate donations to culinary schools in the Cincinnati area. Our service includes thorough cleaning after removal, ensuring your space is ready for new equipment installation or alternative use.
                </p>
                <a href="/restaurant-equipment-disposal-cincinnati" className="text-brand-blue hover:text-brand-darkBlue font-semibold">
                  Learn More About Restaurant Equipment Disposal →
                </a>
              </div>

              {/* Construction Debris Removal */}
              <div className="bg-gray-50 rounded-lg p-8">
                <h2 className="heading-lg mb-4 text-brand-darkBlue">Construction Debris Removal Cincinnati</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  HaulAway Pro provides construction debris removal services for Cincinnati commercial renovation and construction projects. We handle drywall, lumber, flooring materials, concrete, roofing materials, and general construction waste. Our team works closely with contractors and project managers to ensure debris removal doesn't interfere with construction timelines. We provide roll-off containers for ongoing projects or scheduled pickup services for completed phases. All construction materials are sorted for recycling opportunities, with wood, metal, and concrete sent to appropriate processing facilities in the Cincinnati area. We understand construction site safety requirements and ensure our team follows all necessary protocols. Our construction debris removal service helps keep your project site clean, safe, and compliant with local regulations while supporting sustainable building practices.
                </p>
                <a href="/construction-debris-removal-cincinnati" className="text-brand-blue hover:text-brand-darkBlue font-semibold">
                  Learn More About Construction Debris Removal →
                </a>
              </div>

              {/* Warehouse Cleanouts */}
              <div className="bg-gray-50 rounded-lg p-8">
                <h2 className="heading-lg mb-4 text-brand-darkBlue">Warehouse Cleanout Services Cincinnati</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Our warehouse cleanout services in Cincinnati handle large-scale commercial cleanouts for distribution centers, manufacturing facilities, and storage warehouses. We remove industrial equipment, obsolete inventory, packaging materials, and accumulated debris from years of operations. Our team has experience with the scale and complexity of warehouse environments, including high ceiling access, forklift coordination, and large volume removal projects. We work with your facility management to minimize disruption to ongoing operations and can schedule work during maintenance windows or shutdown periods. Many warehouse items have salvage value, and we coordinate with scrap dealers and liquidation companies to maximize recovery. Our comprehensive service includes sorting, documentation, and proper disposal of all materials while maintaining safety standards throughout the process.
                </p>
                <a href="/warehouse-cleanout-cincinnati" className="text-brand-blue hover:text-brand-darkBlue font-semibold">
                  Learn More About Warehouse Cleanout Services →
                </a>
              </div>

            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section bg-brand-darkBlue text-white">
          <div className="container-custom text-center">
            <h2 className="heading-lg mb-4 text-white">Need Commercial Junk Removal in Cincinnati?</h2>
            <p className="text-xl mb-8 text-gray-200">
              Professional commercial cleanouts with flexible scheduling and transparent pricing
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/booking" className="btn-primary bg-brand-green hover:bg-green-600">
                Request Commercial Quote
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

export default CommercialJunkRemovalCincinnati;
