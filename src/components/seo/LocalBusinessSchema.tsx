
import React from 'react';

interface LocalBusinessSchemaProps {
  servicePage?: string;
  neighborhood?: string;
}

const LocalBusinessSchema: React.FC<LocalBusinessSchemaProps> = ({ 
  servicePage, 
  neighborhood 
}) => {
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
    "areaServed": [
      {
        "@type": "City",
        "name": "Cincinnati, OH"
      },
      {
        "@type": "City", 
        "name": "Blue Ash, OH"
      },
      {
        "@type": "City",
        "name": "Mason, OH"
      },
      {
        "@type": "City",
        "name": "West Chester, OH"
      }
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
