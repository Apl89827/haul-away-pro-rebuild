
import React from 'react';
import NeighborhoodTemplate from '@/components/neighborhood/NeighborhoodTemplate';
import { useMeta } from '@/hooks/useMeta';

const SpringfieldTownship = () => {
  useMeta({
    title: "Junk Removal Springfield Township Cincinnati | HaulAway Pro Professional Service",
    description: "Professional junk removal services in Springfield Township. Same-day pickup available. Serving northern suburban area with eco-friendly disposal.",
    keywords: "Springfield Township Cincinnati junk removal, northern suburban junk removal, Cincinnati township hauling",
    canonicalUrl: "https://haulawaypro.com/junk-removal-springfield-township"
  });

  return <NeighborhoodTemplate neighborhoodName="Springfield Township" />;
};

export default SpringfieldTownship;
