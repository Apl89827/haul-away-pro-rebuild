
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { CheckCircle, Square, Phone } from 'lucide-react';
import { useMeta } from '@/hooks/useMeta';

const CabinetRemovalCincinnati = () => {
  useMeta({
    title: "Cabinet Removal Cincinnati | HaulAway Pro",
    description: "Professional cabinet removal services in Cincinnati. We safely remove kitchen cabinets, bathroom vanities, and built-in storage units during renovations. Same-day service available.",
    keywords: "cabinet removal Cincinnati, kitchen cabinet removal Cincinnati, bathroom vanity removal Cincinnati, built-in storage removal Cincinnati",
    canonicalUrl: "https://haulawaypro.netlify.app/cabinet-removal-cincinnati"
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
                Cabinet Removal in Cincinnati
              </h1>
              <p className="text-xl mb-8 leading-relaxed text-gray-100">
                Professional cabinet removal services throughout Cincinnati. We expertly remove kitchen cabinets, bathroom vanities, and built-in storage during renovations with minimal damage to surrounding areas.
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
                  HaulAway Pro provides expert cabinet removal services throughout Cincinnati, specializing in the careful demolition and removal of kitchen cabinets, bathroom vanities, and built-in storage systems during renovation projects. Our experienced team understands the complexities of cabinet removal, including proper disconnection of plumbing and electrical components, safe removal of countertops, and preservation of wall and floor surfaces. We work efficiently to prepare your space for new installations while minimizing disruption to your daily routine.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Our cabinet removal service covers all types of built-in storage including kitchen cabinet systems, bathroom vanities, medicine cabinets, built-in entertainment centers, office built-ins, laundry room cabinets, garage storage systems, and custom millwork. Whether you're conducting a complete kitchen renovation, updating a bathroom, or reconfiguring storage spaces, we handle projects of all sizes with professional expertise. Our team coordinates with contractors when necessary and can work around renovation schedules to ensure smooth project progression.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Environmental responsibility is paramount in our cabinet removal process. We carefully assess cabinet quality and construction for potential reuse opportunities, working with local Cincinnati renovation contractors, habitat restoration programs, and DIY enthusiasts who can repurpose quality cabinetry. Solid wood cabinets and high-quality hardware are often donated to organizations that build affordable housing or assist families with home improvements. For cabinets that cannot be reused, we ensure proper disposal where materials like wood and metal hardware are recycled.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Our Cincinnati cabinet removal service includes complete debris cleanup and site preparation for your renovation project. We provide detailed estimates that account for any special considerations like lead paint or asbestos in older homes, coordinating with certified specialists when needed. Our fully licensed and insured team maintains safety standards throughout the removal process and can often accommodate urgent renovation timelines. Trust HaulAway Pro for professional, safe, and environmentally responsible cabinet removal services in Cincinnati.
                </p>

                <div className="bg-brand-lightBlue rounded-lg p-6 mb-8">
                  <h2 className="text-2xl font-bold text-brand-darkBlue mb-4">Why Choose Our Cabinet Removal Service?</h2>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                      <span>Expert removal with minimal wall and floor damage</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                      <span>Coordination with renovation contractors</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                      <span>Cabinet reuse and donation opportunities</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                      <span>Complete renovation site cleanup</span>
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
            <h2 className="heading-lg mb-4 text-white">Ready for Cabinet Removal?</h2>
            <p className="text-xl mb-8 text-gray-200">
              Professional cabinet removal for your renovation project in Cincinnati
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

export default CabinetRemovalCincinnati;
