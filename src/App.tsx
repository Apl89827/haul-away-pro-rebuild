
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import { coreRoutes } from "./routes/coreRoutes";
import { serviceRoutes } from "./routes/serviceRoutes";
import { neighborhoodRoutes } from "./routes/neighborhoodRoutes";
import { blogRoutes } from "./routes/blogRoutes";
import { utilityRoutes } from "./routes/utilityRoutes";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <ScrollToTop />
      <Toaster />
      <Sonner />
      <Routes>
        {coreRoutes}
        {serviceRoutes}
        {neighborhoodRoutes}
        {blogRoutes}
        {utilityRoutes}
      </Routes>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
