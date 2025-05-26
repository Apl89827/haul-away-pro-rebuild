
import { createRoot, hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import './index.css';

// Preload critical resources
const preloadCriticalResources = () => {
  // Preload critical fonts
  const fontLink = document.createElement('link');
  fontLink.rel = 'preload';
  fontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Montserrat:wght@400;500;600;700&display=swap';
  fontLink.as = 'style';
  fontLink.crossOrigin = 'anonymous';
  document.head.appendChild(fontLink);

  // Preload hero image
  const heroImageLink = document.createElement('link');
  heroImageLink.rel = 'preload';
  heroImageLink.href = '/lovable-uploads/e9fb3e64-31d1-470c-8a69-daca627daa12.png';
  heroImageLink.as = 'image';
  document.head.appendChild(heroImageLink);

  // Preload logo
  const logoLink = document.createElement('link');
  logoLink.rel = 'preload';
  logoLink.href = '/lovable-uploads/4e32cc5f-6030-4353-b20e-54e583de4c3d.png';
  logoLink.as = 'image';
  document.head.appendChild(logoLink);
};

// Initialize performance monitoring
const initPerformanceMonitoring = () => {
  // Mark app start
  performance.mark('app-start');
  
  // Track when app is ready
  const observer = new PerformanceObserver((list) => {
    list.getEntries().forEach((entry) => {
      if (entry.name === 'app-ready') {
        const appLoadTime = entry.startTime - performance.getEntriesByName('app-start')[0].startTime;
        console.log(`App loaded in ${appLoadTime.toFixed(2)}ms`);
      }
    });
  });
  observer.observe({ entryTypes: ['mark'] });
};

// Optimize bundle loading
const optimizeBundleLoading = () => {
  // Preload critical chunks
  if ('requestIdleCallback' in window) {
    requestIdleCallback(() => {
      // Preload booking page (high conversion page)
      import('./pages/Booking.tsx');
    });
  }
};

// Initialize app
const initializeApp = () => {
  preloadCriticalResources();
  initPerformanceMonitoring();
  optimizeBundleLoading();

  const root = document.getElementById("root")!;
  const app = (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );

  // Use hydration for SSR in production
  if (import.meta.env.PROD) {
    hydrateRoot(root, app);
  } else {
    createRoot(root).render(app);
  }

  // Mark app as ready
  performance.mark('app-ready');
};

// Start the app
initializeApp();
