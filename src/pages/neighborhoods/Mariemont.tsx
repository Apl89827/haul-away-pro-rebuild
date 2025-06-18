
import React from 'react';
import NeighborhoodTemplate from '@/components/neighborhood/NeighborhoodTemplate';
import { useMeta } from '@/hooks/useMeta';

const Mariemont = () => {
  useMeta({
    title: "Junk Removal Mariemont Cincinnati | HaulAway Pro Professional Service",
    description: "Professional junk removal services in Mariemont. Same-day pickup available. Serving planned community with historic charm and eco-friendly disposal.",
    keywords: "Mariemont Cincinnati junk removal, planned community junk removal, historic charm hauling",
    canonicalUrl: "https://haulawaypro.com/junk-removal-mariemont"
  });

  return <NeighborhoodTemplate neighborhoodName="Mariemont" />;
};

export default Mariemont;
