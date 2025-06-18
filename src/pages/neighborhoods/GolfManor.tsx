
import React from 'react';
import NeighborhoodTemplate from '@/components/neighborhood/NeighborhoodTemplate';
import { useMeta } from '@/hooks/useMeta';

const GolfManor = () => {
  useMeta({
    title: "Junk Removal Golf Manor Cincinnati | HaulAway Pro Professional Service",
    description: "Professional junk removal services in Golf Manor. Same-day pickup available. Serving small village community with eco-friendly disposal.",
    keywords: "Golf Manor Cincinnati junk removal, village community junk removal, Cincinnati small town hauling",
    canonicalUrl: "https://haulawaypro.com/junk-removal-golf-manor"
  });

  return <NeighborhoodTemplate neighborhoodName="Golf Manor" />;
};

export default GolfManor;
