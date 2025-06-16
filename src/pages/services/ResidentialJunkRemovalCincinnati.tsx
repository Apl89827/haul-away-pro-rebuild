
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { CheckCircle, Home, Phone } from 'lucide-react';
import { useMeta } from '@/hooks/useMeta';

const ResidentialJunkRemovalCincinnati = () => {
  useMeta({
    title: "Residential Junk Removal Cincinnati | HaulAway Pro",
    description: "Professional residential junk removal services in Cincinnati. We handle furniture, appliances, electronics, and all household items. Same-day service available.",
    keywords: "residential junk removal Cincinnati, house cleanout Cincinnati, furniture removal Cincinnati, appliance disposal Cincinnati",
    canonicalUrl: "https://haulawaypro.netlify.app/residential-junk-removal-cincinnati"
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
                Residential Junk Removal in Cincinnati
              </h1>
              <p className="text-xl mb-8 leading-relaxed text-gray-100">
                HaulAway Pro provides comprehensive residential junk removal services throughout Cincinnati and surrounding areas. From single-item pickup to complete home cleanouts, we make decluttering easy and affordable.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/booking" className="btn-primary bg-brand-green hover:bg-green-600">
                  Get Free Estimate
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
              
              {/* Furniture Removal */}
              <div className="bg-gray-50 rounded-lg p-8">
                <h2 className="heading-lg mb-4 text-brand-darkBlue">Furniture Removal Cincinnati</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Our furniture removal service in Cincinnati handles all types of household furniture, from single pieces to complete room sets. We carefully remove <a href="/couch-sofa-removal-cincinnati" className="text-brand-blue hover:text-brand-darkBlue font-semibold">couches and sofas</a>, chairs, dining tables, dressers, beds, and entertainment centers from your home without causing damage to walls, floors, or doorways. Our experienced team uses proper lifting techniques and protective equipment to ensure safe removal. We can navigate tight spaces, stairs, and narrow hallways that make furniture removal challenging. Whether you're moving, downsizing, or simply replacing old furniture, we make the process hassle-free. All removed furniture is evaluated for donation opportunities to local Cincinnati charities, ensuring usable items find new homes rather than ending up in landfills.
                </p>
              </div>

              {/* Appliance Disposal */}
              <div className="bg-gray-50 rounded-lg p-8">
                <h2 className="heading-lg mb-4 text-brand-darkBlue">Appliance Disposal Cincinnati</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  HaulAway Pro specializes in safe appliance disposal throughout Cincinnati, handling everything from <a href="/refrigerator-disposal-cincinnati" className="text-brand-blue hover:text-brand-darkBlue font-semibold">refrigerators</a> and <a href="/washer-dryer-removal-cincinnati" className="text-brand-blue hover:text-brand-darkBlue font-semibold">washing machines</a> to dishwashers and water heaters. We follow all EPA guidelines for proper refrigerant recovery from cooling appliances and ensure hazardous materials are disposed of according to local regulations. Our team is equipped to handle large, heavy appliances that require special removal techniques. We coordinate with certified recycling facilities to ensure metal components are properly processed and reused. Whether you're upgrading your kitchen, replacing a broken appliance, or clearing out a rental property, we handle the entire removal process from disconnection to final disposal. Our service includes cleanup after removal, leaving your space ready for new appliances or other uses.
                </p>
              </div>

              {/* Electronics Removal */}
              <div className="bg-gray-50 rounded-lg p-8">
                <h2 className="heading-lg mb-4 text-brand-darkBlue">Electronics Removal Cincinnati</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Our electronics removal service in Cincinnati handles the responsible disposal of all electronic devices, from old <a href="/television-removal-cincinnati" className="text-brand-blue hover:text-brand-darkBlue font-semibold">televisions</a> and computers to printers and gaming systems. We understand the importance of proper e-waste recycling and partner with certified electronic recycling facilities to ensure valuable materials are recovered and hazardous components are safely processed. Our team carefully removes electronics of all sizes, including large entertainment systems and delicate computer equipment. We provide data destruction services for computers and hard drives to protect your personal information. Whether you're upgrading technology, clearing out an office, or dealing with accumulated electronic clutter, we ensure your old devices are handled responsibly. Our electronics removal service helps Cincinnati residents contribute to environmental sustainability while decluttering their homes.
                </p>
              </div>

              {/* Mattress Removal */}
              <div className="bg-gray-50 rounded-lg p-8">
                <h2 className="heading-lg mb-4 text-brand-darkBlue">Mattress Removal Cincinnati</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  HaulAway Pro provides professional <a href="/mattress-removal-cincinnati" className="text-brand-blue hover:text-brand-darkBlue font-semibold">mattress removal services</a> throughout Cincinnati, handling mattresses and box springs of all sizes. We understand that mattresses can be difficult to dispose of due to their size and materials, which is why we offer convenient pickup from bedrooms, including navigating stairs and narrow hallways. Our team uses protective coverings during removal to prevent contamination and damage to your home. We partner with local recycling facilities that specialize in mattress deconstruction, ensuring that steel springs, foam, and fabric components are properly separated and recycled. Whether you're replacing a single mattress or clearing out multiple bedrooms, we handle the entire process efficiently and hygienically. Our mattress removal service helps Cincinnati residents dispose of old sleep systems responsibly while maintaining cleanliness and convenience.
                </p>
              </div>

              {/* General Household Items */}
              <div className="bg-gray-50 rounded-lg p-8">
                <h2 className="heading-lg mb-4 text-brand-darkBlue">General Household Item Removal Cincinnati</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Our general household item removal service covers everything that doesn't fit into specific categories, making us your one-stop solution for residential cleanouts in Cincinnati. We remove boxes of miscellaneous items, old clothing, books, toys, kitchenware, decorations, and countless other household goods. Our team sorts through items to identify donation opportunities, ensuring usable goods reach local Cincinnati charities rather than landfills. We handle seasonal cleanouts, moving preparation, and decluttering projects of any size. Whether you're preparing for a move, organizing an estate, or simply need to clear accumulated items, we provide efficient removal services. Our comprehensive approach includes sorting, loading, transportation, and proper disposal or donation of all items, leaving your home clean and organized.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section bg-brand-darkBlue text-white">
          <div className="container-custom text-center">
            <h2 className="heading-lg mb-4 text-white">Ready to Declutter Your Cincinnati Home?</h2>
            <p className="text-xl mb-8 text-gray-200">
              Professional residential junk removal with same-day service available
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/booking" className="btn-primary bg-brand-green hover:bg-green-600">
                Schedule Pickup Online
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

export default ResidentialJunkRemovalCincinnati;
