
import React from 'react';
import NeighborhoodTemplate from '@/components/neighborhood/NeighborhoodTemplate';
import { useMeta } from '@/hooks/useMeta';

const Fairfield = () => {
  useMeta({
    title: "Junk Removal Fairfield Cincinnati | HaulAway Pro Professional Service",
    description: "Professional junk removal services in Fairfield. Same-day pickup available. Serving mid-sized city with parks and eco-friendly disposal.",
    keywords: "Fairfield Cincinnati junk removal, mid-sized city junk removal, parks community hauling",
    canonicalUrl: "https://haulawaypro.com/junk-removal-fairfield"
  });

  return <NeighborhoodTemplate neighborhoodName="Fairfield" />;
};

export default Fairfield;
