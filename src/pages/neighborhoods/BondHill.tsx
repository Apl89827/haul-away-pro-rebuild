
import React from 'react';
import NeighborhoodTemplate from '@/components/neighborhood/NeighborhoodTemplate';
import { useMeta } from '@/hooks/useMeta';

const BondHill = () => {
  useMeta({
    title: "Junk Removal Bond Hill Cincinnati | HaulAway Pro Professional Service",
    description: "Professional junk removal services in Bond Hill. Same-day pickup available. Serving residential area with community focus and eco-friendly disposal.",
    keywords: "Bond Hill Cincinnati junk removal, residential community junk removal, Cincinnati neighborhood hauling",
    canonicalUrl: "https://haulawaypro.com/junk-removal-bond-hill"
  });

  return <NeighborhoodTemplate neighborhoodName="Bond Hill" />;
};

export default BondHill;
