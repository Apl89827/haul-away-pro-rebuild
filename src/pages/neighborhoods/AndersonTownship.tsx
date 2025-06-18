
import React from 'react';
import NeighborhoodTemplate from '@/components/neighborhood/NeighborhoodTemplate';
import { useMeta } from '@/hooks/useMeta';

const AndersonTownship = () => {
  useMeta({
    title: "Junk Removal Anderson Township Cincinnati | HaulAway Pro Professional Service",
    description: "Professional junk removal services in Anderson Township. Same-day pickup available. Serving large suburban township with eco-friendly disposal.",
    keywords: "Anderson Township junk removal, Cincinnati township junk removal, suburban township hauling",
    canonicalUrl: "https://haulawaypro.com/junk-removal-anderson-township"
  });

  return <NeighborhoodTemplate neighborhoodName="Anderson Township" />;
};

export default AndersonTownship;
