
import React from 'react';
import NeighborhoodTemplate from '@/components/neighborhood/NeighborhoodTemplate';
import { useMeta } from '@/hooks/useMeta';

const CampWashington = () => {
  useMeta({
    title: "Junk Removal Camp Washington Cincinnati | HaulAway Pro Professional Service",
    description: "Professional junk removal services in Camp Washington. Same-day pickup available. Serving industrial area with growing arts scene.",
    keywords: "Camp Washington junk removal, Cincinnati industrial junk removal, arts district hauling",
    canonicalUrl: "https://haulawaypro.com/junk-removal-camp-washington"
  });

  return <NeighborhoodTemplate neighborhoodName="Camp Washington" />;
};

export default CampWashington;
