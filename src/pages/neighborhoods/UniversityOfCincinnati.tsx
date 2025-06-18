
import React from 'react';
import NeighborhoodTemplate from '@/components/neighborhood/NeighborhoodTemplate';
import { useMeta } from '@/hooks/useMeta';

const UniversityOfCincinnati = () => {
  useMeta({
    title: "Junk Removal University of Cincinnati | HaulAway Pro Professional Service",
    description: "Professional junk removal services at University of Cincinnati campus area. Same-day pickup available. Serving students and staff with eco-friendly disposal.",
    keywords: "UC junk removal, University Cincinnati junk removal, campus junk removal, student moving services",
    canonicalUrl: "https://haulawaypro.com/junk-removal-university-of-cincinnati"
  });

  return <NeighborhoodTemplate neighborhoodName="University of Cincinnati" />;
};

export default UniversityOfCincinnati;
