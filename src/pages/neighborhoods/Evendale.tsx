
import React from 'react';
import NeighborhoodTemplate from '@/components/neighborhood/NeighborhoodTemplate';
import { useMeta } from '@/hooks/useMeta';

const Evendale = () => {
  useMeta({
    title: "Junk Removal Evendale Cincinnati | HaulAway Pro Professional Service",
    description: "Professional junk removal services in Evendale. Same-day pickup available. Serving small village community with eco-friendly disposal.",
    keywords: "Evendale Cincinnati junk removal, small village junk removal, Cincinnati community hauling",
    canonicalUrl: "https://haulawaypro.com/junk-removal-evendale"
  });

  return <NeighborhoodTemplate neighborhoodName="Evendale" />;
};

export default Evendale;
