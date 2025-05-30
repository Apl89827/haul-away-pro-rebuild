
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, Calendar } from "lucide-react";

const ProjectsCtaSection = () => {
  return (
    <section className="section bg-brand-lightBlue">
      <div className="container-custom text-center">
        <h2 className="heading-lg mb-4 text-brand-blue">
          Ready for Your Own Transformation?
        </h2>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Let us help you reclaim your space. From small cleanouts to major estate clearances, 
          we handle projects of all sizes with the same attention to detail and care.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link to="/booking">
            <Button className="btn-primary flex items-center gap-2 text-lg px-8 py-3">
              <Calendar className="h-5 w-5" />
              Schedule Your Project
            </Button>
          </Link>
          
          <a href="tel:5137128077" className="flex items-center gap-2 text-brand-blue hover:text-brand-darkBlue transition-colors">
            <Phone className="h-5 w-5" />
            <span className="font-medium">Call (513) 712-8077</span>
          </a>
        </div>
        
        <div className="mt-8 text-sm text-gray-500">
          <p>Free estimates • Same-day service available • Fully insured</p>
        </div>
      </div>
    </section>
  );
};

export default ProjectsCtaSection;
