
import React from 'react';
import NeighborhoodTemplate from '@/components/neighborhood/NeighborhoodTemplate';
import { useMeta } from '@/hooks/useMeta';

const Hamilton = () => {
  useMeta({
    title: "Junk Removal Hamilton Ohio | HaulAway Pro Professional Service",
    description: "Professional junk removal services in Hamilton, Ohio. Same-day pickup available. Serving historic county seat with eco-friendly disposal.",
    keywords: "Hamilton Ohio junk removal, historic county seat junk removal, Hamilton city hauling",
    canonicalUrl: "https://haulawaypro.com/junk-removal-hamilton"
  });

  return <NeighborhoodTemplate neighborhoodName="Hamilton" />;
};

export default Hamilton;
