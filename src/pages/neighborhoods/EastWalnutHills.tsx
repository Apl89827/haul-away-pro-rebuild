
import React from 'react';
import NeighborhoodTemplate from '@/components/neighborhood/NeighborhoodTemplate';
import { useMeta } from '@/hooks/useMeta';

const EastWalnutHills = () => {
  useMeta({
    title: "Junk Removal East Walnut Hills Cincinnati | HaulAway Pro Professional Service",
    description: "Professional junk removal services in East Walnut Hills. Same-day pickup available. Serving quiet residential neighborhood with eco-friendly disposal.",
    keywords: "East Walnut Hills junk removal, Cincinnati residential junk removal, quiet neighborhood hauling",
    canonicalUrl: "https://haulawaypro.com/junk-removal-east-walnut-hills"
  });

  return <NeighborhoodTemplate neighborhoodName="East Walnut Hills" />;
};

export default EastWalnutHills;
