
import React from 'react';
import NeighborhoodTemplate from '@/components/neighborhood/NeighborhoodTemplate';
import { useMeta } from '@/hooks/useMeta';

const Madeira = () => {
  useMeta({
    title: "Junk Removal Madeira Cincinnati | HaulAway Pro Professional Service",
    description: "Professional junk removal services in Madeira. Same-day pickup available. Serving small city with family appeal and eco-friendly disposal.",
    keywords: "Madeira Cincinnati junk removal, small city junk removal, family appeal hauling",
    canonicalUrl: "https://haulawaypro.com/junk-removal-madeira"
  });

  return <NeighborhoodTemplate neighborhoodName="Madeira" />;
};

export default Madeira;
