
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const HowItWorksCtaSection = () => {
  return (
    <section className="bg-brand-blue py-16">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="heading-lg text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Book your junk removal service today and see why thousands of Cincinnati 
            residents trust Haul Away Pro for their junk removal needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/booking">
              <Button className="btn-secondary text-lg">
                Book Online Now
              </Button>
            </Link>
            <a 
              href="tel:5137128077" 
              className="inline-flex items-center justify-center gap-2 bg-white text-brand-blue font-semibold py-3 px-6 rounded-md hover:bg-white/90 transition-colors"
            >
              <Phone className="h-4 w-4" />
              Call (513) 712-8077
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksCtaSection;
