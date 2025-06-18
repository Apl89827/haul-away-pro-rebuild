
import React from 'react';
import NeighborhoodTemplate from '@/components/neighborhood/NeighborhoodTemplate';
import { useMeta } from '@/hooks/useMeta';

const TheBanks = () => {
  useMeta({
    title: "Junk Removal The Banks Cincinnati | HaulAway Pro Professional Service",
    description: "Professional junk removal services in The Banks entertainment district. Same-day pickup available. Serving residential and commercial customers with eco-friendly disposal.",
    keywords: "The Banks junk removal, Cincinnati waterfront junk removal, entertainment district hauling",
    canonicalUrl: "https://haulawaypro.com/junk-removal-the-banks"
  });

  return <NeighborhoodTemplate neighborhoodName="The Banks" />;
};

export default TheBanks;
