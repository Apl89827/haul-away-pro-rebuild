
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Pricing from "./pages/Pricing";
import Booking from "./pages/Booking";
import Services from "./pages/Services";
import HowItWorks from "./pages/HowItWorks";
import ServiceAreas from "./pages/ServiceAreas";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Accessibility from "./pages/Accessibility";
import NotFound from "./pages/NotFound";

// Neighborhood pages
import OverTheRhine from "./pages/neighborhoods/OverTheRhine";
import Downtown from "./pages/neighborhoods/Downtown";
import HydePark from "./pages/neighborhoods/HydePark";
import Oakley from "./pages/neighborhoods/Oakley";
import MountAdams from "./pages/neighborhoods/MountAdams";
import Clifton from "./pages/neighborhoods/Clifton";
import WalnutHills from "./pages/neighborhoods/WalnutHills";
import BlueAsh from "./pages/neighborhoods/BlueAsh";
import Mason from "./pages/neighborhoods/Mason";
import WestChester from "./pages/neighborhoods/WestChester";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
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
        
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
