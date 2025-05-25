
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const HowItWorksHero = () => {
  return (
    <section className="pt-32 pb-16 bg-gradient-to-br from-brand-lightBlue to-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="heading-xl mb-6">
            How Our Junk Removal Service Works
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Getting rid of unwanted items has never been easier. Our simple, 
            stress-free process ensures your junk is removed quickly and responsibly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/booking">
              <Button className="btn-primary text-lg">
                Get Started Now
              </Button>
            </Link>
            <a 
              href="tel:5138762858" 
              className="inline-flex items-center justify-center gap-2 bg-white border-2 border-brand-blue text-brand-blue font-semibold py-3 px-6 rounded-md hover:bg-brand-blue hover:text-white transition-colors"
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

export default HowItWorksHero;
