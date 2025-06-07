
import { useEffect } from 'react';

interface CanonicalUrlProps {
  url: string;
}

const CanonicalUrl: React.FC<CanonicalUrlProps> = ({ url }) => {
  useEffect(() => {
    // Remove existing canonical link if present
    const existingCanonical = document.querySelector('link[rel="canonical"]');
    if (existingCanonical) {
      document.head.removeChild(existingCanonical);
    }

    // Add new canonical link
    const canonical = document.createElement('link');
    canonical.rel = 'canonical';
    canonical.href = `https://haulawaypro.com${url}`;
    document.head.appendChild(canonical);

    return () => {
      // Cleanup on unmount
      const canonicalToRemove = document.querySelector('link[rel="canonical"]');
      if (canonicalToRemove) {
        document.head.removeChild(canonicalToRemove);
      }
    };
  }, [url]);

  return null;
};

export default CanonicalUrl;
