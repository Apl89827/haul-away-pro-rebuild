
import React from 'react';
import NeighborhoodTemplate from '@/components/neighborhood/NeighborhoodTemplate';
import { useMeta } from '@/hooks/useMeta';

const ElmwoodPlace = () => {
  useMeta({
    title: "Junk Removal Elmwood Place Cincinnati | HaulAway Pro Professional Service",
    description: "Professional junk removal services in Elmwood Place. Same-day pickup available. Serving compact residential community with eco-friendly disposal.",
    keywords: "Elmwood Place Cincinnati junk removal, compact community junk removal, residential area hauling",
    canonicalUrl: "https://haulawaypro.com/junk-removal-elmwood-place"
  });

  return <NeighborhoodTemplate neighborhoodName="Elmwood Place" />;
};

export default ElmwoodPlace;
