
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { CheckCircle, Dumbbell, Phone } from 'lucide-react';
import { useMeta } from '@/hooks/useMeta';

const ExerciseEquipmentRemovalCincinnati = () => {
  useMeta({
    title: "Exercise Equipment Removal Cincinnati | HaulAway Pro",
    description: "Professional exercise equipment removal services in Cincinnati. We remove treadmills, weight machines, home gyms, and all fitness equipment. Same-day service available.",
    keywords: "exercise equipment removal Cincinnati, treadmill removal Cincinnati, home gym removal Cincinnati, fitness equipment disposal Cincinnati",
    canonicalUrl: "https://haulawaypro.netlify.app/exercise-equipment-removal-cincinnati"
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
                Exercise Equipment Removal in Cincinnati
              </h1>
              <p className="text-xl mb-8 leading-relaxed text-gray-100">
                Professional exercise equipment removal services throughout Cincinnati. We safely remove treadmills, weight machines, home gyms, and all types of fitness equipment with specialized handling and eco-friendly disposal.
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
                  HaulAway Pro specializes in professional exercise equipment removal services throughout Cincinnati, handling the unique challenges that come with removing heavy, bulky fitness equipment from homes and businesses. Our experienced team understands that exercise equipment often requires disassembly and special handling techniques due to weight, size, and mechanical complexity. We use proper lifting equipment, dollies, and protective materials to safely remove fitness equipment from basements, spare bedrooms, garages, and home gym spaces without damaging floors, walls, or stairways.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Our exercise equipment removal service covers all types of fitness equipment including treadmills, elliptical machines, stationary bikes, rowing machines, weight machines, multi-station home gyms, free weights, benches, and complete home gym setups. Whether you're upgrading equipment, moving to a smaller space, dealing with broken machines, or clearing out a commercial gym, we handle equipment of all sizes and complexity levels. Our team can carefully disassemble multi-piece equipment and safely navigate challenging removal situations common with heavy fitness equipment.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Environmental responsibility and community benefit guide our exercise equipment disposal process. We evaluate all equipment for donation opportunities to local Cincinnati schools, community centers, youth organizations, and fitness programs that can benefit from quality exercise equipment. Working fitness equipment can provide years of use for community programs promoting health and wellness. For equipment that cannot be donated due to age or condition, we ensure responsible disposal through certified facilities where materials like steel, aluminum, and electronic components are properly recycled.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Our Cincinnati exercise equipment removal service includes pre-removal assessment, careful disassembly when needed, safe removal using appropriate equipment, and complete cleanup of your space. We provide transparent pricing with detailed estimates that account for equipment complexity and access challenges. Our fully licensed and insured team prioritizes safety throughout the removal process due to the substantial weight and size of most fitness equipment. Trust HaulAway Pro for professional, safe, and environmentally responsible exercise equipment removal services in Cincinnati.
                </p>

                <div className="bg-brand-lightBlue rounded-lg p-6 mb-8">
                  <h2 className="text-2xl font-bold text-brand-darkBlue mb-4">Exercise Equipment We Remove</h2>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                      <span>Treadmills and cardio machines</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                      <span>Weight machines and multi-station gyms</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                      <span>Free weights and exercise benches</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                      <span>Complete home gym setups</span>
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
            <h2 className="heading-lg mb-4 text-white">Need Exercise Equipment Removed?</h2>
            <p className="text-xl mb-8 text-gray-200">
              Professional fitness equipment removal with specialized handling in Cincinnati
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

export default ExerciseEquipmentRemovalCincinnati;
