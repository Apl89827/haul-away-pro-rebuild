
import React from 'react';

interface BusinessStructuredDataProps {
  name?: string;
  description?: string;
  telephone?: string;
  email?: string;
  address?: {
    streetAddress?: string;
    addressLocality: string;
    addressRegion: string;
    postalCode?: string;
    addressCountry: string;
  };
  serviceArea?: string[];
  services?: Array<{
    name: string;
    description: string;
    url?: string;
  }>;
  rating?: {
    ratingValue: number;
    reviewCount: number;
  };
}

const BusinessStructuredData: React.FC<BusinessStructuredDataProps> = ({
  name = "Haul Away Pro",
  description = "Fast, fair, and eco-friendly junk removal services in Greater Cincinnati. Same-day service available for furniture, appliances, electronics, and more.",
  telephone = "(513) 712-8077",
  email = "contact@haulawaypro.com",
  address = {
    addressLocality: "Cincinnati",
    addressRegion: "OH",
    addressCountry: "US"
  },
  serviceArea = [
    "Cincinnati, OH",
    "Blue Ash, OH", 
    "Mason, OH",
    "West Chester, OH",
    "Hyde Park, OH",
    "Oakley, OH",
    "Over-the-Rhine, OH",
    "Downtown Cincinnati, OH",
    "Mount Adams, OH",
    "Clifton, OH",
    "Walnut Hills, OH"
  ],
  services = [
    {
      name: "Furniture Junk Removal",
      description: "Professional furniture removal and disposal services"
    },
    {
      name: "Appliance Removal",
      description: "Safe appliance removal and eco-friendly disposal"
    },
    {
      name: "Electronic Waste Removal", 
      description: "Responsible electronics recycling and disposal"
    },
    {
      name: "Estate Cleanout Services",
      description: "Complete estate and property cleanout services"
    }
  ],
  rating = {
    ratingValue: 4.9,
    reviewCount: 150
  }
}) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://haulawaypro.com/#business",
    "name": name,
    "description": description,
    "url": "https://haulawaypro.com",
    "telephone": telephone,
    "email": email,
    "address": {
      "@type": "PostalAddress",
      ...address
    },
    "areaServed": serviceArea.map(area => ({
      "@type": "City",
      "name": area
    })),
    "serviceType": services.map(service => service.name),
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Junk Removal Services",
      "itemListElement": services.map((service, index) => ({
        "@type": "Offer",
        "position": index + 1,
        "itemOffered": {
          "@type": "Service",
          "name": service.name,
          "description": service.description,
          "provider": {
            "@type": "LocalBusiness",
            "name": name
          }
        }
      }))
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": rating.ratingValue,
      "reviewCount": rating.reviewCount,
      "bestRating": 5,
      "worstRating": 1
    },
    "openingHours": "Mo-Su 07:00-21:00",
    "priceRange": "$$",
    "paymentAccepted": "Cash, Credit Card, Check",
    "currenciesAccepted": "USD"
  };

  return (
    <script 
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData, null, 2) }}
    />
  );
};

export default BusinessStructuredData;
