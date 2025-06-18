
import React from 'react';
import NeighborhoodTemplate from '@/components/neighborhood/NeighborhoodTemplate';
import { useMeta } from '@/hooks/useMeta';

const DeerfieldTownship = () => {
  useMeta({
    title: "Junk Removal Deerfield Township Cincinnati | HaulAway Pro Professional Service",
    description: "Professional junk removal services in Deerfield Township. Same-day pickup available. Serving fast-growing suburban area with eco-friendly disposal.",
    keywords: "Deerfield Township Cincinnati junk removal, fast-growing suburban junk removal, Cincinnati township hauling",
    canonicalUrl: "https://haulawaypro.com/junk-removal-deerfield-township"
  });

  return <NeighborhoodTemplate neighborhoodName="Deerfield Township" />;
};

export default DeerfieldTownship;
