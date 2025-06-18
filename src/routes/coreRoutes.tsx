
import { Route } from "react-router-dom";
import Index from "@/pages/Index";
import Pricing from "@/pages/Pricing";
import Booking from "@/pages/Booking";
import BookingFacebookPage from "@/pages/BookingFacebook";
import BookingGooglePage from "@/pages/BookingGoogle";
import Services from "@/pages/Services";
import Projects from "@/pages/Projects";
import HowItWorks from "@/pages/HowItWorks";
import ServiceAreas from "@/pages/ServiceAreas";
import Contact from "@/pages/Contact";

export const coreRoutes = (
  <>
    <Route path="/" element={<Index />} />
    <Route path="/how-it-works" element={<HowItWorks />} />
    <Route path="/pricing" element={<Pricing />} />
    <Route path="/booking" element={<Booking />} />
    <Route path="/booking-facebook" element={<BookingFacebookPage />} />
    <Route path="/booking-google" element={<BookingGooglePage />} />
    <Route path="/services" element={<Services />} />
    <Route path="/projects" element={<Projects />} />
    <Route path="/service-areas" element={<ServiceAreas />} />
    <Route path="/contact" element={<Contact />} />
  </>
);
