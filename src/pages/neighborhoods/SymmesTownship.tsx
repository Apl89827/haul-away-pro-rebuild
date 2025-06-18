
import React from 'react';
import NeighborhoodTemplate from '@/components/neighborhood/NeighborhoodTemplate';
import { useMeta } from '@/hooks/useMeta';

const SymmesTownship = () => {
  useMeta({
    title: "Junk Removal Symmes Township Cincinnati | HaulAway Pro Professional Service",
    description: "Professional junk removal services in Symmes Township. Same-day pickup available. Serving residential township area with eco-friendly disposal.",
    keywords: "Symmes Township junk removal, Cincinnati township junk removal, residential township hauling",
    canonicalUrl: "https://haulawaypro.com/junk-removal-symmes-township"
  });

  return <NeighborhoodTemplate neighborhoodName="Symmes Township" />;
};

export default SymmesTownship;
