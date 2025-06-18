
import React from 'react';
import NeighborhoodTemplate from '@/components/neighborhood/NeighborhoodTemplate';
import { useMeta } from '@/hooks/useMeta';

const Milford = () => {
  useMeta({
    title: "Junk Removal Milford Cincinnati | HaulAway Pro Professional Service",
    description: "Professional junk removal services in Milford. Same-day pickup available. Serving small city with historic downtown and eco-friendly disposal.",
    keywords: "Milford Cincinnati junk removal, small city junk removal, historic downtown hauling",
    canonicalUrl: "https://haulawaypro.com/junk-removal-milford"
  });

  return <NeighborhoodTemplate neighborhoodName="Milford" />;
};

export default Milford;
