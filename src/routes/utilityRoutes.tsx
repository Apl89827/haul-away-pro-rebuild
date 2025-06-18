
import { Route } from "react-router-dom";
import Privacy from "@/pages/Privacy";
import Terms from "@/pages/Terms";
import Accessibility from "@/pages/Accessibility";
import NotFound from "@/pages/NotFound";

export const utilityRoutes = (
  <>
    <Route path="/privacy" element={<Privacy />} />
    <Route path="/terms" element={<Terms />} />
    <Route path="/accessibility" element={<Accessibility />} />
    <Route path="*" element={<NotFound />} />
  </>
);
