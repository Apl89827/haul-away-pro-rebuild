
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/home/HeroSection';
import TrustBar from '@/components/home/TrustBar';
import ProcessSection from '@/components/home/ProcessSection';
import ServicesSection from '@/components/home/ServicesSection';
import WhyChooseSection from '@/components/home/WhyChooseSection';
import ServiceAreasSection from '@/components/home/ServiceAreasSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import FaqSection from '@/components/home/FaqSection';
import CtaSection from '@/components/home/CtaSection';
import BusinessStructuredData from '@/components/seo/BusinessStructuredData';
import { useMeta } from '@/hooks/useMeta';

const Index = () => {
  useMeta({
    title: "Haul Away Pro | Cincinnati's Top-Rated Junk Removal Service",
    description: "Fast, fair, and eco-friendly junk removal services in Greater Cincinnati. Same-day service available. Get your free estimate today for furniture, appliance, and electronics removal!",
    keywords: "junk removal Cincinnati, furniture removal, appliance removal, same day junk removal, eco-friendly disposal, Cincinnati waste removal",
    ogTitle: "Haul Away Pro | Cincinnati's Top-Rated Junk Removal Service",
    ogDescription: "Fast, fair, and eco-friendly junk removal services in Greater Cincinnati. Same-day service available. Get your free estimate today!",
    canonicalUrl: "https://haulawaypro.com/"
  });

  return (
    <>
      <BusinessStructuredData />
      <Header />
      <main>
        <HeroSection />
        <TrustBar />
        <ProcessSection />
        <ServicesSection />
        <WhyChooseSection />
        <ServiceAreasSection />
        <TestimonialsSection />
        <FaqSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
};

export default Index;
