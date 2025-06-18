
import React from 'react';
import NeighborhoodTemplate from '@/components/neighborhood/NeighborhoodTemplate';
import { useMeta } from '@/hooks/useMeta';

const Finneytown = () => {
  useMeta({
    title: "Junk Removal Finneytown Cincinnati | HaulAway Pro Professional Service",
    description: "Professional junk removal services in Finneytown. Same-day pickup available. Serving unincorporated community with eco-friendly disposal.",
    keywords: "Finneytown Cincinnati junk removal, unincorporated community junk removal, Cincinnati area hauling",
    canonicalUrl: "https://haulawaypro.com/junk-removal-finneytown"
  });

  return <NeighborhoodTemplate neighborhoodName="Finneytown" />;
};

export default Finneytown;
