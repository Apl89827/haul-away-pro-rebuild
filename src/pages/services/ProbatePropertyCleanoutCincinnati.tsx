
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { CheckCircle, Scale, FileText, Phone } from 'lucide-react';
import { useMeta } from '@/hooks/useMeta';

const ProbatePropertyCleanoutCincinnati = () => {
  useMeta({
    title: "Probate Property Cleanout Cincinnati | HaulAway Pro",
    description: "Professional probate property cleanout services in Cincinnati. Legal compliance, court documentation, attorney coordination, and timeline management for probate proceedings.",
    keywords: "probate property cleanout Cincinnati, probate estate clearing Cincinnati, court ordered cleanout Cincinnati, probate services Cincinnati, estate probate clearing Cincinnati",
    canonicalUrl: "https://haulawaypro.netlify.app/probate-property-cleanout-cincinnati"
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
                Probate Property Cleanout Services in Cincinnati
              </h1>
              <p className="text-xl mb-8 leading-relaxed text-gray-100">
                Specialized probate property cleanout services in Cincinnati. Legal compliance, detailed documentation, and coordination with attorneys and court administrators.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/booking" className="btn-primary bg-brand-green hover:bg-green-600">
                  Schedule Legal Consultation
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
                  HaulAway Pro specializes in probate property cleanouts throughout Cincinnati, providing services that meet the specific legal requirements and documentation needs of probate proceedings. We understand that probate cleanouts operate under court supervision and must comply with legal timelines, inventory requirements, and asset preservation protocols. Our team works closely with probate attorneys, court administrators, and family members to ensure that all property clearing activities support the legal process while respecting the interests of all beneficiaries and stakeholders involved in the estate proceedings.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Our probate cleanout process begins with coordination with the estate attorney and court-appointed executor to understand specific legal requirements, timeline constraints, and asset preservation needs. We provide detailed inventories of all items removed from the property, including photographs and descriptions that can support court documentation requirements. Our team identifies potentially valuable items that may require professional appraisal, important documents that need preservation, and personal effects that may have sentimental or monetary value to beneficiaries. We maintain clear chain-of-custody documentation for all removed items and can coordinate storage for items requiring legal review or beneficiary decision-making.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  We work within the probate timeline requirements while ensuring thorough property clearing that meets legal standards. Our service includes coordination with court-appointed appraisers for valuable items, secure handling of important documents and financial records, proper notification procedures for beneficiaries regarding item disposition, and detailed reporting that supports probate proceedings. We understand the complexity of probate law in Ohio and ensure our cleanout procedures comply with local court requirements and state regulations governing estate administration.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Our probate property cleanout service includes legal compliance planning, detailed inventory documentation, coordination with probate attorneys and court officials, secure handling of valuable and important items, transparent communication with all beneficiaries, and comprehensive reporting for court proceedings. We provide time-stamped documentation, photographic evidence, and detailed disposition records that support the probate process. Our goal is to ensure that property clearing activities enhance rather than complicate the legal proceedings while treating all parties with respect and professionalism throughout the process.
                </p>

                <div className="bg-brand-lightBlue rounded-lg p-6 mb-8">
                  <h2 className="text-2xl font-bold text-brand-darkBlue mb-4">Probate Cleanout Legal Compliance</h2>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                      <span>Detailed inventory documentation for court records</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                      <span>Coordination with probate attorneys and executors</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                      <span>Secure handling of valuable items and documents</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                      <span>Timeline compliance with court requirements</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                      <span>Beneficiary notification and communication</span>
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
            <h2 className="heading-lg mb-4 text-white">Need Probate Property Cleanout Services?</h2>
            <p className="text-xl mb-8 text-gray-200">
              Legal-compliant probate cleanouts with detailed documentation in Cincinnati
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/booking" className="btn-primary bg-brand-green hover:bg-green-600">
                Schedule Legal Consultation
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

export default ProbatePropertyCleanoutCincinnati;
