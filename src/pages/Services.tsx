
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ServicesHero from '@/components/services/ServicesHero';
import ServicesBanner from '@/components/services/ServicesBanner';
import ServiceCategories from '@/components/services/ServiceCategories';
import WhatWeDontTake from '@/components/services/WhatWeDontTake';
import ServiceProcess from '@/components/services/ServiceProcess';
import ServicesCtaSection from '@/components/services/ServicesCtaSection';

const Services = () => {
  return (
    <>
      <Header />
      <main>
        <ServicesHero />
        <ServicesBanner />
        <ServiceCategories />
        <WhatWeDontTake />
        <ServiceProcess />
        <ServicesCtaSection />
      </main>
      <Footer />
    </>
  );
};

export default Services;
