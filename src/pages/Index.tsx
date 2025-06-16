
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/home/HeroSection';
import TrustBar from '@/components/home/TrustBar';
import ProcessSection from '@/components/home/ProcessSection';
import ServicesSection from '@/components/home/ServicesSection';
import ServiceCategoriesSection from '@/components/home/ServiceCategoriesSection';
import WhyChooseSection from '@/components/home/WhyChooseSection';
import ServiceAreasSection from '@/components/home/ServiceAreasSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import FaqSection from '@/components/home/FaqSection';
import CtaSection from '@/components/home/CtaSection';
import BusinessStructuredData from '@/components/seo/BusinessStructuredData';
import { useMeta } from '@/hooks/useMeta';

const Index = () => {
  useMeta({
    title: "Junk Removal Cincinnati | HaulAway Pro",
    description: "Your #1 choice for junk removal in Cincinnati. Fast, fair, and eco-friendly junk removal services. Same-day service available. Get your free estimate today!",
    keywords: "junk removal Cincinnati, furniture removal Cincinnati, appliance removal Cincinnati, same day junk removal, eco-friendly disposal, Cincinnati waste removal",
    ogTitle: "Junk Removal Cincinnati | HaulAway Pro",
    ogDescription: "Your #1 choice for junk removal in Cincinnati. Fast, fair, and eco-friendly junk removal services. Same-day service available!",
    canonicalUrl: "https://haulawaypro.netlify.app/"
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
        <ServiceCategoriesSection />
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
