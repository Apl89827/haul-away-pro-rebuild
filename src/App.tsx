
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";

// Lazy load all pages for better performance
const Index = lazy(() => import("./pages/Index"));
const Pricing = lazy(() => import("./pages/Pricing"));
const Booking = lazy(() => import("./pages/Booking"));
const Services = lazy(() => import("./pages/Services"));
const HowItWorks = lazy(() => import("./pages/HowItWorks"));
const ServiceAreas = lazy(() => import("./pages/ServiceAreas"));
const Contact = lazy(() => import("./pages/Contact"));
const Blog = lazy(() => import("./pages/Blog"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Terms = lazy(() => import("./pages/Terms"));
const Accessibility = lazy(() => import("./pages/Accessibility"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Lazy load neighborhood pages
const OverTheRhine = lazy(() => import("./pages/neighborhoods/OverTheRhine"));
const Downtown = lazy(() => import("./pages/neighborhoods/Downtown"));
const HydePark = lazy(() => import("./pages/neighborhoods/HydePark"));
const Oakley = lazy(() => import("./pages/neighborhoods/Oakley"));
const MountAdams = lazy(() => import("./pages/neighborhoods/MountAdams"));
const Clifton = lazy(() => import("./pages/neighborhoods/Clifton"));
const WalnutHills = lazy(() => import("./pages/neighborhoods/WalnutHills"));
const BlueAsh = lazy(() => import("./pages/neighborhoods/BlueAsh"));
const Mason = lazy(() => import("./pages/neighborhoods/Mason"));
const WestChester = lazy(() => import("./pages/neighborhoods/WestChester"));

// Performance-optimized loading component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-brand-lightBlue to-white">
    <div className="text-center">
      <div className="w-16 h-16 border-4 border-brand-blue border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
      <p className="text-brand-blue font-medium">Loading...</p>
    </div>
  </div>
);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      gcTime: 10 * 60 * 1000, // 10 minutes
    },
  },
});

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/services" element={<Services />} />
          <Route path="/service-areas" element={<ServiceAreas />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/accessibility" element={<Accessibility />} />
          
          {/* Neighborhood SEO pages */}
          <Route path="/junk-removal-over-the-rhine" element={<OverTheRhine />} />
          <Route path="/junk-removal-downtown-cincinnati" element={<Downtown />} />
          <Route path="/junk-removal-hyde-park" element={<HydePark />} />
          <Route path="/junk-removal-oakley" element={<Oakley />} />
          <Route path="/junk-removal-mount-adams" element={<MountAdams />} />
          <Route path="/junk-removal-clifton" element={<Clifton />} />
          <Route path="/junk-removal-walnut-hills" element={<WalnutHills />} />
          <Route path="/junk-removal-blue-ash" element={<BlueAsh />} />
          <Route path="/junk-removal-mason" element={<Mason />} />
          <Route path="/junk-removal-west-chester" element={<WestChester />} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
