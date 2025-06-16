
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { CheckCircle, Dumbbell, Phone } from 'lucide-react';
import { useMeta } from '@/hooks/useMeta';

const ExerciseEquipmentRemovalCincinnati = () => {
  useMeta({
    title: "Exercise Equipment Removal Cincinnati | HaulAway Pro",
    description: "Professional exercise equipment removal services in Cincinnati. We safely remove treadmills, ellipticals, weight machines, and home gym equipment. Same-day service available.",
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
                Professional exercise equipment removal services throughout Cincinnati. We safely remove treadmills, ellipticals, weight machines, and complete home gym setups with proper equipment and expertise.
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
                  HaulAway Pro specializes in professional exercise equipment removal services throughout Cincinnati, handling the unique challenges that come with removing heavy, bulky fitness equipment. Our experienced team understands that exercise equipment often requires special handling due to its weight, size, and electronic components. We use proper lifting equipment, dollies, and protective materials to safely remove fitness equipment from basements, home gyms, and upper floors without causing damage to your property.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Our exercise equipment removal service covers all types of fitness equipment including treadmills, elliptical machines, stationary bikes, rowing machines, weight benches, multi-station home gyms, free weights, and commercial-grade fitness equipment. Whether you're upgrading your home gym, moving to a new home, or simply reclaiming space, we handle both individual pieces and complete gym clearouts. Our team can disconnect and safely remove electronic equipment while properly disposing of any hazardous materials like batteries or hydraulic fluids.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Environmental responsibility is a priority in our exercise equipment removal process. We work with local Cincinnati fitness centers, community centers, and charitable organizations to donate functional equipment that can benefit others pursuing their fitness goals. Equipment in good working condition is often welcomed by schools, churches, and nonprofit organizations. For equipment that cannot be donated, we ensure responsible disposal through certified recycling facilities where metals, plastics, and electronic components are processed according to environmental guidelines.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Our Cincinnati exercise equipment removal service includes careful assessment of removal logistics, including measuring doorways and planning the safest extraction route. We provide transparent pricing based on the complexity of the removal and offer same-day service when possible. Our fully licensed and insured team is equipped with the specialized tools needed for heavy equipment removal and maintains the highest safety standards throughout the process. Trust HaulAway Pro for professional, safe, and environmentally responsible exercise equipment removal in Cincinnati.
                </p>

                <div className="bg-brand-lightBlue rounded-lg p-6 mb-8">
                  <h2 className="text-2xl font-bold text-brand-darkBlue mb-4">Why Choose Our Exercise Equipment Removal Service?</h2>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                      <span>Specialized equipment for heavy fitness machine removal</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                      <span>Donation to Cincinnati fitness centers and organizations</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                      <span>Safe removal from basements and upper floors</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                      <span>Complete home gym clearout services</span>
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
