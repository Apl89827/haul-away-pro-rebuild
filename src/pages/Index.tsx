
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

const Index = () => {
  return (
    <>
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
