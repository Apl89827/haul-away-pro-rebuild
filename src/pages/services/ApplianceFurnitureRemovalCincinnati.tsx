
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Refrigerator, Sofa, Truck, Recycle } from 'lucide-react';
import { useMeta } from '@/hooks/useMeta';

const ApplianceFurnitureRemovalCincinnati = () => {
  useMeta({
    title: "Appliance & Furniture Removal Cincinnati | HaulAway Pro",
    description: "Professional appliance and furniture removal in Cincinnati. Refrigerators, washers, sofas, mattresses, and large item pickup with eco-friendly disposal.",
    keywords: "appliance removal Cincinnati, furniture removal Cincinnati, refrigerator disposal Cincinnati, mattress removal Cincinnati, large item pickup",
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
                HaulAway Pro specializes in safe, efficient removal of large appliances and furniture throughout Cincinnati. From single items to complete home cleanouts, we handle the heavy lifting.
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

        {/* Service Categories */}
        <section className="section bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto space-y-12">
              
              {/* Refrigerator Removal */}
              <div className="bg-gray-50 rounded-lg p-8">
                <h2 className="heading-lg mb-4 text-brand-darkBlue">Refrigerator Removal Cincinnati</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Our refrigerator removal service in Cincinnati handles safe disposal of all types of refrigeration units including full-size refrigerators, compact fridges, freezers, and wine coolers. We follow strict EPA guidelines for proper refrigerant recovery and disposal, ensuring environmentally responsible handling of cooling systems. Our experienced team uses specialized equipment to safely remove refrigerators from kitchens, basements, and tight spaces without damaging floors, walls, or doorways. We coordinate with certified recycling facilities that properly process refrigeration units, recovering valuable metals and safely disposing of hazardous materials. Our service includes disconnection, careful removal, transportation, and proper disposal. Whether you're upgrading to a new refrigerator or clearing out old units, we handle the entire process professionally and efficiently. We also coordinate donation opportunities for working refrigerators to local Cincinnati charities and community organizations.
                </p>
                <a href="/refrigerator-removal-cincinnati" className="text-brand-blue hover:text-brand-darkBlue font-semibold">
                  Learn More About Refrigerator Removal →
                </a>
              </div>

              {/* Washer Dryer Removal */}
              <div className="bg-gray-50 rounded-lg p-8">
                <h2 className="heading-lg mb-4 text-brand-darkBlue">Washer & Dryer Removal Cincinnati</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  HaulAway Pro provides professional washer and dryer removal services throughout Cincinnati, handling both individual units and complete laundry sets. Our team safely disconnects water, electrical, and gas connections before removal, preventing damage to your home's utility systems. We use proper lifting techniques and equipment to remove washers and dryers from laundry rooms, basements, and second-floor locations. Our service includes careful navigation of stairs, narrow hallways, and tight spaces that make appliance removal challenging. We coordinate with metal recycling facilities to ensure that valuable steel and other components are properly processed rather than discarded in landfills. Working washers and dryers are evaluated for donation opportunities to local Cincinnati families and charitable organizations. Our comprehensive service includes cleanup after removal, ensuring your laundry area is ready for new appliances or alternative use.
                </p>
                <a href="/washer-dryer-removal-cincinnati" className="text-brand-blue hover:text-brand-darkBlue font-semibold">
                  Learn More About Washer & Dryer Removal →
                </a>
              </div>

              {/* Sofa Removal */}
              <div className="bg-gray-50 rounded-lg p-8">
                <h2 className="heading-lg mb-4 text-brand-darkBlue">Sofa & Couch Removal Cincinnati</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Our sofa and couch removal service in Cincinnati handles furniture of all sizes, from small loveseats to large sectional sofas. We carefully remove upholstered furniture from living rooms, family rooms, and other spaces without damaging walls, floors, or doorways. Our experienced team uses furniture pads and protective equipment to prevent scratches and dents during removal. We can disassemble large sectional sofas when necessary to navigate narrow spaces and stairs. Our service includes evaluation of furniture condition for donation opportunities to local Cincinnati charities, ensuring usable pieces find new homes rather than ending up in landfills. We coordinate with upholstery recycling facilities that can process fabric and foam components separately from wood frames. Whether you're redecorating, moving, or dealing with damaged furniture, our professional removal service handles the heavy lifting and logistics while maintaining respect for your property.
                </p>
                <a href="/couch-sofa-removal-cincinnati" className="text-brand-blue hover:text-brand-darkBlue font-semibold">
                  Learn More About Sofa & Couch Removal →
                </a>
              </div>

              {/* Mattress Removal */}
              <div className="bg-gray-50 rounded-lg p-8">
                <h2 className="heading-lg mb-4 text-brand-darkBlue">Mattress & Box Spring Removal Cincinnati</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  HaulAway Pro specializes in mattress and box spring removal throughout Cincinnati, handling sleep sets of all sizes from twin to California king. We understand the challenges of mattress disposal and provide hygienic, professional removal services. Our team uses protective coverings during removal to prevent contamination and maintains cleanliness throughout the process. We can remove mattresses from bedrooms on any floor, including navigating narrow stairways and tight spaces. Our service includes coordination with specialized mattress recycling facilities that deconstruct sleep sets to recover steel springs, foam, and fabric components. We follow proper sanitation protocols and ensure that all materials are handled hygienically and disposed of responsibly. Whether you're upgrading to a new mattress or clearing out multiple bedrooms, our professional removal service provides convenient, clean, and environmentally responsible disposal of old sleep systems.
                </p>
                <a href="/mattress-box-spring-removal-cincinnati" className="text-brand-blue hover:text-brand-darkBlue font-semibold">
                  Learn More About Mattress & Box Spring Removal →
                </a>
              </div>

              {/* Large Furniture Removal */}
              <div className="bg-gray-50 rounded-lg p-8">
                <h2 className="heading-lg mb-4 text-brand-darkBlue">Large Furniture Removal Cincinnati</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Our large furniture removal service in Cincinnati handles oversized and heavy furniture pieces including dining tables, china cabinets, entertainment centers, and bedroom sets. We specialize in furniture that requires special handling due to size, weight, or value. Our experienced team uses proper lifting equipment and techniques to safely remove large pieces without injury or property damage. We carefully plan removal routes and may disassemble furniture when necessary to navigate stairs, doorways, and tight spaces. Our service includes protective measures to prevent damage to floors, walls, and other furniture during removal. We coordinate with local Cincinnati charities and furniture donation centers to ensure usable pieces are given new life rather than discarded. Our comprehensive service includes careful handling, transportation, and proper disposal or donation of all large furniture items, making the process convenient and stress-free for homeowners.
                </p>
                <a href="/large-furniture-removal-cincinnati" className="text-brand-blue hover:text-brand-darkBlue font-semibold">
                  Learn More About Large Furniture Removal →
                </a>
              </div>

            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section bg-brand-darkBlue text-white">
          <div className="container-custom text-center">
            <h2 className="heading-lg mb-4 text-white">Need Appliance or Furniture Removal in Cincinnati?</h2>
            <p className="text-xl mb-8 text-gray-200">
              Professional removal service for large items with same-day pickup available
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
