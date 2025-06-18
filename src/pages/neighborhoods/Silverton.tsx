
import React from 'react';
import NeighborhoodTemplate from '@/components/neighborhood/NeighborhoodTemplate';
import { useMeta } from '@/hooks/useMeta';

const Silverton = () => {
  useMeta({
    title: "Junk Removal Silverton Cincinnati | HaulAway Pro Professional Service",
    description: "Professional junk removal services in Silverton. Same-day pickup available. Serving small city with local character and eco-friendly disposal.",
    keywords: "Silverton Cincinnati junk removal, small city junk removal, local character hauling",
    canonicalUrl: "https://haulawaypro.com/junk-removal-silverton"
  });

  return <NeighborhoodTemplate neighborhoodName="Silverton" />;
};

export default Silverton;
