
import React from "react";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const CtaSection = () => {
  return (
    <section className="bg-brand-blue py-16">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="heading-lg text-white mb-6">
            Ready to Clear the Clutter?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Get a free estimate for your junk removal project and experience our 
            fast, friendly, and fair service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-secondary text-lg">
              Get Your Free Estimate
            </Button>
            <a 
              href="tel:5135551234" 
              className="inline-flex items-center justify-center gap-2 bg-white text-brand-blue font-semibold py-3 px-6 rounded-md hover:bg-white/90 transition-colors"
            >
              <Phone className="h-4 w-4" />
              Call (513) 555-1234
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
