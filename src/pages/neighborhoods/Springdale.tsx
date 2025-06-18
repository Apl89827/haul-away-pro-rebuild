
import React from 'react';
import NeighborhoodTemplate from '@/components/neighborhood/NeighborhoodTemplate';
import { useMeta } from '@/hooks/useMeta';

const Springdale = () => {
  useMeta({
    title: "Junk Removal Springdale Cincinnati | HaulAway Pro Professional Service",
    description: "Professional junk removal services in Springdale. Same-day pickup available. Serving small suburban city with eco-friendly disposal.",
    keywords: "Springdale Cincinnati junk removal, small suburban junk removal, Cincinnati city hauling",
    canonicalUrl: "https://haulawaypro.com/junk-removal-springdale"
  });

  return <NeighborhoodTemplate neighborhoodName="Springdale" />;
};

export default Springdale;
