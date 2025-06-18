
import React from 'react';
import NeighborhoodTemplate from '@/components/neighborhood/NeighborhoodTemplate';
import { useMeta } from '@/hooks/useMeta';

const PleasantRidge = () => {
  useMeta({
    title: "Junk Removal Pleasant Ridge Cincinnati | HaulAway Pro Professional Service",
    description: "Professional junk removal services in Pleasant Ridge. Same-day pickup available. Serving family-oriented neighborhood with eco-friendly disposal.",
    keywords: "Pleasant Ridge Cincinnati junk removal, family-oriented junk removal, Cincinnati neighborhood hauling",
    canonicalUrl: "https://haulawaypro.com/junk-removal-pleasant-ridge"
  });

  return <NeighborhoodTemplate neighborhoodName="Pleasant Ridge" />;
};

export default PleasantRidge;
