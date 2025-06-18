
import React from 'react';
import NeighborhoodTemplate from '@/components/neighborhood/NeighborhoodTemplate';
import { useMeta } from '@/hooks/useMeta';

const Newport = () => {
  useMeta({
    title: "Junk Removal Newport KY | HaulAway Pro Professional Service",
    description: "Professional junk removal services in Newport, Kentucky. Same-day pickup available. Serving residential and commercial customers with eco-friendly disposal.",
    keywords: "Newport KY junk removal, Kentucky junk removal, riverfront junk removal, Newport Kentucky hauling",
    canonicalUrl: "https://haulawaypro.com/junk-removal-newport"
  });

  return <NeighborhoodTemplate neighborhoodName="Newport" />;
};

export default Newport;
