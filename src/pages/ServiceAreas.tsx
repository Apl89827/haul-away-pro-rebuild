
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ServiceAreasHero from '@/components/service-areas/ServiceAreasHero';
import ServiceAreasList from '@/components/service-areas/ServiceAreasList';
import ServiceAreasMap from '@/components/service-areas/ServiceAreasMap';
import ServiceAreasCtaSection from '@/components/service-areas/ServiceAreasCtaSection';
import BreadcrumbStructuredData from '@/components/seo/BreadcrumbStructuredData';
import LocalBusinessSchema from '@/components/seo/LocalBusinessSchema';
import CanonicalUrl from '@/components/seo/CanonicalUrl';
import PreloadResources from '@/components/seo/PreloadResources';
import { useMeta } from '@/hooks/useMeta';

const ServiceAreas = () => {
  useMeta({
    title: "Cincinnati Junk Removal Service Areas | Haul Away Pro Coverage Map",
    description: "Comprehensive junk removal services throughout Greater Cincinnati and surrounding areas. See our complete service area coverage including all neighborhoods and nearby cities.",
    keywords: "Cincinnati junk removal service areas, Greater Cincinnati coverage, junk removal neighborhoods, service area map, local junk removal",
    ogTitle: "Cincinnati Junk Removal Service Areas | Haul Away Pro",
    ogDescription: "See our complete Cincinnati junk removal service area coverage including all neighborhoods and nearby cities.",
    canonicalUrl: "https://haulawaypro.com/service-areas",
    ogImage: "https://haulawaypro.com/lovable-uploads/f73755ea-bdd1-4f3e-b325-6447f9e68ea1.png"
  });

  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Service Areas", url: "/service-areas" }
  ];

  return (
    <>
      <PreloadResources />
      <CanonicalUrl url="/service-areas" />
      <BreadcrumbStructuredData items={breadcrumbItems} />
      <LocalBusinessSchema />
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
