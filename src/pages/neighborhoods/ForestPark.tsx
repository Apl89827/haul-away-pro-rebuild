
import React from 'react';
import NeighborhoodTemplate from '@/components/neighborhood/NeighborhoodTemplate';
import { useMeta } from '@/hooks/useMeta';

const ForestPark = () => {
  useMeta({
    title: "Junk Removal Forest Park Cincinnati | HaulAway Pro Professional Service",
    description: "Professional junk removal services in Forest Park. Same-day pickup available. Serving planned suburban city with eco-friendly disposal.",
    keywords: "Forest Park Cincinnati junk removal, planned suburban junk removal, Cincinnati city hauling",
    canonicalUrl: "https://haulawaypro.com/junk-removal-forest-park"
  });

  return <NeighborhoodTemplate neighborhoodName="Forest Park" />;
};

export default ForestPark;
