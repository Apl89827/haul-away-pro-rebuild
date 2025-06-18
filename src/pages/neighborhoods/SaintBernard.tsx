
import React from 'react';
import NeighborhoodTemplate from '@/components/neighborhood/NeighborhoodTemplate';
import { useMeta } from '@/hooks/useMeta';

const SaintBernard = () => {
  useMeta({
    title: "Junk Removal Saint Bernard Cincinnati | HaulAway Pro Professional Service",
    description: "Professional junk removal services in Saint Bernard. Same-day pickup available. Serving small city with local pride and eco-friendly disposal.",
    keywords: "Saint Bernard Cincinnati junk removal, small city junk removal, local pride hauling",
    canonicalUrl: "https://haulawaypro.com/junk-removal-saint-bernard"
  });

  return <NeighborhoodTemplate neighborhoodName="Saint Bernard" />;
};

export default SaintBernard;
