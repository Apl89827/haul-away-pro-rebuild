
import React from 'react';
import NeighborhoodTemplate from '@/components/neighborhood/NeighborhoodTemplate';
import { useMeta } from '@/hooks/useMeta';

const Evanston = () => {
  useMeta({
    title: "Junk Removal Evanston Cincinnati | HaulAway Pro Professional Service",
    description: "Professional junk removal services in Evanston. Same-day pickup available. Serving family-friendly community with eco-friendly disposal.",
    keywords: "Evanston Cincinnati junk removal, family-friendly junk removal, Cincinnati neighborhood hauling",
    canonicalUrl: "https://haulawaypro.com/junk-removal-evanston"
  });

  return <NeighborhoodTemplate neighborhoodName="Evanston" />;
};

export default Evanston;
