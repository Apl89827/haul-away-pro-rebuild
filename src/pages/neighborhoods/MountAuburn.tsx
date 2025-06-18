
import React from 'react';
import NeighborhoodTemplate from '@/components/neighborhood/NeighborhoodTemplate';
import { useMeta } from '@/hooks/useMeta';

const MountAuburn = () => {
  useMeta({
    title: "Junk Removal Mount Auburn Cincinnati | HaulAway Pro Professional Service",
    description: "Professional junk removal services in Mount Auburn. Same-day pickup available. Serving residential and commercial customers with eco-friendly disposal.",
    keywords: "Mount Auburn junk removal, Cincinnati neighborhood junk removal, diverse community hauling",
    canonicalUrl: "https://haulawaypro.com/junk-removal-mount-auburn"
  });

  return <NeighborhoodTemplate neighborhoodName="Mount Auburn" />;
};

export default MountAuburn;
