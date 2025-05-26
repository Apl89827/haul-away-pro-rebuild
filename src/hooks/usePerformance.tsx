
import { useEffect } from 'react';

interface PerformanceMetrics {
  FCP?: number;
  LCP?: number;
  FID?: number;
  CLS?: number;
  TTFB?: number;
}

export const usePerformance = () => {
  useEffect(() => {
    // Track Core Web Vitals
    const trackMetrics = () => {
      const metrics: PerformanceMetrics = {};

      // First Contentful Paint
      const fcpEntry = performance.getEntriesByName('first-contentful-paint')[0];
      if (fcpEntry) {
        metrics.FCP = fcpEntry.startTime;
      }

      // Time to First Byte
      const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigationEntry) {
        metrics.TTFB = navigationEntry.responseStart - navigationEntry.requestStart;
      }

      // Log metrics for analysis
      console.log('Performance Metrics:', metrics);
      
      // In production, send to analytics
      if (import.meta.env.PROD) {
        // Send to your analytics service
        // Example: analytics.track('performance', metrics);
      }
    };

    // Track when page is fully loaded
    if (document.readyState === 'complete') {
      trackMetrics();
    } else {
      window.addEventListener('load', trackMetrics);
      return () => window.removeEventListener('load', trackMetrics);
    }
  }, []);

  return null;
};
