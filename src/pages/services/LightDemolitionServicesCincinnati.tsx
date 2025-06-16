
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Hammer, HardHat, Truck, Shield } from 'lucide-react';
import { useMeta } from '@/hooks/useMeta';

const LightDemolitionServicesCincinnati = () => {
  useMeta({
    title: "Light Demolition Services Cincinnati | HaulAway Pro",
    description: "Professional light demolition services in Cincinnati. Interior walls, decks, sheds, and small structure demolition with debris removal included.",
    keywords: "light demolition Cincinnati, interior demolition Cincinnati, deck removal Cincinnati, shed demolition Cincinnati, small demolition services",
    canonicalUrl: "https://haulawaypro.netlify.app/light-demolition-services-cincinnati"
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
                Light Demolition Services in Cincinnati
              </h1>
              <p className="text-xl mb-8 leading-relaxed text-gray-100">
                HaulAway Pro provides professional light demolition services for Cincinnati residential and commercial properties. Safe, efficient demolition with complete debris removal included.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/booking" className="btn-primary bg-brand-green hover:bg-green-600">
                  Get Demolition Quote
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
              
              {/* Interior Wall Removal */}
              <div className="bg-gray-50 rounded-lg p-8">
                <h2 className="heading-lg mb-4 text-brand-darkBlue">Interior Wall Removal Cincinnati</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Our interior wall removal service in Cincinnati handles non-load-bearing wall demolition for residential and commercial properties. We carefully assess wall structure and utilities before beginning demolition to ensure safety and prevent damage to electrical, plumbing, or HVAC systems. Our experienced team uses proper demolition techniques to minimize dust and debris while protecting surrounding areas with plastic sheeting and protective barriers. We coordinate with contractors and homeowners to ensure wall removal aligns with renovation timelines and building permits. Our service includes proper disposal of drywall, insulation, and framing materials through certified recycling facilities in the Cincinnati area. We handle all aspects of the demolition process, from initial assessment and preparation to final cleanup and debris removal. Our interior wall removal service helps create open floor plans and modernize spaces while maintaining structural integrity and safety standards.
                </p>
                <a href="/interior-wall-removal-cincinnati" className="text-brand-blue hover:text-brand-darkBlue font-semibold">
                  Learn More About Interior Wall Removal →
                </a>
              </div>

              {/* Deck Demolition */}
              <div className="bg-gray-50 rounded-lg p-8">
                <h2 className="heading-lg mb-4 text-brand-darkBlue">Deck Demolition Cincinnati</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  HaulAway Pro specializes in deck demolition throughout Cincinnati, safely removing old, damaged, or unwanted decks from residential properties. Our team handles decks of all sizes and materials, including wood, composite, and multi-level structures. We use proper safety equipment and techniques to prevent injury and property damage during demolition. Our service includes careful disconnection of electrical components, removal of railings and support structures, and extraction of foundation elements. We sort demolition materials for recycling opportunities, with wood and metal components sent to appropriate processing facilities. Our deck demolition service includes complete site cleanup, leaving your yard ready for new construction or landscaping. We coordinate with homeowners to ensure minimal disruption to surrounding landscaping and property features. Whether you're replacing an old deck or reclaiming yard space, our professional demolition service ensures safe and efficient removal.
                </p>
                <a href="/deck-demolition-cincinnati" className="text-brand-blue hover:text-brand-darkBlue font-semibold">
                  Learn More About Deck Demolition →
                </a>
              </div>

              {/* Shed Removal */}
              <div className="bg-gray-50 rounded-lg p-8">
                <h2 className="heading-lg mb-4 text-brand-darkBlue">Shed Removal Cincinnati</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Our shed removal service in Cincinnati handles the complete demolition and removal of storage sheds, garden sheds, and small outbuildings from residential properties. We remove sheds of all materials including wood, metal, vinyl, and composite construction. Our team carefully disconnects any electrical connections and removes contents before beginning demolition. We use appropriate tools and techniques to dismantle structures safely while protecting surrounding landscaping and property features. Our service includes removal of shed foundations, concrete pads, and anchor systems when requested. All shed materials are sorted for recycling opportunities, with usable lumber and metal components sent to appropriate facilities. Our shed removal service includes complete site cleanup and can coordinate with landscaping professionals for yard restoration. Whether you're removing a damaged shed or clearing space for new construction, we handle the entire process efficiently and safely.
                </p>
                <a href="/shed-removal-cincinnati" className="text-brand-blue hover:text-brand-darkBlue font-semibold">
                  Learn More About Shed Removal →
                </a>
              </div>

              {/* Fence Removal */}
              <div className="bg-gray-50 rounded-lg p-8">
                <h2 className="heading-lg mb-4 text-brand-darkBlue">Fence Removal Cincinnati</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  HaulAway Pro provides comprehensive fence removal services throughout Cincinnati for residential and commercial properties. We remove all types of fencing including wood, chain link, vinyl, aluminum, and wrought iron fencing systems. Our team carefully removes fence panels, posts, and gate systems while protecting surrounding landscaping and property features. We use proper tools and techniques to extract fence posts and concrete footings without damaging sprinkler systems or underground utilities. Our service includes sorting materials for recycling opportunities, with metal components sent to scrap processing facilities and wood materials directed to appropriate recycling centers. We coordinate with property owners to ensure fence removal aligns with landscaping plans and property improvements. Our fence removal service includes complete site cleanup, leaving your property ready for new fencing installation or alternative landscaping. Whether you're replacing old fencing or opening up your property, we handle the entire removal process professionally and efficiently.
                </p>
                <a href="/fence-removal-cincinnati" className="text-brand-blue hover:text-brand-darkBlue font-semibold">
                  Learn More About Fence Removal →
                </a>
              </div>

              {/* Small Structure Demolition */}
              <div className="bg-gray-50 rounded-lg p-8">
                <h2 className="heading-lg mb-4 text-brand-darkBlue">Small Structure Demolition Cincinnati</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Our small structure demolition service in Cincinnati handles various small buildings and structures including gazebos, pergolas, small garages, and accessory buildings. We specialize in structures that don't require heavy equipment or extensive permitting but still need professional demolition expertise. Our team assesses each structure for utilities, structural considerations, and safety requirements before beginning demolition. We use appropriate tools and techniques to safely dismantle structures while minimizing impact on surrounding property. Our service includes proper disposal of all demolition materials through certified facilities and recycling centers in the Cincinnati area. We coordinate with property owners and contractors to ensure demolition timing aligns with construction schedules and permit requirements. Our small structure demolition service includes complete site preparation, debris removal, and cleanup. Whether you're clearing space for new construction or removing unwanted structures, we provide professional demolition services that prioritize safety and efficiency.
                </p>
                <a href="/small-structure-demolition-cincinnati" className="text-brand-blue hover:text-brand-darkBlue font-semibold">
                  Learn More About Small Structure Demolition →
                </a>
              </div>

            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section bg-brand-darkBlue text-white">
          <div className="container-custom text-center">
            <h2 className="heading-lg mb-4 text-white">Need Light Demolition Services in Cincinnati?</h2>
            <p className="text-xl mb-8 text-gray-200">
              Professional demolition services with complete debris removal and site cleanup
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/booking" className="btn-primary bg-brand-green hover:bg-green-600">
                Get Demolition Quote
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

export default LightDemolitionServicesCincinnati;
