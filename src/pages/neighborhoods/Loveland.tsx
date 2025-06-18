
import React from 'react';
import NeighborhoodTemplate from '@/components/neighborhood/NeighborhoodTemplate';
import { useMeta } from '@/hooks/useMeta';

const Loveland = () => {
  useMeta({
    title: "Junk Removal Loveland Cincinnati | HaulAway Pro Professional Service",
    description: "Professional junk removal services in Loveland. Same-day pickup available. Serving charming riverside community with eco-friendly disposal.",
    keywords: "Loveland Cincinnati junk removal, riverside community junk removal, charming city hauling",
    canonicalUrl: "https://haulawaypro.com/junk-removal-loveland"
  });

  return <NeighborhoodTemplate neighborhoodName="Loveland" />;
};

export default Loveland;
