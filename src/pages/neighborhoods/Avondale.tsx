
import React from 'react';
import NeighborhoodTemplate from '@/components/neighborhood/NeighborhoodTemplate';
import { useMeta } from '@/hooks/useMeta';

const Avondale = () => {
  useMeta({
    title: "Junk Removal Avondale Cincinnati | HaulAway Pro Professional Service",
    description: "Professional junk removal services in Avondale. Same-day pickup available. Serving diverse neighborhood with rich history and eco-friendly disposal.",
    keywords: "Avondale Cincinnati junk removal, diverse neighborhood junk removal, historic community hauling",
    canonicalUrl: "https://haulawaypro.com/junk-removal-avondale"
  });

  return <NeighborhoodTemplate neighborhoodName="Avondale" />;
};

export default Avondale;
