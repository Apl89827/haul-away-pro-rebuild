
import React from 'react';
import NeighborhoodTemplate from '@/components/neighborhood/NeighborhoodTemplate';
import { useMeta } from '@/hooks/useMeta';

const Sharonville = () => {
  useMeta({
    title: "Junk Removal Sharonville Cincinnati | HaulAway Pro Professional Service",
    description: "Professional junk removal services in Sharonville. Same-day pickup available. Serving business and residential community with eco-friendly disposal.",
    keywords: "Sharonville Cincinnati junk removal, business residential junk removal, Cincinnati community hauling",
    canonicalUrl: "https://haulawaypro.com/junk-removal-sharonville"
  });

  return <NeighborhoodTemplate neighborhoodName="Sharonville" />;
};

export default Sharonville;
