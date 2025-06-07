
import { useEffect } from 'react';

interface MetaData {
  title?: string;
  description?: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  canonicalUrl?: string;
}

export const useMeta = (meta: MetaData) => {
  useEffect(() => {
    // Update title
    if (meta.title) {
      document.title = meta.title;
    }

    // Update meta description
    const description = document.querySelector('meta[name="description"]');
    if (description && meta.description) {
      description.setAttribute('content', meta.description);
    }

    // Update keywords
    let keywords = document.querySelector('meta[name="keywords"]');
    if (!keywords && meta.keywords) {
      keywords = document.createElement('meta');
      keywords.setAttribute('name', 'keywords');
      document.head.appendChild(keywords);
    }
    if (keywords && meta.keywords) {
      keywords.setAttribute('content', meta.keywords);
    }

    // Update Open Graph title
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle && meta.ogTitle) {
      ogTitle.setAttribute('content', meta.ogTitle);
    }

    // Update Open Graph description
    let ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription && meta.ogDescription) {
      ogDescription.setAttribute('content', meta.ogDescription);
    }

    // Update canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical && meta.canonicalUrl) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    if (canonical && meta.canonicalUrl) {
      canonical.setAttribute('href', meta.canonicalUrl);
    }
  }, [meta]);
};
