
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { CheckCircle, Heart, Users, Phone } from 'lucide-react';
import { useMeta } from '@/hooks/useMeta';

const DeceasedFamilyCleanoutCincinnati = () => {
  useMeta({
    title: "Deceased Family Member Cleanout Cincinnati | HaulAway Pro",
    description: "Compassionate deceased family member cleanout services in Cincinnati. Gentle handling of belongings, memorial donations, and grief-sensitive timing for families in mourning.",
    keywords: "deceased family cleanout Cincinnati, bereavement cleanout Cincinnati, family loss cleanout Cincinnati, memorial cleanout Cincinnati, grief support cleanout Cincinnati",
    canonicalUrl: "https://haulawaypro.netlify.app/deceased-family-cleanout-cincinnati"
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
                Deceased Family Member Cleanout Services in Cincinnati
              </h1>
              <p className="text-xl mb-8 leading-relaxed text-gray-100">
                Compassionate cleanout services for Cincinnati families dealing with the loss of a loved one. Gentle handling of belongings with memorial donations and grief-sensitive timing.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/booking" className="btn-primary bg-brand-green hover:bg-green-600">
                  Schedule Compassionate Consultation
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
                  HaulAway Pro provides compassionate cleanout services for Cincinnati families dealing with the loss of a loved one, understanding that sorting through a deceased family member's belongings is one of the most emotionally challenging tasks families face during grief. Our team approaches each project with the utmost sensitivity, respect, and patience, allowing families to work at their own pace and take the time needed to make thoughtful decisions about preserving memories while moving forward. We recognize that every item may hold special meaning and treat each belonging with care and reverence.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Our deceased family member cleanout service begins with a gentle consultation to understand family needs, timeline preferences, and any special considerations for handling specific items or areas of the home. We work collaboratively with family members, allowing time for review and decision-making without pressure or rushing. Our team carefully sorts through belongings, identifying items with potential sentimental value, important documents and family records, valuable pieces that may benefit the estate, and household goods suitable for memorial donations. We provide secure storage for items requiring family review and can coordinate extended timelines when families need additional time for difficult decisions.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  We take special care in coordinating memorial donations to local Cincinnati charities and community organizations, ensuring that your loved one's belongings continue to serve others in meaningful ways. Our donation partnerships include organizations that align with various interests and values, allowing families to choose causes that would have been important to their loved one. We provide detailed documentation of all donations for estate and tax purposes and can arrange for donation pickups to be made in memory of your family member when requested by the receiving organizations.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Our deceased family member cleanout service includes flexible scheduling that respects your grieving process, careful sorting with family involvement and review time, preservation of important documents and sentimental items, memorial donation coordination with local Cincinnati charities, gentle handling of all personal belongings, and thorough cleaning after item removal. We maintain clear communication throughout the process and provide ongoing support as families navigate this difficult transition. Our goal is to honor your loved one's memory while helping families take the necessary steps toward healing and moving forward.
                </p>

                <div className="bg-brand-lightBlue rounded-lg p-6 mb-8">
                  <h2 className="text-2xl font-bold text-brand-darkBlue mb-4">Compassionate Family Cleanout Services</h2>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                      <span>Grief-sensitive timing and pacing</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                      <span>Memorial donation coordination</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                      <span>Careful preservation of sentimental items</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                      <span>Family review time for important decisions</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                      <span>Respectful handling of all belongings</span>
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
            <h2 className="heading-lg mb-4 text-white">Need Compassionate Family Cleanout Services?</h2>
            <p className="text-xl mb-8 text-gray-200">
              Gentle, respectful cleanout services for families in mourning throughout Cincinnati
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/booking" className="btn-primary bg-brand-green hover:bg-green-600">
                Schedule Compassionate Consultation
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

export default DeceasedFamilyCleanoutCincinnati;
