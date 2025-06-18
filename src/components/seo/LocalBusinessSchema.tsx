
import React from 'react';

interface LocalBusinessSchemaProps {
  servicePage?: string;
  neighborhood?: string;
}

const LocalBusinessSchema: React.FC<LocalBusinessSchemaProps> = ({ 
  servicePage, 
  neighborhood 
}) => {
  // All 59 service areas from ServiceAreasList
  const allServiceAreas = [
    // Cincinnati Neighborhoods
    "Over-the-Rhine, OH", "Downtown Cincinnati, OH", "The Banks, OH", "Newport, KY", "Covington, KY",
    "Hyde Park, OH", "Oakley, OH", "Mount Adams, OH", "Clifton, OH", "Walnut Hills, OH",
    "Mount Auburn, OH", "Corryville, OH", "University of Cincinnati, OH", "Northside, OH", "Camp Washington, OH",
    "Queensgate, OH", "West End, OH", "East Walnut Hills, OH", "Evanston, OH", "Avondale, OH",
    "Bond Hill, OH", "Roselawn, OH", "Golf Manor, OH", "Pleasant Ridge, OH", "Kennedy Heights, OH",
    "Silverton, OH", "Deer Park, OH", "Blue Ash, OH", "Montgomery, OH", "Symmes Township, OH",
    "Anderson Township, OH", "Mariemont, OH", "Terrace Park, OH", "Indian Hill, OH", "Madeira, OH",
    "Wyoming, OH", "Lockland, OH", "Elmwood Place, OH", "Saint Bernard, OH", "Norwood, OH",
    "Cheviot, OH", "Delhi Township, OH", "Green Township, OH", "Colerain Township, OH", "Springfield Township, OH",
    "Finneytown, OH", "Forest Park, OH", "Springdale, OH", "Sharonville, OH", "Evendale, OH",
    // Nearby Areas
    "Mason, OH", "West Chester, OH", "Fairfield, OH", "Hamilton, OH", "Loveland, OH",
    "Milford, OH", "Kenwood, OH", "Sycamore Township, OH", "Deerfield Township, OH"
  ];

  const baseSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://haulawaypro.com/#business",
    "name": "Haul Away Pro",
    "image": "https://haulawaypro.com/lovable-uploads/f73755ea-bdd1-4f3e-b325-6447f9e68ea1.png",
    "description": `Professional junk removal services in ${neighborhood || 'Cincinnati'}, Ohio. Fast, fair, and eco-friendly disposal.`,
    "url": "https://haulawaypro.com",
    "telephone": "(513) 712-8077",
    "email": "contact@haulawaypro.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Cincinnati",
      "addressRegion": "OH",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 39.1031,
      "longitude": -84.5120
    },
    "areaServed": allServiceAreas.map(area => ({
      "@type": "City",
      "name": area
    })),
    "serviceType": [
      "Junk Removal",
      "Furniture Removal",
      "Appliance Removal",
      "Electronic Waste Removal",
      "Construction Debris Removal",
      "Estate Cleanout Services",
      "Commercial Junk Removal",
      "Residential Junk Removal",
      "Light Demolition Services"
    ],
    "openingHours": "Mo-Su 07:00-21:00",
    "priceRange": "$$",
    "paymentAccepted": ["Cash", "Credit Card", "Check"],
    "currenciesAccepted": "USD",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "150",
      "bestRating": "5",
      "worstRating": "1"
    },
    "sameAs": [
      "https://www.facebook.com/haulawaypro",
      "https://www.google.com/maps/place/HaulAway+Pro"
    ]
  };

  // Add service-specific schema if on a service page
  if (servicePage) {
    const serviceSchema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": servicePage,
      "provider": {
        "@type": "LocalBusiness",
        "name": "Haul Away Pro"
      },
      "areaServed": baseSchema.areaServed,
      "availableChannel": {
        "@type": "ServiceChannel",
        "serviceUrl": "https://haulawaypro.com/booking",
        "servicePhone": "(513) 712-8077"
      }
    };

    return (
      <>
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(baseSchema, null, 2) }}
        />
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema, null, 2) }}
        />
      </>
    );
  }

  return (
    <script 
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(baseSchema, null, 2) }}
    />
  );
};

export default LocalBusinessSchema;
