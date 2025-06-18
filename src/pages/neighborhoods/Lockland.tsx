
import React from 'react';
import NeighborhoodTemplate from '@/components/neighborhood/NeighborhoodTemplate';
import { useMeta } from '@/hooks/useMeta';

const Lockland = () => {
  useMeta({
    title: "Junk Removal Lockland Cincinnati | HaulAway Pro Professional Service",
    description: "Professional junk removal services in Lockland. Same-day pickup available. Serving small city with industrial heritage and eco-friendly disposal.",
    keywords: "Lockland Cincinnati junk removal, small city junk removal, industrial heritage hauling",
    canonicalUrl: "https://haulawaypro.com/junk-removal-lockland"
  });

  return <NeighborhoodTemplate neighborhoodName="Lockland" />;
};

export default Lockland;
