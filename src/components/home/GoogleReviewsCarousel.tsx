
import React, { useEffect } from "react";

const GoogleReviewsCarousel = () => {
  useEffect(() => {
    // Load Elfsight platform script if not already loaded
    if (!document.querySelector('script[src="https://static.elfsight.com/platform/platform.js"]')) {
      const script = document.createElement('script');
      script.src = 'https://static.elfsight.com/platform/platform.js';
      script.async = true;
      document.head.appendChild(script);
    }
  }, []);

  return (
    <div className="max-w-5xl mx-auto">
      <div className="flex items-center justify-center mb-6">
        <div className="flex items-center space-x-2">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" 
            alt="Google"
            className="w-6 h-6"
          />
          <span className="text-lg font-semibold">Google Reviews</span>
        </div>
      </div>

      {/* Elfsight Google Reviews Widget */}
      <div className="elfsight-app-d3c2f2f4-5b17-4a9f-bfea-57f6452c5c28" data-elfsight-app-lazy></div>

      <div className="text-center mt-6">
        <a 
          href="https://www.google.com/maps/place/HaulAway+Pro/@39.37692295,-84.3982185,15z/data=!4m6!3m5!1s0x2dc6f226382aa093:0xbe7b2fe630d2e4b3!8m2!3d39.37692295!4d-84.3982185!16s%2Fg%2F11y3k8yzqr?entry=ttu"
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand-blue hover:text-brand-darkBlue underline text-sm font-medium"
        >
          View all reviews on Google
        </a>
      </div>
    </div>
  );
};

export default GoogleReviewsCarousel;
