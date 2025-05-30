
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, Calendar } from "lucide-react";

const ServicesBanner = () => {
  return (
    <section className="bg-brand-green py-8">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold text-white mb-2">
              Ready to Clear Your Space?
            </h3>
            <p className="text-white/90">
              Get your free estimate today and see why Cincinnati trusts HaulAway Pro
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link to="/booking">
              <Button className="bg-white text-brand-green hover:bg-white/90 font-semibold">
                <Calendar className="h-4 w-4" />
                Book Online
              </Button>
            </Link>
            <a 
              href="tel:5137128077" 
              className="inline-flex items-center justify-center gap-2 bg-brand-blue text-white font-semibold py-2 px-4 rounded-md hover:bg-brand-darkBlue transition-colors"
            >
              <Phone className="h-4 w-4" />
              (513) 712-8077
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesBanner;
