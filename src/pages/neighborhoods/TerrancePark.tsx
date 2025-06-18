
import React from 'react';
import NeighborhoodTemplate from '@/components/neighborhood/NeighborhoodTemplate';
import { useMeta } from '@/hooks/useMeta';

const TerrancePark = () => {
  useMeta({
    title: "Junk Removal Terrace Park Cincinnati | HaulAway Pro Professional Service",
    description: "Professional junk removal services in Terrace Park. Same-day pickup available. Serving small village with tree-lined streets and eco-friendly disposal.",
    keywords: "Terrace Park Cincinnati junk removal, village junk removal, tree-lined streets hauling",
    canonicalUrl: "https://haulawaypro.com/junk-removal-terrace-park"
  });

  return <NeighborhoodTemplate neighborhoodName="Terrace Park" />;
};

export default TerrancePark;
