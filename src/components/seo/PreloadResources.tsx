
import { useEffect } from 'react';

const PreloadResources: React.FC = () => {
  useEffect(() => {
    // Preload critical fonts and images
    const preloadResources = [
      {
        href: '/lovable-uploads/f73755ea-bdd1-4f3e-b325-6447f9e68ea1.png',
        as: 'image',
        type: 'image/png'
      }
    ];

    preloadResources.forEach(resource => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource.href;
      link.as = resource.as;
      if (resource.type) {
        link.type = resource.type;
      }
      document.head.appendChild(link);
    });

    // DNS prefetch for external domains
    const dnsPrefetchDomains = [
      'https://online-booking.housecallpro.com',
      'https://www.google.com',
      'https://fonts.googleapis.com'
    ];

    dnsPrefetchDomains.forEach(domain => {
      const link = document.createElement('link');
      link.rel = 'dns-prefetch';
      link.href = domain;
      document.head.appendChild(link);
    });
  }, []);

  return null;
};

export default PreloadResources;
