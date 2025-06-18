
import React from 'react';
import NeighborhoodTemplate from '@/components/neighborhood/NeighborhoodTemplate';
import { useMeta } from '@/hooks/useMeta';

const IndianHill = () => {
  useMeta({
    title: "Junk Removal Indian Hill Cincinnati | HaulAway Pro Professional Service",
    description: "Professional junk removal services in Indian Hill. Same-day pickup available. Serving exclusive residential community with eco-friendly disposal.",
    keywords: "Indian Hill Cincinnati junk removal, exclusive community junk removal, upscale residential hauling",
    canonicalUrl: "https://haulawaypro.com/junk-removal-indian-hill"
  });

  return <NeighborhoodTemplate neighborhoodName="Indian Hill" />;
};

export default IndianHill;
