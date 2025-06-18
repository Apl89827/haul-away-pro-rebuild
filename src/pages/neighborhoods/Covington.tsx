
import React from 'react';
import NeighborhoodTemplate from '@/components/neighborhood/NeighborhoodTemplate';
import { useMeta } from '@/hooks/useMeta';

const Covington = () => {
  useMeta({
    title: "Junk Removal Covington KY | HaulAway Pro Professional Service",
    description: "Professional junk removal services in Covington, Kentucky. Same-day pickup available. Serving residential and commercial customers with eco-friendly disposal.",
    keywords: "Covington KY junk removal, Kentucky junk removal, historic Covington junk removal, Northern Kentucky hauling",
    canonicalUrl: "https://haulawaypro.com/junk-removal-covington"
  });

  return <NeighborhoodTemplate neighborhoodName="Covington" />;
};

export default Covington;
