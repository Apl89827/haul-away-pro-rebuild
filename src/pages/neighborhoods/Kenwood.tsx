
import React from 'react';
import NeighborhoodTemplate from '@/components/neighborhood/NeighborhoodTemplate';
import { useMeta } from '@/hooks/useMeta';

const Kenwood = () => {
  useMeta({
    title: "Junk Removal Kenwood Cincinnati | HaulAway Pro Professional Service",
    description: "Professional junk removal services in Kenwood. Same-day pickup available. Serving shopping and business district with eco-friendly disposal.",
    keywords: "Kenwood Cincinnati junk removal, shopping district junk removal, business district hauling",
    canonicalUrl: "https://haulawaypro.com/junk-removal-kenwood"
  });

  return <NeighborhoodTemplate neighborhoodName="Kenwood" />;
};

export default Kenwood;
