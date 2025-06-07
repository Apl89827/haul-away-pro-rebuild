
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HowItWorksHero from '@/components/how-it-works/HowItWorksHero';
import ProcessSteps from '@/components/how-it-works/ProcessSteps';
import RepurposeSection from '@/components/how-it-works/RepurposeSection';
import WhyChooseUs from '@/components/how-it-works/WhyChooseUs';
import PricingPreview from '@/components/how-it-works/PricingPreview';
import HowItWorksCtaSection from '@/components/how-it-works/HowItWorksCtaSection';
import BreadcrumbStructuredData from '@/components/seo/BreadcrumbStructuredData';
import { useMeta } from '@/hooks/useMeta';

const HowItWorks = () => {
  useMeta({
    title: "How Junk Removal Works | Cincinnati Process | Haul Away Pro",
    description: "Learn how our junk removal process works in Cincinnati. From booking to cleanup, we handle everything with transparent pricing and eco-friendly disposal.",
    keywords: "how junk removal works, Cincinnati junk removal process, transparent pricing, eco-friendly disposal, same day service",
    ogTitle: "How Junk Removal Works | Cincinnati Process | Haul Away Pro", 
    ogDescription: "Learn how our junk removal process works in Cincinnati. From booking to cleanup, we handle everything with transparent pricing.",
    canonicalUrl: "https://haulawaypro.com/how-it-works"
  });

  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "How It Works", url: "/how-it-works" }
  ];

  return (
    <>
      <BreadcrumbStructuredData items={breadcrumbItems} />
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
