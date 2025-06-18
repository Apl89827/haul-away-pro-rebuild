
import React from 'react';
import NeighborhoodTemplate from '@/components/neighborhood/NeighborhoodTemplate';
import { useMeta } from '@/hooks/useMeta';

const ColerainTownship = () => {
  useMeta({
    title: "Junk Removal Colerain Township Cincinnati | HaulAway Pro Professional Service",
    description: "Professional junk removal services in Colerain Township. Same-day pickup available. Serving large suburban township with eco-friendly disposal.",
    keywords: "Colerain Township Cincinnati junk removal, large suburban junk removal, Cincinnati township hauling",
    canonicalUrl: "https://haulawaypro.com/junk-removal-colerain-township"
  });

  return <NeighborhoodTemplate neighborhoodName="Colerain Township" />;
};

export default ColerainTownship;
