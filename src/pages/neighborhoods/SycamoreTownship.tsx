
import React from 'react';
import NeighborhoodTemplate from '@/components/neighborhood/NeighborhoodTemplate';
import { useMeta } from '@/hooks/useMeta';

const SycamoreTownship = () => {
  useMeta({
    title: "Junk Removal Sycamore Township Cincinnati | HaulAway Pro Professional Service",
    description: "Professional junk removal services in Sycamore Township. Same-day pickup available. Serving northeastern suburban area with eco-friendly disposal.",
    keywords: "Sycamore Township Cincinnati junk removal, northeastern suburban junk removal, Cincinnati township hauling",
    canonicalUrl: "https://haulawaypro.com/junk-removal-sycamore-township"
  });

  return <NeighborhoodTemplate neighborhoodName="Sycamore Township" />;
};

export default SycamoreTownship;
