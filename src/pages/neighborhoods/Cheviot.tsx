
import React from 'react';
import NeighborhoodTemplate from '@/components/neighborhood/NeighborhoodTemplate';
import { useMeta } from '@/hooks/useMeta';

const Cheviot = () => {
  useMeta({
    title: "Junk Removal Cheviot Cincinnati | HaulAway Pro Professional Service",
    description: "Professional junk removal services in Cheviot. Same-day pickup available. Serving working-class community with eco-friendly disposal.",
    keywords: "Cheviot Cincinnati junk removal, working-class community junk removal, Cincinnati neighborhood hauling",
    canonicalUrl: "https://haulawaypro.com/junk-removal-cheviot"
  });

  return <NeighborhoodTemplate neighborhoodName="Cheviot" />;
};

export default Cheviot;
