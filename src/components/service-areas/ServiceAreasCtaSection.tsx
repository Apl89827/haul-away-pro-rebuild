
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const ServiceAreasCtaSection = () => {
  return (
    <section className="bg-brand-blue py-16">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="heading-lg text-white mb-6">
            Ready to Schedule Your Junk Removal?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Serving Cincinnati and surrounding areas with same-day and next-day service. 
            Book online or call for immediate assistance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/booking">
              <Button className="btn-secondary text-lg">
                Book Online Now
              </Button>
            </Link>
            <a 
              href="tel:5138762858" 
              className="inline-flex items-center justify-center gap-2 bg-white text-brand-blue font-semibold py-3 px-6 rounded-md hover:bg-white/90 transition-colors"
            >
              <Phone className="h-4 w-4" />
              Call (513) 876-2858
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreasCtaSection;
