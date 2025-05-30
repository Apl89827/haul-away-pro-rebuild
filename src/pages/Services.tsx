
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ServicesHero from '@/components/services/ServicesHero';
import ServiceCategories from '@/components/services/ServiceCategories';
import ServicesCtaSection from '@/components/services/ServicesCtaSection';
import WhatWeDontTake from '@/components/services/WhatWeDontTake';
import ServiceProcess from '@/components/services/ServiceProcess';

const Services = () => {
  return (
    <>
      <Header />
      <main>
        <ServicesHero />
        <ServiceCategories />
        <ServicesCtaSection />
        <WhatWeDontTake />
        <ServiceProcess />
      </main>
      <Footer />
    </>
  );
};

export default Services;
