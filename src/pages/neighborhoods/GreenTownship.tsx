
import React from 'react';
import NeighborhoodTemplate from '@/components/neighborhood/NeighborhoodTemplate';
import { useMeta } from '@/hooks/useMeta';

const GreenTownship = () => {
  useMeta({
    title: "Junk Removal Green Township Cincinnati | HaulAway Pro Professional Service",
    description: "Professional junk removal services in Green Township. Same-day pickup available. Serving growing suburban community with eco-friendly disposal.",
    keywords: "Green Township Cincinnati junk removal, growing suburban junk removal, Cincinnati township hauling",
    canonicalUrl: "https://haulawaypro.com/junk-removal-green-township"
  });

  return <NeighborhoodTemplate neighborhoodName="Green Township" />;
};

export default GreenTownship;
