
import React from 'react';
import NeighborhoodTemplate from '@/components/neighborhood/NeighborhoodTemplate';
import { useMeta } from '@/hooks/useMeta';

const DeerPark = () => {
  useMeta({
    title: "Junk Removal Deer Park Cincinnati | HaulAway Pro Professional Service",
    description: "Professional junk removal services in Deer Park. Same-day pickup available. Serving suburban residential area with eco-friendly disposal.",
    keywords: "Deer Park Cincinnati junk removal, suburban junk removal, residential area hauling",
    canonicalUrl: "https://haulawaypro.com/junk-removal-deer-park"
  });

  return <NeighborhoodTemplate neighborhoodName="Deer Park" />;
};

export default DeerPark;
