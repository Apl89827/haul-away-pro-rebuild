
import React from 'react';
import NeighborhoodTemplate from '@/components/neighborhood/NeighborhoodTemplate';
import { useMeta } from '@/hooks/useMeta';

const Wyoming = () => {
  useMeta({
    title: "Junk Removal Wyoming Cincinnati | HaulAway Pro Professional Service",
    description: "Professional junk removal services in Wyoming. Same-day pickup available. Serving historic suburb with character and eco-friendly disposal.",
    keywords: "Wyoming Cincinnati junk removal, historic suburb junk removal, character community hauling",
    canonicalUrl: "https://haulawaypro.com/junk-removal-wyoming"
  });

  return <NeighborhoodTemplate neighborhoodName="Wyoming" />;
};

export default Wyoming;
