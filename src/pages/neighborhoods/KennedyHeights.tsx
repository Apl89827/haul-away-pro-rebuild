
import React from 'react';
import NeighborhoodTemplate from '@/components/neighborhood/NeighborhoodTemplate';
import { useMeta } from '@/hooks/useMeta';

const KennedyHeights = () => {
  useMeta({
    title: "Junk Removal Kennedy Heights Cincinnati | HaulAway Pro Professional Service",
    description: "Professional junk removal services in Kennedy Heights. Same-day pickup available. Serving close-knit residential community with eco-friendly disposal.",
    keywords: "Kennedy Heights Cincinnati junk removal, close-knit community junk removal, Cincinnati residential hauling",
    canonicalUrl: "https://haulawaypro.com/junk-removal-kennedy-heights"
  });

  return <NeighborhoodTemplate neighborhoodName="Kennedy Heights" />;
};

export default KennedyHeights;
