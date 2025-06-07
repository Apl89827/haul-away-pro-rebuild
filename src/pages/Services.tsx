
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ServicesHero from '@/components/services/ServicesHero';
import ServicesBanner from '@/components/services/ServicesBanner';
import ServiceCategories from '@/components/services/ServiceCategories';
import WhatWeDontTake from '@/components/services/WhatWeDontTake';
import ServiceProcess from '@/components/services/ServiceProcess';
import ServicesCtaSection from '@/components/services/ServicesCtaSection';
import BreadcrumbStructuredData from '@/components/seo/BreadcrumbStructuredData';
import { useMeta } from '@/hooks/useMeta';

const Services = () => {
  useMeta({
    title: "Junk Removal Services Cincinnati | Haul Away Pro",
    description: "Complete junk removal services in Cincinnati. We remove furniture, appliances, electronics, construction debris, and more. Eco-friendly disposal with transparent pricing.",
    keywords: "junk removal services Cincinnati, furniture removal, appliance disposal, electronics recycling, construction debris removal, estate cleanout",
    ogTitle: "Junk Removal Services Cincinnati | Haul Away Pro",
    ogDescription: "Complete junk removal services in Cincinnati. We remove furniture, appliances, electronics, construction debris, and more.",
    canonicalUrl: "https://haulawaypro.com/services"
  });

  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" }
  ];

  return (
    <>
      <BreadcrumbStructuredData items={breadcrumbItems} />
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
