
import React from 'react';
import NeighborhoodTemplate from '@/components/neighborhood/NeighborhoodTemplate';
import { useMeta } from '@/hooks/useMeta';

const WestEnd = () => {
  useMeta({
    title: "Junk Removal West End Cincinnati | HaulAway Pro Professional Service",
    description: "Professional junk removal services in West End. Same-day pickup available. Serving historic African American community with eco-friendly disposal.",
    keywords: "West End Cincinnati junk removal, historic community junk removal, Cincinnati neighborhood hauling",
    canonicalUrl: "https://haulawaypro.com/junk-removal-west-end"
  });

  return <NeighborhoodTemplate neighborhoodName="West End" />;
};

export default WestEnd;
