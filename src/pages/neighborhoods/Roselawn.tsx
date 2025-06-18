
import React from 'react';
import NeighborhoodTemplate from '@/components/neighborhood/NeighborhoodTemplate';
import { useMeta } from '@/hooks/useMeta';

const Roselawn = () => {
  useMeta({
    title: "Junk Removal Roselawn Cincinnati | HaulAway Pro Professional Service",
    description: "Professional junk removal services in Roselawn. Same-day pickup available. Serving established residential neighborhood with eco-friendly disposal.",
    keywords: "Roselawn Cincinnati junk removal, established neighborhood junk removal, Cincinnati residential hauling",
    canonicalUrl: "https://haulawaypro.com/junk-removal-roselawn"
  });

  return <NeighborhoodTemplate neighborhoodName="Roselawn" />;
};

export default Roselawn;
