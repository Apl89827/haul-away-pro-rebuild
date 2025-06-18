
import React from 'react';
import NeighborhoodTemplate from '@/components/neighborhood/NeighborhoodTemplate';
import { useMeta } from '@/hooks/useMeta';

const Corryville = () => {
  useMeta({
    title: "Junk Removal Corryville Cincinnati | HaulAway Pro Professional Service",
    description: "Professional junk removal services in Corryville. Same-day pickup available. Serving University of Cincinnati area with eco-friendly disposal.",
    keywords: "Corryville junk removal, UC area junk removal, University Cincinnati junk removal, student housing hauling",
    canonicalUrl: "https://haulawaypro.com/junk-removal-corryville"
  });

  return <NeighborhoodTemplate neighborhoodName="Corryville" />;
};

export default Corryville;
