
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ServiceAreasHero from '@/components/service-areas/ServiceAreasHero';
import ServiceAreasList from '@/components/service-areas/ServiceAreasList';
import ServiceAreasMap from '@/components/service-areas/ServiceAreasMap';
import ServiceAreasCtaSection from '@/components/service-areas/ServiceAreasCtaSection';

const ServiceAreas = () => {
  return (
    <>
      <Header />
      <main>
        <ServiceAreasHero />
        <ServiceAreasList />
        <ServiceAreasMap />
        <ServiceAreasCtaSection />
      </main>
      <Footer />
    </>
  );
};

export default ServiceAreas;
