
import React from 'react';
import NeighborhoodTemplate from '@/components/neighborhood/NeighborhoodTemplate';
import { useMeta } from '@/hooks/useMeta';

const DelhiTownship = () => {
  useMeta({
    title: "Junk Removal Delhi Township Cincinnati | HaulAway Pro Professional Service",
    description: "Professional junk removal services in Delhi Township. Same-day pickup available. Serving western suburban area with eco-friendly disposal.",
    keywords: "Delhi Township Cincinnati junk removal, western suburban junk removal, Cincinnati township hauling",
    canonicalUrl: "https://haulawaypro.com/junk-removal-delhi-township"
  });

  return <NeighborhoodTemplate neighborhoodName="Delhi Township" />;
};

export default DelhiTownship;
