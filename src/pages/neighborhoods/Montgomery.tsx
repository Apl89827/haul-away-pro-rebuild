
import React from 'react';
import NeighborhoodTemplate from '@/components/neighborhood/NeighborhoodTemplate';
import { useMeta } from '@/hooks/useMeta';

const Montgomery = () => {
  useMeta({
    title: "Junk Removal Montgomery Cincinnati | HaulAway Pro Professional Service",
    description: "Professional junk removal services in Montgomery. Same-day pickup available. Serving upscale suburban community with eco-friendly disposal.",
    keywords: "Montgomery Cincinnati junk removal, upscale suburban junk removal, Montgomery Ohio hauling",
    canonicalUrl: "https://haulawaypro.com/junk-removal-montgomery"
  });

  return <NeighborhoodTemplate neighborhoodName="Montgomery" />;
};

export default Montgomery;
