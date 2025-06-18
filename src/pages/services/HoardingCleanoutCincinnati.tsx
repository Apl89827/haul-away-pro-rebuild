
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { CheckCircle, Shield, Heart, Phone } from 'lucide-react';
import { useMeta } from '@/hooks/useMeta';

const HoardingCleanoutCincinnati = () => {
  useMeta({
    title: "Hoarding Cleanout Cincinnati | HaulAway Pro",
    description: "Compassionate hoarding cleanout services in Cincinnati. Specialized safety protocols, mental health coordination, biohazard cleanup, and discrete professional service.",
    keywords: "hoarding cleanout Cincinnati, hoarding cleanup Cincinnati, hoarding disorder help Cincinnati, biohazard cleanup Cincinnati, hoarding remediation Cincinnati",
    canonicalUrl: "https://haulawaypro.netlify.app/hoarding-cleanout-cincinnati"
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
                Hoarding Cleanout Services in Cincinnati
              </h1>
              <p className="text-xl mb-8 leading-relaxed text-gray-100">
                Compassionate hoarding cleanout services in Cincinnati. Specialized safety protocols, mental health coordination, and discrete professional service for challenging situations.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/booking" className="btn-primary bg-brand-green hover:bg-green-600">
                  Schedule Confidential Consultation
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
                  HaulAway Pro provides specialized hoarding cleanout services throughout Cincinnati, approaching these challenging situations with compassion, understanding, and professional expertise. We recognize that hoarding situations require careful planning, specialized safety protocols, and sensitive handling of both the physical environment and the emotional well-being of all individuals involved. Our team is trained to work in cluttered and potentially hazardous environments while maintaining the highest standards of safety, discretion, and respect for personal dignity throughout the entire process.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Our hoarding cleanout approach begins with comprehensive safety assessment and planning, including evaluation of structural integrity, air quality concerns, potential biohazards, and access routes for safe removal. We coordinate with mental health professionals, social services, and family members to ensure that the cleanout process supports recovery and well-being rather than creating additional trauma. Our team carefully sorts through accumulated items, taking time to identify important documents, valuable possessions, and sentimental items that may be hidden within the clutter. We understand that every item may have meaning and approach the sorting process with patience and respect.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  We provide specialized biohazard cleanup when necessary, including proper handling of contaminated materials, sanitization of affected areas, and disposal according to health department regulations. Our team uses appropriate personal protective equipment and follows established protocols for dealing with potentially hazardous conditions. We work closely with Cincinnati health departments and social services to ensure compliance with all safety regulations and to connect individuals with appropriate support resources for ongoing recovery and maintenance.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Our hoarding cleanout service includes comprehensive safety assessment and planning, careful sorting to preserve important items, biohazard cleanup and sanitization, coordination with mental health professionals and social services, discrete and confidential service delivery, and deep cleaning and restoration after item removal. We maintain strict confidentiality throughout the process and work with families to develop maintenance plans that support long-term recovery. Our goal is to restore safe, livable conditions while treating all individuals with dignity and connecting them with resources for continued support and success.
                </p>

                <div className="bg-brand-lightBlue rounded-lg p-6 mb-8">
                  <h2 className="text-2xl font-bold text-brand-darkBlue mb-4">Specialized Hoarding Cleanout Services</h2>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                      <span>Safety assessment and hazard mitigation</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                      <span>Biohazard cleanup and sanitization</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                      <span>Careful sorting and item preservation</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                      <span>Mental health professional coordination</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                      <span>Discrete and confidential service</span>
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
            <h2 className="heading-lg mb-4 text-white">Need Hoarding Cleanout Services?</h2>
            <p className="text-xl mb-8 text-gray-200">
              Compassionate, professional hoarding cleanouts with specialized safety protocols in Cincinnati
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/booking" className="btn-primary bg-brand-green hover:bg-green-600">
                Schedule Confidential Consultation
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

export default HoardingCleanoutCincinnati;
