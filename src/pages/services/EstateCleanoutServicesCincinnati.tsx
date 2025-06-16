
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Heart, Home, Users, Shield } from 'lucide-react';
import { useMeta } from '@/hooks/useMeta';

const EstateCleanoutServicesCincinnati = () => {
  useMeta({
    title: "Estate Cleanout Services Cincinnati | HaulAway Pro",
    description: "Compassionate estate cleanout services in Cincinnati. Professional, respectful handling of estate properties with full cleanout and donation coordination.",
    keywords: "estate cleanout Cincinnati, estate sale cleanup Cincinnati, probate cleanout Cincinnati, house cleanout services Cincinnati",
    canonicalUrl: "https://haulawaypro.netlify.app/estate-cleanout-services-cincinnati"
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
                Estate Cleanout Services in Cincinnati
              </h1>
              <p className="text-xl mb-8 leading-relaxed text-gray-100">
                HaulAway Pro provides compassionate estate cleanout services throughout Cincinnati during difficult times. We handle complete property clearing with respect, dignity, and professional care.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/booking" className="btn-primary bg-brand-green hover:bg-green-600">
                  Schedule Consultation
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
              
              {/* Full Estate Cleanouts */}
              <div className="bg-gray-50 rounded-lg p-8">
                <h2 className="heading-lg mb-4 text-brand-darkBlue">Full Estate Cleanouts Cincinnati</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Our full estate cleanout service in Cincinnati handles complete property clearing with the sensitivity and respect these situations require. We work closely with families, executors, and estate attorneys to ensure all personal belongings are handled appropriately. Our team carefully sorts through items, identifying valuable pieces for family review, donation opportunities for local Cincinnati charities, and items requiring special disposal. We understand the emotional difficulty of estate cleanouts and approach each project with compassion and professionalism. Our comprehensive service includes sorting, packing, loading, transportation, and proper disposal of all items. We coordinate with estate sale companies when requested and can facilitate the donation of furniture, clothing, and household goods to organizations serving the Cincinnati community. Our goal is to reduce stress during an already challenging time while ensuring the property is thoroughly cleaned and prepared for sale or transfer.
                </p>
                <a href="/full-estate-cleanout-cincinnati" className="text-brand-blue hover:text-brand-darkBlue font-semibold">
                  Learn More About Full Estate Cleanouts →
                </a>
              </div>

              {/* Probate Property Cleanouts */}
              <div className="bg-gray-50 rounded-lg p-8">
                <h2 className="heading-lg mb-4 text-brand-darkBlue">Probate Property Cleanouts Cincinnati</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  HaulAway Pro specializes in probate property cleanouts throughout Cincinnati, working with attorneys, court administrators, and family members to ensure legal requirements are met while clearing properties efficiently. We understand the specific timeline constraints and documentation needs associated with probate proceedings. Our team provides detailed inventories of removed items and can coordinate with appraisers for valuable pieces that require assessment. We maintain clear communication with all parties involved in the probate process and ensure that potentially valuable items are properly identified and preserved. Our probate cleanout service includes coordination with estate sale companies, antique dealers, and auction houses when beneficial to the estate. We handle all aspects of property clearing while maintaining the detailed records required for court proceedings. Our experience with probate requirements in Cincinnati ensures that cleanouts proceed smoothly and in compliance with legal obligations.
                </p>
                <a href="/probate-property-cleanout-cincinnati" className="text-brand-blue hover:text-brand-darkBlue font-semibold">
                  Learn More About Probate Property Cleanouts →
                </a>
              </div>

              {/* Hoarding Cleanouts */}
              <div className="bg-gray-50 rounded-lg p-8">
                <h2 className="heading-lg mb-4 text-brand-darkBlue">Hoarding Cleanouts Cincinnati</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Our hoarding cleanout service in Cincinnati addresses challenging situations with specialized expertise, compassion, and discretion. We understand that hoarding situations require careful planning, safety protocols, and sensitive handling. Our team is trained to work in cluttered environments while maintaining safety standards and treating all individuals with respect and dignity. We coordinate with mental health professionals, social services, and family members to ensure the cleanout process supports recovery and well-being. Our approach includes careful sorting to identify important documents, valuable items, and sentimental possessions that may be hidden within accumulated items. We provide biohazard cleanup when necessary and ensure proper disposal of contaminated materials. Our hoarding cleanout service includes deep cleaning after removal, helping to restore the property to livable condition. We maintain strict confidentiality and work discreetly to protect privacy throughout the process.
                </p>
                <a href="/hoarding-cleanout-cincinnati" className="text-brand-blue hover:text-brand-darkBlue font-semibold">
                  Learn More About Hoarding Cleanouts →
                </a>
              </div>

              {/* Deceased Family Member Cleanouts */}
              <div className="bg-gray-50 rounded-lg p-8">
                <h2 className="heading-lg mb-4 text-brand-darkBlue">Deceased Family Member Cleanouts Cincinnati</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  HaulAway Pro provides compassionate cleanout services for Cincinnati families dealing with the loss of a loved one. We understand that sorting through a deceased family member's belongings is emotionally challenging and approach each project with the utmost sensitivity and respect. Our team works at your pace, allowing time for family members to review items and make decisions about what to keep, donate, or dispose of. We identify potentially valuable items, important documents, and sentimental possessions that families may want to preserve. Our service includes coordinating donations to local Cincinnati charities in memory of your loved one, ensuring that usable items continue to benefit the community. We handle all aspects of the cleanout process, from careful sorting and packing to transportation and disposal. Our goal is to help families through this difficult time by handling the physical aspects of property clearing with professionalism and care.
                </p>
                <a href="/deceased-family-cleanout-cincinnati" className="text-brand-blue hover:text-brand-darkBlue font-semibold">
                  Learn More About Deceased Family Member Cleanouts →
                </a>
              </div>

              {/* Estate Sale Cleanup */}
              <div className="bg-gray-50 rounded-lg p-8">
                <h2 className="heading-lg mb-4 text-brand-darkBlue">Estate Sale Cleanup Cincinnati</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Our estate sale cleanup service in Cincinnati handles the final phase of estate sales, removing all remaining items and preparing properties for sale or transfer. We work closely with estate sale companies to coordinate timing and ensure smooth transitions between sale completion and property clearing. Our team removes all unsold items, including furniture, household goods, and miscellaneous items that didn't sell during the estate sale. We coordinate donations of remaining usable items to local Cincinnati charities and ensure proper disposal of items that cannot be donated or recycled. Our cleanup service includes thorough cleaning of the property after item removal, addressing any damage or wear that occurred during the sale process. We understand the importance of preparing properties for real estate showings and work to ensure spaces are clean, decluttered, and ready for potential buyers. Our comprehensive estate sale cleanup service helps families complete the estate process efficiently and professionally.
                </p>
                <a href="/estate-sale-cleanup-cincinnati" className="text-brand-blue hover:text-brand-darkBlue font-semibold">
                  Learn More About Estate Sale Cleanup →
                </a>
              </div>

            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section bg-brand-darkBlue text-white">
          <div className="container-custom text-center">
            <h2 className="heading-lg mb-4 text-white">Need Compassionate Estate Cleanout Services?</h2>
            <p className="text-xl mb-8 text-gray-200">
              Professional, respectful estate cleanouts throughout Cincinnati during difficult times
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/booking" className="btn-primary bg-brand-green hover:bg-green-600">
                Schedule Consultation
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

export default EstateCleanoutServicesCincinnati;
