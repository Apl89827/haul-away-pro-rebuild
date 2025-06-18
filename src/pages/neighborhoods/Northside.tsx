
import React from 'react';
import NeighborhoodTemplate from '@/components/neighborhood/NeighborhoodTemplate';
import { useMeta } from '@/hooks/useMeta';

const Northside = () => {
  useMeta({
    title: "Junk Removal Northside Cincinnati | HaulAway Pro Professional Service",
    description: "Professional junk removal services in Northside. Same-day pickup available. Serving creative community with eco-friendly disposal.",
    keywords: "Northside Cincinnati junk removal, creative community junk removal, local charm hauling",
    canonicalUrl: "https://haulawaypro.com/junk-removal-northside"
  });

  return <NeighborhoodTemplate neighborhoodName="Northside" />;
};

export default Northside;
