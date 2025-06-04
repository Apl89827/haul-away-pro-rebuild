
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HowItWorksHero from '@/components/how-it-works/HowItWorksHero';
import ProcessSteps from '@/components/how-it-works/ProcessSteps';
import RepurposeSection from '@/components/how-it-works/RepurposeSection';
import WhyChooseUs from '@/components/how-it-works/WhyChooseUs';
import PricingPreview from '@/components/how-it-works/PricingPreview';
import HowItWorksCtaSection from '@/components/how-it-works/HowItWorksCtaSection';

const HowItWorks = () => {
  return (
    <>
      <Header />
      <main>
        <HowItWorksHero />
        <ProcessSteps />
        <RepurposeSection />
        <WhyChooseUs />
        <PricingPreview />
        <HowItWorksCtaSection />
      </main>
      <Footer />
    </>
  );
};

export default HowItWorks;
