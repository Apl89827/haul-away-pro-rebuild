
import React from 'react';
import NeighborhoodTemplate from '@/components/neighborhood/NeighborhoodTemplate';
import { useMeta } from '@/hooks/useMeta';

const Norwood = () => {
  useMeta({
    title: "Junk Removal Norwood Cincinnati | HaulAway Pro Professional Service",
    description: "Professional junk removal services in Norwood. Same-day pickup available. Serving independent city within Cincinnati with eco-friendly disposal.",
    keywords: "Norwood Cincinnati junk removal, independent city junk removal, Cincinnati enclave hauling",
    canonicalUrl: "https://haulawaypro.com/junk-removal-norwood"
  });

  return <NeighborhoodTemplate neighborhoodName="Norwood" />;
};

export default Norwood;
