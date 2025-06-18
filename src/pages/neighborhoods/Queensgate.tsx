
import React from 'react';
import NeighborhoodTemplate from '@/components/neighborhood/NeighborhoodTemplate';
import { useMeta } from '@/hooks/useMeta';

const Queensgate = () => {
  useMeta({
    title: "Junk Removal Queensgate Cincinnati | HaulAway Pro Professional Service",
    description: "Professional junk removal services in Queensgate. Same-day pickup available. Serving industrial and logistics hub with eco-friendly disposal.",
    keywords: "Queensgate junk removal, Cincinnati industrial junk removal, logistics hub hauling",
    canonicalUrl: "https://haulawaypro.com/junk-removal-queensgate"
  });

  return <NeighborhoodTemplate neighborhoodName="Queensgate" />;
};

export default Queensgate;
